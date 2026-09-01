"use client";

import { useMemo, useState } from "react";
import { estimateRuntimeHours } from "@/lib/calculator/calculations";
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

export function ResultsPanel({ results, inverterEfficiency, batteryReserve }: ResultsPanelProps) {
  const { totalDailyWh, minimumCapacityWh, recommendedCapacityWh, recommendedSizeClass } = results;

  const [runtimeSize, setRuntimeSize] = useState<number>(recommendedSizeClass ?? LARGEST_CLASS);

  const runtimeHours = useMemo(
    () => estimateRuntimeHours(runtimeSize, totalDailyWh, inverterEfficiency, batteryReserve),
    [runtimeSize, totalDailyWh, inverterEfficiency, batteryReserve]
  );

  const sizeLabel = recommendedSizeClass
    ? formatWh(recommendedSizeClass)
    : `${LARGEST_CLASS.toLocaleString("en-US")} Wh+`;

  const fillFraction = Math.min(1, recommendedCapacityWh / LARGEST_CLASS);
  const filledSegments = Math.max(1, Math.round(fillFraction * SEGMENT_COUNT));

  return (
    <div className="space-y-4">
      {/* Signature "device readout" panel, styled after a power station's own LCD screen. */}
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

      <div className="card card-pad">
        <h2 className="h3 text-base">Estimate runtime</h2>
        <p className="mt-1 text-sm text-muted">
          See how long a specific power station size would last.
        </p>
        <label className="mt-4 block text-sm">
          <span className="field-label">Power station size</span>
          <select
            value={runtimeSize}
            onChange={(e) => setRuntimeSize(Number.parseInt(e.target.value, 10))}
            className="field"
          >
            {SIZE_CLASSES_WH.map((size) => (
              <option key={size} value={size}>
                {formatWh(size)}
              </option>
            ))}
          </select>
        </label>
        <div className="mt-4 rounded-card bg-surface-muted p-4">
          <p className="field-label">Estimated runtime</p>
          <p className="mt-1 font-mono text-2xl font-semibold text-ink">{formatHours(runtimeHours)}</p>
        </div>
      </div>
    </div>
  );
}
