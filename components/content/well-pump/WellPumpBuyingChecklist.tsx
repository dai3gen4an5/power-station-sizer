import Link from "next/link";

export function WellPumpBuyingChecklist() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">Buying checklist</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>Check every item against your pump and your situation before buying:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Battery capacity (Wh)</span> at least the
            recommended figure from the calculator above, with margin for a longer or busier outage.
          </li>
          <li>
            <span className="font-medium text-ink">AC voltage</span> matches your pump &mdash; 120V,
            or a genuine 240V output for a 240V pump. This is the first thing to rule a unit in or
            out.
          </li>
          <li>
            <span className="font-medium text-ink">Continuous AC output (W)</span> at or above your
            pump&apos;s running watts, with headroom.
          </li>
          <li>
            <span className="font-medium text-ink">Startup / surge output (W)</span> at or above your
            pump&apos;s starting watts. This is the rating units most often fall short on for a motor.
          </li>
          <li>
            <span className="font-medium text-ink">Outlet / output configuration</span> an outlet or
            connection your pump&apos;s wiring can actually use, and a pure sine wave inverter for a
            motor.
          </li>
          <li>
            <span className="font-medium text-ink">Recharge time</span> how quickly it refills from a
            wall outlet or vehicle, so it is ready for the next outage.
          </li>
          <li>
            <span className="font-medium text-ink">Solar recharge capability</span> if outages in
            your area can last more than a day &mdash; see the{" "}
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
          your well pump. Only the continuous output, surge rating, and AC voltage, checked against
          your pump&apos;s own numbers, tell you that.
        </p>
      </div>
    </div>
  );
}
