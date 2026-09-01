import { getTimedEnergyWh } from "@/lib/calculator/power-output";
import { formatWh } from "@/lib/utils/format";

const WATTAGES = [40, 60, 75, 100, 120, 150];
const HOURS = [2, 4, 8];

export function EbHowManyWh() {
  return (
    <div>
      <h2 className="h2">How many Wh does an electric blanket use?</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Energy use is the active watts multiplied by the hours it runs. The wattages are small, but
          a full night is long, so the totals reach a few hundred watt-hours. These are a planning
          ceiling &mdash; a blanket whose thermostat cycles a lot will use less over the night.
        </p>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[24rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-line text-left text-muted">
              <th className="py-2 pr-4 font-medium">Active watts</th>
              {HOURS.map((h) => (
                <th key={h} className="py-2 pr-4 font-medium">
                  {h} h
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="font-mono text-ink/80">
            {WATTAGES.map((w) => (
              <tr key={w} className="border-b border-line/60">
                <td className="py-2 pr-4 font-semibold text-ink">{w} W</td>
                {HOURS.map((h) => (
                  <td key={h} className="py-2 pr-4">
                    {formatWh(getTimedEnergyWh(w, h * 60))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-ink/75">
        Add roughly 25% for an 85% inverter and a 20% reserve. A 75&nbsp;W blanket for 8 hours is
        600&nbsp;Wh raw, around 882&nbsp;Wh recommended &mdash; a 1,000&nbsp;Wh power station covers
        one night, where a 500&nbsp;Wh unit does not.
      </p>
    </div>
  );
}
