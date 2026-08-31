import Link from "next/link";

export function CampingHowToUse() {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6">
      <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
        <span className="text-xs font-medium uppercase tracking-wide text-ink/50">
          How to use the camping calculator
        </span>
        <div className="mt-2 space-y-3 text-sm text-ink/75">
          <p>
            List the gear you actually bring &mdash; a portable fridge or cooler, camp lights, a fan,
            phones, a laptop, camera and drone batteries, a CPAP, Starlink &mdash; and, for each item,
            the watts it draws and the hours you run it in a typical day at camp.
          </p>
          <p>
            Set <span className="font-medium">Number of days</span> in Backup settings to how many
            nights you are out: 1 for an overnight, 2 for a weekend, 3 for a long weekend. A portable
            compressor fridge or cooler cycles on and off, so enter its equivalent compressor-on
            hours (often 8&ndash;12 per day depending on heat and how often the lid opens), not 24.
          </p>
          <p>
            Every figure here is a planning estimate, not a guarantee. Replace the example wattages
            with the numbers on your own labels or a plug-in or inline watt-meter reading. To check
            how long one specific power station would last against your load, use the{" "}
            <Link
              href="/power-station-runtime-calculator"
              className="font-medium text-brand hover:underline"
            >
              Power Station Runtime Calculator
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
