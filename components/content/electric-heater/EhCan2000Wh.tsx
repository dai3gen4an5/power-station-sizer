export function EhCan2000Wh() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Can a 2000Wh power station run a space heater?
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          For output, usually yes: a 2,000&nbsp;Wh power station typically has a 2,000&nbsp;W or
          larger inverter, enough for a 1,500&nbsp;W heater with headroom. Runtime is still short.
          With around 1,300&nbsp;&ndash;&nbsp;1,600&nbsp;Wh usable:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>At 1,500&nbsp;W, roughly 50&nbsp;&ndash;&nbsp;65 minutes.</li>
          <li>At 1,000&nbsp;W, about 1.5 hours.</li>
          <li>At 750&nbsp;W, a little over 2 hours.</li>
        </ul>
        <p>
          That is a useful warm-up or a bridge through a short outage, not a full evening or an
          overnight. For longer heating you are into 3,000&nbsp;Wh-plus units with expansion
          batteries, and the watt-hours add up quickly &mdash; check the numbers for your own heater
          and run time in the calculator above.
        </p>
      </div>
    </div>
  );
}
