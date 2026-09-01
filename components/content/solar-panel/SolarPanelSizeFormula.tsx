import Link from "next/link";

export function SolarPanelSizeFormula() {
  return (
    <div>
      <h2 className="h2">The solar panel size formula</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>This calculator runs the charge-time math in reverse, in three steps:</p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            <span className="font-mono text-ink">
              energy needed (Wh) = capacity × (target% − current%)
            </span>
            <br />
            How many watt-hours you have to put back into the battery.
          </li>
          <li>
            <span className="font-mono text-ink">
              required effective input (W) = energy needed ÷ available peak sun hours
            </span>
            <br />
            If you set the deadline in days,{" "}
            <span className="font-mono text-ink">
              available peak sun hours = days × peak sun hours per day
            </span>
            .
          </li>
          <li>
            <span className="font-mono text-ink">
              required panel rating (W) = required effective input ÷ real-world efficiency
            </span>
            <br />
            Divide by the derating factor (say 0.7) to turn the effective watts you need into a
            nameplate rating to shop for.
          </li>
        </ol>
        <p>
          This is a linear approximation that assumes a steady effective input for every sun hour and
          ignores the slowdown near a full charge, so treat the answer as a floor and size up from it.
          To go the other way — from a panel you already own to a charge time — use the{" "}
          <Link href="/solar-charge-time-calculator" className="font-medium text-brand hover:underline">
            Solar Charge Time Calculator
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
