import { useEffect, useState } from 'react'
import {
  ArrowRight, Check, ChevronRight, CircleCheck, Clock3, Menu, Phone,
  ShieldCheck, Sparkles, Star, TreePine, X, Zap
} from 'lucide-react'

const phone = '(716) 219-2247'
const phoneHref = 'tel:+17162192247'

const services = [
  { n: '01', title: 'Tree Removal', text: 'Safe, controlled removal for hazardous, damaged, or unwanted trees.', tone: 'lime' },
  { n: '02', title: 'Tree Trimming', text: 'Thoughtful trimming that protects your property and keeps trees thriving.', tone: 'cream' },
  { n: '03', title: 'Stump Grinding', text: 'Clear old stumps and reclaim usable space without the lingering mess.', tone: 'yellow' },
  { n: '04', title: 'Storm Cleanup', text: 'Fast help for fallen limbs, blocked access, and urgent tree hazards.', tone: 'green' },
]

const steps = [
  ['01', 'Tell us what’s happening', 'Call or request an estimate. Photos help us understand the situation fast.'],
  ['02', 'We assess the property', 'We inspect access, nearby structures, tree condition, and the safest approach.'],
  ['03', 'The work gets done', 'Our crew completes the job carefully with the right plan and equipment.'],
  ['04', 'Your yard is yours again', 'We clear the work area and finish with a final property check.'],
]

function TreeVisual() {
  return (
    <div className="tree-stage" aria-hidden="true">
      <div className="sun-orb" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="tree-crown crown-a" />
      <div className="tree-crown crown-b" />
      <div className="tree-crown crown-c" />
      <div className="tree-crown crown-d" />
      <div className="tree-trunk">
        <span className="bark-line b1" />
        <span className="bark-line b2" />
      </div>
      <div className="tree-shadow" />
      <div className="floating-tag tag-one"><ShieldCheck size={17} /> Property-first planning</div>
      <div className="floating-tag tag-two"><Sparkles size={17} /> Complete cleanup</div>
    </div>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="West Seneca Tree Service home">
        <span className="brand-mark"><TreePine size={22} /></span>
        <span>West Seneca<br /><b>Tree Service</b></span>
      </a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? 'nav-links is-open' : 'nav-links'} onClick={() => setOpen(false)}>
        <a href="#services">Services</a>
        <a href="#process">Our process</a>
        <a href="#why-us">Why us</a>
        <a href="#estimate">Free estimate</a>
      </nav>
      <a className="nav-call" href={phoneHref}><Phone size={17} /> {phone}</a>
    </header>
  )
}

function App() {
  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'))
    }, { threshold: 0.14 })
    document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el))
    return () => reveal.disconnect()
  }, [])

  return (
    <main id="top">
      <section className="hero">
        <Nav />
        <div className="hero-grid shell">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Local tree care in West Seneca, NY</div>
            <h1>Big tree problem.<br /><em>Clear next step.</em></h1>
            <p>Safe, dependable tree removal and care—with a straightforward plan from the first call to the final cleanup.</p>
            <div className="hero-actions">
              <a className="button button-yellow" href="#estimate">Get a free estimate <ArrowRight size={19} /></a>
              <a className="text-link" href={phoneHref}><Phone size={18} /> Call {phone}</a>
            </div>
            <div className="trust-row">
              <span><CircleCheck /> Local service</span>
              <span><CircleCheck /> Clear communication</span>
              <span><CircleCheck /> Property-conscious care</span>
            </div>
          </div>
          <TreeVisual />
        </div>
        <div className="hero-bottom shell">
          <p>Scroll to see how we take your property</p>
          <div className="journey-label"><span>Hazard</span><i /><span>Safe &amp; clear</span></div>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="shell">
          <div className="section-head reveal">
            <div><span className="kicker">What we do</span><h2>Tree work without<br />the guesswork.</h2></div>
            <p>From one overgrown branch to a full removal, we make the next step clear and handle the property with care.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className={`service-card ${service.tone} reveal`} key={service.n}>
                <span className="service-number">{service.n}</span>
                <div className="service-icon"><TreePine /></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#estimate" aria-label={`Request ${service.title}`}>Request service <ChevronRight size={18} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process section" id="process">
        <div className="shell process-grid">
          <div className="process-intro reveal">
            <span className="kicker light">A safer path forward</span>
            <h2>From concern<br />to <em>clear yard.</em></h2>
            <p>Every property is different. Our process keeps the work understandable, controlled, and centered on what your yard needs.</p>
            <a className="button button-outline" href="#estimate">Start with an estimate <ArrowRight size={19} /></a>
            <div className="log-visual" aria-hidden="true">
              <div className="log-face"><span /><span /><span /></div>
              <div className="log-body" />
            </div>
          </div>
          <div className="steps">
            {steps.map(([n, title, text], i) => (
              <article className="step reveal" key={n}>
                <div className="step-num">{n}</div>
                <div><h3>{title}</h3><p>{text}</p></div>
                <span className="step-status">{i === 3 ? <Check /> : <ArrowRight />}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why section" id="why-us">
        <div className="shell">
          <div className="why-banner reveal">
            <div className="why-copy">
              <span className="kicker">Why homeowners call us</span>
              <h2>The tree can be complicated.<br /><em>The service shouldn’t be.</em></h2>
            </div>
            <div className="why-points">
              <div><ShieldCheck /><span><b>Safety-minded</b><small>A plan built around people and property</small></span></div>
              <div><Clock3 /><span><b>Responsive</b><small>Clear answers when timing matters</small></span></div>
              <div><Sparkles /><span><b>Clean finish</b><small>Care that continues through cleanup</small></span></div>
            </div>
          </div>
          <div className="quote-row reveal">
            <div className="stars"><Star /><Star /><Star /><Star /><Star /></div>
            <blockquote>“Friendly, professional, and efficient from start to finish.”</blockquote>
            <a href="https://www.google.com/maps/place/West+Seneca+Tree+Service/" target="_blank" rel="noreferrer">View us on Google <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>

      <section className="emergency section">
        <div className="shell emergency-inner reveal">
          <div className="storm-icon"><Zap /></div>
          <div><span className="kicker light">Urgent tree hazard?</span><h2>Don’t wait on storm damage.</h2></div>
          <p>Fallen limbs, blocked access, or a tree threatening your property? Call and tell us what’s happening.</p>
          <a className="button button-yellow" href={phoneHref}><Phone size={19} /> Call {phone}</a>
        </div>
      </section>

      <section className="estimate section" id="estimate">
        <div className="shell estimate-grid">
          <div className="estimate-copy reveal">
            <span className="kicker">Let’s take a look</span>
            <h2>Your safer yard<br />starts <em>here.</em></h2>
            <p>Tell us a little about the tree and your property. We’ll follow up to discuss the job and next steps.</p>
            <div className="direct-call"><span><Phone /></span><div><small>Prefer to call?</small><a href={phoneHref}>{phone}</a></div></div>
          </div>
          <form className="estimate-form reveal" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <label>Your name<input required name="name" placeholder="John Smith" /></label>
              <label>Phone number<input required name="phone" type="tel" placeholder="(716) 000-0000" /></label>
            </div>
            <label>Property location<input name="location" placeholder="West Seneca, NY" /></label>
            <label>What do you need?
              <select name="service" defaultValue="">
                <option value="" disabled>Select a service</option>
                <option>Tree removal</option><option>Tree trimming</option><option>Stump grinding</option>
                <option>Storm cleanup</option><option>Not sure yet</option>
              </select>
            </label>
            <label>Tell us about the tree<textarea name="message" rows="4" placeholder="What are you concerned about?" /></label>
            <button className="button button-dark" type="submit">Request my free estimate <ArrowRight size={19} /></button>
            <small className="form-note"><ShieldCheck size={15} /> Your information stays private. No spam.</small>
          </form>
        </div>
      </section>

      <footer>
        <div className="shell footer-top">
          <div className="footer-brand"><TreePine /><span>West Seneca<br /><b>Tree Service</b></span></div>
          <div><small>Call us</small><a href={phoneHref}>{phone}</a></div>
          <div><small>Service area</small><p>West Seneca &amp; surrounding communities</p></div>
          <a className="button button-outline" href="#estimate">Free estimate <ArrowRight size={18} /></a>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} West Seneca Tree Service</span><span>Built for safer, cleaner properties.</span></div>
      </footer>
      <a className="mobile-call" href={phoneHref}><Phone size={18} /> Call now</a>
    </main>
  )
}

export default App
