import Link from "next/link";

export function EbCan1000Wh() {
  return (
    <div>
      <h2 className="h2">Can a 1000Wh power station run an electric blanket overnight?</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          On the electrical side, usually yes for one blanket. With this page&apos;s default 85%
          inverter efficiency and 20% reserve, a 1,000&nbsp;Wh nameplate battery corresponds to
          about 680&nbsp;Wh of planned load-side energy. A 75&nbsp;W blanket for an 8-hour night is
          600&nbsp;Wh raw and about 882&nbsp;Wh recommended once losses and the reserve are added
          &mdash; near the edge of a 1,000&nbsp;Wh unit, so it works with little margin. A lower
          setting or a smaller blanket leaves more headroom; a higher-wattage blanket on high may
          not last the night.
        </p>
        <p>
          Thermostat cycling often means the real overnight draw is lower than the planning figure,
          which buys back some margin &mdash; but size for the active wattage first. This is
          electrical sizing only; the blanket manual still has to permit inverter or power-station
          use. If you also want to keep a CPAP, phone, or light going through the night, add them
          together in the{" "}
          <Link
            href="/home-power-outage-calculator"
            className="font-medium text-brand hover:underline"
          >
            Home Power Outage Calculator
          </Link>
          , or check a single overnight load in the{" "}
          <Link href="/cpap-power-calculator" className="font-medium text-brand hover:underline">
            CPAP Power Station Calculator
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
