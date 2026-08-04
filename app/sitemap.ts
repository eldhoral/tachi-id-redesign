import type { MetadataRoute } from 'next'
import { GROUPS } from '@/lib/business-groups'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: SITE_URL, lastModified, changeFrequency: 'monthly', priority: 1 },
    ...GROUPS.map((g) => ({
      url: `${SITE_URL}/bisnis/${g.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
