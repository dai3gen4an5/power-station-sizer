import { type CapacityClass, type ProductEntry } from "./products";
import { selectCapacityClass } from "./selectClass";

/**
 * Eligibility for the product / affiliate recommendation layer.
 *
 * A listed unit is only shown as a normal recommendation when it clears every
 * requirement the calculator can supply, each checked independently:
 *
 *   1. Battery capacity  — nominal capacityWh >= recommended capacity.
 *   2. Continuous AC output — rated continuousOutputW >= required continuous W,
 *      when the calculator supplies a continuous-output requirement.
 *   3. Startup / surge output — rated surgeOutputW >= required surge W, when the
 *      calculator supplies a surge requirement.
 *
 * A requirement that is not supplied (0 / undefined) is simply not applied. A
 * requirement that IS supplied but whose product spec is unknown yields
 * "unconfirmed" — never a pass. "Enough capacity" is never treated as proof of
 * output compatibility.
 *
 * This is entirely separate from the calculator's own size-class rounding
 * (`roundUpToSizeClass`) — that still drives the on-page size label unchanged.
 */

/** How a single product measures up against the supplied requirements. */
export type ProductEligibility =
  | "eligible"
  | "capacity-insufficient"
  | "continuous-output-insufficient"
  | "continuous-output-unconfirmed"
  | "surge-insufficient"
  | "surge-unconfirmed";

export interface RecommendationRequirements {
  /** Recommended battery capacity from the calculator, in watt-hours. */
  recommendedCapacityWh: number;
  /** Nearest common size class, or null when above the largest known size. */
  recommendedSizeClass: number | null;
  /**
   * Continuous AC output the load needs, in watts. 0 / undefined = the
   * calculator does not supply one (e.g. a multi-device capacity-only page), so
   * the continuous-output check is skipped entirely.
   */
  requiredContinuousOutputW?: number;
  /**
   * Startup / surge output the load needs, in watts. 0 / undefined = not
   * supplied / unknown, so the surge check is skipped entirely (the calculator
   * keeps its own "verify the surge rating" warning).
   */
  requiredSurgeOutputW?: number;
}

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

function normalizeRequirementW(value: number | undefined): number {
  return typeof value === "number" && Number.isFinite(value) && value > 0 ? value : 0;
}

/**
 * Classify one product against the supplied requirements. Pure. Capacity is
 * checked first, then continuous output, then surge — the first failing (or
 * unconfirmable) check is reported.
 */
export function classifyProduct(
  product: Pick<ProductEntry, "capacityWh" | "continuousOutputW" | "surgeOutputW">,
  requirements: {
    recommendedWh: number;
    requiredContinuousOutputW?: number;
    requiredSurgeOutputW?: number;
  }
): ProductEligibility {
  if (!isProductCapacityEligible(product, requirements.recommendedWh)) {
    return "capacity-insufficient";
  }

  const reqContinuous = normalizeRequirementW(requirements.requiredContinuousOutputW);
  if (reqContinuous > 0) {
    const have = product.continuousOutputW;
    if (typeof have !== "number" || !Number.isFinite(have) || have <= 0) {
      return "continuous-output-unconfirmed";
    }
    if (have < reqContinuous) return "continuous-output-insufficient";
  }

  const reqSurge = normalizeRequirementW(requirements.requiredSurgeOutputW);
  if (reqSurge > 0) {
    const have = product.surgeOutputW;
    if (typeof have !== "number" || !Number.isFinite(have) || have <= 0) {
      return "surge-unconfirmed";
    }
    if (have < reqSurge) return "surge-insufficient";
  }

  return "eligible";
}

export type RecommendationState =
  /** Nothing to recommend yet (empty calculator). Render nothing. */
  | { kind: "empty" }
  /**
   * The capacity requirement is larger than every single unit currently listed.
   * Render a neutral, non-affiliate note — no product cards, no links.
   */
  | { kind: "no-match"; recommendedWh: number }
  /**
   * Capacity can be met in this range, but no listed unit has a CONFIRMED
   * output rating high enough for the load (spec unknown, or known and too low).
   * Render a neutral, non-affiliate note that states the watts to look for.
   */
  | {
      kind: "output-unconfirmed";
      recommendedWh: number;
      requiredContinuousOutputW: number;
      requiredSurgeOutputW: number;
      capacityClass: CapacityClass;
    }
  /** One or more units that clear every supplied requirement. */
  | {
      kind: "products";
      capacityClass: CapacityClass;
      products: ProductEntry[];
      recommendedWh: number;
    };

/**
 * Resolve the numeric capacity requirement the recommendation layer sizes
 * against, using the precedence `ProductRecommendations` has always used: the
 * raw recommended capacity when present, otherwise the nearest size class.
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
export function getRecommendationState(
  input: RecommendationRequirements
): RecommendationState {
  const requiredWh = resolveRequiredWh(input.recommendedCapacityWh, input.recommendedSizeClass);
  if (requiredWh === null) return { kind: "empty" };

  const capacityClass = selectCapacityClass(requiredWh);
  if (!capacityClass) return { kind: "empty" };

  const reqContinuous = normalizeRequirementW(input.requiredContinuousOutputW);
  const reqSurge = normalizeRequirementW(input.requiredSurgeOutputW);

  const verdicts = capacityClass.products.map((product) => ({
    product,
    verdict: classifyProduct(product, {
      recommendedWh: requiredWh,
      requiredContinuousOutputW: reqContinuous,
      requiredSurgeOutputW: reqSurge,
    }),
  }));

  const eligible = verdicts.filter((v) => v.verdict === "eligible").map((v) => v.product);
  if (eligible.length > 0) {
    return { kind: "products", capacityClass, products: eligible, recommendedWh: requiredWh };
  }

  // Nothing eligible. If EVERY unit fell short on capacity, the requirement is
  // simply larger than anything listed — the existing "no-match" note. If at
  // least one unit had the capacity but failed / could not confirm output, say
  // that instead, and state the watts to shop for.
  const everyCapacityShort = verdicts.every((v) => v.verdict === "capacity-insufficient");
  if (everyCapacityShort) {
    return { kind: "no-match", recommendedWh: requiredWh };
  }

  return {
    kind: "output-unconfirmed",
    recommendedWh: requiredWh,
    requiredContinuousOutputW: reqContinuous,
    requiredSurgeOutputW: reqSurge,
    capacityClass,
  };
}
