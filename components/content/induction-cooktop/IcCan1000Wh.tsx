import Link from "next/link";

export function IcCan1000Wh() {
  return (
    <div>
      <h2 className="h2">Can a 1000Wh power station run an induction cooktop?</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          For a short cook, sometimes &mdash; but it is close to the limit on both specs. A
          1,000&nbsp;Wh unit has roughly 650&ndash;800&nbsp;Wh usable. A 15-minute boil at
          1,800&nbsp;W is about 450&nbsp;Wh raw and near 660&nbsp;Wh once you allow for inverter
          losses and a reserve, so a single quick cook fits; a full 30-minute meal at that wattage is
          around 900&nbsp;Wh raw and over 1,300&nbsp;Wh recommended, which a 1,000&nbsp;Wh unit
          cannot cover.
        </p>
        <p>
          Output is the harder limit. A 1,000&nbsp;Wh power station with a 1,000&nbsp;W inverter
          cannot sustain a 1,500&ndash;1,800&nbsp;W cooktop at all. Only a 1,000&nbsp;Wh-class unit
          with a 1,500&nbsp;W or larger continuous inverter can run one, and an 1,800&nbsp;W cooktop
          needs an inverter rated at least that high. Check the continuous rating against your
          cooktop&apos;s input watts. If you also want to keep a fridge, lights, or a router going
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
