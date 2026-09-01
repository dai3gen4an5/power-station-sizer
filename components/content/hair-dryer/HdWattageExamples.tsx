export function HdWattageExamples() {
  return (
    <div>
      <h2 className="h2">
        800&nbsp;W to 1875&nbsp;W hair dryers
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Wattage mostly sets how fast a dryer moves hot air, not the total energy for a given
          dry &mdash; a lower-wattage dryer just runs longer. For power-station sizing, the wattage
          is what matters because it sets the continuous output the inverter must supply:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">800&ndash;1,200&nbsp;W</span> &mdash; common for
            travel and compact dryers. A mid-size power station with a 1,000&nbsp;W-plus inverter can
            usually run one.
          </li>
          <li>
            <span className="font-medium text-ink">1,500&nbsp;W</span> &mdash; a typical full-size
            dryer on high heat. Needs an inverter rated at or above that figure continuously.
          </li>
          <li>
            <span className="font-medium text-ink">1,800&ndash;1,875&nbsp;W</span> &mdash; the
            maximum on many full-size and salon dryers. Only larger power stations with a
            2,000&nbsp;W-plus continuous inverter will run these at full power.
          </li>
        </ul>
        <p>
          These are ranges, not rules &mdash; do not assume every dryer is 1,875&nbsp;W. Read your
          dryer&apos;s own label and enter the figure for the setting you use.
        </p>
      </div>
    </div>
  );
}
