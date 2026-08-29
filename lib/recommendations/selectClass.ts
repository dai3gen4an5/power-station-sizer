import { CAPACITY_CLASSES, type CapacityClass } from "./products";

/**
 * Maps a recommended capacity (in watt-hours) to one of the four recommendation
 * capacity classes. Pure: no side effects, no dependency on calculator internals.
 *
 * Returns `null` for a non-positive / non-finite input (e.g. an empty calculator),
 * so the UI can simply render nothing rather than guess.
 *
 *   selectCapacityClass(470)  -> "500wh"
 *   selectCapacityClass(880)  -> "1000wh"
 *   selectCapacityClass(1765) -> "2000wh"
 *   selectCapacityClass(2500) -> "3000wh-plus"
 */
export function selectCapacityClass(recommendedWh: number): CapacityClass | null {
  if (!Number.isFinite(recommendedWh) || recommendedWh <= 0) return null;

  for (const cls of CAPACITY_CLASSES) {
    if (cls.maxWh === null || recommendedWh <= cls.maxWh) return cls;
  }

  // Unreachable while the last class has maxWh === null, but keep a safe fallback.
  return CAPACITY_CLASSES[CAPACITY_CLASSES.length - 1] ?? null;
}

/**
 * Convenience wrapper for the shape returned by `calculateResults`. Prefers the
 * raw recommended capacity; falls back to `recommendedSizeClass` when a caller
 * only has that. A `null` size class from the calculator means "larger than the
 * biggest known size", which maps to the open-ended top class.
 */
export function selectCapacityClassForResult(result: {
  recommendedCapacityWh: number;
  recommendedSizeClass: number | null;
}): CapacityClass | null {
  if (Number.isFinite(result.recommendedCapacityWh) && result.recommendedCapacityWh > 0) {
    return selectCapacityClass(result.recommendedCapacityWh);
  }
  if (result.recommendedSizeClass === null) {
    return CAPACITY_CLASSES[CAPACITY_CLASSES.length - 1] ?? null;
  }
  return selectCapacityClass(result.recommendedSizeClass);
}
