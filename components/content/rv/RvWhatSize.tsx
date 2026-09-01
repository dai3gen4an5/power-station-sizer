import Link from "next/link";

export function RvWhatSize() {
  return (
    <div>
      <h2 className="h2">
        What size power station do I need for an RV?
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          It depends on which appliances you run and for how long each day. The method is the same as
          the{" "}
          <Link href="/" className="font-medium text-brand hover:underline">
            main Power Station Size Calculator
          </Link>
          : add up each device&apos;s daily watt-hours, then add headroom for inverter conversion
          loss and the reserve you leave on the battery.
        </p>
        <p>
          A light setup &mdash; LED lights, a roof vent fan, phone charging and a laptop &mdash; often
          totals only 300&ndash;600&nbsp;Wh a day, so a 500&nbsp;Wh to 1,000&nbsp;Wh unit can cover a
          day. Add a 12V compressor fridge and the daily total usually climbs to roughly
          1,000&ndash;1,800&nbsp;Wh, which points at a 1,500&nbsp;Wh or larger power station for a
          full day of dry camping. Run Starlink all day, or add several devices at once, and a
          2,000&nbsp;Wh or larger unit is more realistic.
        </p>
        <p>
          For multi-day trips you either scale the capacity up with the day count or plan to recharge
          from solar or the vehicle alternator. If your main concern is riding out grid failures at
          home rather than dry camping, the{" "}
          <Link
            href="/home-power-outage-calculator"
            className="font-medium text-brand hover:underline"
          >
            Home Power Outage Calculator
          </Link>{" "}
          covers that case, and for tent or car camping with packable gear rather than a built-in
          setup, see the{" "}
          <Link
            href="/camping-power-station-calculator"
            className="font-medium text-brand hover:underline"
          >
            Camping Power Station Calculator
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
