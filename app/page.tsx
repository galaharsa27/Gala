import type { Metadata } from 'next';
import HomeExperience from '@/components/HomeExperience';
import { canonicalBaseUrl, homepageMetadata } from '@/data/profile';

export const metadata: Metadata = {
  title: homepageMetadata.id.title,
  description: homepageMetadata.id.description,
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
    siteName: 'Galaharsa',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/assets/g/studio.jpg',
        width: 1200,
        height: 1500,
        alt: homepageMetadata.id.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: homepageMetadata.id.title,
    description: homepageMetadata.id.description,
    images: ['/assets/g/studio.jpg'],
  },
};

export default function HomePage() {
  return <HomeExperience locale="id" />;
}
