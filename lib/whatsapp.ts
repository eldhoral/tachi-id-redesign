const WHATSAPP_NUMBER = '6281111840091'

export const whatsAppUrl = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

export function buildWhatsAppUrl(data: {
  name: string
  email: string
  subject: string
  message: string
}) {
  const text = [
    `Halo Tachi Group, saya ${data.name}.`,
    data.subject && `Perihal: ${data.subject}`,
    '',
    data.message,
    '',
    `Balas ke: ${data.email}`,
  ]
    .filter(Boolean)
    .join('\n')

  return whatsAppUrl(text)
}
