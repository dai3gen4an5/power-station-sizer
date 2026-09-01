import { getDeviceDailyWh, getRawCapacityWh } from "@/lib/calculator/calculations";
import { formatWh } from "@/lib/utils/format";

const EXAMPLE_WATTAGES = [80, 120, 150, 200];
const EQUIVALENT_HOURS_PER_DAY = 8;
const MULTI_DAY_EXAMPLE = 2;

export function RefrigeratorExampleTable() {
  const rows = EXAMPLE_WATTAGES.map((watts) => {
    const dailyWh = getDeviceDailyWh({ watts, hoursPerDay: EQUIVALENT_HOURS_PER_DAY, quantity: 1 });
    const multiDayWh = getRawCapacityWh(dailyWh, MULTI_DAY_EXAMPLE);
    return { watts, dailyWh, multiDayWh };
  });

  return (
    <div>
      <h2 className="h2">
        Example refrigerator energy requirements
      </h2>
      <p className="mt-3 text-ink/75">
        These figures assume about 8 equivalent hours of compressor-on time per day and haven&apos;t been
        adjusted for inverter efficiency or battery reserve yet — use the calculator above for a number
        tailored to your actual refrigerator and settings.
      </p>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[480px] border-collapse text-left text-sm">
          <thead className="bg-paper">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                Running watts
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                Daily use (~8 equiv. hrs)
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                ~2 days (before adjustments)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((row) => (
              <tr key={row.watts}>
                <td className="px-4 py-3 font-mono text-ink">{row.watts} W</td>
                <td className="px-4 py-3 font-mono text-ink">{formatWh(row.dailyWh)}</td>
                <td className="px-4 py-3 font-mono text-ink">{formatWh(row.multiDayWh)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-ink/45">
        Example values only. Actual running wattage, duty cycle, and startup surge vary by appliance,
        temperature, age, and usage.
      </p>
    </div>
  );
}
