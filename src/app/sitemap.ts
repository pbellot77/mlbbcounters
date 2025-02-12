import { MetadataRoute } from 'next'
import { heroes } from '../data/heroes' // Adjust import path as needed

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.mlbbcounters.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://www.mlbbcounters.com/heroes',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://www.mlbbcounters.com/equipment',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Dynamically generate URLs for each hero
    ...heroes.map((hero) => ({
      url: `https://www.mlbbcounters.com/hero/${hero.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]
}