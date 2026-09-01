import Link from "next/link";

export function CmShortRuntimeHighOutput() {
  return (
    <div>
      <h2 className="h2">
        Why short runtime still needs high inverter output
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          A coffee maker is only on for a few minutes, so it barely touches the battery. But for
          those minutes it draws its full wattage without pause. The inverter has to deliver that the
          entire time or it trips &mdash; the short duration does not make the load any lighter while
          it runs.
        </p>
        <p>
          This is why the recommendation below can point to a{" "}
          <span className="font-medium text-ink">larger class than your energy figure alone
          suggests</span>. If your battery requirement fits the smallest range but that range&apos;s
          listed units cannot supply your coffee maker&apos;s watts, the section moves up to the
          first class whose units have a confirmed continuous rating that meets the load, and shows a
          short note explaining why. The calculator&apos;s own size figure stays put.
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
          .
        </p>
      </div>
    </div>
  );
}
