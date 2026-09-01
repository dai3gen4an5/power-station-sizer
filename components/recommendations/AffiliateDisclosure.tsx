import {
  AMAZON_ASSOCIATES_DISCLOSURE,
  shortAffiliateDisclosure,
} from "@/lib/recommendations/disclosure";

interface AffiliateDisclosureProps {
  className?: string;
  /** Whether the section this renders in currently has an active affiliate link. */
  hasActiveAffiliateLink?: boolean;
  /** Whether the section this renders in currently has an active Amazon affiliate link. */
  hasActiveAmazonLink?: boolean;
}

/**
 * Disclosure shown inline with the recommendation cards.
 *
 * Wording is driven by the section it appears in, not the global master switch:
 *   - a class with an active affiliate link says so;
 *   - a class with only placeholder cards does not claim to have affiliate links;
 *   - a class with an active Amazon link also shows the exact Amazon Associates
 *     statement.
 * The wording is shared with the /affiliate-disclosure page via
 * lib/recommendations/disclosure.ts so the two cannot drift apart.
 */
export function AffiliateDisclosure({
  className,
  hasActiveAffiliateLink = false,
  hasActiveAmazonLink = false,
}: AffiliateDisclosureProps) {
  return (
    <div
      className={`space-y-1 rounded-control border border-hairline bg-surface-muted/60 px-3 py-2.5 text-xs leading-relaxed text-muted/90 ${className ?? ""}`}
    >
      <p>
        <span className="font-semibold text-ink">Disclosure:</span>{" "}
        {shortAffiliateDisclosure(hasActiveAffiliateLink)}
      </p>
      {hasActiveAmazonLink ? (
        <p className="text-muted">{AMAZON_ASSOCIATES_DISCLOSURE}</p>
      ) : null}
    </div>
  );
}
