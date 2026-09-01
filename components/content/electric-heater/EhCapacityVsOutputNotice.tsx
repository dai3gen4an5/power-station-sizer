export function EhCapacityVsOutputNotice() {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6">
      <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
        <span className="text-xs font-medium uppercase tracking-wide text-ink/50">
          Before you rely on this number
        </span>
        <p className="mt-2 text-sm text-ink/75">
          An electric heater tests a power station in two independent ways. Battery capacity
          (watt-hours) sets how long it can run, and resistance heat spends that budget fast &mdash;
          a couple of hours can be several thousand watt-hours. The inverter&apos;s continuous AC
          output (watts) decides whether the heater runs at all: it has to supply the heater&apos;s
          full input watts for the entire run. This calculator sizes the watt-hours from the watts
          and hours you enter and reports the continuous watts you need. It does not apply a
          thermostat duty cycle for you, and it does not check voltage or outlet type &mdash; confirm
          those separately.
        </p>
      </div>
    </section>
  );
}
