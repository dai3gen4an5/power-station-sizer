import Link from "next/link";
import { calculateSolarChargeTime } from "@/lib/calculator/calculations";
import { DEFAULT_SOLAR_CHARGE_INPUT, SOLAR_PANEL_CLASSES_W } from "@/lib/calculator/constants";
import { formatDays, formatHours, formatWh } from "@/lib/utils/format";

const EXAMPLE_CAPACITY_WH = 1000;
const FROM_PERCENT = 20;
const TO_PERCENT = 100;

/**
 * Ideal charge time for a 1,000 Wh power station (20 to 100%) on three common
 * panel sizes, computed with the same calculateSolarChargeTime function the
 * interactive calculator uses and this project's default efficiency / peak
 * sun hours.
 */
export function SolarPanelSizeExamples() {
  const { solarEfficiency, peakSunHoursPerDay } = DEFAULT_SOLAR_CHARGE_INPUT;

  const rows = SOLAR_PANEL_CLASSES_W.map((panelWatts) => {
    const result = calculateSolarChargeTime({
      capacityWh: EXAMPLE_CAPACITY_WH,
      currentPercent: FROM_PERCENT,
      targetPercent: TO_PERCENT,
      panelWatts,
      solarEfficiency,
      peakSunHoursPerDay,
    });
    return { panelWatts, ...result };
  });

  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        100W, 200W, and 400W panel examples
      </h2>
      <p className="mt-3 text-ink/75">
        Charging a {formatWh(EXAMPLE_CAPACITY_WH)} power station from {FROM_PERCENT}% to {TO_PERCENT}% (
        {formatWh(rows[0].chargeEnergyWh)}) at {solarEfficiency}% real-world efficiency. The day column
        assumes {peakSunHoursPerDay} peak sun hours per day. If you have a recharge deadline in mind and
        want the panel wattage that meets it, the{" "}
        <Link href="/solar-panel-size-calculator" className="font-medium text-brand hover:underline">
          Solar Panel Size Calculator
        </Link>{" "}
        solves this table in reverse.
      </p>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <thead className="bg-paper">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                Panel rating
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                Effective input
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                Ideal charge time
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                ≈ Days at {peakSunHoursPerDay} sun-hours
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((row) => (
              <tr key={row.panelWatts}>
                <td className="px-4 py-3 font-mono text-ink">{row.panelWatts} W</td>
                <td className="px-4 py-3 font-mono text-ink">
                  {Math.round(row.effectiveSolarInputW)} W
                </td>
                <td className="px-4 py-3 font-mono text-ink">{formatHours(row.chargeHours)}</td>
                <td className="px-4 py-3 font-mono text-ink">
                  {row.chargeDays !== null ? formatDays(row.chargeDays) : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-ink/45">
        Ideal-conditions estimates. A bigger panel shortens charge time only up to your power
        station&apos;s maximum solar input — beyond that limit the extra wattage is not used.
      </p>
    </div>
  );
}
