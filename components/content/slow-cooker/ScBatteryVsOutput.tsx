import Link from "next/link";

export function ScBatteryVsOutput() {
  return (
    <div>
      <h2 className="h2">Battery capacity vs continuous AC output</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          The energy side of this uses the same method as the{" "}
          <Link href="/" className="font-medium text-brand hover:underline">
            main Power Station Size Calculator
          </Link>
          . Two specifications decide whether a power station can run a slow cooker, and they are
          independent:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Battery capacity</span>, in watt-hours (Wh), is
            the stored energy. For a slow cooker this is the number that matters: a low draw over
            many hours is well over a kilowatt-hour, often two or more.
          </li>
          <li>
            <span className="font-medium text-ink">Continuous AC output</span>, in watts (W), is how
            much power the inverter can deliver at once. A slow cooker&apos;s 100&ndash;400&nbsp;W
            sits comfortably inside almost any power station&apos;s inverter, so this is rarely the
            limit.
          </li>
        </ul>
        <p>
          The practical question is whether the battery lasts the whole cook. To check how long a
          given unit runs a steady low load, use the{" "}
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
  );
}
