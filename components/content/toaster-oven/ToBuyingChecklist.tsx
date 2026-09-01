export function ToBuyingChecklist() {
  return (
    <div>
      <h2 className="h2">Buying checklist</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>Check every item against your toaster oven and your situation before buying:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Actual toaster oven input watts</span> from the
            rating label or a watt meter &mdash; not a guess from the oven size.
          </li>
          <li>
            <span className="font-medium text-ink">Continuous AC output (W)</span> of the power
            station at or above the oven&apos;s input watts, with headroom. This decides whether it
            runs at all.
          </li>
          <li>
            <span className="font-medium text-ink">Battery capacity (Wh)</span> at least the
            recommended figure from the calculator, with margin for extra batches.
          </li>
          <li>
            <span className="font-medium text-ink">AC voltage</span> matches the oven (most
            countertop models are 120V; confirm yours).
          </li>
          <li>
            <span className="font-medium text-ink">Outlet compatibility</span> an AC outlet the plug
            fits, on a pure sine wave inverter.
          </li>
          <li>
            <span className="font-medium text-ink">Cook duration</span> for a typical bake, plus
            preheat.
          </li>
          <li>
            <span className="font-medium text-ink">Number of batches</span> you usually cook in one
            session.
          </li>
          <li>
            <span className="font-medium text-ink">Recharge time</span> from wall, vehicle, or solar,
            so the unit is ready for the next meal.
          </li>
        </ul>
        <p className="panel-note">
          A power station in the right range is a candidate, not a confirmation. Only its continuous
          AC output, checked against your oven&apos;s watts, tells you it will run.
        </p>
      </div>
    </div>
  );
}
