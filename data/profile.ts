export type Locale = 'id' | 'en';

export type LocalizedText = Record<Locale, string>;

export type Company = {
  code: string;
  name: string;
  role: LocalizedText;
  focus: LocalizedText;
  scope: LocalizedText[];
  category: 'company';
};

export type CareerChapter = {
  period: string;
  title: LocalizedText;
  text: LocalizedText;
  roles: LocalizedText[];
};

export type SelectedWork = {
  href: string;
  domain: string;
  category: string;
  name: string;
  description: string;
  role: string;
  kind: 'creative-production' | 'live-challenge-platform' | 'original-ip' | 'motorcycle-performance';
};

export const canonicalBaseUrl = 'https://galaharsa.com';

export const contentLastModified = '2026-07-16';

export const googleSiteVerification = 'z07goVmJ_Zy2BfWySt8czgriAM0ErhRx_PxE5kYtJOU';

export const homepageMetadata = {
  id: {
    title: 'Galaharsa | Strategic Partner for Venture Building and Transformation',
    description:
      'Galaharsa turns complex ideas into scalable companies, products, and business transformation programs for founders, institutions, and partners.',
  },
  en: {
    title: 'Galaharsa | Strategic Partner for Venture Building and Transformation',
    description:
      'Galaharsa helps founders, institutions, and partners turn complex ideas into scalable companies, products, and transformation programs.',
  },
};

export const contact = {
  email: 'galaharsa.27@gmail.com',
  whatsappDisplay: '+62 812 1413 1427',
  whatsappUrl: 'https://wa.me/6281214131427',
  instagram: ['https://www.instagram.com/galaharsa.sh1/', 'https://www.instagram.com/shl.creative/'],
};

export const companies: Company[] = [
  {
    code: 'RFA',
    name: 'PT. Revolusi Fundamental Asia',
    role: {
      id: 'Founder & Direktur',
      en: 'Founder & Director',
    },
    focus: {
      id: 'Strategic consulting, integrasi AI, ERP/CRM, transformasi institusi, dan akses pengadaan internasional.',
      en: 'Strategic consulting, AI integration, ERP/CRM, institutional transformation, and international procurement access.',
    },
    scope: [
      { id: 'Defence & militer', en: 'Defence & military' },
      { id: 'Weibel Doppler Radar', en: 'Weibel Doppler Radar' },
      { id: 'Military jammer', en: 'Military jammer' },
      { id: 'Body-worn camera', en: 'Body-worn camera' },
      { id: 'Teknologi rugged', en: 'Rugged technology' },
      { id: 'HoloLens, Getac, Toughbook', en: 'HoloLens, Getac, Toughbook' },
      { id: 'Aviasi 100+ brand', en: '100+ aviation brands' },
      { id: 'POA, CoO, manufacturer statement', en: 'POA, CoO, manufacturer statement' },
      { id: 'and many more', en: 'and many more' },
    ],
    category: 'company',
  },
  {
    code: 'SHL',
    name: 'PT. Samasta Hitakara Lekha',
    role: {
      id: 'Direktur & Creative Director',
      en: 'Director & Creative Director',
    },
    focus: {
      id: 'Creative production, brand identity, video komersial, company profile, event concept, dan campaign strategy.',
      en: 'Creative production, brand identity, commercial video, company profile, event concept, and campaign strategy.',
    },
    scope: [
      { id: 'Brand identity', en: 'Brand identity' },
      { id: 'Commercial video', en: 'Commercial video' },
      { id: 'Company profile', en: 'Company profile' },
      { id: 'Webseries', en: 'Webseries' },
      { id: 'Event concept', en: 'Event concept' },
      { id: 'Campaign storytelling', en: 'Campaign storytelling' },
      { id: 'and many more', en: 'and many more' },
    ],
    category: 'company',
  },
  {
    code: 'KSI',
    name: 'PT. Kawan Secuan Indonesia',
    role: {
      id: 'Komisaris Utama & Chief Conceptor',
      en: 'President Commissioner & Chief Conceptor',
    },
    focus: {
      id: 'OSTKA, IMA, dan Red Eye: targeting berbasis data, analitik perilaku komunitas, dan market intelligence.',
      en: 'OSTKA, IMA, and Red Eye: data-led targeting, community behavior analytics, and market intelligence.',
    },
    scope: [
      { id: 'OSTKA', en: 'OSTKA' },
      { id: 'IMA', en: 'IMA' },
      { id: 'Red Eye', en: 'Red Eye' },
      { id: 'Lead targeting', en: 'Lead targeting' },
      { id: 'Community behavior analytics', en: 'Community behavior analytics' },
      { id: 'Market intelligence', en: 'Market intelligence' },
      { id: 'and many more', en: 'and many more' },
    ],
    category: 'company',
  },
  {
    code: 'SEN',
    name: 'PT. Suplai Energi Nusantara',
    role: {
      id: 'Direktur',
      en: 'Director',
    },
    focus: {
      id: 'Rantai pasok energi dan infrastruktur, pemetaan kebutuhan institusi, dan distribusi terintegrasi.',
      en: 'Energy and infrastructure supply chain, institutional needs mapping, and integrated distribution.',
    },
    scope: [
      { id: 'Energy supply chain', en: 'Energy supply chain' },
      { id: 'Infrastructure needs mapping', en: 'Infrastructure needs mapping' },
      { id: 'Integrated distribution', en: 'Integrated distribution' },
      { id: 'Institutional supply', en: 'Institutional supply' },
      { id: 'and many more', en: 'and many more' },
    ],
    category: 'company',
  },
];

export const careerChapters: CareerChapter[] = [
  {
    period: '2014',
    title: {
      id: 'Penghargaan dan konsep budaya',
      en: 'Recognition and cultural concept',
    },
    text: {
      id: 'Konsep "Nusantara": program pelestarian dan kolaborasi budaya lintas daerah yang tercatat di Original Record Indonesia dan RHR World Record.',
      en: 'The "Nusantara" concept: a cross-region cultural preservation and collaboration program recorded by Original Record Indonesia and RHR World Record.',
    },
    roles: [
      { id: 'Konseptor Terbaik - Program Nusantara', en: 'Best Conceptor - Nusantara Program' },
      { id: 'Original Record Indonesia & RHR World Record', en: 'Original Record Indonesia & RHR World Record' },
    ],
  },
  {
    period: '2015 - 2019',
    title: {
      id: 'Fondasi kreatif, brand, dan event',
      en: 'Creative, brand, and event foundation',
    },
    text: {
      id: 'Creative direction, art direction, brand consulting, studio building, dan pengembangan konsep event.',
      en: 'Creative direction, art direction, brand consulting, studio building, and event concept development.',
    },
    roles: [
      { id: 'Creative Director - I AM Management', en: 'Creative Director - I AM Management' },
      { id: 'Art Director - Blacktiger EO', en: 'Art Director - Blacktiger EO' },
      { id: 'Branding Consultant - Roomtoday DC', en: 'Branding Consultant - Roomtoday DC' },
      { id: 'Founder - SMMR Studio', en: 'Founder - SMMR Studio' },
      { id: 'Founder - Mankey Brothers', en: 'Founder - Mankey Brothers' },
    ],
  },
  {
    period: '2018 - 2020',
    title: {
      id: 'Komunikasi politik dan strategi lapangan',
      en: 'Political communication and field strategy',
    },
    text: {
      id: 'Campaign operations, koordinasi stakeholder, dan komunikasi dalam tekanan waktu serta sorotan publik.',
      en: 'Campaign operations, stakeholder coordination, and communication work under pressure and public scrutiny.',
    },
    roles: [
      { id: 'Creative IT - Kampanye Nasional Bandung Barat', en: 'Creative IT - National Campaign, Bandung Barat' },
      { id: 'Project Manager - Tim Pemenangan Walikota Bukittinggi', en: 'Project Manager - Bukittinggi Mayoral Campaign Team' },
      { id: 'Strategi komunikasi, koordinasi lapangan, dan relasi stakeholder', en: 'Communication strategy, field coordination, and stakeholder relations' },
      { id: 'and many more', en: 'and many more' },
    ],
  },
  {
    period: '2019 - 2025',
    title: {
      id: 'Business development teknologi pertahanan',
      en: 'Defence technology business development',
    },
    text: {
      id: 'Wakil Direktur, BD & Product Lead di PT. Nexin Maya Vision untuk pasar institusi pertahanan.',
      en: 'Deputy Director, BD & Product Lead at PT. Nexin Maya Vision, working with institutional defence markets.',
    },
    roles: [
      { id: 'Wakil Direktur - PT. Nexin Maya Vision', en: 'Deputy Director - PT. Nexin Maya Vision' },
      { id: 'Business Development & Product Lead', en: 'Business Development & Product Lead' },
      { id: 'Branding produk, client management, dan pengembangan pasar', en: 'Product branding, client management, and market development' },
    ],
  },
  {
    period: '2022 - sekarang',
    title: {
      id: 'Membangun perusahaan',
      en: 'Company building',
    },
    text: {
      id: 'Founder, direktur, komisaris, dan konseptor lintas strategi, creative production, intelligence, dan energi.',
      en: 'Founder, director, commissioner, and conceptor across strategy, creative production, intelligence, and energy.',
    },
    roles: companies.map((company) => ({
      id: `${company.role.id} - ${company.name}`,
      en: `${company.role.en} - ${company.name}`,
    })),
  },
];

export const selectedWorks: SelectedWork[] = [
  {
    href: 'https://shlcreative.com',
    domain: 'SHLCREATIVE.COM',
    category: 'CREATIVE PRODUCTION & BRAND EXPERIENCE',
    name: 'SHL Creative Production',
    description: 'Perusahaan kreatif yang mengembangkan strategi brand, film, photography, campaign, event, dan pengalaman komunikasi dari konsep hingga eksekusi.',
    role: 'Founder - Creative Direction - Business Development',
    kind: 'creative-production',
  },
  {
    href: 'https://molistra.com',
    domain: 'MOLISTRA.COM',
    category: 'REAL-WORLD LIVE CHALLENGE PLATFORM',
    name: 'MOLISTRA',
    description: 'Participation platform that helps organizations activate communities through real-world missions, live challenges, rewards, and city-scale engagement.',
    role: 'Founder - Product Concept - Strategic Direction',
    kind: 'live-challenge-platform',
  },
  {
    href: 'https://magoj.com',
    domain: 'MAGOJ.COM',
    category: 'ORIGINAL IP & TABLETOP UNIVERSE',
    name: 'MAGOJ',
    description: 'Original fantasy universe preparing for global Kickstarter through premium board game design, collectible heroes, living lore, and world-building.',
    role: 'Creator - IP Development - Creative Direction',
    kind: 'original-ip',
  },
  {
    href: 'https://rob1performance.com',
    domain: 'ROB1PERFORMANCE.COM',
    category: 'MOTORCYCLE PERFORMANCE & CUSTOM ENGINEERING',
    name: 'ROB1 Performance',
    description: 'Premium Harley-Davidson engineering from Indonesia: billet components, custom exhaust systems, and performance parts for riders worldwide.',
    role: 'Harley-Davidson & Big Bike Division Lead - Brand Direction - Business Development',
    kind: 'motorcycle-performance',
  },
];

export function localize<T extends LocalizedText>(value: T, locale: Locale) {
  return value[locale];
}
