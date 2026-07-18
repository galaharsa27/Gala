import Link from 'next/link';
import { contact } from '@/data/profile';

type RouteSlug = '/profil' | '/karir' | '/proyek' | '/sosial' | '/kontak';

const navItems: Array<{ href: RouteSlug; label: string }> = [
  { href: '/profil', label: 'Profil' },
  { href: '/karir', label: 'Karir' },
  { href: '/proyek', label: 'Proyek' },
  { href: '/sosial', label: 'Sosial' },
  { href: '/kontak', label: 'Kontak' }
];

const whatsappUrl = `${contact.whatsappUrl}?text=Halo%20Galang%2C%20saya%20ingin%20berkolaborasi.`;

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-10 lg:px-16">
        <Link
          href="/"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 font-display text-sm font-black uppercase tracking-[0.02em] text-white transition hover:border-accent hover:text-accent"
          data-cursor-hover
          aria-label="Kembali ke beranda Galang Kharisma Rizki"
        >
          GKR
        </Link>

        <nav className="hidden items-center gap-7 font-mono text-[10px] uppercase tracking-[0.16em] text-white/55 md:flex">
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

        <div className="flex items-center gap-2">
          <div className="lang-switch" aria-label="Language switcher">
            <Link href="/" hrefLang="id">ID</Link>
            <Link href="/en" hrefLang="en">EN</Link>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            className="hidden rounded-full border border-accent bg-accent px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 sm:inline-flex"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
