import Link from "next/link";

export function RvDeviceExamples() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Refrigerator, Starlink and CPAP examples in an RV
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          <span className="font-medium text-ink">RV refrigerator power consumption.</span> A 12V
          compressor fridge or cooler typically draws 40&ndash;60&nbsp;watts while the compressor
          runs, and it cycles on and off. Over a day that often works out to roughly
          400&ndash;800&nbsp;Wh, though a hot afternoon or a full fridge raises it. Absorption
          (three-way) fridges running on electric are far less efficient and are usually left on
          propane when off-grid. The{" "}
          <Link
            href="/refrigerator-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            Refrigerator Power Station Calculator
          </Link>{" "}
          goes into compressor cycling and startup surge in more detail.
        </p>
        <p>
          <span className="font-medium text-ink">Running Starlink from a portable power station.</span>{" "}
          Yes, this is common in RVs. A standard dish draws around 50&ndash;75&nbsp;watts in normal
          use, so eight hours is roughly 400&ndash;600&nbsp;Wh and a full 24 hours is closer to
          1,200&ndash;1,800&nbsp;Wh. The{" "}
          <Link
            href="/starlink-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            Starlink Power Station Calculator
          </Link>{" "}
          breaks down AC versus DC power setups.
        </p>
        <p>
          <span className="font-medium text-ink">Running a CPAP in an RV.</span> Also common. Without
          a heated humidifier a CPAP draws about 30&ndash;60&nbsp;watts, so a night is roughly
          200&ndash;400&nbsp;Wh &mdash; one of the cheaper loads to back up. Turning off the heated
          humidifier and heated tube, or running the machine on 12V DC, cuts that further. See the{" "}
          <Link href="/cpap-power-calculator" className="font-medium text-brand hover:underline">
            CPAP Power Station Calculator
          </Link>{" "}
          for humidifier and DC details.
        </p>
      </div>
    </div>
  );
}
