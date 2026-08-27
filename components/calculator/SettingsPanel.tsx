"use client";

interface SettingsPanelProps {
  days: number;
  inverterEfficiency: number;
  batteryReserve: number;
  onDaysChange: (value: number) => void;
  onEfficiencyChange: (value: number) => void;
  onReserveChange: (value: number) => void;
}

const inputClasses =
  "w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
const labelClasses = "mb-1 block text-xs font-medium uppercase tracking-wide text-ink/50";

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
    <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
      <h2 className="font-display text-lg font-semibold text-ink">Backup settings</h2>
      <p className="mt-1 text-sm text-ink/60">
        Fine-tune these for your situation — the defaults work well for most people.
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
          <span className="mt-1 block text-xs text-ink/45">How many days of backup power you want.</span>
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
          <span className="mt-1 block text-xs text-ink/45">Energy lost converting battery power to AC.</span>
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
          <span className="mt-1 block text-xs text-ink/45">Buffer left unused to protect battery life.</span>
        </label>
      </div>
    </div>
  );
}
