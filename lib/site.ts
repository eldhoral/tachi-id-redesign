// ponytail: set NEXT_PUBLIC_SITE_URL when deploying anywhere but tachi.id —
// sitemap, robots, OG images and JSON-LD all resolve against this.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.tachi.id'

export const ORG = {
  name: 'Tachi Group',
  legalName: 'PT Tantra Hachi Group',
  phone: '+62 811 1184 0091',
  phoneHref: 'tel:+6281111840091',
  email: 'tantrahachigroup@tachi.id',
  address: {
    street: 'Jalan Perum Villa Indah Permai Blok E6 No.33 RT.7/RW.33',
    locality: 'Tl. Pucung, Kota Bekasi',
    region: 'Jawa Barat',
    postalCode: '17121',
    country: 'ID',
  },
} as const

export const ORG_ADDRESS_LINE = `${ORG.address.street}, ${ORG.address.locality}, ${ORG.address.region}, ID ${ORG.address.postalCode}`

// No API key needed for this form of the embed, unlike the Maps Embed API.
export const ORG_MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ORG_ADDRESS_LINE)}&output=embed`

// ponytail: drop the PDF in public/ and set this path to reveal the download
// button. null keeps it hidden — better than shipping a link that 404s.
export const COMPANY_PROFILE_PDF: string | null = null
