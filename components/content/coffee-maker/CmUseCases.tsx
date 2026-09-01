import Link from "next/link";

export function CmUseCases() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Coffee maker use for camping, RVs, and outages
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Camping.</span> An AC drip machine needs an
            inverter that can supply its full watts; a stovetop or manual brewer sidesteps the power
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
            inverter is rated for the coffee maker&apos;s watts and feeds the outlet you would use.
            The{" "}
            <Link
              href="/rv-power-station-calculator"
              className="font-medium text-brand hover:underline"
            >
              RV Power Station Calculator
            </Link>{" "}
            covers 12V and AC loads together.
          </li>
          <li>
            <span className="font-medium text-ink">Power outage.</span> A coffee maker is a
            convenience load &mdash; back up medical equipment, the fridge, and lights first, then
            brew if the inverter has the output to spare. The{" "}
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
          Brew cycles are short, so there is time to recharge between them. The{" "}
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
