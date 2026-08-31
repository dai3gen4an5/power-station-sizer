export function SumpPumpRunningVsStartup() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Running watts vs startup watts
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          <span className="font-medium text-ink">Running watts</span> is the steady power a sump pump
          draws while its motor is turning. This is the figure that determines energy use over an
          outage and the continuous output a power station must sustain.
        </p>
        <p>
          <span className="font-medium text-ink">Startup, starting, or surge watts</span> is a brief
          spike &mdash; often lasting a fraction of a second &mdash; as the motor overcomes inertia
          and begins to spin. It can be considerably higher than the running figure. A power
          station&apos;s inverter has to deliver that spike or the pump will not start, no matter how
          much battery is behind it.
        </p>
        <p>
          The gap between the two depends on the motor type, the pump, and how it starts, so it is
          not something this calculator will estimate for you. Both numbers are usually printed on the
          pump&apos;s rating label or listed in its manual and on the manufacturer&apos;s product
          page &mdash; enter what you find there.
        </p>
      </div>
    </div>
  );
}
