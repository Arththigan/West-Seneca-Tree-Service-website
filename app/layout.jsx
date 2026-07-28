import '../src/styles.css'
import GlobalScrollStory from '../src/GlobalScrollStory.jsx'
import BackToTop from '../src/BackToTop.jsx'
import SiteNav from '../src/SiteNav.jsx'

export const metadata = {
  metadataBase: new URL('https://westsenecatreeremoval.com'),
  title: {
    default: 'West Seneca Tree Service | Tree Removal & Trimming',
    template: '%s | West Seneca Tree Service',
  },
  description: 'Professional tree removal, tree trimming, stump grinding, pruning and storm cleanup in West Seneca, NY. Call (716) 797-8733 for a free estimate.',
  icons: {
    icon: '/west-seneca-tree-service-logo.png',
    apple: '/west-seneca-tree-service-logo.png',
  },
  keywords: [
    'tree service West Seneca NY',
    'tree removal West Seneca',
    'tree trimming West Seneca',
    'stump grinding West Seneca',
    'emergency tree service West Seneca',
  ],
  openGraph: {
    title: 'West Seneca Tree Service',
    description: 'Safe, dependable tree removal and care in West Seneca, NY.',
    type: 'website',
    locale: 'en_US',
    siteName: 'West Seneca Tree Service',
    images: [{ url: '/west-seneca-tree-service-logo.png', alt: 'West Seneca Tree Service logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'West Seneca Tree Service',
    description: 'Tree removal, trimming, stump grinding and storm cleanup in West Seneca, NY.',
    images: ['/west-seneca-tree-service-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#163b2c',
}

export default function RootLayout({ children }) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'TreeService',
    name: 'West Seneca Tree Service',
    url: 'https://westsenecatreeremoval.com',
    logo: 'https://westsenecatreeremoval.com/west-seneca-tree-service-logo.png',
    image: 'https://westsenecatreeremoval.com/west-seneca-tree-service-logo.png',
    telephone: '+1-716-797-8733',
    description: 'Professional tree removal, tree trimming, stump grinding, pruning and storm cleanup in West Seneca, New York.',
    areaServed: [
      { '@type': 'City', name: 'West Seneca' },
      { '@type': 'City', name: 'Buffalo' },
      { '@type': 'City', name: 'Cheektowaga' },
      { '@type': 'City', name: 'Lackawanna' },
      { '@type': 'City', name: 'Depew' },
      { '@type': 'City', name: 'Lancaster' },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '44 Century Dr',
      addressLocality: 'Buffalo',
      addressRegion: 'NY',
      postalCode: '14224',
      addressCountry: 'US',
    },
    priceRange: '$$',
    hasMap: 'https://www.google.com/maps/place/West+Seneca+Tree+Service/',
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      ['How much does tree removal cost in West Seneca?', 'Tree removal pricing depends on the tree’s size, condition, access, nearby structures, and cleanup needs. An on-site estimate provides accurate pricing for the property.'],
      ['Do you provide tree trimming and pruning?', 'Yes. West Seneca Tree Service provides tree trimming and pruning to address damaged or overgrown branches and improve clearance.'],
      ['Can you grind the stump after removing a tree?', 'Yes. Stump grinding can be included with a tree removal or requested for an older stump already on the property.'],
      ['Which areas do you serve?', 'West Seneca Tree Service serves West Seneca and nearby communities including Buffalo, Cheektowaga, Lackawanna, Depew, and Lancaster.'],
    ].map(([name, text]) => ({
      '@type': 'Question',
      name,
      acceptedAnswer: { '@type': 'Answer', text },
    })),
  }

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#163b2c" />
        <meta name="geo.region" content="US-NY" />
        <meta name="geo.placename" content="West Seneca" />
        <meta name="geo.position" content="42.8347288;-78.7597045" />
        <meta name="ICBM" content="42.8347288, -78.7597045" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>
      <body><GlobalScrollStory /><SiteNav />{children}<BackToTop /></body>
    </html>
  )
}
