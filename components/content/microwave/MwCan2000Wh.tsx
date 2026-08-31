export function MwCan2000Wh() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Can a 2000Wh power station run a microwave?
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          For most countertop microwaves, yes. A 2,000&nbsp;Wh power station usually pairs with a
          2,000&nbsp;W or larger inverter, which covers the 1,200&ndash;1,800&nbsp;W input of a
          typical unit with headroom to spare. Energy is not the issue &mdash; around
          1,300&ndash;1,600&nbsp;Wh usable is dozens of short sessions.
        </p>
        <p>
          It is still not automatic. A few things to confirm:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            The inverter&apos;s <span className="font-medium text-ink">continuous</span> rating, not
            a brief surge number, is at or above your microwave&apos;s input watts.
          </li>
          <li>
            A large commercial or high-output microwave can exceed 2,000&nbsp;W input and needs a
            bigger inverter.
          </li>
          <li>
            The outlet and a pure sine wave inverter suit the microwave&apos;s electronics.
          </li>
        </ul>
        <p>
          Enter your measured input watts in the calculator above and compare the required continuous
          output it reports with the power station&apos;s spec.
        </p>
      </div>
    </div>
  );
}
