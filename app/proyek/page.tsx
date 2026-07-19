'use client';

import { useState } from 'react';
import PageShell from '@/components/PageShell';

const projects = [
  {
    cat: 'RFA / Strategic Consulting',
    yr: '2022 - Skrg',
    title: 'Transformasi Bisnis & ERP/CRM Klien',
    desc: 'Merancang strategi transformasi dari pemetaan masalah hingga implementasi sistem ERP, CRM, dan otomasi operasional di berbagai sektor.',
    tags: ['Strategi', 'ERP', 'CRM', 'Otomasi'],
    filter: 'rfa',
  },
  {
    cat: 'RFA / AI & Produk',
    yr: '2023 - Skrg',
    title: 'Framework AI untuk Entrepreneur',
    desc: 'Mengembangkan produk berbasis AI prompt untuk entrepreneur: framework bisnis, branding, dan pengambilan keputusan yang langsung bisa digunakan.',
    tags: ['AI Integration', 'Product Dev', 'Framework'],
    filter: 'rfa',
  },
  {
    cat: 'RFA / Pengadaan Internasional',
    yr: '2022 - Skrg',
    title: 'Pengalaman Pengadaan Defence & Aviation',
    desc: 'Membangun akses dan jaringan pengadaan internasional untuk defence, teknologi rugged, dan 100+ brand aviasi global. Termasuk kebutuhan dokumen seperti POA, CoO, dan manufacturer statement.',
    tags: ['Defence', 'Rugged Tech', 'Aviation 100+', 'and many more'],
    filter: 'rfa',
  },
  {
    cat: 'SHL / Creative Production',
    yr: '2022 - Skrg',
    title: 'Produksi Video & Identitas Brand Klien',
    desc: 'Mengarahkan konsep keseluruhan - moodboard, visual language, narrative brand. Produksi: commercial ads, company profile, webseries, event documentation.',
    tags: ['Creative Direction', 'Video', 'Brand', 'Event'],
    filter: 'shl',
  },
  {
    cat: 'SHL / Kampanye',
    yr: '2022 - Skrg',
    title: 'Branding & Strategi Kampanye Sponsor',
    desc: 'Personal branding, company branding, community branding. Konsep event organik - pitch deck sponsor, stage design, teaser, hingga aftermovie.',
    tags: ['Personal Branding', 'Sponsor Deck', 'Kampanye'],
    filter: 'shl',
  },
  {
    cat: 'Kawan Secuan / Platform',
    yr: '2022 - Skrg',
    title: 'OSTKA - Targeting & Market Intelligence',
    desc: 'Merancang konsep platform targeting berbasis data lokasi dan preferensi. IMA & Red Eye untuk analitik pasar berbasis perilaku komunitas.',
    tags: ['Lead Targeting', 'Market Intel', 'Data Analytics'],
    filter: 'secuan',
  },
  {
    cat: 'Kampanye Politik',
    yr: '2018 - 2020',
    title: 'Kampanye & Tim Pemenangan Pilkada',
    desc: 'Merancang strategi komunikasi untuk kampanye nasional Bandung Barat. PM tim pemenangan Walikota Bukittinggi - koordinasi multi-pihak dalam tekanan tinggi.',
    tags: ['Strategi Komunikasi', 'Campaign', 'Project Mgmt'],
    filter: 'karir',
  },
  {
    cat: 'Penghargaan',
    yr: 'ORI & RHR 2014',
    title: 'Konseptor Terbaik - Program Nusantara',
    desc: 'Konsep "Nusantara": program pelestarian dan kolaborasi budaya lintas daerah untuk mengangkat identitas Indonesia. Tercatat di Original Record Indonesia & RHR World Record.',
    tags: ['Konsep Budaya', 'Kolaborasi', 'Penghargaan'],
    filter: 'karir',
  },
];

const procItems = [
  {
    num: '01',
    title: 'Defence & Militer',
    sub: 'Institusi Pertahanan',
    items: ['Weibel Doppler Radar', 'Military Jammer - Omni & Falcon', 'Body-Worn Camera - Cysson', 'Pixhawk PX4 Speedometer', 'Sistem Baterai Militer', 'and many more'],
  },
  {
    num: '02',
    title: 'Teknologi & Rugged',
    sub: 'Enterprise & Field Ops',
    items: ['Microsoft HoloLens 1 & 2', 'Getac Rugged Devices', 'Toughbook Rugged', 'Maxhub Interactive Display', 'Oculus VR', 'and many more'],
  },
  {
    num: '03',
    title: 'Aviasi - 100+ Brand',
    sub: 'Global Aviation Supply',
    items: ['Garmin Aviation', 'Bose Aviation', 'Hartzell Propellers', 'Lycoming Engines', 'Dynon Avionics', 'and many more'],
  },
];

const filters = [
  { key: 'all', label: 'Semua' },
  { key: 'rfa', label: 'RFA' },
  { key: 'shl', label: 'SHL' },
  { key: 'secuan', label: 'Kawan Secuan' },
  { key: 'karir', label: 'Karir Awal' },
];

export default function ProjectsPage() {
  const [active, setActive] = useState('all');
  const visible = projects.filter((p) => active === 'all' || p.filter === active);

  return (
    <PageShell
      eyebrow="Proyek"
      title="Proyek & Kontribusi"
      description="Karya nyata yang dihasilkan - dari strategi bisnis, creative production, platform digital, hingga kampanye dan penghargaan."
      aside={(
        <div className="space-y-6">
          <div className="rounded-[1.75rem] border border-white/10 bg-ink/90 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">Manifesto</p>
            <blockquote className="mt-5 text-sm leading-7 text-white/70">
              &ldquo;Yang membedakan bukan seberapa banyak yang bisa dikerjakan, tapi{' '}
              <strong className="text-white">kemampuan membaca pola, merancang arahnya, lalu mengeksekusinya</strong>{' '}
              sebelum yang lain selesai berpikir.&rdquo;
            </blockquote>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">- GKR / Strategy Planner / Conceptor</p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">Total Proyek</p>
            <p className="mt-4 font-display text-6xl font-black text-white">{visible.length}</p>
            <p className="mt-2 font-mono text-[10px] text-white/40">dari {projects.length} proyek</p>
          </div>
        </div>
      )}
    >
      <div className="space-y-10">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              data-cursor-hover
              className={`min-h-11 rounded-full border px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] transition ${
                active === f.key
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {visible.map((p) => (
            <article key={p.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:border-accent/30 hover:bg-white/[0.07] sm:p-8">
              <div className="flex items-center justify-between gap-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">{p.cat}</p>
                <p className="font-mono text-[10px] text-white/30">{p.yr}</p>
              </div>
              <h2 className="mt-4 font-display text-xl font-bold uppercase leading-tight text-white">{p.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/60">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="rounded border border-white/10 px-2 py-1 font-mono text-[9px] uppercase tracking-wide text-white/40">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Procurement Portfolio */}
        <div className="rounded-[1.5rem] border border-white/10 bg-ink/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Portfolio Pengadaan</p>
            <span className="rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-[10px] text-accent">PT. Revolusi Fundamental Asia / RFA</span>
          </div>
          <p className="mt-5 text-sm leading-7 text-white/60">
            Ini adalah <strong className="text-white">kapabilitas pengadaan PT. RFA</strong> - mencakup akses rantai pasok internasional untuk produk{' '}
            <strong className="text-white">defence, teknologi rugged, dan 100+ brand aviasi global</strong>. RFA hadir sebagai konsultan strategis sekaligus jembatan pengadaan untuk institusi dan korporasi.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {procItems.map((cat) => (
              <div key={cat.num} className="rounded-2xl border border-white/10 bg-ink/80 p-6">
                <p className="font-display text-5xl font-black leading-none text-white/10">{cat.num}</p>
                <h3 className="mt-4 font-display text-base font-bold uppercase text-white">{cat.title}</h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">{cat.sub}</p>
                <ul className="mt-4 space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-white/55">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}

