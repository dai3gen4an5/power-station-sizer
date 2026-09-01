import Link from "next/link";

export function RcCampingRv() {
  return (
    <div>
      <h2 className="h2">Camping and RV use</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Camping.</span> A rice cooker is one of the
            friendlier hot-food loads to bring off-grid &mdash; a small model runs from a modest
            power station, and it needs no watching once it starts. The{" "}
            <Link
              href="/camping-power-station-calculator"
              className="font-medium text-brand hover:underline"
            >
              Camping Power Station Calculator
            </Link>{" "}
            sizes the rest of your camp kitchen and electronics.
          </li>
          <li>
            <span className="font-medium text-ink">RV.</span> Most RV inverters clear a rice
            cooker&apos;s wattage easily; the thing to plan is the cook-plus-keep-warm energy against
            your battery bank. The{" "}
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
          Compared with an{" "}
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
          , or an{" "}
          <Link href="/electric-kettle-power-calculator" className="font-medium text-brand hover:underline">
            electric kettle
          </Link>
          , a rice cooker is a low, slow load &mdash; kinder on a small inverter, but the keep-warm
          phase can quietly outlast the cook. A{" "}
          <Link href="/slow-cooker-power-calculator" className="font-medium text-brand hover:underline">
            slow cooker
          </Link>{" "}
          takes that trade further &mdash; even lower watts, but hours of runtime that make battery
          capacity the constraint.
        </p>
      </div>
    </div>
  );
}
