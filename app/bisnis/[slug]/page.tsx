import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Check } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { GROUPS, getGroup } from '@/lib/business-groups'

export function generateStaticParams() {
  return GROUPS.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const group = getGroup((await params).slug)
  if (!group) return {}
  const title = `${group.name} — Tachi Group`
  const images = [
    { url: `/og/${group.slug}.jpg`, width: 1200, height: 630, alt: group.name },
  ]
  return {
    title,
    description: group.text,
    openGraph: {
      title,
      description: group.text,
      type: 'article',
      locale: 'id_ID',
      images,
    },
    twitter: { card: 'summary_large_image', title, images },
  }
}

export default async function BusinessGroupPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const group = getGroup((await params).slug)
  if (!group) notFound()

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative isolate flex min-h-[60vh] items-end overflow-hidden pb-16 pt-32">
          <Image
            src={group.image}
            alt={group.name}
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-navy/80 to-navy/40" />
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/#bisnis"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Grup Bisnis
            </Link>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-background/90 backdrop-blur-sm">
                <group.icon className="h-6 w-6 text-primary" />
              </div>
              {group.soon && (
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Segera Hadir
                </span>
              )}
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-white text-balance sm:text-5xl">
              {group.name}
            </h1>
            <p className="mt-3 font-display text-xl text-primary-foreground/80">
              {group.tagline}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 text-pretty">
              {group.text}
            </p>
          </div>
        </section>

        {group.reasons.length > 0 && (
          <section className="bg-background py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Mengapa Memilih Kami
              </span>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
                Keunggulan {group.name}
              </h2>
              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {group.reasons.map((r) => (
                  <div
                    key={r.title}
                    className="rounded-2xl border border-border bg-card p-6"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                      {r.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">
                      {r.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {group.services.length > 0 && (
          <section className="bg-secondary/40 py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Layanan
              </span>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
                Apa yang Kami Kerjakan
              </h2>
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {group.services.map((s, i) => (
                  <div
                    key={s.title}
                    className="flex gap-5 rounded-2xl border border-border bg-card p-6"
                  >
                    <span className="font-display text-2xl font-bold text-primary/40">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {s.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">
                        {s.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-background py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-navy px-8 py-14 text-center sm:px-14">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
                {group.cta}
              </h2>
              <Link
                href="/#kontak"
                className="mt-8 inline-flex rounded-full bg-primary px-7 py-3 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
