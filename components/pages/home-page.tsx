import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { BusinessGroups } from '@/components/business-groups'
import { VisionPrinciples } from '@/components/vision-principles'
import { Clients } from '@/components/clients'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { getDictionary, type Locale } from '@/lib/i18n'

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <div lang={getDictionary(locale).htmlLang}>
      <SiteHeader locale={locale} />
      <main>
        <Hero locale={locale} />
        <About locale={locale} />
        <BusinessGroups locale={locale} />
        <VisionPrinciples locale={locale} />
        <Clients locale={locale} />
        <Contact locale={locale} />
      </main>
      <SiteFooter locale={locale} />
      <WhatsAppButton locale={locale} />
    </div>
  )
}
