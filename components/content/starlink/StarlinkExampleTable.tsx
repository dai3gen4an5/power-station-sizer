import { getDeviceDailyWh, getRawCapacityWh } from "@/lib/calculator/calculations";
import { formatWh } from "@/lib/utils/format";

interface ExampleRow {
  label: string;
  watts: number;
  hours: number;
}

const EXAMPLE_ROWS: ExampleRow[] = [
  { label: "Light use", watts: 50, hours: 8 },
  { label: "Typical example", watts: 75, hours: 8 },
  { label: "Higher draw example", watts: 100, hours: 8 },
  { label: "Full day (continuous)", watts: 75, hours: 24 },
];

const MULTI_DAY_EXAMPLE = 2;

export function StarlinkExampleTable() {
  const rows = EXAMPLE_ROWS.map((row) => {
    const dailyWh = getDeviceDailyWh({ watts: row.watts, hoursPerDay: row.hours, quantity: 1 });
    const multiDayWh = getRawCapacityWh(dailyWh, MULTI_DAY_EXAMPLE);
    return { ...row, dailyWh, multiDayWh };
  });

  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Example Starlink energy requirements
      </h2>
      <p className="mt-3 text-ink/75">
        These figures haven&apos;t been adjusted for inverter efficiency or battery reserve yet — use the
        calculator above for a number tailored to your actual hardware and usage pattern.
      </p>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <thead className="bg-paper">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                Scenario
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                Power draw
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                Hours/day
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                Daily use
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                ~2 days (before adjustments)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((row) => (
              <tr key={row.label}>
                <td className="px-4 py-3 text-ink">{row.label}</td>
                <td className="px-4 py-3 font-mono text-ink">{row.watts} W</td>
                <td className="px-4 py-3 font-mono text-ink">{row.hours} h</td>
                <td className="px-4 py-3 font-mono text-ink">{formatWh(row.dailyWh)}</td>
                <td className="px-4 py-3 font-mono text-ink">{formatWh(row.multiDayWh)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-ink/45">
        Example values only. Actual Starlink consumption varies by hardware, weather, usage, temperature,
        and power setup.
      </p>
    </div>
  );
}
