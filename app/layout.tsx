import './globals.css';
import type { Metadata } from 'next';
import { Bricolage_Grotesque, Manrope, JetBrains_Mono } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-d',
  weight: ['500', '700', '800'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-b',
  weight: ['300', '400', '500', '600'],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-m',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Galang Kharisma Rizki, S.H.',
  description: 'Strategy Planner & Conceptor. Business Development, Branding, Ecosystem. Bandung, Indonesia.',
  openGraph: {
    title: 'Galang Kharisma Rizki, S.H.',
    description: 'Strategy Planner & Conceptor. Business Development, Branding, Ecosystem. Bandung, Indonesia.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${bricolage.variable} ${manrope.variable} ${jetBrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
