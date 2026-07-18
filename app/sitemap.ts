import type { MetadataRoute } from 'next';
import { canonicalBaseUrl, contentLastModified } from '@/data/profile';

const routes = ['', '/en', '/profil', '/karir', '/proyek', '/sosial', '/kontak'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${canonicalBaseUrl}${route}`,
    lastModified: contentLastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
