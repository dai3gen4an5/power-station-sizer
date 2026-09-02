"use client";

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

const inputClasses = "field";
const labelClasses = "field-label";

function clamp(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, value));
}

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
          <input
            type="number"
            inputMode="numeric"
            min={1}
            max={30}
            step={1}
            value={days}
            onChange={(e) => onDaysChange(clamp(Number.parseFloat(e.target.value), 1, 30))}
            className={inputClasses}
          />
          <span className="field-hint">How many days of backup power you want.</span>
        </label>

        <label className="block text-sm">
          <span className={labelClasses}>Inverter efficiency</span>
          <div className="flex items-center gap-2">
            <input
              type="number"
              inputMode="numeric"
              min={50}
              max={100}
              step={1}
              value={inverterEfficiency}
              onChange={(e) => onEfficiencyChange(clamp(Number.parseFloat(e.target.value), 50, 100))}
              className={inputClasses}
            />
            <span className="text-sm text-ink/50">%</span>
          </div>
          <span className="field-hint">Energy lost converting battery power to AC.</span>
        </label>

        <label className="block text-sm">
          <span className={labelClasses}>Battery reserve</span>
          <div className="flex items-center gap-2">
            <input
              type="number"
              inputMode="numeric"
              min={0}
              max={50}
              step={5}
              value={batteryReserve}
              onChange={(e) => onReserveChange(clamp(Number.parseFloat(e.target.value), 0, 50))}
              className={inputClasses}
            />
            <span className="text-sm text-ink/50">%</span>
          </div>
          <span className="field-hint">Buffer left unused to protect battery life.</span>
        </label>
      </div>
    </details>
  );
}
