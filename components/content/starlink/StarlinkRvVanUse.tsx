import Link from "next/link";

export function StarlinkRvVanUse() {
  return (
    <div>
      <h2 className="h2">Starlink for RV / van use</h2>
      <p className="mt-3 text-ink/75">
        RV and van setups often run Starlink for extended periods alongside other electronics, so
        it&apos;s worth thinking about total daily energy use rather than Starlink in isolation. A
        dedicated house battery bank or a larger power station, paired with solar or alternator charging,
        is common for full-time or long-term van life use, since relying on a single small power station
        for all-day connectivity plus other loads can drain it faster than expected.
      </p>
      <p className="mt-3 text-ink/75">
        To size a unit for Starlink plus your fridge, lights, fan and other camping loads together,
        use the{" "}
        <Link
          href="/rv-power-station-calculator"
          className="font-medium text-brand hover:underline"
        >
          RV Power Station Calculator
        </Link>
        .
      </p>
    </div>
  );
}
