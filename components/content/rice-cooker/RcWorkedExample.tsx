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
const WATTS = 700;
const MINUTES = 45;

export function RcWorkedExample() {
  const rawWh = getTimedEnergyWh(WATTS, MINUTES);
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
      <h2 className="h2">700&nbsp;W, 45-minute worked example</h2>
      <p className="mt-3 text-ink/75">
        A {WATTS.toLocaleString("en-US")}&nbsp;W family rice cooker run for {MINUTES} minutes for one
        cook cycle. This is the calculator&apos;s default example. Use your own numbers.
      </p>
      <div className="mt-4 card card-pad">
        <p className="font-mono text-lg text-ink">
          {WATTS.toLocaleString("en-US")} W &times; {MINUTES} min / 60 = {formatWh(rawWh)}
        </p>
        <p className="mt-3 text-sm text-ink/75">
          That {formatWh(rawWh)} is the raw cook-cycle energy. After{" "}
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
          Then the output requirement is applied. Separately from the {formatWh(recommendedWh)}, the
          power station has to supply at least{" "}
          <span className="font-mono">{WATTS.toLocaleString("en-US")} W</span> continuously while the
          element heats.{" "}
          {escalated ? (
            <>
              The {startLabel} range&apos;s listed units cannot confirm that, so the recommendation
              below moves up to the <span className="font-semibold">{finalLabel}</span> range.
            </>
          ) : (
            <>
              The {finalLabel} range&apos;s listed units already have a confirmed continuous rating
              well above {WATTS.toLocaleString("en-US")}&nbsp;W, so the recommendation below stays in
              that range.
            </>
          )}{" "}
          A higher-wattage IH or pressure cooker would raise that output bar and could push the
          recommendation up a class; a simple resistive cooker like this one does not. The
          calculator&apos;s own rounded size figure does not change either way.
        </p>
      </div>
    </div>
  );
}
