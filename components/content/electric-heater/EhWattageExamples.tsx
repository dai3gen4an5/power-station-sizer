import { getTimedEnergyWh } from "@/lib/calculator/power-output";
import { formatWh } from "@/lib/utils/format";

const WATTAGES = [500, 750, 1000, 1500];
const HOURS = [0.5, 1, 2, 4];

export function EhWattageExamples() {
  return (
    <div>
      <h2 className="h2">
        500&nbsp;W, 750&nbsp;W, 1000&nbsp;W, and 1500&nbsp;W heater examples
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Raw energy is just the input watts multiplied by the hours of use, before inverter
          efficiency and a reserve. Find your heater&apos;s wattage on its label &mdash; do not
          assume it.
        </p>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[26rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-line text-left text-ink/60">
              <th className="py-2 pr-4 font-medium">Heater input</th>
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
      <p className="mt-3 text-sm text-ink/70">
        Add roughly 25% on top for an 85% inverter and a 20% reserve. Even a modest 1,000&nbsp;W
        heater for an evening lands in the multiple-kilowatt-hour range &mdash; and whatever the
        wattage, the power station&apos;s continuous output must meet it.
      </p>
    </div>
  );
}
