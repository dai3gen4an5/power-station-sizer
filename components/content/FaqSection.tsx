import { absoluteUrl } from "@/lib/site";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  items: FaqItem[];
  /** Path of the page this FAQ appears on, used for the JSON-LD mainEntityOfPage. */
  path?: string;
  title?: string;
}

/**
 * Renders an accordion of Q&A items plus matching FAQPage JSON-LD.
 * Shared by every page that has its own FAQ content (homepage, CPAP page,
 * and future niche pages) so the markup and structured-data shape stay
 * consistent — only the questions/answers and page path change.
 */
export function FaqSection({ items, path = "/", title = "Frequently asked questions" }: FaqSectionProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntityOfPage: absoluteUrl(path),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div>
      <h2 className="h2">{title}</h2>
      <div className="mt-4 divide-y divide-line rounded-2xl border border-line bg-white">
        {items.map((item) => (
          <details key={item.question} className="group p-5">
            <summary className="cursor-pointer list-none font-medium text-ink">
              <span className="flex items-center justify-between gap-4">
                {item.question}
                <span className="shrink-0 text-lg text-ink/40 transition-transform group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm text-ink/70">{item.answer}</p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
