"use client";

import { getDeviceDailyWh } from "@/lib/calculator/calculations";
import type { Device } from "@/lib/calculator/types";
import { formatWh } from "@/lib/utils/format";
import { DEVICE_GRID } from "./DeviceList";
import { NumberField } from "./NumberField";

interface DeviceRowProps {
  device: Device;
  index: number;
  canRemove: boolean;
  onChange: (id: string, patch: Partial<Device>) => void;
  onRemove: (id: string) => void;
}

// Ghost cell: reads as table text, lifts to an outlined field on focus.
const nameCell =
  "w-full rounded-md bg-transparent px-1.5 py-1.5 text-sm font-medium text-ink outline-none transition-colors hover:bg-surface-muted/60 focus:bg-surface focus:ring-1 focus:ring-brand-300";
const numCell =
  "w-full rounded-md bg-transparent px-1.5 py-1.5 text-right text-[13px] tabular-nums text-ink outline-none transition-colors hover:bg-surface-muted/60 focus:bg-surface focus:ring-1 focus:ring-brand-300";
// Full-size field for the mobile stacked layout.
const mobileNum = "field py-2 text-right tabular-nums";

function RemoveButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="rounded-md p-1.5 text-muted transition-colors hover:bg-red-50 hover:text-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M6 6l8 8M14 6l-8 8" />
      </svg>
    </button>
  );
}

function commitOnEnter(e: React.KeyboardEvent<HTMLInputElement>) {
  if (e.key === "Enter") {
    e.preventDefault();
    e.currentTarget.blur();
  }
}

export function DeviceRow({ device, index, canRemove, onChange, onRemove }: DeviceRowProps) {
  const dailyWh = getDeviceDailyWh(device);
  const rowName = device.name || `device ${index + 1}`;

  return (
    <div className="px-3 py-2.5 sm:px-3">
      {/* ---- DESKTOP: one aligned row ---------------------------------- */}
      <div className={`hidden ${DEVICE_GRID} items-center sm:grid`}>
        <input
          type="text"
          value={device.name}
          placeholder="Device name"
          aria-label={`Name for device ${index + 1}`}
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          onChange={(e) => onChange(device.id, { name: e.target.value })}
          onFocus={(e) => e.currentTarget.select()}
          onKeyDown={commitOnEnter}
          className={nameCell}
        />
        <NumberField
          value={device.watts}
          min={0}
          fallback={0}
          ariaLabel={`Power in watts for ${rowName}`}
          onValueChange={(n) => onChange(device.id, { watts: n })}
          className={numCell}
        />
        <NumberField
          value={device.hoursPerDay}
          min={0}
          max={24}
          fallback={0}
          ariaLabel={`Hours per day for ${rowName}`}
          onValueChange={(n) => onChange(device.id, { hoursPerDay: n })}
          className={numCell}
        />
        <NumberField
          value={device.quantity}
          min={1}
          allowDecimal={false}
          fallback={1}
          ariaLabel={`Quantity for ${rowName}`}
          onValueChange={(n) => onChange(device.id, { quantity: n })}
          className={numCell}
        />
        <span className="whitespace-nowrap px-1 text-right font-mono text-[13px] font-semibold tabular-nums text-ink">
          {formatWh(dailyWh)}
        </span>
        <span className="flex justify-end">
          {canRemove ? <RemoveButton onClick={() => onRemove(device.id)} label={`Remove ${rowName}`} /> : null}
        </span>
      </div>

      {/* ---- MOBILE: stacked, labelled ------------------------------- */}
      <div className="space-y-2 sm:hidden">
        <label className="block text-sm">
          <span className="field-label">Device</span>
          <input
            type="text"
            value={device.name}
            placeholder="Device name"
            aria-label={`Name for device ${index + 1}`}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            onChange={(e) => onChange(device.id, { name: e.target.value })}
            onFocus={(e) => e.currentTarget.select()}
            onKeyDown={commitOnEnter}
            className="field py-2 font-medium"
          />
        </label>
        <div className="grid grid-cols-3 gap-2">
          <label className="block text-sm">
            <span className="field-label">Power (W)</span>
            <NumberField
              value={device.watts}
              min={0}
              fallback={0}
              ariaLabel={`Power in watts for ${rowName}`}
              onValueChange={(n) => onChange(device.id, { watts: n })}
              className={mobileNum}
            />
          </label>
          <label className="block text-sm">
            <span className="field-label">Usage (h)</span>
            <NumberField
              value={device.hoursPerDay}
              min={0}
              max={24}
              fallback={0}
              ariaLabel={`Hours per day for ${rowName}`}
              onValueChange={(n) => onChange(device.id, { hoursPerDay: n })}
              className={mobileNum}
            />
          </label>
          <label className="block text-sm">
            <span className="field-label">Qty</span>
            <NumberField
              value={device.quantity}
              min={1}
              allowDecimal={false}
              fallback={1}
              ariaLabel={`Quantity for ${rowName}`}
              onValueChange={(n) => onChange(device.id, { quantity: n })}
              className={mobileNum}
            />
          </label>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted">
            Daily energy:{" "}
            <span className="font-mono font-semibold tabular-nums text-ink">{formatWh(dailyWh)}</span>
          </span>
          {canRemove ? (
            <button
              type="button"
              onClick={() => onRemove(device.id)}
              className="rounded-md px-2 py-1 text-xs font-medium text-muted transition-colors hover:bg-red-50 hover:text-red-600"
            >
              Remove
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
