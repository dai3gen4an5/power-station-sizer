import Link from "next/link";

export function RvHowToUse() {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6">
      <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
        <span className="text-xs font-medium uppercase tracking-wide text-ink/50">
          How to use this RV estimate
        </span>
        <div className="mt-2 space-y-3 text-sm text-ink/75">
          <p>
            List the appliances you actually run in the RV, camper or van and, for each one, the
            watts it draws and the hours it runs in a typical day. The calculator adds up the
            watt-hours, then adjusts for inverter losses and the battery reserve you keep to suggest a
            minimum capacity and a size class.
          </p>
          <p>
            Set <span className="font-medium">Number of days</span> in Backup settings to the length
            of your trip &mdash; 2 for a weekend, 3 or more for a longer stay &mdash; or leave it at 1
            to size a single day and plan to recharge. A 12V compressor fridge cycles on and off, so
            enter its equivalent compressor-on hours (often 8&ndash;14 per day depending on heat and
            how often the door opens) rather than 24.
          </p>
          <p>
            Every figure here is a planning estimate, not a guarantee. Replace the example wattages
            with the numbers on your own appliance labels or, better, a plug-in or inline watt-meter
            reading. To check how long one specific power station would last against your load, use
            the{" "}
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
