"use client";

import type { Device } from "@/lib/calculator/types";
import { DeviceRow } from "./DeviceRow";

interface DeviceListProps {
  devices: Device[];
  onChange: (id: string, patch: Partial<Device>) => void;
  onRemove: (id: string) => void;
}

export function DeviceList({ devices, onChange, onRemove }: DeviceListProps) {
  return (
    <div className="space-y-3">
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
  );
}
