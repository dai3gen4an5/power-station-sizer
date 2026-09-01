import Link from "next/link";

export function ToCan1000Wh() {
  return (
    <div>
      <h2 className="h2">Can a 1000Wh power station run a toaster oven?</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          For a short cook, sometimes &mdash; but it is close to the limit. A 1,000&nbsp;Wh unit has
          roughly 650&ndash;800&nbsp;Wh usable. A 10-to-15-minute reheat at 1,500&nbsp;W is a few
          hundred watt-hours and fits with room to spare; a full 30-minute bake at that wattage is
          750&nbsp;Wh raw and over 1,100&nbsp;Wh recommended, which a 1,000&nbsp;Wh unit cannot
          cover.
        </p>
        <p>
          Output is the harder limit. A 1,000&nbsp;Wh power station with a 1,000&nbsp;W inverter
          cannot sustain a 1,500&ndash;1,800&nbsp;W toaster oven at all. A 1,000&nbsp;Wh-class unit
          with a 1,500&nbsp;W or larger inverter can run a 1,500&nbsp;W oven, and an 1,800&nbsp;W
          oven needs a bigger inverter still. Check the continuous rating against your oven&apos;s
          input watts. If you also want to keep a fridge, lights, or a router going during an outage,
          add them together in the{" "}
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
