import {
  calculateSolarPanelSize,
  getAvailablePeakSunHours,
  suggestedPanelWatts,
} from "@/lib/calculator/calculations";
import { DEFAULT_SOLAR_PANEL_SIZE_INPUT } from "@/lib/calculator/constants";
import { formatWh } from "@/lib/utils/format";

const CAPACITY_CLASSES_WH = [500, 1000, 2000];
const FROM_PERCENT = 20;
const TO_PERCENT = 100;

/**
 * Required panel rating to recharge 500 / 1000 / 2000 Wh power stations from
 * 20 to 100% in one day, computed with the shared calculateSolarPanelSize
 * function at this project's default efficiency and peak sun hours.
 */
export function SolarPanelByCapacityExamples() {
  const { rechargeDays, peakSunHoursPerDay, solarEfficiency } = DEFAULT_SOLAR_PANEL_SIZE_INPUT;
  const availablePeakSunHours = getAvailablePeakSunHours(rechargeDays, peakSunHoursPerDay);

  const rows = CAPACITY_CLASSES_WH.map((capacityWh) => {
    const result = calculateSolarPanelSize({
      capacityWh,
      currentPercent: FROM_PERCENT,
      targetPercent: TO_PERCENT,
      availablePeakSunHours,
      solarEfficiency,
    });
    return { capacityWh, ...result, suggestedW: suggestedPanelWatts(result.requiredPanelWatts) };
  });

  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Panel needed for 500Wh, 1000Wh, and 2000Wh power stations
      </h2>
      <p className="mt-3 text-ink/75">
        Recharging from {FROM_PERCENT}% to {TO_PERCENT}% in one {peakSunHoursPerDay}-sun-hour day at{" "}
        {solarEfficiency}% real-world efficiency ({availablePeakSunHours} peak sun hours available).
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
                Required panel (formula)
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                Suggested with margin
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((row) => (
              <tr key={row.capacityWh}>
                <td className="px-4 py-3 font-mono text-ink">
                  {row.capacityWh.toLocaleString("en-US")} Wh
                </td>
                <td className="px-4 py-3 font-mono text-ink">{formatWh(row.chargeEnergyWh)}</td>
                <td className="px-4 py-3 font-mono text-ink">
                  {Math.round(row.requiredPanelWatts)} W
                </td>
                <td className="px-4 py-3 font-mono text-ink">
                  {row.suggestedW.toLocaleString("en-US")} W
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-ink/45">
        Give yourself two days instead of one and each required figure roughly halves. Fewer peak sun
        hours, a lower efficiency, or a bigger charge gap all push it up.
      </p>
    </div>
  );
}
