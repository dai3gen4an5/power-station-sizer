import Link from "next/link";

export function AcSolarRuntime() {
  return (
    <div>
      <h2 className="h2">
        How solar recharging affects AC runtime
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          An air conditioner is one of the heaviest loads people try to run from a power station, so
          solar rarely keeps up with it in real time. A 900-watt unit running 40 minutes of each
          hour averages about 600&nbsp;Wh per hour, while a portable panel of a few hundred watts
          often delivers well under that once weather, angle, and heat derating are counted.
        </p>
        <p>
          Where solar helps is stretching daytime use and recharging between runs: cool the space
          hard while the sun is strong and the panel is offsetting part of the draw, then let the
          battery coast in the evening. Plan for partial offset, not a full match, and keep a
          reserve.
        </p>
        <p>
          The{" "}
          <Link
            href="/solar-charge-time-calculator"
            className="font-medium text-brand hover:underline"
          >
            Solar Charge Time Calculator
          </Link>{" "}
          estimates how long a given panel takes to refill a unit, and the{" "}
          <Link
            href="/solar-panel-size-calculator"
            className="font-medium text-brand hover:underline"
          >
            Solar Panel Size Calculator
          </Link>{" "}
          works out how many panel watts you would need to keep pace with a given daily figure.
        </p>
      </div>
    </div>
  );
}
