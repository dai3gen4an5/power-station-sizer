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
  dryerWatts: 1500,
  useMinutes: 10,
  inverterEfficiency: DEFAULT_SETTINGS.inverterEfficiency,
  batteryReserve: DEFAULT_SETTINGS.batteryReserve,
};

const inputClasses = "field";
const labelClasses = "field-label";

function parseNumber(value: string): number {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
}
function clamp(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, value));
}

export function HairDryerCalculator() {
  const [dryerWatts, setDryerWatts] = useState<number>(EXAMPLE.dryerWatts);
  const [useMinutes, setUseMinutes] = useState<number>(EXAMPLE.useMinutes);
  const [inverterEfficiency, setInverterEfficiency] = useState<number>(EXAMPLE.inverterEfficiency);
  const [batteryReserve, setBatteryReserve] = useState<number>(EXAMPLE.batteryReserve);

  const result = useMemo(() => {
    const rawWh = getTimedEnergyWh(dryerWatts, useMinutes);
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
      requiredContinuousW: getRequiredContinuousOutputW(dryerWatts),
    };
  }, [dryerWatts, useMinutes, inverterEfficiency, batteryReserve]);

  const hasInput = result.requiredContinuousW > 0;

  function loadExample() {
    setDryerWatts(EXAMPLE.dryerWatts);
    setUseMinutes(EXAMPLE.useMinutes);
    setInverterEfficiency(EXAMPLE.inverterEfficiency);
    setBatteryReserve(EXAMPLE.batteryReserve);
  }

  const sizeLabel = result.sizeClass !== null ? formatWh(result.sizeClass) : "5,000 Wh+";

  return (
    <>
      <section id="calculator" className="container-page scroll-mt-20 pb-8 pt-2">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          {/* ---- INPUTS ---- */}
          <div className="space-y-6">
            <div className="card card-pad">
              <h2 className="h3">Your hair dryer</h2>
              <p className="mt-1 text-sm text-muted">
                Enter the hair dryer&apos;s electrical <span className="font-medium">input</span>{" "}
                watts from its rating label or manual &mdash; for the heat and speed setting you
                actually use &mdash; and the total minutes it runs.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className={labelClasses}>Hair dryer input watts</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0}
                    step={25}
                    value={dryerWatts || ""}
                    placeholder="e.g. 1500"
                    aria-label="Hair dryer input watts"
                    onChange={(e) => setDryerWatts(Math.max(0, parseNumber(e.target.value)))}
                    className={inputClasses}
                  />
                  <span className="mt-1 block text-xs text-muted/70">
                    Power drawn from the wall while running. Required &mdash; from the label, not an
                    assumption that every dryer is 1,875&nbsp;W.
                  </span>
                </label>

                <label className="block text-sm">
                  <span className={labelClasses}>Use time (minutes)</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0}
                    max={240}
                    step={1}
                    value={useMinutes || ""}
                    placeholder="e.g. 10"
                    aria-label="Total minutes the hair dryer runs"
                    onChange={(e) => setUseMinutes(clamp(parseNumber(e.target.value), 0, 240))}
                    className={inputClasses}
                  />
                  <span className="mt-1 block text-xs text-muted/70">
                    Total minutes it draws power, added across sessions and people.
                  </span>
                </label>
              </div>

              <div className="mt-5 border-t border-line pt-5">
                <p className="field-label">Backup settings</p>
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
                      <span className="text-sm text-muted">%</span>
                    </div>
                    <span className="mt-1 block text-xs text-muted/70">
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
                      <span className="text-sm text-muted">%</span>
                    </div>
                    <span className="mt-1 block text-xs text-muted/70">
                      Buffer left unused to protect battery life.
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="button"
                onClick={loadExample}
                className="mt-5 inline-flex items-center gap-2 rounded-control border border-dashed border-line-strong px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-brand-300 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Load example
              </button>
              <p className="mt-2 text-xs text-muted/70">
                Example only &mdash; 1,500&nbsp;W hair dryer, 10 minutes of use. Replace both with
                your dryer&apos;s actual input watts and run time.
              </p>
            </div>
          </div>

          {/* ---- RESULTS ---- */}
          <div className="space-y-4 lg:sticky lg:top-24">
            <div className="card card-pad">
              <h2 className="h3 text-base">Battery capacity you need</h2>
              {hasInput ? (
                <>
                  <p className="mt-2 font-mono text-3xl font-semibold text-ink sm:text-4xl">
                    {formatWh(result.recommendedWh)}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    Recommended battery capacity after inverter efficiency and reserve. On capacity
                    alone the calculator rounds that up to about a{" "}
                    <span className="font-semibold text-ink">{sizeLabel}</span> power station
                    {result.capacityLabel ? (
                      <>
                        , which falls in the{" "}
                        <span className="font-semibold text-ink">{result.capacityLabel}</span>{" "}
                        product recommendation range below.
                      </>
                    ) : (
                      "."
                    )}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3 rounded-card bg-surface-muted p-4">
                    <div>
                      <p className="field-label">Estimated hair dryer energy use</p>
                      <p className="mt-0.5 font-mono text-base text-ink">{formatWh(result.rawWh)}</p>
                    </div>
                    <div>
                      <p className="field-label">Minimum before reserve</p>
                      <p className="mt-0.5 font-mono text-base text-ink">
                        {formatWh(result.minimumBeforeReserveWh)}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <p className="mt-2 text-sm text-muted">
                  Enter your hair dryer&apos;s input watts and a run time to calculate the battery
                  capacity, energy use, and required output.
                </p>
              )}
              <p className="mt-3 text-xs leading-relaxed text-muted/80">
                This is a planning estimate. It assumes the dryer draws its full input watts for the
                whole time you enter. A lower heat or speed setting can draw less &mdash; enter the
                watts for the setting you actually use rather than relying on a fixed reduction.
              </p>
            </div>

            <div className="card card-pad">
              <h2 className="h3 text-base">Continuous AC output your power station must have</h2>
              <p className="mt-1 text-sm text-muted">
                This is separate from battery capacity. A power station needs both.
              </p>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="text-muted">Required continuous AC output</dt>
                  <dd className="font-mono font-semibold text-ink">
                    {hasInput ? `${Math.round(result.requiredContinuousW)} W` : "—"}
                  </dd>
                </div>
              </dl>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                A hair dryer&apos;s heating element pulls its full wattage the whole time it runs,
                and most of that draw is the heater, not the motor. A power station can hold plenty
                of watt-hours and still fail to run one if its inverter&apos;s continuous AC output
                is below the dryer&apos;s input watts. Check the unit&apos;s rated continuous output
                against the number above.
              </p>
              <p className="mt-3 rounded-control border border-amber-200 bg-amber-50/70 p-3 text-xs leading-relaxed text-amber-800">
                The small motor&apos;s start-up draw is brief and minor next to the heater load, so
                this page does not ask for a surge figure. If your dryer&apos;s manufacturer
                publishes a peak or starting figure, check the power station&apos;s surge rating
                against that as well.
              </p>
            </div>

            <div className="rounded-card border border-amber-200 bg-amber-50/70 p-5 sm:p-6">
              <h2 className="h3 text-base text-amber-900">Before you buy</h2>
              <div className="mt-2 space-y-2 text-xs leading-relaxed text-amber-800">
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    <span className="font-medium">Continuous AC output</span> at or above the
                    dryer&apos;s input watts for the setting you use, with headroom.
                  </li>
                  <li>
                    <span className="font-medium">AC voltage</span> matches the dryer (most home
                    dryers are 120V; many travel dryers are dual-voltage &mdash; confirm yours).
                  </li>
                  <li>
                    <span className="font-medium">Outlet</span> the plug fits, ideally on a pure sine
                    wave inverter. Note a dryer&apos;s ALCI / GFCI plug needs a compatible outlet.
                  </li>
                  <li>
                    <span className="font-medium">Actual operating time</span> across everyone who
                    uses it, folded into the minutes.
                  </li>
                </ul>
                <p>
                  This calculator sizes energy (Wh) and reports the continuous output (W) you need
                  from the numbers you enter. It does not check voltage or plug compatibility &mdash;
                  confirm those yourself.
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

      <section className="container-page pb-14">
        <p className="mx-auto max-w-3xl text-xs leading-relaxed text-muted/80">
          Recommendations above are based on the known battery-capacity and continuous-output
          requirements only. Before buying, verify the power station&apos;s continuous AC output
          against your hair dryer&apos;s input watts, plus its AC voltage, outlet configuration, real
          usable capacity, and your expected run time &mdash; this is not an unconditional claim that
          a given unit will run your hair dryer.
        </p>
      </section>
    </>
  );
}
