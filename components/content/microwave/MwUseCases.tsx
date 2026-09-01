import Link from "next/link";

export function MwUseCases() {
  return (
    <div>
      <h2 className="h2">
        Microwave use for camping, RV, and outages
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Camping.</span> A portable microwave is a
            high-output-only load. Size the power station on its inverter&apos;s continuous rating,
            not its battery. The{" "}
            <Link
              href="/camping-power-station-calculator"
              className="font-medium text-brand hover:underline"
            >
              Camping Power Station Calculator
            </Link>{" "}
            sizes the rest of your camp kitchen and electronics.
          </li>
          <li>
            <span className="font-medium text-ink">RV.</span> Many rigs already have an inverter;
            check whether its continuous watts cover the microwave, and whether it is wired to the
            microwave outlet. The{" "}
            <Link
              href="/rv-power-station-calculator"
              className="font-medium text-brand hover:underline"
            >
              RV Power Station Calculator
            </Link>{" "}
            covers 12V and AC loads together.
          </li>
          <li>
            <span className="font-medium text-ink">Power outage.</span> A microwave is a convenience
            load. Back up medical equipment, the fridge, and lights first, then add the microwave if
            the inverter can take it. The{" "}
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
          Microwave sessions are short, so between uses there is time to recharge. The{" "}
          <Link
            href="/solar-charge-time-calculator"
            className="font-medium text-brand hover:underline"
          >
            Solar Charge Time Calculator
          </Link>{" "}
          estimates how quickly a panel refills the power station between meals. For a longer cook,
          the{" "}
          <Link
            href="/air-fryer-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            Air Fryer Power Station Calculator
          </Link>{" "}
          sizes an air fryer on the same battery-and-output basis.
        </p>
      </div>
    </div>
  );
}
