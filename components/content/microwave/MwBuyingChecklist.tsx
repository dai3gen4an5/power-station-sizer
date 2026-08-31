export function MwBuyingChecklist() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">Buying checklist</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>Check every item against your microwave and your situation before buying:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Microwave electrical input watts</span> from the
            rear label, the manual, or a watt meter &mdash; not the cooking-power rating.
          </li>
          <li>
            <span className="font-medium text-ink">Battery capacity (Wh)</span> at least the
            recommended figure from the calculator above. This is usually the easy part.
          </li>
          <li>
            <span className="font-medium text-ink">Continuous AC output (W)</span> at or above the
            microwave&apos;s input watts, with headroom. This is the specification that decides it.
          </li>
          <li>
            <span className="font-medium text-ink">Startup / surge specification</span>, if the
            manufacturer publishes one &mdash; the power station&apos;s surge rating must cover it.
          </li>
          <li>
            <span className="font-medium text-ink">AC voltage</span> matches the microwave (most
            countertop units are 120V; confirm yours).
          </li>
          <li>
            <span className="font-medium text-ink">Outlet configuration</span> an AC outlet the
            plug fits, on a pure sine wave inverter.
          </li>
          <li>
            <span className="font-medium text-ink">Battery reserve</span> a buffer left unused, so
            the microwave is not the load that takes the pack to empty.
          </li>
          <li>
            <span className="font-medium text-ink">Recharge method</span> wall, vehicle, or solar,
            so the power station is ready for the next session.
          </li>
        </ul>
        <p className="rounded-lg border border-line bg-paper p-4 text-sm leading-relaxed text-ink/70">
          A power station in the right capacity class is not confirmation that it can run your
          microwave. Only its continuous AC output, checked against the microwave&apos;s input watts,
          tells you that.
        </p>
      </div>
    </div>
  );
}
