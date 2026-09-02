import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Do not let a trailing slash on a /charge-map/* request trigger a redirect
  // before the rewrite runs.
  skipTrailingSlashRedirect: true,

  // First-party reverse proxy for PostHog (EU Cloud). The affiliate-click
  // analytics SDK sends to same-origin `/charge-map/*`, which is rewritten to
  // PostHog's EU ingestion / asset hosts. This keeps the requests first-party so
  // content and tracking blockers that key on the `*.i.posthog.com` hostname do
  // not silently drop the conversion event. The path is deliberately non-obvious
  // (not /analytics, /tracking, /telemetry, /posthog). Specific rules first,
  // catch-all last.
  async rewrites() {
    return [
      {
        source: "/charge-map/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/charge-map/array/:path*",
        destination: "https://eu-assets.i.posthog.com/array/:path*",
      },
      {
        source: "/charge-map/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
    ];
  },
};

export default nextConfig;
