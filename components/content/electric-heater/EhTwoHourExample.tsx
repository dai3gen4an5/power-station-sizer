import {
  getEfficiencyAdjustedWh,
  getRecommendedCapacityWh,
  roundUpToSizeClass,
} from "@/lib/calculator/calculations";
import { DEFAULT_SETTINGS } from "@/lib/calculator/constants";
import { getTimedEnergyWh } from "@/lib/calculator/power-output";
import { formatWh } from "@/lib/utils/format";

// Computed with the same functions the interactive calculator uses, so the
// numbers here cannot drift out of sync with the tool.
const WATTS = 1500;
const HOURS = 2;

export function EhTwoHourExample() {
  const rawWh = getTimedEnergyWh(WATTS, HOURS * 60);
  const minimumBeforeReserveWh = getEfficiencyAdjustedWh(rawWh, DEFAULT_SETTINGS.inverterEfficiency);
  const recommendedWh = getRecommendedCapacityWh(
    minimumBeforeReserveWh,
    DEFAULT_SETTINGS.batteryReserve
  );
  const sizeClass = roundUpToSizeClass(recommendedWh);
  const sizeLabel = sizeClass ? formatWh(sizeClass) : "5,000 Wh+";

  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Two-hour, 1,500&nbsp;W worked example
      </h2>
      <p className="mt-3 text-ink/75">
        A {WATTS.toLocaleString("en-US")}&nbsp;W heater run for {HOURS} hours. Example figures &mdash;
        use your own heater&apos;s label wattage and the time you actually need.
      </p>
      <div className="mt-4 rounded-2xl border border-line bg-white p-5 sm:p-6">
        <p className="font-mono text-lg text-ink">
          {WATTS.toLocaleString("en-US")} W &times; {HOURS} h = {formatWh(rawWh)}
        </p>
        <p className="mt-3 text-sm text-ink/70">
          That {formatWh(rawWh)} is the raw energy. After {DEFAULT_SETTINGS.inverterEfficiency}%
          inverter efficiency it is about{" "}
          <span className="font-mono">{formatWh(minimumBeforeReserveWh)}</span>, and keeping a{" "}
          {DEFAULT_SETTINGS.batteryReserve}% reserve brings the recommended battery capacity to
          roughly <span className="font-mono">{formatWh(recommendedWh)}</span> &mdash; the {sizeLabel}{" "}
          class on energy alone.
        </p>
        <p className="mt-3 text-sm text-ink/70">
          Two things follow. First, the power station must also supply at least{" "}
          <span className="font-mono">{WATTS.toLocaleString("en-US")} W</span> continuously the whole
          time. Second, roughly {formatWh(recommendedWh)} is more than a single unit in the current
          product list holds, so the recommendation shows a neutral note about expandable or
          whole-home systems rather than an under-capacity affiliate link. Just two hours of a
          1,500&nbsp;W heater is already a large amount of stored energy.
        </p>
      </div>
    </div>
  );
}
