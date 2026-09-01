import { calculateSolarChargeTime } from "@/lib/calculator/calculations";
import { DEFAULT_SOLAR_CHARGE_INPUT } from "@/lib/calculator/constants";
import { formatHours, formatWh } from "@/lib/utils/format";

/**
 * Compares a full 0 to 100% charge against a partial 20 to 80% charge for the
 * default capacity and panel, using the shared calculation so the two figures
 * stay consistent with the calculator above.
 */
export function SolarPartialCharge() {
  const { capacityWh, panelWatts, solarEfficiency } = DEFAULT_SOLAR_CHARGE_INPUT;

  const full = calculateSolarChargeTime({
    capacityWh,
    currentPercent: 0,
    targetPercent: 100,
    panelWatts,
    solarEfficiency,
  });
  const partial = calculateSolarChargeTime({
    capacityWh,
    currentPercent: 20,
    targetPercent: 80,
    panelWatts,
    solarEfficiency,
  });

  return (
    <div>
      <h2 className="h2">
        Full charge vs. partial charge (0–100% vs. 20–80%)
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          A partial charge moves less energy, so it finishes sooner. For a {formatWh(capacityWh)} power
          station on a {panelWatts} W panel at {solarEfficiency}% efficiency, a full 0 to 100% charge
          needs {formatWh(full.chargeEnergyWh)} and about {formatHours(full.chargeHours)} of ideal sun,
          while a 20 to 80% top-up needs only {formatWh(partial.chargeEnergyWh)} and about{" "}
          {formatHours(partial.chargeHours)}.
        </p>
        <p>
          There&apos;s a second effect the linear formula doesn&apos;t capture. Many batteries slow
          their charge rate in the last 10 to 20% as the management system switches from constant
          current to constant voltage, so the stretch from 80 to 100% can take longer than a same-sized
          band lower down. Stopping around 80 to 90% often gives you more usable energy per hour of sun,
          and routinely leaving a little headroom rather than sitting at 100% is generally easier on the
          battery.
        </p>
      </div>
    </div>
  );
}
