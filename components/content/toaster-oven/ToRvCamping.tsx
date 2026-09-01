import Link from "next/link";

export function ToRvCamping() {
  return (
    <div>
      <h2 className="h2">RV and camping use</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">RV.</span> A 1,500&ndash;1,800&nbsp;W toaster oven
            is a heavy sustained load for an RV inverter. Check the rig&apos;s continuous rating and
            which outlets it feeds; a compact model on a short cook is the realistic option. The{" "}
            <Link
              href="/rv-power-station-calculator"
              className="font-medium text-brand hover:underline"
            >
              RV Power Station Calculator
            </Link>{" "}
            covers 12V and AC loads together.
          </li>
          <li>
            <span className="font-medium text-ink">Camping.</span> A toaster oven is one of the
            heaviest kitchen loads people bring to a campsite &mdash; both a big inverter and enough
            battery for the bake time. The{" "}
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
          An{" "}
          <Link href="/air-fryer-power-calculator" className="font-medium text-brand hover:underline">
            air fryer
          </Link>
          , an{" "}
          <Link
            href="/induction-cooktop-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            induction cooktop
          </Link>
          , a{" "}
          <Link href="/microwave-power-calculator" className="font-medium text-brand hover:underline">
            microwave
          </Link>
          , an{" "}
          <Link href="/electric-kettle-power-calculator" className="font-medium text-brand hover:underline">
            electric kettle
          </Link>
          , and a{" "}
          <Link href="/coffee-maker-power-calculator" className="font-medium text-brand hover:underline">
            coffee maker
          </Link>{" "}
          all behave the same way &mdash; output-limited by a heating element &mdash; but a
          microwave&apos;s far shorter run makes it the lighter choice off-grid. A{" "}
          <Link href="/rice-cooker-power-calculator" className="font-medium text-brand hover:underline">
            rice cooker
          </Link>{" "}
          is the gentlest of the group, with a lower wattage and a slow cook cycle.
        </p>
      </div>
    </div>
  );
}
