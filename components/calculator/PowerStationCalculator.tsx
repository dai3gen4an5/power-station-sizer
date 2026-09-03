"use client";

import { useMemo, useState } from "react";
import { calculateResults } from "@/lib/calculator/calculations";
import { BLANK_DEVICE_DEFAULTS, DEFAULT_DEVICE, DEFAULT_SETTINGS } from "@/lib/calculator/constants";
import type { CalculatorSettings, Device, DevicePreset } from "@/lib/calculator/types";
import { ProductRecommendations } from "@/components/recommendations/ProductRecommendations";
import { PopularCalculators } from "@/components/home/PopularCalculators";
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
  /** Optional starting settings; unspecified fields fall back to DEFAULT_SETTINGS. */
  initialSettings?: Partial<CalculatorSettings>;
  /** Optional page-specific quick-add presets (e.g. CPAP power profiles). */
  presets?: DevicePreset[];
  /** Optional override for the disclaimer shown below the preset buttons. */
  presetsNote?: string;
  /** Render the shared product-recommendation section below the result. */
  showRecommendations?: boolean;
  /** Render the "Popular calculators" shortcut strip (homepage only). */
  showPopularCalculators?: boolean;
}

export function PowerStationCalculator({
  initialDevices,
  initialSettings,
  presets,
  presetsNote,
  showRecommendations = true,
  showPopularCalculators = false,
}: PowerStationCalculatorProps) {
  const allowEmpty = initialDevices !== undefined && initialDevices.length === 0;
  const [devices, setDevices] = useState<Device[]>(() =>
    initialDevices !== undefined ? initialDevices : [{ ...DEFAULT_DEVICE }]
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
    setDevices((prev) =>
      prev.length > 1 || allowEmpty ? prev.filter((device) => device.id !== id) : prev
    );
  }
  function addBlankDevice() {
    setDevices((prev) => [...prev, { id: createDeviceId(), ...BLANK_DEVICE_DEFAULTS }]);
  }
  function addPresetDevice(preset: DevicePreset) {
    setDevices((prev) => [...prev, { id: createDeviceId(), ...preset }]);
  }

  return (
    <>
      <section id="calculator" className="container-wide scroll-mt-20 pb-8 pt-8 sm:pt-10">
        <div className="grid gap-4 lg:grid-cols-[1.03fr_0.97fr] lg:items-start">
          {/* LEFT — live result summary */}
          <div>
            <ResultsPanel
              results={results}
              inverterEfficiency={inverterEfficiency}
              batteryReserve={batteryReserve}
            />
          </div>

          {/* RIGHT — device editor */}
          <div className="space-y-4">
            <div className="feature-card p-5 sm:p-6">
              <h2 className="h2 text-xl">Your devices</h2>
              <p className="mt-1.5 text-sm text-muted">
                Edit any value &mdash; the summary updates as you type.
              </p>

              <div className="mt-4">
                <DeviceList
                  devices={devices}
                  allowEmpty={allowEmpty}
                  totalDailyWh={results.totalDailyWh}
                  onChange={updateDevice}
                  onRemove={removeDevice}
                />
              </div>

              <button
                type="button"
                onClick={addBlankDevice}
                className="btn-secondary mt-3 w-full"
              >
                + Add a device
              </button>

              <div className="mt-6 border-t border-hairline pt-5">
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
        </div>
      </section>

      {showPopularCalculators && <PopularCalculators />}

      {showRecommendations && devices.length > 0 && (
        <ProductRecommendations
          recommendedCapacityWh={results.recommendedCapacityWh}
          recommendedSizeClass={results.recommendedSizeClass}
          className="pb-4"
        />
      )}
    </>
  );
}
