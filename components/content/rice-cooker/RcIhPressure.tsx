import Link from "next/link";

export function RcIhPressure() {
  return (
    <div>
      <h2 className="h2">IH and pressure rice cookers</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Induction-heating (IH) and pressure rice cookers cook faster and more evenly, but they draw
          more power than a simple resistive cooker of the same capacity &mdash; often 1,000&nbsp;W
          or more at peak. That raises both numbers this calculator reports: the cook-cycle energy
          and the continuous AC output the inverter has to supply.
        </p>
        <p>
          There is no fixed conversion. This calculator does not turn &ldquo;IH&rdquo; or
          &ldquo;pressure&rdquo; into a wattage, and it does not multiply a resistive figure to
          estimate one. Read the actual rated input watts off your model&apos;s label and enter that.
          A 1,100&nbsp;W IH cooker is sized just like an 1,100&nbsp;W toaster oven &mdash; see the{" "}
          <Link
            href="/toaster-oven-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            Toaster Oven Power Station Calculator
          </Link>{" "}
          for how a higher continuous-output requirement can move the recommendation up a class.
        </p>
      </div>
    </div>
  );
}
