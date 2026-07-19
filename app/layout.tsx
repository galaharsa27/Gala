import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Manrope, JetBrains_Mono } from 'next/font/google';
import { AnalyticsScript } from '@/components/AnalyticsScript';
import { canonicalBaseUrl, googleSiteVerification, homepageMetadata } from '@/data/profile';

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
  metadataBase: new URL(canonicalBaseUrl),
  manifest: '/site.webmanifest',
  title: {
    default: homepageMetadata.id.title,
    template: '%s | Galang Kharisma Rizki',
  },
  description: homepageMetadata.id.description,
  keywords: [
    'Galang Kharisma Rizki',
    'Strategy Planner',
    'Conceptor',
    'Creative Director',
    'Business Development',
    'Brand Strategy',
    'Company Builder',
    'Bandung',
    'Indonesia',
  ],
  authors: [{ name: 'Galang Kharisma Rizki, S.H.' }],
  creator: 'Galang Kharisma Rizki, S.H.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'mask-icon', url: '/mask-icon.svg', color: '#c8a35b' }],
  },
  other: {
    'msapplication-TileColor': '#c8a35b',
  },
  alternates: {
    canonical: `${canonicalBaseUrl}/`,
    languages: {
      id: '/',
      en: '/en',
    },
  },
  openGraph: {
    title: homepageMetadata.id.title,
    description: homepageMetadata.id.description,
    url: `${canonicalBaseUrl}/`,
    siteName: 'Galang Kharisma Rizki',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: homepageMetadata.id.title,
    description: homepageMetadata.id.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: googleSiteVerification,
  },
};

export const viewport: Viewport = {
  themeColor: '#101010',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${bricolage.variable} ${manrope.variable} ${jetBrainsMono.variable}`}>
      <body>
        <AnalyticsScript />
        {children}
      </body>
    </html>
  );
}
