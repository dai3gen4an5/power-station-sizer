/**
 * Single source of truth for the site-wide product / affiliate recommendation layer.
 *
 * WHEN AN AFFILIATE PROGRAM IS APPROVED, this is the only file you need to edit:
 *   1. Fill in `url` and/or `affiliateUrl` for the relevant product entries.
 *   2. Set that product's `enabled: true`.
 *   3. Flip `AFFILIATE_LINKS_ENABLED` to `true`.
 * Every page that renders <ProductRecommendations /> then updates automatically.
 *
 * Until then, every card renders as a non-clickable "links coming soon" placeholder,
 * and nothing points at a dummy/broken URL.
 *
 * Rules baked in on purpose:
 *   - No "Best" / "#1" / ranking language. These are product *families to compare*,
 *     not endorsements.
 *   - A card is only ever clickable when AFFILIATE_LINKS_ENABLED === true AND the
 *     product is `enabled` AND it has a non-empty URL. See lib/recommendations/links.ts.
 *   - Affiliate status is never overstated: while AFFILIATE_LINKS_ENABLED is false the
 *     disclosure says links *may* become affiliate links in the future, not that they
 *     are affiliate links today.
 */

/** Master switch for the whole recommendation layer's affiliate behavior.
 *  Turned on once at least one real, approved affiliate link is live below.
 *  Per-section disclosure still depends on whether the *shown* class actually
 *  has an active affiliate link — see components/recommendations. */
export const AFFILIATE_LINKS_ENABLED = true;

export type CapacityClassId = "500wh" | "1000wh" | "2000wh" | "3000wh-plus";

export type BrandId = "jackery" | "ecoflow" | "bluetti";

export interface ProductEntry {
  brand: BrandId;
  /** Brand name as shown to the reader. */
  brandName: string;
  /** Product family / line name shown on the card. Keep this a *family*, not a single SKU,
   *  and never a superlative ("Best", "#1", "top pick"). */
  productName: string;
  /** Plain manufacturer or retailer URL (no affiliate tag). Optional. */
  url?: string;
  /** Affiliate URL, added once a program is approved. Empty / undefined = not set. */
  affiliateUrl?: string;
  /** Per-product switch. A card stays non-clickable until this is `true` (and a URL exists). */
  enabled: boolean;
}

export interface CapacityClass {
  id: CapacityClassId;
  /** Nominal capacity label, e.g. "2,000Wh". */
  label: string;
  /** Lower bound (inclusive) of recommended capacity, in Wh. */
  minWh: number;
  /** Upper bound (inclusive) of recommended capacity, in Wh. `null` = open-ended top class. */
  maxWh: number | null;
  /** Short, plain-language reason this class was picked, shown under the heading. */
  reason: string;
  /** Brand families to compare in this class. Kept to three, in a stable order. */
  products: ProductEntry[];
}

function family(
  brand: BrandId,
  brandName: string,
  productName: string
): ProductEntry {
  // All entries start disabled with no URL. Editors fill url/affiliateUrl and flip
  // `enabled` per product once links are ready.
  return { brand, brandName, productName, enabled: false };
}

/**
 * The four capacity classes the recommendation layer supports, ascending.
 * Bounds are chosen so the documented mappings hold:
 *   470Wh  -> 500wh        (<= 500)
 *   880Wh  -> 1000wh       (501-1000)
 *   1765Wh -> 2000wh       (1001-2000)
 *   2500Wh -> 3000wh-plus  (>= 2001)
 */
export const CAPACITY_CLASSES: readonly CapacityClass[] = [
  {
    id: "500wh",
    label: "500Wh",
    minWh: 0,
    maxWh: 500,
    reason:
      "Your estimate rounds to about 500Wh, which suits a single small device or a short top-up.",
    products: [
      // Amazon Associates SiteStripe short link — do not expand, rewrite, or re-shorten.
      {
        brand: "jackery",
        brandName: "Jackery",
        productName: "Jackery Explorer 500 v2",
        affiliateUrl: "https://amzn.to/3ULg6T7",
        enabled: true,
      },
      // Amazon Associates SiteStripe short link — do not expand, rewrite, or re-shorten.
      {
        brand: "ecoflow",
        brandName: "EcoFlow",
        productName: "EcoFlow RIVER 2 Max 500",
        affiliateUrl: "https://amzn.to/4gK4pnj",
        enabled: true,
      },
      family("bluetti", "BLUETTI", "EB3A / EB55 family"),
    ],
  },
  {
    id: "1000wh",
    label: "1,000Wh",
    minWh: 501,
    maxWh: 1000,
    reason:
      "Your estimate lands near 1,000Wh, a common size for a night of use or a few devices at once.",
    products: [
      // First live affiliate link: Amazon Associates SiteStripe short link.
      // Do not expand, rewrite, or re-shorten this URL.
      {
        brand: "jackery",
        brandName: "Jackery",
        productName: "Jackery Explorer 1000 v2",
        affiliateUrl: "https://amzn.to/4wWx2Ue",
        enabled: true,
      },
      // Amazon Associates SiteStripe short link — do not expand, rewrite, or re-shorten.
      {
        brand: "ecoflow",
        brandName: "EcoFlow",
        productName: "EcoFlow DELTA 3 Classic",
        affiliateUrl: "https://amzn.to/4zM42RC",
        enabled: true,
      },
      // Amazon Associates SiteStripe short link — do not expand, rewrite, or re-shorten.
      {
        brand: "bluetti",
        brandName: "BLUETTI",
        productName: "BLUETTI Elite 100 V2",
        affiliateUrl: "https://amzn.to/4gECyVw",
        enabled: true,
      },
    ],
  },
  {
    id: "2000wh",
    label: "2,000Wh",
    minWh: 1001,
    maxWh: 2000,
    reason:
      "Your estimate points to roughly the 2,000Wh class, which covers a full day or a heavier load.",
    products: [
      // Amazon Associates SiteStripe short link — do not expand, rewrite, or re-shorten.
      {
        brand: "jackery",
        brandName: "Jackery",
        productName: "Jackery Explorer 2000 v2",
        affiliateUrl: "https://amzn.to/4d7s3c4",
        enabled: true,
      },
      // Amazon Associates SiteStripe short link — do not expand, rewrite, or re-shorten.
      {
        brand: "ecoflow",
        brandName: "EcoFlow",
        productName: "EcoFlow DELTA 3 Max",
        affiliateUrl: "https://amzn.to/46wIOty",
        enabled: true,
      },
      // Amazon Associates SiteStripe short link — do not expand, rewrite, or re-shorten.
      {
        brand: "bluetti",
        brandName: "BLUETTI",
        productName: "BLUETTI AC200L",
        affiliateUrl: "https://amzn.to/4ck9AJf",
        enabled: true,
      },
    ],
  },
  {
    id: "3000wh-plus",
    label: "3,000Wh+",
    minWh: 2001,
    maxWh: null,
    reason:
      "Your estimate is above 2,000Wh, so look at 3,000Wh-and-larger units, often with expandable batteries.",
    products: [
      // Amazon Associates SiteStripe short link — do not expand, rewrite, or re-shorten.
      {
        brand: "jackery",
        brandName: "Jackery",
        productName: "Jackery HomePower 3000",
        affiliateUrl: "https://amzn.to/3UulYA8",
        enabled: true,
      },
      // Amazon Associates SiteStripe short link — do not expand, rewrite, or re-shorten.
      {
        brand: "ecoflow",
        brandName: "EcoFlow",
        productName: "EcoFlow DELTA 3 Ultra",
        affiliateUrl: "https://amzn.to/3SCc7Yk",
        enabled: true,
      },
      // Amazon Associates SiteStripe short link — do not expand, rewrite, or re-shorten.
      {
        brand: "bluetti",
        brandName: "BLUETTI",
        productName: "BLUETTI Elite 300",
        affiliateUrl: "https://amzn.to/4cONKh0",
        enabled: true,
      },
    ],
  },
] as const;
