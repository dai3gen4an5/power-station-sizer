/**
 * PostHog is used here for ONE purpose: recording an anonymous `affiliate_click`
 * conversion event so we can see which calculators and product ranges send
 * people to a retailer. Page views stay on Vercel Web Analytics — PostHog does
 * not capture them.
 *
 * `posthog-js` is loaded with a dynamic import so it never enters the initial
 * bundle / critical path. It is fetched (once, in the browser) only after the
 * layout mounts, and only when both env vars are present, so an unconfigured
 * build / preview is a silent no-op:
 *
 *   NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN  (client-side project token, `phc_...`)
 *   NEXT_PUBLIC_POSTHOG_HOST           (https://eu.i.posthog.com)
 *
 * The token is read only from the environment — never hard-coded or committed.
 * A PostHog Personal API Key is NOT used or required.
 *
 * Configuration is deliberately minimal: in-memory persistence (no cookies, no
 * localStorage), no person profiles, no autocapture, no pageview/pageleave
 * capture, no session replay, no surveys, and no remote-flags request.
 */

type PostHog = (typeof import("posthog-js"))["default"];

let ph: PostHog | null = null;
let started = false;

export function initPostHog(): void {
  if (started || typeof window === "undefined") return;

  const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
  if (!token || !host) return;

  started = true;
  import("posthog-js")
    .then(({ default: posthog }) => {
      posthog.init(token, {
        api_host: host,
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
    })
    .catch(() => {
      // Never let analytics setup break rendering.
      started = false;
    });
}

/** True once the dynamic import has resolved and init has run. */
export function isPostHogReady(): boolean {
  return Boolean(ph && ph.__loaded);
}

/**
 * Send one named event to PostHog. No-op until PostHog has finished loading and
 * initialising. Wrapped so it can never throw into, block, or delay the caller.
 */
export function posthogCapture(
  name: string,
  props?: Record<string, string | number | boolean | null | undefined>
): void {
  try {
    if (ph && ph.__loaded) {
      ph.capture(name, props);
    }
  } catch {
    /* ignore */
  }
}
