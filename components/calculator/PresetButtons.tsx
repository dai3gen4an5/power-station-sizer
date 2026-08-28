"use client";

import { DEVICE_PRESETS } from "@/lib/calculator/presets";
import type { DevicePreset } from "@/lib/calculator/types";

interface PresetButtonsProps {
  onAdd: (preset: DevicePreset) => void;
  /**
   * Optional page-specific preset list (e.g. CPAP power profiles on
   * /cpap-power-calculator). Defaults to the shared common-device presets.
   */
  presets?: DevicePreset[];
  /**
   * Optional override for the disclaimer shown below the preset buttons.
   * Defaults to the generic "wattages vary" note.
   */
  note?: string;
}

const DEFAULT_NOTE =
  "Wattages shown are typical examples. Actual power draw varies by brand and model — check your device's label or manual for its exact figure.";

export function PresetButtons({ onAdd, presets = DEVICE_PRESETS, note = DEFAULT_NOTE }: PresetButtonsProps) {
  return (
    <div>
      <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-ink/50">
        Quick add a common device
      </span>
      <div className="flex flex-wrap gap-2">
        {presets.map((preset) => (
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
      <p className="mt-2 text-xs text-ink/45">{note}</p>
    </div>
  );
}
