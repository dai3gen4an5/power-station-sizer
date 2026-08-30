import {
  getEfficiencyAdjustedWh,
  getRecommendedCapacityWh,
  getTotalDailyWh,
  roundUpToSizeClass,
} from "@/lib/calculator/calculations";
import { DEFAULT_SETTINGS } from "@/lib/calculator/constants";
import type { Device } from "@/lib/calculator/types";
import { formatWh } from "@/lib/utils/format";

// Worked example computed with the same functions the interactive calculator
// uses, so these numbers cannot drift out of sync with the real math.
const EXAMPLE_DEVICES: Device[] = [
  { id: "ex-fridge", name: "12V RV refrigerator", watts: 45, hoursPerDay: 12, quantity: 1 },
  { id: "ex-lights", name: "LED lights", watts: 10, hoursPerDay: 5, quantity: 3 },
  { id: "ex-fan", name: "Roof vent fan", watts: 30, hoursPerDay: 6, quantity: 1 },
  { id: "ex-phones", name: "Phone charging", watts: 8, hoursPerDay: 3, quantity: 2 },
  { id: "ex-laptop", name: "Laptop", watts: 65, hoursPerDay: 4, quantity: 1 },
];

export function RvCalculationExample() {
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
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">Worked calculation example</h2>
      <p className="mt-3 text-ink/75">
        A common dry-camping day: a 12V fridge (45&nbsp;W, ~12 equivalent compressor hours), three
        LED bulbs (10&nbsp;W, 5&nbsp;h), a roof vent fan (30&nbsp;W, 6&nbsp;h), two phones charging
        (8&nbsp;W, 3&nbsp;h) and a laptop (65&nbsp;W, 4&nbsp;h).
      </p>
      <div className="mt-4 rounded-2xl border border-line bg-white p-5 sm:p-6">
        <p className="text-sm text-ink/70">
          Those add up to <span className="font-mono">{formatWh(totalDailyWh)}</span> of energy for
          one day. After {DEFAULT_SETTINGS.inverterEfficiency}% inverter efficiency that is about{" "}
          <span className="font-mono">{formatWh(efficiencyAdjustedWh)}</span>, and keeping a{" "}
          {DEFAULT_SETTINGS.batteryReserve}% reserve brings the recommended minimum to roughly{" "}
          <span className="font-mono">{formatWh(recommendedWh)}</span> &mdash; which rounds up to a{" "}
          {sizeLabel} power station for a single day. A two-day weekend without recharging roughly
          doubles that; adding all-day Starlink pushes it up another 1,000&nbsp;Wh or so per day.
        </p>
      </div>
    </div>
  );
}
