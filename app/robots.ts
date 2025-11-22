import type { MetadataRoute } from 'next'

const defaultUrl = "https://anagha-nisakar-portfolio.vercel.app";

 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${defaultUrl}/sitemap.xml`,
  }
}