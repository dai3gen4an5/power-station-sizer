import Link from "next/link";

export function StarlinkPlusOtherDevices() {
  return (
    <div>
      <h2 className="h2">
        Starlink plus refrigerator and laptop loads
      </h2>
      <p className="mt-3 text-ink/75">
        Campers and RV users often need to power more than just Starlink at the same time — a laptop,
        phone chargers, separate Wi-Fi or router equipment, a refrigerator, and lights are common
        additions. Rather than sizing a power station for Starlink alone, add every device you actually
        plan to run into the calculator above so the total reflects your real setup. If a refrigerator is
        part of your load, our{" "}
        <Link href="/refrigerator-power-calculator" className="font-medium text-brand hover:underline">
          Refrigerator Power Station Calculator
        </Link>{" "}
        covers compressor cycling and startup surge in more detail.
      </p>
    </div>
  );
}
