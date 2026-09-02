"use client";

import type { Device } from "@/lib/calculator/types";
import { formatWh } from "@/lib/utils/format";
import { DeviceRow } from "./DeviceRow";

interface DeviceListProps {
  devices: Device[];
  totalDailyWh: number;
  onChange: (id: string, patch: Partial<Device>) => void;
  onRemove: (id: string) => void;
}

export function DeviceList({ devices, totalDailyWh, onChange, onRemove }: DeviceListProps) {
  return (
    <div>
      {/* Column header — desktop only; DeviceRow keeps labels for mobile + a11y. */}
      <div
        className="hidden grid-cols-[minmax(0,2.6fr)_0.9fr_0.9fr_0.7fr_minmax(0,1fr)_auto] gap-x-4 px-1 pb-2 text-xs font-medium text-muted sm:grid"
        aria-hidden="true"
      >
        <span>Device</span>
        <span>Watts</span>
        <span>Hours / day</span>
        <span>Qty</span>
        <span className="text-right">Wh / day</span>
        <span className="w-[4.5rem]" />
      </div>

      <div className="divide-y divide-hairline rounded-card border border-line bg-surface">
        {devices.map((device, index) => (
          <DeviceRow
            key={device.id}
            device={device}
            index={index}
            canRemove={devices.length > 1}
            onChange={onChange}
            onRemove={onRemove}
          />
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between gap-3 rounded-card bg-brand-50 px-4 py-3">
        <span className="text-sm font-semibold text-ink">Total energy per day</span>
        <span className="font-mono text-lg font-semibold tabular-nums text-brand-700">
          {formatWh(totalDailyWh)}
        </span>
      </div>
    </div>
  );
}
