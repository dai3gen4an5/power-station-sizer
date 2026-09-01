import { getTimedEnergyWh } from "@/lib/calculator/power-output";
import { formatWh } from "@/lib/utils/format";

const WATTAGES = [1000, 1200, 1500, 1700, 1800];
const MINUTES = [10, 20, 30];

export function ToHowManyWh() {
  return (
    <div>
      <h2 className="h2">How many Wh does a toaster oven use?</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Energy use is the input watts multiplied by the fraction of an hour the oven runs. A
          toaster oven holds a high draw for the whole preheat and much of the bake, so the
          watt-hour totals add up quickly &mdash; more than a microwave, and comparable to an air
          fryer.
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
        Add roughly 25% for an 85% inverter and a 20% reserve, and add preheat and extra batches to
        the minutes. A 1,500&nbsp;W toaster oven for a 30-minute cook is 750&nbsp;Wh raw, around
        1,103&nbsp;Wh recommended &mdash; a larger power station holds that, but the continuous
        output rating is still what decides whether it runs.
      </p>
    </div>
  );
}
