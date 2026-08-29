import { calculateSolarChargeTime } from "@/lib/calculator/calculations";
import { DEFAULT_SOLAR_CHARGE_INPUT } from "@/lib/calculator/constants";
import { formatDays, formatHours, formatWh } from "@/lib/utils/format";

const CAPACITY_CLASSES_WH = [500, 1000, 2000];
const FROM_PERCENT = 20;
const TO_PERCENT = 100;

/**
 * Ideal charge time for 500 / 1000 / 2000 Wh power stations (20 to 100%) on a
 * single 200 W panel, computed with the shared calculateSolarChargeTime
 * function and this project's default efficiency / peak sun hours.
 */
export function SolarCapacityChargeExamples() {
  const { panelWatts, solarEfficiency, peakSunHoursPerDay } = DEFAULT_SOLAR_CHARGE_INPUT;

  const rows = CAPACITY_CLASSES_WH.map((capacityWh) => {
    const result = calculateSolarChargeTime({
      capacityWh,
      currentPercent: FROM_PERCENT,
      targetPercent: TO_PERCENT,
      panelWatts,
      solarEfficiency,
      peakSunHoursPerDay,
    });
    return { capacityWh, ...result };
  });

  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        500Wh, 1000Wh, and 2000Wh charge examples
      </h2>
      <p className="mt-3 text-ink/75">
        Charging from {FROM_PERCENT}% to {TO_PERCENT}% with a single {panelWatts} W panel at{" "}
        {solarEfficiency}% real-world efficiency ({Math.round(rows[0].effectiveSolarInputW)} W
        effective). The day column assumes {peakSunHoursPerDay} peak sun hours per day.
      </p>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <thead className="bg-paper">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                Capacity
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                Energy needed
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
              <tr key={row.capacityWh}>
                <td className="px-4 py-3 font-mono text-ink">{row.capacityWh.toLocaleString("en-US")} Wh</td>
                <td className="px-4 py-3 font-mono text-ink">{formatWh(row.chargeEnergyWh)}</td>
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
        Ideal-conditions estimates. Cloud cover, a fixed flat panel, cold or very hot weather, and the
        slower final stage of charging will all extend these times in practice.
      </p>
    </div>
  );
}
