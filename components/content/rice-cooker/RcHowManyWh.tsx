import { getTimedEnergyWh } from "@/lib/calculator/power-output";
import { formatWh } from "@/lib/utils/format";

const WATTAGES = [200, 300, 500, 700, 1000];
const MINUTES = [20, 30, 45];

export function RcHowManyWh() {
  return (
    <div>
      <h2 className="h2">How many Wh does a rice cooker use?</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Cook-cycle energy is the input watts multiplied by the fraction of an hour the element
          runs. A rice cooker holds a high draw through the heat-up and boil, then tapers off, so the
          figures below are a planning ceiling for the cook cycle, before any keep-warm time.
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
        Add roughly 25% for an 85% inverter and a 20% reserve. A 700&nbsp;W rice cooker for a
        45-minute cycle is 525&nbsp;Wh raw, around 772&nbsp;Wh recommended &mdash; a 1,000&nbsp;Wh
        power station holds that with room for a keep-warm hour or two.
      </p>
    </div>
  );
}
