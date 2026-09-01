import Link from "next/link";

export function RvHighWattageWarning() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        High-wattage appliances and inverter output
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          This calculator sizes energy capacity in watt-hours. It does not check whether a power
          station can physically start or sustain a given appliance. Battery capacity (watt-hours)
          and a power station&apos;s inverter rating (continuous watts, plus a short surge rating)
          are separate specifications, and high-draw appliances are limited by the second one.
        </p>
        <p>
          For an RV air conditioner, microwave, electric kettle, hair dryer, induction cooktop,
          toaster or coffee maker, always check two things on the power station before relying on it:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Continuous AC output.</span> A 1,000&nbsp;W coffee
            maker needs an inverter rated for at least that much continuous power, regardless of how
            large the battery is.
          </li>
          <li>
            <span className="font-medium text-ink">Startup / surge rating.</span> Motor and
            compressor loads such as an RV air conditioner briefly pull several times their running
            watts. The unit&apos;s surge rating has to cover that spike.
          </li>
        </ul>
        <p>
          Because a reliable surge result depends on the exact appliance and power station, this page
          deliberately does not calculate one. Treat high-wattage appliances as short-burst loads,
          read both the appliance label and the power station spec sheet, and confirm compatibility
          with the manufacturer before you depend on it. For an RV or portable air conditioner
          specifically, the{" "}
          <Link
            href="/air-conditioner-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            Air Conditioner Power Station Calculator
          </Link>{" "}
          sizes battery capacity and reports the continuous and surge output it needs, the{" "}
          <Link
            href="/microwave-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            Microwave Power Station Calculator
          </Link>{" "}
          does the same for an RV microwave from its electrical input watts, and the{" "}
          <Link
            href="/electric-heater-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            Electric Heater Power Station Calculator
          </Link>{" "}
          covers an electric heater&apos;s watts and how fast it drains a battery.
        </p>
      </div>
    </div>
  );
}
