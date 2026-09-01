import Link from "next/link";

export function EbCan1000Wh() {
  return (
    <div>
      <h2 className="h2">Can a 1000Wh power station run an electric blanket overnight?</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Usually yes, for one blanket. A 1,000&nbsp;Wh unit has about 650&ndash;800&nbsp;Wh usable.
          A 75&nbsp;W blanket for an 8-hour night is 600&nbsp;Wh raw and roughly 882&nbsp;Wh
          recommended once losses and a reserve are added &mdash; right at the edge of a
          1,000&nbsp;Wh unit, so it works but with little margin. A lower setting or a smaller
          blanket leaves more headroom; a 120&ndash;150&nbsp;W blanket on high may not last the
          night.
        </p>
        <p>
          Thermostat cycling often means the real overnight draw is lower than the planning figure,
          which buys back some margin &mdash; but size for the active wattage first. If you also want
          to keep a CPAP, phone, or light going through the night, add them together in the{" "}
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
