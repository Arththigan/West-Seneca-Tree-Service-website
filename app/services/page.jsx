import InteriorPage from '../../src/InteriorPage.jsx'

export const metadata = {
  title: 'Tree Removal, Trimming & Stump Grinding',
  description: 'Explore tree removal, tree trimming, stump grinding, pruning and storm cleanup services in West Seneca, NY.',
  alternates: { canonical: '/services' },
}

const services = [
  ['service-01', 'https://images.unsplash.com/photo-1754321860056-ca7254d5e7ac?auto=format&fit=crop&w=700&q=82', 'Arborist using a chainsaw for controlled tree removal', 'Tree Removal', 'A damaged, declining, poorly placed, or unwanted tree can become a serious property concern. We plan controlled removals around access, nearby structures, landscaping, and cleanup needs.', '/services/tree-removal'],
  ['service-02', 'https://images.pexels.com/photos/10079904/pexels-photo-10079904.jpeg?auto=compress&cs=tinysrgb&w=700', 'Tree-care professional trimming a large tree', 'Tree Trimming & Pruning', 'Remove damaged or overgrown branches, improve clearance, and maintain a cleaner canopy with trimming suited to the tree and its surroundings.', '/services/tree-trimming'],
  ['service-03', 'https://images.pexels.com/photos/9806894/pexels-photo-9806894.jpeg?auto=compress&cs=tinysrgb&w=700', 'Freshly cleared tree stump and wood chips', 'Stump Grinding', 'Reclaim usable yard space and remove an old tripping or mowing obstacle with efficient stump grinding and a clean finish.', '/services/stump-grinding'],
  ['service-04', 'https://images.pexels.com/photos/10682589/pexels-photo-10682589.jpeg?auto=compress&cs=tinysrgb&w=700', 'Tree debris and cleanup after severe weather', 'Storm Cleanup', 'When wind, snow, or storms leave fallen branches and damaged trees, we help assess the hazard and plan the safest next step.', '/services/storm-cleanup'],
]

export default function ServicesPage() {
  return (
    <InteriorPage
      eyebrow="Tree services in West Seneca"
      title="The right service for every tree problem."
      intro="Practical tree care for safer, cleaner residential and commercial properties in West Seneca and nearby communities."
      heroImage="https://images.unsplash.com/photo-1638971320633-9ce547c55f00?auto=format&fit=crop&w=1200&q=84"
      heroImageAlt="Tree-care worker using professional trimming equipment"
    >
      <section className="page-content section">
        <div className="shell interior-service-list">
          {services.map(([id, image, alt, title, text, href], index) => (
            <article id={id} className="interior-service" key={id}>
              <div className="interior-service-number">0{index + 1}</div>
              <div className="interior-service-image"><img src={image} alt={alt} width="700" height="560" loading="lazy" decoding="async" /></div>
              <div><h2>{title}</h2><p>{text}</p><a href={href}>Learn about this service →</a></div>
            </article>
          ))}
        </div>
      </section>
    </InteriorPage>
  )
}
