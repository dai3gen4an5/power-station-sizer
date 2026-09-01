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
  blanketWatts: 75,
  useHours: 8,
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

export function ElectricBlanketCalculator() {
  const [blanketWatts, setBlanketWatts] = useState<number>(EXAMPLE.blanketWatts);
  const [useHours, setUseHours] = useState<number>(EXAMPLE.useHours);
  const [inverterEfficiency, setInverterEfficiency] = useState<number>(EXAMPLE.inverterEfficiency);
  const [batteryReserve, setBatteryReserve] = useState<number>(EXAMPLE.batteryReserve);

  const result = useMemo(() => {
    // Reuse the shared timed-energy helper (watts, minutes) — hours * 60.
    const rawWh = getTimedEnergyWh(blanketWatts, useHours * 60);
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
      requiredContinuousW: getRequiredContinuousOutputW(blanketWatts),
    };
  }, [blanketWatts, useHours, inverterEfficiency, batteryReserve]);

  const hasInput = result.requiredContinuousW > 0 && result.rawWh > 0;

  function loadExample() {
    setBlanketWatts(EXAMPLE.blanketWatts);
    setUseHours(EXAMPLE.useHours);
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
              <h2 className="h3">Your electric blanket</h2>
              <p className="mt-1 text-sm text-muted">
                Enter the blanket&apos;s electrical <span className="font-medium">input</span> watts
                from its rating label, controller, or manual, and how many hours you want to power
                it.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className={labelClasses}>Electric blanket input watts</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0}
                    step={5}
                    value={blanketWatts || ""}
                    placeholder="e.g. 75"
                    aria-label="Electric blanket input watts"
                    onChange={(e) => setBlanketWatts(Math.max(0, parseNumber(e.target.value)))}
                    className={inputClasses}
                  />
                  <span className="mt-1 block text-xs text-muted/70">
                    The active heating draw at your setting, from the label &mdash; not a long-run
                    cycling average. This figure also sizes the required AC output.
                  </span>
                </label>

                <label className="block text-sm">
                  <span className={labelClasses}>Use time (hours)</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0}
                    max={24}
                    step={0.5}
                    value={useHours || ""}
                    placeholder="e.g. 8"
                    aria-label="Electric blanket use time in hours"
                    onChange={(e) => setUseHours(clamp(parseNumber(e.target.value), 0, 24))}
                    className={inputClasses}
                  />
                  <span className="mt-1 block text-xs text-muted/70">
                    Hours you want to run it &mdash; a full night is often 6 to 10. Check your
                    controller&apos;s auto-shutoff timer.
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
                      Energy lost converting battery power to AC. This AC model does not cover 12V or
                      USB blankets.
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
                Example only &mdash; 75&nbsp;W electric blanket, 8 hours of use. Replace both with
                your blanket&apos;s actual input watts at your setting and your real run time.
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
                      <p className="field-label">Estimated blanket energy use</p>
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
                  Enter your electric blanket&apos;s input watts and a run time in hours to calculate
                  the battery capacity, energy use, and required output.
                </p>
              )}
              <p className="mt-3 text-xs leading-relaxed text-muted/80">
                This is a planning estimate. It assumes the blanket draws its full input watts for
                the whole time you enter. Enter the active or rated heating watts here &mdash; the
                same figure also sizes the required AC output, so it must be the full heating draw,
                not a long-run cycling average. Thermostat cycling can lower the real energy use; see
                below for how to fold that into a capacity estimate separately.
              </p>
            </div>

            <div className="card card-pad">
              <h2 className="h3 text-base">AC output your power station must have</h2>
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
                An electric blanket draws little power &mdash; examples range from tens of watts to
                well over 100&nbsp;W depending on size, controller, and model. Among the listed power
                stations, AC output is usually not the limiting specification for a low-watt blanket;
                the watt-hours over a full night are. That means{" "}
                <span className="font-medium">battery capacity and runtime</span>, not AC output,
                normally decide whether a unit lasts until morning &mdash; but manufacturer
                compatibility still has to be checked separately.
              </p>
              <p className="mt-3 rounded-control border border-amber-200 bg-amber-50/70 p-3 text-xs leading-relaxed text-amber-800">
                An electric blanket is a low-power resistive heating load; its start-up draw is
                negligible, so this page does not ask for a surge figure. 12V and USB heated blankets
                bypass the AC inverter and are outside this calculator&apos;s AC model &mdash; size
                them from their actual source-side energy use, allowing for any DC-conversion losses
                the device or power source specifies.
              </p>
            </div>

            <div className="rounded-card border border-amber-200 bg-amber-50/70 p-5 sm:p-6">
              <h2 className="h3 text-base text-amber-900">Before you buy</h2>
              <div className="mt-2 space-y-2 text-xs leading-relaxed text-amber-800">
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    <span className="font-medium">Manufacturer permits it.</span> The blanket manual
                    explicitly allows inverter, generator, or portable-power-station use, and any AC
                    source or waveform requirement it states is met.
                  </li>
                  <li>
                    <span className="font-medium">Battery capacity (Wh)</span> at least the
                    recommended figure &mdash; this and runtime are what matter here.
                  </li>
                  <li>
                    <span className="font-medium">AC output</span> at or above the blanket&apos;s
                    active watts. Among the listed units this is usually not the limiting spec, but
                    confirm it.
                  </li>
                  <li>
                    <span className="font-medium">Voltage, frequency, and plug</span> match the
                    blanket, or the correct DC output for a 12V / USB model.
                  </li>
                  <li>
                    <span className="font-medium">Auto-shutoff timer</span> on the controller checked
                    against how long you actually want heat, and no damaged cord or controller.
                  </li>
                </ul>
                <p>
                  This calculator sizes energy (Wh) and reports the AC output (W) you need from the
                  numbers you enter. Electrical capacity alone does not prove compatibility &mdash; it
                  does not check voltage, plug, or whether the blanket maker allows inverter power,
                  and it is not a safety approval. Follow the blanket manufacturer&apos;s
                  instructions.
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
          These recommendations only satisfy the calculated battery-capacity and AC-output
          requirements. They do not establish that your heated blanket manufacturer permits inverter
          power. Before buying, verify the power station&apos;s real usable capacity against your
          blanket&apos;s overnight energy, its AC output against the blanket&apos;s full active
          wattage, its voltage and outlet or DC-adapter compatibility, and the blanket manual&apos;s
          stance on inverter, generator, or power-station use &mdash; this is not an unconditional
          claim that a given unit will run your blanket for the full night, and it is not safety
          advice.
        </p>
      </section>
    </>
  );
}
