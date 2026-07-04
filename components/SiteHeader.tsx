import Link from 'next/link';

type RouteSlug = '/profil' | '/karir' | '/proyek' | '/sosial' | '/kontak';

const navItems: Array<{ href: RouteSlug; label: string }> = [
  { href: '/profil', label: 'Profil' },
  { href: '/karir', label: 'Karir' },
  { href: '/proyek', label: 'Proyek' },
  { href: '/sosial', label: 'Sosial' },
  { href: '/kontak', label: 'Kontak' }
];

const whatsappUrl = 'https://wa.me/6281214131427?text=Halo%20Galang%2C%20saya%20ingin%20berkolaborasi.';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-10 lg:px-16">
        <Link
          href="/"
          className="text-sm uppercase tracking-[0.45em] text-white transition hover:text-accent"
          data-cursor-hover
        >
          GALAHARSA
        </Link>

        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.28em] text-white/60 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
              data-cursor-hover
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          data-cursor-hover
          className="rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-accent transition hover:bg-accent hover:text-white"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
