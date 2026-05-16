import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60svh] items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-forest">404</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-brand-ink md:text-5xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-[40ch] text-sm leading-relaxed text-brand-ink/60">
          The page you are looking for could not be found. Explore our updates or return home.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="rounded-full bg-brand-forest px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-forest-dark hover:shadow-md">
            Back home
          </Link>
          <Link
            href="/updates"
            className="rounded-full border border-brand-forest/20 px-6 py-2.5 text-sm font-semibold text-brand-forest transition-all duration-200 hover:bg-brand-forest/5"
          >
            View updates
          </Link>
        </div>
      </div>
    </div>
  );
}
