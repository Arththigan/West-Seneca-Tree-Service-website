import ServiceDetail from '../../../src/ServiceDetail.jsx'

export const metadata = {
  title: 'Tree Removal in West Seneca, NY',
  description: 'Request safe, professional tree removal for damaged, hazardous or unwanted trees in West Seneca, NY.',
  alternates: { canonical: '/services/tree-removal' },
}

export default function TreeRemovalPage() {
  return (
    <ServiceDetail
      eyebrow="Tree removal • West Seneca, NY"
      title="Safe removal for trees that need to come down."
      intro="A controlled tree-removal plan built around the tree, nearby structures, access, landscaping, and your cleanup expectations."
      image="https://images.unsplash.com/flagged/photo-1574359364027-b62a716266c1?auto=format&fit=crop&w=1500&q=82"
      imageAlt="Professional tree service crew and equipment at a tree removal work site"
      overview="Tree removal is often the right step when a tree is badly damaged, declining, interfering with the property, or creating an unacceptable risk. We assess the work area before recommending an approach."
      benefits={['Planning around homes, fences and landscaping', 'Options for debris cleanup and stump grinding', 'Residential and commercial property service', 'Clear recommendations before work begins']}
      process={['Inspect the tree and surroundings', 'Plan access and controlled removal', 'Complete the agreed tree work', 'Clear the work area and final-check']}
    />
  )
}
