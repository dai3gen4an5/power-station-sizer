export function EkCapacityVsOutputNotice() {
  return (
    <section className="container-prose">
      <div className="card card-pad">
        <span className="eyebrow">Before you rely on this number</span>
        <p className="mt-2 text-sm text-ink/75">
          An electric kettle boils for only a few minutes, so the watt-hours it uses are small
          &mdash; a five-minute boil is a bit over a hundred watt-hours. But its element draws a
          high, steady wattage the whole time, and the inverter has to supply that continuously.
          Battery capacity (watt-hours) and continuous AC output (watts) are separate specifications,
          and a kettle is limited by the second. This calculator sizes the watt-hours from the watts
          and minutes you enter and reports the continuous watts you need. It does not estimate boil
          time from water volume, apply a keep-warm duty cycle, or check voltage and outlet type.
        </p>
      </div>
    </section>
  );
}
