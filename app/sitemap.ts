import type { MetadataRoute } from "next";

const defaultUrl = "https://anagha-nisakar-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString();

  return [
    {
      url: defaultUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${defaultUrl}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${defaultUrl}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.9,
    },
  ];
}
