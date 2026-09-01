import { calculateSolarChargeTime } from "@/lib/calculator/calculations";
import { DEFAULT_SOLAR_CHARGE_INPUT } from "@/lib/calculator/constants";
import { formatDays, formatHours, formatWh } from "@/lib/utils/format";

/**
 * Worked example placed right below the calculator, computed with the exact
 * same function the interactive calculator uses — never a hand-typed number
 * that could drift out of sync with the real math.
 */
export function SolarChargeCalculationExample() {
  const input = DEFAULT_SOLAR_CHARGE_INPUT;
  const { chargeEnergyWh, effectiveSolarInputW, chargeHours, chargeDays } =
    calculateSolarChargeTime(input);

  return (
    <section className="mx-auto max-w-3xl px-4 pb-12 sm:px-6">
      <div className="card card-pad">
        <h2 className="font-display text-lg font-semibold text-ink">How this example adds up</h2>
        <div className="mt-2 space-y-1 font-mono text-sm text-ink sm:text-base">
          <p>
            {formatWh(input.capacityWh)} × ({input.targetPercent}% − {input.currentPercent}%) ={" "}
            {formatWh(chargeEnergyWh)}
          </p>
          <p>
            {input.panelWatts} W × {input.solarEfficiency}% = {Math.round(effectiveSolarInputW)} W
            effective input
          </p>
          <p>
            {formatWh(chargeEnergyWh)} ÷ {Math.round(effectiveSolarInputW)} W ={" "}
            {formatHours(chargeHours)}
          </p>
        </div>
        <p className="mt-3 text-sm text-ink/70">
          Charging a {formatWh(input.capacityWh)} power station from {input.currentPercent}% to{" "}
          {input.targetPercent}% needs about {formatWh(chargeEnergyWh)}. A {input.panelWatts}-watt panel
          working at {input.solarEfficiency}% of its rating supplies roughly{" "}
          {Math.round(effectiveSolarInputW)} watts, so the ideal charge time is about{" "}
          {formatHours(chargeHours)} of strong sun
          {chargeDays !== null ? (
            <>
              {" "}
              — around {formatDays(chargeDays)} at {input.peakSunHoursPerDay} peak sun hours per day
            </>
          ) : null}
          . Real conditions will usually push that longer. Enter your own numbers in the calculator above.
        </p>
      </div>
    </section>
  );
}
