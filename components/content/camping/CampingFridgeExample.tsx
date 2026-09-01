import Link from "next/link";

export function CampingFridgeExample() {
  return (
    <div>
      <h2 className="h2">
        Portable fridge / cooler example
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          A 12V portable compressor fridge or cooler is usually the largest single load on a camping
          trip. It typically draws 40&ndash;60&nbsp;watts while the compressor runs, and it cycles on
          and off rather than running continuously. Over a day that often works out to roughly
          400&ndash;700&nbsp;Wh, though a hot car, a full fridge, or frequent lid-opening pushes it
          higher.
        </p>
        <p>
          That means a 500&nbsp;Wh power station might keep a small cooler going for most of a warm
          day, a 1,000&nbsp;Wh unit for a night or two, and a 2,000&nbsp;Wh unit for a long weekend
          &mdash; before you add lights, charging and everything else. Enter your cooler&apos;s
          measured average draw and equivalent compressor-on hours in the calculator above for a
          number specific to your setup.
        </p>
        <p>
          The{" "}
          <Link
            href="/refrigerator-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            Refrigerator Power Station Calculator
          </Link>{" "}
          covers compressor cycling, duty cycle and startup surge in more detail, and the same
          cycling idea applies to a portable camping fridge.
        </p>
      </div>
    </div>
  );
}
