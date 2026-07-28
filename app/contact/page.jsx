import Script from 'next/script'
import { Clock3, MapPin, Phone } from 'lucide-react'
import InteriorPage from '../../src/InteriorPage.jsx'

export const metadata = {
  title: 'Contact Us for a Free Tree Service Estimate',
  description: 'Request a free tree removal, trimming, stump grinding or storm cleanup estimate in West Seneca, NY. Call (716) 797-8733.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <InteriorPage
      eyebrow="Contact West Seneca Tree Service"
      title="Tell us what’s happening with your tree."
      intro="Send the property and service details below. We’ll use the information to understand the concern and discuss the next step."
      heroImage="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=84"
      heroImageAlt="View looking upward through a mature green tree canopy"
    >
      <section className="contact-page section">
        <div className="shell contact-grid">
          <aside className="contact-details">
            <div><Phone /><span><small>Call us</small><a href="tel:+17167978733">(716) 797-8733</a></span></div>
            <div><MapPin /><span><small>Our address</small><a href="https://www.google.com/maps/search/?api=1&query=44%20Century%20Dr%2C%20Buffalo%2C%20NY%2014224%2C%20United%20States" target="_blank" rel="noreferrer">44 Century Dr, Buffalo, NY 14224, United States</a></span></div>
            <div><Clock3 /><span><small>Request service</small><b>Use the form for a free estimate</b></span></div>
          </aside>
          <div className="contact-embed">
            <iframe
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
            <Script src="https://link.kdlead.com/js/form_embed.js" strategy="afterInteractive" />
          </div>
        </div>
      </section>
    </InteriorPage>
  )
}
