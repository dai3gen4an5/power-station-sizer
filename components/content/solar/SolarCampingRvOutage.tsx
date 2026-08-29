import Link from "next/link";

export function SolarCampingRvOutage() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Solar charging for camping, RV, and outage use
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          <span className="font-medium text-ink">Camping.</span> The question that matters is whether a
          day of sun replaces a day of use. Estimate your daily consumption with the{" "}
          <Link href="/" className="font-medium text-brand hover:underline">
            Power Station Size Calculator
          </Link>
          , then check whether your panel can realistically collect that much in your available peak sun
          hours. Carry a bit more battery than one perfect day requires so a cloudy afternoon
          doesn&apos;t leave you short.
        </p>
        <p>
          <span className="font-medium text-ink">RV and van.</span> Fixed roof panels are convenient but
          rarely at the ideal angle, so their real-world efficiency is on the low side; a portable panel
          you can aim at the sun often out-produces a larger flat array. Watch the power station&apos;s
          maximum solar input if you plan to combine roof and portable panels.
        </p>
        <p>
          <span className="font-medium text-ink">Power outage.</span> Solar turns a fixed battery into a
          rechargeable one, which is what lets you ride out a multi-day outage. Pair it with restrained
          loads — see the{" "}
          <Link href="/power-station-runtime-calculator" className="font-medium text-brand hover:underline">
            Power Station Runtime Calculator
          </Link>{" "}
          to see how long a charge lasts a given device. Device-specific guidance is available for{" "}
          <Link href="/refrigerator-power-calculator" className="font-medium text-brand hover:underline">
            refrigerators
          </Link>{" "}
          and{" "}
          <Link href="/starlink-power-calculator" className="font-medium text-brand hover:underline">
            Starlink
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
