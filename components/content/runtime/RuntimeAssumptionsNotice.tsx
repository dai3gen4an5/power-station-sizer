export function RuntimeAssumptionsNotice() {
  return (
    <section className="container-prose">
      <div className="card card-pad">
        <span className="text-xs font-medium uppercase tracking-wide text-ink/50">
          How to read this estimate
        </span>
        <p className="mt-2 text-sm text-ink/75">
          A runtime estimate assumes your device draws a steady, average amount of power for the whole
          time it runs. Real devices vary — a refrigerator cycles its compressor on and off, a laptop
          draws more while charging than when topped up, and motors briefly pull several times their
          rated watts at startup. This calculator estimates how long the stored energy lasts; it
          doesn&apos;t check whether a power station&apos;s inverter can handle a device&apos;s starting
          surge. Check your device&apos;s label for its running and starting wattage, and your power
          station&apos;s continuous and surge output ratings, before relying on either number.
        </p>
      </div>
    </section>
  );
}
