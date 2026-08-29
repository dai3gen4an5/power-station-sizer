import Link from "next/link";

export function StarlinkRuntimeExplainer() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        How long will a power station run Starlink?
      </h2>
      <p className="mt-3 text-ink/75">
        The concept is simple: usable battery energy divided by Starlink&apos;s average power draw gives
        an approximate runtime. The runtime estimator built into the calculator above does this
        automatically, using your entered wattage, hours, efficiency, and reserve settings. Because
        Starlink&apos;s actual draw can shift with weather and network activity, treat the estimate as a
        reasonable planning figure rather than an exact countdown. For a device-agnostic walkthrough of
        the runtime formula and the real-world losses behind it, see the{" "}
        <Link href="/power-station-runtime-calculator" className="font-medium text-brand hover:underline">
          Power Station Runtime Calculator
        </Link>
        .
      </p>
    </div>
  );
}
