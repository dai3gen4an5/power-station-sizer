import type { MetadataRoute } from "next";

// TODO: replace with the real production domain before launch.
const SITE_URL = "https://www.powerstationsizer.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
