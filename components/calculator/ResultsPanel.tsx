"use client";

import { useMemo, useState, type ReactNode } from "react";
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

// Stated assumption for the "solar recharge" figure: a common 200 W portable
// panel at the project's default 70% real-world derating. The main calculator
// does not collect solar inputs, so this is illustrative, with the assumption
// shown next to it — the Solar Charge Time Calculator takes real inputs.
const SOLAR_PANEL_W = 200;
const SOLAR_EFFICIENCY_PCT = 70;

function Tile({
  icon,
  accent,
  label,
  value,
  caption,
  emphasise,
  children,
}: {
  icon: ReactNode;
  accent: "brand" | "amber";
  label: string;
  value: string;
  caption: string;
  emphasise?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-line bg-surface p-4 sm:p-5">
      <span
        aria-hidden="true"
        className={`flex h-9 w-9 items-center justify-center rounded-full ${
          accent === "amber" ? "bg-amber-50 text-amber-600" : "bg-brand-50 text-brand-600"
        }`}
      >
        {icon}
      </span>
      <p className="mt-3 text-sm text-muted">{label}</p>
      <p
        className={`mt-0.5 whitespace-nowrap font-mono text-[1.7rem] font-semibold leading-none tracking-tight tabular-nums sm:text-3xl ${
          emphasise ? "text-brand-700" : "text-ink"
        }`}
      >
        {value}
      </p>
      <p className="mt-1.5 text-xs text-muted">{caption}</p>
      {children}
    </div>
  );
}

const iconClass = "h-5 w-5";

export function ResultsPanel({ results, inverterEfficiency, batteryReserve }: ResultsPanelProps) {
  const { totalDailyWh, recommendedCapacityWh, recommendedSizeClass } = results;

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
  const hasLoad = totalDailyWh > 0;

  return (
    <div className="feature-card p-6 sm:p-8">
      <h2 className="h2 text-xl">Your power needs summary</h2>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Tile
          accent="brand"
          label="Daily usage"
          value={formatWh(totalDailyWh)}
          caption="Total energy per day"
          icon={
            <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h4l3 8 4-16 3 8h4" />
            </svg>
          }
        />
        <Tile
          accent="brand"
          emphasise
          label="Recommended capacity"
          value={hasLoad ? formatWh(recommendedCapacityWh) : "—"}
          caption={hasLoad ? `Shop around ${sizeLabel}` : "Add a device to size it"}
          icon={
            <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="18" height="10" rx="2" />
              <path d="M22 10v4M6 10v4" />
            </svg>
          }
        />
        <Tile
          accent="brand"
          label="Estimated runtime"
          value={hasLoad ? formatHours(runtimeHours) : "—"}
          caption={`For a ${formatWh(runtimeSize)} unit`}
          icon={
            <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 3" />
            </svg>
          }
        >
          <label className="mt-2 block">
            <span className="sr-only">Power station size for the runtime estimate</span>
            <select
              value={runtimeSize}
              onChange={(e) => setRuntimeSize(Number.parseInt(e.target.value, 10))}
              className="field py-1 text-xs"
            >
              {SIZE_CLASSES_WH.map((size) => (
                <option key={size} value={size}>
                  {formatWh(size)}
                </option>
              ))}
            </select>
          </label>
        </Tile>
        <Tile
          accent="amber"
          label="Solar recharge time"
          value={solarHours > 0 ? formatHours(solarHours) : "—"}
          caption={`With a ${SOLAR_PANEL_W} W panel in good sun`}
          icon={
            <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2 2M17.1 17.1l2 2M19.1 4.9l-2 2M6.9 17.1l-2 2" />
            </svg>
          }
        >
          <a
            href="/solar-charge-time-calculator"
            className="mt-2 inline-block text-xs font-medium text-brand-700 hover:underline"
          >
            Use real panel figures &rarr;
          </a>
        </Tile>
      </div>

      <div
        className={`mt-5 flex items-start gap-3 rounded-xl px-4 py-3 ${
          hasLoad ? "bg-brand-50" : "bg-surface-muted"
        }`}
      >
        {hasLoad ? (
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 00-1.4 1.4l2 2a1 1 0 001.4 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        ) : null}
        <p className="text-sm leading-relaxed">
          {hasLoad ? (
            <>
              <span className="font-semibold text-brand-800">You&apos;re all set.</span>{" "}
              <span className="text-brand-800/90">
                A {sizeLabel} power station covers your {formatWh(totalDailyWh)}/day with the{" "}
                {batteryReserve}% reserve and {inverterEfficiency}% inverter efficiency you set.
                Adjust your devices or usage to see it change.
              </span>
            </>
          ) : (
            <span className="text-muted">
              Add a device to see your recommended capacity, runtime, and solar recharge time.
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
