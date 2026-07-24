import { Building2, Layers, TrendingUp } from 'lucide-react'

const STATS = [
  { value: '3+', label: 'Lini Bisnis Strategis' },
  { value: '2026', label: 'Berkomitmen & Bertumbuh' },
  { value: '100%', label: 'Fokus pada Kualitas' },
]

const HIGHLIGHTS = [
  {
    icon: Layers,
    title: 'Sinergi Lintas Sektor',
    text: 'Menciptakan kolaborasi antar unit bisnis untuk keunggulan kompetitif.',
  },
  {
    icon: TrendingUp,
    title: 'Inovasi & Efisiensi',
    text: 'Menghadirkan solusi modern dengan kualitas berkelanjutan.',
  },
  {
    icon: Building2,
    title: 'Manajemen Terpadu',
    text: 'Didukung tim profesional dan sistem manajemen yang solid.',
  },
]

export function About() {
  return (
    <section id="tentang" className="scroll-mt-16 bg-background py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Tentang Kami
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              Tentang Tachi Group
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                PT Tantra Hachi Group atau Tachi Group adalah perusahaan holding
                modern yang menaungi berbagai lini bisnis strategis di bidang
                Logistics, Creative Advertising, dan Food &amp; Beverage.
              </p>
              <p>
                Didirikan dengan visi untuk menjadi mitra terpercaya dalam
                memperkuat rantai nilai bisnis di Indonesia, kami berkomitmen
                menghadirkan inovasi, efisiensi, dan kualitas berkelanjutan di
                setiap grup bisnis kami.
              </p>
              <p>
                Dengan dukungan tim profesional dan sistem manajemen terpadu,
                kami berfokus pada penciptaan sinergi lintas sektor — memastikan
                setiap unit bisnis tumbuh dengan keunggulan kompetitif dan
                standar layanan terbaik.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {STATS.map((s) => (
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
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.title}
                className="flex gap-5 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent">
                  <h.icon className="h-6 w-6 text-primary" />
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
