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
  heroLead: 'Logistik, periklanan, dan mobil bekas dari satu grup. Satu pesan WhatsApp, tim yang tepat membalas.',
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
      { name: 'Tachi Logistics', tag: 'Logistik', alt: 'Truk melintas di jalan tol di bawah jalan layang', cta: 'Minta penawaran pengiriman', text: 'Freight darat, laut, dan udara, pengiriman door to door, customs clearance, dan logistik korporat untuk kebutuhan industri.' },
      { name: 'Tachi Ads', tag: 'Kreatif', alt: 'Desainer bekerja dengan tablet gambar dan kartu warna', cta: 'Kirim brief ke Tachi Ads', text: 'Strategi merek, identitas visual, iklan digital, dan produksi konten untuk perusahaan yang ingin dikenal pembelinya.' },
      { name: 'Tachi Garage', tag: 'Otomotif', alt: 'MPV perak dilihat dari depan', cta: 'Tanya stok mobil', text: 'Mobil bekas siap pakai, dari SUV sampai city car. Kondisi dan surat kendaraan kami buka sebelum Anda membayar.' },
      { name: 'Tachi Foodworks', tag: 'Segera hadir', alt: 'Sate, soto, dan nasi di sebuah rumah makan di Yogyakarta', cta: 'Daftar jadi mitra', text: 'Unit food and beverage yang sedang kami siapkan. Calon mitra dan pemasok bisa menghubungi kami sekarang.' },
    ],
    alt: {
      sabang: 'Pelabuhan Balohan, Sabang',
      tugu: 'Tugu 0 km Merauke–Sabang',
    },
    chat: 'Chat via WhatsApp',
    ship: ['Kirim dari Sabang', 'sampai Merauke'],
  },
  reel: { label: 'Video truk di jalan tol Indonesia, dengan rute dari Sabang sampai Merauke', play: 'Putar video', pause: 'Jeda video' },
  cta: 'Ceritakan kebutuhan Anda. Tim yang tepat akan membalas.',
  address: 'Jl. Perum Villa Indah Permai Blok E6 No.33, Kota Bekasi 17121',
  footer: {
    chat: 'Chat WhatsApp ↗',
    rights: '© 2026 PT Tantra Hachi Group. All rights reserved',
  },
  unitPage: {
    servicesTitle: 'Layanan',
    othersTitle: 'Unit lain di Tachi Group',
    soon: 'Segera hadir',
    crumbs: 'Navigasi lokasi',
  },
  pages: {
    logistics: {
      name: 'Tachi Logistics',
      title: 'Jasa Freight Forwarding dan Ekspedisi dari Bekasi | Tachi Logistics',
      description: 'Tachi Logistics melayani pengiriman darat, laut, dan udara ke seluruh Indonesia, door to door, customs clearance, dan logistik korporat. Minta penawaran lewat WhatsApp.',
      lead: 'Pengiriman darat, laut, dan udara dari Sabang sampai Merauke, lengkap dengan dokumen ekspor dan impor yang kami urus.',
      servicesTitle: '',
      services: [
        { title: 'Freight forwarding', text: 'Kirim lewat darat, laut, atau udara, dan pantau posisi barang secara real-time.' },
        { title: 'Door to door', text: 'Kami ambil dari gudang Anda dan antar sampai penerima, termasuk dokumen ekspor dan impor.' },
        { title: 'Customs clearance', text: 'Pengurusan dokumen kepabeanan ekspor dan impor, cepat dan akurat.' },
        { title: 'Supply chain', text: 'Kami atur alur barang dari pemasok sampai pelanggan, mengikuti jadwal produksi Anda.' },
        { title: 'Logistik korporat', text: 'Layanan logistik khusus untuk kebutuhan bisnis dan industri.' },
      ],
      whyTitle: 'Kenapa Tachi Logistics',
      reasons: [
        { title: 'Sabang sampai Merauke', text: 'Jangkauan pengiriman ke seluruh wilayah Indonesia.' },
        { title: 'Motor sampai kontainer', text: 'Armada dipilih sesuai ukuran dan jenis muatan Anda.' },
        { title: 'Tarif transparan', text: 'Harga jelas di awal, tanpa biaya tersembunyi.' },
        { title: 'Siaga 24/7', text: 'Tim kami bisa dihubungi kapan pun pengiriman Anda butuh perhatian.' },
      ],
      cta: 'Minta penawaran pengiriman',
      wa: 'Halo Tachi Logistics, saya ingin minta penawaran pengiriman.',
      closing: 'Ceritakan rute dan muatan Anda. Kami kirim penawarannya.',
    },
    ads: {
      name: 'Tachi Ads',
      title: 'Agensi Branding dan Digital Marketing dari Bekasi | Tachi Ads',
      description: 'Tachi Ads mengerjakan strategi merek, identitas visual, iklan digital, dan produksi konten untuk perusahaan di Indonesia. Kirim brief lewat WhatsApp.',
      lead: 'Strategi merek, identitas visual, iklan digital, dan produksi konten, dikerjakan satu tim dari brief sampai materi siap tayang.',
      servicesTitle: '',
      services: [
        { title: 'Strategi dan identitas merek', text: 'Positioning, cerita merek, dan identitas visual yang dipakai sama di semua kanal.' },
        { title: 'Digital marketing', text: 'Kami rancang, jalankan, dan laporkan kampanye iklan berbayar di kanal digital.' },
        { title: 'Konten dan media sosial', text: 'Konten rutin untuk media sosial perusahaan Anda, dari ide sampai unggahan.' },
        { title: 'Produksi kreatif', text: 'Desain grafis, foto produk, dan materi audio visual siap tayang.' },
      ],
      whyTitle: 'Kenapa Tachi Ads',
      reasons: [
        { title: 'Mulai dari audiens', text: 'Kampanye dirancang dari riset audiens, lalu diukur hasilnya.' },
        { title: 'Satu tim', text: 'Strategist, desainer, dan copywriter bekerja dalam satu alur.' },
        { title: 'Dari konsep sampai file final', text: 'Ide besar dan materi harian ditangani tim yang sama.' },
      ],
      cta: 'Kirim brief ke Tachi Ads',
      wa: 'Halo Tachi Ads, saya ingin mengirim brief.',
      closing: 'Ceritakan merek dan target Anda. Kami siapkan langkah pertamanya.',
    },
    garage: {
      name: 'Tachi Garage',
      title: 'Jual Mobil Bekas Terperiksa di Bekasi | Tachi Garage',
      description: 'Tachi Garage menjual mobil bekas yang sudah diperiksa: SUV, MPV, sedan, hatchback, dan city car, dengan kondisi dan surat yang transparan. Tanya stok lewat WhatsApp.',
      lead: 'Mobil bekas siap pakai, dari SUV sampai city car. Kondisi dan surat kendaraan kami tunjukkan sebelum Anda membayar.',
      servicesTitle: 'Jenis mobil',
      services: [
        { title: 'SUV', text: 'Kabin lega untuk keluarga dan perjalanan jauh.' },
        { title: 'MPV', text: 'Pilihan keluarga Indonesia dengan kapasitas penumpang lebih banyak.' },
        { title: 'Sedan', text: 'Nyaman dan efisien untuk kebutuhan harian di kota.' },
        { title: 'Hatchback dan city car', text: 'Lincah dan hemat bahan bakar di lalu lintas padat.' },
      ],
      whyTitle: 'Kenapa Tachi Garage',
      reasons: [
        { title: 'Unit diperiksa', text: 'Setiap mobil melalui pemeriksaan menyeluruh sebelum ditawarkan.' },
        { title: 'Kondisi apa adanya', text: 'Kondisi kendaraan dan kelengkapan surat kami sampaikan terbuka.' },
        { title: 'Harga wajar', text: 'Penawaran mengikuti kondisi pasar, tanpa biaya tersembunyi.' },
      ],
      cta: 'Tanya stok mobil',
      wa: 'Halo Tachi Garage, saya ingin tanya stok mobil.',
      closing: 'Sebutkan jenis mobil dan anggaran Anda. Kami kirim pilihan yang ada.',
    },
    foodworks: {
      name: 'Tachi Foodworks',
      title: 'Tachi Foodworks, unit food and beverage Tachi Group',
      description: 'Tachi Foodworks adalah unit food and beverage Tachi Group yang sedang disiapkan. Calon mitra dan pemasok bisa menghubungi kami lewat WhatsApp.',
      lead: 'Unit food and beverage yang sedang kami siapkan. Calon mitra dan pemasok bisa menghubungi kami sekarang.',
      servicesTitle: '',
      services: [] as { title: string; text: string }[],
      whyTitle: '',
      reasons: [] as { title: string; text: string }[],
      cta: 'Daftar jadi mitra',
      wa: 'Halo Tachi Foodworks, saya tertarik menjadi mitra.',
      closing: 'Tertarik jadi mitra atau pemasok? Ceritakan bisnis Anda.',
    },
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
  heroLead: 'Logistics, advertising and used cars from one group. One WhatsApp message, and the right team replies.',
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
      { name: 'Tachi Logistics', tag: 'Logistics', alt: 'Trucks on a toll road beneath a flyover', cta: 'Request a shipping quote', text: 'Land, sea and air freight, door to door delivery, customs clearance and corporate logistics for industrial needs.' },
      { name: 'Tachi Ads', tag: 'Creative', alt: 'A designer working with a drawing tablet and colour swatches', cta: 'Send Tachi Ads a brief', text: 'Brand strategy, visual identity, digital ads and content production for companies that want buyers to know their name.' },
      { name: 'Tachi Garage', tag: 'Automotive', alt: 'Silver MPV seen from the front', cta: 'Ask what is in stock', text: 'Road ready used cars, from SUVs to city cars. We show you the condition and papers before you pay.' },
      { name: 'Tachi Foodworks', tag: 'Coming soon', alt: 'Satay, soto and rice at a restaurant in Yogyakarta', cta: 'Apply as a partner', text: 'A food and beverage unit we are preparing now. Future partners and suppliers can contact us today.' },
    ],
    alt: {
      sabang: 'Balohan Port, Sabang',
      tugu: 'Kilometre zero monument, Merauke–Sabang',
    },
    chat: 'Chat on WhatsApp',
    ship: ['Ship from Sabang', 'to Merauke'],
  },
  reel: { label: 'Video of trucks on Indonesian toll roads, with a route from Sabang to Merauke', play: 'Play video', pause: 'Pause video' },
  cta: 'Tell us what you need. The right team will reply.',
  address: 'Jl. Perum Villa Indah Permai Blok E6 No.33, Kota Bekasi 17121',
  footer: {
    chat: 'Chat on WhatsApp ↗',
    rights: '© 2026 PT Tantra Hachi Group. All rights reserved',
  },
  unitPage: {
    servicesTitle: 'Services',
    othersTitle: 'Other Tachi Group units',
    soon: 'Coming soon',
    crumbs: 'Breadcrumb',
  },
  pages: {
    logistics: {
      name: 'Tachi Logistics',
      title: 'Freight Forwarding and Shipping from Bekasi | Tachi Logistics',
      description: 'Tachi Logistics ships by land, sea and air across Indonesia, with door to door delivery, customs clearance and corporate logistics. Request a quote on WhatsApp.',
      lead: 'Land, sea and air shipping from Sabang to Merauke, with the export and import paperwork handled for you.',
      servicesTitle: '',
      services: [
        { title: 'Freight forwarding', text: 'Ship by land, sea or air, and follow your cargo in real time.' },
        { title: 'Door to door', text: 'We collect from your warehouse and deliver to the recipient, export and import documents included.' },
        { title: 'Customs clearance', text: 'Fast, accurate handling of export and import customs paperwork.' },
        { title: 'Supply chain', text: 'We plan how goods move from supplier to customer, in step with your production schedule.' },
        { title: 'Corporate logistics', text: 'Dedicated logistics for business and industrial needs.' },
      ],
      whyTitle: 'Why Tachi Logistics',
      reasons: [
        { title: 'Sabang to Merauke', text: 'Delivery coverage across every region of Indonesia.' },
        { title: 'Motorbikes to containers', text: 'The fleet is matched to the size and type of your load.' },
        { title: 'Transparent rates', text: 'Clear pricing up front, with no hidden charges.' },
        { title: 'On call 24/7', text: 'Our team is reachable whenever a shipment needs attention.' },
      ],
      cta: 'Request a shipping quote',
      wa: 'Hello Tachi Logistics, I would like a shipping quote.',
      closing: 'Tell us the route and the load. We will send you a quote.',
    },
    ads: {
      name: 'Tachi Ads',
      title: 'Branding and Digital Marketing Agency from Bekasi | Tachi Ads',
      description: 'Tachi Ads handles brand strategy, visual identity, digital ads and content production for companies in Indonesia. Send a brief on WhatsApp.',
      lead: 'Brand strategy, visual identity, digital ads and content production, run by one team from brief to broadcast-ready files.',
      servicesTitle: '',
      services: [
        { title: 'Brand strategy and identity', text: 'Positioning, brand story and a visual identity used the same way on every channel.' },
        { title: 'Digital marketing', text: 'We plan, run and report on paid advertising campaigns across digital channels.' },
        { title: 'Content and social media', text: 'Regular content for your company’s social media, from idea to published post.' },
        { title: 'Creative production', text: 'Graphic design, product photography and broadcast-ready audio visual assets.' },
      ],
      whyTitle: 'Why Tachi Ads',
      reasons: [
        { title: 'Audience first', text: 'Campaigns start from audience research, and their results are measured.' },
        { title: 'One team', text: 'Strategists, designers and copywriters work in a single workflow.' },
        { title: 'Concept to final file', text: 'The big idea and the daily assets are handled by the same team.' },
      ],
      cta: 'Send Tachi Ads a brief',
      wa: 'Hello Tachi Ads, I would like to send a brief.',
      closing: 'Tell us about your brand and your goals. We will plan the first step.',
    },
    garage: {
      name: 'Tachi Garage',
      title: 'Inspected Used Cars for Sale in Bekasi | Tachi Garage',
      description: 'Tachi Garage sells inspected used cars: SUVs, MPVs, sedans, hatchbacks and city cars, with condition and paperwork shown openly. Ask about stock on WhatsApp.',
      lead: 'Road ready used cars, from SUVs to city cars. We show you the condition and the papers before you pay.',
      servicesTitle: 'Car types',
      services: [
        { title: 'SUV', text: 'Roomy cabins for families and longer journeys.' },
        { title: 'MPV', text: 'A popular choice for Indonesian families, with more passenger capacity.' },
        { title: 'Sedan', text: 'Comfortable, efficient driving for everyday use around town.' },
        { title: 'Hatchback and city car', text: 'Nimble and fuel efficient in heavy traffic.' },
      ],
      whyTitle: 'Why Tachi Garage',
      reasons: [
        { title: 'Inspected units', text: 'Every car goes through a thorough inspection before it is offered.' },
        { title: 'Condition as it is', text: 'We are upfront about each car’s condition and paperwork.' },
        { title: 'Fair pricing', text: 'Offers follow the market, with no hidden charges.' },
      ],
      cta: 'Ask what is in stock',
      wa: 'Hello Tachi Garage, I would like to ask what cars are in stock.',
      closing: 'Tell us the type of car and your budget. We will send what we have.',
    },
    foodworks: {
      name: 'Tachi Foodworks',
      title: 'Tachi Foodworks, the food and beverage unit of Tachi Group',
      description: 'Tachi Foodworks is the food and beverage unit Tachi Group is preparing. Future partners and suppliers can contact us on WhatsApp.',
      lead: 'A food and beverage unit we are preparing now. Future partners and suppliers can contact us today.',
      servicesTitle: '',
      services: [] as { title: string; text: string }[],
      whyTitle: '',
      reasons: [] as { title: string; text: string }[],
      cta: 'Apply as a partner',
      wa: 'Hello Tachi Foodworks, I am interested in becoming a partner.',
      closing: 'Interested in partnering or supplying? Tell us about your business.',
    },
  },
  notFound: {
    title: 'Page not found',
    text: 'This address does not exist or has moved.',
    home: 'Back to home',
  },
};

export const copy = { id, en };

export const UNIT_SLUGS = ['logistics', 'ads', 'garage', 'foodworks'] as const;
export type UnitSlug = (typeof UNIT_SLUGS)[number];
