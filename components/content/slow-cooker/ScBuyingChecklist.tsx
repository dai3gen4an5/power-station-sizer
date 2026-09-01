export function ScBuyingChecklist() {
  return (
    <div>
      <h2 className="h2">Buying checklist</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>Check every item against your slow cooker and your situation before buying:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Actual slow cooker input watts</span> from the
            rating label or a watt meter &mdash; not a guess from the quart size.
          </li>
          <li>
            <span className="font-medium text-ink">Intended setting</span> &mdash; Low, High, or
            Warm &mdash; and the input watts at that setting.
          </li>
          <li>
            <span className="font-medium text-ink">Continuous AC output (W)</span> at or above the
            cooker&apos;s input watts. An easy bar for almost any power station.
          </li>
          <li>
            <span className="font-medium text-ink">Battery capacity (Wh)</span> at least the
            recommended figure from the calculator &mdash; the number that actually decides this.
          </li>
          <li>
            <span className="font-medium text-ink">Expected cook duration</span> in hours for the
            meals you make.
          </li>
          <li>
            <span className="font-medium text-ink">Keep-warm duration</span> &mdash; how long you
            hold the food after the cook.
          </li>
          <li>
            <span className="font-medium text-ink">Keep-warm watts</span>, if the manufacturer or a
            watt meter gives you one, for the extra-energy estimate.
          </li>
          <li>
            <span className="font-medium text-ink">AC voltage</span> matches the cooker (most
            countertop models are 120V; confirm yours).
          </li>
          <li>
            <span className="font-medium text-ink">Outlet compatibility</span> an AC outlet the plug
            fits, on a pure sine wave inverter.
          </li>
          <li>
            <span className="font-medium text-ink">Recharge time</span> from wall, vehicle, or solar,
            so the unit is ready for the next cook.
          </li>
        </ul>
        <p className="panel-note">
          For a slow cooker, a power station in the right range is mostly a question of usable
          watt-hours. Confirm the unit&apos;s real usable capacity covers your cook energy plus any
          keep-warm hold, with a margin.
        </p>
      </div>
    </div>
  );
}
