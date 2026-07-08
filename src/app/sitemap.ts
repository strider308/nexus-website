import { MetadataRoute } from 'next';
import { METADATA } from '@/lib/content/nexus';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = METADATA.canonicalUrl;
  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-06-22'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2026-06-22'),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date('2026-06-22'),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];
}
