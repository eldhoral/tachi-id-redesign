import type { Metadata } from 'next'
import { BrandIdentityPage } from '@/components/pages/brand-identity-page'

const DESCRIPTION =
  'Filosofi di balik logo Tachi Group: simbol infinity, pedang samurai, gradasi biru, tipografi modern, dan slogan Stronger Together.'

export const metadata: Metadata = {
  title: 'Brand Identity — Tachi Group',
  description: DESCRIPTION,
  alternates: {
    canonical: '/brand-identity',
    languages: { id: '/brand-identity', en: '/en/brand-identity' },
  },
  openGraph: {
    title: 'Brand Identity — Tachi Group',
    description: DESCRIPTION,
    type: 'article',
    locale: 'id_ID',
    images: [
      { url: '/og/home.jpg', width: 1200, height: 630, alt: 'Tachi Group' },
    ],
  },
}

export default function Page() {
  return <BrandIdentityPage locale="id" />
}
