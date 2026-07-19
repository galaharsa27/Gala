import type { Metadata } from 'next';
import HomeExperience from '@/components/HomeExperience';
import { homepageMetadata } from '@/data/profile';

export const metadata: Metadata = {
  title: homepageMetadata.en.title,
  description: homepageMetadata.en.description,
  alternates: {
    canonical: '/en',
    languages: {
      id: '/',
      en: '/en',
    },
  },
  openGraph: {
    title: homepageMetadata.en.title,
    description: homepageMetadata.en.description,
    url: '/en',
    siteName: 'Galaharsa',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: homepageMetadata.en.title,
    description: homepageMetadata.en.description,
  },
};

export default function EnglishHomePage() {
  return <HomeExperience locale="en" />;
}
