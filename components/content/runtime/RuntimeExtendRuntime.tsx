import Link from "next/link";

export function RuntimeExtendRuntime() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        How to make a power station run longer
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Recharge with solar.</span> A panel that keeps up
            with your daily consumption effectively removes the runtime limit for as long as the sun
            cooperates. Sustained multi-day use comes down to whether daily solar input matches daily
            draw — the{" "}
            <Link href="/solar-charge-time-calculator" className="font-medium text-brand hover:underline">
              Solar Charge Time Calculator
            </Link>{" "}
            estimates how long a panel needs to refill the battery.
          </li>
          <li>
            <span className="font-medium text-ink">Run devices on DC.</span> Powering a fridge, fan, or
            CPAP from a 12V outlet skips the inverter and recovers the 10 to 20% lost to AC conversion.
          </li>
          <li>
            <span className="font-medium text-ink">Use eco or power-saving mode.</span> Many units drop
            the AC output or auto-shut-off when the load is tiny, cutting idle drain.
          </li>
          <li>
            <span className="font-medium text-ink">Lower the load.</span> Dim a screen, lower a heater&apos;s
            setpoint, or swap an incandescent lamp for LED — runtime scales inversely with watts.
          </li>
          <li>
            <span className="font-medium text-ink">Keep the battery moderate in temperature.</span> A
            cold pack delivers less energy; extreme heat runs the fans harder. Room temperature is the
            sweet spot.
          </li>
          <li>
            <span className="font-medium text-ink">Reduce your reserve carefully.</span> Spending more of
            the battery buys runtime at the cost of long-term battery health — reasonable in a genuine
            emergency, less so as a daily habit.
          </li>
        </ul>
        <p>
          If you&apos;re sizing rather than stretching, the{" "}
          <Link href="/" className="font-medium text-brand hover:underline">
            Power Station Size Calculator
          </Link>{" "}
          works the problem in the other direction — from the runtime you need to the capacity to buy.
          Device-specific guides are also available for{" "}
          <Link href="/refrigerator-power-calculator" className="font-medium text-brand hover:underline">
            refrigerators
          </Link>
          ,{" "}
          <Link href="/cpap-power-calculator" className="font-medium text-brand hover:underline">
            CPAP machines
          </Link>
          , and{" "}
          <Link href="/starlink-power-calculator" className="font-medium text-brand hover:underline">
            Starlink
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
