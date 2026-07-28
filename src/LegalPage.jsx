import { Phone } from 'lucide-react'

export default function LegalPage({ title, effective, updated, children }) {
  return (
    <main className="legal-page">
      <header className="legal-hero">
        <div className="shell">
          <span>West Seneca Tree Service</span>
          <h1>{title}</h1>
          <p>Effective Date: {effective} <i /> Last Updated: {updated}</p>
        </div>
      </header>
      <article className="shell legal-content">{children}</article>
      <footer>
        <div className="shell footer-top">
          <div className="footer-brand"><img src="/west-seneca-tree-service-logo.png" alt="West Seneca Tree Service" /></div>
          <div><small>Call us</small><a href="tel:+17167978733">(716) 797-8733</a></div>
          <div><small>Address</small><p>44 Century Dr, Buffalo, NY 14224</p></div>
          <div className="footer-link-column"><small>Quick links</small><nav aria-label="Footer navigation"><a href="/">Home</a><a href="/services">Services</a><a href="/our-process">Our process</a><a href="/why-us">Why us</a><a href="/contact">Contact</a></nav><span><a href="/privacy-policy">Privacy Policy</a><a href="/terms-conditions">Terms &amp; Conditions</a></span></div>
          <a className="button button-outline" href="/contact"><Phone size={18} /> Contact us</a>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} West Seneca Tree Service</span>
        </div>
      </footer>
    </main>
  )
}
