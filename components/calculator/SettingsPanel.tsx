"use client";

interface SettingsPanelProps {
  days: number;
  inverterEfficiency: number;
  batteryReserve: number;
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
  onDaysChange,
  onEfficiencyChange,
  onReserveChange,
}: SettingsPanelProps) {
  return (
    <div className="card card-pad">
      <div className="flex items-baseline gap-2.5">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-muted/70">
          Advanced assumptions
        </span>
      </div>
      <h2 className="mt-1 h3">Backup settings</h2>
      <p className="mt-1 text-sm text-muted">
        Fine-tune these for your situation &mdash; the defaults work well for most people.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
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
    </div>
  );
}
