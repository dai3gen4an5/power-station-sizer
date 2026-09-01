export function AfWattageExamples() {
  return (
    <div>
      <h2 className="h2">1000&nbsp;W to 1800&nbsp;W air fryers</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Wattage roughly tracks basket size and how fast the air fryer heats, but the number that
          matters for power-station sizing is the continuous output the inverter has to supply:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">1,000&ndash;1,300&nbsp;W</span> &mdash; compact
            single-basket models. A mid-size power station with a 1,500&nbsp;W-plus inverter can
            usually run one.
          </li>
          <li>
            <span className="font-medium text-ink">1,500&ndash;1,700&nbsp;W</span> &mdash; typical
            mid-size air fryers. Needs an inverter rated at or above that figure continuously.
          </li>
          <li>
            <span className="font-medium text-ink">1,800&nbsp;W</span> &mdash; large and
            dual-basket models. Only larger power stations with a 2,000&nbsp;W-plus continuous
            inverter will run these.
          </li>
        </ul>
        <p>
          These are ranges, not rules &mdash; do not assume every air fryer is 1,500&nbsp;W. Read
          your unit&apos;s label and enter that figure.
        </p>
      </div>
    </div>
  );
}
