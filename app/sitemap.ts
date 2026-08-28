import type { MetadataRoute } from "next";

// TODO: replace with the real custom domain once it is connected.
const SITE_URL = "https://power-station-sizer.vercel.app";

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
