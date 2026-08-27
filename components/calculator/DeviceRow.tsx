"use client";

import { getDeviceDailyWh } from "@/lib/calculator/calculations";
import type { Device } from "@/lib/calculator/types";
import { formatWh } from "@/lib/utils/format";

interface DeviceRowProps {
  device: Device;
  index: number;
  canRemove: boolean;
  onChange: (id: string, patch: Partial<Device>) => void;
  onRemove: (id: string) => void;
}

const inputClasses =
  "w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
const labelClasses = "mb-1 block text-xs font-medium uppercase tracking-wide text-ink/50";

function parseNumber(value: string): number {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

export function DeviceRow({ device, index, canRemove, onChange, onRemove }: DeviceRowProps) {
  const dailyWh = getDeviceDailyWh(device);

  return (
    <div className="rounded-xl border border-line bg-paper/60 p-3 sm:p-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-[2fr_1fr_1fr_0.7fr_auto] sm:items-end">
        <label className="col-span-2 block text-sm sm:col-span-1">
          <span className={labelClasses}>Device {index + 1}</span>
          <input
            type="text"
            value={device.name}
            onChange={(e) => onChange(device.id, { name: e.target.value })}
            placeholder="Device name"
            className={inputClasses}
          />
        </label>

        <label className="block text-sm">
          <span className={labelClasses}>Watts</span>
          <input
            type="number"
            inputMode="decimal"
            min={0}
            step={1}
            value={device.watts}
            onChange={(e) => onChange(device.id, { watts: parseNumber(e.target.value) })}
            className={inputClasses}
          />
        </label>

        <label className="block text-sm">
          <span className={labelClasses}>Hours/day</span>
          <input
            type="number"
            inputMode="decimal"
            min={0}
            max={24}
            step={0.5}
            value={device.hoursPerDay}
            onChange={(e) => onChange(device.id, { hoursPerDay: parseNumber(e.target.value) })}
            className={inputClasses}
          />
        </label>

        <label className="block text-sm">
          <span className={labelClasses}>Qty</span>
          <input
            type="number"
            inputMode="numeric"
            min={1}
            step={1}
            value={device.quantity}
            onChange={(e) => onChange(device.id, { quantity: parseNumber(e.target.value) })}
            className={inputClasses}
          />
        </label>

        <div className="col-span-2 flex items-center justify-between gap-3 sm:col-span-1 sm:justify-end">
          <span className="font-mono text-xs text-ink/60 sm:hidden">{formatWh(dailyWh)}/day</span>
          {canRemove ? (
            <button
              type="button"
              onClick={() => onRemove(device.id)}
              aria-label={`Remove ${device.name || "device"}`}
              className="rounded-lg border border-line px-3 py-2 text-sm text-ink/60 transition-colors hover:border-red-300 hover:text-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Remove
            </button>
          ) : null}
        </div>
      </div>
      <p className="mt-2 hidden font-mono text-xs text-ink/50 sm:block">{formatWh(dailyWh)} per day</p>
    </div>
  );
}
