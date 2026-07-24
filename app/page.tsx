import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { BusinessGroups } from '@/components/business-groups'
import { VisionPrinciples } from '@/components/vision-principles'
import { Clients } from '@/components/clients'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <BusinessGroups />
        <VisionPrinciples />
        <Clients />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
