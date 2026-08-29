"use client";

import { useMemo, useState } from "react";
import { calculateSolarChargeTime } from "@/lib/calculator/calculations";
import { DEFAULT_SOLAR_CHARGE_INPUT } from "@/lib/calculator/constants";
import { formatDays, formatHours, formatWh } from "@/lib/utils/format";

const inputClasses =
  "w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
const labelClasses = "mb-1 block text-xs font-medium uppercase tracking-wide text-ink/50";

function clamp(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, value));
}

export function SolarChargeCalculator() {
  const [capacityWh, setCapacityWh] = useState(DEFAULT_SOLAR_CHARGE_INPUT.capacityWh);
  const [currentPercent, setCurrentPercent] = useState(DEFAULT_SOLAR_CHARGE_INPUT.currentPercent);
  const [targetPercent, setTargetPercent] = useState(DEFAULT_SOLAR_CHARGE_INPUT.targetPercent);
  const [panelWatts, setPanelWatts] = useState(DEFAULT_SOLAR_CHARGE_INPUT.panelWatts);
  const [solarEfficiency, setSolarEfficiency] = useState(DEFAULT_SOLAR_CHARGE_INPUT.solarEfficiency);
  const [peakSunHours, setPeakSunHours] = useState(DEFAULT_SOLAR_CHARGE_INPUT.peakSunHoursPerDay ?? 0);

  const results = useMemo(
    () =>
      calculateSolarChargeTime({
        capacityWh,
        currentPercent,
        targetPercent,
        panelWatts,
        solarEfficiency,
        peakSunHoursPerDay: peakSunHours > 0 ? peakSunHours : undefined,
      }),
    [capacityWh, currentPercent, targetPercent, panelWatts, solarEfficiency, peakSunHours]
  );

  const noResult = results.chargeHours <= 0;

  return (
    <section id="calculator" className="mx-auto max-w-5xl px-4 pb-16 pt-2 sm:px-6">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="space-y-6">
          <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
            <h2 className="font-display text-lg font-semibold text-ink">Power station</h2>
            <p className="mt-1 text-sm text-ink/60">
              Enter your unit&apos;s battery capacity and where its charge is now versus where you want it.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <label className="block text-sm">
                <span className={labelClasses}>Capacity</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    inputMode="numeric"
                    min={50}
                    max={20000}
                    step={50}
                    value={capacityWh}
                    onChange={(e) => setCapacityWh(clamp(Number.parseFloat(e.target.value), 50, 20000))}
                    className={inputClasses}
                  />
                  <span className="text-sm text-ink/50">Wh</span>
                </div>
                <span className="mt-1 block text-xs text-ink/45">Rated battery capacity.</span>
              </label>

              <label className="block text-sm">
                <span className={labelClasses}>Current level</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    inputMode="numeric"
                    min={0}
                    max={100}
                    step={5}
                    value={currentPercent}
                    onChange={(e) => setCurrentPercent(clamp(Number.parseFloat(e.target.value), 0, 100))}
                    className={inputClasses}
                  />
                  <span className="text-sm text-ink/50">%</span>
                </div>
                <span className="mt-1 block text-xs text-ink/45">Charge level right now.</span>
              </label>

              <label className="block text-sm">
                <span className={labelClasses}>Target level</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    inputMode="numeric"
                    min={0}
                    max={100}
                    step={5}
                    value={targetPercent}
                    onChange={(e) => setTargetPercent(clamp(Number.parseFloat(e.target.value), 0, 100))}
                    className={inputClasses}
                  />
                  <span className="text-sm text-ink/50">%</span>
                </div>
                <span className="mt-1 block text-xs text-ink/45">Charge level you want to reach.</span>
              </label>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
            <h2 className="font-display text-lg font-semibold text-ink">Solar input</h2>
            <p className="mt-1 text-sm text-ink/60">
              Rated panel power, a real-world derating factor, and optional peak sun hours per day.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <label className="block text-sm">
                <span className={labelClasses}>Panel rated power</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    inputMode="numeric"
                    min={10}
                    max={5000}
                    step={10}
                    value={panelWatts}
                    onChange={(e) => setPanelWatts(clamp(Number.parseFloat(e.target.value), 10, 5000))}
                    className={inputClasses}
                  />
                  <span className="text-sm text-ink/50">W</span>
                </div>
                <span className="mt-1 block text-xs text-ink/45">Combined rating of your panel(s).</span>
              </label>

              <label className="block text-sm">
                <span className={labelClasses}>Real-world efficiency</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    inputMode="numeric"
                    min={10}
                    max={100}
                    step={5}
                    value={solarEfficiency}
                    onChange={(e) => setSolarEfficiency(clamp(Number.parseFloat(e.target.value), 10, 100))}
                    className={inputClasses}
                  />
                  <span className="text-sm text-ink/50">%</span>
                </div>
                <span className="mt-1 block text-xs text-ink/45">
                  Fraction of the rating you actually get. 60 to 80% is common.
                </span>
              </label>

              <label className="block text-sm">
                <span className={labelClasses}>Peak sun hours / day</span>
                <input
                  type="number"
                  inputMode="decimal"
                  min={0}
                  max={12}
                  step={0.5}
                  value={peakSunHours}
                  onChange={(e) => setPeakSunHours(clamp(Number.parseFloat(e.target.value), 0, 12))}
                  className={inputClasses}
                />
                <span className="mt-1 block text-xs text-ink/45">
                  Optional. Set to 0 to skip the day estimate.
                </span>
              </label>
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-6">
          <div className="space-y-4">
            {/* "Device readout" panel, styled after a power station's own LCD screen. */}
            <div className="rounded-[28px] bg-bezel p-2 shadow-sm">
              <div className="flex items-center justify-between px-3 pb-2 pt-1">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
                  Ideal solar charge time
                </span>
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                </div>
              </div>

              <div className="rounded-3xl bg-screen p-6 text-center">
                <p className="font-mono text-4xl font-semibold tracking-tight text-screenInk sm:text-5xl">
                  {noResult ? "—" : formatHours(results.chargeHours)}
                </p>
                <p className="mt-2 text-sm text-screenInk/70">
                  {noResult ? (
                    "Enter a capacity, a charge gap, and a panel rating to see an estimate."
                  ) : results.chargeDays !== null ? (
                    <>
                      About <span className="font-semibold">{formatDays(results.chargeDays)}</span> at{" "}
                      {peakSunHours} peak sun hours per day.
                    </>
                  ) : (
                    "Add peak sun hours per day for a rough day count."
                  )}
                </p>
              </div>

              <div className="px-3 py-4">
                <div className="grid grid-cols-2 gap-3 font-mono text-white">
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-white/45">Energy needed</p>
                    <p className="mt-0.5 text-base">{formatWh(results.chargeEnergyWh)}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-white/45">
                      Effective solar input
                    </p>
                    <p className="mt-0.5 text-base">{Math.round(results.effectiveSolarInputW)} W</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
              <p className="text-sm text-ink/70">
                This is an ideal-conditions estimate. Real charge speed varies with weather, sun angle,
                shade, temperature, cabling, and your power station&apos;s charge controller, and the last
                part of the charge often slows down. Check your unit&apos;s maximum solar input rating and
                supported voltage range before connecting panels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
