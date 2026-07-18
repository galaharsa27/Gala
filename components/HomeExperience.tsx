import {
  canonicalBaseUrl,
  careerChapters,
  companies as profileCompanies,
  contact,
  localize,
  selectedWorks,
  type Locale,
} from '@/data/profile';

const content = {
  id: {
    htmlLang: 'id',
    nav: [
      { href: '#about', label: 'Tentang' },
      { href: '#companies', label: 'Perusahaan' },
      { href: '#journey', label: 'Perjalanan' },
      { href: '#ventures', label: 'Ventures' },
      { href: '#contact', label: 'Kontak' },
    ],
    eyebrow: 'Strategic Partner / Venture Builder / Innovation Consultant',
    title: 'Galang Kharisma Rizki, S.H.',
    thesis:
      'Galaharsa membantu founder, institusi, dan partner mengubah ide kompleks menjadi perusahaan, produk, kampanye, dan program transformasi yang bisa dijalankan.',
    primaryCta: 'Mulai percakapan',
    secondaryCta: 'Lihat bukti',
    location: 'Bandung, Indonesia',
    availability: 'Terbuka untuk kolaborasi strategis',
    statement:
      'Fokusnya sederhana: membaca masalah dengan jernih, membentuk arah yang dipercaya, lalu menggerakkan tim sampai strategi berubah menjadi hasil nyata.',
    metrics: [
      { value: '10+', label: 'Tahun Pengalaman' },
      { value: '4', label: 'Perusahaan' },
      { value: '4', label: 'Ventures' },
    ],
    operatingEyebrow: 'Cara Kerja',
    operatingTitle: 'Dari masalah kompleks menjadi bisnis yang bergerak.',
    principles: [
      {
        title: 'Membaca pola',
        text: 'Saya melihat konteks bisnis, budaya, orang, dan pasar sebelum menentukan apa yang perlu dibangun.',
      },
      {
        title: 'Membentuk narasi',
        text: 'Saya mengubah ide yang masih tersebar menjadi arah yang bisa dipahami, dipercaya, dan dijalankan.',
      },
      {
        title: 'Menggerakkan sistem',
        text: 'Saya bekerja lintas founder, operator, kreatif, klien, dan tim teknis sampai eksekusi berjalan.',
      },
    ],
    companiesEyebrow: 'Perusahaan',
    companiesTitle: 'Ekosistem venture untuk strategi, produksi, intelligence, dan energi.',
    careerEyebrow: 'Perjalanan',
    careerTitle: 'Pengalaman lapangan yang membentuk cara membangun.',
    workEyebrow: 'Selected Ventures',
    workTitle: 'Ideas built into brands, products, and experiences.',
    evidenceEyebrow: 'Bukti Visual',
    evidenceTitle: 'Lapangan, institusi, produksi, komunitas.',
    contactEyebrow: 'Kontak',
    contactTitle: 'Libatkan saya saat masalahnya butuh arah, bukan sekadar tampilan.',
    emailCta: 'Email',
    whatsappCta: 'WhatsApp',
    footerLeft: '(c) 2026 Galaharsa - Strategic venture building and transformation',
    footerRight: 'Bandung / Indonesia',
    companies: [
      {
        code: 'RFA',
        name: 'PT. Revolusi Fundamental Asia',
        role: 'Founder & Direktur',
        focus: 'Strategic consulting, integrasi AI, ERP/CRM, transformasi institusi, dan akses pengadaan internasional.',
        scope: [
          'Defence & militer',
          'Weibel Doppler Radar',
          'Military jammer',
          'Body-worn camera',
          'Teknologi rugged',
          'HoloLens, Getac, Toughbook',
          'Aviasi 100+ brand',
          'POA, CoO, manufacturer statement',
          'and many more',
        ],
      },
      {
        code: 'SHL',
        name: 'PT. Samasta Hitakara Lekha',
        role: 'Direktur & Creative Director',
        focus: 'Creative production, brand identity, video komersial, company profile, event concept, dan campaign strategy.',
        scope: ['Brand identity', 'Commercial video', 'Company profile', 'Webseries', 'Event concept', 'Campaign storytelling', 'and many more'],
      },
      {
        code: 'KSI',
        name: 'PT. Kawan Secuan Indonesia',
        role: 'Komisaris Utama & Chief Conceptor',
        focus: 'OSTKA, IMA, dan Red Eye: targeting berbasis data, analitik perilaku komunitas, dan market intelligence.',
        scope: ['OSTKA', 'IMA', 'Red Eye', 'Lead targeting', 'Community behavior analytics', 'Market intelligence', 'and many more'],
      },
      {
        code: 'SEN',
        name: 'PT. Suplai Energi Nusantara',
        role: 'Direktur',
        focus: 'Rantai pasok energi dan infrastruktur, pemetaan kebutuhan institusi, dan distribusi terintegrasi.',
        scope: ['Energy supply chain', 'Infrastructure needs mapping', 'Integrated distribution', 'Institutional supply', 'and many more'],
      },
    ],
    career: [
      {
        period: '2015 - 2019',
        title: 'Fondasi kreatif, brand, dan event',
        text: 'Creative direction, art direction, brand consulting, studio building, dan pengembangan konsep event.',
        roles: [
          'Creative Director - I AM Management',
          'Art Director - Blacktiger EO',
          'Branding Consultant - Roomtoday DC',
          'Founder - SMMR Studio',
          'Founder - Mankey Brothers',
        ],
      },
      {
        period: '2018 - 2020',
        title: 'Komunikasi politik dan strategi lapangan',
        text: 'Campaign operations, koordinasi stakeholder, dan komunikasi dalam tekanan waktu serta sorotan publik.',
        roles: [
          'Creative IT - Kampanye Nasional Bandung Barat',
          'Project Manager - Tim Pemenangan Walikota Bukittinggi',
          'Strategi komunikasi, koordinasi lapangan, dan relasi stakeholder',
          'and many more',
        ],
      },
      {
        period: '2019 - 2025',
        title: 'Business development teknologi pertahanan',
        text: 'Wakil Direktur, BD & Product Lead di PT. Nexin Maya Vision untuk pasar institusi pertahanan.',
        roles: [
          'Wakil Direktur - PT. Nexin Maya Vision',
          'Business Development & Product Lead',
          'Branding produk, client management, dan pengembangan pasar',
        ],
      },
      {
        period: '2022 - sekarang',
        title: 'Membangun perusahaan',
        text: 'Founder, direktur, komisaris, dan konseptor lintas strategi, creative production, intelligence, dan energi.',
        roles: [
          'Founder & Direktur - PT. Revolusi Fundamental Asia',
          'Direktur & Creative Director - PT. Samasta Hitakara Lekha',
          'Komisaris Utama & Chief Conceptor - PT. Kawan Secuan Indonesia',
          'Direktur - PT. Suplai Energi Nusantara',
        ],
      },
    ],
    gallery: [
      { src: '/assets/g/studio.jpg', label: 'Potret studio' },
      { src: '/assets/g/group.jpg', label: 'Kepemimpinan komunitas' },
      { src: '/assets/g/hero-helmet.jpg', label: 'Riding malam' },
      { src: '/assets/g/fatboy.jpg', label: 'Budaya riding' },
      { src: '/assets/g/tni.jpg', label: 'Konteks lapangan TNI AD' },
      { src: '/assets/g/speaking.jpg', label: 'Kepemimpinan acara' },
      { src: '/assets/g/defence-field.jpg', label: 'Kerja lapangan defence' },
      { src: '/assets/g/nexin.jpg', label: 'Konteks kerja Nexin' },
      { src: '/assets/g/radar.jpg', label: 'Radar dan teknologi defence' },
      { src: '/assets/g/secuan.jpg', label: 'Tim Kawan Secuan' },
      { src: '/assets/g/night-event.jpg', label: 'Koordinasi acara' },
      { src: '/assets/g/patch.jpg', label: 'Identitas komunitas' },
      { src: '/assets/g/forest.jpg', label: 'Momen lapangan' },
      { src: '/assets/g/littlebike.jpg', label: 'Arsip riding personal' },
      { src: '/assets/g/batik-tni.jpg', label: 'Konteks klien institusi' },
      { src: '/assets/g/produksi.jpg', label: 'Arah produksi' },
    ],
  },
  en: {
    htmlLang: 'en',
    nav: [
      { href: '#about', label: 'About' },
      { href: '#companies', label: 'Companies' },
      { href: '#journey', label: 'Journey' },
      { href: '#ventures', label: 'Ventures' },
      { href: '#contact', label: 'Contact' },
    ],
    eyebrow: 'Strategic Partner / Venture Builder / Innovation Consultant',
    title: 'Galang Kharisma Rizki, S.H.',
    thesis:
      'Galaharsa helps founders, institutions, and partners turn complex ideas into scalable companies, products, campaigns, and transformation programs.',
    primaryCta: 'Start a conversation',
    secondaryCta: 'View evidence',
    location: 'Bandung, Indonesia',
    availability: 'Available for strategic collaboration',
    statement:
      'The work is simple to explain and hard to execute: clarify the problem, shape trusted direction, and move teams until strategy becomes measurable progress.',
    metrics: [
      { value: '10+', label: 'Years Experience' },
      { value: '4', label: 'Companies' },
      { value: '4', label: 'Ventures' },
    ],
    operatingEyebrow: 'Operating System',
    operatingTitle: 'From complex problems to ventures that move.',
    principles: [
      {
        title: 'Read the pattern',
        text: 'I study the business, culture, people, and market before deciding what needs to be built.',
      },
      {
        title: 'Shape the narrative',
        text: 'I turn scattered ambition into a direction people can understand, believe, and execute.',
      },
      {
        title: 'Move the system',
        text: 'I work across founders, operators, creatives, clients, and technical teams until execution moves.',
      },
    ],
    companiesEyebrow: 'Companies',
    companiesTitle: 'A venture ecosystem across strategy, production, intelligence, and energy.',
    careerEyebrow: 'Trajectory',
    careerTitle: 'Field experience that shapes how ventures are built.',
    workEyebrow: 'Selected Ventures',
    workTitle: 'Ideas built into brands, products, and experiences.',
    evidenceEyebrow: 'Visual Evidence',
    evidenceTitle: 'Field, institution, production, community.',
    contactEyebrow: 'Contact',
    contactTitle: 'Bring me in when the problem needs direction, not decoration.',
    emailCta: 'Email',
    whatsappCta: 'WhatsApp',
    footerLeft: '(c) 2026 Galaharsa - Strategic venture building and transformation',
    footerRight: 'Bandung / Indonesia',
    companies: [
      {
        code: 'RFA',
        name: 'PT. Revolusi Fundamental Asia',
        role: 'Founder & Director',
        focus: 'Strategic consulting, AI integration, ERP/CRM, institutional transformation, and international procurement access.',
        scope: [
          'Defence & military',
          'Weibel Doppler Radar',
          'Military jammer',
          'Body-worn camera',
          'Rugged technology',
          'HoloLens, Getac, Toughbook',
          '100+ aviation brands',
          'POA, CoO, manufacturer statement',
          'and many more',
        ],
      },
      {
        code: 'SHL',
        name: 'PT. Samasta Hitakara Lekha',
        role: 'Director & Creative Director',
        focus: 'Creative production, brand identity, commercial video, company profile, event concept, and campaign strategy.',
        scope: ['Brand identity', 'Commercial video', 'Company profile', 'Webseries', 'Event concept', 'Campaign storytelling', 'and many more'],
      },
      {
        code: 'KSI',
        name: 'PT. Kawan Secuan Indonesia',
        role: 'President Commissioner & Chief Conceptor',
        focus: 'OSTKA, IMA, and Red Eye: data-led targeting, community behavior analytics, and market intelligence.',
        scope: ['OSTKA', 'IMA', 'Red Eye', 'Lead targeting', 'Community behavior analytics', 'Market intelligence', 'and many more'],
      },
      {
        code: 'SEN',
        name: 'PT. Suplai Energi Nusantara',
        role: 'Director',
        focus: 'Energy and infrastructure supply chain, institutional needs mapping, and integrated distribution.',
        scope: ['Energy supply chain', 'Infrastructure needs mapping', 'Integrated distribution', 'Institutional supply', 'and many more'],
      },
    ],
    career: [
      {
        period: '2015 - 2019',
        title: 'Creative, brand, and event foundation',
        text: 'Creative direction, art direction, brand consulting, studio building, and event concept development.',
        roles: [
          'Creative Director - I AM Management',
          'Art Director - Blacktiger EO',
          'Branding Consultant - Roomtoday DC',
          'Founder - SMMR Studio',
          'Founder - Mankey Brothers',
        ],
      },
      {
        period: '2018 - 2020',
        title: 'Political communication and field strategy',
        text: 'Campaign operations, stakeholder coordination, and communication work under pressure and public scrutiny.',
        roles: [
          'Creative IT - National Campaign, Bandung Barat',
          'Project Manager - Bukittinggi Mayoral Campaign Team',
          'Communication strategy, field coordination, and stakeholder relations',
          'and many more',
        ],
      },
      {
        period: '2019 - 2025',
        title: 'Defence technology business development',
        text: 'Deputy Director, BD & Product Lead at PT. Nexin Maya Vision, working with institutional defence markets.',
        roles: [
          'Deputy Director - PT. Nexin Maya Vision',
          'Business Development & Product Lead',
          'Product branding, client management, and market development',
        ],
      },
      {
        period: '2022 - now',
        title: 'Company building',
        text: 'Founder, director, commissioner, and conceptor across strategy, creative production, intelligence, and energy.',
        roles: [
          'Founder & Director - PT. Revolusi Fundamental Asia',
          'Director & Creative Director - PT. Samasta Hitakara Lekha',
          'President Commissioner & Chief Conceptor - PT. Kawan Secuan Indonesia',
          'Director - PT. Suplai Energi Nusantara',
        ],
      },
    ],
    gallery: [
      { src: '/assets/g/studio.jpg', label: 'Studio portrait' },
      { src: '/assets/g/group.jpg', label: 'Community leadership' },
      { src: '/assets/g/hero-helmet.jpg', label: 'Night ride' },
      { src: '/assets/g/fatboy.jpg', label: 'Riding culture' },
      { src: '/assets/g/tni.jpg', label: 'TNI AD field context' },
      { src: '/assets/g/speaking.jpg', label: 'Event leadership' },
      { src: '/assets/g/defence-field.jpg', label: 'Defence field work' },
      { src: '/assets/g/nexin.jpg', label: 'Nexin work context' },
      { src: '/assets/g/radar.jpg', label: 'Radar and defence technology' },
      { src: '/assets/g/secuan.jpg', label: 'Kawan Secuan team' },
      { src: '/assets/g/night-event.jpg', label: 'Event coordination' },
      { src: '/assets/g/patch.jpg', label: 'Community identity' },
      { src: '/assets/g/forest.jpg', label: 'Candid moment' },
      { src: '/assets/g/littlebike.jpg', label: 'Personal riding archive' },
      { src: '/assets/g/batik-tni.jpg', label: 'Institutional client context' },
      { src: '/assets/g/produksi.jpg', label: 'Production direction' },
    ],
  },
} satisfies Record<Locale, {
  htmlLang: string;
  nav: Array<{ href: string; label: string }>;
  eyebrow: string;
  title: string;
  thesis: string;
  primaryCta: string;
  secondaryCta: string;
  location: string;
  availability: string;
  statement: string;
  metrics: Array<{ value: string; label: string }>;
  operatingEyebrow: string;
  operatingTitle: string;
  principles: Array<{ title: string; text: string }>;
  companiesEyebrow: string;
  companiesTitle: string;
  careerEyebrow: string;
  careerTitle: string;
  workEyebrow: string;
  workTitle: string;
  evidenceEyebrow: string;
  evidenceTitle: string;
  contactEyebrow: string;
  contactTitle: string;
  emailCta: string;
  whatsappCta: string;
  footerLeft: string;
  footerRight: string;
  companies: Array<{ code: string; name: string; role: string; focus: string; scope: string[] }>;
  career: Array<{ period: string; title: string; text: string; roles: string[] }>;
  gallery: Array<{ src: string; label: string }>;
}>;

export default function HomeExperience({ locale }: { locale: Locale }) {
  const t = content[locale];
  const visibleGallery = t.gallery.slice(0, 6);
  const hiddenGallery = t.gallery.slice(6);
  const localizedCompanies = profileCompanies.map((company) => ({
    code: company.code,
    name: company.name,
    role: localize(company.role, locale),
    focus: localize(company.focus, locale),
    scope: company.scope.map((item) => localize(item, locale)),
  }));
  const localizedCareer = careerChapters.map((chapter) => ({
    period: chapter.period,
    title: localize(chapter.title, locale),
    text: localize(chapter.text, locale),
    roles: chapter.roles.map((role) => localize(role, locale)),
  }));
  const localizedWork = selectedWorks.map((work) => ({
    href: work.href,
    domain: work.domain,
    category: work.category,
    name: work.name,
    description: work.description,
    role: work.role,
  }));
  const pageUrl = locale === 'en' ? `${canonicalBaseUrl}/en` : canonicalBaseUrl;
  const personId = `${canonicalBaseUrl}/#person`;
  const websiteId = `${canonicalBaseUrl}/#website`;
  const profilePageId = `${pageUrl}#profilepage`;
  const personSchema = {
    '@type': 'Person',
    '@id': personId,
    name: 'Galang Kharisma Rizki, S.H.',
    url: canonicalBaseUrl,
    image: `${canonicalBaseUrl}/assets/g/studio.jpg`,
    logo: `${canonicalBaseUrl}/android-chrome-512x512.png`,
    jobTitle: 'Strategy Planner, Conceptor, Creative Director, Business Developer, Company Builder',
    email: `mailto:${contact.email}`,
    sameAs: contact.instagram,
    owns: localizedCompanies.map((company) => ({
      '@type': 'Organization',
      name: company.name,
      description: company.focus,
    })),
  };
  const selectedVenturesSchema = {
    '@type': 'ItemList',
    '@id': `${pageUrl}#selected-ventures`,
    name: locale === 'en' ? 'Selected ventures by Galang Kharisma Rizki' : 'Selected ventures Galang Kharisma Rizki',
    itemListElement: localizedWork.map((work, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Thing',
        name: work.name,
        url: work.href,
        description: `${work.description} Relationship: ${work.role}.`,
      },
    })),
  };
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: 'Galaharsa',
        alternateName: 'Galang Kharisma Rizki',
        url: canonicalBaseUrl,
        inLanguage: locale === 'en' ? 'en' : 'id',
        publisher: {
          '@id': personId,
        },
      },
      {
        '@type': 'ProfilePage',
        '@id': profilePageId,
        name: t.title,
        url: pageUrl,
        inLanguage: locale === 'en' ? 'en' : 'id',
        isPartOf: {
          '@id': websiteId,
        },
        about: {
          '@id': personId,
        },
        mainEntity: {
          '@id': personId,
        },
        hasPart: {
          '@id': `${pageUrl}#selected-ventures`,
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${canonicalBaseUrl}/assets/g/studio.jpg`,
        },
      },
      personSchema,
      selectedVenturesSchema,
    ],
  };

  return (
    <main className="executive-site">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="topbar" aria-label="Primary navigation">
          <a className="brand-mark" href="#top" aria-label="Galang Kharisma Rizki home">GKR</a>
        <nav className="nav-links">
          {t.nav.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>
        <details className="mobile-jump-menu">
          <summary>Menu</summary>
          <div>
            <a href="#about">About</a>
            <a href="#companies">Companies</a>
            <a href="#journey">Journey</a>
            <a href="#ventures">Ventures</a>
            <a href="#contact">Contact</a>
          </div>
        </details>
        <div className="lang-switch" aria-label="Language switcher">
          <a className={locale === 'id' ? 'active' : ''} href="/">ID</a>
          <a className={locale === 'en' ? 'active' : ''} href="/en">EN</a>
        </div>
      </header>

      <section className="hero-v2" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="hero-thesis">{t.thesis}</p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="primary-cta" href="#contact">{t.primaryCta}</a>
            <a className="secondary-cta" href="#companies">{t.secondaryCta}</a>
          </div>
        </div>

        <figure className="hero-portrait">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/g/studio.jpg"
            alt="Galang Kharisma Rizki, S.H. portrait"
            width="960"
            height="1200"
            loading="eager"
            decoding="async"
          />
          <figcaption>
            <span>{t.location}</span>
            <span>{t.availability}</span>
          </figcaption>
        </figure>
      </section>

      <section className="thesis-band" aria-label="Positioning statement">
        <p>{t.statement}</p>
      </section>

      <section className="metric-grid" id="about" aria-label="Official profile and career proof metrics">
        {t.metrics.map((metric) => (
          <div className="metric" key={metric.value}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      <section className="section-block operating-system">
        <div className="section-heading">
          <p className="eyebrow">{t.operatingEyebrow}</p>
          <h2>{t.operatingTitle}</h2>
        </div>
        <div className="principle-grid">
          {t.principles.map((item, index) => (
            <article className="principle" key={item.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block companies-block" id="companies">
        <div className="section-heading">
          <p className="eyebrow">{t.companiesEyebrow}</p>
          <h2>{t.companiesTitle}</h2>
        </div>
        <div className="company-list">
          {localizedCompanies.map((company) => (
            <article className="company-row" key={company.code}>
              <span className="company-code">{company.code}</span>
              <div>
                <h3>{company.name}</h3>
                <p className="role">{company.role}</p>
              </div>
              <div>
                <p>{company.focus}</p>
                <ul className="company-scope" aria-label={`${company.name} portfolio scope`}>
                  {company.scope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="mobile-company-list">
          {localizedCompanies.map((company, index) => (
            <details className="mobile-company-item" key={company.code} open={index === 0}>
              <summary>
                <span className="company-code">{company.code}</span>
                <span>
                  <strong>{company.name}</strong>
                  <small>{company.role}</small>
                </span>
              </summary>
              <div className="mobile-company-panel">
                <p>{company.focus}</p>
                <ul className="company-scope compact" aria-label={`${company.name} primary scope`}>
                  {company.scope.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {company.scope.length > 3 ? (
                  <details className="inline-more">
                    <summary>Lihat selengkapnya</summary>
                    <ul className="company-scope compact more" aria-label={`${company.name} additional scope`}>
                      {company.scope.slice(3).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </details>
                ) : null}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="section-block career-block" id="journey">
        <div className="section-heading">
          <p className="eyebrow">{t.careerEyebrow}</p>
          <h2>{t.careerTitle}</h2>
        </div>
        <div className="timeline">
          {localizedCareer.map((item) => (
            <article className="timeline-row" key={item.period}>
              <span>{item.period}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul className="role-stack" aria-label={`${item.title} roles`}>
                  {item.roles.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="mobile-timeline">
          {localizedCareer.map((item, index) => (
            <details className="mobile-timeline-item" key={item.period} open={index === 0}>
              <summary>
                <span>{item.period}</span>
                <strong>{item.title}</strong>
              </summary>
              <p>{item.text}</p>
              <ul className="role-stack compact" aria-label={`${item.title} key roles`}>
                {item.roles.slice(0, 2).map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
              {item.roles.length > 2 ? (
                <details className="inline-more">
                  <summary>+ lainnya</summary>
                  <ul className="role-stack compact more" aria-label={`${item.title} additional roles`}>
                    {item.roles.slice(2).map((role) => (
                      <li key={role}>{role}</li>
                    ))}
                  </ul>
                </details>
              ) : null}
            </details>
          ))}
        </div>
      </section>

      <section className="section-block work-block" id="ventures">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">{t.workEyebrow}</p>
            <h2>{t.workTitle}</h2>
          </div>
        </div>
        <div className="work-grid">
          {localizedWork.map((item) => (
            <a className="work-card" href={item.href} target="_blank" rel="noopener noreferrer" key={item.href}>
              <span className="venture-domain">{item.domain}</span>
              <span className="venture-category">{item.category}</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="venture-card-footer">
                <span>{item.role}</span>
                <span className="venture-visit" aria-hidden="true">VISIT WEBSITE ↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section-block evidence-block" aria-label="Visual evidence">
        <div className="section-heading">
          <p className="eyebrow">{t.evidenceEyebrow}</p>
          <h2>{t.evidenceTitle}</h2>
        </div>
        <div className="evidence-grid">
          {t.gallery.map((item) => (
            <figure key={item.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={`${item.label} - Galang Kharisma Rizki portfolio`}
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
              />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mobile-evidence-grid">
          {visibleGallery.map((item) => (
            <figure key={item.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={`${item.label} - Galang Kharisma Rizki portfolio`}
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
              />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
        {hiddenGallery.length ? (
          <details className="mobile-gallery-more">
            <summary>Lihat semua dokumentasi</summary>
            <div className="mobile-evidence-grid more">
              {hiddenGallery.map((item) => (
                <figure key={item.src}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={`${item.label} - Galang Kharisma Rizki portfolio`}
                    width="800"
                    height="600"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>{item.label}</figcaption>
                </figure>
              ))}
            </div>
          </details>
        ) : null}
      </section>

      <section className="final-cta" id="contact">
        <div>
          <p className="eyebrow">{t.contactEyebrow}</p>
          <h2>{t.contactTitle}</h2>
        </div>
        <div className="contact-actions">
          <a className="primary-cta" href={`mailto:${contact.email}`}>{t.emailCta}</a>
          <a className="secondary-cta" href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">{t.whatsappCta}</a>
        </div>
      </section>

      <footer className="site-footer">
        <span>{t.footerLeft}</span>
        <a className="back-to-top" href="#top">Back to top</a>
        <span>{t.footerRight}</span>
      </footer>
    </main>
  );
}
