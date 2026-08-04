import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { ORG, SITE_URL } from '@/lib/site'
import './globals.css'

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: ORG.name,
  legalName: ORG.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/tachi-group-logo-full.png`,
  image: `${SITE_URL}/og/home.jpg`,
  description:
    'Perusahaan holding modern yang menaungi lini bisnis Logistics, Creative Advertising, dan Food & Beverage di Indonesia.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: ORG.address.street,
    addressLocality: ORG.address.locality,
    addressRegion: ORG.address.region,
    postalCode: ORG.address.postalCode,
    addressCountry: ORG.address.country,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: ORG.phone,
    email: ORG.email,
    areaServed: 'ID',
    availableLanguage: ['id', 'en'],
  },
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Tachi Group — Stronger Together',
  description:
    'PT Tantra Hachi Group (Tachi Group) adalah perusahaan holding modern yang menaungi lini bisnis strategis di bidang Logistics, Creative Advertising, dan Food & Beverage di Indonesia.',
  generator: 'v0.app',
  keywords: [
    'Tachi Group',
    'PT Tantra Hachi Group',
    'holding company Indonesia',
    'Tachi Logistics',
    'Tachi Ads',
    'Tachi Foodworks',
  ],
  openGraph: {
    title: 'Tachi Group — Stronger Together',
    description:
      'Perusahaan holding modern yang menaungi lini bisnis Logistics, Creative Advertising, dan Food & Beverage di Indonesia.',
    type: 'website',
    locale: 'id_ID',
    images: [
      {
        url: '/og/home.jpg',
        width: 1200,
        height: 630,
        alt: 'Tachi Group — Stronger Together',
      },
    ],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#3B5F8A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${manrope.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_SCHEMA),
          }}
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
