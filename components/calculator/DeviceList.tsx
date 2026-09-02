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
    <div className="rounded-card border border-line">
      {/* Column header — desktop only; DeviceRow labels cover mobile + a11y. */}
      <div
        className="hidden grid-cols-[minmax(0,2.4fr)_1fr_1fr_0.7fr_minmax(0,1fr)_auto] gap-x-3 border-b border-line bg-surface-muted/60 px-3 py-2 sm:grid"
        aria-hidden="true"
      >
        <span className="field-label">Device</span>
        <span className="field-label">Watts</span>
        <span className="field-label">Hrs/day</span>
        <span className="field-label">Qty</span>
        <span className="field-label text-right">Wh/day</span>
        <span className="field-label w-[4.25rem]" />
      </div>

      <div className="px-3">
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

      <div className="flex items-center justify-between gap-3 border-t border-line bg-surface-muted/60 px-3 py-2.5">
        <span className="text-sm font-medium text-ink">Total energy per day</span>
        <span className="font-mono text-base font-semibold tabular-nums text-ink">
          {formatWh(totalDailyWh)}
        </span>
      </div>
    </div>
  );
}
