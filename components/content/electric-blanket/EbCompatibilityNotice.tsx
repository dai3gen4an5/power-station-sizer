export function EbCompatibilityNotice() {
  return (
    <section className="container-prose">
      <div className="rounded-card border border-amber-200 bg-amber-50/70 p-5 text-sm leading-relaxed text-amber-900 sm:p-6">
        <p className="font-semibold">Check the blanket manual before using it on a power station</p>
        <p className="mt-2 text-amber-800">
          This tool works out the battery capacity and AC output for a household AC electric blanket.
          Electrical capacity alone does not prove compatibility. Some heated blankets and heated
          bedding products state in their manual that they must not be run from a generator, a power
          inverter, or a converter, even when the voltage looks right. Before using any AC heated
          blanket from a portable power station, read the blanket manufacturer&apos;s manual and
          confirm that inverter, generator, or portable-power-station use is permitted &mdash; a pure
          sine wave output does not make it compatible on its own. If the manufacturer prohibits it,
          do not run the blanket from the power station&apos;s AC outlet. This page sizes energy, not
          safety.
        </p>
      </div>
    </section>
  );
}
