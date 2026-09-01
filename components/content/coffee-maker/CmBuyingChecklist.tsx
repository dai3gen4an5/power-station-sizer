export function CmBuyingChecklist() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">Buying checklist</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>Check every item against your coffee maker and your situation before buying:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Actual coffee maker input watts</span> from the
            rating label or a watt meter &mdash; not an assumption from the machine type.
          </li>
          <li>
            <span className="font-medium text-ink">Continuous AC output (W)</span> of the power
            station at or above the coffee maker&apos;s input watts, with headroom. This decides
            whether it runs at all.
          </li>
          <li>
            <span className="font-medium text-ink">Battery capacity (Wh)</span> at least the
            recommended figure from the calculator &mdash; usually easy to meet for a coffee maker.
          </li>
          <li>
            <span className="font-medium text-ink">AC voltage</span> matches the machine (most home
            coffee makers are 120V; confirm yours).
          </li>
          <li>
            <span className="font-medium text-ink">Outlet compatibility</span> an AC outlet the plug
            fits, on a pure sine wave inverter.
          </li>
          <li>
            <span className="font-medium text-ink">Expected brew / use duration</span> including
            multiple brews if you make more than one pot.
          </li>
          <li>
            <span className="font-medium text-ink">Keep-warm usage</span> &mdash; folded into the use
            time, or calculated separately.
          </li>
          <li>
            <span className="font-medium text-ink">Recharge time</span> from wall, vehicle, or solar,
            so the unit is ready for the next brew.
          </li>
        </ul>
        <p className="rounded-lg border border-line bg-paper p-4 text-sm leading-relaxed text-ink/70">
          A power station in the right range is a candidate, not a confirmation. Only its continuous
          AC output, checked against your coffee maker&apos;s watts, tells you it will run.
        </p>
      </div>
    </div>
  );
}
