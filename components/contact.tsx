'use client'

import { MapPin, Phone, Mail, Send, Download } from 'lucide-react'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import {
  ORG,
  ORG_ADDRESS_LINE,
  ORG_MAP_EMBED,
  COMPANY_PROFILE_PDF,
} from '@/lib/site'
import { getDictionary, type Locale } from '@/lib/i18n'

const FIELD_CLASS =
  'mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20'

export function Contact({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).contact

  const CONTACT_INFO = [
    { icon: MapPin, label: t.office, value: ORG_ADDRESS_LINE },
    { icon: Phone, label: t.phone, value: ORG.phone, href: ORG.phoneHref },
    {
      icon: Mail,
      label: t.email,
      value: ORG.email,
      href: `mailto:${ORG.email}`,
    },
  ]

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const url = buildWhatsAppUrl(
      {
        name: String(f.get('name') ?? ''),
        email: String(f.get('email') ?? ''),
        subject: String(f.get('subject') ?? ''),
        message: String(f.get('message') ?? ''),
      },
      locale,
    )
    window.open(url, '_blank', 'noopener')
  }

  return (
    <section id="kontak" className="scroll-mt-16 bg-background py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              {t.heading}
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
              {t.text}
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

            {COMPANY_PROFILE_PDF && (
              <a
                href={COMPANY_PROFILE_PDF}
                download
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <Download className="h-4 w-4" />
                {t.download}
              </a>
            )}

            <div className="mt-10 overflow-hidden rounded-2xl border border-border">
              <iframe
                src={ORG_MAP_EMBED}
                title={t.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label={t.fieldName} htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder={t.phName}
                    className={FIELD_CLASS}
                  />
                </Field>
                <Field label={t.fieldEmail} htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={t.phEmail}
                    className={FIELD_CLASS}
                  />
                </Field>
              </div>
              <Field label={t.fieldSubject} htmlFor="subject">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder={t.phSubject}
                  className={FIELD_CLASS}
                />
              </Field>
              <Field label={t.fieldMessage} htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder={t.phMessage}
                  className={`${FIELD_CLASS} resize-none`}
                />
              </Field>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-70"
              >
                <Send className="h-4 w-4" />
                {t.submit}
              </button>
              <p className="text-center text-sm text-muted-foreground">
                {t.note}
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
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
    </div>
  )
}
