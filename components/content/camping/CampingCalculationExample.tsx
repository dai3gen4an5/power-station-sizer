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
  { id: "ex-cooler", name: "Portable cooler", watts: 45, hoursPerDay: 10, quantity: 1 },
  { id: "ex-lights", name: "LED camp lights", watts: 5, hoursPerDay: 5, quantity: 2 },
  { id: "ex-fan", name: "Portable fan", watts: 5, hoursPerDay: 6, quantity: 1 },
  { id: "ex-phones", name: "Phone charging", watts: 8, hoursPerDay: 3, quantity: 2 },
  { id: "ex-laptop", name: "Laptop", watts: 65, hoursPerDay: 3, quantity: 1 },
  { id: "ex-camera", name: "Camera battery charge", watts: 25, hoursPerDay: 1.5, quantity: 1 },
];

export function CampingCalculationExample() {
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
      <h2 className="h2">Worked calculation example</h2>
      <p className="mt-3 text-ink/75">
        One night of car camping: a portable cooler (45&nbsp;W, ~10 equivalent compressor hours), two
        LED camp lights (5&nbsp;W, 5&nbsp;h), a small fan (5&nbsp;W, 6&nbsp;h), two phones charging
        (8&nbsp;W, 3&nbsp;h), a laptop (65&nbsp;W, 3&nbsp;h) and one camera battery charge (25&nbsp;W,
        1.5&nbsp;h).
      </p>
      <div className="mt-4 card card-pad">
        <p className="text-sm text-ink/70">
          Those add up to <span className="font-mono">{formatWh(totalDailyWh)}</span> of energy for
          one day. After {DEFAULT_SETTINGS.inverterEfficiency}% inverter efficiency that is about{" "}
          <span className="font-mono">{formatWh(efficiencyAdjustedWh)}</span>, and keeping a{" "}
          {DEFAULT_SETTINGS.batteryReserve}% reserve brings the recommended minimum to roughly{" "}
          <span className="font-mono">{formatWh(recommendedWh)}</span> &mdash; which rounds up to a{" "}
          {sizeLabel} power station for a single night. A two-night weekend without recharging roughly
          doubles that; adding several hours of Starlink each day adds another 1,000&nbsp;Wh or more
          per day.
        </p>
      </div>
    </div>
  );
}
