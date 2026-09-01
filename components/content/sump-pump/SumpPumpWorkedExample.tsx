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
const RUNNING_WATTS = 800;
const STARTUP_WATTS = 1600;
const MINUTES_PER_HOUR = 10;
const OUTAGE_HOURS = 12;

export function SumpPumpWorkedExample() {
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
      <h2 className="h2">Worked outage example</h2>
      <p className="mt-3 text-ink/75">
        A pump with a spec sheet reading {RUNNING_WATTS}&nbsp;W running and {STARTUP_WATTS}&nbsp;W
        starting, expected to run about {MINUTES_PER_HOUR} minutes of each hour, backed up for a{" "}
        {OUTAGE_HOURS}-hour outage. These are example figures &mdash; use your own pump&apos;s.
      </p>
      <div className="mt-4 card card-pad">
        <p className="font-mono text-lg text-ink">
          {RUNNING_WATTS} W &times; ({MINUTES_PER_HOUR} / 60) &times; {OUTAGE_HOURS} h ={" "}
          {formatWh(rawWh)}
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
          <span className="font-mono">{RUNNING_WATTS} W</span> continuously and handle a{" "}
          <span className="font-mono">{STARTUP_WATTS} W</span> startup surge. A unit in the{" "}
          {sizeLabel} capacity class only clears the first requirement if its inverter ratings also
          meet those two numbers.
        </p>
      </div>
    </div>
  );
}
