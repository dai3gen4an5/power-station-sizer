import {
  getEfficiencyAdjustedWh,
  getRecommendedCapacityWh,
  roundUpToSizeClass,
} from "@/lib/calculator/calculations";
import { DEFAULT_SETTINGS } from "@/lib/calculator/constants";
import { getTimedEnergyWh } from "@/lib/calculator/power-output";
import { getRecommendationState } from "@/lib/recommendations/eligibility";
import { selectCapacityClassForResult } from "@/lib/recommendations/selectClass";
import { formatWh } from "@/lib/utils/format";

// Computed with the same functions the interactive calculator and the
// recommendation layer use, so the numbers here cannot drift out of sync.
const WATTS = 250;
const HOURS = 6;

export function ScWorkedExample() {
  const rawWh = getTimedEnergyWh(WATTS, HOURS * 60);
  const minimumBeforeReserveWh = getEfficiencyAdjustedWh(rawWh, DEFAULT_SETTINGS.inverterEfficiency);
  const recommendedWh = getRecommendedCapacityWh(
    minimumBeforeReserveWh,
    DEFAULT_SETTINGS.batteryReserve
  );

  // 1. calculator rounded size — nearest common power-station size
  const sizeClass = roundUpToSizeClass(recommendedWh);
  const sizeLabel = sizeClass ? formatWh(sizeClass) : "5,000 Wh+";

  // 2. affiliate starting recommendation range — before the output check
  const startClass = selectCapacityClassForResult({
    recommendedCapacityWh: recommendedWh,
    recommendedSizeClass: sizeClass,
  });
  const startLabel = startClass?.label ?? "5,000Wh+";

  // 3. final output-aware recommendation range — after the continuous-output check
  const finalState = getRecommendationState({
    recommendedCapacityWh: recommendedWh,
    recommendedSizeClass: sizeClass,
    requiredContinuousOutputW: WATTS,
  });
  const finalLabel =
    finalState.kind === "products" ? finalState.capacityClass.label : startLabel;
  const escalated = finalState.kind === "products" && finalState.capacityClassEscalated;

  return (
    <div>
      <h2 className="h2">250&nbsp;W, 6-hour worked example</h2>
      <p className="mt-3 text-ink/75">
        A {WATTS.toLocaleString("en-US")}&nbsp;W slow cooker run for {HOURS} hours &mdash; a typical
        weeknight braise. This is the calculator&apos;s default example. Use your own numbers.
      </p>
      <div className="mt-4 card card-pad">
        <p className="font-mono text-lg text-ink">
          {WATTS.toLocaleString("en-US")} W &times; {HOURS} h = {formatWh(rawWh)}
        </p>
        <p className="mt-3 text-sm text-ink/75">
          That {formatWh(rawWh)} is the raw cook energy. After{" "}
          {DEFAULT_SETTINGS.inverterEfficiency}% inverter efficiency it is about{" "}
          <span className="font-mono">{formatWh(minimumBeforeReserveWh)}</span>, and keeping a{" "}
          {DEFAULT_SETTINGS.batteryReserve}% reserve brings the recommended battery capacity to
          roughly <span className="font-mono">{formatWh(recommendedWh)}</span>. On capacity alone the
          calculator rounds that to about a <span className="font-semibold">{sizeLabel}</span> power
          station, and the listed product catalogue begins at the{" "}
          <span className="font-semibold">{startLabel}</span> recommendation range &mdash; the first
          range whose real product capacity can meet that requirement.
        </p>
        <p className="mt-3 text-sm text-ink/75">
          Then the output requirement is applied. It is only{" "}
          <span className="font-mono">{WATTS.toLocaleString("en-US")} W</span> continuously, far
          below what any listed unit can supply.{" "}
          {escalated ? (
            <>
              Even so, the {startLabel} range&apos;s listed units cannot confirm it, so the
              recommendation moves up to the{" "}
              <span className="font-semibold">{finalLabel}</span> range.
            </>
          ) : (
            <>
              So the recommendation stays in the{" "}
              <span className="font-semibold">{finalLabel}</span> range, chosen entirely on capacity
              &mdash; the six hours of runtime, not the 250&nbsp;W, are what put it there.
            </>
          )}{" "}
          The calculator&apos;s own rounded size figure does not change either way.
        </p>
      </div>
    </div>
  );
}
