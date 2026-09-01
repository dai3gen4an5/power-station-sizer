import Link from "next/link";

export function SumpPumpRuntime() {
  return (
    <div>
      <h2 className="h2">
        How long can a power station run a sump pump?
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          It depends on the pump&apos;s running watts, how many minutes of each hour it runs, and the
          usable energy in the power station (its rated capacity minus inverter loss and any
          reserve). Divide usable watt-hours by the pump&apos;s average hourly energy use to get the
          number of hours of backup.
        </p>
        <p>
          For a pump drawing 800&nbsp;watts that runs 10 minutes per hour, average use is about
          133&nbsp;Wh per hour. A 1,000&nbsp;Wh power station with roughly 650&ndash;800&nbsp;Wh
          usable would then cover about 5 to 6 hours; a 2,000&nbsp;Wh unit about 10 to 12 hours. In a
          heavy storm the pump may run 20&nbsp;minutes or more per hour, which cuts those times
          roughly in half.
        </p>
        <p>
          These are averages. Actual runtime also depends on temperature, battery age, the real
          inrush at each start, and how often the pump cycles. Enter your own figures in the
          calculator above, and use the{" "}
          <Link
            href="/power-station-runtime-calculator"
            className="font-medium text-brand hover:underline"
          >
            Power Station Runtime Calculator
          </Link>{" "}
          to explore a specific unit against a steady load. If you also want to back up a
          refrigerator, lights and other essentials in the same outage, the{" "}
          <Link
            href="/home-power-outage-calculator"
            className="font-medium text-brand hover:underline"
          >
            Home Power Outage Calculator
          </Link>{" "}
          adds them all into one estimate.
        </p>
      </div>
    </div>
  );
}
