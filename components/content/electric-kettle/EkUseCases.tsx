import Link from "next/link";

export function EkUseCases() {
  return (
    <div>
      <h2 className="h2">Electric kettle use for camping, RVs, and outages</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Camping.</span> An AC kettle needs an inverter
            that can supply its full watts; a stovetop kettle on a camp stove sidesteps the power
            question entirely. The{" "}
            <Link
              href="/camping-power-station-calculator"
              className="font-medium text-brand hover:underline"
            >
              Camping Power Station Calculator
            </Link>{" "}
            sizes the rest of your setup.
          </li>
          <li>
            <span className="font-medium text-ink">RV.</span> Check whether the rig&apos;s onboard
            inverter is rated for the kettle&apos;s watts and feeds the outlet you would use. The{" "}
            <Link
              href="/rv-power-station-calculator"
              className="font-medium text-brand hover:underline"
            >
              RV Power Station Calculator
            </Link>{" "}
            covers 12V and AC loads together.
          </li>
          <li>
            <span className="font-medium text-ink">Power outage.</span> A kettle is a convenience
            load &mdash; back up medical equipment, the fridge, and lights first, then boil if the
            inverter has the output to spare. The{" "}
            <Link
              href="/home-power-outage-calculator"
              className="font-medium text-brand hover:underline"
            >
              Home Power Outage Calculator
            </Link>{" "}
            ranks essentials by priority.
          </li>
        </ul>
        <p>
          A{" "}
          <Link href="/coffee-maker-power-calculator" className="font-medium text-brand hover:underline">
            coffee maker
          </Link>{" "}
          behaves the same way: brief, but output-limited. Boils are short, so there is time to
          recharge between them &mdash; the{" "}
          <Link
            href="/solar-charge-time-calculator"
            className="font-medium text-brand hover:underline"
          >
            Solar Charge Time Calculator
          </Link>{" "}
          estimates how quickly a panel refills the power station.
        </p>
      </div>
    </div>
  );
}
