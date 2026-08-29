export function SolarChargeAssumptionsNotice() {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6">
      <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
        <span className="text-xs font-medium uppercase tracking-wide text-ink/50">
          How to read this estimate
        </span>
        <div className="mt-2 space-y-3 text-sm text-ink/75">
          <p>
            This calculator gives an ideal-conditions figure: energy needed divided by a steady,
            derated solar input. Real charge speed changes with weather, cloud cover, time of day, the
            angle of the sun, shade on the panel, panel temperature, dust, cable length, connector
            losses, and the behaviour of the charge controller (MPPT or PWM). Treat the result as a
            planning estimate, not a guarantee.
          </p>
          <p>
            A panel&apos;s rated watts are measured under lab test conditions and are rarely sustained
            outdoors — don&apos;t assume a 200-watt panel delivers 200 watts continuously. Charging also
            tends to slow down in the last 10 to 20% as the battery management system tapers the current,
            so a simple linear estimate runs optimistic near a full charge.
          </p>
          <p>
            Before connecting any panel, check your power station&apos;s maximum solar input (watts),
            its accepted voltage and current range, and its connector type against the panel&apos;s
            specifications. This guide does not cover wiring changes — follow the instructions from your
            power station and panel manufacturers rather than improvising connections.
          </p>
        </div>
      </div>
    </section>
  );
}
