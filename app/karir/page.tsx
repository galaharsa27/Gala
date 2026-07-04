import PageShell from '@/components/PageShell';

const careerChapters = [
  {
    idx: '01',
    period: '~2015 – 2019',
    chapter: 'Kreatif & Brand',
    orgs: [
      'Creative Dir — I AM Management',
      'Art Dir — Blacktiger EO',
      'Branding Consultant — Roomtoday DC',
      'Founder — SMMR Studio',
      'Founder — Mankey Brothers',
    ],
    note: 'Tempat mengasah storytelling, konsep visual, dan identitas brand.',
  },
  {
    idx: '02',
    period: '2018 – 2020',
    chapter: 'Strategi & Politik',
    orgs: [
      'Creative IT — Kampanye Nasional Bdg Barat',
      'PM — Tim Pemenangan Walikota Bukittinggi',
      'Konsultan — Toby Sagara',
      'BD — Grezeski & William Schone',
    ],
    note: 'Menggerakkan banyak pihak dalam tekanan dan tenggat waktu ketat.',
  },
  {
    idx: '03',
    period: '2019 – 2025',
    chapter: 'Defence Tech BD',
    orgs: [
      'Wakil Direktur',
      'BD & Product Lead',
      'PT. Nexin Maya Vision',
    ],
    note: 'Fokus di BD, branding produk, manajemen klien, dan pengembangan pasar di sektor pertahanan nasional.',
  },
  {
    idx: '04',
    period: '2022 – Sekarang',
    chapter: 'Bangun Ekosistem',
    orgs: [
      'Founder & Dir — RFA',
      'Komisaris & Creative Dir — SHL',
      'Presiden Komisaris — Kawan Secuan',
      'Direktur — PT Suplai Energi Nusantara',
    ],
    note: 'Membangun perusahaan sendiri dari nol di tiga domain berbeda.',
  },
];

const nexinContribs = [
  {
    label: 'Business Development',
    text: 'Membangun pipeline bisnis, pendekatan ke klien institusi TNI AD, Kemenhan RI, dan Satpol PP Jabar.',
  },
  {
    label: 'Branding & Produk',
    text: 'Merancang identitas produk, materi presentasi, dan narasi produk untuk pasar institusi pertahanan.',
  },
  {
    label: 'Manajemen Klien',
    text: 'Koordinasi antara kebutuhan klien dan tim teknis internal — memastikan ekspektasi dan deliverable selaras.',
  },
  {
    label: 'Pengembangan Pasar',
    text: 'Memetakan peluang pasar, membangun jaringan, dan memperluas reach produk Nexin ke segmen baru.',
  },
];

const companies = [
  {
    num: '01',
    sector: 'Strategic Consulting',
    period: '2022 – Sekarang',
    label: 'Strategic Consulting',
    role: 'Founder & Direktur',
    name: 'PT. Revolusi Fundamental Asia (RFA)',
    desc: 'Membantu organisasi bertransformasi lewat strategi, sistem, dan teknologi. Dari pemetaan masalah hingga implementasi — termasuk akses ke rantai pengadaan internasional untuk defence dan teknologi.',
    tags: ['Konsultasi Strategi', 'AI Integration', 'ERP / CRM', 'Pengadaan Internasional'],
  },
  {
    num: '02',
    sector: 'Creative Production',
    period: '2022 – Sekarang',
    label: 'Creative Production',
    role: 'Komisaris & Creative Director',
    name: 'PT. Samasta Hitakara Lekha (SHL)',
    desc: 'Mengarahkan konsep secara menyeluruh: identitas brand, produksi video komersial, company profile, webseries, event concept, dan strategi kampanye yang punya nyawa.',
    tags: ['Creative Direction', 'Video Production', 'Brand Identity', 'Event & Kampanye'],
  },
  {
    num: '03',
    sector: 'Market Intelligence',
    period: '2022 – Sekarang',
    label: 'Market Intelligence',
    role: 'Presiden Komisaris & Chief Conceptor',
    name: 'PT. Kawan Secuan Indonesia',
    desc: 'OSTKA: sistem targeting berbasis data lokasi dan preferensi. IMA & Red Eye: platform analitik berbasis perilaku komunitas dan market intelligence untuk engagement terstruktur.',
    tags: ['Lead Targeting', 'Market Intelligence', 'Data Analytics'],
  },
];

const builds = [
  { num: '01', href: 'https://shlcreative.com', label: 'shlcreative.com', meta: 'PT Samasta Hitakara Lekha / SHL Creative Production' },
  { num: '02', href: 'https://molistra.com', label: 'molistra.com', meta: '' },
  { num: '03', href: 'https://magoj.com', label: 'magoj.com', meta: '' },
];

export default function CareerPage() {
  return (
    <PageShell
      eyebrow="Karir"
      title="Perjalanan Karir"
      description="Rekam jejak lintas industri — dari dunia kreatif, politik, teknologi pertahanan, hingga membangun ekosistem bisnis sendiri."
      aside={(
        <div className="space-y-6">
          <div className="rounded-[1.75rem] border border-white/10 bg-ink/90 p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">Ringkasan</p>
            <div className="mt-6 space-y-3 text-sm leading-7 text-white/70">
              <p>10+ tahun pengalaman aktif lintas industri.</p>
              <p>4 perusahaan didirikan sendiri dari nol.</p>
              <p>5 babak karir di domain berbeda.</p>
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">What I Build</p>
            <div className="mt-5 space-y-4">
              {builds.map((b) => (
                <div key={b.num} className="flex gap-3">
                  <span className="font-mono text-[10px] text-accent">{b.num}</span>
                  <div>
                    <a href={b.href} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white underline-offset-4 hover:text-accent hover:underline">{b.label}</a>
                    {b.meta && <p className="mt-0.5 font-mono text-[10px] text-white/40">{b.meta}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    >
      <div className="space-y-10">
        {/* Career Chapters */}
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Babak Karir</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {careerChapters.map((c) => (
              <div key={c.idx} className="rounded-2xl border border-white/10 bg-ink/80 p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">{c.period}</p>
                <h3 className="mt-3 font-display text-xl font-bold uppercase text-white">{c.chapter}</h3>
                <ul className="mt-3 space-y-1">
                  {c.orgs.map((org) => (
                    <li key={org} className="text-xs leading-6 text-white/60">{org}</li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-white/10 pt-4 font-mono text-[10px] leading-5 text-white/40">{c.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nexin Block */}
        <div className="rounded-[2rem] border border-white/10 bg-ink/90 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
          <div className="flex items-start justify-between gap-4">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Pengalaman di PT. Nexin Maya Vision</p>
            <span className="font-mono text-[10px] text-white/40">2019 – 2025 · Wakil Direktur</span>
          </div>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">Posisi</p>
              <h3 className="mt-3 font-display text-2xl font-bold uppercase text-white">Wakil Direktur<br />BD & Product Lead</h3>
              <p className="mt-2 font-mono text-[10px] text-white/40">2019 – 2025 · Bandung</p>
              <p className="mt-4 text-sm leading-7 text-white/60">
                Bergabung sebagai karyawan dengan tanggung jawab di area <strong className="text-white">business development, branding produk, manajemen klien, dan pengembangan pasar</strong>. Membantu membangun kepercayaan dengan institusi negara melalui pendekatan BD dan presentasi produk.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-0 divide-white/10">
              {nexinContribs.map((n, i) => (
                <div key={n.label} className={`p-5 ${i < 2 ? 'border-b border-white/10' : ''} ${i % 2 === 0 ? 'border-r border-white/10' : ''}`}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">{n.label}</p>
                  <p className="mt-2 text-xs leading-6 text-white/60">{n.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Companies */}
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Perusahaan yang Saya Bangun</p>
          <div className="mt-8 space-y-6">
            {companies.map((co) => (
              <div key={co.num} className="rounded-2xl border border-white/10 bg-ink/80 p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">{co.label}</p>
                    <p className="font-mono text-[10px] text-white/40">{co.role}</p>
                  </div>
                  <span className="font-display text-6xl font-black leading-none text-white/10">{co.num}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold uppercase leading-tight text-white">{co.name}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{co.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {co.tags.map((tag) => (
                    <span key={tag} className="rounded border border-white/10 px-2 py-1 font-mono text-[9px] uppercase tracking-wide text-white/40">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
