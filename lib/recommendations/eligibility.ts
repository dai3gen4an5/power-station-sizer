import { CAPACITY_CLASSES, type CapacityClass, type ProductEntry } from "./products";
import { resolveProductLink } from "./links";
import { selectCapacityClass } from "./selectClass";

/**
 * Eligibility + upward class search for the product / affiliate recommendation layer.
 *
 * A listed unit is only shown as a normal recommendation when it clears every
 * requirement the calculator can supply, each checked independently:
 *
 *   1. Battery capacity  — the unit's real capacityWh >= recommended capacity.
 *   2. Continuous AC output — rated continuousOutputW >= required continuous W,
 *      when the calculator supplies a continuous-output requirement.
 *   3. Startup / surge output — rated surgeOutputW >= required surge W, when the
 *      calculator supplies a surge requirement.
 *
 * When a calculator supplies an output requirement, the search starts at the
 * smallest capacity class that could hold the energy and then walks UP the class
 * list until it finds a range that has at least one product meeting all of the
 * above with confirmed specs. This surfaces a valid, if larger, option instead
 * of showing nothing — while never resurrecting an under-capacity unit (capacity
 * is a hard prerequisite) and never treating an unknown spec as a pass.
 *
 * The calculator's own size-class rounding (`roundUpToSizeClass`) and on-page
 * size label are untouched: calculator sizing and affiliate matching are
 * deliberately separate.
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
   * the continuous-output check and the upward search are skipped.
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

function hasConfirmedW(value: number | undefined): value is number {
  return typeof value === "number" && Number.isFinite(value) && value > 0;
}

/** True when the product currently resolves to a real, clickable link. */
function isLinkable(product: ProductEntry): boolean {
  return resolveProductLink(product).href !== null;
}

/**
 * Classify one product against the supplied requirements. Pure. Capacity is
 * checked first, then continuous output, then surge — the first failing (or
 * unconfirmable) check is reported.
 */
export function classifyProduct(
  product: Pick<
    ProductEntry,
    "capacityWh" | "continuousOutputW" | "surgeOutputW"
  >,
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
    if (!hasConfirmedW(product.continuousOutputW)) return "continuous-output-unconfirmed";
    if (product.continuousOutputW < reqContinuous) return "continuous-output-insufficient";
  }

  const reqSurge = normalizeRequirementW(requirements.requiredSurgeOutputW);
  if (reqSurge > 0) {
    if (!hasConfirmedW(product.surgeOutputW)) return "surge-unconfirmed";
    if (product.surgeOutputW < reqSurge) return "surge-insufficient";
  }

  return "eligible";
}

export type RecommendationState =
  /** Nothing to recommend yet (empty calculator). Render nothing. */
  | { kind: "empty" }
  /**
   * The capacity requirement is larger than every single unit currently listed.
   * Capacity is a hard prerequisite, so no amount of output searching helps.
   */
  | { kind: "no-match"; recommendedWh: number }
  /**
   * Capacity can be met somewhere in the listed range, but after searching every
   * class from the starting one upward, no unit has a CONFIRMED output rating
   * that meets the load (rating too low, or spec unknown). Neutral, non-affiliate
   * note that states the watts to look for.
   */
  | {
      kind: "output-unconfirmed";
      recommendedWh: number;
      requiredContinuousOutputW: number;
      requiredSurgeOutputW: number;
    }
  /** One or more units that clear every supplied requirement. */
  | {
      kind: "products";
      capacityClass: CapacityClass;
      products: ProductEntry[];
      recommendedWh: number;
      /**
       * True when the class shown sits ABOVE the one the recommended capacity
       * alone would pick — i.e. the upward search escalated to find confirmed
       * AC-output headroom. The UI explains why.
       */
      capacityClassEscalated: boolean;
      /** Continuous / surge requirements that drove the search (0 when not supplied). */
      requiredContinuousOutputW: number;
      requiredSurgeOutputW: number;
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

  const startClass = selectCapacityClass(requiredWh);
  if (!startClass) return { kind: "empty" };

  const reqContinuous = normalizeRequirementW(input.requiredContinuousOutputW);
  const reqSurge = normalizeRequirementW(input.requiredSurgeOutputW);
  const outputAware = reqContinuous > 0 || reqSurge > 0;

  const startIndex = CAPACITY_CLASSES.findIndex((cls) => cls.id === startClass.id);
  const searchStart = startIndex < 0 ? 0 : startIndex;

  let sawCapacityFit = false; // some product had capacity >= requiredWh

  for (let i = searchStart; i < CAPACITY_CLASSES.length; i += 1) {
    const cls = CAPACITY_CLASSES[i];

    const capacityEligible = cls.products.filter((product) =>
      isProductCapacityEligible(product, requiredWh)
    );
    if (capacityEligible.length > 0) sawCapacityFit = true;

    if (!outputAware) {
      // Capacity-only page: keep the long-standing behaviour — show every
      // capacity-eligible product in the first class that has one, placeholders
      // included. No upward search past that class.
      if (capacityEligible.length > 0) {
        return {
          kind: "products",
          capacityClass: cls,
          products: capacityEligible,
          recommendedWh: requiredWh,
          capacityClassEscalated: i > searchStart,
          requiredContinuousOutputW: 0,
          requiredSurgeOutputW: 0,
        };
      }
      continue;
    }

    // Output-aware: a shown product must clear capacity + continuous + surge with
    // confirmed specs AND currently resolve to a real link (a disabled / linkless
    // placeholder is never presented as a confirmed-compatible recommendation).
    const eligible = capacityEligible.filter(
      (product) =>
        classifyProduct(product, {
          recommendedWh: requiredWh,
          requiredContinuousOutputW: reqContinuous,
          requiredSurgeOutputW: reqSurge,
        }) === "eligible" && isLinkable(product)
    );

    if (eligible.length > 0) {
      return {
        kind: "products",
        capacityClass: cls,
        products: eligible,
        recommendedWh: requiredWh,
        capacityClassEscalated: i > searchStart,
        requiredContinuousOutputW: reqContinuous,
        requiredSurgeOutputW: reqSurge,
      };
    }
  }

  // Nothing eligible in any class from the starting one upward.
  if (!sawCapacityFit) {
    // Every listed unit fell short on capacity — a hard limit.
    return { kind: "no-match", recommendedWh: requiredWh };
  }
  // Capacity is reachable, but confirmed AC output is not (too low, or unknown).
  return {
    kind: "output-unconfirmed",
    recommendedWh: requiredWh,
    requiredContinuousOutputW: reqContinuous,
    requiredSurgeOutputW: reqSurge,
  };
}
