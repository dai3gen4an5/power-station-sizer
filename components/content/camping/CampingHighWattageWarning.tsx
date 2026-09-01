import Link from "next/link";

export function CampingHighWattageWarning() {
  return (
    <div>
      <h2 className="h2">
        High-wattage camp kitchen gear
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          This calculator sizes energy capacity in watt-hours. It does not check whether a power
          station can physically start or sustain a given appliance. Battery capacity (watt-hours)
          and a power station&apos;s inverter rating (continuous watts, plus a short surge rating) are
          separate specifications, and high-draw camp gear is limited by the second one.
        </p>
        <p>
          For an electric kettle, camping coffee maker, induction cooktop, portable heater or a
          12V-to-AC microwave, always check two things on the power station before relying on it:
        </p>
        <p>
          For a coffee maker specifically, the{" "}
          <Link
            href="/coffee-maker-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            Coffee Maker Power Station Calculator
          </Link>{" "}
          sizes it on its own from the machine&apos;s input watts, the{" "}
          <Link
            href="/electric-kettle-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            Electric Kettle Power Station Calculator
          </Link>{" "}
          does the same for a camp kettle, the{" "}
          <Link
            href="/hair-dryer-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            Hair Dryer Power Station Calculator
          </Link>{" "}
          covers a hair dryer, the{" "}
          <Link
            href="/air-fryer-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            Air Fryer Power Station Calculator
          </Link>{" "}
          covers a camp air fryer, the{" "}
          <Link
            href="/induction-cooktop-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            Induction Cooktop Power Station Calculator
          </Link>{" "}
          covers a camp induction burner, the{" "}
          <Link
            href="/toaster-oven-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            Toaster Oven Power Station Calculator
          </Link>{" "}
          covers a camp toaster oven, and the{" "}
          <Link
            href="/rice-cooker-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            Rice Cooker Power Station Calculator
          </Link>{" "}
          covers a camp rice cooker &mdash; the gentlest load of the group.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Continuous AC output.</span> A 1,000&nbsp;W kettle
            needs an inverter rated for at least that much continuous power, no matter how large the
            battery is. Many small or ultralight units stop well short of that.
          </li>
          <li>
            <span className="font-medium text-ink">Startup / surge rating.</span> Motor and heating
            gear can briefly pull more than their running watts. The unit&apos;s surge rating has to
            cover that spike.
          </li>
        </ul>
        <p>
          Because a reliable surge result depends on the exact appliance and power station, this page
          deliberately does not calculate one. Treat kettles, cookers and heaters as short-burst
          loads, read both the appliance label and the power station spec sheet, and confirm
          compatibility with the manufacturer before you depend on it in the field. Planning to run a
          portable air conditioner at camp? The{" "}
          <Link
            href="/air-conditioner-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            Air Conditioner Power Station Calculator
          </Link>{" "}
          covers its battery, output, and voltage requirements, the{" "}
          <Link
            href="/microwave-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            Microwave Power Station Calculator
          </Link>{" "}
          covers a camp microwave&apos;s input-watt and continuous-output needs, and the{" "}
          <Link
            href="/electric-heater-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            Electric Heater Power Station Calculator
          </Link>{" "}
          shows how quickly a heater empties a battery.
        </p>
      </div>
    </div>
  );
}
