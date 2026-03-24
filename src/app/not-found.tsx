import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-4 py-24 text-center sm:px-6 lg:px-8">
      <h1 className="font-display text-5xl text-brand-ink">Page not found</h1>
      <p className="mx-auto mt-3 max-w-md text-sm text-brand-ink/75">
        The page you are looking for could not be found. Explore our updates or return home.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/" className="rounded-full bg-brand-forest px-5 py-2.5 text-sm font-semibold text-white">
          Back home
        </Link>
        <Link
          href="/updates"
          className="rounded-full border border-brand-forest/30 px-5 py-2.5 text-sm font-semibold text-brand-forest"
        >
          View updates
        </Link>
      </div>
    </div>
  );
}
