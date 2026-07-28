import ServiceDetail from '../../../src/ServiceDetail.jsx'

export const metadata = {
  title: 'Tree Trimming & Pruning in West Seneca, NY',
  description: 'Professional tree trimming and pruning for damaged, overgrown or low-clearance branches in West Seneca, NY.',
  alternates: { canonical: '/services/tree-trimming' },
}

export default function TreeTrimmingPage() {
  return (
    <ServiceDetail
      eyebrow="Tree trimming • West Seneca, NY"
      title="Better clearance. Cleaner shape. Healthier growth."
      intro="Thoughtful trimming for overgrown, damaged, low, or poorly placed branches around your home and property."
      image="https://images.unsplash.com/photo-1721977728782-87cb5fd2a245?auto=format&fit=crop&w=1500&q=82"
      imageAlt="Arborist secured with a safety harness while pruning a large tree"
      overview="Good trimming is more than cutting branches. The tree’s condition, branch structure, surrounding property, and reason for trimming all affect the right approach."
      benefits={['Remove damaged or broken branches', 'Improve roof, driveway and yard clearance', 'Reduce overgrowth around structures', 'Maintain a cleaner, more balanced canopy']}
      process={['Discuss the trimming objective', 'Inspect canopy and clearance', 'Complete targeted branch work', 'Remove agreed debris and review']}
    />
  )
}
