import Link from "next/link";

export function AcRunningVsStartup() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Running watts vs startup watts
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          <span className="font-medium text-ink">Running watts</span> is the steady power an air
          conditioner draws while the compressor is cooling. It determines energy use over the outage
          and the continuous output a power station must sustain.
        </p>
        <p>
          <span className="font-medium text-ink">Startup, starting, or surge watts</span> is a brief
          spike as the compressor motor starts. On a standard single-speed compressor it can be
          several times the running figure for a fraction of a second. A power station&apos;s
          inverter has to deliver that spike or the compressor will not start, regardless of how much
          battery is behind it. Inverter-type (variable-speed) air conditioners ramp up more gently
          and usually have a much smaller startup surge &mdash; but the only reliable figure is the
          one the manufacturer publishes for your model.
        </p>
        <p>
          Because the gap between running and startup depends on the compressor type and the unit,
          this calculator does not estimate it &mdash; you enter it. The same running-versus-starting
          distinction applies to other motor loads such as a{" "}
          <Link
            href="/sump-pump-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            sump pump
          </Link>{" "}
          or a{" "}
          <Link
            href="/well-pump-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            well pump
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
