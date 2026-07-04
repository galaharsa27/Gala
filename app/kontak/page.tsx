import PageShell from '@/components/PageShell';

const whatsappUrl = 'https://wa.me/6281214131427?text=Halo%20Galang%2C%20saya%20ingin%20berkolaborasi.';

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Kontak"
      title="Tersedia untuk kolaborasi & konsultasi"
      description="Mulai percakapan dengan mengirimkan brief singkat — scope, timeline, dan tujuan kolaborasi."
    >
      <div className="space-y-10">
        {/* CTA utama */}
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-12 shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Mulai Percakapan</p>
          <h2 className="mt-5 text-4xl font-semibold text-white">Bicarakan proyek Anda.</h2>
          <p className="mt-6 text-base leading-8 text-white/70">
            Cara terbaik untuk memulai adalah dengan pesan singkat yang mencakup scope, waktu, dan ekspektasi.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-8 py-4 text-sm uppercase tracking-[0.28em] text-accent transition hover:bg-accent hover:text-white"
            >
              WhatsApp
            </a>
            <a
              href="mailto:galaharsa.27@gmail.com"
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 text-sm uppercase tracking-[0.28em] text-white/70 transition hover:border-white/30 hover:text-white"
            >
              Email
            </a>
          </div>
        </div>

        {/* Detail kontak */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-ink/90 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">WhatsApp</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-4 block text-xl font-semibold text-white transition hover:text-accent">+62 812 1413 1427</a>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-ink/90 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Email</p>
            <a href="mailto:galaharsa.27@gmail.com" className="mt-4 block text-xl font-semibold text-white transition hover:text-accent">galaharsa.27@gmail.com</a>
          </div>
        </div>

        {/* Social */}
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Instagram</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="https://www.instagram.com/galaharsa.sh1/" target="_blank" rel="noopener noreferrer" data-cursor-hover className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/70 transition hover:border-accent hover:text-accent">
              @galaharsa.sh1
            </a>
            <a href="https://www.instagram.com/shl.creative/" target="_blank" rel="noopener noreferrer" data-cursor-hover className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/70 transition hover:border-accent hover:text-accent">
              @shl.creative
            </a>
          </div>
        </div>

        {/* Process */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-ink/90 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Respons</p>
            <p className="mt-4 text-base leading-8 text-white/70">Langkah konkret dalam satu hari kerja.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-ink/90 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Proses</p>
            <p className="mt-4 text-base leading-8 text-white/70">Brief → alignment → proposal yang fokus dan terarah.</p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
