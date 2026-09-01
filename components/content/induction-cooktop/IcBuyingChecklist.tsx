export function IcBuyingChecklist() {
  return (
    <div>
      <h2 className="h2">Buying checklist</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>Check every item against your cooktop and your situation before buying:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Actual cooktop input watts</span> from the rating
            label or a watt meter &mdash; not a guess from the burner size.
          </li>
          <li>
            <span className="font-medium text-ink">Intended power setting</span> and the input watts
            at that setting, or the manufacturer maximum if you cannot measure it.
          </li>
          <li>
            <span className="font-medium text-ink">Continuous AC output (W)</span> of the power
            station at or above the cooktop&apos;s input watts, with headroom. This decides whether
            it runs at all.
          </li>
          <li>
            <span className="font-medium text-ink">Battery capacity (Wh)</span> at least the
            recommended figure from the calculator, with margin for extra dishes.
          </li>
          <li>
            <span className="font-medium text-ink">AC voltage</span> matches the cooktop (120V for
            most portable single burners; some larger units are 240V).
          </li>
          <li>
            <span className="font-medium text-ink">Outlet compatibility</span> an AC outlet the plug
            fits, on a pure sine wave inverter.
          </li>
          <li>
            <span className="font-medium text-ink">Induction-compatible cookware</span> with a
            magnetic base.
          </li>
          <li>
            <span className="font-medium text-ink">Expected cooking duration</span> across every dish
            in a typical meal.
          </li>
          <li>
            <span className="font-medium text-ink">Recharge time</span> from wall, vehicle, or solar,
            so the unit is ready for the next meal.
          </li>
          <li>
            <span className="font-medium text-ink">Manufacturer operating limits</span> &mdash; any
            published peak or starting figure, and any minimum inverter or generator rating the maker
            specifies.
          </li>
        </ul>
        <p className="panel-note">
          A power station in the right range is a candidate, not a confirmation. Only its continuous
          AC output, checked against your cooktop&apos;s watts, tells you it will run.
        </p>
      </div>
    </div>
  );
}
