'use client'

import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: 'Kantor',
    value:
      'Jalan Perum Villa Indah Permai Blok E6 No.33 RT.7/RW.33, Tl. Pucung, Kota Bekasi, Jawa Barat, ID 17121',
  },
  {
    icon: Phone,
    label: 'Telepon',
    value: '+62 811 1184 0091',
    href: 'tel:+6281111840091',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'tantrahachigroup@tachi.id',
    href: 'mailto:tantrahachigroup@tachi.id',
  },
]

export function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const url = buildWhatsAppUrl({
      name: String(f.get('name') ?? ''),
      email: String(f.get('email') ?? ''),
      subject: String(f.get('subject') ?? ''),
      message: String(f.get('message') ?? ''),
    })
    window.open(url, '_blank', 'noopener')
  }

  return (
    <section id="kontak" className="scroll-mt-16 bg-background py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Kontak
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              Mari Bertumbuh Bersama
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
              Punya pertanyaan atau ingin bermitra dengan Tachi Group? Tim kami
              siap membantu Anda.
            </p>

            <div className="mt-10 space-y-6">
              {CONTACT_INFO.map((c) => (
                <div key={c.label} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="mt-0.5 block leading-relaxed text-muted-foreground transition-colors hover:text-primary"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 leading-relaxed text-muted-foreground">
                        {c.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nama" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Nama lengkap"
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="email@perusahaan.com"
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </Field>
              </div>
              <Field label="Subjek" htmlFor="subject">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Perihal pesan Anda"
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </Field>
              <Field label="Pesan" htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tuliskan pesan Anda…"
                  className="mt-2 w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </Field>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-70"
              >
                <Send className="h-4 w-4" />
                Kirim via WhatsApp
              </button>
              <p className="text-center text-sm text-muted-foreground">
                Pesan Anda akan dibuka di WhatsApp untuk dikirim ke tim kami.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="text-sm font-medium text-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  )
}
