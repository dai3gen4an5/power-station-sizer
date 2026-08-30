import { getDeviceDailyWh } from "@/lib/calculator/calculations";
import type { Device } from "@/lib/calculator/types";
import { formatWh } from "@/lib/utils/format";

// Typical RV / camper / van appliance loads. Hours are "hours run in a typical
// day"; the 12V fridge figure is equivalent compressor-on time, not continuous.
const EXAMPLE_DEVICES: Device[] = [
  { id: "rv-fridge", name: "12V RV refrigerator", watts: 45, hoursPerDay: 12, quantity: 1 },
  { id: "rv-lights", name: "LED light bulb", watts: 10, hoursPerDay: 5, quantity: 4 },
  { id: "rv-fan", name: "Roof vent fan", watts: 30, hoursPerDay: 6, quantity: 1 },
  { id: "rv-pump", name: "Water pump", watts: 50, hoursPerDay: 1, quantity: 1 },
  { id: "rv-phones", name: "Phone charging", watts: 8, hoursPerDay: 3, quantity: 2 },
  { id: "rv-laptop", name: "Laptop", watts: 65, hoursPerDay: 4, quantity: 1 },
  { id: "rv-tv", name: "TV (12V)", watts: 40, hoursPerDay: 3, quantity: 1 },
  { id: "rv-cpap", name: "CPAP (no humidifier)", watts: 40, hoursPerDay: 8, quantity: 1 },
  { id: "rv-starlink", name: "Starlink", watts: 75, hoursPerDay: 8, quantity: 1 },
  { id: "rv-coffee", name: "Coffee maker", watts: 1000, hoursPerDay: 0.25, quantity: 1 },
];

export function RvApplianceTable() {
  const rows = EXAMPLE_DEVICES.map((device) => ({
    device,
    dailyWh: getDeviceDailyWh(device),
  }));

  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Typical RV appliance energy use
      </h2>
      <p className="mt-3 text-ink/75">
        Rough daily watt-hours for common RV, camper and van loads, before inverter efficiency and
        battery reserve are applied. Enter your own appliances in the calculator above for a tailored
        number.
      </p>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[520px] border-collapse text-left text-sm">
          <thead className="bg-paper">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                Appliance
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
        Example values only. Actual wattage, duty cycle and startup surge vary by model, temperature,
        battery age and how you camp. The coffee maker row shows why a short burst of a
        high-wattage appliance still needs a power station with enough continuous AC output, not just
        watt-hours.
      </p>
    </div>
  );
}
