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
  cookerWatts: 700,
  useMinutes: 45,
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

export function RiceCookerCalculator() {
  const [cookerWatts, setCookerWatts] = useState<number>(EXAMPLE.cookerWatts);
  const [useMinutes, setUseMinutes] = useState<number>(EXAMPLE.useMinutes);
  const [inverterEfficiency, setInverterEfficiency] = useState<number>(EXAMPLE.inverterEfficiency);
  const [batteryReserve, setBatteryReserve] = useState<number>(EXAMPLE.batteryReserve);

  const result = useMemo(() => {
    const rawWh = getTimedEnergyWh(cookerWatts, useMinutes);
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
      requiredContinuousW: getRequiredContinuousOutputW(cookerWatts),
    };
  }, [cookerWatts, useMinutes, inverterEfficiency, batteryReserve]);

  const hasInput = result.requiredContinuousW > 0;

  function loadExample() {
    setCookerWatts(EXAMPLE.cookerWatts);
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
              <h2 className="h3">Your rice cooker</h2>
              <p className="mt-1 text-sm text-muted">
                Enter the rice cooker&apos;s electrical <span className="font-medium">input</span>{" "}
                watts from its rating label or manual, and the minutes it draws power for one cook
                cycle. This sizes the cook cycle &mdash; add keep-warm energy separately if you use
                it.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className={labelClasses}>Rice cooker input watts</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0}
                    step={25}
                    value={cookerWatts || ""}
                    placeholder="e.g. 700"
                    aria-label="Rice cooker input watts"
                    onChange={(e) => setCookerWatts(Math.max(0, parseNumber(e.target.value)))}
                    className={inputClasses}
                  />
                  <span className="mt-1 block text-xs text-muted/70">
                    Power drawn from the wall while cooking. Required &mdash; from the label, not a
                    guess from the cup or litre capacity.
                  </span>
                </label>

                <label className="block text-sm">
                  <span className={labelClasses}>Cook / powered time (minutes)</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0}
                    max={240}
                    step={1}
                    value={useMinutes || ""}
                    placeholder="e.g. 45"
                    aria-label="Total minutes the rice cooker draws power for one cook cycle"
                    onChange={(e) => setUseMinutes(clamp(parseNumber(e.target.value), 0, 240))}
                    className={inputClasses}
                  />
                  <span className="mt-1 block text-xs text-muted/70">
                    Powered minutes for one cook cycle. It varies with the rice type, amount, and
                    mode &mdash; use your cooker&apos;s real time.
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
                Example only &mdash; 700&nbsp;W rice cooker, 45 minutes for one cook cycle. Replace
                both with your cooker&apos;s actual input watts and cook time.
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
                      <p className="field-label">Estimated cook cycle energy</p>
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
                  Enter your rice cooker&apos;s input watts and a cook time to calculate the battery
                  capacity, energy use, and required output.
                </p>
              )}
              <p className="mt-3 text-xs leading-relaxed text-muted/80">
                This is a planning estimate for one cook cycle. It assumes the cooker draws its full
                input watts for the whole time you enter. Thermostat or fuzzy-logic cycling and
                keep-warm are not modelled &mdash; enter your best estimate of powered time, and add
                keep-warm energy separately if you leave it on.
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
                A rice cooker&apos;s heating element pulls its full input wattage whenever it is on.
                Most rice cookers draw less than a kettle or a toaster oven, so the continuous-output
                bar is lower &mdash; but a power station still cannot run one if its inverter&apos;s
                continuous AC output is below the cooker&apos;s input watts. Check the unit&apos;s
                rated continuous output against the number above.
              </p>
              <p className="mt-3 rounded-control border border-amber-200 bg-amber-50/70 p-3 text-xs leading-relaxed text-amber-800">
                A rice cooker is a resistive heating load; its start-up draw is brief and minor, so
                this page does not ask for a surge figure. IH and pressure rice cookers draw more
                than a simple resistive one &mdash; use your model&apos;s actual rating. If the
                manufacturer publishes a peak or starting figure, check the power station&apos;s
                surge rating against that as well.
              </p>
            </div>

            <div className="rounded-card border border-amber-200 bg-amber-50/70 p-5 sm:p-6">
              <h2 className="h3 text-base text-amber-900">Before you buy</h2>
              <div className="mt-2 space-y-2 text-xs leading-relaxed text-amber-800">
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    <span className="font-medium">Continuous AC output</span> at or above the rice
                    cooker&apos;s input watts, with headroom.
                  </li>
                  <li>
                    <span className="font-medium">AC voltage</span> matches the cooker (most portable
                    models are 120V; confirm yours).
                  </li>
                  <li>
                    <span className="font-medium">Outlet</span> the plug fits, ideally on a pure sine
                    wave inverter.
                  </li>
                  <li>
                    <span className="font-medium">Keep-warm</span> energy added separately if you
                    plan to hold the rice for hours.
                  </li>
                </ul>
                <p>
                  This calculator sizes cook-cycle energy (Wh) and reports the continuous output (W)
                  you need from the numbers you enter. It does not check voltage or plug
                  compatibility &mdash; confirm those yourself.
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
          against your rice cooker&apos;s input watts, plus its AC voltage, outlet configuration,
          real usable capacity, and your expected cook and keep-warm time &mdash; this is not an
          unconditional claim that a given unit will run your rice cooker.
        </p>
      </section>
    </>
  );
}
