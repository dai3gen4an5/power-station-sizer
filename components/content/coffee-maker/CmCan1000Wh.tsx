import Link from "next/link";

export function CmCan1000Wh() {
  return (
    <div>
      <h2 className="h2">
        Can a 1000Wh power station run a coffee maker?
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          For energy, easily &mdash; a 1,000&nbsp;Wh unit with about 650&ndash;800&nbsp;Wh usable is
          many brews&apos; worth, since a single brew is only a couple of hundred watt-hours.
        </p>
        <p>
          Output is the deciding factor. A 1,000&nbsp;Wh power station with a 1,000&nbsp;W inverter
          cannot sustain a 1,200&ndash;1,500&nbsp;W coffee maker; a 1,000&nbsp;Wh-class unit with a
          1,500&nbsp;W or larger inverter can. Check the continuous rating against your
          machine&apos;s input watts. If you also want to keep a fridge, lights, or a router going
          during an outage, add them together in the{" "}
          <Link
            href="/home-power-outage-calculator"
            className="font-medium text-brand hover:underline"
          >
            Home Power Outage Calculator
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
