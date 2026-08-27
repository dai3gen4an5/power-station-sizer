"use client";

import { DEVICE_PRESETS } from "@/lib/calculator/presets";
import type { DevicePreset } from "@/lib/calculator/types";

interface PresetButtonsProps {
  onAdd: (preset: DevicePreset) => void;
}

export function PresetButtons({ onAdd }: PresetButtonsProps) {
  return (
    <div>
      <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-ink/50">
        Quick add a common device
      </span>
      <div className="flex flex-wrap gap-2">
        {DEVICE_PRESETS.map((preset) => (
          <button
            key={preset.name}
            type="button"
            onClick={() => onAdd(preset)}
            className="rounded-full border border-line bg-white px-3 py-1.5 text-sm font-medium text-ink/80 transition-colors hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            + {preset.name}
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs text-ink/45">
        Wattages shown are typical examples. Actual power draw varies by brand and model — check your
        device&apos;s label or manual for its exact figure.
      </p>
    </div>
  );
}
