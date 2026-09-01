import Link from "next/link";

export function StarlinkOutageUse() {
  return (
    <div>
      <h2 className="h2">Starlink during a power outage</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          During a power outage, decide how many days you want to keep Starlink running and multiply your
          daily watt-hour estimate accordingly. Consider whether you&apos;ll have a way to recharge the
          power station during an extended outage, since that changes how much capacity you actually need
          on hand.
        </p>
        <p>
          For a broader estimate that includes other devices you might want to keep running during the
          same outage, use the full{" "}
          <Link href="/" className="font-medium text-brand hover:underline">
            Power Station Size Calculator
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
