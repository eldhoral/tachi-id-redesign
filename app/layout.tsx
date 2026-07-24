import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
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
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1e40af',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
