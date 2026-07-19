import type { MetadataRoute } from 'next';
import { canonicalBaseUrl } from '@/data/profile';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${canonicalBaseUrl}/sitemap.xml`,
  };
}
