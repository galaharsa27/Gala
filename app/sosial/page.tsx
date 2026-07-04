import PageShell from '@/components/PageShell';

const accounts = [
  {
    handle: '@galaharsa.sh1',
    subLabel: 'Personal · Catatan',
    initial: 'G',
    bio: 'Strategy planner, conceptor, dan kepala di balik banyak proyek. Catatan harian, momentum, dan refleksi pribadi.',
    stats: [{ n: '240+', l: 'Posts' }, { n: '5K+', l: 'Followers' }, { n: 'Active', l: 'Sejak 2018' }],
    url: 'https://www.instagram.com/galaharsa.sh1/',
    note: 'Pribadi',
    type: 'personal',
  },
  {
    handle: '@shl.creative',
    subLabel: 'Creative Production House',
    initial: 'SHL',
    bio: 'Production house: commercial, brand identity, webseries, event concept. Konsep yang punya nyawa.',
    stats: [{ n: '180+', l: 'Posts' }, { n: '12K', l: 'Followers' }, { n: 'Brand', l: 'Sejak 2022' }],
    url: 'https://www.instagram.com/shl.creative/',
    note: 'Bisnis',
    type: 'shl',
  },
];

export default function SocialPage() {
  return (
    <PageShell
      eyebrow="Sosial"
      title="Di Instagram"
      description="Dua jendela untuk lihat saya bekerja — akun personal dan akun bisnis PT. Samasta Hitakara Lekha."
      aside={(
        <div className="space-y-6">
          <div className="rounded-[1.75rem] border border-white/10 bg-ink/90 p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">Akun</p>
            <p className="mt-5 text-sm leading-7 text-white/70">2 akun aktif — personal dan bisnis. Dua sudut pandang yang berbeda, satu visi yang sama.</p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">Kontak Cepat</p>
            <div className="mt-5 space-y-3">
              <a href="https://wa.me/6281214131427" target="_blank" rel="noopener noreferrer" data-cursor-hover className="block rounded-xl border border-accent/20 bg-accent/10 px-4 py-3 text-sm text-accent transition hover:bg-accent hover:text-white">WhatsApp</a>
              <a href="mailto:galaharsa.27@gmail.com" data-cursor-hover className="block rounded-xl border border-white/10 px-4 py-3 text-sm text-white/70 transition hover:border-white/30 hover:text-white">Email</a>
            </div>
          </div>
        </div>
      )}
    >
      <div className="space-y-8">
        {accounts.map((acc) => (
          <article key={acc.handle} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.18)] transition hover:border-accent/30">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] p-0.5">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-ink font-display text-lg font-black text-white">{acc.initial}</div>
              </div>
              <div>
                <p className="font-display text-lg font-bold text-white">{acc.handle}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">{acc.subLabel}</p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-white/60">{acc.bio}</p>

            <div className="mt-5 flex gap-6 border-t border-white/10 pt-5">
              {acc.stats.map((s) => (
                <div key={s.l}>
                  <p className="font-display text-2xl font-bold text-white">{s.n}</p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/40">{s.l}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <a
                href={acc.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white transition hover:text-accent"
              >
                Buka di Instagram
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
              </a>
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/30">{acc.note}</span>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
