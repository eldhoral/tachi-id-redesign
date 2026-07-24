import Image from 'next/image'
import { Truck, Megaphone, UtensilsCrossed, ArrowUpRight } from 'lucide-react'

const GROUPS = [
  {
    name: 'Tachi Logistics',
    icon: Truck,
    image: '/business-logistics.png',
    soon: false,
    text: 'Menghadirkan solusi distribusi dan pengiriman terintegrasi dengan standar korporat modern. Kami berkomitmen memberikan layanan tepat waktu, efisien, dan terpercaya untuk mendukung kelancaran rantai pasok bisnis di seluruh Indonesia.',
  },
  {
    name: 'Tachi Ads',
    icon: Megaphone,
    image: '/business-ads.png',
    soon: false,
    text: 'Lini bisnis kreatif yang berfokus pada strategi komunikasi, branding, dan digital marketing. Kami membantu merek tumbuh melalui ide yang berdampak dan eksekusi visual yang kuat, menciptakan hubungan bermakna antara brand dan audiensnya.',
  },
  {
    name: 'Tachi Foodworks',
    icon: UtensilsCrossed,
    image: '/business-food.png',
    soon: true,
    text: 'Lini bisnis Food & Beverage yang tengah kami siapkan untuk menghadirkan produk dan pengalaman kuliner berkualitas. Nantikan kehadiran kami dengan standar rasa dan layanan terbaik.',
  },
]

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
              key={g.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
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
                  {g.name}
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
