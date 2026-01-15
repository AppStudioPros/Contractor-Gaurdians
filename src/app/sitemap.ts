import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://contractorguardians.com';

  const routes = [
    '',
    '/about',
    '/investor',
    '/contractors',
    '/affiliates',
    '/tradeschool',
    '/contact',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/contact' ? 0.9 : 0.8,
  }));
}
