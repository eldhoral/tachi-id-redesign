import { Truck, Megaphone, UtensilsCrossed, Car } from 'lucide-react'
import type { Locale } from '@/lib/i18n'

type Copy = {
  text: string
  reasons: { title: string; text: string }[]
  services: { title: string; text: string }[]
  cta: string
}

type Group = {
  slug: string
  name: string
  tagline: string
  icon: typeof Truck
  /** null until a real photo exists — the UI falls back to a branded block
   *  rather than a stock image that misrepresents the business. */
  image: string | null
  soon: boolean
  copy: Record<Locale, Copy>
}

// Indonesian copy for Logistics is the client's own, from tachi.id/logistic/.
// ponytail: Tachi Ads copy is placeholder — tachi.id/ads/ has none to port.
// English throughout is a translation, not client-authored. Needs review.
export const GROUPS: Group[] = [
  {
    slug: 'logistics',
    name: 'Tachi Logistics',
    tagline: 'Delivering Beyond Limits',
    icon: Truck,
    image: '/business-logistics.png',
    soon: false,
    copy: {
      id: {
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
      en: {
        text: 'Integrated distribution and delivery solutions built to modern corporate standards. We are committed to punctual, efficient and dependable service that keeps business supply chains moving across Indonesia.',
        reasons: [
          {
            title: 'Nationwide Network',
            text: 'Delivery coverage from Sabang to Merauke, reaching every region of Indonesia.',
          },
          {
            title: 'Complete Fleet',
            text: 'From motorcycles and box vans to trucks and containers, matched to your load.',
          },
          {
            title: 'Competitive Rates',
            text: 'Transparent, competitive pricing with no hidden charges.',
          },
          {
            title: '24/7 Service',
            text: 'Our team is available whenever your business needs us.',
          },
          {
            title: 'Professional Team',
            text: 'Certified logistics personnel, experienced in the field.',
          },
        ],
        services: [
          {
            title: 'Freight Forwarding',
            text: 'Land, sea and air freight with real-time tracking.',
          },
          {
            title: 'Door-to-Door Delivery',
            text: 'End-to-end delivery including export-import document handling.',
          },
          {
            title: 'Supply Chain Solution',
            text: 'Efficient supply chain solutions that lift business productivity.',
          },
          {
            title: 'Customs Clearance & Brokerage',
            text: 'Fast, accurate handling of export-import customs documentation.',
          },
          {
            title: 'Corporate Logistic',
            text: 'Dedicated logistics for business and industrial requirements.',
          },
        ],
        cta: 'Optimise your business distribution with Tachi Logistics. Get in touch today!',
      },
    },
  },
  {
    slug: 'ads',
    name: 'Tachi Ads',
    tagline: 'Ideas That Move Brands',
    icon: Megaphone,
    image: '/business-ads.png',
    soon: false,
    copy: {
      id: {
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
      en: {
        text: 'A creative business line focused on communication strategy, branding and digital marketing. We help brands grow through ideas that land and visual execution that holds, building meaningful relationships between a brand and its audience.',
        reasons: [
          {
            title: 'Data-Led Strategy',
            text: 'Every campaign starts from audience research and is measured on performance.',
          },
          {
            title: 'Integrated Creative Team',
            text: 'Strategists, designers and copywriters working in a single workflow.',
          },
          {
            title: 'End-to-End Execution',
            text: 'From the big idea to daily production assets, we handle the whole range.',
          },
        ],
        services: [
          {
            title: 'Brand Strategy & Identity',
            text: 'Positioning, brand narrative and a consistent visual identity system.',
          },
          {
            title: 'Digital Marketing',
            text: 'Planning and running paid campaigns across digital channels.',
          },
          {
            title: 'Content & Social Media',
            text: 'Content production and channel management that keeps audiences engaged.',
          },
          {
            title: 'Creative Production',
            text: 'Graphic design, product photography and broadcast-ready audio visual assets.',
          },
        ],
        cta: "Ready to build a stronger brand? Let's talk through your ideas with Tachi Ads.",
      },
    },
  },
  {
    slug: 'garage',
    name: 'Tachi Garage',
    tagline: 'Drive Away Confident',
    icon: Car,
    image: null,
    soon: false,
    copy: {
      id: {
        text: 'Lini bisnis penjualan mobil bekas berkualitas untuk kebutuhan harian — mulai dari SUV, MPV, hingga sedan. Setiap unit kami siapkan agar siap pakai, dengan proses jual beli yang transparan dan tanpa repot.',
        reasons: [
          {
            title: 'Unit Terperiksa',
            text: 'Setiap mobil melalui pemeriksaan menyeluruh sebelum ditawarkan.',
          },
          {
            title: 'Riwayat Transparan',
            text: 'Kondisi kendaraan dan kelengkapan dokumen kami sampaikan apa adanya.',
          },
          {
            title: 'Harga Wajar',
            text: 'Penawaran mengikuti kondisi pasar, tanpa biaya tersembunyi.',
          },
        ],
        services: [
          {
            title: 'SUV',
            text: 'Kendaraan tangguh dengan kabin lega untuk keluarga dan perjalanan jauh.',
          },
          {
            title: 'MPV',
            text: 'Pilihan populer keluarga Indonesia dengan kapasitas penumpang lebih banyak.',
          },
          {
            title: 'Sedan',
            text: 'Berkendara nyaman dan efisien untuk kebutuhan harian di perkotaan.',
          },
          {
            title: 'Hatchback & City Car',
            text: 'Lincah dan hemat bahan bakar, cocok untuk lalu lintas padat.',
          },
        ],
        cta: 'Cari mobil bekas yang tepat untuk Anda? Hubungi Tachi Garage sekarang.',
      },
      en: {
        text: 'A business line selling quality used cars for everyday needs — from SUVs and MPVs through to sedans. Every unit is prepared to be road-ready, with a transparent, hassle-free buying process.',
        reasons: [
          {
            title: 'Inspected Units',
            text: 'Every car goes through a thorough inspection before it is offered.',
          },
          {
            title: 'Transparent History',
            text: "We are upfront about each vehicle's condition and paperwork.",
          },
          {
            title: 'Fair Pricing',
            text: 'Offers track the market, with no hidden charges.',
          },
        ],
        services: [
          {
            title: 'SUV',
            text: 'Capable vehicles with roomy cabins for families and longer journeys.',
          },
          {
            title: 'MPV',
            text: 'A popular choice for Indonesian families, with more passenger capacity.',
          },
          {
            title: 'Sedan',
            text: 'Comfortable, efficient driving for everyday use around town.',
          },
          {
            title: 'Hatchback & City Car',
            text: 'Nimble and fuel-efficient, suited to heavy traffic.',
          },
        ],
        cta: 'Looking for the right used car? Get in touch with Tachi Garage today.',
      },
    },
  },
  {
    slug: 'foodworks',
    name: 'Tachi Foodworks',
    tagline: 'Coming Soon',
    icon: UtensilsCrossed,
    image: '/business-food.png',
    soon: true,
    copy: {
      id: {
        text: 'Lini bisnis Food & Beverage yang tengah kami siapkan untuk menghadirkan produk dan pengalaman kuliner berkualitas. Nantikan kehadiran kami dengan standar rasa dan layanan terbaik.',
        reasons: [],
        services: [],
        cta: 'Ingin menjadi mitra pertama Tachi Foodworks? Hubungi tim kami.',
      },
      en: {
        text: 'A Food & Beverage line we are currently preparing, bringing quality products and culinary experiences. Watch this space for our arrival, with the best standards of taste and service.',
        reasons: [],
        services: [],
        cta: "Want to be one of Tachi Foodworks' first partners? Get in touch with our team.",
      },
    },
  },
]

export const getGroup = (slug: string) => GROUPS.find((g) => g.slug === slug)

/** Units without their own artwork share the generic company OG image. */
export const groupOgImage = (group: Group) =>
  group.image ? `/og/${group.slug}.jpg` : '/og/home.jpg'
