import { type CapacityClass, type ProductEntry } from "./products";
import { selectCapacityClass } from "./selectClass";

/**
 * Capacity-eligibility for the product / affiliate recommendation layer.
 *
 * The problem this solves: the four capacity classes are a *shopping range*, and
 * the top class ("3,000Wh+") is open-ended. Mapping a recommended capacity of,
 * say, 7,059Wh to that class and then showing ~3,000Wh single units recommends
 * hardware that is plainly too small for the calculator's own result.
 *
 * The rule here is deliberately strict and pure: a single unit is only shown
 * when its nominal capacity meets or exceeds the recommended battery capacity.
 * When nothing in the catalogue is large enough, the caller shows a neutral,
 * non-affiliate "no single-unit match" state instead of an undersized link.
 *
 * This is entirely separate from the calculator's own size-class rounding
 * (`roundUpToSizeClass`) — that still drives the on-page size label unchanged.
 */

/**
 * True when `product` is large enough to be recommended for `recommendedWh`.
 * Strict `>=`: the layer never recommends a single unit smaller than the
 * calculator's recommended capacity. Non-positive / non-finite inputs are never
 * eligible.
 */
export function isProductCapacityEligible(
  product: Pick<ProductEntry, "capacityWh">,
  recommendedWh: number
): boolean {
  if (!Number.isFinite(recommendedWh) || recommendedWh <= 0) return false;
  if (!Number.isFinite(product.capacityWh) || product.capacityWh <= 0) return false;
  return product.capacityWh >= recommendedWh;
}

export type RecommendationState =
  /** Nothing to recommend yet (empty calculator). Render nothing. */
  | { kind: "empty" }
  /**
   * A capacity requirement larger than every single unit currently listed.
   * Render a neutral, non-affiliate note — no product cards, no links.
   */
  | { kind: "no-match"; recommendedWh: number }
  /** One or more eligible single units to compare. */
  | {
      kind: "products";
      capacityClass: CapacityClass;
      products: ProductEntry[];
      recommendedWh: number;
    };

/**
 * Resolve the numeric requirement the recommendation layer sizes against, using
 * the same precedence `ProductRecommendations` has always used: the raw
 * recommended capacity when present, otherwise the nearest size class.
 */
function resolveRequiredWh(
  recommendedCapacityWh: number,
  recommendedSizeClass: number | null
): number | null {
  if (Number.isFinite(recommendedCapacityWh) && recommendedCapacityWh > 0) {
    return recommendedCapacityWh;
  }
  if (
    recommendedSizeClass !== null &&
    Number.isFinite(recommendedSizeClass) &&
    recommendedSizeClass > 0
  ) {
    return recommendedSizeClass;
  }
  return null;
}

/**
 * Decide what the recommendation section should render for a calculator result.
 * Pure: no side effects, no calculator math. Shared by every page that renders
 * <ProductRecommendations />.
 */
export function getRecommendationState(input: {
  recommendedCapacityWh: number;
  recommendedSizeClass: number | null;
}): RecommendationState {
  const requiredWh = resolveRequiredWh(input.recommendedCapacityWh, input.recommendedSizeClass);
  if (requiredWh === null) return { kind: "empty" };

  const capacityClass = selectCapacityClass(requiredWh);
  if (!capacityClass) return { kind: "empty" };

  const products = capacityClass.products.filter((product) =>
    isProductCapacityEligible(product, requiredWh)
  );
  if (products.length === 0) return { kind: "no-match", recommendedWh: requiredWh };

  return { kind: "products", capacityClass, products, recommendedWh: requiredWh };
}
