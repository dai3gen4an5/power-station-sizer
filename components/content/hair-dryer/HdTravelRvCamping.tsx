import Link from "next/link";

export function HdTravelRvCamping() {
  return (
    <div>
      <h2 className="h2">Travel, RV, and camping considerations</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Travel dryer.</span> A dual-voltage travel dryer
            at 800&ndash;1,200&nbsp;W is the most realistic AC option to run from a portable power
            station &mdash; still check that the inverter covers its watts.
          </li>
          <li>
            <span className="font-medium text-ink">RV.</span> A full-size 1,875&nbsp;W dryer is a
            heavy load for an RV inverter. Check the rig&apos;s continuous rating and which outlets
            it feeds. The{" "}
            <Link
              href="/rv-power-station-calculator"
              className="font-medium text-brand hover:underline"
            >
              RV Power Station Calculator
            </Link>{" "}
            covers 12V and AC loads together.
          </li>
          <li>
            <span className="font-medium text-ink">Camping.</span> A hair dryer is one of the
            heaviest things people try to run at a campsite. A low-wattage travel model in a short
            session is workable; a full-power dryer usually is not. The{" "}
            <Link
              href="/camping-power-station-calculator"
              className="font-medium text-brand hover:underline"
            >
              Camping Power Station Calculator
            </Link>{" "}
            sizes the rest of your setup.
          </li>
        </ul>
        <p>
          A{" "}
          <Link href="/electric-kettle-power-calculator" className="font-medium text-brand hover:underline">
            kettle
          </Link>{" "}
          and a{" "}
          <Link href="/coffee-maker-power-calculator" className="font-medium text-brand hover:underline">
            coffee maker
          </Link>{" "}
          behave the same way: brief, but output-limited by their heating elements.
        </p>
      </div>
    </div>
  );
}
