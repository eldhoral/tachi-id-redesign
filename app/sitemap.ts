import type { MetadataRoute } from 'next'
import { GROUPS } from '@/lib/business-groups'
import { SITE_URL } from '@/lib/site'
import { localePath } from '@/lib/i18n'

/** Every page exists in both languages — emit both, cross-linked via hreflang. */
const PATHS = [
  { path: '/', changeFrequency: 'monthly' as const, priority: 1 },
  { path: '/brand-identity', changeFrequency: 'yearly' as const, priority: 0.6 },
  ...GROUPS.map((g) => ({
    path: `/bisnis/${g.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  })),
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return PATHS.flatMap(({ path, changeFrequency, priority }) => {
    const languages = {
      id: `${SITE_URL}${localePath('id', path)}`,
      en: `${SITE_URL}${localePath('en', path)}`,
    }
    return [
      {
        url: languages.id,
        lastModified,
        changeFrequency,
        priority,
        alternates: { languages },
      },
      {
        url: languages.en,
        lastModified,
        changeFrequency,
        priority: priority - 0.1,
        alternates: { languages },
      },
    ]
  })
}
