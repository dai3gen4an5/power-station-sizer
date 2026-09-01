import { calculateSolarPanelSize, getAvailablePeakSunHours, suggestedPanelWatts } from "@/lib/calculator/calculations";
import { DEFAULT_SOLAR_PANEL_SIZE_INPUT } from "@/lib/calculator/constants";
import { formatWh } from "@/lib/utils/format";

/**
 * Worked example placed right below the calculator, computed with the exact
 * same functions the interactive calculator uses — never a hand-typed number
 * that could drift out of sync with the real math.
 */
export function SolarPanelSizeCalculationExample() {
  const d = DEFAULT_SOLAR_PANEL_SIZE_INPUT;
  const availablePeakSunHours = getAvailablePeakSunHours(d.rechargeDays, d.peakSunHoursPerDay);
  const { chargeEnergyWh, requiredSolarInputW, requiredPanelWatts } = calculateSolarPanelSize({
    capacityWh: d.capacityWh,
    currentPercent: d.currentPercent,
    targetPercent: d.targetPercent,
    availablePeakSunHours,
    solarEfficiency: d.solarEfficiency,
  });
  const suggestedW = suggestedPanelWatts(requiredPanelWatts);

  return (
    <section className="mx-auto max-w-3xl px-4 pb-12 sm:px-6">
      <div className="card card-pad">
        <h2 className="font-display text-lg font-semibold text-ink">How this example adds up</h2>
        <div className="mt-2 space-y-1 font-mono text-sm text-ink sm:text-base">
          <p>
            {formatWh(d.capacityWh)} × ({d.targetPercent}% − {d.currentPercent}%) ={" "}
            {formatWh(chargeEnergyWh)}
          </p>
          <p>
            {d.rechargeDays} day × {d.peakSunHoursPerDay} sun-hours = {availablePeakSunHours} peak sun
            hours
          </p>
          <p>
            {formatWh(chargeEnergyWh)} ÷ {availablePeakSunHours} h = {Math.round(requiredSolarInputW)} W
            effective input
          </p>
          <p>
            {Math.round(requiredSolarInputW)} W ÷ {d.solarEfficiency}% ≈{" "}
            {Math.round(requiredPanelWatts)} W rated panel
          </p>
        </div>
        <p className="mt-3 text-sm text-ink/70">
          Topping a {formatWh(d.capacityWh)} power station from {d.currentPercent}% to {d.targetPercent}%
          in one {d.peakSunHoursPerDay}-sun-hour day means replacing {formatWh(chargeEnergyWh)} across{" "}
          {availablePeakSunHours} peak sun hours — about {Math.round(requiredSolarInputW)} watts of real
          input. At {d.solarEfficiency}% real-world efficiency that points to a panel rated near{" "}
          {Math.round(requiredPanelWatts)} watts. In practice, aim higher — a {suggestedW} W or larger
          panel leaves margin for cloud, heat, and imperfect aiming. Enter your own numbers in the
          calculator above.
        </p>
      </div>
    </section>
  );
}
