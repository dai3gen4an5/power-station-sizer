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
    <div className="overflow-hidden rounded-xl border border-line">
      {/* Column header — desktop only; DeviceRow keeps labels for mobile + a11y. */}
      <div
        className="hidden grid-cols-[minmax(0,2.4fr)_0.85fr_0.85fr_0.65fr_minmax(0,0.9fr)_2rem] gap-x-3 border-b border-line bg-surface-muted/50 px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted sm:grid"
        aria-hidden="true"
      >
        <span className="px-2">Device</span>
        <span className="px-2 text-right">Power</span>
        <span className="px-2 text-right">Usage</span>
        <span className="px-2 text-right">Qty</span>
        <span className="px-2 text-right">Daily Wh</span>
        <span />
      </div>

      <div className="bg-surface">
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

      <div className="flex items-center justify-between gap-3 border-t border-line bg-surface px-5 py-3">
        <span className="text-sm font-semibold text-ink">Total</span>
        <span className="font-mono text-base font-semibold tabular-nums text-brand-700">
          {formatWh(totalDailyWh)}
          <span className="ml-1 text-xs font-medium text-muted">/ day</span>
        </span>
      </div>
    </div>
  );
}
