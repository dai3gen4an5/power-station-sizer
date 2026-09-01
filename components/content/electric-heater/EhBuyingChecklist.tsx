export function EhBuyingChecklist() {
  return (
    <div>
      <h2 className="h2">Buying checklist</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>Check every item against your heater and your situation before buying:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Heater input watts</span> from the rating label
            or a watt meter, on the setting you will run &mdash; not an assumed 1,500&nbsp;W.
          </li>
          <li>
            <span className="font-medium text-ink">Continuous AC output (W)</span> at or above the
            heater&apos;s input watts, with headroom. This decides whether it runs at all.
          </li>
          <li>
            <span className="font-medium text-ink">Battery capacity (Wh)</span> at least the
            recommended figure from the calculator for your run time &mdash; and expect that to be
            large.
          </li>
          <li>
            <span className="font-medium text-ink">Usable capacity / efficiency</span> the real
            watt-hours you get after inverter losses and a reserve, not the headline number.
          </li>
          <li>
            <span className="font-medium text-ink">AC voltage</span> matches the heater (most
            portable heaters are 120V; confirm yours).
          </li>
          <li>
            <span className="font-medium text-ink">Outlet compatibility</span> an AC outlet the
            heater&apos;s plug fits, on a pure sine wave inverter.
          </li>
          <li>
            <span className="font-medium text-ink">Recharge time</span> from wall, vehicle, or solar,
            so the unit is ready again after a heavy draw.
          </li>
          <li>
            <span className="font-medium text-ink">Manufacturer operating limits</span> for both the
            heater and the power station &mdash; clearances, ventilation, and temperature ranges.
          </li>
        </ul>
        <p className="rounded-lg border border-line bg-paper p-4 text-sm leading-relaxed text-ink/70">
          A power station in the right range is a candidate, not a confirmation. Only its continuous
          AC output and real usable capacity, checked against your heater&apos;s watts and run time,
          tell you it will work.
        </p>
      </div>
    </div>
  );
}
