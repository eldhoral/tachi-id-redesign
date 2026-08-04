import { Truck, Megaphone, UtensilsCrossed } from 'lucide-react'

export const GROUPS = [
  {
    slug: 'logistics',
    name: 'Tachi Logistics',
    tagline: 'Delivering Beyond Limits',
    icon: Truck,
    image: '/business-logistics.png',
    soon: false,
    text: 'Menghadirkan solusi distribusi dan pengiriman terintegrasi dengan standar korporat modern. Kami berkomitmen memberikan layanan tepat waktu, efisien, dan terpercaya untuk mendukung kelancaran rantai pasok bisnis di seluruh Indonesia.',
    reasons: [
      {
        title: 'Jaringan Luas',
        text: 'Jangkauan pengiriman dari Sabang sampai Merauke ke seluruh wilayah Indonesia.',
      },
      {
        title: 'Armada Lengkap',
        text: 'Mulai dari motor, mobil box, truk, hingga kontainer sesuai kebutuhan muatan Anda.',
      },
      {
        title: 'Tarif Kompetitif',
        text: 'Harga transparan dan bersaing tanpa biaya tersembunyi.',
      },
      {
        title: 'Layanan 24/7',
        text: 'Tim kami siap melayani kapan pun bisnis Anda membutuhkan.',
      },
      {
        title: 'Tim Profesional',
        text: 'Personel logistik bersertifikat dan berpengalaman di bidangnya.',
      },
    ],
    services: [
      {
        title: 'Freight Forwarding',
        text: 'Pengiriman darat, laut, dan udara dengan pelacakan real-time.',
      },
      {
        title: 'Door-to-Door Delivery',
        text: 'Pengiriman menyeluruh termasuk penanganan dokumen ekspor-impor.',
      },
      {
        title: 'Supply Chain Solution',
        text: 'Solusi rantai pasok yang efisien untuk meningkatkan produktivitas bisnis.',
      },
      {
        title: 'Customs Clearance & Brokerage',
        text: 'Pengurusan dokumen kepabeanan ekspor-impor secara cepat dan akurat.',
      },
      {
        title: 'Corporate Logistic',
        text: 'Layanan logistik khusus untuk kebutuhan bisnis dan industri.',
      },
    ],
    cta: 'Optimalkan distribusi bisnis Anda bersama Tachi Logistics. Hubungi kami sekarang!',
  },
  {
    slug: 'ads',
    name: 'Tachi Ads',
    tagline: 'Ideas That Move Brands',
    icon: Megaphone,
    image: '/business-ads.png',
    soon: false,
    text: 'Lini bisnis kreatif yang berfokus pada strategi komunikasi, branding, dan digital marketing. Kami membantu merek tumbuh melalui ide yang berdampak dan eksekusi visual yang kuat, menciptakan hubungan bermakna antara brand dan audiensnya.',
    reasons: [
      {
        title: 'Strategi Berbasis Data',
        text: 'Setiap kampanye dirancang dari riset audiens dan diukur performanya.',
      },
      {
        title: 'Tim Kreatif Terpadu',
        text: 'Strategist, desainer, dan copywriter bekerja dalam satu alur kerja.',
      },
      {
        title: 'Eksekusi Menyeluruh',
        text: 'Dari konsep besar sampai materi produksi harian, kami tangani ujung ke ujung.',
      },
    ],
    services: [
      {
        title: 'Brand Strategy & Identity',
        text: 'Positioning, narasi merek, dan sistem identitas visual yang konsisten.',
      },
      {
        title: 'Digital Marketing',
        text: 'Perencanaan dan pengelolaan kampanye berbayar di berbagai kanal digital.',
      },
      {
        title: 'Content & Social Media',
        text: 'Produksi konten dan pengelolaan kanal sosial untuk menjaga interaksi audiens.',
      },
      {
        title: 'Creative Production',
        text: 'Desain grafis, fotografi produk, dan materi audio visual siap tayang.',
      },
    ],
    cta: 'Siap membangun merek yang lebih kuat? Mari diskusikan ide Anda bersama Tachi Ads.',
  },
  {
    slug: 'foodworks',
    name: 'Tachi Foodworks',
    tagline: 'Coming Soon',
    icon: UtensilsCrossed,
    image: '/business-food.png',
    soon: true,
    text: 'Lini bisnis Food & Beverage yang tengah kami siapkan untuk menghadirkan produk dan pengalaman kuliner berkualitas. Nantikan kehadiran kami dengan standar rasa dan layanan terbaik.',
    reasons: [],
    services: [],
    cta: 'Ingin menjadi mitra pertama Tachi Foodworks? Hubungi tim kami.',
  },
] as const

export type Group = (typeof GROUPS)[number]

export const getGroup = (slug: string) => GROUPS.find((g) => g.slug === slug)
