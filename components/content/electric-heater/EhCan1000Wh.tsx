import Link from "next/link";

export function EhCan1000Wh() {
  return (
    <div>
      <h2 className="h2">
        Can a 1000Wh power station run a space heater?
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Briefly. A 1,000&nbsp;Wh unit has roughly 650&ndash;800&nbsp;Wh usable after inverter
          losses and a reserve:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>At 1,500&nbsp;W, that is about 25&ndash;30 minutes.</li>
          <li>At 1,000&nbsp;W, roughly 40&ndash;50 minutes.</li>
          <li>At 500&nbsp;W on a small heater, around an hour and a half.</li>
        </ul>
        <p>
          Whether it runs at all is a separate question. A 1,000&nbsp;Wh unit with a 1,000&nbsp;W
          inverter cannot sustain a 1,500&nbsp;W heater; some 1,000&nbsp;Wh-class units now ship with
          1,500&nbsp;W or larger inverters and can. Check the continuous AC output rating against your
          heater&apos;s input watts. If you also need to keep a fridge, lights, or a CPAP running,
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
