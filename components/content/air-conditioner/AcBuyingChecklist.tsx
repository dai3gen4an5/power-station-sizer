export function AcBuyingChecklist() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">Buying checklist</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>Check every item against your air conditioner and your situation before buying:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Battery capacity (Wh)</span> at least the
            recommended figure from the calculator above, with margin for a hotter day or a longer
            run.
          </li>
          <li>
            <span className="font-medium text-ink">Required AC voltage</span> matches the unit
            &mdash; 120V, or a genuine 240V output for a 240V unit. This rules a power station in or
            out first.
          </li>
          <li>
            <span className="font-medium text-ink">Continuous output (W)</span> at or above the
            unit&apos;s running watts, with headroom.
          </li>
          <li>
            <span className="font-medium text-ink">Startup / surge output (W)</span> at or above the
            compressor&apos;s starting watts. This is the rating power stations most often fall short
            on for an air conditioner.
          </li>
          <li>
            <span className="font-medium text-ink">Outlet configuration</span> an outlet or
            connection the unit&apos;s plug can use, and a pure sine wave inverter for the
            compressor.
          </li>
          <li>
            <span className="font-medium text-ink">Battery recharge time</span> how quickly it
            refills from a wall outlet or vehicle, so it is ready again.
          </li>
          <li>
            <span className="font-medium text-ink">Solar input / recharge capability</span> if you
            plan to run the unit across a long outage or off-grid.
          </li>
          <li>
            <span className="font-medium text-ink">Real running watts</span> from the nameplate,
            manual, or a watt meter &mdash; not a BTU-based estimate.
          </li>
        </ul>
        <p className="rounded-lg border border-line bg-paper p-4 text-sm leading-relaxed text-ink/70">
          A power station in the right capacity class is not confirmation that it can start and run
          your air conditioner. Only the continuous output, surge rating, and AC voltage, checked
          against the unit&apos;s own numbers, tell you that.
        </p>
      </div>
    </div>
  );
}
