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
  getRequiredSurgeOutputW,
  getTimedEnergyWh,
} from "@/lib/calculator/power-output";
import { selectCapacityClassForResult } from "@/lib/recommendations/selectClass";
import { ProductRecommendations } from "@/components/recommendations/ProductRecommendations";
import { formatWh } from "@/lib/utils/format";

const EXAMPLE = {
  inputWatts: 1500,
  useMinutes: 10,
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

export function MicrowaveCalculator() {
  // Starts on the worked example. Startup / surge is left blank so the
  // "verify it if the spec sheet lists one" path is visible by default.
  const [inputWatts, setInputWatts] = useState<number>(EXAMPLE.inputWatts);
  const [useMinutes, setUseMinutes] = useState<number>(EXAMPLE.useMinutes);
  const [startupWatts, setStartupWatts] = useState<number>(0);
  const [inverterEfficiency, setInverterEfficiency] = useState<number>(EXAMPLE.inverterEfficiency);
  const [batteryReserve, setBatteryReserve] = useState<number>(EXAMPLE.batteryReserve);

  const result = useMemo(() => {
    const rawWh = getTimedEnergyWh(inputWatts, useMinutes);
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
      requiredContinuousW: getRequiredContinuousOutputW(inputWatts),
      requiredSurgeW: getRequiredSurgeOutputW(startupWatts),
    };
  }, [inputWatts, useMinutes, startupWatts, inverterEfficiency, batteryReserve]);

  const hasInput = result.requiredContinuousW > 0;
  const surgeKnown = result.requiredSurgeW > 0;

  function loadExample() {
    setInputWatts(EXAMPLE.inputWatts);
    setUseMinutes(EXAMPLE.useMinutes);
    setStartupWatts(0);
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
              <h2 className="font-display text-lg font-semibold text-ink">Your microwave</h2>
              <p className="mt-1 text-sm text-ink/60">
                Enter the microwave&apos;s electrical <span className="font-medium">input</span> watts
                &mdash; its power consumption from the outlet, from the rear label, the manual, or a
                watt meter. This is not the &ldquo;700 W&rdquo; / &ldquo;1000 W&rdquo; cooking power
                on the front.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className={labelClasses}>Microwave input watts</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0}
                    step={10}
                    value={inputWatts || ""}
                    placeholder="e.g. 1500"
                    aria-label="Microwave electrical input watts"
                    onChange={(e) => setInputWatts(Math.max(0, parseNumber(e.target.value)))}
                    className={inputClasses}
                  />
                  <span className="mt-1 block text-xs text-ink/45">
                    Power drawn from the wall while running. Required. Look for &ldquo;input&rdquo; or
                    &ldquo;power consumption&rdquo; on the spec.
                  </span>
                </label>

                <label className="block text-sm">
                  <span className={labelClasses}>Minutes of use</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0}
                    max={240}
                    step={1}
                    value={useMinutes || ""}
                    placeholder="e.g. 10"
                    aria-label="Total minutes the microwave runs"
                    onChange={(e) => setUseMinutes(clamp(parseNumber(e.target.value), 0, 240))}
                    className={inputClasses}
                  />
                  <span className="mt-1 block text-xs text-ink/45">
                    Total operating minutes you want to cover, added up across sessions. Required.
                  </span>
                </label>
              </div>

              <div className="mt-5 border-t border-line pt-5">
                <label className="block text-sm">
                  <span className={labelClasses}>Startup / surge watts (optional)</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0}
                    step={10}
                    value={startupWatts || ""}
                    placeholder="only if the spec sheet lists one"
                    aria-label="Microwave startup or surge watts"
                    onChange={(e) => setStartupWatts(Math.max(0, parseNumber(e.target.value)))}
                    className={`${inputClasses} sm:max-w-[16rem]`}
                  />
                  <span className="mt-1 block text-xs text-ink/45">
                    Enter this only if the manufacturer publishes a startup / surge figure. Leave it
                    blank otherwise &mdash; it is not estimated from the input watts.
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
                Example only &mdash; input 1,500&nbsp;W, 10 minutes of use. Replace both with your
                microwave&apos;s actual input watts and run time; the input figure is not derived from
                a cooking-power rating.
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
                        Estimated microwave energy use
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
                  Enter your microwave&apos;s input watts and minutes of use to calculate the battery
                  capacity, energy use, and required output.
                </p>
              )}
              <p className="mt-3 text-xs leading-relaxed text-ink/55">
                This is a planning estimate. Actual energy use depends on your microwave&apos;s real
                input watts and how many minutes it runs, and a microwave is a short-run, high-draw
                load &mdash; the battery is rarely the limit.
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
                    {hasInput ? `${Math.round(result.requiredContinuousW)} W` : "—"}
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
                  No startup / surge figure entered. Most microwave specs do not publish one; the
                  continuous input watts are usually the figure that matters. If your manufacturer
                  does list a surge or peak figure, enter it and check the power station against it.
                </p>
              )}
              <p className="mt-3 text-xs leading-relaxed text-ink/60">
                A power station can have enough battery capacity but still fail to run a microwave if
                its inverter&apos;s continuous AC output is below the microwave&apos;s input watts.
                Check the unit&apos;s rated continuous output against the number above.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5 sm:p-6">
              <h2 className="font-display text-base font-semibold text-amber-900">
                Before you buy
              </h2>
              <div className="mt-2 space-y-2 text-xs leading-relaxed text-amber-800">
                <p>Check these against your microwave and the power station:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    <span className="font-medium">Voltage.</span> Most countertop microwaves sold for
                    home use are 120V, but confirm your unit&apos;s voltage rather than assuming it.
                  </li>
                  <li>
                    <span className="font-medium">Plug and outlet.</span> The power station needs an
                    AC outlet the microwave&apos;s plug fits, ideally a pure sine wave inverter.
                  </li>
                  <li>
                    <span className="font-medium">Continuous AC output.</span> At or above the
                    microwave&apos;s input watts, with headroom.
                  </li>
                  <li>
                    <span className="font-medium">Startup / surge.</span> If the manufacturer lists
                    one, the power station&apos;s surge rating has to cover it.
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
        className="pb-2"
      />

      <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6">
        <p className="mx-auto max-w-3xl text-xs leading-relaxed text-ink/55">
          Capacity recommendations above are based on energy needs only. Before buying, verify the
          power station&apos;s continuous AC output against your microwave&apos;s input watts, plus
          its AC voltage, outlet configuration, and any startup / surge specification &mdash; capacity
          class alone does not confirm that a unit can run your microwave.
        </p>
      </section>
    </>
  );
}
