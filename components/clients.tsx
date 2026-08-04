import Image from 'next/image'

const CLIENTS = [
  { name: 'DIM Cargo', src: '/clients/dim-cargo.jpg' },
  { name: 'Samudra', src: '/clients/samudra.jpg' },
  { name: 'Klien Tachi Group', src: '/clients/klien-02.jpg' },
  { name: 'Infinith', src: '/clients/infinith.png' },
  { name: 'PT Panca Traktor Indonesia', src: '/clients/panca-traktor.jpg' },
  { name: 'Marui', src: '/clients/marui.jpg' },
  { name: 'KBN', src: '/clients/kbn.jpg' },
  { name: 'Mayora', src: '/clients/mayora.jpg' },
  { name: 'Pertamina', src: '/clients/pertamina.jpg' },
  { name: 'Siemens', src: '/clients/siemens.jpg' },
  { name: 'Indorama', src: '/clients/indorama.jpg' },
  { name: 'Samudera', src: '/clients/samudera.jpg' },
  { name: 'WOOK!', src: '/clients/wook.jpg' },
  { name: 'Hitachi', src: '/clients/hitachi.jpg' },
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

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {CLIENTS.map((c) => (
            <div
              key={c.src}
              className="flex items-center justify-center rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
            >
              <Image
                src={c.src}
                alt={c.name}
                width={320}
                height={160}
                className="h-28 w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
