import { AFFILIATE_LINKS_ENABLED } from "@/lib/recommendations/products";

interface AffiliateDisclosureProps {
  className?: string;
}

/**
 * Site-wide affiliate disclosure. Shared by every place the recommendation layer
 * appears so the wording stays consistent.
 *
 * The text is honest about the current state:
 *   - While no affiliate link is active (AFFILIATE_LINKS_ENABLED === false) it says
 *     links *may become* affiliate links, not that they already are.
 *   - Once links are live it states plainly that some links are affiliate links.
 * Either way: the buyer's price does not change, and the site may earn a commission.
 */
export function AffiliateDisclosure({ className }: AffiliateDisclosureProps) {
  return (
    <p className={`text-xs leading-relaxed text-ink/55 ${className ?? ""}`}>
      {AFFILIATE_LINKS_ENABLED ? (
        <>
          <span className="font-medium text-ink/70">Disclosure:</span> some links in this section are
          affiliate links. Your purchase price stays the same, and this site may earn a referral
          commission if you buy through them.
        </>
      ) : (
        <>
          <span className="font-medium text-ink/70">Disclosure:</span> some links in this section may
          become affiliate links in the future. If that happens, your purchase price would stay the
          same, and this site may earn a referral commission. No affiliate links are active here yet.
        </>
      )}
    </p>
  );
}
