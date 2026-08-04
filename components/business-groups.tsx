import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { GROUPS } from '@/lib/business-groups'

export function BusinessGroups() {
  return (
    <section id="bisnis" className="scroll-mt-16 bg-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Grup Bisnis
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Lini Bisnis Strategis Kami
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Tiga unit bisnis yang saling bersinergi untuk memperkuat rantai
            nilai bisnis di Indonesia.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((g) => (
            <article
              key={g.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={g.image || '/placeholder.svg'}
                  alt={g.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-background/90 backdrop-blur-sm">
                  <g.icon className="h-5 w-5 text-primary" />
                </div>
                {g.soon && (
                  <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Segera Hadir
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold text-foreground">
                  {/* ponytail: stretched link — title, CTA, and whole card share one <a> */}
                  <Link
                    href={`/bisnis/${g.slug}`}
                    className="transition-colors after:absolute after:inset-0 hover:text-primary"
                  >
                    {g.name}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                  {g.text}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {g.soon ? 'Dalam Pengembangan' : 'Pelajari Lebih Lanjut'}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
