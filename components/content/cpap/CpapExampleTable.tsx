import { getDeviceDailyWh, getRawCapacityWh } from "@/lib/calculator/calculations";
import { formatWh } from "@/lib/utils/format";

const EXAMPLE_WATTAGES = [40, 60, 80, 100];
const HOURS_PER_NIGHT = 8;
const MULTI_NIGHT_EXAMPLE = 2;

export function CpapExampleTable() {
  const rows = EXAMPLE_WATTAGES.map((watts) => {
    const dailyWh = getDeviceDailyWh({ watts, hoursPerDay: HOURS_PER_NIGHT, quantity: 1 });
    const multiNightWh = getRawCapacityWh(dailyWh, MULTI_NIGHT_EXAMPLE);
    return { watts, dailyWh, multiNightWh };
  });

  return (
    <div>
      <h2 className="h2">Example CPAP battery requirements</h2>
      <p className="mt-3 text-ink/75">
        These figures assume a common 8-hour night and haven&apos;t been adjusted for inverter efficiency
        or battery reserve yet — use the calculator above for a number tailored to your actual settings.
      </p>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[480px] border-collapse text-left text-sm">
          <thead className="bg-paper">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                CPAP power draw
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                Daily use (8 hrs)
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                ~2 nights (before adjustments)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((row) => (
              <tr key={row.watts}>
                <td className="px-4 py-3 font-mono text-ink">{row.watts} W</td>
                <td className="px-4 py-3 font-mono text-ink">{formatWh(row.dailyWh)}</td>
                <td className="px-4 py-3 font-mono text-ink">{formatWh(row.multiNightWh)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-ink/45">
        Example values only. Check your CPAP&apos;s power label or manual for its actual wattage.
      </p>
    </div>
  );
}
