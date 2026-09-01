import { track } from "@vercel/analytics";

/**
 * Single entry point for named analytics events.
 *
 * Page views are handled separately by the <Analytics /> component in the root
 * layout (Vercel Web Analytics, available on every plan). This helper is for
 * discrete conversion events — currently just an affiliate-link click.
 *
 * It forwards each event to whatever collectors are present, and never blocks,
 * delays, or throws into the caller:
 *
 *   1. Vercel Web Analytics custom event via `track()`. Custom events are
 *      recorded on Pro / Enterprise projects; on a Hobby project `track()` is a
 *      documented safe no-op (it does not error and costs nothing), so calling
 *      it here is harmless regardless of the account plan.
 *   2. `window.dataLayer` push, so if Google Tag Manager / GA4 is added later it
 *      picks these events up with no further code change.
 *
 * Merchant-side outcomes (a completed Amazon purchase) are NOT tracked here —
 * that data lives only in the Amazon Associates dashboard.
 */
type EventProps = Record<string, string | number | boolean | null | undefined>;

export function trackEvent(name: string, props?: EventProps): void {
  try {
    track(name, props);
  } catch {
    /* analytics must never break navigation or rendering */
  }

  try {
    if (typeof window !== "undefined") {
      const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
      w.dataLayer = w.dataLayer ?? [];
      w.dataLayer.push({ event: name, ...props });
    }
  } catch {
    /* ignore — dataLayer is a best-effort forward */
  }
}
