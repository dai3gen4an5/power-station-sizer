export function SolarPanelSizeAssumptionsNotice() {
  return (
    <section className="container-prose">
      <div className="card card-pad">
        <span className="text-xs font-medium uppercase tracking-wide text-ink/50">
          How to read this estimate
        </span>
        <div className="mt-2 space-y-3 text-sm text-ink/75">
          <p>
            This calculator works backward from a recharge deadline to a panel rating, using a steady,
            derated solar input. A panel&apos;s rated watts are measured under lab test conditions and
            are rarely sustained outdoors, so don&apos;t assume the number on the panel is what you
            collect all day. Real output changes with weather, cloud cover, the angle of the sun, shade,
            panel temperature, dust, cable and connector losses, and how the charge controller behaves.
          </p>
          <p>
            Charging also tends to slow in the last 10 to 20% as the battery management system tapers
            the current, so a simple linear estimate runs optimistic near a full charge. Treat the
            result as a planning figure and size up from it rather than treating it as an exact minimum.
          </p>
          <p>
            Before buying or combining panels, check your power station&apos;s maximum solar input in
            watts, its accepted voltage and current range, and its connector type against the panel
            specifications. Exceeding the voltage limit in particular can damage the unit. This guide
            does not cover wiring changes — use a configuration the power station and panel
            manufacturers explicitly support rather than improvising connections.
          </p>
        </div>
      </div>
    </section>
  );
}
