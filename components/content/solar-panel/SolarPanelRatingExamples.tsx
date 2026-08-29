import { getEffectiveSolarInputW, getSolarHarvestWh } from "@/lib/calculator/calculations";
import { DEFAULT_SOLAR_PANEL_SIZE_INPUT } from "@/lib/calculator/constants";
import { formatWh } from "@/lib/utils/format";

const PANEL_RATINGS_W = [100, 200, 300, 400, 600];

/**
 * Effective input and rough daily harvest for common panel ratings, computed
 * with the shared getEffectiveSolarInputW / getSolarHarvestWh helpers at this
 * project's default efficiency and peak sun hours.
 */
export function SolarPanelRatingExamples() {
  const { solarEfficiency, peakSunHoursPerDay } = DEFAULT_SOLAR_PANEL_SIZE_INPUT;

  const rows = PANEL_RATINGS_W.map((panelWatts) => ({
    panelWatts,
    effectiveW: getEffectiveSolarInputW(panelWatts, solarEfficiency),
    harvestWh: getSolarHarvestWh(panelWatts, solarEfficiency, peakSunHoursPerDay),
  }));

  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        100W, 200W, 300W, 400W, and 600W panel examples
      </h2>
      <p className="mt-3 text-ink/75">
        Effective input and a rough daily harvest at {solarEfficiency}% real-world efficiency and{" "}
        {peakSunHoursPerDay} peak sun hours per day. The harvest column is how much a single good day
        could put back into a battery.
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
                ≈ Harvest per {peakSunHoursPerDay}-sun-hour day
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((row) => (
              <tr key={row.panelWatts}>
                <td className="px-4 py-3 font-mono text-ink">{row.panelWatts} W</td>
                <td className="px-4 py-3 font-mono text-ink">{Math.round(row.effectiveW)} W</td>
                <td className="px-4 py-3 font-mono text-ink">{formatWh(row.harvestWh)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-ink/45">
        Ideal-conditions estimates. Cloud, a fixed flat panel, heat, and the slower final stage of
        charging all reduce a real day&apos;s harvest below these figures.
      </p>
    </div>
  );
}
