import { getTimedEnergyWh } from "@/lib/calculator/power-output";
import { formatWh } from "@/lib/utils/format";

const WATTAGES = [800, 1200, 1500, 1800, 1875];
const MINUTES = [5, 10, 15];

export function HdHowManyWh() {
  return (
    <div>
      <h2 className="h2">How many Wh does a hair dryer use?</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Energy use is the input watts multiplied by the fraction of an hour the dryer runs.
          Because a dry is measured in minutes, the watt-hour total stays small even at high
          wattage.
        </p>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[24rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-line text-left text-muted">
              <th className="py-2 pr-4 font-medium">Input watts</th>
              {MINUTES.map((m) => (
                <th key={m} className="py-2 pr-4 font-medium">
                  {m} min
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="font-mono text-ink/80">
            {WATTAGES.map((w) => (
              <tr key={w} className="border-b border-line/60">
                <td className="py-2 pr-4 font-semibold text-ink">{w.toLocaleString("en-US")} W</td>
                {MINUTES.map((m) => (
                  <td key={m} className="py-2 pr-4">
                    {formatWh(getTimedEnergyWh(w, m))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-ink/75">
        Add roughly 25% for an 85% inverter and a 20% reserve. Even an 1,875&nbsp;W dryer for 15
        minutes is under 600&nbsp;Wh &mdash; a small battery covers it. What decides whether a power
        station works is almost always the continuous output rating, not the watt-hours.
      </p>
    </div>
  );
}
