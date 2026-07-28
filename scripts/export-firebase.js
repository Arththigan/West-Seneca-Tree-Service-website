import { spawn } from 'node:child_process'
import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { resolve, sep } from 'node:path'

const root = process.cwd()
const output = resolve(root, 'firebase-dist')
if (!output.startsWith(`${root}${sep}`) || output === root) {
  throw new Error('Refusing to export outside the project workspace')
}

const routes = [
  '/',
  '/services',
  '/services/tree-removal',
  '/services/tree-trimming',
  '/services/stump-grinding',
  '/services/storm-cleanup',
  '/our-process',
  '/why-us',
  '/contact',
  '/privacy-policy',
  '/terms-conditions',
]

await rm(output, { recursive: true, force: true })
await mkdir(output, { recursive: true })
const assetDirectory = resolve(root, 'dist/client/assets')
const cssFile = (await readdir(assetDirectory)).find((file) => file.endsWith('.css'))
if (!cssFile) throw new Error('Production CSS asset was not found')
const criticalCss = await readFile(resolve(assetDirectory, cssFile), 'utf8')

const server = spawn(process.execPath, [resolve(root, 'node_modules/vinext/dist/cli.js'), 'start'], {
  cwd: root,
  stdio: ['ignore', 'pipe', 'pipe'],
})

const waitForServer = async () => {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch('http://127.0.0.1:3000/')
      if (response.ok) return
    } catch {
      // The server may still be starting; retry until the timeout.
    }
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 250))
  }
  throw new Error('Vinext production server did not start')
}

try {
  await waitForServer()
  for (const route of routes) {
    const response = await fetch(`http://127.0.0.1:3000${route}`)
    if (!response.ok) throw new Error(`${route} returned HTTP ${response.status}`)
    const directory = route === '/' ? output : resolve(output, route.slice(1))
    await mkdir(directory, { recursive: true })
    const html = (await response.text())
      .replace(/<script>self\.__VINEXT_RSC_[\s\S]*?<\/script>/g, '')
      .replace(/<script id="_R_">[\s\S]*?<\/script>/g, '')
      .replace(/<link rel="modulepreload"[^>]*>/g, '')
      .replace(/<link rel="stylesheet"[^>]*data-rsc-css-href[^>]*>/g, `<style>${criticalCss}</style>`)
      .replace('</body>', '<script src="/firebase-runtime-v3.js" defer></script></body>')
    await writeFile(resolve(directory, 'index.html'), html, 'utf8')
  }

  for (const file of ['sitemap.xml', 'robots.txt']) {
    const response = await fetch(`http://127.0.0.1:3000/${file}`)
    if (!response.ok) throw new Error(`/${file} returned HTTP ${response.status}`)
    await writeFile(resolve(output, file), await response.text(), 'utf8')
  }

  await cp(resolve(root, 'dist/client/assets'), resolve(output, 'assets'), { recursive: true })
  await cp(
    resolve(root, 'public/west-seneca-tree-service-logo.png'),
    resolve(output, 'west-seneca-tree-service-logo.png'),
  )
  await cp(resolve(root, 'public/firebase-runtime.js'), resolve(output, 'firebase-runtime-v3.js'))
  console.log(`Firebase export complete: ${routes.length} routes written to firebase-dist`)
} finally {
  server.kill()
}
