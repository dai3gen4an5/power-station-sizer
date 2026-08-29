import { AFFILIATE_LINKS_ENABLED } from "./products";

/**
 * Canonical affiliate-disclosure wording.
 *
 * The inline disclosure under the recommendation cards
 * (components/recommendations/AffiliateDisclosure.tsx) and the full
 * /affiliate-disclosure page both read from here.
 *
 * Important: the inline disclosure is chosen from whether the *currently shown*
 * capacity class actually has an active affiliate link — not from the global
 * master switch — so a class with only placeholder cards never claims to carry
 * affiliate links.
 */

/** True when at least one affiliate link is live somewhere on the site. */
export const AFFILIATE_LINKS_ACTIVE = AFFILIATE_LINKS_ENABLED;

/** Exact statement required by the Amazon Associates Operating Agreement. */
export const AMAZON_ASSOCIATES_DISCLOSURE =
  "As an Amazon Associate I earn from qualifying purchases.";

/** Inline wording when the shown section DOES contain an active affiliate link. */
export const SHORT_AFFILIATE_DISCLOSURE =
  "Some links in this section are affiliate links. Your purchase price stays the same, and this site may earn a referral commission if you buy through them.";

/** Inline wording when the shown section has NO active affiliate link yet. */
export const SHORT_NO_AFFILIATE_DISCLOSURE =
  "No affiliate links in this section yet. Any added later are labelled, and your purchase price would not change.";

/**
 * Short inline disclosure for the recommendation section, chosen from whether
 * the section currently shown has an active affiliate link.
 */
export function shortAffiliateDisclosure(sectionHasActiveAffiliateLink: boolean): string {
  return sectionHasActiveAffiliateLink ? SHORT_AFFILIATE_DISCLOSURE : SHORT_NO_AFFILIATE_DISCLOSURE;
}

/** Full bullet points for the /affiliate-disclosure page. */
export const AFFILIATE_DISCLOSURE_POINTS: readonly string[] = [
  AFFILIATE_LINKS_ENABLED
    ? "Some outbound links to products on this site are affiliate links, including Amazon links."
    : "There are currently no affiliate links anywhere on this site.",
  AFFILIATE_LINKS_ENABLED
    ? 'Affiliate links carry rel="sponsored", open in a new tab, and are shown with a disclosure.'
    : "In the future, some outbound links to products may become affiliate links. If that changes, this page is updated first.",
  "The disclosure shown with the recommendation cards reflects the size class you are looking at: a class with no affiliate link does not claim to have one.",
  "If you use an affiliate link, the price you pay is exactly the same as buying directly. Affiliate programs pay the referrer; they do not add a charge for you.",
  "When affiliate links are active, this site may earn a referral commission if you buy through one.",
  "A commission never changes the calculators. The formulas, constants, and recommended capacity depend only on the values you enter — not on whether a link could earn a commission.",
  'Product families (for example Jackery, EcoFlow, and BLUETTI) are listed as options to compare, in a fixed order. This site does not rank them as "best", "#1", or a "top pick", and no placement can be bought.',
];
