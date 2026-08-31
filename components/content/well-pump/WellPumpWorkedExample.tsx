import {
  getEfficiencyAdjustedWh,
  getRecommendedCapacityWh,
  roundUpToSizeClass,
} from "@/lib/calculator/calculations";
import { DEFAULT_SETTINGS } from "@/lib/calculator/constants";
import { getCyclingEnergyWh } from "@/lib/calculator/power-output";
import { formatWh } from "@/lib/utils/format";

// Computed with the same functions the interactive calculator uses, so the
// numbers here cannot drift out of sync with the tool.
const RUNNING_WATTS = 1000;
const STARTUP_WATTS = 2500;
const MINUTES_PER_HOUR = 10;
const OUTAGE_HOURS = 12;

export function WellPumpWorkedExample() {
  const rawWh = getCyclingEnergyWh({
    runningWatts: RUNNING_WATTS,
    minutesPerHour: MINUTES_PER_HOUR,
    hours: OUTAGE_HOURS,
  });
  const minimumBeforeReserveWh = getEfficiencyAdjustedWh(rawWh, DEFAULT_SETTINGS.inverterEfficiency);
  const recommendedWh = getRecommendedCapacityWh(
    minimumBeforeReserveWh,
    DEFAULT_SETTINGS.batteryReserve
  );
  const sizeClass = roundUpToSizeClass(recommendedWh);
  const sizeLabel = sizeClass ? formatWh(sizeClass) : "5,000 Wh+";

  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">Worked outage example</h2>
      <p className="mt-3 text-ink/75">
        A pump with a spec sheet reading {RUNNING_WATTS.toLocaleString("en-US")}&nbsp;W running and{" "}
        {STARTUP_WATTS.toLocaleString("en-US")}&nbsp;W starting, expected to run about{" "}
        {MINUTES_PER_HOUR} minutes of each hour, backed up for a {OUTAGE_HOURS}-hour outage. These are
        example figures &mdash; use your own pump&apos;s, and they are not tied to a particular
        horsepower.
      </p>
      <div className="mt-4 rounded-2xl border border-line bg-white p-5 sm:p-6">
        <p className="font-mono text-lg text-ink">
          {RUNNING_WATTS.toLocaleString("en-US")} W &times; {MINUTES_PER_HOUR} min &times;{" "}
          {OUTAGE_HOURS} h / 60 = {formatWh(rawWh)}
        </p>
        <p className="mt-3 text-sm text-ink/70">
          That {formatWh(rawWh)} is the pump&apos;s energy use before adjustments. After{" "}
          {DEFAULT_SETTINGS.inverterEfficiency}% inverter efficiency it is about{" "}
          <span className="font-mono">{formatWh(minimumBeforeReserveWh)}</span>, and keeping a{" "}
          {DEFAULT_SETTINGS.batteryReserve}% reserve brings the recommended battery capacity to
          roughly <span className="font-mono">{formatWh(recommendedWh)}</span> &mdash; the {sizeLabel}{" "}
          class.
        </p>
        <p className="mt-3 text-sm text-ink/70">
          Separately, the power station must supply at least{" "}
          <span className="font-mono">{RUNNING_WATTS.toLocaleString("en-US")} W</span> continuously,
          handle a <span className="font-mono">{STARTUP_WATTS.toLocaleString("en-US")} W</span>{" "}
          startup surge, and provide the pump&apos;s voltage (120V or 240V) in a usable outlet. A unit
          in the {sizeLabel} capacity class only clears the first requirement.
        </p>
      </div>
    </div>
  );
}
