"use client";

import { useMemo, useState } from "react";
import {
  getEfficiencyAdjustedWh,
  getRecommendedCapacityWh,
  roundUpToSizeClass,
} from "@/lib/calculator/calculations";
import { DEFAULT_SETTINGS } from "@/lib/calculator/constants";
import {
  getRequiredContinuousOutputW,
  getTimedEnergyWh,
} from "@/lib/calculator/power-output";
import { selectCapacityClassForResult } from "@/lib/recommendations/selectClass";
import { ProductRecommendations } from "@/components/recommendations/ProductRecommendations";
import { formatWh } from "@/lib/utils/format";

const EXAMPLE = {
  heaterWatts: 1500,
  useHours: 2,
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

export function ElectricHeaterCalculator() {
  const [heaterWatts, setHeaterWatts] = useState<number>(EXAMPLE.heaterWatts);
  const [useHours, setUseHours] = useState<number>(EXAMPLE.useHours);
  const [inverterEfficiency, setInverterEfficiency] = useState<number>(EXAMPLE.inverterEfficiency);
  const [batteryReserve, setBatteryReserve] = useState<number>(EXAMPLE.batteryReserve);

  const result = useMemo(() => {
    // watts x hours, via the shared timed-energy helper (minutes = hours x 60).
    const rawWh = getTimedEnergyWh(heaterWatts, useHours * 60);
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
      requiredContinuousW: getRequiredContinuousOutputW(heaterWatts),
    };
  }, [heaterWatts, useHours, inverterEfficiency, batteryReserve]);

  const hasInput = result.requiredContinuousW > 0;

  function loadExample() {
    setHeaterWatts(EXAMPLE.heaterWatts);
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
              <h2 className="font-display text-lg font-semibold text-ink">Your electric heater</h2>
              <p className="mt-1 text-sm text-ink/60">
                Enter the heater&apos;s electrical <span className="font-medium">input</span> watts
                from its rating label, manual, or a watt meter &mdash; and, if it has High / Low
                settings, the setting you actually plan to run.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className={labelClasses}>Heater input watts</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0}
                    step={50}
                    value={heaterWatts || ""}
                    placeholder="e.g. 1500"
                    aria-label="Electric heater input watts"
                    onChange={(e) => setHeaterWatts(Math.max(0, parseNumber(e.target.value)))}
                    className={inputClasses}
                  />
                  <span className="mt-1 block text-xs text-ink/45">
                    Power drawn from the wall while heating. Required &mdash; from the label, not an
                    assumption that every heater is 1,500&nbsp;W.
                  </span>
                </label>

                <label className="block text-sm">
                  <span className={labelClasses}>Use time (hours)</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0}
                    max={48}
                    step={0.5}
                    value={useHours || ""}
                    placeholder="e.g. 2"
                    aria-label="Hours you want to run the heater"
                    onChange={(e) => setUseHours(clamp(parseNumber(e.target.value), 0, 48))}
                    className={inputClasses}
                  />
                  <span className="mt-1 block text-xs text-ink/45">
                    How long you want the heater to run. Decimals are fine (0.5, 1, 2, 4, 8).
                  </span>
                </label>
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
                Example only &mdash; 1,500&nbsp;W heater, 2 hours of use. Replace both with your
                heater&apos;s actual input watts and the run time you need.
              </p>
            </div>
          </div>

          {/* ---- RESULTS ---- */}
          <div className="space-y-4 lg:sticky lg:top-6">
            <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
              <h2 className="font-display text-base font-semibold text-ink">
                Battery capacity you need
              </h2>
              {hasInput ? (
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
                        Estimated heater energy use
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
                  Enter your heater&apos;s input watts and a run time to calculate the battery
                  capacity, energy use, and required output.
                </p>
              )}
              <p className="mt-3 text-xs leading-relaxed text-ink/55">
                This is a planning estimate, not a guaranteed runtime. It assumes the heater draws
                its full input watts for the whole time you enter. A thermostat may cycle the heater
                off once the room is warm and lower real use, but that depends on room size,
                insulation, the setpoint, and outdoor temperature &mdash; adjust the hours to model
                it rather than relying on a fixed reduction.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
              <h2 className="font-display text-base font-semibold text-ink">
                Continuous AC output your power station must have
              </h2>
              <p className="mt-1 text-sm text-ink/60">
                This is separate from battery capacity. A power station needs both.
              </p>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="text-ink/70">Required continuous AC output</dt>
                  <dd className="font-mono font-semibold text-ink">
                    {hasInput ? `${Math.round(result.requiredContinuousW)} W` : "—"}
                  </dd>
                </div>
              </dl>
              <p className="mt-3 text-xs leading-relaxed text-ink/60">
                A power station can hold plenty of watt-hours and still fail to run a heater if its
                inverter&apos;s continuous AC output is below the heater&apos;s input watts &mdash;
                and the heater draws that much for the entire run, not just at start-up. Check the
                unit&apos;s rated continuous output against the number above.
              </p>
              <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50/70 p-3 text-xs leading-relaxed text-amber-800">
                A plain resistive heater has no meaningful startup surge, so this page does not ask
                for one. If your heater has a blower or fan motor and the manufacturer publishes a
                startup / peak figure, check the power station&apos;s surge rating against that too.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5 sm:p-6">
              <h2 className="font-display text-base font-semibold text-amber-900">
                Before you buy &amp; safety
              </h2>
              <div className="mt-2 space-y-2 text-xs leading-relaxed text-amber-800">
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Do not run a heater whose input watts exceed the power station&apos;s rated
                    continuous AC output.
                  </li>
                  <li>Confirm the heater manufacturer&apos;s power and voltage requirements.</li>
                  <li>
                    Use the heater&apos;s own cord and a correctly rated outlet; avoid damaged or
                    undersized cords and unapproved adapters.
                  </li>
                  <li>
                    Keep the manufacturer&apos;s specified clearance around the heater, and follow
                    its instructions on unattended operation.
                  </li>
                  <li>
                    Follow the power station&apos;s own ventilation and operating-temperature limits.
                  </li>
                </ul>
                <p>
                  Electric resistance heat drains a battery quickly &mdash; a portable power station
                  is a short-term backup, not a substitute for whole-home heating.
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
        className="pb-2"
      />

      <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6">
        <p className="mx-auto max-w-3xl text-xs leading-relaxed text-ink/55">
          Recommendations above are based on the known battery-capacity and continuous-output
          requirements only. Before buying, verify the power station&apos;s continuous AC output
          against your heater&apos;s input watts, plus its AC voltage, outlet configuration, real
          usable capacity, and operating limits &mdash; this is not an unconditional claim that a
          given unit will run your heater.
        </p>
      </section>
    </>
  );
}
