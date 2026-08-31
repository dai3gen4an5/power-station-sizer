"use client";

import { useMemo, useState } from "react";
import {
  getEfficiencyAdjustedWh,
  getRecommendedCapacityWh,
  roundUpToSizeClass,
} from "@/lib/calculator/calculations";
import { DEFAULT_SETTINGS } from "@/lib/calculator/constants";
import {
  getCyclingEnergyWh,
  getRequiredContinuousOutputW,
  getRequiredSurgeOutputW,
} from "@/lib/calculator/power-output";
import { selectCapacityClassForResult } from "@/lib/recommendations/selectClass";
import { ProductRecommendations } from "@/components/recommendations/ProductRecommendations";
import { formatWh } from "@/lib/utils/format";

const EXAMPLE = {
  runningWatts: 900,
  startupWatts: 1800,
  minutesPerHour: 40,
  useHours: 8,
  inverterEfficiency: DEFAULT_SETTINGS.inverterEfficiency,
  batteryReserve: DEFAULT_SETTINGS.batteryReserve,
};

const inputClasses =
  "w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
const labelClasses = "mb-1 block text-xs font-medium uppercase tracking-wide text-ink/50";

function parseNumber(value: string): number {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
}
function clamp(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, value));
}

export function AirConditionerCalculator() {
  // Starts on the worked example, but startup watts is left blank so the
  // "verify the surge rating" path is visible by default.
  const [runningWatts, setRunningWatts] = useState<number>(EXAMPLE.runningWatts);
  const [startupWatts, setStartupWatts] = useState<number>(0);
  const [minutesPerHour, setMinutesPerHour] = useState<number>(EXAMPLE.minutesPerHour);
  const [useHours, setUseHours] = useState<number>(EXAMPLE.useHours);
  const [inverterEfficiency, setInverterEfficiency] = useState<number>(EXAMPLE.inverterEfficiency);
  const [batteryReserve, setBatteryReserve] = useState<number>(EXAMPLE.batteryReserve);

  const result = useMemo(() => {
    const rawWh = getCyclingEnergyWh({ runningWatts, minutesPerHour, hours: useHours });
    const minimumBeforeReserveWh = getEfficiencyAdjustedWh(rawWh, inverterEfficiency);
    const recommendedWh = getRecommendedCapacityWh(minimumBeforeReserveWh, batteryReserve);
    const sizeClass = roundUpToSizeClass(recommendedWh);
    const capacityClass = selectCapacityClassForResult({
      recommendedCapacityWh: recommendedWh,
      recommendedSizeClass: sizeClass,
    });
    return {
      rawWh,
      minimumBeforeReserveWh,
      recommendedWh,
      sizeClass,
      capacityLabel: capacityClass?.label ?? null,
      requiredContinuousW: getRequiredContinuousOutputW(runningWatts),
      requiredSurgeW: getRequiredSurgeOutputW(startupWatts),
    };
  }, [runningWatts, startupWatts, minutesPerHour, useHours, inverterEfficiency, batteryReserve]);

  const hasRunning = result.requiredContinuousW > 0;
  const surgeKnown = result.requiredSurgeW > 0;

  function loadExample() {
    setRunningWatts(EXAMPLE.runningWatts);
    setStartupWatts(EXAMPLE.startupWatts);
    setMinutesPerHour(EXAMPLE.minutesPerHour);
    setUseHours(EXAMPLE.useHours);
    setInverterEfficiency(EXAMPLE.inverterEfficiency);
    setBatteryReserve(EXAMPLE.batteryReserve);
  }

  const sizeLabel = result.sizeClass !== null ? formatWh(result.sizeClass) : "5,000 Wh+";

  return (
    <>
      <section id="calculator" className="mx-auto max-w-5xl px-4 pb-8 pt-2 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          {/* ---- INPUTS ---- */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
              <h2 className="font-display text-lg font-semibold text-ink">Your air conditioner</h2>
              <p className="mt-1 text-sm text-ink/60">
                Enter the numbers from the unit&apos;s nameplate, manual, or manufacturer spec sheet
                &mdash; not from its BTU rating.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className={labelClasses}>Running watts</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0}
                    step={10}
                    value={runningWatts || ""}
                    placeholder="e.g. 900"
                    aria-label="Air conditioner running watts"
                    onChange={(e) => setRunningWatts(Math.max(0, parseNumber(e.target.value)))}
                    className={inputClasses}
                  />
                  <span className="mt-1 block text-xs text-ink/45">
                    Steady power the unit draws while cooling. Required.
                  </span>
                </label>

                <label className="block text-sm">
                  <span className={labelClasses}>Startup / surge watts</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0}
                    step={10}
                    value={startupWatts || ""}
                    placeholder="from the spec sheet"
                    aria-label="Air conditioner startup or surge watts"
                    onChange={(e) => setStartupWatts(Math.max(0, parseNumber(e.target.value)))}
                    className={inputClasses}
                  />
                  <span className="mt-1 block text-xs text-ink/45">
                    Spike when the compressor starts. Optional but strongly recommended &mdash; leave
                    blank if you don&apos;t have it yet.
                  </span>
                </label>
              </div>

              <div className="mt-5 border-t border-line pt-5">
                <p className="text-xs font-medium uppercase tracking-wide text-ink/50">
                  Compressor run time
                </p>
                <div className="mt-3 grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm">
                    <span className={labelClasses}>Minutes per hour</span>
                    <input
                      type="number"
                      inputMode="decimal"
                      min={0}
                      max={60}
                      step={1}
                      value={minutesPerHour}
                      aria-label="Minutes the compressor runs per hour"
                      onChange={(e) => setMinutesPerHour(clamp(parseNumber(e.target.value), 0, 60))}
                      className={inputClasses}
                    />
                    <span className="mt-1 block text-xs text-ink/45">
                      How many minutes of each hour the compressor actually runs. Higher on hot days
                      and with a lower thermostat setpoint.
                    </span>
                  </label>

                  <label className="block text-sm">
                    <span className={labelClasses}>Use duration (hours)</span>
                    <input
                      type="number"
                      inputMode="decimal"
                      min={0}
                      max={168}
                      step={1}
                      value={useHours}
                      aria-label="How many hours you want to run the air conditioner"
                      onChange={(e) => setUseHours(clamp(parseNumber(e.target.value), 0, 168))}
                      className={inputClasses}
                    />
                    <span className="mt-1 block text-xs text-ink/45">
                      How long you want the backup to last.
                    </span>
                  </label>
                </div>
              </div>

              <div className="mt-5 border-t border-line pt-5">
                <p className="text-xs font-medium uppercase tracking-wide text-ink/50">
                  Backup settings
                </p>
                <div className="mt-3 grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm">
                    <span className={labelClasses}>Inverter efficiency</span>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        inputMode="numeric"
                        min={50}
                        max={100}
                        step={1}
                        value={inverterEfficiency}
                        aria-label="Inverter efficiency percent"
                        onChange={(e) =>
                          setInverterEfficiency(clamp(parseNumber(e.target.value), 50, 100))
                        }
                        className={inputClasses}
                      />
                      <span className="text-sm text-ink/50">%</span>
                    </div>
                    <span className="mt-1 block text-xs text-ink/45">
                      Energy lost converting battery power to AC.
                    </span>
                  </label>

                  <label className="block text-sm">
                    <span className={labelClasses}>Battery reserve</span>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        inputMode="numeric"
                        min={0}
                        max={50}
                        step={5}
                        value={batteryReserve}
                        aria-label="Battery reserve percent"
                        onChange={(e) => setBatteryReserve(clamp(parseNumber(e.target.value), 0, 50))}
                        className={inputClasses}
                      />
                      <span className="text-sm text-ink/50">%</span>
                    </div>
                    <span className="mt-1 block text-xs text-ink/45">
                      Buffer left unused to protect battery life.
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="button"
                onClick={loadExample}
                className="mt-5 inline-flex items-center gap-2 rounded-lg border border-dashed border-ink/25 px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Load example
              </button>
              <p className="mt-2 text-xs text-ink/45">
                Example only &mdash; running watts 900, startup watts 1,800, compressor 40
                minutes/hour, 8 hours of use. Replace every field with your unit&apos;s actual
                specifications; these are not derived from a BTU rating.
              </p>
            </div>
          </div>

          {/* ---- RESULTS ---- */}
          <div className="space-y-4 lg:sticky lg:top-6">
            <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
              <h2 className="font-display text-base font-semibold text-ink">
                Battery capacity you need
              </h2>
              {hasRunning ? (
                <>
                  <p className="mt-2 font-mono text-3xl font-semibold text-ink sm:text-4xl">
                    {formatWh(result.recommendedWh)}
                  </p>
                  <p className="mt-1 text-sm text-ink/60">
                    Recommended battery capacity after inverter efficiency and reserve. Look for a
                    power station around{" "}
                    <span className="font-semibold text-ink">{sizeLabel}</span>
                    {result.capacityLabel ? (
                      <>
                        {" "}
                        &mdash; the{" "}
                        <span className="font-semibold text-ink">{result.capacityLabel}</span> class.
                      </>
                    ) : (
                      "."
                    )}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl bg-paper p-4">
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-wide text-ink/50">
                        Estimated AC energy use
                      </p>
                      <p className="mt-0.5 font-mono text-base text-ink">{formatWh(result.rawWh)}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-wide text-ink/50">
                        Minimum before reserve
                      </p>
                      <p className="mt-0.5 font-mono text-base text-ink">
                        {formatWh(result.minimumBeforeReserveWh)}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <p className="mt-2 text-sm text-ink/60">
                  Enter your air conditioner&apos;s running watts to calculate the battery capacity,
                  energy use, and required output.
                </p>
              )}
              <p className="mt-3 text-xs leading-relaxed text-ink/55">
                This is a planning estimate, not a guaranteed runtime. Air conditioner energy use
                changes with outdoor temperature, thermostat setpoint, humidity, insulation, room
                size, and how the compressor cycles.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
              <h2 className="font-display text-base font-semibold text-ink">
                Inverter output your power station must have
              </h2>
              <p className="mt-1 text-sm text-ink/60">
                This is separate from battery capacity. A power station needs both.
              </p>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="text-ink/70">Required continuous AC output</dt>
                  <dd className="font-mono font-semibold text-ink">
                    {hasRunning ? `${Math.round(result.requiredContinuousW)} W` : "—"}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="text-ink/70">Required startup / surge capability</dt>
                  <dd className="font-mono font-semibold text-ink">
                    {surgeKnown ? `${Math.round(result.requiredSurgeW)} W` : "Unknown"}
                  </dd>
                </div>
              </dl>
              {!surgeKnown && (
                <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50/70 p-3 text-xs leading-relaxed text-amber-800">
                  You have not entered a startup / surge figure. Find it on the unit&apos;s nameplate,
                  its manual, or the manufacturer&apos;s specifications before choosing a power
                  station. A unit with plenty of battery capacity can still fail to start the
                  compressor if its inverter cannot supply the surge.
                </p>
              )}
              <p className="mt-3 text-xs leading-relaxed text-ink/60">
                A power station can have enough battery capacity but still fail to start an air
                conditioner if its inverter cannot supply the required startup surge. Check the
                unit&apos;s rated continuous output and its surge / peak rating against the two
                numbers above.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5 sm:p-6">
              <h2 className="font-display text-base font-semibold text-amber-900">
                Voltage reminder
              </h2>
              <div className="mt-2 space-y-2 text-xs leading-relaxed text-amber-800">
                <p>Verify the air conditioner&apos;s required voltage before buying anything.</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Many portable power stations provide 120V AC only.</li>
                  <li>
                    Small portable and window units are usually 120V; larger window units, through-
                    the-wall units, and many mini-splits are 240V.
                  </li>
                  <li>
                    A 240V air conditioner cannot run directly from a 120V-only power station, no
                    matter how large its battery.
                  </li>
                  <li>
                    Check voltage, outlet / plug type, continuous watts, and startup surge before
                    buying.
                  </li>
                </ul>
                <p>
                  This calculator sizes energy (Wh) and reports the output (W) you need. It does not
                  check 120V versus 240V compatibility &mdash; enough watt-hours does not guarantee
                  electrical compatibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductRecommendations
        recommendedCapacityWh={result.recommendedWh}
        recommendedSizeClass={result.sizeClass}
        requiredContinuousOutputW={result.requiredContinuousW}
        requiredSurgeOutputW={result.requiredSurgeW}
        className="pb-2"
      />

      <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6">
        <p className="mx-auto max-w-3xl text-xs leading-relaxed text-ink/55">
          Capacity recommendations above are based on energy needs only. Before buying, verify the
          power station&apos;s continuous AC output, its startup / surge capability, its AC voltage
          (120V or 240V), and its outlet configuration against your air conditioner&apos;s
          specifications &mdash; capacity class alone does not confirm that a unit can start and run
          your air conditioner.
        </p>
      </section>
    </>
  );
}
