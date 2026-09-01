import Link from "next/link";

export function RcKeepWarmEnergy() {
  return (
    <div>
      <h2 className="h2">Keep-warm energy</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          The calculator sizes the <span className="font-medium text-ink">cook cycle</span> only.
          Keep-warm runs the element at a low duty cycle to hold the rice at temperature, and over
          several hours it can add as much energy as the cook itself. It is left out of the main
          calculation on purpose, because keep-warm draw varies too much by model to guess.
        </p>
        <p>To account for keep-warm, use whichever of these you can:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Known keep-warm watts.</span> If the manufacturer
            or a watt meter gives you the keep-warm power draw, work out that energy separately
            &mdash; keep-warm watts times keep-warm hours &mdash; and add it to the cook-cycle
            figure. You can enter the combined watts and minutes here as a second pass.
          </li>
          <li>
            <span className="font-medium text-ink">Measured full-cycle energy.</span> If the maker
            only publishes a total measured consumption for a complete cook-plus-keep-warm cycle, use
            that measured watt-hour figure for planning instead of inventing a duty cycle.
          </li>
        </ul>
        <p>
          To see how a low steady keep-warm draw pulls a battery down over a long hold, use the{" "}
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
