import { calculateResults, estimateRuntimeHours } from "@/lib/calculator/calculations";
import { DEFAULT_SETTINGS } from "@/lib/calculator/constants";
import { formatHours, formatWh } from "@/lib/utils/format";

// A concrete, deterministic sample run through the real calculator engine — not
// marketing numbers. A preview of what the tool produces; decorative, so it is
// hidden from assistive tech (the interactive calculator follows).
const SAMPLE_DEVICES = [
  { id: "s-fridge", name: "Refrigerator", watts: 150, hoursPerDay: 8, quantity: 1 },
  { id: "s-cpap", name: "CPAP machine", watts: 40, hoursPerDay: 8, quantity: 1 },
  { id: "s-phone", name: "Phone + Wi-Fi", watts: 20, hoursPerDay: 6, quantity: 1 },
];

export function HeroExampleReadout() {
  const results = calculateResults(SAMPLE_DEVICES, DEFAULT_SETTINGS);
  const sizeClass = results.recommendedSizeClass ?? 5000;
  const sizeLabel = results.recommendedSizeClass ? formatWh(results.recommendedSizeClass) : "5,000 Wh+";
  const runtime = estimateRuntimeHours(
    sizeClass,
    results.totalDailyWh,
    DEFAULT_SETTINGS.inverterEfficiency,
    DEFAULT_SETTINGS.batteryReserve
  );

  return (
    <div aria-hidden="true" className="feature-card select-none p-6 shadow-raised">
      <p className="eyebrow">Example result</p>

      <p className="mt-3 text-sm text-muted">Recommended capacity</p>
      <p className="font-mono text-5xl font-semibold leading-none tracking-tight tabular-nums text-brand-700">
        {formatWh(results.recommendedCapacityWh)}
      </p>
      <p className="mt-1.5 text-xs text-muted">
        Shop around <span className="font-semibold text-ink">{sizeLabel}</span>
      </p>

      <div className="mt-5 grid grid-cols-2 gap-3 border-t border-hairline pt-4">
        <div>
          <p className="text-xs text-muted">Daily usage</p>
          <p className="mt-0.5 font-mono text-lg font-semibold tabular-nums text-ink">
            {formatWh(results.totalDailyWh)}
          </p>
        </div>
        <div>
          <p className="text-xs text-muted">Estimated runtime</p>
          <p className="mt-0.5 font-mono text-lg font-semibold tabular-nums text-ink">
            {formatHours(runtime)}
          </p>
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-muted">
        Sample: refrigerator + CPAP + phone, 1 day of backup.
      </p>
    </div>
  );
}
