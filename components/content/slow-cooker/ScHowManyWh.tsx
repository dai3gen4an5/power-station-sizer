import { getTimedEnergyWh } from "@/lib/calculator/power-output";
import { formatWh } from "@/lib/utils/format";

const WATTAGES = [100, 150, 200, 250, 300, 400];
const HOURS = [2, 4, 6, 8];

export function ScHowManyWh() {
  return (
    <div>
      <h2 className="h2">How many Wh does a slow cooker use?</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Energy use is the input watts multiplied by the hours it runs. The wattages are small, but
          the hours are long, so the totals land squarely in large-power-station territory. These
          figures are a planning ceiling &mdash; a cooker with heavy thermostat cycling may use less.
        </p>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[24rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-line text-left text-muted">
              <th className="py-2 pr-4 font-medium">Input watts</th>
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
                <td className="py-2 pr-4 font-semibold text-ink">{w.toLocaleString("en-US")} W</td>
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
        Add roughly 25% for an 85% inverter and a 20% reserve. A 250&nbsp;W slow cooker for 6 hours
        is 1,500&nbsp;Wh raw, around 2,206&nbsp;Wh recommended &mdash; a 3,000&nbsp;Wh-class power
        station, sized entirely by the runtime.
      </p>
    </div>
  );
}
