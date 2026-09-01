import Link from "next/link";

export function RcKeepWarmEnergy() {
  return (
    <div>
      <h2 className="h2">Keep-warm energy</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          The calculator sizes the <span className="font-medium text-ink">cook cycle</span> only.
          Keep-warm may cycle or modulate the heater to hold the rice at temperature, and its average
          power draw varies substantially by model. Over several hours it can add as much energy as
          the cook itself. It is left out of the main calculation on purpose, because that draw is too
          model-specific to guess.
        </p>
        <p>To account for keep-warm, use whichever of these you can:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Known keep-warm watts.</span> The cook phase and
            the keep-warm phase usually draw different wattages, so add their energy separately
            &mdash; never as one combined watts &times; minutes. Work out{" "}
            <span className="font-medium text-ink">cook energy</span> (cook watts &times; cook hours)
            and <span className="font-medium text-ink">keep-warm energy</span> (keep-warm watts
            &times; keep-warm hours), then add the two. For example, 700&nbsp;W for 45&nbsp;minutes is
            525&nbsp;Wh, a 40&nbsp;W keep-warm draw for 3&nbsp;hours is 120&nbsp;Wh, and the total raw
            energy is 645&nbsp;Wh. The 40&nbsp;W here is only an illustration &mdash; use your own
            model&apos;s figure.
          </li>
          <li>
            <span className="font-medium text-ink">Measured full-cycle energy.</span> If the maker
            only publishes a total measured consumption for a complete cook-plus-keep-warm cycle, use
            that measured watt-hour figure for planning instead of inventing a duty cycle.
          </li>
        </ul>
        <p>
          To model both phases at once, add them as two rows in the{" "}
          <Link href="/" className="font-medium text-brand hover:underline">
            main Power Station Size Calculator
          </Link>{" "}
          &mdash; one &ldquo;Rice cooker &mdash; cook&rdquo; device at the cook watts and runtime,
          and a separate &ldquo;Rice cooker &mdash; keep warm&rdquo; device at the keep-warm watts
          and hours. It calculates each phase separately and adds their watt-hours correctly. To see
          how a low steady keep-warm draw pulls a battery down over a long hold, use the{" "}
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
