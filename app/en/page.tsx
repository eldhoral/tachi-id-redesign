import type { Metadata } from 'next'
import { HomePage } from '@/components/pages/home-page'

export const metadata: Metadata = {
  title: 'Tachi Group — Stronger Together',
  description:
    'PT Tantra Hachi Group (Tachi Group) is a modern holding company with strategic business lines in Logistics, Creative Advertising and Food & Beverage in Indonesia.',
  alternates: { canonical: '/en', languages: { id: '/', en: '/en' } },
  openGraph: { locale: 'en_US' },
}

export default function Page() {
  return <HomePage locale="en" />
}
