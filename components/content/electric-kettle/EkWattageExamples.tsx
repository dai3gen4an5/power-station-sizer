export function EkWattageExamples() {
  return (
    <div>
      <h2 className="h2">
        700&nbsp;W, 1000&nbsp;W, 1200&nbsp;W, 1500&nbsp;W, and 1800&nbsp;W kettles
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Kettle wattage mostly changes how fast the water boils, not the total energy for a given
          amount of water &mdash; a lower-wattage kettle simply runs longer. For power-station
          sizing, the wattage is what matters because it sets the continuous output the inverter has
          to supply:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">700&ndash;1,000&nbsp;W</span> &mdash; common for
            compact and travel kettles. A mid-size power station with a 1,000&nbsp;W-plus inverter
            can usually run one.
          </li>
          <li>
            <span className="font-medium text-ink">1,200&ndash;1,500&nbsp;W</span> &mdash; typical
            full-size home kettle. Needs an inverter rated at or above that figure continuously.
          </li>
          <li>
            <span className="font-medium text-ink">1,800&nbsp;W</span> &mdash; fast-boil kettles.
            Only larger power stations with a 2,000&nbsp;W-plus continuous inverter will run these.
          </li>
        </ul>
        <p>
          These are ranges, not rules. Read your kettle&apos;s own label and enter that number.
        </p>
      </div>
    </div>
  );
}
