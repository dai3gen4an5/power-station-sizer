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
const WATTS = 50;
const HOURS = 4;

export function EbExample4h() {
  const rawWh = getTimedEnergyWh(WATTS, HOURS * 60);
  const minimumBeforeReserveWh = getEfficiencyAdjustedWh(rawWh, DEFAULT_SETTINGS.inverterEfficiency);
  const recommendedWh = getRecommendedCapacityWh(
    minimumBeforeReserveWh,
    DEFAULT_SETTINGS.batteryReserve
  );

  const sizeClass = roundUpToSizeClass(recommendedWh);
  const sizeLabel = sizeClass ? formatWh(sizeClass) : "5,000 Wh+";

  const startClass = selectCapacityClassForResult({
    recommendedCapacityWh: recommendedWh,
    recommendedSizeClass: sizeClass,
  });
  const startLabel = startClass?.label ?? "5,000Wh+";

  const finalState = getRecommendationState({
    recommendedCapacityWh: recommendedWh,
    recommendedSizeClass: sizeClass,
    requiredContinuousOutputW: WATTS,
  });
  const finalLabel =
    finalState.kind === "products" ? finalState.capacityClass.label : startLabel;

  return (
    <div>
      <h2 className="h2">50&nbsp;W, 4-hour example</h2>
      <p className="mt-3 text-ink/75">
        A heated throw drawing {WATTS}&nbsp;W, run for {HOURS} hours on the sofa. Example figures
        &mdash; not every throw is 50&nbsp;W, so use your own label wattage and run time.
      </p>
      <div className="mt-4 card card-pad">
        <p className="font-mono text-lg text-ink">
          {WATTS} W &times; {HOURS} h = {formatWh(rawWh)}
        </p>
        <p className="mt-3 text-sm text-ink/75">
          That {formatWh(rawWh)} is the raw energy. After {DEFAULT_SETTINGS.inverterEfficiency}%
          inverter efficiency it is about{" "}
          <span className="font-mono">{formatWh(minimumBeforeReserveWh)}</span>, and keeping a{" "}
          {DEFAULT_SETTINGS.batteryReserve}% reserve brings the recommended battery capacity to
          roughly <span className="font-mono">{formatWh(recommendedWh)}</span>. On capacity alone the
          calculator rounds that to about a <span className="font-semibold">{sizeLabel}</span> power
          station, and the listed product catalogue begins at the{" "}
          <span className="font-semibold">{startLabel}</span> recommendation range.
        </p>
        <p className="mt-3 text-sm text-ink/75">
          The AC-output requirement is only <span className="font-mono">{WATTS} W</span>, which every
          listed unit clears, so the recommendation stays in the{" "}
          <span className="font-semibold">{finalLabel}</span> range purely on capacity. A short
          evening on a low-wattage throw is one of the few heating uses a 500&nbsp;Wh-class unit can
          cover. The calculator&apos;s own rounded size figure ({sizeLabel}) tracks the energy, not
          the catalogue range.
        </p>
      </div>
    </div>
  );
}
