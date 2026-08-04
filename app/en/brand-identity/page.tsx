import type { Metadata } from 'next'
import { BrandIdentityPage } from '@/components/pages/brand-identity-page'

const DESCRIPTION =
  "The philosophy behind the Tachi Group logo: the infinity symbol, the samurai sword, the blue gradient, modern typography and the Stronger Together slogan."

export const metadata: Metadata = {
  title: 'Brand Identity — Tachi Group',
  description: DESCRIPTION,
  alternates: {
    canonical: '/en/brand-identity',
    languages: { id: '/brand-identity', en: '/en/brand-identity' },
  },
  openGraph: {
    title: 'Brand Identity — Tachi Group',
    description: DESCRIPTION,
    type: 'article',
    locale: 'en_US',
    images: [
      { url: '/og/home.jpg', width: 1200, height: 630, alt: 'Tachi Group' },
    ],
  },
}

export default function Page() {
  return <BrandIdentityPage locale="en" />
}
