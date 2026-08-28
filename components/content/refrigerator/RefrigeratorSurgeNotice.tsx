export function RefrigeratorSurgeNotice() {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6">
      <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
        <span className="text-xs font-medium uppercase tracking-wide text-ink/50">
          Before you rely on this number
        </span>
        <p className="mt-2 text-sm text-ink/75">
          Battery capacity (watt-hours) and a power station&apos;s inverter output (watts) are two
          different specs. A refrigerator may run at 150 W but briefly draw several times that much when
          the compressor starts. This calculator estimates the watt-hours you need — it doesn&apos;t check
          whether a power station&apos;s inverter can handle your refrigerator&apos;s starting surge.
          Check your refrigerator&apos;s label or manual for its running and starting wattage, and check
          your power station&apos;s continuous and surge output specifications before relying on it for
          refrigerator backup.
        </p>
      </div>
    </section>
  );
}
