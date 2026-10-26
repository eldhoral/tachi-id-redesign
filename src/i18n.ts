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
    title: 'Tachi Group | Holding logistik, periklanan, dan otomotif dari Bekasi',
    description:
      'PT Tantra Hachi Group menaungi Tachi Logistics, Tachi Ads, Tachi Garage, dan Tachi Foodworks. Satu pesan WhatsApp, unit yang tepat menjawab.',
  },
  skip: 'Langsung ke konten',
  slogan: 'Stronger together',
  nav: { label: 'Utama', footer: 'Bawah', units: 'Unit bisnis', services: 'Layanan', clients: 'Klien', contact: 'Kontak', cta: 'Hubungi kami' },
  heroLead: 'Holding dari Bekasi yang menghubungkan bisnis Anda dengan logistik, periklanan, dan kendaraan.',
  statement: 'Logistik, periklanan, dan kendaraan dalam satu manajemen.',
  points: [
    'Satu kontak untuk semua unit bisnis',
    'Jaringan Sabang sampai Merauke',
    'Armada motor sampai kontainer',
    'Layanan logistik 24/7',
    'Tim profesional bersertifikat',
  ],
  dark: {
    title: 'Kami bergerak lebih jauh dari pengiriman, untuk bisnis di seluruh Indonesia.',
    unitsLabel: 'Unit bisnis Tachi Group',
    unitWord: 'unit',
    stats: [
      { label: 'Layanan logistik', value: '24/7' },
      { label: 'Moda pengiriman', value: '3 moda' },
    ],
    reachLabel: 'Jangkauan',
    reach: 'Sabang–Merauke',
    clients: 'Klien yang bekerja bersama kami',
  },
  services: {
    title: 'Satu grup, layanan dari ujung ke ujung',
    groupLabel: 'Pilih layanan',
    ask: 'Tanya via WhatsApp',
    message: (unit: string, label: string) => `Halo ${unit}, saya ingin bertanya soal ${label}.`,
    items: [
      { label: 'Freight', unit: 'Tachi Logistics', text: 'Pengiriman darat, laut, dan udara dengan pelacakan real-time, dari Sabang sampai Merauke.' },
      { label: 'Door-to-door', unit: 'Tachi Logistics', text: 'Dari gudang Anda sampai penerima, termasuk penanganan dokumen ekspor-impor.' },
      { label: 'Supply chain', unit: 'Tachi Logistics', text: 'Solusi rantai pasok yang efisien untuk produktivitas bisnis dan industri.' },
      { label: 'Branding', unit: 'Tachi Ads', text: 'Positioning, narasi merek, dan sistem identitas visual yang konsisten.' },
      { label: 'Digital', unit: 'Tachi Ads', text: 'Perencanaan dan pengelolaan kampanye berbayar di berbagai kanal digital.' },
      { label: 'Konten', unit: 'Tachi Ads', text: 'Produksi konten dan pengelolaan kanal sosial untuk menjaga interaksi audiens.' },
      { label: 'Mobil bekas', unit: 'Tachi Garage', text: 'SUV, MPV, sedan, dan city car yang diperiksa menyeluruh sebelum ditawarkan.' },
      { label: 'F&B', unit: 'Tachi Foodworks', text: 'Lini food & beverage yang sedang disiapkan. Terbuka untuk mitra pertama.' },
    ],
    extras: [['Customs', 'clearance'], ['Produksi', 'kreatif'], ['Mobil bekas', 'terperiksa']],
  },
  process: {
    title: 'Cara kerja: satu pesan, unit yang tepat.',
    prev: 'Langkah sebelumnya',
    next: 'Langkah berikutnya',
    steps: [
      { title: 'Pesan', text: 'Anda mengirim satu pesan WhatsApp ke Tachi Group dan menyebutkan kebutuhan Anda.' },
      { title: 'Pemetaan', text: 'Kami memetakan kebutuhan Anda: pengiriman, kampanye merek, kendaraan, atau gabungannya.' },
      { title: 'Unit yang tepat', text: 'Tim dari unit yang sesuai mengambil alih, dengan satu manajemen di belakangnya.' },
      { title: 'Eksekusi', text: 'Pekerjaan berjalan dengan satu kontak untuk Anda, dari awal sampai selesai.' },
    ],
  },
  units: {
    title: 'Dari strategi sampai eksekusi',
    hello: (unit: string) => `Halo ${unit}, saya ingin bertanya.`,
    items: [
      { name: 'Tachi Logistics', tag: 'Logistik', cta: 'Hubungi Tachi Logistics', text: 'Freight forwarding darat, laut, dan udara, door-to-door, customs clearance, supply chain, dan logistik korporat. Delivering Beyond Limits.' },
      { name: 'Tachi Ads', tag: 'Kreatif', cta: 'Hubungi Tachi Ads', text: 'Brand strategy dan identitas, digital marketing, konten media sosial, dan produksi kreatif. Ideas That Move Brands.' },
      { name: 'Tachi Garage', tag: 'Otomotif', cta: 'Hubungi Tachi Garage', text: 'Mobil bekas terperiksa: SUV, MPV, sedan, hatchback, dan city car, dengan kondisi dan dokumen yang transparan. Drive Away Confident.' },
      { name: 'Tachi Foodworks', tag: 'Segera hadir', cta: 'Jadi mitra', text: 'Lini food & beverage yang sedang kami siapkan. Kami membuka diskusi dengan calon mitra pertama.' },
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
  cta: 'Siap mengembangkan bisnis Anda? Mari bicara.',
  address: 'Jl. Perum Villa Indah Permai Blok E6 No.33, Kota Bekasi 17121',
  footer: {
    chat: 'Chat WhatsApp ↗',
    rights: '© 2026 PT Tantra Hachi Group. All rights reserved',
    photos: 'Foto: Wikimedia Commons (CC BY-SA)',
  },
  notFound: {
    title: 'Halaman tidak ditemukan',
    text: 'Alamat ini tidak ada atau sudah dipindahkan.',
    home: 'Kembali ke beranda',
  },
};

const en: typeof id = {
  meta: {
    title: 'Tachi Group | Logistics, advertising and automotive holding from Bekasi',
    description:
      'PT Tantra Hachi Group runs Tachi Logistics, Tachi Ads, Tachi Garage and Tachi Foodworks. One WhatsApp message and the right unit replies.',
  },
  skip: 'Skip to content',
  slogan: 'Stronger together',
  nav: { label: 'Main', footer: 'Footer', units: 'Business units', services: 'Services', clients: 'Clients', contact: 'Contact', cta: 'Contact us' },
  heroLead: 'A Bekasi holding company that connects your business with logistics, advertising and vehicles.',
  statement: 'Logistics, advertising and vehicles under one management.',
  points: [
    'One contact for every business unit',
    'A network from Sabang to Merauke',
    'Fleet from motorbikes to containers',
    '24/7 logistics service',
    'Certified professional team',
  ],
  dark: {
    title: 'We go further than delivery, for businesses across Indonesia.',
    unitsLabel: 'Tachi Group business units',
    unitWord: 'units',
    stats: [
      { label: 'Logistics service', value: '24/7' },
      { label: 'Shipping modes', value: '3 modes' },
    ],
    reachLabel: 'Coverage',
    reach: 'Sabang–Merauke',
    clients: 'Clients who work with us',
  },
  services: {
    title: 'One group, services from end to end',
    groupLabel: 'Choose a service',
    ask: 'Ask on WhatsApp',
    message: (unit: string, label: string) => `Hello ${unit}, I would like to ask about ${label}.`,
    items: [
      { label: 'Freight', unit: 'Tachi Logistics', text: 'Land, sea and air shipping with real-time tracking, from Sabang to Merauke.' },
      { label: 'Door-to-door', unit: 'Tachi Logistics', text: 'From your warehouse to the recipient, including export and import paperwork.' },
      { label: 'Supply chain', unit: 'Tachi Logistics', text: 'Efficient supply chain solutions for business and industrial productivity.' },
      { label: 'Branding', unit: 'Tachi Ads', text: 'Positioning, brand narrative and a consistent visual identity system.' },
      { label: 'Digital', unit: 'Tachi Ads', text: 'Planning and running paid campaigns across digital channels.' },
      { label: 'Content', unit: 'Tachi Ads', text: 'Content production and social channel management that keeps audiences engaged.' },
      { label: 'Used cars', unit: 'Tachi Garage', text: 'SUVs, MPVs, sedans and city cars, fully inspected before they are offered.' },
      { label: 'F&B', unit: 'Tachi Foodworks', text: 'A food and beverage line in preparation. Open to its first partners.' },
    ],
    extras: [['Customs', 'clearance'], ['Creative', 'production'], ['Inspected', 'used cars']],
  },
  process: {
    title: 'How it works: one message, the right unit.',
    prev: 'Previous step',
    next: 'Next step',
    steps: [
      { title: 'Message', text: 'You send Tachi Group one WhatsApp message describing what you need.' },
      { title: 'Mapping', text: 'We map your need: shipping, a brand campaign, a vehicle, or a mix.' },
      { title: 'The right unit', text: 'The matching unit takes over, with one management team behind it.' },
      { title: 'Execution', text: 'The work runs with one contact for you, from start to finish.' },
    ],
  },
  units: {
    title: 'From strategy to execution',
    hello: (unit: string) => `Hello ${unit}, I would like to ask a question.`,
    items: [
      { name: 'Tachi Logistics', tag: 'Logistics', cta: 'Contact Tachi Logistics', text: 'Land, sea and air freight forwarding, door-to-door, customs clearance, supply chain and corporate logistics. Delivering Beyond Limits.' },
      { name: 'Tachi Ads', tag: 'Creative', cta: 'Contact Tachi Ads', text: 'Brand strategy and identity, digital marketing, social media content and creative production. Ideas That Move Brands.' },
      { name: 'Tachi Garage', tag: 'Automotive', cta: 'Contact Tachi Garage', text: 'Inspected used cars: SUVs, MPVs, sedans, hatchbacks and city cars, with condition and paperwork shown openly. Drive Away Confident.' },
      { name: 'Tachi Foodworks', tag: 'Coming soon', cta: 'Become a partner', text: 'A food and beverage line we are preparing. We are opening talks with our first partners.' },
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
  cta: 'Ready to grow your business? Let’s talk.',
  address: 'Jl. Perum Villa Indah Permai Blok E6 No.33, Kota Bekasi 17121',
  footer: {
    chat: 'Chat on WhatsApp ↗',
    rights: '© 2026 PT Tantra Hachi Group. All rights reserved',
    photos: 'Photos: Wikimedia Commons (CC BY-SA)',
  },
  notFound: {
    title: 'Page not found',
    text: 'This address does not exist or has moved.',
    home: 'Back to home',
  },
};

export const copy = { id, en };
