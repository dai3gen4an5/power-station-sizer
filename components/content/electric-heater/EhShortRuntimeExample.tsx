import Link from "next/link";
import { getTimedEnergyWh } from "@/lib/calculator/power-output";
import { formatWh } from "@/lib/utils/format";

const WATTS = 1500;
const MINUTES = 10;

export function EhShortRuntimeExample() {
  const rawWh = getTimedEnergyWh(WATTS, MINUTES);

  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">Short-runtime example</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          High wattage does not always mean a huge watt-hour total. A{" "}
          {WATTS.toLocaleString("en-US")}&nbsp;W heater run for only {MINUTES} minutes uses{" "}
          <span className="font-mono">
            {WATTS.toLocaleString("en-US")} W &times; {MINUTES} min / 60 = {formatWh(rawWh)}
          </span>{" "}
          of raw energy &mdash; a small battery could hold that.
        </p>
        <p>
          The output requirement does not shrink, though: for those 10 minutes the power station
          still has to deliver the full {WATTS.toLocaleString("en-US")}&nbsp;W continuously. This is
          the case where the recommendation below can point to a{" "}
          <span className="font-medium text-ink">larger class than your energy figure alone
          suggests</span>: if your battery requirement fits the 500&nbsp;Wh range but the smallest
          listed unit with a confirmed {WATTS.toLocaleString("en-US")}&nbsp;W continuous rating is in
          the 1,000&nbsp;Wh range, that is the class shown. The calculator&apos;s own size figure
          does not change &mdash; only the affiliate match moves up.
        </p>
        <p>
          The same short-burst, output-limited pattern applies to a{" "}
          <Link href="/microwave-power-calculator" className="font-medium text-brand hover:underline">
            microwave
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
