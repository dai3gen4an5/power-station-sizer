import Link from "next/link";

export function SumpPumpBuyingChecklist() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">Power station buying checklist</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>Check every item against your pump and your situation before buying:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Battery capacity (Wh)</span> at least the
            recommended figure from the calculator above, with some margin for a longer or busier
            outage.
          </li>
          <li>
            <span className="font-medium text-ink">Continuous AC output (W)</span> at or above your
            pump&apos;s running watts, with headroom.
          </li>
          <li>
            <span className="font-medium text-ink">Startup / surge output (W)</span> at or above your
            pump&apos;s starting watts. This is the specification units most often fall short on for
            motor loads.
          </li>
          <li>
            <span className="font-medium text-ink">AC outlet type</span> a standard grounded outlet
            that matches your pump&apos;s plug, and a pure sine wave inverter for a motor.
          </li>
          <li>
            <span className="font-medium text-ink">Recharge time</span> how quickly it refills from a
            wall outlet or a vehicle, so it is ready for the next outage.
          </li>
          <li>
            <span className="font-medium text-ink">Solar input</span> if outages in your area can
            last more than a day &mdash; see the{" "}
            <Link
              href="/solar-charge-time-calculator"
              className="font-medium text-brand hover:underline"
            >
              Solar Charge Time Calculator
            </Link>{" "}
            and{" "}
            <Link
              href="/solar-panel-size-calculator"
              className="font-medium text-brand hover:underline"
            >
              Solar Panel Size Calculator
            </Link>
            .
          </li>
        </ul>
        <p className="rounded-lg border border-line bg-paper p-4 text-sm leading-relaxed text-ink/70">
          A power station in the right capacity class is not confirmation that it can start and run
          your pump. Only the continuous and surge output ratings, checked against your pump&apos;s
          own numbers, tell you that.
        </p>
      </div>
    </div>
  );
}
