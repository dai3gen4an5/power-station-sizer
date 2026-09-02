"use client";

import { NumberField } from "./NumberField";

interface SettingsPanelProps {
  days: number;
  inverterEfficiency: number;
  batteryReserve: number;
  /** Open by default when a page pre-set non-default assumptions. */
  defaultOpen?: boolean;
  onDaysChange: (value: number) => void;
  onEfficiencyChange: (value: number) => void;
  onReserveChange: (value: number) => void;
}

const labelClasses = "field-label";
const fieldClasses = "field";

export function SettingsPanel({
  days,
  inverterEfficiency,
  batteryReserve,
  defaultOpen = false,
  onDaysChange,
  onEfficiencyChange,
  onReserveChange,
}: SettingsPanelProps) {
  return (
    <details open={defaultOpen} className="group card card-pad">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
        <span>
          <span className="text-sm font-semibold text-ink">Backup assumptions</span>
          <span className="ml-2 text-sm text-muted">
            {days}-day &middot; {inverterEfficiency}% efficiency &middot; {batteryReserve}% reserve
          </span>
        </span>
        <span
          aria-hidden="true"
          className="text-lg leading-none text-muted transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>

      <p className="mt-3 text-sm text-muted">
        The defaults suit most people. Adjust them if your situation is different.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <label className="block text-sm">
          <span className={labelClasses}>Number of days</span>
          <NumberField
            value={days}
            min={1}
            max={30}
            allowDecimal={false}
            fallback={1}
            ariaLabel="Number of days of backup power"
            onValueChange={onDaysChange}
            className={fieldClasses}
          />
          <span className="field-hint">How many days of backup power you want.</span>
        </label>

        <label className="block text-sm">
          <span className={labelClasses}>Inverter efficiency</span>
          <div className="flex items-center gap-2">
            <NumberField
              value={inverterEfficiency}
              min={50}
              max={100}
              allowDecimal={false}
              fallback={85}
              ariaLabel="Inverter efficiency percent"
              onValueChange={onEfficiencyChange}
              className={fieldClasses}
            />
            <span className="text-sm text-ink/50">%</span>
          </div>
          <span className="field-hint">Energy lost converting battery power to AC.</span>
        </label>

        <label className="block text-sm">
          <span className={labelClasses}>Battery reserve</span>
          <div className="flex items-center gap-2">
            <NumberField
              value={batteryReserve}
              min={0}
              max={50}
              allowDecimal={false}
              fallback={20}
              ariaLabel="Battery reserve percent"
              onValueChange={onReserveChange}
              className={fieldClasses}
            />
            <span className="text-sm text-ink/50">%</span>
          </div>
          <span className="field-hint">Buffer left unused to protect battery life.</span>
        </label>
      </div>
    </details>
  );
}
