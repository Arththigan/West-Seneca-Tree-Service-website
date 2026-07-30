import { ArrowRight, Phone } from 'lucide-react'

export default function InteriorPage({ eyebrow, title, intro, heroImage, heroImageAlt = '' , children }) {
  return (
    <main className="interior">
      <section className="interior-hero" data-travel-stage={eyebrow}>
        <div className="shell interior-hero-layout">
          <div className="interior-hero-copy">
            <span className="kicker light">{eyebrow}</span>
            <h1>{title}</h1>
            <p>{intro}</p>
            <a className="button button-yellow" href="/contact">Get a free estimate <ArrowRight size={18} /></a>
          </div>
          {heroImage && (
            <div className="interior-hero-photo">
              <img src={heroImage} alt={heroImageAlt} width="1200" height="800" fetchPriority="high" decoding="async" />
              <span>Professional tree care • West Seneca, NY</span>
            </div>
          )}
        </div>
      </section>
      {children}
      <footer>
        <div className="shell footer-top">
          <div className="footer-brand"><img src="/west-seneca-tree-service-logo.webp" alt="West Seneca Tree Service" width="384" height="288" loading="lazy" decoding="async" /></div>
          <div><small>Call us</small><a href="tel:+17167978733">(716) 797-8733</a></div>
          <div><small>Address</small><p>44 Century Dr, Buffalo, NY 14224</p></div>
          <div className="footer-link-column"><small>Quick links</small><nav aria-label="Footer navigation"><a href="/">Home</a><a href="/services">Services</a><a href="/our-process">Our process</a><a href="/why-us">Why us</a><a href="/contact">Contact</a></nav><span><a href="/privacy-policy">Privacy Policy</a><a href="/terms-conditions">Terms &amp; Conditions</a></span></div>
          <a className="button button-outline" href="/contact">Contact us <Phone size={18} /></a>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} West Seneca Tree Service</span>
        </div>
      </footer>
    </main>
  )
}
