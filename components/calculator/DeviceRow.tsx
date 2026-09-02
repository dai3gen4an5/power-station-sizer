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

const inputClasses = "field";

function parseNumber(value: string): number {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

/**
 * One device in the sizing list. Presents as a structured row that lines up
 * with the DeviceList column header on desktop, and as a compact labelled
 * group on mobile. Field labels are always in the DOM for assistive tech; on
 * desktop they are visually hidden because the column header carries them.
 */
export function DeviceRow({ device, index, canRemove, onChange, onRemove }: DeviceRowProps) {
  const dailyWh = getDeviceDailyWh(device);

  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-2 border-t border-hairline py-3 first:border-t-0 sm:grid-cols-[minmax(0,2.4fr)_1fr_1fr_0.7fr_minmax(0,1fr)_auto] sm:items-center sm:gap-y-0">
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
          aria-label={`Watts for ${device.name || `device ${index + 1}`}`}
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
          aria-label={`Hours per day for ${device.name || `device ${index + 1}`}`}
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
          aria-label={`Quantity for ${device.name || `device ${index + 1}`}`}
          onChange={(e) => onChange(device.id, { quantity: parseNumber(e.target.value) })}
          className={inputClasses}
        />
      </label>

      <div className="col-span-2 flex items-center justify-between gap-3 sm:col-span-1 sm:justify-end">
        <span className="field-label sm:sr-only">Per day</span>
        <span className="font-mono text-sm font-medium tabular-nums text-ink sm:text-right">
          {formatWh(dailyWh)}
        </span>
      </div>

      <div className="col-span-2 flex sm:col-span-1 sm:justify-end">
        {canRemove ? (
          <button
            type="button"
            onClick={() => onRemove(device.id)}
            aria-label={`Remove ${device.name || "device"}`}
            className="rounded-control border border-line px-2.5 py-1.5 text-xs font-medium text-muted transition-colors hover:border-red-300 hover:text-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Remove
          </button>
        ) : (
          <span className="hidden sm:block sm:w-[4.25rem]" aria-hidden="true" />
        )}
      </div>
    </div>
  );
}
