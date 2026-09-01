import { calculateResults } from "@/lib/calculator/calculations";
import { DEFAULT_SETTINGS } from "@/lib/calculator/constants";
import { formatWh } from "@/lib/utils/format";

// A concrete, deterministic sample run through the real calculator engine — not
// marketing numbers. Shown as a preview of what the tool produces; decorative,
// so it is hidden from assistive tech (the interactive calculator follows).
const SAMPLE_DEVICES = [
  { id: "s-fridge", name: "Refrigerator", watts: 150, hoursPerDay: 8, quantity: 1 },
  { id: "s-cpap", name: "CPAP machine", watts: 40, hoursPerDay: 8, quantity: 1 },
  { id: "s-phone", name: "Phone + Wi-Fi", watts: 20, hoursPerDay: 6, quantity: 1 },
];

export function HeroExampleReadout() {
  const results = calculateResults(SAMPLE_DEVICES, DEFAULT_SETTINGS);
  const sizeLabel = results.recommendedSizeClass
    ? formatWh(results.recommendedSizeClass)
    : "5,000 Wh+";

  return (
    <div aria-hidden="true" className="select-none">
      <div className="panel-hardware">
        <div className="flex items-center justify-between px-3 pb-2 pt-1.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
            Example result
          </span>
          <span className="flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-led shadow-[0_0_6px_theme(colors.led)]" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
          </span>
        </div>

        <div className="panel-screen p-5 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-screenInk/60">
            Recommended capacity
          </p>
          <p className="mt-1 font-mono text-4xl font-semibold tracking-tight text-screenInk">
            {formatWh(results.recommendedCapacityWh)}
          </p>
          <p className="mt-1 text-xs text-screenInk/70">
            Shop around <span className="font-semibold">{sizeLabel}</span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 px-3 py-3 font-mono text-white">
          <div className="rounded-xl bg-white/[0.04] px-3 py-2">
            <p className="text-[10px] uppercase tracking-wide text-white/40">Daily energy</p>
            <p className="mt-0.5 text-sm">{formatWh(results.totalDailyWh)}</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] px-3 py-2">
            <p className="text-[10px] uppercase tracking-wide text-white/40">Before reserve</p>
            <p className="mt-0.5 text-sm">{formatWh(results.minimumCapacityWh)}</p>
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-muted">
        Sample: refrigerator + CPAP + phone, 1 day of backup.
      </p>
    </div>
  );
}
