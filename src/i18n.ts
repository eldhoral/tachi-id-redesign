// Page copy for both locales. Indonesian is canonical; English is a translation
// awaiting client review.
export type Lang = 'id' | 'en';

const PHONE = '6281111840091';
export const PHONE_DISPLAY = '+62 811 1184 0091';
export const EMAIL = 'tantrahachigroup@tachi.id';
export const wa = (text?: string) =>
  `https://wa.me/${PHONE}` + (text ? `?text=${encodeURIComponent(text)}` : '');

// Same tilt per step in both languages, so it lives outside the copy.
export const STEP_TILT = [
  'rotateX(6deg) rotateY(-24deg) rotateZ(-2deg)',
  'rotateX(-4deg) rotateY(14deg) rotateZ(-8deg)',
  'rotateX(8deg) rotateY(-10deg) rotateZ(6deg)',
  'rotateX(0deg) rotateY(0deg) rotateZ(-1deg)',
];

const id = {
  meta: {
    title: 'Tachi Group | Logistik, periklanan, dan mobil bekas dari Bekasi',
    description:
      'Tachi Group menaungi Tachi Logistics, Tachi Ads, dan Tachi Garage. Kirim satu pesan WhatsApp, kami teruskan ke tim yang menangani kebutuhan Anda.',
  },
  skip: 'Langsung ke konten',
  slogan: 'Stronger together',
  nav: { label: 'Utama', footer: 'Bawah', units: 'Unit bisnis', services: 'Layanan', clients: 'Klien', contact: 'Kontak', cta: 'Chat WhatsApp' },
  heroLead: 'Kirim barang ke seluruh Indonesia, bangun merek, atau cari mobil bekas yang sudah diperiksa. Semua lewat satu grup dari Bekasi.',
  statement: 'Satu kontak untuk logistik, periklanan, dan kendaraan.',
  points: [
    'Satu nomor WhatsApp untuk semua unit',
    'Pengiriman dari Sabang sampai Merauke',
    'Armada dari motor sampai kontainer',
    'Tim logistik siaga 24 jam, 7 hari',
    'Dokumen ekspor dan impor kami urus',
  ],
  dark: {
    title: 'Kami kirim ke seluruh Indonesia dan mengurus dokumennya sampai barang diterima.',
    unitsLabel: 'Unit bisnis, satu manajemen',
    unitWord: 'unit',
    stats: [
      { label: 'Layanan logistik', value: '24/7' },
      { label: 'Darat, laut, udara', value: '3 moda' },
    ],
    reachLabel: 'Jangkauan',
    reach: 'Sabang–Merauke',
    clients: 'Perusahaan yang sudah bekerja dengan unit kami',
  },
  services: {
    title: 'Pilih layanan, kami hubungkan ke tim yang menanganinya',
    groupLabel: 'Pilih layanan',
    ask: 'Tanya soal ini via WhatsApp',
    message: (unit: string, label: string) => `Halo ${unit}, saya ingin bertanya soal ${label}.`,
    items: [
      { label: 'Freight', unit: 'Tachi Logistics', text: 'Kirim lewat darat, laut, atau udara, dan pantau posisi barang secara real-time.' },
      { label: 'Door-to-door', unit: 'Tachi Logistics', text: 'Kami ambil dari gudang Anda dan antar sampai penerima, termasuk dokumen ekspor dan impor.' },
      { label: 'Supply chain', unit: 'Tachi Logistics', text: 'Kami atur alur barang dari pemasok sampai pelanggan, mengikuti jadwal produksi Anda.' },
      { label: 'Branding', unit: 'Tachi Ads', text: 'Positioning, cerita merek, dan identitas visual yang dipakai sama di semua kanal.' },
      { label: 'Digital', unit: 'Tachi Ads', text: 'Kami rancang, jalankan, dan laporkan kampanye iklan berbayar di kanal digital.' },
      { label: 'Konten', unit: 'Tachi Ads', text: 'Konten rutin untuk media sosial perusahaan Anda, dari ide sampai unggahan.' },
      { label: 'Mobil bekas', unit: 'Tachi Garage', text: 'SUV, MPV, sedan, dan city car. Tiap unit diperiksa dulu, kondisi dan suratnya kami tunjukkan.' },
      { label: 'F&B', unit: 'Tachi Foodworks', text: 'Unit food and beverage yang sedang kami siapkan. Kami mencari mitra dan pemasok pertama.' },
    ],
    extras: [['Customs', 'clearance'], ['Produksi', 'kreatif'], ['Mobil bekas', 'terperiksa']],
  },
  process: {
    title: 'Satu pesan, langsung ke tim yang tepat.',
    prev: 'Langkah sebelumnya',
    next: 'Langkah berikutnya',
    steps: [
      { title: 'Pesan', text: 'Tulis kebutuhan Anda di WhatsApp. Satu kalimat pun cukup.' },
      { title: 'Pemetaan', text: 'Kami tentukan unit yang menangani: logistik, iklan, kendaraan, atau gabungannya.' },
      { title: 'Tim unit', text: 'Orang dari unit tersebut melanjutkan percakapan dengan Anda.' },
      { title: 'Kerja jalan', text: 'Anda tetap punya satu kontak dari awal sampai pekerjaan selesai.' },
    ],
  },
  units: {
    title: 'Empat unit, satu manajemen',
    hello: (unit: string) => `Halo ${unit}, saya ingin bertanya.`,
    items: [
      { name: 'Tachi Logistics', tag: 'Logistik', cta: 'Minta penawaran pengiriman', text: 'Freight darat, laut, dan udara, pengiriman door to door, customs clearance, dan logistik korporat untuk kebutuhan industri.' },
      { name: 'Tachi Ads', tag: 'Kreatif', cta: 'Kirim brief ke Tachi Ads', text: 'Strategi merek, identitas visual, iklan digital, dan produksi konten untuk perusahaan yang ingin dikenal pembelinya.' },
      { name: 'Tachi Garage', tag: 'Otomotif', cta: 'Tanya stok mobil', text: 'Mobil bekas siap pakai, dari SUV sampai city car. Kondisi dan surat kendaraan kami buka sebelum Anda membayar.' },
      { name: 'Tachi Foodworks', tag: 'Segera hadir', cta: 'Daftar jadi mitra', text: 'Unit food and beverage yang sedang kami siapkan. Calon mitra dan pemasok bisa menghubungi kami sekarang.' },
    ],
    alt: {
      trucks: 'Truk-truk di rest area Tol Trans-Sumatra',
      mpv: 'MPV perak dilihat dari depan',
      sabang: 'Pelabuhan Balohan, Sabang',
      tugu: 'Tugu 0 km Merauke–Sabang',
    },
    chat: 'Chat via WhatsApp',
    ship: ['Kirim dari Sabang', 'sampai Merauke'],
  },
  cta: 'Ceritakan kebutuhan Anda. Tim yang tepat akan membalas.',
  address: 'Jl. Perum Villa Indah Permai Blok E6 No.33, Kota Bekasi 17121',
  footer: {
    chat: 'Chat WhatsApp ↗',
    rights: '© 2026 PT Tantra Hachi Group. All rights reserved',
  },
  notFound: {
    title: 'Halaman tidak ditemukan',
    text: 'Alamat ini tidak ada atau sudah dipindahkan.',
    home: 'Kembali ke beranda',
  },
};

const en: typeof id = {
  meta: {
    title: 'Tachi Group | Logistics, advertising and used cars from Bekasi',
    description:
      'Tachi Group runs Tachi Logistics, Tachi Ads and Tachi Garage. Send one WhatsApp message and we pass it to the team that handles your request.',
  },
  skip: 'Skip to content',
  slogan: 'Stronger together',
  nav: { label: 'Main', footer: 'Footer', units: 'Business units', services: 'Services', clients: 'Clients', contact: 'Contact', cta: 'Chat on WhatsApp' },
  heroLead: 'Ship goods anywhere in Indonesia, build your brand, or buy an inspected used car. All through one group based in Bekasi.',
  statement: 'One contact for logistics, advertising and vehicles.',
  points: [
    'One WhatsApp number for every unit',
    'Delivery from Sabang to Merauke',
    'A fleet from motorbikes to containers',
    'Logistics team on call 24/7',
    'Export and import paperwork handled',
  ],
  dark: {
    title: 'We ship across Indonesia and handle the paperwork until your goods arrive.',
    unitsLabel: 'Business units, one management',
    unitWord: 'units',
    stats: [
      { label: 'Logistics service', value: '24/7' },
      { label: 'Land, sea, air', value: '3 modes' },
    ],
    reachLabel: 'Coverage',
    reach: 'Sabang–Merauke',
    clients: 'Companies that already work with our units',
  },
  services: {
    title: 'Pick a service and we connect you to the team that runs it',
    groupLabel: 'Choose a service',
    ask: 'Ask about this on WhatsApp',
    message: (unit: string, label: string) => `Hello ${unit}, I would like to ask about ${label}.`,
    items: [
      { label: 'Freight', unit: 'Tachi Logistics', text: 'Ship by land, sea or air, and follow your cargo in real time.' },
      { label: 'Door-to-door', unit: 'Tachi Logistics', text: 'We collect from your warehouse and deliver to the recipient, export and import documents included.' },
      { label: 'Supply chain', unit: 'Tachi Logistics', text: 'We plan how goods move from supplier to customer, in step with your production schedule.' },
      { label: 'Branding', unit: 'Tachi Ads', text: 'Positioning, brand story and a visual identity used the same way on every channel.' },
      { label: 'Digital', unit: 'Tachi Ads', text: 'We plan, run and report on paid advertising campaigns across digital channels.' },
      { label: 'Content', unit: 'Tachi Ads', text: 'Regular content for your company’s social media, from idea to published post.' },
      { label: 'Used cars', unit: 'Tachi Garage', text: 'SUVs, MPVs, sedans and city cars. Every car is inspected first, and we show you its condition and papers.' },
      { label: 'F&B', unit: 'Tachi Foodworks', text: 'A food and beverage unit we are preparing now. We are looking for our first partners and suppliers.' },
    ],
    extras: [['Customs', 'clearance'], ['Creative', 'production'], ['Inspected', 'used cars']],
  },
  process: {
    title: 'One message, straight to the right team.',
    prev: 'Previous step',
    next: 'Next step',
    steps: [
      { title: 'Message', text: 'Write what you need on WhatsApp. One sentence is enough.' },
      { title: 'Mapping', text: 'We decide which unit handles it: logistics, advertising, vehicles, or a mix.' },
      { title: 'Unit team', text: 'Someone from that unit picks up the conversation with you.' },
      { title: 'Work starts', text: 'You keep one contact from the first message until the job is done.' },
    ],
  },
  units: {
    title: 'Four units, one management',
    hello: (unit: string) => `Hello ${unit}, I would like to ask a question.`,
    items: [
      { name: 'Tachi Logistics', tag: 'Logistics', cta: 'Request a shipping quote', text: 'Land, sea and air freight, door to door delivery, customs clearance and corporate logistics for industrial needs.' },
      { name: 'Tachi Ads', tag: 'Creative', cta: 'Send Tachi Ads a brief', text: 'Brand strategy, visual identity, digital ads and content production for companies that want buyers to know their name.' },
      { name: 'Tachi Garage', tag: 'Automotive', cta: 'Ask what is in stock', text: 'Road ready used cars, from SUVs to city cars. We show you the condition and papers before you pay.' },
      { name: 'Tachi Foodworks', tag: 'Coming soon', cta: 'Apply as a partner', text: 'A food and beverage unit we are preparing now. Future partners and suppliers can contact us today.' },
    ],
    alt: {
      trucks: 'Trucks at a rest area on the Trans-Sumatra Toll Road',
      mpv: 'Silver MPV seen from the front',
      sabang: 'Balohan Port, Sabang',
      tugu: 'Kilometre zero monument, Merauke–Sabang',
    },
    chat: 'Chat on WhatsApp',
    ship: ['Ship from Sabang', 'to Merauke'],
  },
  cta: 'Tell us what you need. The right team will reply.',
  address: 'Jl. Perum Villa Indah Permai Blok E6 No.33, Kota Bekasi 17121',
  footer: {
    chat: 'Chat on WhatsApp ↗',
    rights: '© 2026 PT Tantra Hachi Group. All rights reserved',
  },
  notFound: {
    title: 'Page not found',
    text: 'This address does not exist or has moved.',
    home: 'Back to home',
  },
};

export const copy = { id, en };
