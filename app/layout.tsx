import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

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
  // ponytail: set NEXT_PUBLIC_SITE_URL when deploying anywhere but tachi.id,
  // otherwise OG images resolve to a host that doesn't serve them.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.tachi.id',
  ),
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
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
