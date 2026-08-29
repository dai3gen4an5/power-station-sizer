import {
  calculateSolarPanelSize,
  getAvailablePeakSunHours,
  suggestedPanelWatts,
} from "@/lib/calculator/calculations";
import { DEFAULT_SOLAR_PANEL_SIZE_INPUT } from "@/lib/calculator/constants";
import { formatWh } from "@/lib/utils/format";

/**
 * One-day vs. two-day recharge for the default battery, computed with the
 * shared function so both figures stay consistent with the calculator above.
 */
export function SolarPanelOneDayVsTwoDay() {
  const { capacityWh, currentPercent, targetPercent, peakSunHoursPerDay, solarEfficiency } =
    DEFAULT_SOLAR_PANEL_SIZE_INPUT;

  const sizeFor = (days: number) => {
    const result = calculateSolarPanelSize({
      capacityWh,
      currentPercent,
      targetPercent,
      availablePeakSunHours: getAvailablePeakSunHours(days, peakSunHoursPerDay),
      solarEfficiency,
    });
    return { ...result, suggestedW: suggestedPanelWatts(result.requiredPanelWatts) };
  };

  const oneDay = sizeFor(1);
  const twoDay = sizeFor(2);

  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        One-day vs. two-day recharge
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          The deadline you set is the biggest lever on panel size. The same{" "}
          {formatWh(oneDay.chargeEnergyWh)} recharge for a {formatWh(capacityWh)} power station (
          {currentPercent}% to {targetPercent}%) needs roughly{" "}
          {Math.round(oneDay.requiredPanelWatts)} W of panel to finish in one{" "}
          {peakSunHoursPerDay}-sun-hour day, but only about {Math.round(twoDay.requiredPanelWatts)} W if
          you can spread it over two days. Doubling the time roughly halves the panel.
        </p>
        <p>
          Allowing more time is often the cheaper, lighter, and less fiddly choice — a smaller panel is
          easier to carry and aim. A tight one-day target makes sense when you genuinely cycle the
          battery hard every day; if you don&apos;t, sizing for a two- or three-day catch-up keeps the
          panel manageable and still recovers from a run of cloudy days.
        </p>
        <p>
          With margin added, that&apos;s about a {oneDay.suggestedW} W panel for the one-day target
          versus roughly {twoDay.suggestedW} W for two days.
        </p>
      </div>
    </div>
  );
}
