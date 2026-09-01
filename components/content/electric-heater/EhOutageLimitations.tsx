import Link from "next/link";

export function EhOutageLimitations() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Using an electric heater during a power outage
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Electric resistance heating consumes battery capacity very quickly. A few hours or an
          overnight of heating easily runs into several thousand watt-hours &mdash; often more than a
          single portable power station holds. A large battery does not change the physics; put your
          real heater watts and hours into the calculator above and watch the recommended capacity
          climb.
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
            Use a heater in short, targeted bursts to take the edge off one room, not as continuous
            heat.
          </li>
          <li>
            Prefer a lower-wattage personal heater, and combine it with warm clothing, blankets, and
            closing off unused rooms.
          </li>
        </ul>
        <p>
          A portable power station is a short-term bridge, not a replacement for a furnace or a
          whole-home heating system.
        </p>
      </div>
    </div>
  );
}
