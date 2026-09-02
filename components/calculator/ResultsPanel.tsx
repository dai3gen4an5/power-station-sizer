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
const SEGMENT_COUNT = 16;

// Stated assumption for the "solar recharge" tile: a common 200 W portable
// panel at the project's default 70% real-world derating. The main calculator
// does not collect solar inputs, so this is an illustrative figure with the
// assumption shown next to it — the dedicated Solar Charge Time Calculator
// takes real panel and sun-hour inputs.
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
    const effectiveInput = getEffectiveSolarInputW(SOLAR_PANEL_W, SOLAR_EFFICIENCY_PCT);
    return estimateSolarChargeHours(recommendedCapacityWh, effectiveInput);
  }, [recommendedCapacityWh]);

  const sizeLabel = recommendedSizeClass
    ? formatWh(recommendedSizeClass)
    : `${LARGEST_CLASS.toLocaleString("en-US")} Wh+`;

  const fillFraction = Math.min(1, recommendedCapacityWh / LARGEST_CLASS);
  const filledSegments = Math.max(1, Math.round(fillFraction * SEGMENT_COUNT));

  const hasLoad = totalDailyWh > 0;

  return (
    <div className="space-y-4">
      {/* Signature "device readout" panel — the visual anchor for every page. */}
      <div className="panel-hardware">
        <div className="flex items-center justify-between px-3.5 pb-2.5 pt-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
            Recommended capacity
          </span>
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-led shadow-[0_0_6px_theme(colors.led)]" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
          </div>
        </div>

        <div className="panel-screen px-6 py-7 text-center">
          <p className="font-mono text-5xl font-semibold tracking-tight text-screenInk">
            {formatWh(recommendedCapacityWh)}
          </p>
          <p className="mt-2 text-sm text-screenInk/70">
            For comfortable real-world use, look for a power station around{" "}
            <span className="font-semibold text-screenInk">{sizeLabel}</span>.
          </p>
        </div>

        <div className="px-3.5 pb-4 pt-4">
          <div
            className="flex gap-1"
            role="img"
            aria-label={`Capacity gauge, ${Math.round(fillFraction * 100)}% of scale`}
          >
            {Array.from({ length: SEGMENT_COUNT }).map((_, i) => (
              <span
                key={i}
                className={`h-3 flex-1 rounded-[3px] ${
                  i < filledSegments ? "bg-led shadow-[0_0_8px_-2px_theme(colors.led)]" : "bg-white/[0.07]"
                }`}
              />
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 font-mono text-white">
            <div className="rounded-xl bg-white/[0.04] px-3 py-2.5">
              <p className="text-[10px] uppercase tracking-wide text-white/40">Daily energy use</p>
              <p className="mt-0.5 text-base">{formatWh(totalDailyWh)}</p>
            </div>
            <div className="rounded-xl bg-white/[0.04] px-3 py-2.5">
              <p className="text-[10px] uppercase tracking-wide text-white/40">Minimum capacity</p>
              <p className="mt-0.5 text-base">{formatWh(minimumCapacityWh)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Light summary of the supporting numbers, all from the same engine. */}
      <div className="card card-pad">
        <h2 className="h3 text-base">Your power needs summary</h2>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-card border border-hairline bg-surface-muted/50 p-3">
            <p className="field-label">Daily usage</p>
            <p className="mt-1 font-mono text-2xl font-semibold tabular-nums text-ink">
              {formatWh(totalDailyWh)}
            </p>
            <p className="mt-0.5 text-xs text-muted">Total watt-hours per day</p>
          </div>

          <div className="rounded-card border border-hairline bg-surface-muted/50 p-3">
            <p className="field-label">Recommended capacity</p>
            <p className="mt-1 font-mono text-2xl font-semibold tabular-nums text-brand-700">
              {formatWh(recommendedCapacityWh)}
            </p>
            <p className="mt-0.5 text-xs text-muted">Shop around {sizeLabel}</p>
          </div>

          <div className="rounded-card border border-hairline bg-surface-muted/50 p-3">
            <p className="field-label">Estimated runtime</p>
            <p className="mt-1 font-mono text-2xl font-semibold tabular-nums text-ink">
              {hasLoad ? formatHours(runtimeHours) : "—"}
            </p>
            <label className="mt-1.5 block text-xs text-muted">
              <span className="sr-only">Power station size for the runtime estimate</span>
              <select
                value={runtimeSize}
                onChange={(e) => setRuntimeSize(Number.parseInt(e.target.value, 10))}
                className="field mt-0.5 py-1 text-xs"
              >
                {SIZE_CLASSES_WH.map((size) => (
                  <option key={size} value={size}>
                    at {formatWh(size)}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="rounded-card border border-hairline bg-surface-muted/50 p-3">
            <p className="field-label">Solar recharge</p>
            <p className="mt-1 font-mono text-2xl font-semibold tabular-nums text-ink">
              {solarHours > 0 ? formatHours(solarHours) : "—"}
            </p>
            <p className="mt-0.5 text-xs text-muted">
              Full charge with a {SOLAR_PANEL_W}&nbsp;W panel in good sun.{" "}
              <a href="/solar-charge-time-calculator" className="font-medium text-brand-700 hover:underline">
                Use real panel figures
              </a>
              .
            </p>
          </div>
        </div>

        <p
          className={`mt-4 rounded-control px-3 py-2 text-xs leading-relaxed ${
            hasLoad ? "bg-brand-50 text-brand-800" : "bg-surface-muted text-muted"
          }`}
        >
          {hasLoad ? (
            <>
              Covers about <span className="font-semibold">{formatWh(totalDailyWh)}</span> of use per
              day. The figure includes the {batteryReserve}% reserve buffer and {inverterEfficiency}%
              inverter efficiency you set, then rounds up to a common{" "}
              <span className="font-semibold">{sizeLabel}</span> size.
            </>
          ) : (
            "Add a device above to see your recommended size and runtime."
          )}
        </p>
      </div>
    </div>
  );
}
