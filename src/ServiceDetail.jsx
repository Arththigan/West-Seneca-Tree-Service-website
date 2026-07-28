import { ArrowRight, CheckCircle2, Phone } from 'lucide-react'
import InteriorPage from './InteriorPage.jsx'

export default function ServiceDetail({ eyebrow, title, intro, image, imageAlt, overview, benefits, process }) {
  return (
    <InteriorPage eyebrow={eyebrow} title={title} intro={intro}>
      <section className="service-detail section">
        <div className="shell service-detail-intro">
          <div className="service-detail-photo">
            <img src={image} alt={imageAlt} />
          </div>
          <div className="service-detail-copy">
            <span className="kicker">About this service</span>
            <h2>A clear plan for your property.</h2>
            <p>{overview}</p>
            <ul>{benefits.map((benefit) => <li key={benefit}><CheckCircle2 />{benefit}</li>)}</ul>
            <a className="button button-dark" href="/contact">Request a free estimate <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>
      <section className="service-detail-process section">
        <div className="shell">
          <span className="kicker light">How it works</span>
          <h2>From assessment<br />to a clean finish.</h2>
          <div className="detail-steps">
            {process.map((step, index) => <article key={step}><span>0{index + 1}</span><h3>{step}</h3></article>)}
          </div>
          <a className="button button-yellow" href="tel:+17167978733"><Phone size={18} /> Call (716) 797-8733</a>
        </div>
      </section>
    </InteriorPage>
  )
}
