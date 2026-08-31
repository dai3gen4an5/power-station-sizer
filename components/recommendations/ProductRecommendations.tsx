"use client";

import { usePathname } from "next/navigation";
import { AffiliateDisclosure } from "./AffiliateDisclosure";
import {
  emitRecommendationClick,
  hasActiveAffiliateLink,
  hasActiveAmazonLink,
  hasAnyActiveLink,
  recommendationDataAttributes,
  resolveProductLink,
} from "@/lib/recommendations/links";
import { getRecommendationState } from "@/lib/recommendations/eligibility";
import { formatWh } from "@/lib/utils/format";

interface ProductRecommendationsProps {
  /** Recommended capacity from the calculator, in watt-hours. */
  recommendedCapacityWh: number;
  /** Nearest common size class, or null when above the largest known size. */
  recommendedSizeClass: number | null;
  /**
   * Continuous AC output the load needs, in watts. Pass it from calculators that
   * compute one (microwave, AC, sump / well pump). Omit / 0 on capacity-only
   * pages — the continuous-output filter is then skipped.
   */
  requiredContinuousOutputW?: number;
  /**
   * Startup / surge output the load needs, in watts. Pass it only when the user
   * has supplied a real figure; omit / 0 leaves the surge filter off.
   */
  requiredSurgeOutputW?: number;
  className?: string;
}

/**
 * Site-wide "here are power stations in your size range" section.
 *
 * Renders right after the calculator result, never above it. A pure function
 * (`getRecommendationState`) decides what to show:
 *   - nothing, for an empty calculator;
 *   - a neutral, non-affiliate note when the recommended capacity is larger than
 *     every single unit listed — so an undersized unit is never linked;
 *   - a neutral, non-affiliate note when capacity fits but no listed unit has a
 *     confirmed continuous / surge output rating high enough for the load;
 *   - otherwise the product families that clear every supplied requirement.
 *
 * No calculator math is duplicated here, and the calculator's own size-class
 * rounding is untouched.
 */
export function ProductRecommendations({
  recommendedCapacityWh,
  recommendedSizeClass,
  requiredContinuousOutputW,
  requiredSurgeOutputW,
  className,
}: ProductRecommendationsProps) {
  const pathname = usePathname() || "/";

  const state = getRecommendationState({
    recommendedCapacityWh,
    recommendedSizeClass,
    requiredContinuousOutputW,
    requiredSurgeOutputW,
  });

  // Nothing to recommend yet (e.g. an empty calculator) — render nothing.
  if (state.kind === "empty") return null;

  const sectionClassName = `mx-auto max-w-5xl px-4 sm:px-6 ${className ?? ""}`;

  // The recommended capacity is larger than every single unit currently listed.
  // Show a neutral, link-free note rather than an undersized affiliate card.
  if (state.kind === "no-match") {
    return (
      <section
        className={sectionClassName}
        aria-labelledby="product-recommendations-heading"
      >
        <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
          <h2
            id="product-recommendations-heading"
            className="font-display text-base font-semibold text-ink"
          >
            Larger than a single listed power station
          </h2>
          <p className="mt-2 text-sm text-ink/70">
            Your estimated capacity requirement is about{" "}
            <span className="font-semibold text-ink">{formatWh(state.recommendedWh)}</span>, which is
            larger than the single-unit power stations currently listed here.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink/70">
            <li>
              Consider an expandable power station with add-on battery modules, or a larger
              whole-home system.
            </li>
            <li>
              Or reduce and recharge the load &mdash; run the device in shorter blocks, cut standby
              draw, or add solar to extend runtime.
            </li>
          </ul>
          <p className="mt-3 text-xs leading-relaxed text-ink/55">
            Before buying, verify total usable capacity, continuous output, surge capability,
            voltage, outlet configuration, and battery-expansion limits against the devices you plan
            to run. Enough capacity alone does not confirm a unit can start and run them.
          </p>
        </div>
      </section>
    );
  }

  // Capacity fits this range, but no listed unit has a confirmed output rating
  // high enough for this load. Show a neutral note with the watts to shop for —
  // never an affiliate card whose output has not been verified for the load.
  if (state.kind === "output-unconfirmed") {
    const continuousW = Math.round(state.requiredContinuousOutputW);
    const surgeW = Math.round(state.requiredSurgeOutputW);
    return (
      <section
        className={sectionClassName}
        aria-labelledby="product-recommendations-heading"
      >
        <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
          <h2
            id="product-recommendations-heading"
            className="font-display text-base font-semibold text-ink"
          >
            Check the power station&apos;s output rating
          </h2>
          <p className="mt-2 text-sm text-ink/70">
            Products in this range can cover the roughly{" "}
            <span className="font-semibold text-ink">{formatWh(state.recommendedWh)}</span> of battery
            capacity this load needs, but the listed units do not have a confirmed continuous AC
            output rating high enough for it, so no specific product is shown.
          </p>
          <p className="mt-3 text-sm text-ink/70">
            Look for a power station with at least{" "}
            <span className="font-semibold text-ink">{continuousW}&nbsp;W</span> of continuous AC
            output
            {surgeW > 0 ? (
              <>
                {" "}
                and at least{" "}
                <span className="font-semibold text-ink">{surgeW}&nbsp;W</span> of startup / surge
                output
              </>
            ) : null}
            , plus enough battery capacity.
          </p>
          <p className="mt-3 text-xs leading-relaxed text-ink/55">
            Confirm the unit&apos;s rated continuous output, its surge / peak rating, its AC voltage,
            and its outlet type against this load&apos;s specifications before buying. Enough
            capacity alone does not confirm a unit can start and run it.
          </p>
        </div>
      </section>
    );
  }

  const { capacityClass } = state;
  const products = state.products;
  const anyActiveLink = hasAnyActiveLink(products);
  const sectionHasAffiliateLink = hasActiveAffiliateLink(products);
  const sectionHasAmazonLink = hasActiveAmazonLink(products);

  return (
    <section
      className={sectionClassName}
      aria-labelledby="product-recommendations-heading"
    >
      <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
        <h2
          id="product-recommendations-heading"
          className="font-display text-base font-semibold text-ink"
        >
          Power stations in this size range
        </h2>
        <p className="mt-1 text-sm text-ink/70">
          Your estimate points to roughly the{" "}
          <span className="font-semibold text-ink">{capacityClass.label}</span> class. Here are
          product families you can compare.
        </p>
        <p className="mt-1 text-xs text-ink/55">{capacityClass.reason}</p>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {products.map((product) => {
            const link = resolveProductLink(product);
            const dataAttrs = recommendationDataAttributes({
              page: pathname,
              capacityClass: capacityClass.id,
              brand: product.brand,
              linkType: link.type,
            });

            if (link.href) {
              return (
                <a
                  key={product.brand}
                  href={link.href}
                  target="_blank"
                  rel={link.rel}
                  onClick={() =>
                    emitRecommendationClick({
                      page: pathname,
                      capacityClass: capacityClass.id,
                      brand: product.brand,
                      linkType: link.type,
                    })
                  }
                  {...dataAttrs}
                  className="block rounded-xl border border-line bg-paper p-4 transition-colors hover:border-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <span className="block text-[11px] font-medium uppercase tracking-wide text-ink/50">
                    {product.brandName}
                  </span>
                  <span className="mt-1 block text-sm font-medium text-ink">
                    {product.productName}
                  </span>
                  <span className="mt-2 block text-xs text-brand">Compare options &rarr;</span>
                </a>
              );
            }

            return (
              <div
                key={product.brand}
                {...dataAttrs}
                aria-disabled="true"
                className="block rounded-xl border border-dashed border-line bg-paper p-4"
              >
                <span className="block text-[11px] font-medium uppercase tracking-wide text-ink/50">
                  {product.brandName}
                </span>
                <span className="mt-1 block text-sm font-medium text-ink">
                  {product.productName}
                </span>
                <span className="mt-2 block text-xs text-ink/45">Product links coming soon</span>
              </div>
            );
          })}
        </div>

        {!anyActiveLink && (
          <p className="mt-4 rounded-lg bg-paper px-3 py-2 text-xs text-ink/60">
            Product links are being added. For now this is a guide to which size class to shop in, not
            a set of specific buy links.
          </p>
        )}

        <p className="mt-4 text-xs leading-relaxed text-ink/55">
          Capacity class is a starting point only. Always confirm the actual unit&apos;s
          specifications &mdash; usable capacity, continuous and surge output, and maximum charge
          input &mdash; against the devices you plan to run before buying.
        </p>

        <AffiliateDisclosure
          className="mt-3"
          hasActiveAffiliateLink={sectionHasAffiliateLink}
          hasActiveAmazonLink={sectionHasAmazonLink}
        />
      </div>
    </section>
  );
}
