"use client";

import { useMemo, useState } from "react";
import { calculateResults } from "@/lib/calculator/calculations";
import { BLANK_DEVICE_DEFAULTS, DEFAULT_DEVICE, DEFAULT_SETTINGS } from "@/lib/calculator/constants";
import type { CalculatorSettings, Device, DevicePreset } from "@/lib/calculator/types";
import { DeviceList } from "./DeviceList";
import { PresetButtons } from "./PresetButtons";
import { ResultsPanel } from "./ResultsPanel";
import { SettingsPanel } from "./SettingsPanel";

let idCounter = 0;
function createDeviceId(): string {
  idCounter += 1;
  return `device-${idCounter}-${Date.now()}`;
}

export interface PowerStationCalculatorProps {
  /**
   * Optional starting devices, so dedicated pages (e.g. /cpap-power-calculator)
   * can pre-fill the calculator for their specific use case.
   */
  initialDevices?: Device[];
  /**
   * Optional starting settings (days, inverter efficiency, battery reserve).
   * Any field left unspecified falls back to DEFAULT_SETTINGS, so a niche
   * page only needs to override what's different for its use case.
   */
  initialSettings?: Partial<CalculatorSettings>;
  /**
   * Optional page-specific quick-add presets (e.g. CPAP power profiles).
   * Defaults to the shared common-device presets inside PresetButtons.
   */
  presets?: DevicePreset[];
  /** Optional override for the disclaimer shown below the preset buttons. */
  presetsNote?: string;
}

export function PowerStationCalculator({
  initialDevices,
  initialSettings,
  presets,
  presetsNote,
}: PowerStationCalculatorProps) {
  const [devices, setDevices] = useState<Device[]>(() =>
    initialDevices && initialDevices.length > 0 ? initialDevices : [{ ...DEFAULT_DEVICE }]
  );
  const [days, setDays] = useState(initialSettings?.days ?? DEFAULT_SETTINGS.days);
  const [inverterEfficiency, setInverterEfficiency] = useState(
    initialSettings?.inverterEfficiency ?? DEFAULT_SETTINGS.inverterEfficiency
  );
  const [batteryReserve, setBatteryReserve] = useState(
    initialSettings?.batteryReserve ?? DEFAULT_SETTINGS.batteryReserve
  );

  const results = useMemo(
    () => calculateResults(devices, { days, inverterEfficiency, batteryReserve }),
    [devices, days, inverterEfficiency, batteryReserve]
  );

  function updateDevice(id: string, patch: Partial<Device>) {
    setDevices((prev) => prev.map((device) => (device.id === id ? { ...device, ...patch } : device)));
  }

  function removeDevice(id: string) {
    setDevices((prev) => (prev.length > 1 ? prev.filter((device) => device.id !== id) : prev));
  }

  function addBlankDevice() {
    setDevices((prev) => [...prev, { id: createDeviceId(), ...BLANK_DEVICE_DEFAULTS }]);
  }

  function addPresetDevice(preset: DevicePreset) {
    setDevices((prev) => [...prev, { id: createDeviceId(), ...preset }]);
  }

  return (
    <section id="calculator" className="mx-auto max-w-5xl px-4 pb-16 pt-2 sm:px-6">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="space-y-6">
          <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
            <h2 className="font-display text-lg font-semibold text-ink">Your devices</h2>
            <p className="mt-1 text-sm text-ink/60">
              List everything you want to power. We&apos;ll add up the watt-hours automatically.
            </p>

            <div className="mt-5">
              <DeviceList devices={devices} onChange={updateDevice} onRemove={removeDevice} />
            </div>

            <button
              type="button"
              onClick={addBlankDevice}
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-dashed border-ink/25 px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              + Add another device
            </button>

            <div className="mt-6 border-t border-line pt-5">
              <PresetButtons onAdd={addPresetDevice} presets={presets} note={presetsNote} />
            </div>
          </div>

          <SettingsPanel
            days={days}
            inverterEfficiency={inverterEfficiency}
            batteryReserve={batteryReserve}
            onDaysChange={setDays}
            onEfficiencyChange={setInverterEfficiency}
            onReserveChange={setBatteryReserve}
          />
        </div>

        <div className="lg:sticky lg:top-6">
          <ResultsPanel results={results} inverterEfficiency={inverterEfficiency} batteryReserve={batteryReserve} />
        </div>
      </div>
    </section>
  );
}
