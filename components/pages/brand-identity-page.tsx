import Image from 'next/image'
import Link from 'next/link'
import {
  Infinity as InfinityIcon,
  Swords,
  Palette,
  Type,
  Users,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { getDictionary, localePath, type Locale } from '@/lib/i18n'

const ICONS = [InfinityIcon, Swords, Palette, Type, Users]

export function BrandIdentityPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale)
  const t = dict.brand

  return (
    <div lang={dict.htmlLang}>
      <SiteHeader locale={locale} />
      <main>
        <section className="bg-navy pb-20 pt-32">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
                {t.eyebrow}
              </span>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white text-balance sm:text-5xl">
                {t.heading}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 text-pretty">
                {t.intro}
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-3xl bg-white/5 p-10 ring-1 ring-white/10">
                <Image
                  src="/logo-mark-white.png"
                  alt={t.logoAlt}
                  width={220}
                  height={220}
                  className="h-40 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t.philosophyEyebrow}
            </span>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              {t.philosophyHeading}
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {t.elements.map((el, i) => {
                const Icon = ICONS[i]
                return (
                  <div
                    key={el.title}
                    className="rounded-2xl border border-border bg-card p-7"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                      {el.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">
                      {el.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-secondary/40 py-24">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              {t.closingHeading}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              {t.closingText}
            </p>
            <Link
              href={`${localePath(locale, '/')}#kontak`}
              className="mt-8 inline-flex rounded-full bg-primary px-7 py-3 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              {t.cta}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
      <WhatsAppButton locale={locale} />
    </div>
  )
}
