/**
 * PostHog is used here for ONE purpose: recording an anonymous `affiliate_click`
 * conversion event so we can see which calculators and product ranges send
 * people to a retailer. Page views stay on Vercel Web Analytics — PostHog does
 * not capture them.
 *
 * `posthog-js` is loaded with a dynamic import so it never enters the initial
 * bundle / critical path. It is fetched (once, in the browser) only after the
 * layout mounts, and only when the project token env var is present, so an
 * unconfigured build / preview is a silent no-op:
 *
 *   NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN  (client-side project token, `phc_...`)
 *
 * The token is read only from the environment — never hard-coded or committed.
 * A PostHog Personal API Key is NOT used or required.
 *
 * Ingestion goes through the same-origin first-party proxy at `/charge-map`
 * (see the rewrites in next.config.ts), so tracking blockers that match the
 * `*.i.posthog.com` hostname do not silently drop the conversion event.
 * `NEXT_PUBLIC_POSTHOG_HOST` is no longer read here; leaving it set in the
 * environment is harmless.
 *
 * Configuration is deliberately minimal: in-memory persistence (no cookies, no
 * localStorage), no person profiles, no autocapture, no pageview/pageleave
 * capture, no session replay, no surveys, and no remote-flags request.
 *
 * Early-click safety: an `affiliate_click` fired before the dynamic import has
 * resolved is held in a small in-memory queue and flushed once init completes,
 * so a click during the ~100-400 ms SDK load window is not lost. The click and
 * its navigation are never delayed by any of this.
 */

type PostHog = (typeof import("posthog-js"))["default"];
type EventProps = Record<string, string | number | boolean | null | undefined>;

const PROXY_HOST = "/charge-map";
const UI_HOST = "https://eu.posthog.com";
const MAX_PENDING = 20;

let ph: PostHog | null = null;
let started = false;
const pending: { name: string; props?: EventProps }[] = [];

export function initPostHog(): void {
  if (started || typeof window === "undefined") return;

  const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
  if (!token) return;

  started = true;
  import("posthog-js")
    .then(({ default: posthog }) => {
      posthog.init(token, {
        api_host: PROXY_HOST,
        ui_host: UI_HOST,
        persistence: "memory",
        person_profiles: "never",
        autocapture: false,
        capture_pageview: false,
        capture_pageleave: false,
        disable_session_recording: true,
        disable_surveys: true,
        advanced_disable_flags: true,
      });
      ph = posthog;

      // Flush anything that was clicked while the SDK was still loading.
      const queued = pending.splice(0, pending.length);
      for (const evt of queued) {
        try {
          posthog.capture(evt.name, evt.props);
        } catch {
          /* ignore */
        }
      }
    })
    .catch(() => {
      // Never let analytics setup break rendering. Drop the queue — there is no
      // collector to flush to.
      started = false;
      pending.length = 0;
    });
}

/** True once the dynamic import has resolved and init has run. */
export function isPostHogReady(): boolean {
  return Boolean(ph && ph.__loaded);
}

/**
 * Send one named event to PostHog. If the SDK is ready it captures immediately;
 * if the SDK is still loading it queues the event for flush on init; if PostHog
 * is not configured at all it is a no-op. Wrapped so it can never throw into,
 * block, or delay the caller.
 */
export function posthogCapture(name: string, props?: EventProps): void {
  try {
    if (ph && ph.__loaded) {
      ph.capture(name, props);
      return;
    }
    if (started && pending.length < MAX_PENDING) {
      pending.push({ name, props });
    }
  } catch {
    /* ignore */
  }
}
