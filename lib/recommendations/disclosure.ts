import { AFFILIATE_LINKS_ENABLED } from "./products";

/**
 * Canonical affiliate-disclosure wording.
 *
 * Both the short inline disclosure under the recommendation cards
 * (components/recommendations/AffiliateDisclosure.tsx) and the full
 * /affiliate-disclosure page read from here, so they cannot drift apart —
 * including after `AFFILIATE_LINKS_ENABLED` is flipped on.
 */

/** True when at least one affiliate link is live on the site. */
export const AFFILIATE_LINKS_ACTIVE = AFFILIATE_LINKS_ENABLED;

/** Short, one-paragraph disclosure shown inline with the recommendation cards. */
export const SHORT_AFFILIATE_DISCLOSURE: string = AFFILIATE_LINKS_ENABLED
  ? "Some links in this section are affiliate links. Your purchase price stays the same, and this site may earn a referral commission if you buy through them."
  : "Some links in this section may become affiliate links in the future. If that happens, your purchase price would stay the same, and this site may earn a referral commission. No affiliate links are active here yet.";

/** Full bullet points for the /affiliate-disclosure page. */
export const AFFILIATE_DISCLOSURE_POINTS: readonly string[] = [
  AFFILIATE_LINKS_ENABLED
    ? "Some outbound links to products on this site are affiliate links."
    : "There are currently no affiliate links anywhere on this site.",
  AFFILIATE_LINKS_ENABLED
    ? 'Affiliate links carry rel="sponsored" and open in a new tab, so they are easy to identify.'
    : "In the future, some outbound links to products may become affiliate links. If that changes, this page is updated first.",
  "If you use an affiliate link, the price you pay is exactly the same as buying directly. Affiliate programs pay the referrer; they do not add a charge for you.",
  "When affiliate links are active, this site may earn a referral commission if you buy through one.",
  "A commission never changes the calculators. The formulas, constants, and recommended capacity depend only on the values you enter — not on whether a link could earn a commission.",
  'Product families (for example Jackery, EcoFlow, and BLUETTI) are listed as options to compare, in a fixed order. This site does not rank them as "best", "#1", or a "top pick", and no placement can be bought.',
];
