'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import DossierIntro from './DossierIntro';
import Lightbox, { type LightboxItem } from './Lightbox';
import {
  canonicalBaseUrl,
  careerChapters,
  companies as profileCompanies,
  contact,
  localize,
  selectedWorks,
  type Locale,
} from '@/data/profile';

const ventureThumb: Record<string, string> = {
  'creative-production': '/assets/g/studio.jpg',
  'live-challenge-platform': '/assets/g/group.jpg',
  'original-ip': '/assets/g/produksi.jpg',
  'motorcycle-performance': '/assets/g/fatboy.jpg',
};

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
    subjectLabel: 'SUBJECT: STRATEGIST',
    coordinates: '6.9175° S, 107.6191° E',
    statement:
      'Fokusnya sederhana: membaca masalah dengan jernih, membentuk arah yang dipercaya, lalu menggerakkan tim sampai strategi berubah menjadi hasil nyata.',
    metrics: [
      { value: 10, suffix: '+', label: 'Tahun Pengalaman' },
      { value: 4, suffix: '', label: 'Perusahaan' },
      { value: 4, suffix: '', label: 'Ventures' },
    ],
    operatingEyebrow: 'Metode 01—03',
    operatingTitle: 'Dari masalah kompleks menjadi bisnis yang bergerak.',
    principles: [
      { title: 'Membaca pola', text: 'Saya melihat konteks bisnis, budaya, orang, dan pasar sebelum menentukan apa yang perlu dibangun.' },
      { title: 'Membentuk narasi', text: 'Saya mengubah ide yang masih tersebar menjadi arah yang bisa dipahami, dipercaya, dan dijalankan.' },
      { title: 'Menggerakkan sistem', text: 'Saya bekerja lintas founder, operator, kreatif, klien, dan tim teknis sampai eksekusi berjalan.' },
    ],
    companiesEyebrow: 'Entitas — Berkas 04',
    companiesTitle: 'Ekosistem venture untuk strategi, produksi, intelligence, dan energi.',
    careerEyebrow: 'Linimasa — Berkas 05',
    careerTitle: 'Pengalaman lapangan yang membentuk cara membangun.',
    workEyebrow: 'Ventures — Berkas 06',
    workTitle: 'Ideas built into brands, products, and experiences.',
    visitLabel: 'Visit Website',
    evidenceEyebrow: 'Field Evidence — Berkas 07',
    evidenceTitle: 'Lapangan, institusi, produksi, komunitas.',
    viewLabel: 'LIHAT',
    contactEyebrow: 'Kontak',
    contactTitle: 'Libatkan saya saat masalahnya butuh arah, bukan sekadar tampilan.',
    stampEngagement: 'OPEN FOR ENGAGEMENT',
    emailCta: 'Email',
    whatsappCta: 'WhatsApp',
    footerLeft: '© 2026 Galaharsa — Strategic venture building and transformation',
    footerDossier: 'DOSSIER NO. GKR-2026',
    footerRight: 'Bandung / Indonesia',
    moreLabel: 'Lihat selengkapnya',
    moreRoles: '+ lainnya',
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
    subjectLabel: 'SUBJECT: STRATEGIST',
    coordinates: '6.9175° S, 107.6191° E',
    statement:
      'The work is simple to explain and hard to execute: clarify the problem, shape trusted direction, and move teams until strategy becomes measurable progress.',
    metrics: [
      { value: 10, suffix: '+', label: 'Years Experience' },
      { value: 4, suffix: '', label: 'Companies' },
      { value: 4, suffix: '', label: 'Ventures' },
    ],
    operatingEyebrow: 'Method 01—03',
    operatingTitle: 'From complex problems to ventures that move.',
    principles: [
      { title: 'Read the pattern', text: 'I study the business, culture, people, and market before deciding what needs to be built.' },
      { title: 'Shape the narrative', text: 'I turn scattered ambition into a direction people can understand, believe, and execute.' },
      { title: 'Move the system', text: 'I work across founders, operators, creatives, clients, and technical teams until execution moves.' },
    ],
    companiesEyebrow: 'Entities — File 04',
    companiesTitle: 'A venture ecosystem across strategy, production, intelligence, and energy.',
    careerEyebrow: 'Timeline — File 05',
    careerTitle: 'Field experience that shapes how ventures are built.',
    workEyebrow: 'Ventures — File 06',
    workTitle: 'Ideas built into brands, products, and experiences.',
    visitLabel: 'Visit Website',
    evidenceEyebrow: 'Field Evidence — File 07',
    evidenceTitle: 'Field, institution, production, community.',
    viewLabel: 'VIEW',
    contactEyebrow: 'Contact',
    contactTitle: 'Bring me in when the problem needs direction, not decoration.',
    stampEngagement: 'OPEN FOR ENGAGEMENT',
    emailCta: 'Email',
    whatsappCta: 'WhatsApp',
    footerLeft: '© 2026 Galaharsa — Strategic venture building and transformation',
    footerDossier: 'DOSSIER NO. GKR-2026',
    footerRight: 'Bandung / Indonesia',
    moreLabel: 'View more',
    moreRoles: '+ more',
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
  subjectLabel: string;
  coordinates: string;
  statement: string;
  metrics: Array<{ value: number; suffix: string; label: string }>;
  operatingEyebrow: string;
  operatingTitle: string;
  principles: Array<{ title: string; text: string }>;
  companiesEyebrow: string;
  companiesTitle: string;
  careerEyebrow: string;
  careerTitle: string;
  workEyebrow: string;
  workTitle: string;
  visitLabel: string;
  evidenceEyebrow: string;
  evidenceTitle: string;
  viewLabel: string;
  contactEyebrow: string;
  contactTitle: string;
  stampEngagement: string;
  emailCta: string;
  whatsappCta: string;
  footerLeft: string;
  footerDossier: string;
  footerRight: string;
  moreLabel: string;
  moreRoles: string;
}>;

const galleryLabels: Record<Locale, Record<string, string>> = {
  id: {
    'studio.jpg': 'Potret studio',
    'group.jpg': 'Kepemimpinan komunitas',
    'hero-helmet.jpg': 'Riding malam',
    'fatboy.jpg': 'Budaya riding',
    'tni.jpg': 'Konteks lapangan TNI AD',
    'speaking.jpg': 'Kepemimpinan acara',
    'defence-field.jpg': 'Kerja lapangan defence',
    'nexin.jpg': 'Konteks kerja Nexin',
    'radar.jpg': 'Radar dan teknologi defence',
    'secuan.jpg': 'Tim Kawan Secuan',
    'night-event.jpg': 'Koordinasi acara',
    'patch.jpg': 'Identitas komunitas',
    'forest.jpg': 'Momen lapangan',
    'littlebike.jpg': 'Arsip riding personal',
    'batik-tni.jpg': 'Konteks klien institusi',
    'produksi.jpg': 'Arah produksi',
  },
  en: {
    'studio.jpg': 'Studio portrait',
    'group.jpg': 'Community leadership',
    'hero-helmet.jpg': 'Night ride',
    'fatboy.jpg': 'Riding culture',
    'tni.jpg': 'TNI AD field context',
    'speaking.jpg': 'Event leadership',
    'defence-field.jpg': 'Defence field work',
    'nexin.jpg': 'Nexin work context',
    'radar.jpg': 'Radar and defence technology',
    'secuan.jpg': 'Kawan Secuan team',
    'night-event.jpg': 'Event coordination',
    'patch.jpg': 'Community identity',
    'forest.jpg': 'Candid moment',
    'littlebike.jpg': 'Personal riding archive',
    'batik-tni.jpg': 'Institutional client context',
    'produksi.jpg': 'Production direction',
  },
};

const galleryOrder = [
  'tni.jpg',
  'studio.jpg',
  'defence-field.jpg',
  'group.jpg',
  'radar.jpg',
  'speaking.jpg',
  'secuan.jpg',
  'nexin.jpg',
  'batik-tni.jpg',
  'night-event.jpg',
  'produksi.jpg',
  'patch.jpg',
  'fatboy.jpg',
  'hero-helmet.jpg',
  'littlebike.jpg',
  'forest.jpg',
];

const featuredEvidence = new Set(['tni.jpg', 'defence-field.jpg', 'radar.jpg']);

// object-fit: cover defaults to a center crop. Most of these photos are
// landscape/group shots where that's fine, but a few are tall portrait
// source images placed into wide grid cells (especially the "featured"
// 2-row tiles) - a center crop on those cuts the subject's face off the
// top of the frame. Bias the crop toward the top for the ones affected.
const evidenceFocalPoint: Record<string, string> = {
  'defence-field.jpg': '50% 12%',
};

function useScrambleName(target: string) {
  const [display, setDisplay] = useState(target);
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setDisplay(target);
      return;
    }

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&';
    const duration = 800;
    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress = Math.min(1, (now - start) / duration);
      const revealCount = Math.floor(progress * target.length);
      let out = '';
      for (let i = 0; i < target.length; i += 1) {
        const ch = target[i];
        if (ch === ' ' || i < revealCount) {
          out += ch;
        } else {
          out += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      setDisplay(out);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDisplay(target);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return display;
}

export default function HomeExperience({ locale }: { locale: Locale }) {
  const t = content[locale];
  const decryptedName = useScrambleName(t.title);

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
    kind: work.kind,
  }));
  const galleryItems: LightboxItem[] = galleryOrder.map((file, index) => ({
    src: `/assets/g/${file}`,
    code: `EV-${String(index + 1).padStart(3, '0')}`,
    label: galleryLabels[locale][file],
  }));

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

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
        publisher: { '@id': personId },
      },
      {
        '@type': 'ProfilePage',
        '@id': profilePageId,
        name: t.title,
        url: pageUrl,
        inLanguage: locale === 'en' ? 'en' : 'id',
        isPartOf: { '@id': websiteId },
        about: { '@id': personId },
        mainEntity: { '@id': personId },
        hasPart: { '@id': `${pageUrl}#selected-ventures` },
        primaryImageOfPage: { '@type': 'ImageObject', url: `${canonicalBaseUrl}/assets/g/studio.jpg` },
      },
      personSchema,
      selectedVenturesSchema,
    ],
  };

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cleanupFns: Array<() => void> = [];

    gsap.registerPlugin(ScrollTrigger);

    if (rootRef.current) {
      if (!reduced) {
        const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
        cleanupFns.push(() => lenis.destroy());
      }

      const ctx = gsap.context(() => {
        // One-shot reveals (evidence tiles, section headings/metrics) use
        // IntersectionObserver for real scroll interactions. Note this is a
        // pure enhancement: every one of these elements is fully correct at
        // its default (unrevealed) CSS state, because no automated capture
        // tool can be trusted to fire the events this depends on — some
        // full-page screenshot tools composite content beyond the viewport
        // without ever changing anything JS can observe. Content must never
        // depend on this code running to be correct; it only makes real,
        // interactive scrolling nicer.
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              const el = entry.target as HTMLElement;
              io.unobserve(el);

              if (el.hasAttribute('data-evidence-item')) {
                const index = Number(el.dataset.evidenceIndex ?? 0);
                gsap.fromTo(
                  el,
                  { autoAlpha: 0, y: 28, clipPath: 'inset(12% 0 12% 0)' },
                  {
                    autoAlpha: 1,
                    y: 0,
                    clipPath: 'inset(0% 0 0% 0)',
                    duration: reduced ? 0.2 : 0.7,
                    delay: reduced ? 0 : (index % 4) * 0.05,
                    ease: 'power2.out',
                  }
                );
              } else if (el.hasAttribute('data-reveal')) {
                gsap.fromTo(
                  el,
                  { autoAlpha: 0, y: 18 },
                  { autoAlpha: 1, y: 0, duration: reduced ? 0.2 : 0.6, ease: 'power2.out' }
                );
              }
            });
          },
          { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
        );
        document
          .querySelectorAll('[data-evidence-item], [data-reveal]')
          .forEach((el) => io.observe(el));
        cleanupFns.push(() => io.disconnect());

        // method connecting line draw
        const methodLine = document.querySelector<HTMLElement>('[data-method-line]');
        if (methodLine) {
          gsap.fromTo(
            methodLine,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: '[data-method-track]',
                start: 'top 70%',
                end: 'bottom 60%',
                scrub: reduced ? false : 0.6,
              },
            }
          );
        }

        // timeline progress line + active dimming
        const timelineTrack = document.querySelector<HTMLElement>('[data-timeline-track]');
        const timelineLine = document.querySelector<HTMLElement>('[data-timeline-line]');
        if (timelineTrack && timelineLine) {
          gsap.fromTo(
            timelineLine,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: timelineTrack,
                start: 'top 65%',
                end: 'bottom 65%',
                scrub: reduced ? false : 0.6,
              },
            }
          );
        }
        document.querySelectorAll<HTMLElement>('[data-timeline-entry]').forEach((entry) => {
          ScrollTrigger.create({
            trigger: entry,
            start: 'top 65%',
            end: 'bottom 35%',
            onEnter: () => entry.classList.add('is-active'),
            onLeave: () => entry.classList.remove('is-active'),
            onEnterBack: () => entry.classList.add('is-active'),
            onLeaveBack: () => entry.classList.remove('is-active'),
          });
        });

      }, rootRef);

      cleanupFns.push(() => ctx.revert());
    }

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  function handleVenturePointerMove(e: React.MouseEvent<HTMLAnchorElement>, kind: string) {
    if (!previewRef.current) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const rect = rootRef.current?.getBoundingClientRect();
    if (!rect) return;
    previewRef.current.style.backgroundImage = `url(${ventureThumb[kind]})`;
    previewRef.current.style.transform = `translate(${e.clientX - rect.left + 24}px, ${e.clientY - rect.top - 90}px)`;
    previewRef.current.style.opacity = '1';
  }
  function handleVentureLeave() {
    if (!previewRef.current) return;
    previewRef.current.style.opacity = '0';
  }

  return (
    <div ref={rootRef} className="dossier-root">
      <DossierIntro />
      <main className="dossier">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        <header className="topbar">
          <a className="brand-mark" href="#top" aria-label="GKR — Galang Kharisma Rizki home">GKR</a>
          <nav className="nav-links">
            {t.nav.map((item) => (
              <a href={item.href} key={item.href}>{item.label}</a>
            ))}
          </nav>
          <details className="mobile-jump-menu">
            <summary>Menu</summary>
            <div>
              {t.nav.map((item) => (
                <a href={item.href} key={item.href}>{item.label}</a>
              ))}
              <div className="mobile-menu-cta">
                <a className="primary-cta" href="#contact">{t.primaryCta}</a>
              </div>
            </div>
          </details>
          <div className="lang-switch" aria-label="Language switcher">
            <a className={locale === 'id' ? 'active' : ''} href="/">ID</a>
            <a className={locale === 'en' ? 'active' : ''} href="/en">EN</a>
          </div>
        </header>

        {/* 01 — IDENTITAS */}
        <section className="hero" id="top">
          <div className="hero-frame-marks" aria-hidden="true">
            <span /><span /><span /><span />
          </div>
          <div className="hero-copy">
            <p className="eyebrow mono">{t.eyebrow}</p>
            <h1 className="hero-name" aria-label={t.title}>{decryptedName}</h1>
            <p className="hero-thesis">{t.thesis}</p>
            <div className="hero-actions">
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
            <div className="hero-portrait-meta mono">
              <span>{t.coordinates}</span>
              <span>{t.subjectLabel}</span>
              <span className="hero-status"><i /> {t.availability}</span>
            </div>
            <figcaption className="mono">{t.location}</figcaption>
          </figure>
        </section>

        {/* 02 — PROFIL SUBJEK */}
        <section className="profile" id="about" aria-label="Positioning statement and metrics">
          <p className="profile-statement" data-reveal>{t.statement}</p>
          <div className="metric-row">
            {t.metrics.map((metric) => (
              <div className="metric" key={metric.label} data-reveal>
                <strong>{metric.value}{metric.suffix}</strong>
                <span className="mono">{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 03 — METODE */}
        <section className="method">
          <div className="section-heading" data-reveal>
            <p className="eyebrow mono">{t.operatingEyebrow}</p>
            <h2>{t.operatingTitle}</h2>
          </div>
          <div className="method-track" data-method-track>
            <div className="method-line-rail" aria-hidden="true">
              <span className="method-line-fill" data-method-line />
            </div>
            {t.principles.map((item, index) => (
              <article className="method-step" key={item.title} data-reveal>
                <span className="method-index mono">{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 04 — ENTITAS */}
        <section className="entities" id="companies">
          <div className="section-heading" data-reveal>
            <p className="eyebrow mono">{t.companiesEyebrow}</p>
            <h2>{t.companiesTitle}</h2>
          </div>
          <div className="entity-ledger">
            {localizedCompanies.map((company) => (
              <details className="entity-row" key={company.code}>
                <summary data-reveal>
                  <span className="entity-monogram mono">{company.code}</span>
                  <span className="entity-heading">
                    <h3>{company.name}</h3>
                    <em>{company.role}</em>
                  </span>
                  <span className="entity-chevron mono" aria-hidden="true">＋</span>
                </summary>
                <div className="entity-body">
                  <p>{company.focus}</p>
                  <ol className="entity-spec mono">
                    {company.scope.map((item, i) => (
                      <li key={item}>
                        <span>{String(i + 1).padStart(2, '0')}.</span> {item}
                      </li>
                    ))}
                  </ol>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* 05 — LINIMASA */}
        <section className="timeline-dossier" id="journey">
          <div className="section-heading" data-reveal>
            <p className="eyebrow mono">{t.careerEyebrow}</p>
            <h2>{t.careerTitle}</h2>
          </div>
          <div className="timeline-track" data-timeline-track>
            <div className="timeline-rail" aria-hidden="true">
              <span className="timeline-rail-fill" data-timeline-line />
            </div>
            {localizedCareer.map((item) => (
              <article className="timeline-entry" key={item.period} data-timeline-entry>
                <span className="timeline-year mono">{item.period}</span>
                <div className="timeline-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ul className="timeline-roles mono">
                    {item.roles.map((role) => (
                      <li key={role}>{role}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 06 — VENTURES */}
        <section className="ventures-editorial" id="ventures">
          <div className="section-heading" data-reveal>
            <p className="eyebrow mono">{t.workEyebrow}</p>
            <h2>{t.workTitle}</h2>
          </div>
          <div className="venture-list">
            {localizedWork.map((item) => (
              <a
                className="venture-row"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                key={item.href}
                onMouseMove={(e) => handleVenturePointerMove(e, item.kind)}
                onMouseLeave={handleVentureLeave}
              >
                <span className="venture-name">{item.name}</span>
                <span className="venture-meta">
                  <span className="venture-description">{item.description}</span>
                  <span className="venture-visit mono">{t.visitLabel} <i>↗</i></span>
                </span>
              </a>
            ))}
          </div>
          <div ref={previewRef} className="venture-preview" aria-hidden="true" />
        </section>

        {/* 07 — FIELD EVIDENCE */}
        <section className="evidence" aria-label="Visual evidence">
          <div className="section-heading" data-reveal>
            <p className="eyebrow mono">{t.evidenceEyebrow}</p>
            <h2>{t.evidenceTitle}</h2>
          </div>
          <div className="evidence-grid">
            {galleryItems.map((item, index) => (
              <button
                type="button"
                key={item.src}
                className={`evidence-item${featuredEvidence.has(item.src.split('/').pop() ?? '') ? ' is-featured' : ''}`}
                data-evidence-item
                data-evidence-index={index}
                onClick={() => setLightboxIndex(index)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={`${item.label} — Galang Kharisma Rizki portfolio`}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: evidenceFocalPoint[item.src.split('/').pop() ?? ''] ?? '50% 50%' }}
                />
                <span className="evidence-view mono">{t.viewLabel}</span>
                <span className="evidence-caption mono">
                  <b>{item.code}</b> {item.label}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* 08 — PENUTUP */}
        <section className="closing" id="contact">
          <p className="eyebrow mono">{t.contactEyebrow}</p>
          <h2 data-reveal>{t.contactTitle}</h2>
          <span className="stamp" aria-hidden="true">{t.stampEngagement}</span>
          <div className="contact-actions">
            <a className="primary-cta" href={`mailto:${contact.email}`}>{t.emailCta}</a>
            <a className="secondary-cta" href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">{t.whatsappCta}</a>
          </div>
        </section>

        <footer className="site-footer mono">
          <span>{t.footerLeft}</span>
          <a className="back-to-top" href="#top">{t.footerDossier}</a>
          <span>{t.footerRight}</span>
        </footer>
      </main>

      <Lightbox
        items={galleryItems}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(i) => setLightboxIndex(i)}
      />
    </div>
  );
}
