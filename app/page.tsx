import { HomePage } from '@/components/pages/home-page'

export const metadata = {
  alternates: { canonical: '/', languages: { id: '/', en: '/en' } },
}

export default function Page() {
  return <HomePage locale="id" />
}
