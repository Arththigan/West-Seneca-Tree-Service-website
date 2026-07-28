import ServiceDetail from '../../../src/ServiceDetail.jsx'

export const metadata = {
  title: 'Stump Grinding in West Seneca, NY',
  description: 'Remove unwanted tree stumps and reclaim usable yard space with stump grinding service in West Seneca, NY.',
  alternates: { canonical: '/services/stump-grinding' },
}

export default function StumpGrindingPage() {
  return (
    <ServiceDetail
      eyebrow="Stump grinding • West Seneca, NY"
      title="Clear the stump. Reclaim the space."
      intro="An efficient solution for old stumps that interfere with mowing, landscaping, access, or future use of the yard."
      image="https://images.unsplash.com/photo-1636706529713-7cceb3d46365?auto=format&fit=crop&w=1500&q=82"
      imageAlt="Professional tree workers accessing a mature tree on a residential property"
      overview="A leftover stump can become a tripping obstacle, complicate mowing, and limit landscaping plans. We evaluate stump size, access, nearby features, and the intended use of the area."
      benefits={['Remove a common mowing obstacle', 'Prepare space for future landscaping', 'Address stumps from older removals', 'Available with or after tree removal']}
      process={['Measure stump and equipment access', 'Identify nearby property concerns', 'Grind the stump to the agreed depth', 'Discuss chips and area cleanup']}
    />
  )
}
