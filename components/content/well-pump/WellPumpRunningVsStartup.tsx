import Link from "next/link";

export function WellPumpRunningVsStartup() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Running watts vs startup watts
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          <span className="font-medium text-ink">Running watts</span> is the steady power a well pump
          draws while its motor turns and it is pushing water. It determines energy use over an
          outage and the continuous output a power station must sustain.
        </p>
        <p>
          <span className="font-medium text-ink">Startup, starting, or surge watts</span> is a brief
          spike &mdash; often a fraction of a second &mdash; as the motor overcomes inertia and the
          system builds pressure. On a well pump it can be substantially higher than the running
          figure. A power station&apos;s inverter has to deliver that spike or the pump will not
          start, regardless of how much battery is behind it.
        </p>
        <p>
          How much higher the startup figure is depends on the motor type, the pump, the controller,
          and the supply voltage, so this calculator does not estimate it. Both numbers are usually
          on the pump&apos;s rating label, in its manual, or in the pressure-switch or
          constant-pressure controller documentation. The same distinction applies to a{" "}
          <Link
            href="/sump-pump-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            sump pump
          </Link>
          , which has its own calculator.
        </p>
      </div>
    </div>
  );
}
