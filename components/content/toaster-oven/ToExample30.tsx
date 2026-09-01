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
const WATTS = 1500;
const MINUTES = 30;

export function ToExample30() {
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
      <h2 className="h2">1,500&nbsp;W, 30-minute example</h2>
      <p className="mt-3 text-ink/75">
        The same {WATTS.toLocaleString("en-US")}&nbsp;W oven, now run for {MINUTES} minutes &mdash;
        preheat plus a full bake. This is the calculator&apos;s default example. Use your own
        numbers.
      </p>
      <div className="mt-4 card card-pad">
        <p className="font-mono text-lg text-ink">
          {WATTS.toLocaleString("en-US")} W &times; {MINUTES} min / 60 = {formatWh(rawWh)}
        </p>
        <p className="mt-3 text-sm text-ink/75">
          Tripling the cook time triples the raw energy to {formatWh(rawWh)}. After{" "}
          {DEFAULT_SETTINGS.inverterEfficiency}% inverter efficiency it is about{" "}
          <span className="font-mono">{formatWh(minimumBeforeReserveWh)}</span>, and a{" "}
          {DEFAULT_SETTINGS.batteryReserve}% reserve brings the recommended battery capacity to
          roughly <span className="font-mono">{formatWh(recommendedWh)}</span>. On capacity alone the
          calculator now rounds that to about a <span className="font-semibold">{sizeLabel}</span>{" "}
          power station, and the listed product catalogue begins at the{" "}
          <span className="font-semibold">{startLabel}</span> recommendation range &mdash; a step up
          from the 10-minute case, because the longer cook pushes the capacity requirement itself
          higher.
        </p>
        <p className="mt-3 text-sm text-ink/75">
          The continuous-output requirement is unchanged at{" "}
          <span className="font-mono">{WATTS.toLocaleString("en-US")} W</span> &mdash; it depends on
          the oven&apos;s watts, not the cook time.{" "}
          {escalated ? (
            <>
              The {startLabel} range&apos;s listed units cannot confirm that, so the recommendation
              below moves up to the <span className="font-semibold">{finalLabel}</span> range.
            </>
          ) : (
            <>
              The {finalLabel} range already lists units with a confirmed continuous rating of{" "}
              {WATTS.toLocaleString("en-US")}&nbsp;W or more, so the recommendation below stays in
              that range.
            </>
          )}{" "}
          The takeaway: at 10 minutes the output rating is the binding constraint; by 30 minutes the
          battery capacity has caught up and moved the whole recommendation up a class. The
          calculator&apos;s own rounded size figure tracks the capacity, not the catalogue range.
        </p>
      </div>
    </div>
  );
}
