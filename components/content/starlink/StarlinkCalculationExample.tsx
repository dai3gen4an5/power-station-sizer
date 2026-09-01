import {
  getDeviceDailyWh,
  getEfficiencyAdjustedWh,
  getRecommendedCapacityWh,
  roundUpToSizeClass,
} from "@/lib/calculator/calculations";
import { DEFAULT_SETTINGS } from "@/lib/calculator/constants";
import { formatWh } from "@/lib/utils/format";

const EXAMPLE_WATTS = 75;
const EXAMPLE_HOURS = 8;

/**
 * A worked example placed right below the calculator, computed with the
 * exact same functions the interactive calculator uses — never a
 * hand-typed number that could drift out of sync with the real math.
 */
export function StarlinkCalculationExample() {
  const dailyWh = getDeviceDailyWh({ watts: EXAMPLE_WATTS, hoursPerDay: EXAMPLE_HOURS, quantity: 1 });
  const efficiencyAdjustedWh = getEfficiencyAdjustedWh(dailyWh, DEFAULT_SETTINGS.inverterEfficiency);
  const recommendedWh = getRecommendedCapacityWh(efficiencyAdjustedWh, DEFAULT_SETTINGS.batteryReserve);
  const sizeClass = roundUpToSizeClass(recommendedWh);
  const sizeLabel = sizeClass ? formatWh(sizeClass) : "5,000 Wh+";

  return (
    <section className="mx-auto max-w-3xl px-4 pb-12 sm:px-6">
      <div className="card card-pad">
        <h2 className="font-display text-lg font-semibold text-ink">How this example adds up</h2>
        <p className="mt-2 font-mono text-lg text-ink">
          {EXAMPLE_WATTS} W × {EXAMPLE_HOURS} hours = {formatWh(dailyWh)}
        </p>
        <p className="mt-3 text-sm text-ink/70">
          That {formatWh(dailyWh)} figure is a raw daily energy estimate for one common usage pattern —
          inverter losses and a battery reserve push the real requirement higher. Using this
          calculator&apos;s defaults ({DEFAULT_SETTINGS.inverterEfficiency}% efficiency,{" "}
          {DEFAULT_SETTINGS.batteryReserve}% reserve), the same day works out to about{" "}
          {formatWh(recommendedWh)}, which rounds up to a {sizeLabel} power station. Your actual Starlink
          wattage and hours of use may differ — check the calculator above with your own numbers.
        </p>
      </div>
    </section>
  );
}
