import PageShell from '@/components/PageShell';

const stats = [
  { num: '10+', label: 'Tahun Aktif' },
  { num: '4', label: 'Perusahaan Didirikan' },
  { num: '5', label: 'Babak Karir' },
  { num: 'S1', label: 'Ilmu Hukum' },
];

const pillars = [
  {
    num: '01',
    name: 'Konsep & Arah',
    desc: 'Membaca situasi, menemukan pola, merancang sistem dan narasi yang bisa menggerakkan orang dan institusi.',
  },
  {
    num: '02',
    name: 'Hubungkan & Bangun',
    desc: 'Menyatukan pihak-pihak yang tepat, membangun kepercayaan, dan menciptakan kesepakatan yang saling menguntungkan.',
  },
  {
    num: '03',
    name: 'Eksekusi Langsung',
    desc: 'Tidak suka berputar-putar. Hasil nyata, delivery tepat waktu, dan bisa diukur.',
  },
];

const skills = [
  { idx: '01', name: 'Business Dev & Partnership', pct: '96%' },
  { idx: '02', name: 'Manajemen Proyek', pct: '93%' },
  { idx: '03', name: 'Creative Direction', pct: '90%' },
  { idx: '04', name: 'Branding & Narasi', pct: '90%' },
  { idx: '05', name: 'Analisis & Negosiasi Hukum', pct: '88%' },
  { idx: '06', name: 'Integrasi AI & Sistem', pct: '85%' },
];

export default function ProfilePage() {
  return (
    <PageShell
      eyebrow="Profil"
      title="Bangun Sistem, Gerakkan Orang"
      description="Strategy Planner dan Conceptor dengan rekam jejak lintas industri — dari dunia kreatif, politik, teknologi pertahanan, hingga membangun ekosistem bisnis sendiri."
      aside={(
        <div className="space-y-6">
          <div className="rounded-[1.75rem] border border-white/10 bg-ink/90 p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">Detail</p>
            <div className="mt-6 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-5xl font-black leading-none text-white">{s.num}</p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">Lokasi & Ketersediaan</p>
            <div className="mt-5 space-y-3 text-sm leading-7 text-white/70">
              <p><span className="font-semibold text-white">Kota</span>: Bandung, Indonesia</p>
              <p><span className="font-semibold text-white">Status</span>: Tersedia untuk kolaborasi & konsultasi</p>
              <p><span className="font-semibold text-white">Bahasa</span>: Indonesia · English</p>
            </div>
          </div>
        </div>
      )}
    >
      <div className="space-y-10">
        {/* Bio */}
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Tentang Saya</p>
          <p className="mt-6 text-base leading-8 text-white/80">
            Saya seorang <strong className="text-white">Strategy Planner dan Conceptor</strong> dengan rekam jejak lintas industri — dari dunia kreatif, politik, teknologi pertahanan, hingga membangun ekosistem bisnis sendiri.
          </p>
          <p className="mt-4 text-base leading-8 text-white/80">
            Keahlian utama saya ada di <strong className="text-white">business development, branding, dan manajemen</strong> — melihat peluang, membangun relasi, dan menggerakkan sesuatu dari nol sampai berjalan.
          </p>
          <p className="mt-4 text-base leading-8 text-white/80">
            Yang membedakan bukan seberapa banyak yang bisa dikerjakan, tapi <strong className="text-white">kemampuan membaca pola, merancang arahnya, lalu mengeksekusinya</strong> sebelum yang lain selesai berpikir.
          </p>
        </div>

        {/* Cara Kerja */}
        <div className="rounded-[2rem] border border-white/10 bg-ink/90 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Cara Kerja</p>
          <div className="mt-8 divide-y divide-white/10">
            {pillars.map((p) => (
              <div key={p.num} className="flex gap-6 py-6 first:pt-0 last:pb-0">
                <span className="font-display text-4xl font-black leading-none text-white/10">{p.num}</span>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">{p.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/60">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Keahlian */}
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Keahlian Utama</p>
          <div className="mt-8 divide-y divide-white/10">
            {skills.map((sk) => (
              <div key={sk.idx} className="flex items-baseline justify-between gap-8 py-4 first:pt-0 last:pb-0">
                <div className="flex items-baseline gap-8">
                  <span className="font-mono text-[10px] text-white/30">{sk.idx}</span>
                  <span className="font-display text-2xl font-bold uppercase text-white">{sk.name}</span>
                </div>
                <span className="font-display text-2xl font-black text-accent">{sk.pct}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
