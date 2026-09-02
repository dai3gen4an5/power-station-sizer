"use client";

import { useMemo, useState } from "react";
import { calculateResults } from "@/lib/calculator/calculations";
import { BLANK_DEVICE_DEFAULTS, DEFAULT_DEVICE, DEFAULT_SETTINGS } from "@/lib/calculator/constants";
import type { CalculatorSettings, Device, DevicePreset } from "@/lib/calculator/types";
import { ProductRecommendations } from "@/components/recommendations/ProductRecommendations";
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
  /**
   * Whether to render the shared product-recommendation section below the result.
   * Defaults to true; a page that isn't about picking a power station size can
   * opt out without affecting any calculator logic.
   */
  showRecommendations?: boolean;
}

const STORY_STEPS = [
  "Add your devices",
  "See the daily energy",
  "Get a recommended size",
  "Compare matching units",
];

export function PowerStationCalculator({
  initialDevices,
  initialSettings,
  presets,
  presetsNote,
  showRecommendations = true,
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

  const settingsChanged =
    days !== (initialSettings?.days ?? DEFAULT_SETTINGS.days) ||
    inverterEfficiency !== (initialSettings?.inverterEfficiency ?? DEFAULT_SETTINGS.inverterEfficiency) ||
    batteryReserve !== (initialSettings?.batteryReserve ?? DEFAULT_SETTINGS.batteryReserve);

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
    <>
      <section id="calculator" className="container-page scroll-mt-20 pb-12 pt-10 sm:pb-16 sm:pt-14">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* ---- INPUTS ------------------------------------------------ */}
          <div className="space-y-6">
            <div className="feature-card p-6 sm:p-8">
              <h2 className="h2">Your devices</h2>
              <p className="mt-2 text-muted">
                List everything you want to power. The watt-hours add up as you type.
              </p>

              <div className="mt-6">
                <DeviceList
                  devices={devices}
                  totalDailyWh={results.totalDailyWh}
                  onChange={updateDevice}
                  onRemove={removeDevice}
                />
              </div>

              <button
                type="button"
                onClick={addBlankDevice}
                className="btn-secondary btn-lg mt-4 w-full"
              >
                + Add a device
              </button>

              <div className="mt-8 border-t border-hairline pt-6">
                <PresetButtons onAdd={addPresetDevice} presets={presets} note={presetsNote} />
              </div>
            </div>

            <SettingsPanel
              days={days}
              inverterEfficiency={inverterEfficiency}
              batteryReserve={batteryReserve}
              defaultOpen={settingsChanged}
              onDaysChange={setDays}
              onEfficiencyChange={setInverterEfficiency}
              onReserveChange={setBatteryReserve}
            />
          </div>

          {/* ---- LIVE RESULT ----------------------------------------- */}
          <div className="lg:sticky lg:top-24">
            <ResultsPanel
              results={results}
              inverterEfficiency={inverterEfficiency}
              batteryReserve={batteryReserve}
            />
          </div>
        </div>

        {showRecommendations && (
          <ol className="mt-10 hidden items-center gap-3 text-xs font-medium text-muted sm:flex">
            {STORY_STEPS.map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                <span className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-50 font-mono text-[10px] font-semibold text-brand-700">
                    {i + 1}
                  </span>
                  {step}
                </span>
                {i < STORY_STEPS.length - 1 && (
                  <span aria-hidden="true" className="text-line-strong">
                    &rarr;
                  </span>
                )}
              </li>
            ))}
          </ol>
        )}
      </section>

      {showRecommendations && (
        <ProductRecommendations
          recommendedCapacityWh={results.recommendedCapacityWh}
          recommendedSizeClass={results.recommendedSizeClass}
          className="pb-4"
        />
      )}
    </>
  );
}
