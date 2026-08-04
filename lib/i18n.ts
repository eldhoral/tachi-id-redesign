export type Locale = 'id' | 'en'

export const LOCALES: Locale[] = ['id', 'en']
export const DEFAULT_LOCALE: Locale = 'id'

/**
 * Indonesian keeps the canonical URLs (`/`, `/bisnis/logistics`); English is
 * served from an `/en` prefix. Existing links and the sitemap stay valid.
 */
export const localePath = (locale: Locale, path: string) =>
  locale === 'id' ? path : `/en${path === '/' ? '' : path}`

/** Same page in the other language — powers the header toggle. */
export const otherLocale = (locale: Locale): Locale =>
  locale === 'id' ? 'en' : 'id'

const id = {
  htmlLang: 'id',
  localeLabel: 'ID',
  switchLabel: 'Baca dalam Bahasa Inggris',

  nav: {
    home: 'Home',
    about: 'Tentang Kami',
    brandIdentity: 'Brand Identity',
    business: 'Grup Bisnis',
    clients: 'Klien Kami',
    contact: 'Kontak',
    cta: 'Hubungi Kami',
    homeAria: 'Tachi Group beranda',
    openMenu: 'Buka menu',
    closeMenu: 'Tutup menu',
  },

  hero: {
    badge: 'PT TANTRA HACHI GROUP',
    slogan: 'STRONGER TOGETHER',
    text: 'Perusahaan holding modern yang menaungi lini bisnis strategis di bidang Logistics, Creative Advertising, dan Food & Beverage — memperkuat rantai nilai bisnis di seluruh Indonesia.',
    ctaBusiness: 'Jelajahi Grup Bisnis',
    ctaAbout: 'Tentang Kami',
    imageAlt: 'Gedung pencakar langit korporat modern',
  },

  about: {
    eyebrow: 'Tentang Kami',
    heading: 'Tentang Tachi Group',
    paragraphs: [
      'PT Tantra Hachi Group atau Tachi Group adalah perusahaan holding modern yang menaungi berbagai lini bisnis strategis di bidang Logistics, Creative Advertising, dan Food & Beverage.',
      'Didirikan dengan visi untuk menjadi mitra terpercaya dalam memperkuat rantai nilai bisnis di Indonesia, kami berkomitmen menghadirkan inovasi, efisiensi, dan kualitas berkelanjutan di setiap grup bisnis kami.',
      'Dengan dukungan tim profesional dan sistem manajemen terpadu, kami berfokus pada penciptaan sinergi lintas sektor — memastikan setiap unit bisnis tumbuh dengan keunggulan kompetitif dan standar layanan terbaik.',
    ],
    stats: [
      { value: '3+', label: 'Lini Bisnis Strategis' },
      { value: '2026', label: 'Berkomitmen & Bertumbuh' },
      { value: '100%', label: 'Fokus pada Kualitas' },
    ],
    highlights: [
      {
        title: 'Sinergi Lintas Sektor',
        text: 'Menciptakan kolaborasi antar unit bisnis untuk keunggulan kompetitif.',
      },
      {
        title: 'Inovasi & Efisiensi',
        text: 'Menghadirkan solusi modern dengan kualitas berkelanjutan.',
      },
      {
        title: 'Manajemen Terpadu',
        text: 'Didukung tim profesional dan sistem manajemen yang solid.',
      },
    ],
  },

  vision: {
    eyebrow: 'Visi Kami',
    text: 'Menjadi perusahaan holding group nasional yang unggul, inovatif, dan berkelanjutan dengan jaringan distribusi terintegrasi di seluruh Indonesia.',
    principlesEyebrow: 'Prinsip Kami',
    principlesHeading: 'Nilai yang Kami Pegang',
    principles: [
      { title: 'Integrity', text: 'Kejujuran dan tanggung jawab adalah dasar kami.' },
      { title: 'Customer Focus', text: 'Kepuasan pelanggan adalah tujuan utama kami.' },
      { title: 'Speed', text: 'Ketepatan waktu adalah prioritas utama.' },
      { title: 'Collaboration', text: 'Kerja sama yang solid antar tim dan mitra bisnis.' },
      { title: 'Innovation', text: 'Selalu beradaptasi dengan teknologi terbaru.' },
    ],
  },

  business: {
    eyebrow: 'Grup Bisnis',
    heading: 'Lini Bisnis Strategis Kami',
    text: 'Tiga unit bisnis yang saling bersinergi untuk memperkuat rantai nilai bisnis di Indonesia.',
    learnMore: 'Pelajari Lebih Lanjut',
    inDevelopment: 'Dalam Pengembangan',
    soon: 'Segera Hadir',
  },

  clients: {
    eyebrow: 'Klien Kami',
    heading: 'Dipercaya di Berbagai Sektor',
    text: 'Kami bermitra dengan pelaku bisnis dari beragam industri untuk menghadirkan solusi terintegrasi yang andal.',
  },

  contact: {
    eyebrow: 'Kontak',
    heading: 'Mari Bertumbuh Bersama',
    text: 'Punya pertanyaan atau ingin bermitra dengan Tachi Group? Tim kami siap membantu Anda.',
    office: 'Kantor',
    phone: 'Telepon',
    email: 'Email',
    mapTitle: 'Lokasi kantor Tachi Group',
    download: 'Unduh Company Profile',
    fieldName: 'Nama',
    phName: 'Nama lengkap',
    fieldEmail: 'Email',
    phEmail: 'email@perusahaan.com',
    fieldSubject: 'Subjek',
    phSubject: 'Perihal pesan Anda',
    fieldMessage: 'Pesan',
    phMessage: 'Tuliskan pesan Anda…',
    submit: 'Kirim via WhatsApp',
    note: 'Pesan Anda akan dibuka di WhatsApp untuk dikirim ke tim kami.',
  },

  footer: {
    tagline:
      'Perusahaan holding modern yang memperkuat rantai nilai bisnis di seluruh Indonesia. Stronger Together.',
    navHeading: 'Navigasi',
    connectHeading: 'Terhubung Dengan Kami',
    rights: 'All Rights Reserved.',
  },

  detail: {
    back: 'Grup Bisnis',
    whyEyebrow: 'Mengapa Memilih Kami',
    whyHeading: 'Keunggulan {name}',
    servicesEyebrow: 'Layanan',
    servicesHeading: 'Apa yang Kami Kerjakan',
    cta: 'Hubungi Kami',
  },

  brand: {
    eyebrow: 'Tentang Kami',
    heading: 'Brand Identity',
    intro:
      'Setiap elemen dalam identitas visual Tachi Group dipilih dengan maksud tertentu. Berikut filosofi di balik logo kami.',
    logoAlt: 'Logo mark Tachi Group',
    philosophyEyebrow: 'Filosofi Logo',
    philosophyHeading: 'Lima Elemen Pembentuk Identitas Kami',
    // Dikutip apa adanya dari tachi.id/brand-identity/
    elements: [
      {
        title: 'Infinity',
        text: 'Melambangkan kesinambungan, keandalan, dan jaringan tanpa batas mencerminkan layanan yang selalu bergerak dan terhubung dengan grup bisnis yang lainnya.',
      },
      {
        title: 'Samurai',
        text: 'Pedang yang diarahkan ke bawah berarti tidak dalam posisi menyerang, melainkan melindungi dan menjaga. Hal ini mencerminkan komitmen TACHI GROUP terhadap keamanan, keandalan, dan tanggung jawab dalam setiap produk dan layanan yang ditawarkan.',
      },
      {
        title: 'Gradasi Biru',
        text: 'Melambangkan kestabilan, kepercayaan, dan kemajuan teknologi.',
      },
      {
        title: 'Tipografi Modern',
        text: 'Menunjukkan kekuatan dan orientasi masa depan.',
      },
      {
        title: 'Slogan Stronger Together',
        text: 'Menegaskan bahwa kekuatan sejati lahir dari kolaborasi antar tim dan mitra bisnis.',
      },
    ],
    closingHeading: 'Stronger Together',
    closingText:
      'Kekuatan sejati lahir dari kolaborasi. Mari bertumbuh bersama Tachi Group.',
    cta: 'Hubungi Kami',
  },

  notFound: {
    heading: 'Halaman Tidak Ditemukan',
    text: 'Halaman yang Anda cari mungkin telah dipindahkan atau tidak pernah ada. Silakan kembali ke beranda atau jelajahi lini bisnis kami.',
    home: 'Kembali ke Beranda',
    contact: 'Hubungi Kami',
    groupsLabel: 'Grup Bisnis',
  },

  whatsapp: {
    greeting: 'Halo Tachi Group, saya ingin bertanya.',
    intro: 'Halo Tachi Group, saya {name}.',
    subject: 'Perihal: {subject}',
    replyTo: 'Balas ke: {email}',
  },
}

export type Dictionary = typeof id

// ponytail: English copy is a translation of the client's Indonesian, not
// text they wrote. Have Tachi review before this goes to production.
const en: Dictionary = {
  htmlLang: 'en',
  localeLabel: 'EN',
  switchLabel: 'Read in Indonesian',

  nav: {
    home: 'Home',
    about: 'About Us',
    brandIdentity: 'Brand Identity',
    business: 'Business Groups',
    clients: 'Our Clients',
    contact: 'Contact',
    cta: 'Contact Us',
    homeAria: 'Tachi Group home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },

  hero: {
    badge: 'PT TANTRA HACHI GROUP',
    slogan: 'STRONGER TOGETHER',
    text: 'A modern holding company with strategic business lines in Logistics, Creative Advertising and Food & Beverage — strengthening business value chains across Indonesia.',
    ctaBusiness: 'Explore Business Groups',
    ctaAbout: 'About Us',
    imageAlt: 'Modern corporate skyscrapers',
  },

  about: {
    eyebrow: 'About Us',
    heading: 'About Tachi Group',
    paragraphs: [
      'PT Tantra Hachi Group, or Tachi Group, is a modern holding company overseeing a range of strategic business lines in Logistics, Creative Advertising and Food & Beverage.',
      'Founded with a vision of becoming a trusted partner in strengthening business value chains in Indonesia, we are committed to delivering innovation, efficiency and sustainable quality across every one of our business groups.',
      'Backed by a professional team and an integrated management system, we focus on creating cross-sector synergy — making sure each business unit grows with a competitive edge and the highest standard of service.',
    ],
    stats: [
      { value: '3+', label: 'Strategic Business Lines' },
      { value: '2026', label: 'Committed & Growing' },
      { value: '100%', label: 'Focus on Quality' },
    ],
    highlights: [
      {
        title: 'Cross-Sector Synergy',
        text: 'Building collaboration between business units for a competitive edge.',
      },
      {
        title: 'Innovation & Efficiency',
        text: 'Delivering modern solutions with sustainable quality.',
      },
      {
        title: 'Integrated Management',
        text: 'Backed by a professional team and a solid management system.',
      },
    ],
  },

  vision: {
    eyebrow: 'Our Vision',
    text: 'To become an outstanding, innovative and sustainable national holding group with an integrated distribution network across Indonesia.',
    principlesEyebrow: 'Our Principles',
    principlesHeading: 'The Values We Hold',
    principles: [
      { title: 'Integrity', text: 'Honesty and accountability are our foundation.' },
      { title: 'Customer Focus', text: 'Customer satisfaction is our primary goal.' },
      { title: 'Speed', text: 'Punctuality is the top priority.' },
      { title: 'Collaboration', text: 'Solid teamwork across teams and business partners.' },
      { title: 'Innovation', text: 'Always adapting to the latest technology.' },
    ],
  },

  business: {
    eyebrow: 'Business Groups',
    heading: 'Our Strategic Business Lines',
    text: 'Three business units working in synergy to strengthen business value chains in Indonesia.',
    learnMore: 'Learn More',
    inDevelopment: 'In Development',
    soon: 'Coming Soon',
  },

  clients: {
    eyebrow: 'Our Clients',
    heading: 'Trusted Across Sectors',
    text: 'We partner with businesses from a range of industries to deliver reliable, integrated solutions.',
  },

  contact: {
    eyebrow: 'Contact',
    heading: "Let's Grow Together",
    text: 'Have a question, or want to partner with Tachi Group? Our team is ready to help.',
    office: 'Office',
    phone: 'Phone',
    email: 'Email',
    mapTitle: 'Tachi Group office location',
    download: 'Download Company Profile',
    fieldName: 'Name',
    phName: 'Full name',
    fieldEmail: 'Email',
    phEmail: 'email@company.com',
    fieldSubject: 'Subject',
    phSubject: 'What your message is about',
    fieldMessage: 'Message',
    phMessage: 'Write your message…',
    submit: 'Send via WhatsApp',
    note: 'Your message will open in WhatsApp to be sent to our team.',
  },

  footer: {
    tagline:
      'A modern holding company strengthening business value chains across Indonesia. Stronger Together.',
    navHeading: 'Navigation',
    connectHeading: 'Connect With Us',
    rights: 'All Rights Reserved.',
  },

  detail: {
    back: 'Business Groups',
    whyEyebrow: 'Why Choose Us',
    whyHeading: 'The {name} Advantage',
    servicesEyebrow: 'Services',
    servicesHeading: 'What We Do',
    cta: 'Contact Us',
  },

  brand: {
    eyebrow: 'About Us',
    heading: 'Brand Identity',
    intro:
      "Every element of Tachi Group's visual identity was chosen for a reason. Here is the philosophy behind our logo.",
    logoAlt: 'Tachi Group logo mark',
    philosophyEyebrow: 'Logo Philosophy',
    philosophyHeading: 'The Five Elements Behind Our Identity',
    elements: [
      {
        title: 'Infinity',
        text: "Represents continuity, reliability and a boundless network — reflecting services that keep moving and stay connected to the group's other businesses.",
      },
      {
        title: 'Samurai',
        text: "A sword pointed downward is not in an attacking stance; it protects and safeguards. This reflects TACHI GROUP's commitment to security, reliability and responsibility in every product and service it offers.",
      },
      {
        title: 'Blue Gradient',
        text: 'Represents stability, trust and technological progress.',
      },
      {
        title: 'Modern Typography',
        text: 'Signals strength and a forward-looking outlook.',
      },
      {
        title: 'Stronger Together Slogan',
        text: 'Affirms that true strength is born from collaboration between teams and business partners.',
      },
    ],
    closingHeading: 'Stronger Together',
    closingText:
      "True strength is born from collaboration. Let's grow together with Tachi Group.",
    cta: 'Contact Us',
  },

  notFound: {
    heading: 'Page Not Found',
    text: "The page you're looking for may have moved, or may never have existed. Head back to the homepage or explore our business lines.",
    home: 'Back to Homepage',
    contact: 'Contact Us',
    groupsLabel: 'Business Groups',
  },

  whatsapp: {
    greeting: "Hello Tachi Group, I'd like to ask a question.",
    intro: 'Hello Tachi Group, my name is {name}.',
    subject: 'Subject: {subject}',
    replyTo: 'Reply to: {email}',
  },
}

const DICTIONARIES: Record<Locale, Dictionary> = { id, en }

export const getDictionary = (locale: Locale) => DICTIONARIES[locale]

export const fill = (template: string, values: Record<string, string>) =>
  template.replace(/\{(\w+)\}/g, (_, k) => values[k] ?? '')
