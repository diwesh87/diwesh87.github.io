import type { MetadataRoute } from 'next';

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://diwesh87.github.io';

const staticPaths = [
  '',
  '/about',
  '/services',
  '/skills',
  '/work',
  '/contact',
];

const workSlugs = [
  'ai-ats-time-to-hire',
  'blockchain-agri-traceability',
  'cloud-migration-scale',
  'digital-health-ecosystem',
  'ecommerce-40pc-growth',
  'gig-hr-25000',
  'iot-fitness-ksa',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const main: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: path === '' ? `${baseUrl}/` : `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const work: MetadataRoute.Sitemap = workSlugs.map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified: new Date(),
  }));

  return [...main, ...work];
}
