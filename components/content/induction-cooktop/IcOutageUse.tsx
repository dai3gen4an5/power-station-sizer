import Link from "next/link";

export function IcOutageUse() {
  return (
    <div>
      <h2 className="h2">Induction cooking during a power outage</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          A portable induction cooktop is a clean way to cook a hot meal from a power station during
          an outage, but it is a heavy load. A 1,500&ndash;1,800&nbsp;W burner needs a power station
          that can supply that continuously, and a full meal plus a second dish approaches a
          kilowatt-hour after losses.
        </p>
        <p>
          For an outage, that usually means:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Back up essentials first &mdash; medical equipment, the refrigerator, lighting,
            communication &mdash; and size those with the{" "}
            <Link
              href="/home-power-outage-calculator"
              className="font-medium text-brand hover:underline"
            >
              Home Power Outage Calculator
            </Link>
            .
          </li>
          <li>
            Confirm the inverter&apos;s continuous rating covers your cooktop&apos;s input watts
            before relying on it.
          </li>
          <li>
            Cook one burner at a time and recharge between meals if you can; a microwave or kettle is
            far lighter on the battery for simple reheating or boiling.
          </li>
        </ul>
      </div>
    </div>
  );
}
