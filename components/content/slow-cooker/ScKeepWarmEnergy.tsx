import Link from "next/link";

export function ScKeepWarmEnergy() {
  return (
    <div>
      <h2 className="h2">Keep-warm energy</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          The calculator sizes the <span className="font-medium text-ink">cook</span> only. Many
          slow cookers drop to a Warm setting after the cook, or you leave them on Low to hold the
          food, and that can run for hours more. Its power draw is usually lower than the cook, but
          it varies by model, so it is left out of the main calculation rather than guessed.
        </p>
        <p>
          The cook phase and the keep-warm phase usually draw different wattages, so add their energy
          separately &mdash; never as one combined watts &times; hours. Work out{" "}
          <span className="font-medium text-ink">cook energy</span> (cook watts &times; cook hours)
          and <span className="font-medium text-ink">keep-warm energy</span> (keep-warm watts &times;
          keep-warm hours), then add the two watt-hour figures. For example, 250&nbsp;W for 6 hours
          is 1,500&nbsp;Wh, an 80&nbsp;W warm setting for 3 hours is 240&nbsp;Wh, and the total raw
          energy is 1,740&nbsp;Wh. The 80&nbsp;W here is only an illustration &mdash; use your own
          model&apos;s figure. If the maker publishes a single measured figure for a full
          cook-plus-warm cycle, use that instead.
        </p>
        <p>
          To model both phases at once, add them as two rows in the{" "}
          <Link href="/" className="font-medium text-brand hover:underline">
            main Power Station Size Calculator
          </Link>{" "}
          &mdash; one &ldquo;Slow cooker &mdash; cook&rdquo; device at the cook watts and hours, and
          a separate &ldquo;Slow cooker &mdash; keep warm&rdquo; device at the warm watts and hours.
          It calculates each phase separately and adds their watt-hours correctly.
        </p>
      </div>
    </div>
  );
}
