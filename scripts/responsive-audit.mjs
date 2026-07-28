import { spawn } from 'node:child_process'
import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const baseUrl = process.env.AUDIT_BASE_URL || 'http://127.0.0.1:3000'
const port = 9333
const profile = mkdtempSync(join(tmpdir(), 'west-seneca-audit-'))
const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--no-first-run',
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${profile}`,
  'about:blank',
], { stdio: 'ignore' })

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
let version
for (let attempt = 0; attempt < 30; attempt += 1) {
  try {
    const response = await fetch(`http://127.0.0.1:${port}/json/version`)
    if (response.ok) {
      version = await response.json()
      break
    }
  } catch {}
  await delay(200)
}

if (!version) {
  chrome.kill()
  throw new Error('Chrome DevTools did not become available')
}

const socket = new WebSocket(version.webSocketDebuggerUrl)
await new Promise((resolve, reject) => {
  socket.addEventListener('open', resolve, { once: true })
  socket.addEventListener('error', reject, { once: true })
})

let requestId = 0
const pending = new Map()
socket.addEventListener('message', ({ data }) => {
  const message = JSON.parse(data)
  if (!message.id || !pending.has(message.id)) return
  const { resolve, reject } = pending.get(message.id)
  pending.delete(message.id)
  if (message.error) reject(new Error(message.error.message))
  else resolve(message.result)
})

function command(method, params = {}, sessionId) {
  requestId += 1
  return new Promise((resolve, reject) => {
    pending.set(requestId, { resolve, reject })
    socket.send(JSON.stringify({ id: requestId, method, params, ...(sessionId ? { sessionId } : {}) }))
  })
}

const routes = [
  '/', '/services', '/services/tree-removal', '/services/tree-trimming',
  '/services/stump-grinding', '/services/storm-cleanup', '/our-process',
  '/why-us', '/contact', '/privacy-policy', '/terms-conditions',
]
const widths = process.env.AUDIT_QUICK
  ? [390, 1440]
  : [320, 360, 375, 390, 414, 480, 600, 768, 820, 1024, 1280, 1366, 1440, 1600, 1920, 2560]
const failures = []
const { targetId } = await command('Target.createTarget', { url: 'about:blank' })
const attached = await command('Target.attachToTarget', { targetId, flatten: true })
const sessionId = attached.sessionId
await command('Page.enable', {}, sessionId)

for (const width of widths) {
  await command('Emulation.setDeviceMetricsOverride', {
    width,
    height: width <= 768 ? 900 : 960,
    deviceScaleFactor: 1,
    mobile: width <= 768,
  }, sessionId)

  for (const route of routes) {
    await command('Page.navigate', { url: `${baseUrl}${route}` }, sessionId)
    await delay(baseUrl.startsWith('https://') ? 1800 : 450)
    const result = await command('Runtime.evaluate', {
      returnByValue: true,
      expression: `(() => {
        const root = document.documentElement;
        const menu = document.querySelector('.menu-button');
        const menuBox = menu?.getBoundingClientRect();
        return {
          route: location.pathname,
          viewport: innerWidth,
          scrollWidth: root.scrollWidth,
          h1: document.querySelectorAll('h1').length,
          canonical: document.querySelector('link[rel="canonical"]')?.href || '',
          privacy: Boolean(document.querySelector('footer a[href="/privacy-policy"]')),
          terms: Boolean(document.querySelector('footer a[href="/terms-conditions"]')),
          formEmbed: Boolean(document.querySelector('iframe[src*="4JzGDJCOq5EsGZxtPaiM"]')),
          runtimeScript: Boolean(document.querySelector('script[src="/firebase-runtime-v3.js"]')),
          runtimeActive: document.documentElement.dataset.firebaseRuntime === 'active',
          menuVisible: menu ? getComputedStyle(menu).display !== 'none' : false,
          menuWidth: menuBox?.width || 0,
          menuHeight: menuBox?.height || 0
        };
      })()`,
    }, sessionId)
    const value = result.result.value
    if (value.scrollWidth > value.viewport + 1) failures.push(`${width}px ${route}: overflow ${value.scrollWidth - value.viewport}px`)
    if (value.h1 !== 1) failures.push(`${width}px ${route}: expected one H1, found ${value.h1}`)
    const expectedCanonical = `https://westsenecatreeremoval.com${route === '/' ? '' : route}`
    if (value.canonical.replace(/\/$/, '') !== expectedCanonical) failures.push(`${width}px ${route}: canonical mismatch`)
    if (!value.privacy || !value.terms) failures.push(`${width}px ${route}: footer legal links missing`)
    if ((route === '/' || route === '/contact') && !value.formEmbed) failures.push(`${width}px ${route}: contact form embed missing`)
    if (baseUrl.startsWith('https://') && (!value.runtimeScript || !value.runtimeActive)) {
      failures.push(`${width}px ${route}: Firebase animation runtime inactive`)
    }
    if (width <= 768 && (!value.menuVisible || value.menuWidth < 44 || value.menuHeight < 44)) {
      failures.push(`${width}px ${route}: mobile menu touch target invalid`)
    }
  }
}

await command('Target.closeTarget', { targetId })
socket.close()
chrome.kill()

if (failures.length) {
  console.error(failures.join('\n'))
  process.exitCode = 1
} else {
  console.log(`PASS: ${routes.length * widths.length} route/viewport combinations`)
  console.log(`Widths tested: ${widths.join(', ')}px`)
  console.log('No horizontal overflow; one H1, canonical, footer legal links, and mobile menu targets verified.')
}
