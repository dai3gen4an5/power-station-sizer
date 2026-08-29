"use client";

import { usePathname } from "next/navigation";
import { AffiliateDisclosure } from "./AffiliateDisclosure";
import {
  emitRecommendationClick,
  hasAnyActiveLink,
  recommendationDataAttributes,
  resolveProductLink,
} from "@/lib/recommendations/links";
import { selectCapacityClassForResult } from "@/lib/recommendations/selectClass";

interface ProductRecommendationsProps {
  /** Recommended capacity from the calculator, in watt-hours. */
  recommendedCapacityWh: number;
  /** Nearest common size class, or null when above the largest known size. */
  recommendedSizeClass: number | null;
  className?: string;
}

/**
 * Site-wide "here are power stations in your size range" section.
 *
 * Renders right after the calculator result, never above it. Picks one of four
 * capacity classes from the recommended capacity via `selectCapacityClass`
 * (a pure function — no calculator math is duplicated here).
 *
 * While no affiliate link is active every card is a non-clickable placeholder;
 * nothing links to a dummy URL. When links go live (see lib/recommendations/products.ts)
 * the same cards become real anchors with `rel="sponsored noopener noreferrer"`.
 */
export function ProductRecommendations({
  recommendedCapacityWh,
  recommendedSizeClass,
  className,
}: ProductRecommendationsProps) {
  const pathname = usePathname() || "/";

  const capacityClass = selectCapacityClassForResult({
    recommendedCapacityWh,
    recommendedSizeClass,
  });

  // Nothing to recommend yet (e.g. an empty calculator) — render nothing.
  if (!capacityClass) return null;

  const anyActiveLink = hasAnyActiveLink([...capacityClass.products]);

  return (
    <section
      className={`mx-auto max-w-5xl px-4 sm:px-6 ${className ?? ""}`}
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
          {capacityClass.products.map((product) => {
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

        <AffiliateDisclosure className="mt-3" />
      </div>
    </section>
  );
}
