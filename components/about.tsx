import { Building2, Layers, TrendingUp } from 'lucide-react'
import { getDictionary, type Locale } from '@/lib/i18n'

const ICONS = [Layers, TrendingUp, Building2]

export function About({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).about

  return (
    <section id="tentang" className="scroll-mt-16 bg-background py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              {t.heading}
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              {t.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {t.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-bold text-primary">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-sm text-muted-foreground text-pretty">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid gap-4">
            {t.highlights.map((h, i) => {
              const Icon = ICONS[i]
              return (
                <div
                  key={h.title}
                  className="flex gap-5 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {h.title}
                    </h3>
                    <p className="mt-1 leading-relaxed text-muted-foreground">
                      {h.text}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
