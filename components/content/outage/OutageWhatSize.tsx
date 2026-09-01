import Link from "next/link";

export function OutageWhatSize() {
  return (
    <div>
      <h2 className="h2">
        What size power station do I need for a power outage?
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          There is no single answer, because it depends on which devices you want to keep running and
          for how long. The method is always the same: list each essential, estimate its wattage and
          how many hours it will actually run during the outage, add up the watt-hours, then add
          headroom for inverter losses and the reserve you keep on the battery. The calculator above
          does this for you and maps the result to a rough capacity class.
        </p>
        <p>
          As a rough guide, keeping phones, Wi-Fi and a few lights going for a day needs only a few
          hundred watt-hours, so a 300&ndash;500&nbsp;Wh unit can be enough. Add a refrigerator and
          the daily total usually climbs past 1,500&nbsp;Wh, which points at a 2,000&nbsp;Wh or larger
          power station for a full 24 hours. Multi-day outages either need a much larger unit or a way
          to recharge, such as{" "}
          <Link
            href="/solar-panel-size-calculator"
            className="font-medium text-brand hover:underline"
          >
            solar panels
          </Link>
          .
        </p>
        <p>
          For one device in isolation, the{" "}
          <Link href="/" className="font-medium text-brand hover:underline">
            main Power Station Size Calculator
          </Link>{" "}
          and the device-specific calculators can give a more focused estimate.
        </p>
      </div>
    </div>
  );
}
