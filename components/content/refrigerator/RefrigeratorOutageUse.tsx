import Link from "next/link";

export function RefrigeratorOutageUse() {
  return (
    <div>
      <h2 className="h2">
        Using a refrigerator during a power outage
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          For outage planning, decide how many days you want to keep the refrigerator running and
          multiply your daily watt-hour estimate accordingly. Consider whether you&apos;ll have a way to
          recharge the power station during an extended outage, since that affects how much capacity you
          actually need on hand.
        </p>
        <p>
          If you&apos;re also backing up other outage-critical devices, like a CPAP machine, see our{" "}
          <Link href="/cpap-power-calculator" className="font-medium text-brand hover:underline">
            CPAP Power Station Calculator
          </Link>{" "}
          for CPAP-specific guidance, or use the{" "}
          <Link
            href="/home-power-outage-calculator"
            className="font-medium text-brand hover:underline"
          >
            Home Power Outage Calculator
          </Link>{" "}
          to add every essential to one combined outage estimate.
        </p>
      </div>
    </div>
  );
}
