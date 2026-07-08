import { MetadataRoute } from 'next';
import { METADATA } from '@/lib/content/nexus';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${METADATA.canonicalUrl}/sitemap.xml`,
  };
}
