import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://contractorguardians.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/draft/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
