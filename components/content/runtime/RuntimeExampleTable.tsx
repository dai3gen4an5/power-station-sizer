import { estimateRuntimeHours, getDeviceDailyWh } from "@/lib/calculator/calculations";
import { DEFAULT_SETTINGS } from "@/lib/calculator/constants";
import { formatHours } from "@/lib/utils/format";

interface ExampleDevice {
  label: string;
  watts: number;
}

const EXAMPLE_DEVICES: ExampleDevice[] = [
  { label: "Wi-Fi router + modem", watts: 12 },
  { label: "CPAP machine (no humidifier)", watts: 40 },
  { label: "Portable 12V fridge / freezer", watts: 45 },
  { label: "Mini fridge (average draw)", watts: 55 },
  { label: "Laptop", watts: 65 },
  { label: "55-inch LED TV", watts: 90 },
];

const CAPACITIES_WH = [500, 1000, 2000];

/**
 * Estimated continuous runtime for each example device at three common power
 * station sizes, computed with the same estimateRuntimeHours function the
 * interactive calculator uses and this project's default efficiency/reserve.
 */
export function RuntimeExampleTable() {
  const rows = EXAMPLE_DEVICES.map((device) => {
    const continuousDailyWh = getDeviceDailyWh({ watts: device.watts, hoursPerDay: 24, quantity: 1 });
    const runtimes = CAPACITIES_WH.map((capacity) =>
      estimateRuntimeHours(
        capacity,
        continuousDailyWh,
        DEFAULT_SETTINGS.inverterEfficiency,
        DEFAULT_SETTINGS.batteryReserve
      )
    );
    return { ...device, runtimes };
  });

  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        How long a power station runs common devices
      </h2>
      <p className="mt-3 text-ink/75">
        Estimated continuous runtime at this calculator&apos;s defaults (
        {DEFAULT_SETTINGS.inverterEfficiency}% inverter efficiency, {DEFAULT_SETTINGS.batteryReserve}%
        reserve). Devices that cycle on and off, like refrigerators, will run longer in practice than a
        steady-draw estimate suggests.
      </p>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <thead className="bg-paper">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                Device
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                Power draw
              </th>
              {CAPACITIES_WH.map((capacity) => (
                <th key={capacity} scope="col" className="px-4 py-3 font-medium text-ink/60">
                  {capacity.toLocaleString("en-US")} Wh
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((row) => (
              <tr key={row.label}>
                <td className="px-4 py-3 text-ink">{row.label}</td>
                <td className="px-4 py-3 font-mono text-ink">{row.watts} W</td>
                {row.runtimes.map((hours, i) => (
                  <td key={CAPACITIES_WH[i]} className="px-4 py-3 font-mono text-ink">
                    {formatHours(hours)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-ink/45">
        Example wattages only. Actual power draw varies by brand, model, and settings — measure your own
        device with a plug-in watt meter for the most accurate estimate.
      </p>
    </div>
  );
}
