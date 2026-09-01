import { estimateRuntimeHours, getDeviceDailyWh } from "@/lib/calculator/calculations";
import { DEFAULT_SETTINGS } from "@/lib/calculator/constants";
import { formatHours, formatWh } from "@/lib/utils/format";

const EXAMPLE_CAPACITY_WH = 1000;
const EXAMPLE_WATTS = 60;

/**
 * A worked runtime example placed right below the calculator, computed with the
 * exact same functions the interactive runtime estimator uses — never a
 * hand-typed number that could drift out of sync with the real math.
 */
export function RuntimeCalculationExample() {
  const simpleHours = EXAMPLE_CAPACITY_WH / EXAMPLE_WATTS;
  const continuousDailyWh = getDeviceDailyWh({ watts: EXAMPLE_WATTS, hoursPerDay: 24, quantity: 1 });
  const realHours = estimateRuntimeHours(
    EXAMPLE_CAPACITY_WH,
    continuousDailyWh,
    DEFAULT_SETTINGS.inverterEfficiency,
    DEFAULT_SETTINGS.batteryReserve
  );

  return (
    <section className="mx-auto max-w-3xl px-4 pb-12 sm:px-6">
      <div className="card card-pad">
        <h2 className="font-display text-lg font-semibold text-ink">How this example adds up</h2>
        <p className="mt-2 font-mono text-lg text-ink">
          {formatWh(EXAMPLE_CAPACITY_WH)} ÷ {EXAMPLE_WATTS} W = {formatHours(simpleHours)}
        </p>
        <p className="mt-3 text-sm text-ink/70">
          That {formatHours(simpleHours)} figure is the simple formula: battery capacity divided by
          device wattage. It assumes every stored watt-hour reaches the device, which never quite
          happens. Applying this calculator&apos;s defaults ({DEFAULT_SETTINGS.inverterEfficiency}%
          inverter efficiency and a {DEFAULT_SETTINGS.batteryReserve}% reserve left unused), the same{" "}
          {formatWh(EXAMPLE_CAPACITY_WH)} power station running a steady {EXAMPLE_WATTS}-watt load works
          out to about {formatHours(realHours)}. Enter your own capacity, wattage, efficiency, and
          reserve in the calculator above for a number matched to your setup.
        </p>
      </div>
    </section>
  );
}
