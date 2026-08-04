// Explicit .ts extension so the standalone node test can resolve this without
// the bundler's path aliases. See lib/whatsapp.test.ts.
import { getDictionary, fill, type Locale } from './i18n.ts'

const WHATSAPP_NUMBER = '6281111840091'

export const whatsAppUrl = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

export function buildWhatsAppUrl(
  data: { name: string; email: string; subject: string; message: string },
  locale: Locale = 'id',
) {
  const t = getDictionary(locale).whatsapp

  const text = [
    fill(t.intro, { name: data.name }),
    data.subject && fill(t.subject, { subject: data.subject }),
    '',
    data.message,
    '',
    fill(t.replyTo, { email: data.email }),
  ]
    .filter(Boolean)
    .join('\n')

  return whatsAppUrl(text)
}
