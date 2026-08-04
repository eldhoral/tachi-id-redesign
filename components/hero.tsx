import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      <Image
        src="/hero-towers.png"
        alt="Gedung pencakar langit korporat modern"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-white backdrop-blur-sm">
            PT TANTRA HACHI GROUP
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white text-balance sm:text-6xl lg:text-7xl">
            Tachi Group
          </h1>
          <p className="mt-4 font-display text-xl font-medium tracking-[0.15em] text-white/80 sm:text-2xl">
            STRONGER TOGETHER
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 text-pretty">
            Perusahaan holding modern yang menaungi lini bisnis strategis di
            bidang Logistics, Creative Advertising, dan Food &amp; Beverage —
            memperkuat rantai nilai bisnis di seluruh Indonesia.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/#bisnis"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Jelajahi Grup Bisnis
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/#tentang"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              Tentang Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
