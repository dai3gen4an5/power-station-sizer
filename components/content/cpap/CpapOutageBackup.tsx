import Link from "next/link";

export function CpapOutageBackup() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">CPAP backup during a power outage</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          For outage planning, decide how many nights you want to cover and multiply your nightly
          watt-hour estimate accordingly — roughly double your one-night figure for two nights, triple it
          for three, and so on. Consider whether you&apos;ll have any way to recharge during an extended
          outage, such as a vehicle, solar panel, or generator, since that changes how much capacity you
          actually need to keep on hand.
        </p>
        <p>
          If you&apos;re also backing up a refrigerator, Wi-Fi router, or other devices during the same
          outage, use the{" "}
          <Link
            href="/home-power-outage-calculator"
            className="font-medium text-brand hover:underline"
          >
            Home Power Outage Calculator
          </Link>{" "}
          to add them all to one estimate.
        </p>
        <p>
          This calculator is a planning aid, not a substitute for your CPAP manufacturer&apos;s guidance or
          a personal emergency preparedness plan. For medical-necessity power needs, it&apos;s worth
          discussing backup options directly with your equipment supplier or clinician.
        </p>
      </div>
    </div>
  );
}
