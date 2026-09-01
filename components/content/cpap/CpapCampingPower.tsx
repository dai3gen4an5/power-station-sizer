import Link from "next/link";

export function CpapCampingPower() {
  return (
    <div>
      <h2 className="h2">CPAP camping power</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Multi-night trips add planning considerations beyond a single night at home. Multiply your
          nightly watt-hour estimate by the number of nights to get a rough baseline, then add extra
          reserve since recharging opportunities may be limited. Solar panels paired with a power station
          can recharge during the day, but output varies with weather, panel size, and daylight hours, so
          it&apos;s worth not counting on a full recharge every day. Running a CPAP directly from a 12V DC
          source, where your machine supports it, generally wastes less energy than routing through an AC
          inverter, since it skips a conversion step. Cold temperatures can also reduce a battery&apos;s
          usable capacity, so budget extra margin for cold-weather trips.
        </p>
        <p>
          If you&apos;re also running Starlink at the same campsite, see our{" "}
          <Link href="/starlink-power-calculator" className="font-medium text-brand hover:underline">
            Starlink Power Station Calculator
          </Link>{" "}
          to size a battery that covers both.
        </p>
      </div>
    </div>
  );
}
