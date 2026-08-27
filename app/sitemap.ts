import type { MetadataRoute } from "next";

// TODO: replace with the real production domain before launch.
const SITE_URL = "https://www.powerstationsizer.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
