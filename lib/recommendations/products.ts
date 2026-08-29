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
 *  Keep this `false` until at least one real, approved affiliate link is live. */
export const AFFILIATE_LINKS_ENABLED = false;

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
      family("jackery", "Jackery", "Explorer 300 / 500 family"),
      family("ecoflow", "EcoFlow", "RIVER 2 / RIVER family"),
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
      family("jackery", "Jackery", "Explorer 1000 family"),
      family("ecoflow", "EcoFlow", "RIVER 2 Pro / DELTA 2 family"),
      family("bluetti", "BLUETTI", "EB70 / AC70 family"),
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
      family("jackery", "Jackery", "Explorer 2000 family"),
      family("ecoflow", "EcoFlow", "DELTA 2 Max / DELTA Max family"),
      family("bluetti", "BLUETTI", "AC200 family"),
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
      family("jackery", "Jackery", "Explorer 3000 family and larger"),
      family("ecoflow", "EcoFlow", "DELTA Pro family"),
      family("bluetti", "BLUETTI", "AC300 / AC500 family"),
    ],
  },
] as const;
