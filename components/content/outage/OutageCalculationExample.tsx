import {
  getEfficiencyAdjustedWh,
  getRecommendedCapacityWh,
  getTotalDailyWh,
  roundUpToSizeClass,
} from "@/lib/calculator/calculations";
import { DEFAULT_SETTINGS } from "@/lib/calculator/constants";
import type { Device } from "@/lib/calculator/types";
import { formatWh } from "@/lib/utils/format";

// A worked example computed with the same functions the interactive calculator
// uses, so the numbers here can never drift out of sync with the real math.
const EXAMPLE_DEVICES: Device[] = [
  { id: "ex-fridge", name: "Refrigerator", watts: 150, hoursPerDay: 8, quantity: 1 },
  { id: "ex-wifi", name: "Wi-Fi router + modem", watts: 12, hoursPerDay: 24, quantity: 1 },
  { id: "ex-lights", name: "LED lights", watts: 10, hoursPerDay: 5, quantity: 4 },
  { id: "ex-phones", name: "Phone charging", watts: 8, hoursPerDay: 3, quantity: 2 },
];

export function OutageCalculationExample() {
  const totalDailyWh = getTotalDailyWh(EXAMPLE_DEVICES);
  const efficiencyAdjustedWh = getEfficiencyAdjustedWh(
    totalDailyWh,
    DEFAULT_SETTINGS.inverterEfficiency
  );
  const recommendedWh = getRecommendedCapacityWh(
    efficiencyAdjustedWh,
    DEFAULT_SETTINGS.batteryReserve
  );
  const sizeClass = roundUpToSizeClass(recommendedWh);
  const sizeLabel = sizeClass ? formatWh(sizeClass) : "5,000 Wh+";

  return (
    <section className="mx-auto max-w-3xl px-4 pb-12 sm:px-6">
      <div className="card card-pad">
        <h2 className="font-display text-lg font-semibold text-ink">How this example adds up</h2>
        <p className="mt-2 text-sm text-ink/70">
          A refrigerator (150&nbsp;W, ~8 equivalent compressor hours), a Wi-Fi router (12&nbsp;W,
          24&nbsp;h), four LED bulbs (10&nbsp;W, 5&nbsp;h) and two phones charging (8&nbsp;W, 3&nbsp;h)
          come to about{" "}
          <span className="font-mono">{formatWh(totalDailyWh)}</span> of energy for a 24-hour outage.
        </p>
        <p className="mt-3 text-sm text-ink/70">
          After {DEFAULT_SETTINGS.inverterEfficiency}% inverter efficiency that is about{" "}
          <span className="font-mono">{formatWh(efficiencyAdjustedWh)}</span>, and keeping a{" "}
          {DEFAULT_SETTINGS.batteryReserve}% reserve brings the recommended minimum to roughly{" "}
          <span className="font-mono">{formatWh(recommendedWh)}</span> &mdash; which rounds up to a{" "}
          {sizeLabel} power station. Doubling the day count for a 48-hour outage roughly doubles the
          capacity you need, unless you can recharge partway through.
        </p>
      </div>
    </section>
  );
}
