import Link from "next/link";

export function CampingWhatSize() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        What size power station do I need for camping?
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          It depends on the gear you bring and how many nights you are out. The method is the same as
          the{" "}
          <Link href="/" className="font-medium text-brand hover:underline">
            main Power Station Size Calculator
          </Link>
          : add up each item&apos;s daily watt-hours, then add headroom for inverter conversion loss
          and the reserve you leave on the battery.
        </p>
        <p>
          For a minimal tent-camping kit &mdash; a couple of LED lights, a small fan and phone
          charging &mdash; a day is often only 100&ndash;300&nbsp;Wh, so a 300&ndash;500&nbsp;Wh unit
          is plenty for one or two nights. Add a portable fridge or cooler and the daily total
          usually rises to roughly 600&ndash;1,000&nbsp;Wh, which points at a 1,000&nbsp;Wh power
          station for a weekend. Running Starlink for hours, charging camera and drone batteries, or
          using an electric blanket on cold nights can push a three-day trip toward the
          2,000&nbsp;Wh class.
        </p>
        <p>
          This page is aimed at portable, packable camping gear for one to three nights. For a
          built-in RV, camper or van setup &mdash; a 12V house fridge, roof fan, water pump, fixed
          electronics &mdash; use the{" "}
          <Link
            href="/rv-power-station-calculator"
            className="font-medium text-brand hover:underline"
          >
            RV Power Station Calculator
          </Link>{" "}
          instead.
        </p>
      </div>
    </div>
  );
}
