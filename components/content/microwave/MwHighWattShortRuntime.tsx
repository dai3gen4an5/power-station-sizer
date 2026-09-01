import Link from "next/link";

export function MwHighWattShortRuntime() {
  return (
    <div>
      <h2 className="h2">
        Why high wattage but short runtime matters
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          A microwave is unusual among household loads: it pulls a lot of power &mdash; often
          1,200&ndash;1,800&nbsp;W of input &mdash; but only for a few minutes at a time. That
          combination flips the usual sizing question.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Watt-hours are small.</span> Minutes of run time
            keep the energy total in the low hundreds of Wh even for a heavy day of use, so almost
            any power station holds enough.
          </li>
          <li>
            <span className="font-medium text-ink">Watts are large.</span> For those minutes the
            inverter has to deliver the full input wattage continuously. If its continuous rating is
            below that, it trips &mdash; regardless of battery size.
          </li>
        </ul>
        <p>
          So the useful check is not &ldquo;how many Wh do I need&rdquo; but &ldquo;is the
          inverter&apos;s continuous output at least my microwave&apos;s input watts&rdquo;. The{" "}
          <Link
            href="/power-station-runtime-calculator"
            className="font-medium text-brand hover:underline"
          >
            Power Station Runtime Calculator
          </Link>{" "}
          shows how little runtime a high-wattage load actually consumes. For a heavier, longer-running
          load with a real motor surge, the{" "}
          <Link
            href="/air-conditioner-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            Air Conditioner Power Station Calculator
          </Link>{" "}
          covers both capacity and surge.
        </p>
      </div>
    </div>
  );
}
