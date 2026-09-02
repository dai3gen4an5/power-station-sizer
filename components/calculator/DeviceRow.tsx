"use client";

import { getDeviceDailyWh } from "@/lib/calculator/calculations";
import type { Device } from "@/lib/calculator/types";
import { formatWh } from "@/lib/utils/format";
import { NumberField } from "./NumberField";

interface DeviceRowProps {
  device: Device;
  index: number;
  canRemove: boolean;
  onChange: (id: string, patch: Partial<Device>) => void;
  onRemove: (id: string) => void;
}

// Ghost cell: reads as plain table text, lifts to an outlined field on focus.
const cell =
  "w-full rounded-md bg-transparent px-2 py-1.5 text-sm text-ink outline-none transition-colors hover:bg-surface-muted/60 focus:bg-surface focus:ring-1 focus:ring-brand-300";
const numCell = `${cell} sm:text-right tabular-nums`;

export function DeviceRow({ device, index, canRemove, onChange, onRemove }: DeviceRowProps) {
  const dailyWh = getDeviceDailyWh(device);
  const rowName = device.name || `device ${index + 1}`;

  return (
    <div className="grid grid-cols-1 gap-y-2 border-t border-hairline px-3 py-3 first:border-t-0 sm:grid-cols-[minmax(0,2.4fr)_0.85fr_0.85fr_0.65fr_minmax(0,0.9fr)_2rem] sm:items-center sm:gap-x-3 sm:gap-y-0 sm:py-2">
      <label className="text-sm sm:contents">
        <span className="field-label sm:sr-only">Device {index + 1}</span>
        <input
          type="text"
          value={device.name}
          placeholder="Device name"
          aria-label={`Name for device ${index + 1}`}
          onChange={(e) => onChange(device.id, { name: e.target.value })}
          onFocus={(e) => e.currentTarget.select()}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              e.currentTarget.blur();
            }
          }}
          className={`${cell} font-medium`}
        />
      </label>

      <div className="grid grid-cols-3 gap-2 sm:contents">
        <label className="text-sm sm:contents">
          <span className="field-label sm:sr-only">Watts</span>
          <NumberField
            value={device.watts}
            min={0}
            fallback={0}
            ariaLabel={`Watts for ${rowName}`}
            onValueChange={(n) => onChange(device.id, { watts: n })}
            className={numCell}
          />
        </label>

        <label className="text-sm sm:contents">
          <span className="field-label sm:sr-only">Hours/day</span>
          <NumberField
            value={device.hoursPerDay}
            min={0}
            max={24}
            fallback={0}
            ariaLabel={`Hours per day for ${rowName}`}
            onValueChange={(n) => onChange(device.id, { hoursPerDay: n })}
            className={numCell}
          />
        </label>

        <label className="text-sm sm:contents">
          <span className="field-label sm:sr-only">Qty</span>
          <NumberField
            value={device.quantity}
            min={1}
            allowDecimal={false}
            fallback={1}
            ariaLabel={`Quantity for ${rowName}`}
            onValueChange={(n) => onChange(device.id, { quantity: n })}
            className={numCell}
          />
        </label>
      </div>

      <div className="flex items-center justify-between border-t border-hairline pt-2 sm:block sm:border-0 sm:pt-0 sm:text-right">
        <span className="text-xs text-muted sm:sr-only">Energy per day</span>
        <span className="px-2 font-mono text-sm font-semibold tabular-nums text-ink">
          {formatWh(dailyWh)}
        </span>
      </div>

      <div className="hidden justify-end sm:flex">
        {canRemove ? (
          <button
            type="button"
            onClick={() => onRemove(device.id)}
            aria-label={`Remove ${rowName}`}
            className="rounded-md p-1.5 text-muted transition-colors hover:bg-red-50 hover:text-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            >
              <path d="M6 6l8 8M14 6l-8 8" />
            </svg>
          </button>
        ) : null}
      </div>

      {canRemove ? (
        <button
          type="button"
          onClick={() => onRemove(device.id)}
          className="justify-self-start rounded-md px-2 py-1 text-xs font-medium text-muted transition-colors hover:bg-red-50 hover:text-red-600 sm:hidden"
        >
          Remove device
        </button>
      ) : null}
    </div>
  );
}
