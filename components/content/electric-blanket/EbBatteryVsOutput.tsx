import Link from "next/link";

export function EbBatteryVsOutput() {
  return (
    <div>
      <h2 className="h2">Battery capacity vs AC output</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          The energy side of this uses the same method as the{" "}
          <Link href="/" className="font-medium text-brand hover:underline">
            main Power Station Size Calculator
          </Link>
          . Two specifications decide whether a power station can run an electric blanket, and they
          are independent:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Battery capacity</span>, in watt-hours (Wh), is
            the stored energy. For a blanket this is the number that matters: a low draw over a full
            night is several hundred watt-hours, sometimes more than a kilowatt-hour on a high
            setting.
          </li>
          <li>
            <span className="font-medium text-ink">AC output</span>, in watts (W), is how much power
            the inverter can deliver at once. A blanket&apos;s draw &mdash; typically tens of watts,
            sometimes over 100&nbsp;W &mdash; sits inside the listed power stations&apos; inverters,
            so among those units AC output is usually not the limiting specification. Manufacturer
            compatibility still has to be checked separately.
          </li>
        </ul>
        <p>
          The practical electrical question is whether the battery lasts until you wake up. To check
          how long a given unit runs a steady low load, use the{" "}
          <Link
            href="/power-station-runtime-calculator"
            className="font-medium text-brand hover:underline"
          >
            Power Station Runtime Calculator
          </Link>
          . Sizing does not replace the blanket manual: some heated bedding is not rated for inverter
          or generator power at all.
        </p>
      </div>
    </div>
  );
}
