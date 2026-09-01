import Link from "next/link";

export function ScCampingRv() {
  return (
    <div>
      <h2 className="h2">Camping and RV use</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Camping.</span> A slow cooker is appealing off-grid
            &mdash; set it in the morning, eat in the evening &mdash; but the all-day runtime makes it
            one of the largest energy loads a campsite kitchen can have. Size the battery for the full
            cook. The{" "}
            <Link
              href="/camping-power-station-calculator"
              className="font-medium text-brand hover:underline"
            >
              Camping Power Station Calculator
            </Link>{" "}
            sizes the rest of your setup.
          </li>
          <li>
            <span className="font-medium text-ink">RV.</span> The inverter will not blink at a slow
            cooker&apos;s wattage; the question is whether the house battery bank has a couple of
            kilowatt-hours to spare over the day. The{" "}
            <Link
              href="/rv-power-station-calculator"
              className="font-medium text-brand hover:underline"
            >
              RV Power Station Calculator
            </Link>{" "}
            covers 12V and AC loads together.
          </li>
        </ul>
        <p>
          A{" "}
          <Link href="/rice-cooker-power-calculator" className="font-medium text-brand hover:underline">
            rice cooker
          </Link>{" "}
          runs the same low-and-slow way but finishes in under an hour. A{" "}
          <Link href="/toaster-oven-power-calculator" className="font-medium text-brand hover:underline">
            toaster oven
          </Link>
          , an{" "}
          <Link href="/air-fryer-power-calculator" className="font-medium text-brand hover:underline">
            air fryer
          </Link>
          , and an{" "}
          <Link
            href="/induction-cooktop-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            induction cooktop
          </Link>{" "}
          are the opposite trade &mdash; high wattage, short runtime, and output-limited rather than
          capacity-limited.
        </p>
      </div>
    </div>
  );
}
