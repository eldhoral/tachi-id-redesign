import {
  ShieldCheck,
  HeartHandshake,
  Zap,
  Users,
  Lightbulb,
  Target,
} from 'lucide-react'

const PRINCIPLES = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    text: 'Kejujuran dan tanggung jawab adalah dasar kami.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Focus',
    text: 'Kepuasan pelanggan adalah tujuan utama kami.',
  },
  {
    icon: Zap,
    title: 'Speed',
    text: 'Ketepatan waktu adalah prioritas utama.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    text: 'Kerja sama yang solid antar tim dan mitra bisnis.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    text: 'Selalu beradaptasi dengan teknologi terbaru.',
  },
]

export function VisionPrinciples() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Vision */}
        <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-primary/5 px-8 py-14 text-foreground sm:px-14">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/30 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20">
                <Target className="h-6 w-6 text-primary" />
              </span>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Visi Kami
              </span>
            </div>
            <p className="mt-6 font-display text-2xl font-semibold leading-snug tracking-tight text-foreground text-balance sm:text-3xl">
              Menjadi perusahaan holding group nasional yang unggul, inovatif,
              dan berkelanjutan dengan jaringan distribusi terintegrasi di
              seluruh Indonesia.
            </p>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Prinsip Kami
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              Nilai yang Kami Pegang
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PRINCIPLES.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/40"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent">
                  <p.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
