export function SumpPumpCapacityClasses() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Is a 1000Wh or 2000Wh power station enough for a sump pump?
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          The honest answer is &ldquo;it depends on the pump and the outage, and on the inverter, not
          just the battery.&rdquo; As rough energy guidance:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">500&nbsp;Wh</span> (around 325&ndash;400&nbsp;Wh
            usable) is only enough for a short outage with light pump activity, and many units this
            size do not have the continuous or surge output for a typical sump pump motor. Treat it
            as a stopgap.
          </li>
          <li>
            <span className="font-medium text-ink">1,000&nbsp;Wh</span> (around 650&ndash;800&nbsp;Wh
            usable) can cover a few hours for a pump running roughly 10 minutes per hour. It is often
            the smallest size worth considering, and only if its inverter meets the pump&apos;s
            running and starting watts.
          </li>
          <li>
            <span className="font-medium text-ink">2,000&nbsp;Wh</span> (around
            1,300&ndash;1,600&nbsp;Wh usable) covers a longer outage or heavier pump cycling, and
            units this size are more likely to have the surge headroom a motor needs.
          </li>
          <li>
            <span className="font-medium text-ink">3,000&nbsp;Wh and larger</span> is for long
            outages, storm-level pump activity, or running the pump alongside other essentials.
          </li>
        </ul>
        <p>
          Put your pump&apos;s measured running and starting watts and a realistic minutes-per-hour
          into the calculator above for a capacity class, then confirm the unit&apos;s output ratings
          before buying.
        </p>
      </div>
    </div>
  );
}
