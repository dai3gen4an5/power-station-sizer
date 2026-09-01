import { getDeviceDailyWh } from "@/lib/calculator/calculations";
import type { Device } from "@/lib/calculator/types";
import { formatWh } from "@/lib/utils/format";

// Example outage-essential loads. Hours are "hours run during a 24-hour outage";
// the refrigerator figure is equivalent compressor-on time, not continuous.
const EXAMPLE_DEVICES: Device[] = [
  { id: "row-fridge", name: "Refrigerator", watts: 150, hoursPerDay: 8, quantity: 1 },
  { id: "row-freezer", name: "Chest freezer", watts: 120, hoursPerDay: 8, quantity: 1 },
  { id: "row-wifi", name: "Wi-Fi router + modem", watts: 12, hoursPerDay: 24, quantity: 1 },
  { id: "row-lights", name: "LED light bulb", watts: 10, hoursPerDay: 5, quantity: 4 },
  { id: "row-phones", name: "Phone charging", watts: 8, hoursPerDay: 3, quantity: 2 },
  { id: "row-laptop", name: "Laptop", watts: 65, hoursPerDay: 4, quantity: 1 },
  { id: "row-tv", name: "TV", watts: 100, hoursPerDay: 4, quantity: 1 },
  { id: "row-fan", name: "Box fan", watts: 40, hoursPerDay: 8, quantity: 1 },
  { id: "row-cpap", name: "CPAP (no humidifier)", watts: 40, hoursPerDay: 8, quantity: 1 },
];

export function OutageExampleTable() {
  const rows = EXAMPLE_DEVICES.map((device) => ({
    device,
    dailyWh: getDeviceDailyWh(device),
  }));

  return (
    <div>
      <h2 className="h2">
        Example energy use for common outage essentials
      </h2>
      <p className="mt-3 text-ink/75">
        Rough daily watt-hours for a 24-hour outage, before inverter efficiency and battery reserve
        are applied. Enter your own devices in the calculator above for a tailored number.
      </p>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[520px] border-collapse text-left text-sm">
          <thead className="bg-paper">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                Device
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                Watts
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                Hours (outage)
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                Qty
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                Daily energy
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map(({ device, dailyWh }) => (
              <tr key={device.id}>
                <td className="px-4 py-3 text-ink">{device.name}</td>
                <td className="px-4 py-3 font-mono text-ink">{device.watts} W</td>
                <td className="px-4 py-3 font-mono text-ink">{device.hoursPerDay}</td>
                <td className="px-4 py-3 font-mono text-ink">{device.quantity}</td>
                <td className="px-4 py-3 font-mono text-ink">{formatWh(dailyWh)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-ink/45">
        Example values only. Actual wattage, duty cycle and startup surge vary by model, temperature,
        age and usage.
      </p>
    </div>
  );
}
