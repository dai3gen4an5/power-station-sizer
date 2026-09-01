export function RcCan500Wh() {
  return (
    <div>
      <h2 className="h2">Can a 500Wh power station run a rice cooker?</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          For a small cooker, yes &mdash; this is one of the few hot-food appliances a 500&nbsp;Wh
          unit can handle. A 500&nbsp;Wh power station has roughly 325&ndash;400&nbsp;Wh usable and
          an inverter often rated around 500&nbsp;W. A 200&ndash;400&nbsp;W travel rice cooker on a
          25&ndash;35-minute cycle uses well under that usable capacity, and its wattage sits inside
          a 500&nbsp;W inverter.
        </p>
        <p>
          It gets tight fast, though. A 700&nbsp;W family cooker already exceeds a typical
          500&nbsp;W inverter, and a full cycle plus a keep-warm hour can pass the usable capacity.
          Check the power station&apos;s continuous AC output against your cooker&apos;s input watts,
          and leave headroom for keep-warm if you use it.
        </p>
      </div>
    </div>
  );
}
