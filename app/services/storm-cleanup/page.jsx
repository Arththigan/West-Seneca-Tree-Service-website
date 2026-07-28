import ServiceDetail from '../../../src/ServiceDetail.jsx'

export const metadata = {
  title: 'Storm Damage Tree Cleanup in West Seneca, NY',
  description: 'Get help with fallen limbs, damaged trees and storm-related tree hazards in West Seneca, NY.',
  alternates: { canonical: '/services/storm-cleanup' },
}

export default function StormCleanupPage() {
  return (
    <ServiceDetail
      eyebrow="Storm cleanup • West Seneca, NY"
      title="A clear next step after the storm."
      intro="Help for fallen branches, damaged trees, blocked access, and urgent tree concerns following wind, snow, or severe weather."
      image="https://images.unsplash.com/photo-1748073813267-af0cd7fddbaa?auto=format&fit=crop&w=1500&q=82"
      imageAlt="Professional tree-service crew using heavy equipment during tree work"
      overview="Storm damage can leave trees under tension and branches in unstable positions. Keep people away from the area, avoid utility lines, and contact the appropriate emergency or utility service when required."
      benefits={['Assessment of visible tree damage', 'Help with fallen limbs and blocked access', 'Planning around structures and landscaping', 'Follow-up trimming or removal recommendations']}
      process={['Describe the damage and immediate concern', 'Assess access and visible hazards', 'Complete the agreed cleanup work', 'Review remaining tree-care needs']}
    />
  )
}
