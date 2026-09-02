"use client";

import { useState } from "react";
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
import { trackEvent } from "@/lib/analytics";
import { formatWh } from "@/lib/utils/format";
import type { ProductEntry } from "@/lib/recommendations/products";

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

function formatW(value: number | undefined): string {
  if (typeof value !== "number" || !Number.isFinite(value) || value <= 0) return "Not listed";
  return `${Math.round(value).toLocaleString("en-US")} W`;
}

function formatVoltage(volts: readonly number[] | undefined): string {
  if (!volts || volts.length === 0) return "Not listed";
  return volts.map((v) => `${v}V`).join(" / ");
}

/**
 * A short, factual tag derived only from the verified per-SKU specs — never an
 * editorial ranking ("Best", "#1", "Top pick" are intentionally not used here).
 * Returns a label for the smallest qualifying battery and for the highest
 * confirmed continuous output, when those are unambiguous across the set.
 */
function factualTags(products: ProductEntry[]): Record<string, string> {
  const tags: Record<string, string> = {};
  if (products.length < 2) return tags;

  const caps = products
    .map((p) => p.capacityWh)
    .filter((n) => Number.isFinite(n) && n > 0);
  if (caps.length === products.length) {
    const minCap = Math.min(...caps);
    const atMin = products.filter((p) => p.capacityWh === minCap);
    if (atMin.length === 1) tags[atMin[0].brand] = "Smallest that fits";
  }

  const outs = products
    .map((p) => p.continuousOutputW)
    .filter((n): n is number => typeof n === "number" && n > 0);
  if (outs.length >= 2) {
    const maxOut = Math.max(...outs);
    const atMax = products.filter((p) => p.continuousOutputW === maxOut);
    if (atMax.length === 1 && !tags[atMax[0].brand]) {
      tags[atMax[0].brand] = "Highest continuous output";
    }
  }

  return tags;
}

/**
 * Site-wide "here are power stations in your size range" section.
 *
 * Renders right after the calculator result, never above it. A pure function
 * (`getRecommendationState`) decides what to show:
 *   - nothing, for an empty calculator;
 *   - a neutral, non-affiliate note when the recommended capacity is larger than
 *     every single unit listed — so an undersized unit is never linked;
 *   - a neutral, non-affiliate note when capacity fits somewhere but, after
 *     searching every class from the starting one upward, no unit has a confirmed
 *     continuous / surge output rating high enough for the load;
 *   - otherwise a comparison grid of the products that clear every supplied
 *     requirement, from the smallest class that has one (which may sit above the
 *     calculator's own size class when the search escalated to find AC-output
 *     headroom).
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
  const [brandFilter, setBrandFilter] = useState<string | null>(null);

  const state = getRecommendationState({
    recommendedCapacityWh,
    recommendedSizeClass,
    requiredContinuousOutputW,
    requiredSurgeOutputW,
  });

  // Nothing to recommend yet (e.g. an empty calculator) — render nothing.
  if (state.kind === "empty") return null;

  const sectionClassName = `container-page ${className ?? ""}`;

  // The recommended capacity is larger than every single unit currently listed.
  // Show a neutral, link-free note rather than an undersized affiliate card.
  if (state.kind === "no-match") {
    return (
      <section className={sectionClassName} aria-labelledby="product-recommendations-heading">
        <div className="card card-pad">
          <p className="eyebrow">Recommendation</p>
          <h2 id="product-recommendations-heading" className="mt-2 h3 text-base">
            Larger than a single listed power station
          </h2>
          <p className="mt-2 text-sm text-muted">
            Your estimated capacity requirement is about{" "}
            <span className="font-semibold text-ink">{formatWh(state.recommendedWh)}</span>, which is
            larger than the single-unit power stations currently listed here.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
            <li>
              Consider an expandable power station with add-on battery modules, or a larger
              whole-home system.
            </li>
            <li>
              Or reduce and recharge the load &mdash; run the device in shorter blocks, cut standby
              draw, or add solar to extend runtime.
            </li>
          </ul>
          <p className="mt-3 text-xs leading-relaxed text-muted/80">
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
      <section className={sectionClassName} aria-labelledby="product-recommendations-heading">
        <div className="card card-pad">
          <p className="eyebrow">Recommendation</p>
          <h2 id="product-recommendations-heading" className="mt-2 h3 text-base">
            Check the power station&apos;s output rating
          </h2>
          <p className="mt-2 text-sm text-muted">
            The listed power stations can cover the roughly{" "}
            <span className="font-semibold text-ink">{formatWh(state.recommendedWh)}</span> of battery
            capacity this load needs, but none of them &mdash; in this range or any larger one listed
            &mdash; has a confirmed AC output rating high enough for it, so no specific product is
            shown.
          </p>
          <p className="mt-3 text-sm text-muted">
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
          <p className="mt-3 text-xs leading-relaxed text-muted/80">
            Confirm the unit&apos;s rated continuous output, its surge / peak rating, its AC voltage,
            and its outlet type against this load&apos;s specifications before buying. Enough
            capacity alone does not confirm a unit can start and run it.
          </p>
        </div>
      </section>
    );
  }

  const { capacityClass, products } = state;
  const tags = factualTags(products);
  const brands: { id: string; name: string }[] = [];
  for (const p of products) {
    if (!brands.some((b) => b.id === p.brand)) brands.push({ id: p.brand, name: p.brandName });
  }
  const anyActiveLink = hasAnyActiveLink(products);
  const sectionHasAffiliateLink = hasActiveAffiliateLink(products);
  const sectionHasAmazonLink = hasActiveAmazonLink(products);
  const outputAware =
    state.requiredContinuousOutputW > 0 || state.requiredSurgeOutputW > 0;
  const continuousW = Math.round(state.requiredContinuousOutputW);
  const surgeW = Math.round(state.requiredSurgeOutputW);
  const showBrandFilter = brands.length > 1 && products.length > 2;
  const visibleProducts =
    brandFilter && showBrandFilter
      ? products.filter((p) => p.brand === brandFilter)
      : products;

  return (
    <section className={sectionClassName} aria-labelledby="product-recommendations-heading">
      <div className="card card-pad">
        <p className="eyebrow">Recommendation</p>
        <h2 id="product-recommendations-heading" className="mt-2 h3 text-base">
          {outputAware
            ? "Power stations that meet your battery and AC-output needs"
            : "Power stations in this size range"}
        </h2>
        {outputAware ? (
          <p className="mt-1 text-sm text-muted">
            These{" "}
            <span className="font-semibold text-ink">{capacityClass.label}</span>-class units have a
            confirmed continuous AC output of at least{" "}
            <span className="font-semibold text-ink">{continuousW}&nbsp;W</span>
            {surgeW > 0 ? (
              <>
                {" "}
                and a rated surge of at least{" "}
                <span className="font-semibold text-ink">{surgeW}&nbsp;W</span>
              </>
            ) : null}
            , plus enough battery capacity for this load.
          </p>
        ) : (
          <p className="mt-1 text-sm text-muted">
            Your estimate points to roughly the{" "}
            <span className="font-semibold text-ink">{capacityClass.label}</span> class. Compare the
            units below on the specs that decide whether one will run your devices.
          </p>
        )}
        {state.capacityClassEscalated ? (
          <p className="mt-1 text-xs text-muted/80">
            Your energy requirement fits a smaller battery class, but the{" "}
            {capacityClass.label} class is the first listed range with products whose confirmed AC
            output can meet your {continuousW}&nbsp;W load.
          </p>
        ) : (
          <p className="mt-1 text-xs text-muted/80">{capacityClass.reason}</p>
        )}

        {showBrandFilter && (
          <div
            className="mt-4 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter recommendations by brand"
          >
            <button
              type="button"
              onClick={() => setBrandFilter(null)}
              aria-pressed={brandFilter === null}
              className={`chip ${brandFilter === null ? "border-brand-300 bg-brand-50 text-brand-700" : ""}`}
            >
              All brands
            </button>
            {brands.map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() => setBrandFilter(b.id)}
                aria-pressed={brandFilter === b.id}
                className={`chip ${brandFilter === b.id ? "border-brand-300 bg-brand-50 text-brand-700" : ""}`}
              >
                {b.name}
              </button>
            ))}
          </div>
        )}

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => {
            const link = resolveProductLink(product);
            const dataAttrs = recommendationDataAttributes({
              page: pathname,
              capacityClass: capacityClass.id,
              brand: product.brand,
              linkType: link.type,
            });
            const tag = tags[product.brand];
            const ctaLabel =
              link.network === "amazon" ? "View on Amazon" : "View product";

            return (
              <article
                key={product.brand}
                className="flex flex-col rounded-card border border-line bg-surface p-4 shadow-card"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="block font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted/70">
                    {product.brandName}
                  </span>
                  {tag && (
                    <span className="shrink-0 rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-brand-700">
                      {tag}
                    </span>
                  )}
                </div>
                <h3 className="mt-1 text-sm font-semibold text-ink">{product.productName}</h3>

                <dl className="mt-3 space-y-1.5 border-t border-hairline pt-3 text-xs">
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-muted">Battery capacity</dt>
                    <dd className="font-mono font-medium text-ink">
                      {formatWh(product.capacityWh)}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-muted">Continuous AC output</dt>
                    <dd className="font-mono font-medium text-ink">
                      {formatW(product.continuousOutputW)}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-muted">Rated surge / peak</dt>
                    <dd className="font-mono font-medium text-ink">
                      {formatW(product.surgeOutputW)}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-muted">AC voltage</dt>
                    <dd className="font-mono font-medium text-ink">
                      {formatVoltage(product.acVoltageV)}
                    </dd>
                  </div>
                </dl>

                {link.href ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel={link.rel}
                    onClick={() => {
                      // DOM CustomEvent for any provider-agnostic listener.
                      emitRecommendationClick({
                        page: pathname,
                        capacityClass: capacityClass.id,
                        brand: product.brand,
                        linkType: link.type,
                      });
                      // Named analytics conversion event. Does not preventDefault,
                      // so the affiliate navigation is untouched. Single call
                      // site, so there is no double counting.
                      trackEvent("affiliate_click", {
                        page: pathname,
                        capacity_class: capacityClass.id,
                        brand: product.brand,
                        link_type: link.type,
                      });
                    }}
                    {...dataAttrs}
                    className="btn-primary mt-4 w-full"
                  >
                    {ctaLabel} &rarr;
                  </a>
                ) : (
                  <span
                    {...dataAttrs}
                    aria-disabled="true"
                    className="mt-4 block rounded-control border border-dashed border-line-strong bg-surface-muted/60 px-3 py-2 text-center text-xs text-muted/70"
                  >
                    Product links coming soon
                  </span>
                )}
              </article>
            );
          })}
        </div>

        {!anyActiveLink && (
          <p className="mt-4 rounded-control bg-surface-muted px-3 py-2 text-xs text-muted">
            Product links are being added. For now this is a guide to which size class to shop in, not
            a set of specific buy links.
          </p>
        )}

        <p className="mt-4 text-xs leading-relaxed text-muted/80">
          Capacity class is a starting point only. Specs shown are the manufacturer&apos;s published,
          per-model figures; prices and availability change, so confirm the actual unit&apos;s
          specifications &mdash; usable capacity, continuous and surge output, AC voltage, and
          maximum charge input &mdash; on the retailer&apos;s page against the devices you plan to
          run before buying.
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
