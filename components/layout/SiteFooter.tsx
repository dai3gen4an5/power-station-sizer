export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-ink/60 sm:px-6">
        <p>
          Power Station Sizer provides general estimates for planning purposes only. Always check your
          device labels for actual wattage and consult your power station&apos;s manual for its rated
          capacity and limitations.
        </p>
        <p className="mt-3">© {new Date().getFullYear()} Power Station Sizer.</p>
      </div>
    </footer>
  );
}
