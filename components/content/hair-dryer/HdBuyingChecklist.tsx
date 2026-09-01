export function HdBuyingChecklist() {
  return (
    <div>
      <h2 className="h2">Buying checklist</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>Check every item against your hair dryer and your situation before buying:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Actual hair dryer input watts</span> from the
            rating label or a watt meter, for the setting you use &mdash; not an assumed 1,875&nbsp;W.
          </li>
          <li>
            <span className="font-medium text-ink">Continuous AC output (W)</span> of the power
            station at or above the dryer&apos;s input watts, with headroom. This decides whether it
            runs at all.
          </li>
          <li>
            <span className="font-medium text-ink">Battery capacity (Wh)</span> at least the
            recommended figure from the calculator &mdash; usually easy to meet for a hair dryer.
          </li>
          <li>
            <span className="font-medium text-ink">AC voltage</span> matches the dryer (most home
            dryers are 120V; many travel dryers are dual-voltage &mdash; confirm yours).
          </li>
          <li>
            <span className="font-medium text-ink">Outlet compatibility</span> an AC outlet the plug
            fits, on a pure sine wave inverter; a dryer&apos;s ALCI / GFCI plug needs a compatible
            outlet.
          </li>
          <li>
            <span className="font-medium text-ink">Actual operating time</span> across everyone who
            uses it, added into the minutes.
          </li>
          <li>
            <span className="font-medium text-ink">Selected heat / speed setting</span> &mdash; size
            on the watts for the setting you will run.
          </li>
          <li>
            <span className="font-medium text-ink">Recharge time</span> from wall, vehicle, or solar,
            so the unit is ready for the next session.
          </li>
        </ul>
        <p className="panel-note">
          A power station in the right range is a candidate, not a confirmation. Only its continuous
          AC output, checked against your dryer&apos;s watts, tells you it will run.
        </p>
      </div>
    </div>
  );
}
