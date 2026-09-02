"use client";

import { useEffect } from "react";
import { initPostHog } from "@/lib/posthog";

/**
 * Mount-once client component that initialises PostHog for the anonymous
 * `affiliate_click` event only. Renders nothing. Safe to include when the
 * PostHog env vars are unset — `initPostHog()` simply returns.
 */
export function PostHogInit() {
  useEffect(() => {
    initPostHog();
  }, []);

  return null;
}
