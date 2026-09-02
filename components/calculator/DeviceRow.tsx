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

const inputClasses = "field py-2.5";

function parseNumber(value: string): number {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

/**
 * One device in the sizing list. On desktop it lines up under the DeviceList
 * column header; on mobile it stacks into a compact labelled group. Field
 * labels stay in the DOM for assistive tech and are visually hidden on desktop
 * where the column header carries them.
 */
export function DeviceRow({ device, index, canRemove, onChange, onRemove }: DeviceRowProps) {
  const dailyWh = getDeviceDailyWh(device);
  const rowName = device.name || `device ${index + 1}`;

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-3 p-4 sm:grid-cols-[minmax(0,2.6fr)_0.9fr_0.9fr_0.7fr_minmax(0,1fr)_auto] sm:items-center sm:gap-y-0">
      <label className="col-span-2 block text-sm sm:col-span-1">
        <span className="field-label sm:sr-only">Device {index + 1}</span>
        <input
          type="text"
          value={device.name}
          onChange={(e) => onChange(device.id, { name: e.target.value })}
          placeholder="Device name"
          className={inputClasses}
        />
      </label>

      <label className="block text-sm">
        <span className="field-label sm:sr-only">Watts</span>
        <input
          type="number"
          inputMode="decimal"
          min={0}
          step={1}
          value={device.watts}
          aria-label={`Watts for ${rowName}`}
          onChange={(e) => onChange(device.id, { watts: parseNumber(e.target.value) })}
          className={inputClasses}
        />
      </label>

      <label className="block text-sm">
        <span className="field-label sm:sr-only">Hours/day</span>
        <input
          type="number"
          inputMode="decimal"
          min={0}
          max={24}
          step={0.5}
          value={device.hoursPerDay}
          aria-label={`Hours per day for ${rowName}`}
          onChange={(e) => onChange(device.id, { hoursPerDay: parseNumber(e.target.value) })}
          className={inputClasses}
        />
      </label>

      <label className="block text-sm">
        <span className="field-label sm:sr-only">Qty</span>
        <input
          type="number"
          inputMode="numeric"
          min={1}
          step={1}
          value={device.quantity}
          aria-label={`Quantity for ${rowName}`}
          onChange={(e) => onChange(device.id, { quantity: parseNumber(e.target.value) })}
          className={inputClasses}
        />
      </label>

      <div className="col-span-2 flex items-center justify-between gap-3 border-t border-hairline pt-2 sm:col-span-1 sm:justify-end sm:border-0 sm:pt-0">
        <span className="text-xs text-muted sm:sr-only">Energy per day</span>
        <span className="font-mono text-base font-semibold tabular-nums text-ink">
          {formatWh(dailyWh)}
        </span>
      </div>

      <div className="col-span-2 flex sm:col-span-1 sm:w-[4.5rem] sm:justify-end">
        {canRemove ? (
          <button
            type="button"
            onClick={() => onRemove(device.id)}
            aria-label={`Remove ${rowName}`}
            className="rounded-control px-2.5 py-1.5 text-xs font-medium text-muted transition-colors hover:bg-red-50 hover:text-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Remove
          </button>
        ) : null}
      </div>
    </div>
  );
}
