import Link from "next/link";

export function EbCampingRv() {
  return (
    <div>
      <h2 className="h2">Camping and RV use</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Camping.</span> A heated blanket is a far more
            efficient way to stay warm than a space heater &mdash; tens of watts instead of over a
            thousand. A 12V blanket is the lightest option off-grid because it skips the inverter.
            The{" "}
            <Link
              href="/camping-power-station-calculator"
              className="font-medium text-brand hover:underline"
            >
              Camping Power Station Calculator
            </Link>{" "}
            sizes it alongside the rest of your gear.
          </li>
          <li>
            <span className="font-medium text-ink">RV.</span> The inverter will not notice a blanket;
            the question is how many amp-hours of the house bank a full night uses, especially on
            several cold nights between charges. The{" "}
            <Link
              href="/rv-power-station-calculator"
              className="font-medium text-brand hover:underline"
            >
              RV Power Station Calculator
            </Link>{" "}
            covers 12V and AC loads together.
          </li>
        </ul>
        <p>
          A blanket pairs naturally with other quiet overnight loads. A{" "}
          <Link href="/cpap-power-calculator" className="font-medium text-brand hover:underline">
            CPAP
          </Link>{" "}
          is a similar few-hundred-watt-hour job, and a{" "}
          <Link href="/slow-cooker-power-calculator" className="font-medium text-brand hover:underline">
            slow cooker
          </Link>{" "}
          is the daytime version of the same trade &mdash; low watts, long hours, capacity-limited
          rather than output-limited.
        </p>
      </div>
    </div>
  );
}
