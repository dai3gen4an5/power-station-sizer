import type { MetadataRoute } from "next";

// TODO: replace with the real custom domain once it is connected.
const SITE_URL = "https://power-station-sizer.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
