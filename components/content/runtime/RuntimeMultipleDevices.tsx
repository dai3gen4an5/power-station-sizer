import Link from "next/link";

export function RuntimeMultipleDevices() {
  return (
    <div>
      <h2 className="h2">
        Runtime when you run several devices at once
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          When more than one device is plugged in, add their average wattages together and divide usable
          capacity by that combined figure. A 60-watt fridge plus a 12-watt router plus a 20-watt fan is
          a 92-watt load, so a 1,000 Wh power station with about 700 Wh usable lasts roughly seven to
          eight hours rather than the longer time any one device would get alone.
        </p>
        <p>
          To estimate a mixed load without doing the arithmetic by hand, open the{" "}
          <Link href="/" className="font-medium text-brand hover:underline">
            Power Station Size Calculator
          </Link>{" "}
          on the homepage, add every device with its wattage and hours, and use the built-in runtime
          estimator. It totals the watt-hours and applies the same efficiency and reserve settings shown
          here.
        </p>
      </div>
    </div>
  );
}
