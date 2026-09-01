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
const WATTS = 300;
const MINUTES = 30;

export function RcSmallExample() {
  const rawWh = getTimedEnergyWh(WATTS, MINUTES);
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
      <h2 className="h2">300&nbsp;W small rice cooker example</h2>
      <p className="mt-3 text-ink/75">
        A small portable {WATTS.toLocaleString("en-US")}&nbsp;W rice cooker run for {MINUTES}{" "}
        minutes. Example figures &mdash; not every small cooker is 300&nbsp;W, so use your own
        label wattage and cook time.
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
          <span className="font-semibold">{startLabel}</span> recommendation range.
        </p>
        <p className="mt-3 text-sm text-ink/75">
          The output requirement is only{" "}
          <span className="font-mono">{WATTS.toLocaleString("en-US")} W</span>, which a small power
          station&apos;s inverter clears easily, so the recommendation stays in the{" "}
          <span className="font-semibold">{finalLabel}</span> range rather than moving up. This is
          the low end of the scale: a compact rice cooker is one of the few hot-food appliances a
          500&nbsp;Wh-class unit can realistically run. The calculator&apos;s own rounded size figure
          ({sizeLabel}) tracks the cook-cycle energy, not the catalogue range.
        </p>
      </div>
    </div>
  );
}
