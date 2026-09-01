export function ToPreheatCookTime() {
  return (
    <div>
      <h2 className="h2">Preheat and cook time</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          The calculator uses the minutes you enter as the powered time. A toaster oven typically
          preheats for a few minutes at full power before the bake, and some recipes call for a
          second or third batch. Enter the total:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>A 5-minute preheat plus a 20-minute bake &rarr; enter 25 minutes.</li>
          <li>Two 15-minute bakes back to back &rarr; enter 30 minutes.</li>
          <li>A quick 8-minute reheat with no preheat &rarr; enter 8 minutes.</li>
        </ul>
        <p>
          It does not add a preheat allowance for you &mdash; no automatic +5 or +10 minutes, no
          preset. If the oven is already warm from a previous batch and you skip preheat, your real
          total is lower; adjust the minutes to match.
        </p>
      </div>
    </div>
  );
}
