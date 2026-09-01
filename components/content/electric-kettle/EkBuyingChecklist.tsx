export function EkBuyingChecklist() {
  return (
    <div>
      <h2 className="h2">Buying checklist</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>Check every item against your kettle and your situation before buying:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Kettle&apos;s actual input watts</span> from the
            rating label or a watt meter &mdash; not an assumption from its size or type.
          </li>
          <li>
            <span className="font-medium text-ink">Continuous AC output (W)</span> of the power
            station at or above the kettle&apos;s input watts, with headroom. This decides whether it
            runs at all.
          </li>
          <li>
            <span className="font-medium text-ink">Battery capacity (Wh)</span> at least the
            recommended figure from the calculator &mdash; usually easy to meet for a kettle.
          </li>
          <li>
            <span className="font-medium text-ink">AC voltage</span> matches the kettle (most home
            kettles are 120V; many travel kettles are dual-voltage &mdash; confirm yours).
          </li>
          <li>
            <span className="font-medium text-ink">Outlet compatibility</span> an AC outlet the plug
            fits, on a pure sine wave inverter.
          </li>
          <li>
            <span className="font-medium text-ink">Expected boil time</span> including multiple boils
            if you make more than one drink.
          </li>
          <li>
            <span className="font-medium text-ink">Keep-warm use</span> &mdash; folded into the boil
            time, or calculated separately.
          </li>
          <li>
            <span className="font-medium text-ink">Recharge time</span> from wall, vehicle, or solar,
            so the unit is ready for the next boil.
          </li>
        </ul>
        <p className="panel-note">
          A power station in the right range is a candidate, not a confirmation. Only its continuous
          AC output, checked against your kettle&apos;s watts, tells you it will run.
        </p>
      </div>
    </div>
  );
}
