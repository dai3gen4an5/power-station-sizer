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
 *
 * Technical specs (`capacityWh`, `continuousOutputW`, `surgeOutputW`, `acVoltageV`)
 * are per-SKU figures taken from the manufacturer's own spec sheet / the Amazon
 * listing the affiliate link resolves to. They are NEVER guessed, and a
 * "boost" / "lifting" mode that drives resistive loads at a higher wattage
 * (EcoFlow X-Boost, BLUETTI Power Lifting / HyperVolt) is NOT recorded as
 * `surgeOutputW` — only a figure the maker labels surge / peak / starting is.
 * `specIdentityVerified` records whether the affiliate short link was resolved to
 * an Amazon ASIN whose product matches `productName` / `modelName`.
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
  /** Product line name shown on the card, e.g. "Jackery Explorer 1000 v2". Never a
   *  superlative ("Best", "#1", "top pick"). */
  productName: string;
  /** Exact model designation used to verify identity against the affiliate
   *  destination and the manufacturer spec sheet. Usually equal to `productName`. */
  modelName: string;
  /** Plain manufacturer or retailer URL (no affiliate tag). Optional. */
  url?: string;
  /** Affiliate URL, added once a program is approved. Empty / undefined = not set. */
  affiliateUrl?: string;
  /**
   * Nominal battery capacity in watt-hours for THIS exact unit, from its spec
   * sheet / the Amazon listing the affiliate link resolves to (e.g. 1070 for the
   * Jackery Explorer 1000 v2). This is the product's real capacity, not the
   * class label — the two are kept separate on purpose (see `CapacityClass.label`).
   * Used only by the recommendation layer's eligibility check
   * (lib/recommendations/eligibility.ts); never an input to any calculator math.
   */
  capacityWh: number;
  /**
   * Manufacturer-published RATED CONTINUOUS AC OUTPUT, in watts, for this exact
   * unit. Undefined = unconfirmed: the recommendation layer then treats the
   * unit's continuous output as *unconfirmed*, never a pass, whenever a
   * calculator supplies a continuous-output requirement. Never inferred from
   * `capacityWh` or a class label; a "boost" mode figure is not this value.
   */
  continuousOutputW?: number;
  /**
   * Manufacturer-published RATED SURGE / PEAK / STARTING AC OUTPUT, in watts, for
   * this exact unit. Undefined = unconfirmed (never a pass) when a startup /
   * surge requirement is supplied. Never inferred from `continuousOutputW` or a
   * fixed multiplier, and an EcoFlow X-Boost / BLUETTI Power Lifting figure is
   * explicitly NOT recorded here.
   */
  surgeOutputW?: number;
  /**
   * AC output voltages the unit provides, e.g. `[120]` or `[120, 240]`, from the
   * manufacturer spec. Informational / reserved for a future voltage-aware
   * check; an undefined value is never used to assume voltage compatibility, and
   * the calculators do not currently pass a required voltage.
   */
  acVoltageV?: readonly number[];
  /**
   * True when the affiliate short link was resolved to an Amazon product whose
   * title / ASIN matches `productName` / `modelName`, and the technical specs
   * above were taken from an official source for that same unit. False on the
   * placeholder family entries.
   */
  specIdentityVerified: boolean;
  /** Source used for the technical specs (manufacturer page or the Amazon listing). */
  specSourceUrl?: string;
  /** Per-product switch. A card stays non-clickable until this is `true` (and a URL exists). */
  enabled: boolean;
}

export interface CapacityClass {
  id: CapacityClassId;
  /** Nominal capacity label for the shopping range, e.g. "2,000Wh". This is the
   *  RANGE label, deliberately distinct from any single product's `capacityWh`. */
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
  productName: string,
  capacityWh: number
): ProductEntry {
  // Placeholder entry: disabled, no URL, identity/specs unverified. Editors fill
  // url/affiliateUrl, real specs, and flip `enabled` once links are ready.
  return {
    brand,
    brandName,
    productName,
    modelName: productName,
    capacityWh,
    specIdentityVerified: false,
    enabled: false,
  };
}

/**
 * The four capacity classes the recommendation layer supports, ascending.
 * `minWh` / `maxWh` map a recommended capacity to a starting shopping range;
 * `eligibility.ts` then searches this list upward for a range that actually has
 * a product meeting the load's capacity AND output needs.
 *   470Wh  -> 500wh        (<= 500)
 *   880Wh  -> 1000wh       (501-1000)
 *   1765Wh -> 2000wh       (1001-2000)
 *   2500Wh -> 3000wh-plus  (>= 2001)
 *
 * Per-product `continuousOutputW` / `surgeOutputW` below: verified 2026-08-31 by
 * resolving each amzn.to link to its Amazon ASIN and cross-checking the
 * manufacturer spec. EcoFlow X-Boost and BLUETTI Power Lifting / HyperVolt
 * figures are intentionally omitted from `surgeOutputW`.
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
      // amzn.to/3ULg6T7 -> amazon.com/dp/B07SM5HBK1 "Jackery Explorer 500 v2 ... 512Wh, 500W AC (1000W Surge)".
      {
        brand: "jackery",
        brandName: "Jackery",
        productName: "Jackery Explorer 500 v2",
        modelName: "Jackery Explorer 500 v2",
        affiliateUrl: "https://amzn.to/3ULg6T7",
        capacityWh: 512,
        continuousOutputW: 500,
        surgeOutputW: 1000,
        acVoltageV: [120],
        specIdentityVerified: true,
        specSourceUrl: "https://www.amazon.com/Jackery-Explorer-500-Extension-Lightweight/dp/B07SM5HBK1",
        enabled: true,
      },
      // Amazon Associates SiteStripe short link — do not expand, rewrite, or re-shorten.
      // amzn.to/4gK4pnj -> amazon.com/dp/B0CVZQ5RN1 "EcoFlow RIVER 2 Max 500, 499Wh 500W ... Up to 1000W Output".
      // The 1000W is X-Boost, not a rated surge -> surgeOutputW left undefined.
      {
        brand: "ecoflow",
        brandName: "EcoFlow",
        productName: "EcoFlow RIVER 2 Max 500",
        modelName: "EcoFlow RIVER 2 Max 500",
        affiliateUrl: "https://amzn.to/4gK4pnj",
        capacityWh: 499,
        continuousOutputW: 500,
        acVoltageV: [120],
        specIdentityVerified: true,
        specSourceUrl: "https://www.amazon.com/EF-ECOFLOW-Portable-Charging-Generator/dp/B0CVZQ5RN1",
        enabled: true,
      },
      family("bluetti", "BLUETTI", "EB3A / EB55 family", 500),
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
      // Amazon Associates SiteStripe short link — do not expand, rewrite, or re-shorten.
      // amzn.to/4wWx2Ue -> amazon.com/dp/B0D7PPG25F. Jackery: 1070Wh, 1500W rated, 3000W surge peak, 3x 120V.
      {
        brand: "jackery",
        brandName: "Jackery",
        productName: "Jackery Explorer 1000 v2",
        modelName: "Jackery Explorer 1000 v2",
        affiliateUrl: "https://amzn.to/4wWx2Ue",
        capacityWh: 1070,
        continuousOutputW: 1500,
        surgeOutputW: 3000,
        acVoltageV: [120],
        specIdentityVerified: true,
        specSourceUrl: "https://www.jackery.com/products/jackery-explorer-1000-v2",
        enabled: true,
      },
      // Amazon Associates SiteStripe short link — do not expand, rewrite, or re-shorten.
      // amzn.to/4zM42RC -> amazon.com/dp/B0FQVC4RF5. EcoFlow: 1024Wh, 1800W rated, 3600W surge (X-Boost 2600W not counted).
      {
        brand: "ecoflow",
        brandName: "EcoFlow",
        productName: "EcoFlow DELTA 3 Classic",
        modelName: "EcoFlow DELTA 3 Classic",
        affiliateUrl: "https://amzn.to/4zM42RC",
        capacityWh: 1024,
        continuousOutputW: 1800,
        surgeOutputW: 3600,
        acVoltageV: [120],
        specIdentityVerified: true,
        specSourceUrl: "https://www.ecoflow.com/us/delta-3-classic-portable-power-station",
        enabled: true,
      },
      // Amazon Associates SiteStripe short link — do not expand, rewrite, or re-shorten.
      // amzn.to/4gECyVw -> amazon.com/dp/B0F42CSQWG. BLUETTI: 1024Wh, 1800W rated. The 3600W figure is
      // HyperVolt / Power Lifting, not a rated surge -> surgeOutputW left undefined.
      {
        brand: "bluetti",
        brandName: "BLUETTI",
        productName: "BLUETTI Elite 100 V2",
        modelName: "BLUETTI Elite 100 V2",
        affiliateUrl: "https://amzn.to/4gECyVw",
        capacityWh: 1024,
        continuousOutputW: 1800,
        acVoltageV: [120],
        specIdentityVerified: true,
        specSourceUrl: "https://www.bluettipower.com/products/elite-100-v2-portable-power-station",
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
      // amzn.to/4d7s3c4 -> amazon.com/dp/B0DFG2WDQH. Jackery: 2042Wh, 2200W rated, 4400W surge.
      {
        brand: "jackery",
        brandName: "Jackery",
        productName: "Jackery Explorer 2000 v2",
        modelName: "Jackery Explorer 2000 v2",
        affiliateUrl: "https://amzn.to/4d7s3c4",
        capacityWh: 2042,
        continuousOutputW: 2200,
        surgeOutputW: 4400,
        acVoltageV: [120],
        specIdentityVerified: true,
        specSourceUrl: "https://www.jackery.com/products/jackery-explorer-2000-v2-portable-power-station",
        enabled: true,
      },
      // Amazon Associates SiteStripe short link — do not expand, rewrite, or re-shorten.
      // amzn.to/46wIOty -> amazon.com/dp/B0FQV6LMVX "DELTA 3 Max ... 2048Wh ... 2400W | 3400W X-Boost".
      // 3400W is X-Boost, not a rated surge -> surgeOutputW left undefined.
      {
        brand: "ecoflow",
        brandName: "EcoFlow",
        productName: "EcoFlow DELTA 3 Max",
        modelName: "EcoFlow DELTA 3 Max",
        affiliateUrl: "https://amzn.to/46wIOty",
        capacityWh: 2048,
        continuousOutputW: 2400,
        acVoltageV: [120],
        specIdentityVerified: true,
        specSourceUrl: "https://www.amazon.com/clp/B0FQV6LMVX",
        enabled: true,
      },
      // Amazon Associates SiteStripe short link — do not expand, rewrite, or re-shorten.
      // amzn.to/4ck9AJf -> amazon.com/dp/B0CLGZB3L6. BLUETTI: 2048Wh, 2400W rated (5x 120V). Power Lifting
      // 3600W is not a rated surge -> surgeOutputW left undefined.
      {
        brand: "bluetti",
        brandName: "BLUETTI",
        productName: "BLUETTI AC200L",
        modelName: "BLUETTI AC200L",
        affiliateUrl: "https://amzn.to/4ck9AJf",
        capacityWh: 2048,
        continuousOutputW: 2400,
        acVoltageV: [120],
        specIdentityVerified: true,
        specSourceUrl: "https://www.bluettipower.com/products/ac200l-portable-power-station",
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
      // amzn.to/3UulYA8 -> amazon.com/dp/B0FFSLG3WZ "Jackery HomePower 3000 ... 3072Wh, 3600W AC Output | 7200W Surge".
      {
        brand: "jackery",
        brandName: "Jackery",
        productName: "Jackery HomePower 3000",
        modelName: "Jackery HomePower 3000",
        affiliateUrl: "https://amzn.to/3UulYA8",
        capacityWh: 3072,
        continuousOutputW: 3600,
        surgeOutputW: 7200,
        acVoltageV: [120],
        specIdentityVerified: true,
        specSourceUrl: "https://www.amazon.com/Jackery-HomePower-Generator-Essential-Emergencies/dp/B0FFSLG3WZ",
        enabled: true,
      },
      // Amazon Associates SiteStripe short link — do not expand, rewrite, or re-shorten.
      // amzn.to/3SCc7Yk -> amazon.com/dp/B0FQVBFLHL "EcoFlow Delta 3 Ultra ... 3072Wh ... 3600W (Surge 7200W) Output".
      {
        brand: "ecoflow",
        brandName: "EcoFlow",
        productName: "EcoFlow DELTA 3 Ultra",
        modelName: "EcoFlow DELTA 3 Ultra",
        affiliateUrl: "https://amzn.to/3SCc7Yk",
        capacityWh: 3072,
        continuousOutputW: 3600,
        surgeOutputW: 7200,
        acVoltageV: [120],
        specIdentityVerified: true,
        specSourceUrl: "https://www.amazon.com/EF-ECOFLOW-Portable-Generator-Emergencies/dp/B0FQVBFLHL",
        enabled: true,
      },
      // Amazon Associates SiteStripe short link — do not expand, rewrite, or re-shorten.
      // amzn.to/4cONKh0 -> amazon.com/dp/B0GKRTX336 "BLUETTI Elite 300 ... 3,014Wh, 2,400W". Power Lifting
      // figure is not a rated surge -> surgeOutputW left undefined.
      {
        brand: "bluetti",
        brandName: "BLUETTI",
        productName: "BLUETTI Elite 300",
        modelName: "BLUETTI Elite 300",
        affiliateUrl: "https://amzn.to/4cONKh0",
        capacityWh: 3014,
        continuousOutputW: 2400,
        acVoltageV: [120],
        specIdentityVerified: true,
        specSourceUrl: "https://www.bluettipower.com/products/elite-300-portable-power-station",
        enabled: true,
      },
    ],
  },
] as const;
