import { getDeviceDailyWh } from "@/lib/calculator/calculations";
import type { Device } from "@/lib/calculator/types";
import { formatWh } from "@/lib/utils/format";

// Typical portable camping gear. Hours are "hours run in a typical day at
// camp"; the fridge / cooler figure is equivalent compressor-on time, not
// continuous running.
const EXAMPLE_DEVICES: Device[] = [
  { id: "cmp-fridge", name: "Portable fridge / cooler", watts: 45, hoursPerDay: 10, quantity: 1 },
  { id: "cmp-light", name: "LED camp light", watts: 5, hoursPerDay: 5, quantity: 2 },
  { id: "cmp-fan", name: "Portable fan", watts: 5, hoursPerDay: 6, quantity: 1 },
  { id: "cmp-phone", name: "Phone charging", watts: 8, hoursPerDay: 3, quantity: 2 },
  { id: "cmp-laptop", name: "Laptop", watts: 65, hoursPerDay: 3, quantity: 1 },
  { id: "cmp-camera", name: "Camera battery charging", watts: 25, hoursPerDay: 1.5, quantity: 1 },
  { id: "cmp-drone", name: "Drone battery charging", watts: 60, hoursPerDay: 1.5, quantity: 1 },
  { id: "cmp-cpap", name: "CPAP (no humidifier)", watts: 40, hoursPerDay: 8, quantity: 1 },
  { id: "cmp-starlink", name: "Starlink", watts: 75, hoursPerDay: 8, quantity: 1 },
  { id: "cmp-blanket", name: "Electric blanket", watts: 55, hoursPerDay: 4, quantity: 1 },
];

export function CampingGearTable() {
  const rows = EXAMPLE_DEVICES.map((device) => ({
    device,
    dailyWh: getDeviceDailyWh(device),
  }));

  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">Typical camping gear energy use</h2>
      <p className="mt-3 text-ink/75">
        Rough daily watt-hours for common camping items, before inverter efficiency and battery
        reserve are applied. Enter your own gear in the calculator above for a tailored number.
      </p>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[520px] border-collapse text-left text-sm">
          <thead className="bg-paper">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                Item
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                Watts
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                Hours/day
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
        Example values only. Actual wattage, duty cycle and battery-charger draw vary by model,
        temperature and usage &mdash; check each item&apos;s label or measure it with a watt meter.
      </p>
    </div>
  );
}
