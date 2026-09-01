export function RcCookTimeDifferences() {
  return (
    <div>
      <h2 className="h2">Cook time differences</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          The minutes you enter are the powered time for one cook cycle, and that varies a lot. The
          calculator does not pick a time for you &mdash; there is no built-in &ldquo;white rice = 30
          minutes&rdquo; or &ldquo;brown rice = 60 minutes&rdquo;. Cook time depends on:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>the rice cooker model and how much power it draws;</li>
          <li>the amount of rice and water;</li>
          <li>the rice type &mdash; white, brown, mixed grain, porridge;</li>
          <li>the mode &mdash; quick, standard, soak-and-cook, pressure.</li>
        </ul>
        <p>
          Time the cycle on your own cooker, or read the cycle length from its manual, and enter
          that. A longer cycle for brown rice or a soak step raises the cook-cycle energy in direct
          proportion.
        </p>
      </div>
    </div>
  );
}
