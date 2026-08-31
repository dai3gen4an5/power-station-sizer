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
const INPUT_WATTS = 1500;
const USE_MINUTES = 10;

export function MwWorkedExample() {
  const rawWh = getTimedEnergyWh(INPUT_WATTS, USE_MINUTES);
  const minimumBeforeReserveWh = getEfficiencyAdjustedWh(rawWh, DEFAULT_SETTINGS.inverterEfficiency);
  const recommendedWh = getRecommendedCapacityWh(
    minimumBeforeReserveWh,
    DEFAULT_SETTINGS.batteryReserve
  );
  const sizeClass = roundUpToSizeClass(recommendedWh);
  const sizeLabel = sizeClass ? formatWh(sizeClass) : "5,000 Wh+";

  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">Worked 10-minute example</h2>
      <p className="mt-3 text-ink/75">
        A microwave with a rear label reading {INPUT_WATTS.toLocaleString("en-US")}&nbsp;W of input
        power, run for {USE_MINUTES} minutes total. These are example figures &mdash; use your own
        microwave&apos;s input watts, not its cooking rating.
      </p>
      <div className="mt-4 rounded-2xl border border-line bg-white p-5 sm:p-6">
        <p className="font-mono text-lg text-ink">
          {INPUT_WATTS.toLocaleString("en-US")} W &times; {USE_MINUTES} min / 60 = {formatWh(rawWh)}
        </p>
        <p className="mt-3 text-sm text-ink/70">
          That {formatWh(rawWh)} is the energy the microwave uses before adjustments. After{" "}
          {DEFAULT_SETTINGS.inverterEfficiency}% inverter efficiency it is about{" "}
          <span className="font-mono">{formatWh(minimumBeforeReserveWh)}</span>, and keeping a{" "}
          {DEFAULT_SETTINGS.batteryReserve}% reserve brings the recommended battery capacity to
          roughly <span className="font-mono">{formatWh(recommendedWh)}</span> &mdash; the {sizeLabel}{" "}
          class on energy alone.
        </p>
        <p className="mt-3 text-sm text-ink/70">
          The catch is output, not capacity. Separately from the {formatWh(recommendedWh)}, the power
          station must supply at least{" "}
          <span className="font-mono">{INPUT_WATTS.toLocaleString("en-US")} W</span> continuously to
          run this microwave. A small power station can clear the energy figure and still be unable
          to start it because its inverter tops out below {INPUT_WATTS.toLocaleString("en-US")}&nbsp;W.
        </p>
      </div>
    </div>
  );
}
