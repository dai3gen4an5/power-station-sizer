import type { Metadata } from "next";
import Link from "next/link";
import { InfoPageLayout } from "@/components/content/InfoPageLayout";
import { DEFAULT_SETTINGS, SIZE_CLASSES_WH, SOLAR_PANEL_CLASSES_W } from "@/lib/calculator/constants";
import { CAPACITY_CLASSES } from "@/lib/recommendations/products";
import { formatWh } from "@/lib/utils/format";

const TITLE = "Calculation Methodology";
const DESCRIPTION =
  "How Power Station Sizer turns your inputs into an estimate: watt-hours, inverter efficiency, battery reserve, runtime, solar derating, and peak sun hours.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/methodology",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/methodology",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

const sizeClassList = SIZE_CLASSES_WH.map((wh) => formatWh(wh)).join(", ");
const largestSizeClass = SIZE_CLASSES_WH[SIZE_CLASSES_WH.length - 1];
const solarPanelList = SOLAR_PANEL_CLASSES_W.map((w) => `${w} W`).join(", ");

function classRange(minWh: number, maxWh: number | null): string {
  return maxWh === null ? `over ${formatWh(minWh - 1)}` : `up to ${formatWh(maxWh)}`;
}

export default function MethodologyPage() {
  return (
    <InfoPageLayout
      title="Calculation methodology"
      intro="Every number on this site is a planning estimate. This page explains how those estimates are calculated so you can judge how far to trust them for your own situation."
    >
      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Watts vs watt-hours</h2>
        <p className="mt-3 text-ink/75">
          A watt (W) is how fast a device draws power at a moment in time. A watt-hour (Wh) is an
          amount of energy — one watt sustained for one hour. A device&apos;s daily energy use is its
          wattage multiplied by the hours it runs per day, multiplied by how many of that device you
          have. The calculator adds this up across every device you list.
        </p>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Backup period</h2>
        <p className="mt-3 text-ink/75">
          The combined daily watt-hour total is multiplied by the number of days you want the power
          station to cover. That gives the raw energy requirement before any real-world adjustments.
        </p>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Inverter efficiency</h2>
        <p className="mt-3 text-ink/75">
          Converting a battery&apos;s DC power into household AC loses some energy as heat. The
          calculator divides the requirement by an inverter-efficiency figure — its default is{" "}
          {DEFAULT_SETTINGS.inverterEfficiency}% — so the battery is sized to still deliver enough
          after that loss. Running a device directly from a DC output skips this conversion, and you
          can raise or lower the percentage to match your setup.
        </p>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Battery reserve</h2>
        <p className="mt-3 text-ink/75">
          Draining a battery to empty on every cycle leaves no margin for a cold night, a cloudy day,
          or an under-estimated load, and is harder on the cells. The calculator keeps a portion of
          capacity unused — its default reserve is {DEFAULT_SETTINGS.batteryReserve}% — by dividing
          by the fraction that stays available.
        </p>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Rounding to a size class</h2>
        <p className="mt-3 text-ink/75">
          The adjusted figure is rounded up to the next common power station size so there is a real
          product to shop for. The reference sizes are {sizeClassList}. A requirement above the
          largest of these is shown as {formatWh(largestSizeClass)}+.
        </p>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Runtime estimate</h2>
        <p className="mt-3 text-ink/75">
          To estimate how long a specific power station would last, its usable energy — capacity
          multiplied by inverter efficiency and by the non-reserve fraction — is divided by the
          device&apos;s average power draw. This tracks stored energy only; it does not check whether
          the inverter can handle a motor&apos;s starting surge.
        </p>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Solar derating</h2>
        <p className="mt-3 text-ink/75">
          Solar panels almost never produce their rated wattage in the field — sun angle, heat,
          shade, cabling, and the charge controller all take a share. Solar estimates multiply the
          panel&apos;s nameplate rating by a real-world efficiency factor before using it. Example
          panel ratings referenced on the solar pages are {solarPanelList}.
        </p>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Peak sun hours</h2>
        <p className="mt-3 text-ink/75">
          A day&apos;s usable sunlight is expressed as &ldquo;peak sun hours&rdquo;: the number of
          hours of full-strength sun that would deliver the same total energy. Multiplying derated
          panel watts by peak sun hours gives a rough daily harvest in watt-hours, which in turn
          drives the charge-time and panel-size estimates.
        </p>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Capacity-class recommendations</h2>
        <p className="mt-3 text-ink/75">
          After the calculator produces a recommended capacity, the recommendation section below the
          result maps it to one of four shopping ranges:
        </p>
        <ul className="mt-3 space-y-1 text-ink/75">
          {CAPACITY_CLASSES.map((cls) => (
            <li key={cls.id}>
              <span className="font-medium text-ink">{cls.label} class</span> &mdash;{" "}
              {classRange(cls.minWh, cls.maxWh)}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-ink/75">
          These are ranges to compare within, not endorsements, and they are listed in a fixed order.
        </p>
        <p className="mt-3 text-ink/75">
          Product recommendations are filtered separately from the calculator&apos;s size classes. A
          listed product is only shown when it satisfies the known battery-capacity requirement and,
          when the calculator supplies them, the known continuous-output and startup / surge
          requirements. An unknown specification is never treated as confirmed compatibility. If your
          recommended capacity is larger than every single unit listed, or no listed unit has a
          confirmed output rating high enough for the load, the section shows a neutral note &mdash;
          pointing to expandable or whole-home systems, or stating the output rating to look for
          &mdash; instead of linking a product that may be undersized.
        </p>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">What the estimates do not cover</h2>
        <p className="mt-3 text-ink/75">
          The math follows energy, not whether a power station&apos;s inverter can start a
          motor&apos;s surge, whether a port supplies enough current, or whether the unit accepts
          your solar array&apos;s voltage. Always confirm usable capacity, continuous and surge
          output, and maximum charge and solar input against the devices you plan to run. For more
          on the project&apos;s scope, see the{" "}
          <Link href="/about" className="font-medium text-brand hover:underline">
            about page
          </Link>
          , or go back to the{" "}
          <Link href="/" className="font-medium text-brand hover:underline">
            calculator
          </Link>
          .
        </p>
      </div>
    </InfoPageLayout>
  );
}
