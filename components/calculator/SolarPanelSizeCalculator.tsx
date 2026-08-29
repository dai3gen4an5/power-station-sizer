"use client";

import { useMemo, useState } from "react";
import {
  calculateSolarPanelSize,
  getAvailablePeakSunHours,
  suggestedPanelWatts,
} from "@/lib/calculator/calculations";
import { DEFAULT_SOLAR_PANEL_SIZE_INPUT } from "@/lib/calculator/constants";
import { formatWh } from "@/lib/utils/format";

const inputClasses =
  "w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
const labelClasses = "mb-1 block text-xs font-medium uppercase tracking-wide text-ink/50";

function clamp(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, value));
}

function formatWatts(value: number): string {
  return `${Math.round(Number.isFinite(value) ? value : 0).toLocaleString("en-US")} W`;
}

type RechargeMode = "days" | "hours";

export function SolarPanelSizeCalculator() {
  const [capacityWh, setCapacityWh] = useState(DEFAULT_SOLAR_PANEL_SIZE_INPUT.capacityWh);
  const [currentPercent, setCurrentPercent] = useState(DEFAULT_SOLAR_PANEL_SIZE_INPUT.currentPercent);
  const [targetPercent, setTargetPercent] = useState(DEFAULT_SOLAR_PANEL_SIZE_INPUT.targetPercent);
  const [mode, setMode] = useState<RechargeMode>("days");
  const [rechargeDays, setRechargeDays] = useState(DEFAULT_SOLAR_PANEL_SIZE_INPUT.rechargeDays);
  const [rechargeHours, setRechargeHours] = useState(
    DEFAULT_SOLAR_PANEL_SIZE_INPUT.rechargeDays * DEFAULT_SOLAR_PANEL_SIZE_INPUT.peakSunHoursPerDay
  );
  const [peakSunHoursPerDay, setPeakSunHoursPerDay] = useState(
    DEFAULT_SOLAR_PANEL_SIZE_INPUT.peakSunHoursPerDay
  );
  const [solarEfficiency, setSolarEfficiency] = useState(
    DEFAULT_SOLAR_PANEL_SIZE_INPUT.solarEfficiency
  );
  const [maxSolarInputW, setMaxSolarInputW] = useState(0);

  const availablePeakSunHours = useMemo(
    () =>
      mode === "days" ? getAvailablePeakSunHours(rechargeDays, peakSunHoursPerDay) : rechargeHours,
    [mode, rechargeDays, peakSunHoursPerDay, rechargeHours]
  );

  const results = useMemo(
    () =>
      calculateSolarPanelSize({
        capacityWh,
        currentPercent,
        targetPercent,
        availablePeakSunHours,
        solarEfficiency,
      }),
    [capacityWh, currentPercent, targetPercent, availablePeakSunHours, solarEfficiency]
  );

  const suggestedW = suggestedPanelWatts(results.requiredPanelWatts);
  const noResult = results.requiredPanelWatts <= 0;
  const overLimit = maxSolarInputW > 0 && results.requiredPanelWatts > maxSolarInputW;

  const modeButton = (value: RechargeMode, label: string) => (
    <button
      type="button"
      onClick={() => setMode(value)}
      aria-pressed={mode === value}
      className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
        mode === value
          ? "border-brand bg-brand/10 text-brand"
          : "border-line bg-white text-ink/70 hover:border-brand hover:text-brand"
      }`}
    >
      {label}
    </button>
  );

  return (
    <section id="calculator" className="mx-auto max-w-5xl px-4 pb-16 pt-2 sm:px-6">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="space-y-6">
          <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
            <h2 className="font-display text-lg font-semibold text-ink">Power station</h2>
            <p className="mt-1 text-sm text-ink/60">
              Battery capacity and how far you need to charge it.
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
            <h2 className="font-display text-lg font-semibold text-ink">Recharge target</h2>
            <p className="mt-1 text-sm text-ink/60">
              How quickly you want the recharge done, plus a real-world derating factor.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className={labelClasses + " mb-0"}>Set the deadline in</span>
              {modeButton("days", "Days")}
              {modeButton("hours", "Peak sun hours")}
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {mode === "days" ? (
                <>
                  <label className="block text-sm">
                    <span className={labelClasses}>Recharge within</span>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        inputMode="decimal"
                        min={0.25}
                        max={30}
                        step={0.25}
                        value={rechargeDays}
                        onChange={(e) =>
                          setRechargeDays(clamp(Number.parseFloat(e.target.value), 0.25, 30))
                        }
                        className={inputClasses}
                      />
                      <span className="text-sm text-ink/50">days</span>
                    </div>
                    <span className="mt-1 block text-xs text-ink/45">Days of sun to finish in.</span>
                  </label>

                  <label className="block text-sm">
                    <span className={labelClasses}>Peak sun hours / day</span>
                    <input
                      type="number"
                      inputMode="decimal"
                      min={0.5}
                      max={12}
                      step={0.5}
                      value={peakSunHoursPerDay}
                      onChange={(e) =>
                        setPeakSunHoursPerDay(clamp(Number.parseFloat(e.target.value), 0.5, 12))
                      }
                      className={inputClasses}
                    />
                    <span className="mt-1 block text-xs text-ink/45">
                      Full-strength sun hours a day, not daylight hours.
                    </span>
                  </label>
                </>
              ) : (
                <label className="block text-sm">
                  <span className={labelClasses}>Recharge within</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      inputMode="decimal"
                      min={0.5}
                      max={200}
                      step={0.5}
                      value={rechargeHours}
                      onChange={(e) =>
                        setRechargeHours(clamp(Number.parseFloat(e.target.value), 0.5, 200))
                      }
                      className={inputClasses}
                    />
                    <span className="text-sm text-ink/50">sun-hours</span>
                  </div>
                  <span className="mt-1 block text-xs text-ink/45">
                    Total peak sun hours to finish in.
                  </span>
                </label>
              )}

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
                <span className={labelClasses}>Max solar input (optional)</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    inputMode="numeric"
                    min={0}
                    max={5000}
                    step={50}
                    value={maxSolarInputW}
                    onChange={(e) => setMaxSolarInputW(clamp(Number.parseFloat(e.target.value), 0, 5000))}
                    className={inputClasses}
                  />
                  <span className="text-sm text-ink/50">W</span>
                </div>
                <span className="mt-1 block text-xs text-ink/45">
                  Your power station&apos;s rated solar input. 0 to skip the check.
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
                  Solar panel needed
                </span>
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                </div>
              </div>

              <div className="rounded-3xl bg-screen p-6 text-center">
                <p className="font-mono text-4xl font-semibold tracking-tight text-screenInk sm:text-5xl">
                  {noResult ? "—" : formatWatts(results.requiredPanelWatts)}
                </p>
                <p className="mt-2 text-sm text-screenInk/70">
                  {noResult ? (
                    "Enter a capacity, a charge gap, and a recharge deadline to see an estimate."
                  ) : (
                    <>
                      Rated panel power. For real-world margin, look for at least{" "}
                      <span className="font-semibold">{formatWatts(suggestedW)}</span>.
                    </>
                  )}
                </p>
              </div>

              <div className="px-3 py-4">
                <div className="grid grid-cols-3 gap-3 font-mono text-white">
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-white/45">Energy needed</p>
                    <p className="mt-0.5 text-sm">{formatWh(results.chargeEnergyWh)}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-white/45">Sun hours</p>
                    <p className="mt-0.5 text-sm">
                      {Math.round(results.availablePeakSunHours * 10) / 10} h
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-white/45">Effective input</p>
                    <p className="mt-0.5 text-sm">{Math.round(results.requiredSolarInputW)} W</p>
                  </div>
                </div>
              </div>
            </div>

            {overLimit ? (
              <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5 sm:p-6">
                <p className="text-sm font-medium text-amber-900">
                  Above your power station&apos;s solar input limit
                </p>
                <p className="mt-1 text-sm text-amber-900/80">
                  This recharge target needs about {formatWatts(results.requiredPanelWatts)} of panel,
                  but you entered a maximum solar input of {formatWatts(maxSolarInputW)}. The unit
                  won&apos;t accept more than its rated input, so extra panel wattage past that limit
                  is wasted. Allow more time, accept a slower or partial charge, add a second charging
                  method the manufacturer supports, or check whether a higher-input model fits your
                  needs. Never feed a power station more than its rated solar input voltage or current.
                </p>
              </div>
            ) : null}

            <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
              <p className="text-sm text-ink/70">
                This is an ideal-conditions estimate. A panel&apos;s rated watts are rarely sustained
                outdoors — weather, sun angle, shade, temperature, cabling, and the charge controller
                all reduce real output, and charging slows near full. Always check your power
                station&apos;s maximum solar input, voltage, current, and connector before choosing
                panels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
