import { MetadataRoute } from 'next';
import { METADATA } from '@/lib/content/nexus';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = METADATA.canonicalUrl;
  if (!baseUrl) return [];
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
    {
      url: `${baseUrl}/services`,
      lastModified: new Date('2026-06-22'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date('2026-06-22'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/demo`,
      lastModified: new Date('2026-06-22'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date('2026-06-22'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
