import { getEfficiencyAdjustedWh, getRecommendedCapacityWh, roundUpToSizeClass } from "@/lib/calculator/calculations";
import { DEFAULT_SETTINGS } from "@/lib/calculator/constants";
import { formatWh } from "@/lib/utils/format";

const EXAMPLE_DAILY_WH = 320; // 40 W x 8 hours, matching the calculation example above the fold

export function CpapBatterySizing() {
  const efficiencyAdjustedWh = getEfficiencyAdjustedWh(EXAMPLE_DAILY_WH, DEFAULT_SETTINGS.inverterEfficiency);
  const recommendedWh = getRecommendedCapacityWh(efficiencyAdjustedWh, DEFAULT_SETTINGS.batteryReserve);
  const sizeClass = roundUpToSizeClass(recommendedWh);
  const sizeLabel = sizeClass ? formatWh(sizeClass) : "5,000 Wh+";

  return (
    <div>
      <h2 className="h2">How to calculate CPAP battery size</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          The underlying math is simple: watts × hours = watt-hours. A 40-watt CPAP running for 8 hours
          uses {formatWh(EXAMPLE_DAILY_WH)} in a night. From there, two adjustments make the real-world
          number larger. First, most power stations convert stored DC energy to AC through an inverter
          that isn&apos;t perfectly efficient — typically 80 to 90% — so some energy is lost as heat.
          Second, it&apos;s worth keeping a reserve (commonly 20%) unused, both to protect the
          battery&apos;s lifespan and to leave a buffer if a trip or outage runs longer than planned.
        </p>
        <p>
          Applying both adjustments to that {formatWh(EXAMPLE_DAILY_WH)} figure with this calculator&apos;s
          defaults ({DEFAULT_SETTINGS.inverterEfficiency}% efficiency, {DEFAULT_SETTINGS.batteryReserve}%
          reserve) recommends about {formatWh(recommendedWh)} — which in practice rounds up to a{" "}
          {sizeLabel} power station.
        </p>
      </div>
    </div>
  );
}
