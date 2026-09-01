import Link from "next/link";

export function AfWhyHighWattage() {
  return (
    <div>
      <h2 className="h2">Why high wattage matters</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          An air fryer draws its full wattage whenever the element is on, and it runs for 15 to 40
          minutes rather than the few minutes a microwave needs. That combination means the inverter
          has to sustain a heavy load for a while, and the watt-hour total is larger than for most
          short kitchen appliances.
        </p>
        <p>
          The recommendation below can therefore land in a{" "}
          <span className="font-medium text-ink">larger product range than the battery figure alone
          suggests</span>: if the range that matches the watt-hours does not have listed units with
          enough confirmed continuous AC output, the section moves up to the first range that does,
          and explains why. The calculator&apos;s own rounded size figure stays put.
        </p>
        <p>
          The same output-limited pattern applies to a{" "}
          <Link href="/microwave-power-calculator" className="font-medium text-brand hover:underline">
            microwave
          </Link>{" "}
          and, over longer runs, an{" "}
          <Link
            href="/electric-heater-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            electric heater
          </Link>
          . To see how a steady load draws down a given unit, use the{" "}
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
