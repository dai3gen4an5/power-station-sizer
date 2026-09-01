import Link from "next/link";

export function StarlinkSolarCharging() {
  return (
    <div>
      <h2 className="h2">Solar charging for Starlink</h2>
      <p className="mt-3 text-ink/75">
        Solar panels can help sustain Starlink&apos;s power draw over multiple days by recharging the
        battery during daylight hours. The basic question is whether your daily solar energy recovered can
        keep up with your daily Starlink watt-hour use — if solar input consistently falls short, the
        battery will gradually drain over consecutive days even if it holds up fine for a single day.
        Actual solar input depends on panel wattage, available sun hours, weather, panel angle, and
        charging losses, and most power stations also cap how fast they&apos;ll accept a charge, so it
        isn&apos;t possible to promise a specific number of sun-hours that will work for every setup. The{" "}
        <Link href="/solar-charge-time-calculator" className="font-medium text-brand hover:underline">
          Solar Charge Time Calculator
        </Link>{" "}
        works through those numbers — charge energy, real-world panel input, and peak sun hours — in more
        depth, and the{" "}
        <Link href="/solar-panel-size-calculator" className="font-medium text-brand hover:underline">
          Solar Panel Size Calculator
        </Link>{" "}
        goes the other way, from a recharge deadline to the panel wattage it needs.
      </p>
    </div>
  );
}
