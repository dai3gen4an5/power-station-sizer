import {
  AFFILIATE_LINKS_ENABLED,
  type BrandId,
  type CapacityClassId,
  type ProductEntry,
} from "./products";

export type RecommendationLinkType = "affiliate" | "plain" | "disabled";

/** Affiliate network an active affiliate link belongs to (`null` when not affiliate). */
export type AffiliateNetwork = "amazon" | "other" | null;

export interface ResolvedProductLink {
  /** Usable href, or `null` when the card must render as non-clickable. */
  href: string | null;
  type: RecommendationLinkType;
  /**
   * `rel` value to use when (and only when) rendering a real anchor. Includes
   * `sponsored` for affiliate links so search engines see them correctly.
   */
  rel: string;
  /** Which affiliate network `href` belongs to, when `type === "affiliate"`. */
  network: AffiliateNetwork;
}

/**
 * Read-only check: does this URL point at Amazon (including `amzn.to` SiteStripe
 * short links)? Used only to decide which disclosure text to show — the URL is
 * never expanded or rewritten.
 */
export function isAmazonAffiliateUrl(url: string): boolean {
  try {
    const host = new URL(url).hostname.toLowerCase().replace(/^www\./, "");
    return host === "amzn.to" || host === "amazon.com" || /(^|\.)amazon\.[a-z]{2,}(\.[a-z]{2,})?$/.test(host);
  } catch {
    return false;
  }
}

function firstNonEmpty(...values: Array<string | undefined>): string | null {
  for (const value of values) {
    const trimmed = value?.trim();
    if (trimmed) return trimmed;
  }
  return null;
}

/**
 * Decides whether a product card is clickable and, if so, with what URL and rel.
 *
 * A card is clickable ONLY when the master switch is on, the product is enabled,
 * and it actually has a URL. Otherwise `href` is `null` and the UI shows a
 * "links coming soon" placeholder — never a dummy or broken link.
 */
export function resolveProductLink(product: ProductEntry): ResolvedProductLink {
  if (!AFFILIATE_LINKS_ENABLED || !product.enabled) {
    return { href: null, type: "disabled", rel: "", network: null };
  }

  const affiliateHref = firstNonEmpty(product.affiliateUrl);
  if (affiliateHref) {
    return {
      href: affiliateHref,
      type: "affiliate",
      rel: "sponsored noopener noreferrer",
      network: isAmazonAffiliateUrl(affiliateHref) ? "amazon" : "other",
    };
  }

  const plainHref = firstNonEmpty(product.url);
  if (plainHref) {
    return { href: plainHref, type: "plain", rel: "noopener noreferrer", network: null };
  }

  return { href: null, type: "disabled", rel: "", network: null };
}

/** True when at least one product in the list currently resolves to a real link (affiliate or plain). */
export function hasAnyActiveLink(products: ProductEntry[]): boolean {
  return products.some((product) => resolveProductLink(product).href !== null);
}

/**
 * True when at least one product in the list resolves to an active *affiliate*
 * link. This — not the global master switch — is what the inline disclosure
 * keys on, so a capacity class with only placeholder cards never claims to
 * carry affiliate links.
 */
export function hasActiveAffiliateLink(products: ProductEntry[]): boolean {
  return products.some((product) => resolveProductLink(product).type === "affiliate");
}

/** True when at least one product in the list resolves to an active Amazon affiliate link. */
export function hasActiveAmazonLink(products: ProductEntry[]): boolean {
  return products.some((product) => {
    const link = resolveProductLink(product);
    return link.type === "affiliate" && link.network === "amazon";
  });
}

/**
 * Context describing a single recommendation click. Shaped so a future analytics
 * layer can attribute clicks by page, capacity class, and brand without touching
 * this module.
 */
export interface RecommendationClickContext {
  /** Pathname the click happened on, e.g. "/starlink-power-calculator". */
  page: string;
  capacityClass: CapacityClassId;
  brand: BrandId;
  linkType: RecommendationLinkType;
}

/**
 * Stable `data-*` attributes for a recommendation link. A later analytics script
 * (GA, Plausible, a custom endpoint) can read these off the clicked element with
 * zero changes here. Returned object spreads straight onto a JSX element.
 */
export function recommendationDataAttributes(ctx: RecommendationClickContext) {
  return {
    "data-rec": "product",
    "data-rec-page": ctx.page,
    "data-rec-class": ctx.capacityClass,
    "data-rec-brand": ctx.brand,
    "data-rec-link-type": ctx.linkType,
  } as const;
}

/**
 * Fire-and-forget click signal. Today it only emits a DOM CustomEvent that an
 * analytics snippet can listen for later (`window.addEventListener("recommendation:click", ...)`).
 * No network calls, no external SDK, safe to call during SSR (no-ops on the server).
 */
export function emitRecommendationClick(ctx: RecommendationClickContext): void {
  if (typeof window === "undefined") return;
  try {
    window.dispatchEvent(new CustomEvent("recommendation:click", { detail: ctx }));
  } catch {
    /* never let click tracking break navigation */
  }
}
