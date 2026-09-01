import {
  getEfficiencyAdjustedWh,
  getRecommendedCapacityWh,
  roundUpToSizeClass,
} from "@/lib/calculator/calculations";
import { DEFAULT_SETTINGS } from "@/lib/calculator/constants";
import { getTimedEnergyWh } from "@/lib/calculator/power-output";
import { selectCapacityClassForResult } from "@/lib/recommendations/selectClass";
import { formatWh } from "@/lib/utils/format";

// Computed with the same functions the interactive calculator uses, so the
// numbers here cannot drift out of sync with the tool.
const WATTS = 1200;
const MINUTES = 10;

export function CmWorkedExample() {
  const rawWh = getTimedEnergyWh(WATTS, MINUTES);
  const minimumBeforeReserveWh = getEfficiencyAdjustedWh(rawWh, DEFAULT_SETTINGS.inverterEfficiency);
  const recommendedWh = getRecommendedCapacityWh(
    minimumBeforeReserveWh,
    DEFAULT_SETTINGS.batteryReserve
  );
  const sizeClass = roundUpToSizeClass(recommendedWh);
  const capacityClass = selectCapacityClassForResult({
    recommendedCapacityWh: recommendedWh,
    recommendedSizeClass: sizeClass,
  });
  const classLabel = capacityClass?.label ?? "5,000Wh+";

  return (
    <div>
      <h2 className="h2">
        1,200&nbsp;W, 10-minute worked example
      </h2>
      <p className="mt-3 text-ink/75">
        A {WATTS.toLocaleString("en-US")}&nbsp;W coffee maker run for {MINUTES} minutes. Example
        figures &mdash; use your own machine&apos;s label wattage and run time.
      </p>
      <div className="mt-4 card card-pad">
        <p className="font-mono text-lg text-ink">
          {WATTS.toLocaleString("en-US")} W &times; {MINUTES} min / 60 = {formatWh(rawWh)}
        </p>
        <p className="mt-3 text-sm text-ink/70">
          That {formatWh(rawWh)} is the raw energy. After {DEFAULT_SETTINGS.inverterEfficiency}%
          inverter efficiency it is about{" "}
          <span className="font-mono">{formatWh(minimumBeforeReserveWh)}</span>, and keeping a{" "}
          {DEFAULT_SETTINGS.batteryReserve}% reserve brings the recommended battery capacity to
          roughly <span className="font-mono">{formatWh(recommendedWh)}</span> &mdash; the{" "}
          {classLabel} class on energy alone.
        </p>
        <p className="mt-3 text-sm text-ink/70">
          The output requirement is the catch. Separately from the {formatWh(recommendedWh)}, the
          power station has to supply at least{" "}
          <span className="font-mono">{WATTS.toLocaleString("en-US")} W</span> continuously for the
          whole brew. Units in the {classLabel} class typically have around a 500&nbsp;W inverter, so
          the recommendation below searches up to the first listed class whose units have a confirmed
          continuous rating of {WATTS.toLocaleString("en-US")}&nbsp;W or more. The
          calculator&apos;s own size figure does not change.
        </p>
      </div>
    </div>
  );
}
