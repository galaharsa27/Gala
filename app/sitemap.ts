import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://galaharsa.com';
  const routes = ['', '/profil', '/karir', '/proyek', '/sosial', '/kontak'];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
