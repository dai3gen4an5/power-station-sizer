import Link from "next/link";

export function RefrigeratorRuntimeExplainer() {
  return (
    <div>
      <h2 className="h2">
        How long will a power station run a refrigerator?
      </h2>
      <p className="mt-3 text-ink/75">
        The basic idea is straightforward: usable battery energy divided by the refrigerator&apos;s
        average energy use gives an approximate runtime. The runtime estimator built into the calculator
        above does exactly this, using your entered wattage, equivalent hours, efficiency, and reserve
        settings. For a refrigerator specifically, treat the result as an approximation rather than an
        exact countdown — compressor cycling and occasional startup surges mean actual runtime can vary
        from the average-based estimate, especially if the refrigerator&apos;s compressor runs more than
        usual on a hot day or with frequent door openings. The{" "}
        <Link href="/power-station-runtime-calculator" className="font-medium text-brand hover:underline">
          Power Station Runtime Calculator
        </Link>{" "}
        explains the underlying formula and the efficiency and reserve losses in more depth.
      </p>
    </div>
  );
}
