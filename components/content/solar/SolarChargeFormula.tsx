export function SolarChargeFormula() {
  return (
    <div>
      <h2 className="h2">The solar charge time formula</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>The estimate is built from three short steps:</p>
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
              effective input (W) = panel watts × real-world efficiency
            </span>
            <br />
            The rated panel power scaled down to what you actually collect.
          </li>
          <li>
            <span className="font-mono text-ink">
              charge time (hours) = energy needed ÷ effective input
            </span>
            <br />
            And, if you know your site&apos;s{" "}
            <span className="font-mono text-ink">
              days ≈ charge time ÷ peak sun hours per day
            </span>
            .
          </li>
        </ol>
        <p>
          This is a linear approximation. It assumes the panel delivers a steady effective wattage for
          every hour of charging, which real sunlight never quite does, and it doesn&apos;t model the
          slowdown that usually happens in the last stretch before full. It&apos;s a solid planning
          number, not a stopwatch.
        </p>
      </div>
    </div>
  );
}
