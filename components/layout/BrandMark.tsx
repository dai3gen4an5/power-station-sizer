interface BrandMarkProps {
  className?: string;
}

/**
 * Abstract "power cell" mark: a stacked-charge battery cell with a rising
 * charge bar. Pure SVG, two-tone (brand + ink), scales down to a favicon.
 */
export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 28 28"
      role="img"
      aria-label="Power Station Sizer"
      className={className}
    >
      <rect
        x="4.5"
        y="2.75"
        width="19"
        height="22.5"
        rx="4.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect x="10.5" y="0.5" width="7" height="3.25" rx="1.25" fill="currentColor" />
      <rect x="8.25" y="18" width="11.5" height="3.25" rx="1.25" className="fill-brand" />
      <rect x="8.25" y="13" width="11.5" height="3.25" rx="1.25" className="fill-brand/70" />
      <rect x="8.25" y="8" width="11.5" height="3.25" rx="1.25" className="fill-brand/40" />
    </svg>
  );
}
