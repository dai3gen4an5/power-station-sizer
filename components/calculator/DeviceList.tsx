"use client";

import type { Device } from "@/lib/calculator/types";
import { formatWh } from "@/lib/utils/format";
import { DeviceRow } from "./DeviceRow";

interface DeviceListProps {
  devices: Device[];
  allowEmpty?: boolean;
  totalDailyWh: number;
  onChange: (id: string, patch: Partial<Device>) => void;
  onRemove: (id: string) => void;
}

/**
 * Explicit desktop grid tracks, shared verbatim by the header here and every
 * DeviceRow so columns line up exactly. Widths are sized for realistic values:
 * "1500" (Power), "12.5" (Usage), "10" (Qty), "12,000 Wh" on one line (Daily Wh).
 */
export const DEVICE_GRID =
  "grid-cols-[minmax(140px,1fr)_80px_80px_50px_104px_30px] gap-x-2";

export function DeviceList({ devices, allowEmpty = false, totalDailyWh, onChange, onRemove }: DeviceListProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface">
      {/* Column header — desktop only. */}
      <div
        className={`hidden ${DEVICE_GRID} items-center border-b border-line bg-surface-muted/50 px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted sm:grid`}
        aria-hidden="true"
      >
        <span className="pl-1">Device</span>
        <span className="text-right">Power</span>
        <span className="text-right">Usage</span>
        <span className="text-right">Qty</span>
        <span className="text-right">Daily Wh</span>
        <span />
      </div>

      <div className="divide-y divide-hairline">
        {devices.length === 0 && (
          <div className="px-4 py-8 text-center">
            <p className="text-sm font-semibold text-ink">Add your first device to start calculating.</p>
            <p className="mt-1 text-xs text-muted">Use a quick-add option below or add a custom device.</p>
          </div>
        )}
        {devices.map((device, index) => (
          <DeviceRow
            key={device.id}
            device={device}
            index={index}
            canRemove={devices.length > 1 || allowEmpty}
            onChange={onChange}
            onRemove={onRemove}
          />
        ))}
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-line px-4 py-3">
        <span className="text-sm font-semibold text-ink">Total</span>
        <span className="whitespace-nowrap font-mono text-base font-semibold tabular-nums text-brand-700">
          {formatWh(totalDailyWh)}
          <span className="ml-1 text-xs font-medium text-muted">/ day</span>
        </span>
      </div>
    </div>
  );
}
