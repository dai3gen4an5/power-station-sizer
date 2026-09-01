export function CmCapacityVsOutputNotice() {
  return (
    <section className="container-prose">
      <div className="card card-pad">
        <span className="text-xs font-medium uppercase tracking-wide text-ink/50">
          Before you rely on this number
        </span>
        <p className="mt-2 text-sm text-ink/75">
          A coffee maker runs for only a few minutes, so the watt-hours it uses are modest &mdash; a
          10-minute brew is a couple of hundred watt-hours. But its heating element draws a high,
          steady wattage the whole time it is on, and the inverter has to supply that continuously.
          Battery capacity (watt-hours) and continuous AC output (watts) are separate specifications,
          and a coffee maker is usually limited by the second. This calculator sizes the watt-hours
          from the watts and minutes you enter and reports the continuous watts you need. It does not
          apply a brew-cycle or keep-warm duty cycle for you, and it does not check voltage or outlet
          type.
        </p>
      </div>
    </section>
  );
}
