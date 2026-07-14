import { MetadataRoute } from 'next';
import { METADATA } from '@/content/nexus';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = METADATA.canonicalUrl;
  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-07-14'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date('2026-07-14'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date('2026-07-14'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2026-07-14'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2026-07-14'),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date('2026-07-14'),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];
}
