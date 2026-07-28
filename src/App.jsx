'use client'

import { useEffect } from 'react'
import {
  ArrowRight, Check, ChevronRight, CircleCheck, Clock3, MapPin, Phone,
  ShieldCheck, Sparkles, Star, TreePine, Zap
} from 'lucide-react'

const phone = '(716) 797-8733'
const phoneHref = 'tel:+17167978733'

const services = [
  { n: '01', title: 'Tree Removal', text: 'Safe, controlled removal for hazardous, damaged, or unwanted trees.', tone: 'lime', href: '/services/tree-removal', image: 'https://images.pexels.com/photos/6218318/pexels-photo-6218318.jpeg?auto=compress&cs=tinysrgb&w=700', alt: 'Arborist safely cutting a tree while secured with climbing equipment' },
  { n: '02', title: 'Tree Trimming', text: 'Thoughtful trimming that protects your property and keeps trees thriving.', tone: 'cream', href: '/services/tree-trimming', image: 'https://images.pexels.com/photos/34674271/pexels-photo-34674271.jpeg?auto=compress&cs=tinysrgb&w=700', alt: 'Professional arborist climbing a tree for pruning and maintenance' },
  { n: '03', title: 'Stump Grinding', text: 'Clear old stumps and reclaim usable space without the lingering mess.', tone: 'yellow', href: '/services/stump-grinding', image: 'https://images.unsplash.com/photo-1754321895426-68b04ba453e3?auto=format&fit=crop&w=700&q=82', alt: 'Tree-service worker operating professional stump grinding equipment' },
  { n: '04', title: 'Storm Cleanup', text: 'Fast help for fallen limbs, blocked access, and urgent tree hazards.', tone: 'green', href: '/services/storm-cleanup', image: 'https://images.pexels.com/photos/32394146/pexels-photo-32394146.jpeg?auto=compress&cs=tinysrgb&w=700', alt: 'Large uprooted tree after severe storm damage in a residential area' },
]

const steps = [
  ['01', 'Tell us what’s happening', 'Call or request an estimate. Photos help us understand the situation fast.'],
  ['02', 'We assess the property', 'We inspect access, nearby structures, tree condition, and the safest approach.'],
  ['03', 'The work gets done', 'Our crew completes the job carefully with the right plan and equipment.'],
  ['04', 'Your yard is yours again', 'We clear the work area and finish with a final property check.'],
]

const faqs = [
  ['How much does tree removal cost in West Seneca?', 'Tree removal pricing depends on the tree’s size, condition, access, nearby structures, and cleanup needs. The best way to get accurate pricing is an on-site estimate for your property.'],
  ['Do you provide tree trimming and pruning?', 'Yes. We help remove damaged or overgrown branches, improve clearance, and maintain a safer, healthier-looking tree canopy.'],
  ['Can you grind the stump after removing a tree?', 'Yes. Stump grinding can be included with a removal or requested for an older stump already on the property.'],
  ['What should I do if a tree or branch falls during a storm?', 'Keep people away from the area, avoid downed utility lines, and call the appropriate utility or emergency service when needed. Then call us to discuss the tree hazard and site access.'],
  ['Which areas do you serve?', 'We serve West Seneca and nearby communities including Buffalo, Cheektowaga, Lackawanna, Depew, Lancaster, and surrounding Western New York areas.'],
]

function TreeVisual() {
  return (
    <div className="tree-stage" aria-hidden="true">
      <div className="tree-model realistic-scene">
        <div className="real-photo-card main-photo">
          <img
            src="https://images.unsplash.com/photo-1765064519883-651c506ec70d?auto=format&fit=crop&w=900&q=80"
            alt=""
            width="900"
            height="1107"
            fetchPriority="high"
            decoding="async"
          />
          <span className="real-photo-overlay" />
        </div>
        <div className="real-photo-card secondary-photo">
          <img
            src="https://images.unsplash.com/photo-1754321871548-61bdbc6f1506?auto=format&fit=crop&w=600&q=80"
            alt=""
            width="600"
            height="723"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="scene-grid-lines" />
        <div className="real-scene-caption">
          <span>Professional tree care</span>
          <b>West Seneca, New York</b>
        </div>
      </div>
      <div className="real-trust-card trust-card-one"><ShieldCheck size={19} /><span><small>Property-first</small><b>Careful planning</b></span></div>
      <div className="real-trust-card trust-card-two"><Sparkles size={19} /><span><small>Start to finish</small><b>Complete cleanup</b></span></div>
    </div>
  )
}

function App() {
  useEffect(() => {
    const formScript = document.createElement('script')
    formScript.src = 'https://link.kdlead.com/js/form_embed.js'
    formScript.async = true
    formScript.dataset.kdleadEmbed = 'true'
    if (!document.querySelector('script[data-kdlead-embed="true"]')) document.body.appendChild(formScript)
    return () => {
      formScript.remove()
    }
  }, [])

  return (
    <main id="top">
      <section className="hero" data-travel-stage="Safe tree care">
        <div className="hero-grid shell">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Local tree care in West Seneca, NY</div>
            <h1>Safer trees.<br /><em>Stronger property.</em></h1>
            <p>Modern tree care with a clear plan—from the first assessment to the final cleanup in West Seneca, NY.</p>
            <div className="hero-actions">
              <a className="button button-yellow" href="/contact">Get a free estimate <ArrowRight size={19} /></a>
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

      <section className="services section" id="services" data-travel-stage="Our services">
        <div className="shell">
          <div className="section-head reveal">
            <div><span className="kicker">What we do</span><h2>Tree work without<br />the guesswork.</h2></div>
            <p>From one overgrown branch to a full removal, we make the next step clear and handle the property with care.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className={`service-card ${service.tone} reveal`} key={service.n}>
                <span className="service-number">{service.n}</span>
                <div className="service-image"><img src={service.image} alt={service.alt} width="700" height="420" loading="lazy" decoding="async" /></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href={service.href} aria-label={`View ${service.title}`}>View service <ChevronRight size={18} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-gallery section" data-travel-stage="Real tree work">
        <div className="shell">
          <div className="section-head reveal">
            <div><span className="kicker">Real tree work</span><h2>Skilled work happens<br /><em>above the ground.</em></h2></div>
            <p>Professional tree care combines planning, climbing, equipment, and attention to the property below.</p>
          </div>
          <div className="photo-grid">
            <figure className="photo-card photo-large reveal">
              <img src="https://images.unsplash.com/photo-1754322449005-bdc38c631682?auto=format&fit=crop&w=1000&q=78" alt="Professional arborist working in a mature tree with safety equipment" width="1000" height="1250" loading="lazy" decoding="async" />
              <figcaption><b>Tree pruning at height</b></figcaption>
              <i className="photo-depth-label">Harness • Climbing • Pruning</i>
            </figure>
            <figure className="photo-card reveal">
              <img src="https://images.unsplash.com/photo-1675726060825-3c12546247f0?auto=format&fit=crop&w=800&q=78" alt="Forestry worker using professional tree trimming equipment" width="800" height="520" loading="lazy" decoding="async" />
              <figcaption><b>Careful access &amp; trimming</b></figcaption>
              <i className="photo-depth-label">Access • Teamwork</i>
            </figure>
            <figure className="photo-card reveal">
              <img src="https://images.unsplash.com/photo-1754321902809-5c21cbc67228?auto=format&fit=crop&w=800&q=78" alt="Arborist pruning branches while working in a tree canopy" width="800" height="520" loading="lazy" decoding="async" />
              <figcaption><b>Professional equipment</b></figcaption>
              <i className="photo-depth-label">Equipment • Cleanup</i>
            </figure>
          </div>
          <p className="photo-credit">Tree-service imagery sourced from Unsplash photographers under the Unsplash License.</p>
        </div>
      </section>

      <section className="process section" id="process" data-travel-stage="Our process">
        <div className="shell process-grid">
          <div className="process-intro reveal">
            <span className="kicker light">A safer path forward</span>
            <h2>From concern<br />to <em>clear yard.</em></h2>
            <p>Every property is different. Our process keeps the work understandable, controlled, and centered on what your yard needs.</p>
            <a className="button button-outline" href="/contact">Start with an estimate <ArrowRight size={19} /></a>
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

      <section className="why section" id="why-us" data-travel-stage="Why choose us">
        <div className="shell">
          <div className="why-banner reveal">
            <div className="why-copy">
              <span className="kicker">Why homeowners call us</span>
              <h2>The tree can be complicated.<br /><em>The service shouldn’t be.</em></h2>
            </div>
            <div className="why-points">
              <div><img src="https://images.pexels.com/photos/7812847/pexels-photo-7812847.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Tree worker wearing professional safety equipment" width="300" height="300" loading="lazy" decoding="async" /><span><b>Safety-minded</b><small>A plan built around people and property</small></span></div>
              <div><img src="https://images.pexels.com/photos/8489862/pexels-photo-8489862.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Tree-service professional working carefully with a chainsaw" width="300" height="300" loading="lazy" decoding="async" /><span><b>Responsive</b><small>Clear answers when timing matters</small></span></div>
              <div><img src="https://images.pexels.com/photos/34241750/pexels-photo-34241750.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Crew clearing tree debris after storm damage" width="300" height="300" loading="lazy" decoding="async" /><span><b>Clean finish</b><small>Care that continues through cleanup</small></span></div>
            </div>
          </div>
          <div className="quote-row reveal">
            <div className="stars"><Star /><Star /><Star /><Star /><Star /></div>
            <blockquote>“Friendly, professional, and efficient from start to finish.”</blockquote>
            <a href="https://www.google.com/maps/place/West+Seneca+Tree+Service/" target="_blank" rel="noreferrer">View us on Google <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>

      <section className="local-seo section" id="service-area" data-travel-stage="Service area">
        <div className="shell local-grid">
          <div className="local-copy reveal">
            <span className="kicker">Local tree service</span>
            <h2>Serving West Seneca<br />and nearby <em>communities.</em></h2>
            <p>Western New York weather can be hard on mature trees. We help local homeowners address damaged limbs, overgrown trees, unwanted stumps, and property hazards with a clear plan for the work.</p>
            <div className="area-pills" aria-label="Primary service areas">
              {['West Seneca', 'Buffalo', 'Cheektowaga', 'Lackawanna', 'Depew', 'Lancaster'].map((area) => <span key={area}>{area}, NY</span>)}
            </div>
          </div>
          <aside className="local-card reveal">
            <span className="map-pin"><TreePine /></span>
            <small>Based in</small>
            <h3>44 Century Dr, Buffalo, NY 14224</h3>
            <p>Need tree removal, trimming, stump grinding, pruning, or storm cleanup?</p>
            <a className="button button-dark" href="/contact">Request a local estimate <ArrowRight size={18} /></a>
          </aside>
        </div>
      </section>

      <section className="emergency section" data-travel-stage="Storm response">
        <div className="shell emergency-inner reveal">
          <div className="storm-icon"><Zap /></div>
          <div><span className="kicker light">Urgent tree hazard?</span><h2>Don’t wait on storm damage.</h2></div>
          <p>Fallen limbs, blocked access, or a tree threatening your property? Call and tell us what’s happening.</p>
          <a className="button button-yellow" href={phoneHref}><Phone size={19} /> Call {phone}</a>
        </div>
      </section>

      <section className="faq section" id="faq" data-travel-stage="Helpful answers">
        <div className="shell faq-grid">
          <div className="faq-heading reveal">
            <span className="kicker">Common questions</span>
            <h2>Helpful answers,<br /><em>before you call.</em></h2>
            <p>Still unsure what service you need? Describe the tree and we’ll help identify the right next step.</p>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details className="faq-item reveal" key={question}>
                <summary>{question}<span>+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="estimate section" id="estimate" data-travel-stage="Free estimate">
        <div className="shell estimate-grid">
          <div className="estimate-copy reveal">
            <span className="kicker">Let’s take a look</span>
            <h2>Your safer yard<br />starts <em>here.</em></h2>
            <p>Tell us a little about the tree and your property. We’ll follow up to discuss the job and next steps.</p>
            <div className="direct-call"><span><Phone /></span><div><small>Prefer to call?</small><a href={phoneHref}>{phone}</a></div></div>
            <div className="direct-address"><span><MapPin /></span><div><small>Our address</small><a href="https://www.google.com/maps/search/?api=1&query=44%20Century%20Dr%2C%20Buffalo%2C%20NY%2014224%2C%20United%20States" target="_blank" rel="noreferrer">44 Century Dr, Buffalo, NY 14224, United States</a></div></div>
          </div>
          <div className="estimate-form embed-form reveal">
            <iframe
              loading="lazy"
              src="https://link.kdlead.com/widget/form/4JzGDJCOq5EsGZxtPaiM"
              id="inline-4JzGDJCOq5EsGZxtPaiM"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Form 0"
              data-height="871"
              data-layout-iframe-id="inline-4JzGDJCOq5EsGZxtPaiM"
              data-form-id="4JzGDJCOq5EsGZxtPaiM"
              title="Request a free tree service estimate"
            />
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-top">
          <div className="footer-brand"><img src="/west-seneca-tree-service-logo.png" alt="West Seneca Tree Service" width="1200" height="900" loading="lazy" /></div>
          <div><small>Call us</small><a href={phoneHref}>{phone}</a></div>
          <div><small>Address</small><p>44 Century Dr, Buffalo, NY 14224</p></div>
          <div className="footer-link-column"><small>Quick links</small><nav aria-label="Footer navigation"><a href="/">Home</a><a href="/services">Services</a><a href="/our-process">Our process</a><a href="/why-us">Why us</a><a href="/contact">Contact</a></nav><span><a href="/privacy-policy">Privacy Policy</a><a href="/terms-conditions">Terms &amp; Conditions</a></span></div>
          <a className="button button-outline" href="/contact">Free estimate <ArrowRight size={18} /></a>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} West Seneca Tree Service</span>
        </div>
      </footer>
      <a className="mobile-call" href={phoneHref}><Phone size={18} /> Call now</a>
    </main>
  )
}

export default App
