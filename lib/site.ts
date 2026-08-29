/**
 * Single source of truth for the site's production URL.
 *
 * Every sitemap entry, robots.txt directive, metadataBase, canonical URL,
 * OpenGraph URL, and structured-data URL in this project must derive from
 * SITE_URL (directly, or via the metadataBase + relative-path pattern).
 * Never hard-code a production hostname anywhere else — that's what caused
 * the sitemap/canonical mismatch in Google Search Console.
 *
 * Resolution order:
 * 1. `NEXT_PUBLIC_SITE_URL` — set this once a custom domain is connected
 *    (e.g. in the Vercel dashboard: NEXT_PUBLIC_SITE_URL=https://yourdomain.com).
 * 2. `VERCEL_PROJECT_PRODUCTION_URL` — set automatically by Vercel for the
 *    project's production deployment. It has no scheme, so we prepend
 *    https://.
 * 3. `http://localhost:3000` — local development fallback.
 */
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE_URL: string =
  process.env.NEXT_PUBLIC_SITE_URL || (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");

/**
 * Resolves `path` against SITE_URL.
 *
 * @example absoluteUrl() // "https://example.com/"
 * @example absoluteUrl("/sitemap.xml") // "https://example.com/sitemap.xml"
 */
export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString();
}

/**
 * Optional public contact address for the /contact page.
 *
 * Set `NEXT_PUBLIC_CONTACT_EMAIL` in the host environment (e.g. the Vercel
 * dashboard) to turn on a real `mailto:` link. While it is unset this is `null`
 * and /contact shows a plain-text fallback instead of a broken link — no address
 * is ever hard-coded in the repo.
 */
export const CONTACT_EMAIL: string | null =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || null;
