export function RcBuyingChecklist() {
  return (
    <div>
      <h2 className="h2">Buying checklist</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>Check every item against your rice cooker and your situation before buying:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Actual rice cooker input watts</span> from the
            rating label or a watt meter &mdash; not a guess from the cup or litre capacity.
          </li>
          <li>
            <span className="font-medium text-ink">Continuous AC output (W)</span> of the power
            station at or above the cooker&apos;s input watts, with headroom. Usually easy for a
            resistive model; check it for IH and pressure.
          </li>
          <li>
            <span className="font-medium text-ink">Battery capacity (Wh)</span> at least the
            recommended cook-cycle figure from the calculator, plus a margin for keep-warm.
          </li>
          <li>
            <span className="font-medium text-ink">AC voltage</span> matches the cooker (most
            portable models are 120V; confirm yours).
          </li>
          <li>
            <span className="font-medium text-ink">Outlet compatibility</span> an AC outlet the plug
            fits, on a pure sine wave inverter.
          </li>
          <li>
            <span className="font-medium text-ink">Cook time</span> for the rice type and amount you
            usually make.
          </li>
          <li>
            <span className="font-medium text-ink">Keep-warm use</span> &mdash; how long you leave it
            on after the cook.
          </li>
          <li>
            <span className="font-medium text-ink">Keep-warm wattage</span>, if the manufacturer or a
            watt meter gives you one, for the extra-energy estimate.
          </li>
          <li>
            <span className="font-medium text-ink">Recharge time</span> from wall, vehicle, or solar,
            so the unit is ready for the next meal.
          </li>
        </ul>
        <p className="panel-note">
          A power station in the right range is a candidate, not a confirmation. Only its continuous
          AC output, checked against your cooker&apos;s watts, plus enough capacity for the cook and
          keep-warm, tells you it will run.
        </p>
      </div>
    </div>
  );
}
