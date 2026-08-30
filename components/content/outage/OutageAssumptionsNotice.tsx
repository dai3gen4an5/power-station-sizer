export function OutageAssumptionsNotice() {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6">
      <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
        <span className="text-xs font-medium uppercase tracking-wide text-ink/50">
          How to read this estimate
        </span>
        <p className="mt-2 text-sm text-ink/75">
          This calculator adds up the watt-hours your chosen devices use, then adjusts for inverter
          losses and the battery reserve you keep to suggest a minimum capacity and a size class. It
          is a planning estimate, not a guarantee. Enter the hours you expect each device to run
          during the outage rather than assuming everything runs continuously &mdash; a refrigerator
          in particular cycles its compressor on and off, so a figure of roughly 8 equivalent hours
          per 24-hour day is closer to reality than 24. The calculator estimates stored energy only;
          it does not check whether a power station&apos;s inverter can start a refrigerator or other
          motor load. Check each device&apos;s running and starting wattage on its label, and the
          power station&apos;s continuous and surge output ratings, before relying on either number.
        </p>
      </div>
    </section>
  );
}
