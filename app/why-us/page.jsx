import InteriorPage from '../../src/InteriorPage.jsx'

export const metadata = {
  title: 'Why Choose Our Local Tree Service',
  description: 'Learn about our safety-minded planning, clear communication and property-conscious tree service in West Seneca, NY.',
  alternates: { canonical: '/why-us' },
}

const reasons = [
  ['https://images.pexels.com/photos/4206120/pexels-photo-4206120.jpeg?auto=compress&cs=tinysrgb&w=900', 'Forestry worker safely operating professional cutting equipment', 'Safety-minded planning', 'Every job begins with the tree, access, nearby structures, and people around the work area.'],
  ['https://images.pexels.com/photos/33630754/pexels-photo-33630754.jpeg?auto=compress&cs=tinysrgb&w=900', 'Professional worker ready to communicate with customers', 'Clear communication', 'We keep the service understandable so you know the recommendation and what happens next.'],
  ['https://images.pexels.com/photos/37214639/pexels-photo-37214639.jpeg?auto=compress&cs=tinysrgb&w=900', 'Cut logs neatly arranged after tree work', 'Property-conscious care', 'The job is not finished at the last cut. Cleanup and the surrounding property remain part of the plan.'],
  ['https://images.pexels.com/photos/1537141/pexels-photo-1537141.jpeg?auto=compress&cs=tinysrgb&w=900', 'Tree stump and maintained green surroundings', 'Responsive local service', 'Local tree concerns deserve a timely response, especially when damage or access issues are involved.'],
]

export default function WhyUsPage() {
  return (
    <InteriorPage
      eyebrow="Why West Seneca homeowners call us"
      title="Professional care without the runaround."
      intro="A local tree-service experience built around clear answers, careful planning, and respect for your property."
      heroImage="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=84"
      heroImageAlt="Healthy mature trees representing responsible tree care"
    >
      <section className="page-content section">
        <div className="shell reason-grid">
          {reasons.map(([image, alt, title, text]) => (
            <article className="reason-card" key={title}><img src={image} alt={alt} loading="lazy" /><h2>{title}</h2><p>{text}</p></article>
          ))}
        </div>
      </section>
    </InteriorPage>
  )
}
