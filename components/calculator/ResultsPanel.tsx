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
      <div className="rounded-[28px] bg-bezel p-2 shadow-sm">
        <div className="flex items-center justify-between px-3 pb-2 pt-1">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
            Recommended size
          </span>
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          </div>
        </div>

        <div className="rounded-3xl bg-screen p-6 text-center">
          <p className="font-mono text-4xl font-semibold tracking-tight text-screenInk sm:text-5xl">
            {formatWh(recommendedCapacityWh)}
          </p>
          <p className="mt-2 text-sm text-screenInk/70">
            For comfortable real-world use, look for a power station around{" "}
            <span className="font-semibold">{sizeLabel}</span>.
          </p>
        </div>

        <div className="px-3 py-4">
          <div className="flex gap-1" role="img" aria-label={`Capacity gauge, ${Math.round(fillFraction * 100)}% of scale`}>
            {Array.from({ length: SEGMENT_COUNT }).map((_, i) => (
              <span
                key={i}
                className={`h-3 flex-1 rounded-sm ${i < filledSegments ? "bg-brand" : "bg-white/10"}`}
              />
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 font-mono text-white">
            <div>
              <p className="text-[11px] uppercase tracking-wide text-white/45">Daily energy use</p>
              <p className="mt-0.5 text-base">{formatWh(totalDailyWh)}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wide text-white/45">Minimum capacity</p>
              <p className="mt-0.5 text-base">{formatWh(minimumCapacityWh)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
        <h2 className="font-display text-base font-semibold text-ink">Estimate runtime</h2>
        <p className="mt-1 text-sm text-ink/60">See how long a specific power station size would last.</p>
        <label className="mt-4 block text-sm">
          <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-ink/50">
            Power station size
          </span>
          <select
            value={runtimeSize}
            onChange={(e) => setRuntimeSize(Number.parseInt(e.target.value, 10))}
            className="w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            {SIZE_CLASSES_WH.map((size) => (
              <option key={size} value={size}>
                {formatWh(size)}
              </option>
            ))}
          </select>
        </label>
        <div className="mt-4 rounded-xl bg-paper p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-ink/50">Estimated runtime</p>
          <p className="mt-1 font-mono text-2xl font-semibold text-ink">{formatHours(runtimeHours)}</p>
        </div>
      </div>
    </div>
  );
}
