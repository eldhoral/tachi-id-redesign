import { Building, Package, Store, Factory, Ship, ShoppingBag } from 'lucide-react'

const PARTNERS = [
  { name: 'Retail & Distribusi', icon: Store },
  { name: 'Manufaktur', icon: Factory },
  { name: 'E-Commerce', icon: ShoppingBag },
  { name: 'Ekspor & Impor', icon: Ship },
  { name: 'Korporat', icon: Building },
  { name: 'FMCG', icon: Package },
]

export function Clients() {
  return (
    <section id="klien" className="scroll-mt-16 bg-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Klien Kami
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Dipercaya di Berbagai Sektor
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Kami bermitra dengan pelaku bisnis dari beragam industri untuk
            menghadirkan solusi terintegrasi yang andal.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card px-4 py-8 text-center transition-colors hover:border-primary/40"
            >
              <p.icon className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium text-foreground text-pretty">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
