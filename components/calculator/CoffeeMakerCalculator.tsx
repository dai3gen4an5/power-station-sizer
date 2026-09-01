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
  makerWatts: 1200,
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

export function CoffeeMakerCalculator() {
  const [makerWatts, setMakerWatts] = useState<number>(EXAMPLE.makerWatts);
  const [useMinutes, setUseMinutes] = useState<number>(EXAMPLE.useMinutes);
  const [inverterEfficiency, setInverterEfficiency] = useState<number>(EXAMPLE.inverterEfficiency);
  const [batteryReserve, setBatteryReserve] = useState<number>(EXAMPLE.batteryReserve);

  const result = useMemo(() => {
    const rawWh = getTimedEnergyWh(makerWatts, useMinutes);
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
      requiredContinuousW: getRequiredContinuousOutputW(makerWatts),
    };
  }, [makerWatts, useMinutes, inverterEfficiency, batteryReserve]);

  const hasInput = result.requiredContinuousW > 0;

  function loadExample() {
    setMakerWatts(EXAMPLE.makerWatts);
    setUseMinutes(EXAMPLE.useMinutes);
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
              <h2 className="font-display text-lg font-semibold text-ink">Your coffee maker</h2>
              <p className="mt-1 text-sm text-ink/60">
                Enter the coffee maker&apos;s electrical <span className="font-medium">input</span>{" "}
                watts from its rating label, manual, or a watt meter &mdash; and the minutes it
                actually draws power, including keep-warm time if you use it.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className={labelClasses}>Coffee maker input watts</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0}
                    step={10}
                    value={makerWatts || ""}
                    placeholder="e.g. 1200"
                    aria-label="Coffee maker input watts"
                    onChange={(e) => setMakerWatts(Math.max(0, parseNumber(e.target.value)))}
                    className={inputClasses}
                  />
                  <span className="mt-1 block text-xs text-ink/45">
                    Power drawn from the wall while brewing. Required &mdash; from the label, not an
                    assumption about drip, pod, or espresso types.
                  </span>
                </label>

                <label className="block text-sm">
                  <span className={labelClasses}>Brew / use time (minutes)</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0}
                    max={240}
                    step={1}
                    value={useMinutes || ""}
                    placeholder="e.g. 10"
                    aria-label="Total minutes the coffee maker draws power"
                    onChange={(e) => setUseMinutes(clamp(parseNumber(e.target.value), 0, 240))}
                    className={inputClasses}
                  />
                  <span className="mt-1 block text-xs text-ink/45">
                    Total minutes it draws power, added across brew cycles. Add keep-warm minutes
                    here too.
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
                Example only &mdash; 1,200&nbsp;W coffee maker, 10 minutes of use. Replace both with
                your machine&apos;s actual input watts and run time.
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
                        Estimated coffee maker energy use
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
                  Enter your coffee maker&apos;s input watts and a brew time to calculate the battery
                  capacity, energy use, and required output.
                </p>
              )}
              <p className="mt-3 text-xs leading-relaxed text-ink/55">
                This is a planning estimate. It assumes the coffee maker draws its full input watts
                for the whole time you enter. A brew cycle&apos;s draw varies between heat-up,
                brewing, and keep-warm &mdash; include the minutes it is actually powered rather than
                relying on a fixed correction.
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
                A coffee maker&apos;s heating element pulls its full wattage the whole time it is on.
                A power station can hold plenty of watt-hours and still fail to run one if its
                inverter&apos;s continuous AC output is below the coffee maker&apos;s input watts.
                Check the unit&apos;s rated continuous output against the number above.
              </p>
              <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50/70 p-3 text-xs leading-relaxed text-amber-800">
                A drip or pod coffee maker is a resistive heating load with no meaningful startup
                surge, so this page does not ask for one. An espresso machine with a pump is more
                complex &mdash; enter its actual input watts and a realistic run time, and check any
                startup or peak figure the maker publishes against the power station.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5 sm:p-6">
              <h2 className="font-display text-base font-semibold text-amber-900">Before you buy</h2>
              <div className="mt-2 space-y-2 text-xs leading-relaxed text-amber-800">
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    <span className="font-medium">Continuous AC output</span> at or above the coffee
                    maker&apos;s input watts, with headroom.
                  </li>
                  <li>
                    <span className="font-medium">AC voltage</span> matches the machine (most home
                    coffee makers are 120V; confirm yours).
                  </li>
                  <li>
                    <span className="font-medium">Outlet</span> the plug fits, ideally on a pure sine
                    wave inverter.
                  </li>
                  <li>
                    <span className="font-medium">Keep-warm</span> use adds minutes of draw &mdash;
                    fold that into the brew time.
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

      <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6">
        <p className="mx-auto max-w-3xl text-xs leading-relaxed text-ink/55">
          Recommendations above are based on the known battery-capacity and continuous-output
          requirements only. Before buying, verify the power station&apos;s continuous AC output
          against your coffee maker&apos;s input watts, plus its AC voltage, outlet configuration,
          real usable capacity, and your expected brew and keep-warm time &mdash; this is not an
          unconditional claim that a given unit will run your coffee maker.
        </p>
      </section>
    </>
  );
}
