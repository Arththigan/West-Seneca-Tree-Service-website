export default function sitemap() {
  return [
    ['', 1],
    ['/services', 0.9],
    ['/services/tree-removal', 0.9],
    ['/services/tree-trimming', 0.9],
    ['/services/stump-grinding', 0.9],
    ['/services/storm-cleanup', 0.9],
    ['/our-process', 0.7],
    ['/why-us', 0.7],
    ['/contact', 0.9],
    ['/privacy-policy', 0.3],
    ['/terms-conditions', 0.3],
  ].map(([path, priority]) => ({
      url: `https://westsenecatreeremoval.com${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority,
    }))
}
