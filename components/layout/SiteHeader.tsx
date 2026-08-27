import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-paper">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          Power Station Sizer
        </Link>
        <p className="hidden text-sm text-ink/60 sm:block">Free battery capacity calculator</p>
      </div>
    </header>
  );
}
