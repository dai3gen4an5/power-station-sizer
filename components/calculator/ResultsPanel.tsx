"use client";

import { useMemo, useState } from "react";
import {
  estimateRuntimeHours,
  estimateSolarChargeHours,
  getEffectiveSolarInputW,
} from "@/lib/calculator/calculations";
import { SIZE_CLASSES_WH } from "@/lib/calculator/constants";
import type { CalculatorResults } from "@/lib/calculator/types";
import { formatHours, formatWh } from "@/lib/utils/format";

interface ResultsPanelProps {
  results: CalculatorResults;
  inverterEfficiency: number;
  batteryReserve: number;
}

const LARGEST_CLASS = SIZE_CLASSES_WH[SIZE_CLASSES_WH.length - 1];
const SEGMENT_COUNT = 20;

// Stated assumption for the "solar recharge" figure: a common 200 W portable
// panel at the project's default 70% real-world derating. The main calculator
// does not collect solar inputs, so this is illustrative with the assumption
// shown next to it — the Solar Charge Time Calculator takes real inputs.
const SOLAR_PANEL_W = 200;
const SOLAR_EFFICIENCY_PCT = 70;

export function ResultsPanel({ results, inverterEfficiency, batteryReserve }: ResultsPanelProps) {
  const { totalDailyWh, minimumCapacityWh, recommendedCapacityWh, recommendedSizeClass } = results;

  const [runtimeSize, setRuntimeSize] = useState<number>(recommendedSizeClass ?? LARGEST_CLASS);

  const runtimeHours = useMemo(
    () => estimateRuntimeHours(runtimeSize, totalDailyWh, inverterEfficiency, batteryReserve),
    [runtimeSize, totalDailyWh, inverterEfficiency, batteryReserve]
  );

  const solarHours = useMemo(() => {
    if (recommendedCapacityWh <= 0) return 0;
    return estimateSolarChargeHours(
      recommendedCapacityWh,
      getEffectiveSolarInputW(SOLAR_PANEL_W, SOLAR_EFFICIENCY_PCT)
    );
  }, [recommendedCapacityWh]);

  const sizeLabel = recommendedSizeClass
    ? formatWh(recommendedSizeClass)
    : `${LARGEST_CLASS.toLocaleString("en-US")} Wh+`;

  const fillFraction = Math.min(1, recommendedCapacityWh / LARGEST_CLASS);
  const filledSegments = Math.max(1, Math.round(fillFraction * SEGMENT_COUNT));
  const hasLoad = totalDailyWh > 0;

  return (
    <div className="space-y-4">
      {/* PRIMARY — the summary the whole page builds toward. */}
      <div className="feature-card p-6 sm:p-8">
        <p className="eyebrow">Your power needs summary</p>

        <div className="mt-4">
          <p className="text-sm font-medium text-muted">Recommended capacity</p>
          <p className="mt-1 font-mono text-5xl font-semibold leading-none tracking-tight tabular-nums text-brand-700 sm:text-6xl">
            {formatWh(recommendedCapacityWh)}
          </p>
          <p className="mt-2 text-sm text-muted">
            For comfortable real-world use, shop around{" "}
            <span className="font-semibold text-ink">{sizeLabel}</span>.
          </p>
        </div>

        <dl className="mt-6 grid gap-4 border-t border-hairline pt-5 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-medium text-muted">Daily usage</dt>
            <dd className="mt-1 font-mono text-xl font-semibold tabular-nums text-ink">
              {formatWh(totalDailyWh)}
            </dd>
          </div>

          <div>
            <dt className="text-xs font-medium text-muted">Estimated runtime</dt>
            <dd className="mt-1 font-mono text-xl font-semibold tabular-nums text-ink">
              {hasLoad ? formatHours(runtimeHours) : "—"}
            </dd>
            <label className="mt-1 block">
              <span className="sr-only">Power station size for the runtime estimate</span>
              <select
                value={runtimeSize}
                onChange={(e) => setRuntimeSize(Number.parseInt(e.target.value, 10))}
                className="field py-1 text-xs"
              >
                {SIZE_CLASSES_WH.map((size) => (
                  <option key={size} value={size}>
                    at {formatWh(size)}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div>
            <dt className="text-xs font-medium text-muted">Solar recharge</dt>
            <dd className="mt-1 font-mono text-xl font-semibold tabular-nums text-ink">
              {solarHours > 0 ? formatHours(solarHours) : "—"}
            </dd>
            <p className="mt-1 text-[11px] leading-snug text-muted">
              Full charge, {SOLAR_PANEL_W}&nbsp;W panel in good sun.{" "}
              <a
                href="/solar-charge-time-calculator"
                className="font-medium text-brand-700 hover:underline"
              >
                Real figures
              </a>
            </p>
          </div>
        </dl>

        <p
          className={`mt-5 rounded-control px-3.5 py-2.5 text-xs leading-relaxed ${
            hasLoad ? "bg-brand-50 text-brand-800" : "bg-surface-muted text-muted"
          }`}
        >
          {hasLoad ? (
            <>
              This size covers about <span className="font-semibold">{formatWh(totalDailyWh)}</span>{" "}
              of use per day. It already includes the {batteryReserve}% reserve buffer and{" "}
              {inverterEfficiency}% inverter efficiency you set, rounded up to a common{" "}
              <span className="font-semibold">{sizeLabel}</span> size.
            </>
          ) : (
            "Add a device on the left to see your recommended size and runtime."
          )}
        </p>
      </div>

      {/* SECONDARY — branded charge-scale readout, not a second headline number. */}
      <div className="panel-hardware">
        <div className="flex items-center justify-between px-3.5 pb-2 pt-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
            Charge scale
          </span>
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-led shadow-[0_0_6px_theme(colors.led)]" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
          </div>
        </div>
        <div className="px-3.5 pb-4">
          <div
            className="flex gap-1"
            role="img"
            aria-label={`Recommended capacity is ${Math.round(fillFraction * 100)}% of the largest listed size`}
          >
            {Array.from({ length: SEGMENT_COUNT }).map((_, i) => (
              <span
                key={i}
                className={`h-2.5 flex-1 rounded-[3px] ${
                  i < filledSegments ? "bg-led shadow-[0_0_8px_-2px_theme(colors.led)]" : "bg-white/[0.07]"
                }`}
              />
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 font-mono text-white">
            <div className="rounded-lg bg-white/[0.04] px-3 py-2">
              <p className="text-[10px] uppercase tracking-wide text-white/40">Daily energy</p>
              <p className="mt-0.5 text-sm">{formatWh(totalDailyWh)}</p>
            </div>
            <div className="rounded-lg bg-white/[0.04] px-3 py-2">
              <p className="text-[10px] uppercase tracking-wide text-white/40">Min. before reserve</p>
              <p className="mt-0.5 text-sm">{formatWh(minimumCapacityWh)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
