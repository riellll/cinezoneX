import type { MetadataRoute } from 'next'

// Search and keyword pages have an unbounded URL space (any query, any page
// number) and are rendered per request, so a crawler walking them runs up
// function time without end. Detail pages stay crawlable — they are cached.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/search/', '/keyword/'],
      crawlDelay: 10,
    },
  }
}
