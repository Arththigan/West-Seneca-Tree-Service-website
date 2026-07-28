import InteriorPage from '../../src/InteriorPage.jsx'

export const metadata = {
  title: 'Our Tree Service Process',
  description: 'See how West Seneca Tree Service moves from your first call through assessment, careful tree work and final cleanup.',
  alternates: { canonical: '/our-process' },
}

const steps = [
  ['01', 'Call or send the details', 'Tell us what you see, where the tree is located, and whether there is an immediate property or access concern.'],
  ['02', 'Property assessment', 'We consider tree condition, surrounding structures, equipment access, utilities, landscaping, and cleanup expectations.'],
  ['03', 'A clear work plan', 'You receive a practical recommendation based on the property and the tree service required.'],
  ['04', 'Careful tree work', 'The crew completes the planned removal, trimming, grinding, or cleanup with attention to the work area.'],
  ['05', 'Cleanup and final check', 'We clear the agreed work area and review the completed job before wrapping up.'],
]

export default function ProcessPage() {
  return (
    <InteriorPage
      eyebrow="A straightforward experience"
      title="From first call to a clearer yard."
      intro="Tree work can feel complicated. Our process makes each decision and next step easier to understand."
      heroImage="https://images.unsplash.com/photo-1641919142684-73a2a4c0e62e?auto=format&fit=crop&w=1200&q=84"
      heroImageAlt="Freshly cut tree stump in a wooded work area"
    >
      <section className="page-content section">
        <div className="shell process-page-grid">
          {steps.map(([number, title, text]) => (
            <article className="process-page-step" key={number}>
              <span>{number}</span><div><h2>{title}</h2><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>
    </InteriorPage>
  )
}
