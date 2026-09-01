import Link from "next/link";

export function HdShortUseLargerStation() {
  return (
    <div>
      <h2 className="h2">Why short use can still require a larger power station</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          A hair dryer is only on for a few minutes, so it barely touches the battery. But for those
          minutes it draws its full wattage without pause. The inverter has to deliver that the
          entire time or it trips &mdash; the short duration does not make the load any lighter while
          it runs.
        </p>
        <p>
          This is why the recommendation below can point to a{" "}
          <span className="font-medium text-ink">larger product range than your energy figure
          alone suggests</span>. If your battery requirement fits the smallest recommendation range
          but that range&apos;s listed units cannot supply your dryer&apos;s watts, the section moves
          up to the first range whose units have a confirmed continuous rating that meets the load,
          and shows a short note explaining why. The calculator&apos;s own rounded size figure stays
          put.
        </p>
        <p>
          The same short-burst, output-limited pattern applies to a{" "}
          <Link href="/microwave-power-calculator" className="font-medium text-brand hover:underline">
            microwave
          </Link>{" "}
          and, over longer runs, an{" "}
          <Link
            href="/electric-heater-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            electric heater
          </Link>
          . To see how few watt-hours a brief high-wattage load consumes, try the{" "}
          <Link
            href="/power-station-runtime-calculator"
            className="font-medium text-brand hover:underline"
          >
            Power Station Runtime Calculator
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
