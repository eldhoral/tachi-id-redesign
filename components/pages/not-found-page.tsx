import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { GROUPS } from '@/lib/business-groups'
import { getDictionary, localePath, type Locale } from '@/lib/i18n'

export function NotFoundPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale)
  const t = dict.notFound

  return (
    <div lang={dict.htmlLang}>
      <SiteHeader locale={locale} />
      <main className="bg-background">
        <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 py-32 text-center sm:px-6 lg:px-8">
          <span className="font-display text-7xl font-bold text-primary/25 sm:text-8xl">
            404
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            {t.heading}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            {t.text}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={localePath(locale, '/')}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.home}
            </Link>
            <Link
              href={`${localePath(locale, '/')}#kontak`}
              className="rounded-full border border-border px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              {t.contact}
            </Link>
          </div>

          <div className="mt-12 w-full border-t border-border pt-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t.groupsLabel}
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              {GROUPS.map((g) => (
                <Link
                  key={g.slug}
                  href={localePath(locale, `/bisnis/${g.slug}`)}
                  className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {g.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
      <WhatsAppButton locale={locale} />
    </div>
  )
}
