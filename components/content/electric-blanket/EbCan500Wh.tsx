export function EbCan500Wh() {
  return (
    <div>
      <h2 className="h2">Can a 500Wh power station run an electric blanket?</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          On the electrical side, for a few hours &mdash; a heated blanket is one of the lighter
          heating loads a 500&nbsp;Wh unit can take on. With this page&apos;s default 85% inverter
          efficiency and 20% reserve, a 500&nbsp;Wh nameplate battery corresponds to roughly
          340&nbsp;Wh of planned load-side energy. A low-wattage throw run for an evening fits inside
          that; a mid-wattage blanket for a full night does not.
        </p>
        <p>
          A full night is a different story. A 75&nbsp;W blanket for 8 hours is 600&nbsp;Wh raw,
          already past what a 500&nbsp;Wh unit plans for, and a higher-wattage dual-control blanket
          runs it down in a few hours. Among the listed power stations the inverter is usually not
          the limit for a low-watt blanket &mdash; it comes down to whether the battery holds enough
          watt-hours for your run time. This is electrical sizing only: it does not mean your blanket
          manufacturer permits inverter or power-station use, which the manual has to confirm.
        </p>
      </div>
    </div>
  );
}
