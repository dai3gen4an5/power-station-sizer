import { SHORT_AFFILIATE_DISCLOSURE } from "@/lib/recommendations/disclosure";

interface AffiliateDisclosureProps {
  className?: string;
}

/**
 * Site-wide affiliate disclosure shown inline with the recommendation cards.
 *
 * The wording lives in lib/recommendations/disclosure.ts (derived from
 * AFFILIATE_LINKS_ENABLED) and is shared with the full /affiliate-disclosure
 * page, so the two can never contradict each other. While no affiliate link is
 * active it says links *may become* affiliate links, not that they already are.
 */
export function AffiliateDisclosure({ className }: AffiliateDisclosureProps) {
  return (
    <p className={`text-xs leading-relaxed text-ink/55 ${className ?? ""}`}>
      <span className="font-medium text-ink/70">Disclosure:</span> {SHORT_AFFILIATE_DISCLOSURE}
    </p>
  );
}
