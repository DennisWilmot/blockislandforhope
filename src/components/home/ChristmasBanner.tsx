import Image from "next/image";
import Link from "next/link";

export function ChristmasBanner() {
  return (
    <section className="bg-brand-cream px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-2xl border border-brand-forest/15 bg-brand-forest shadow-soft-lg md:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-center px-6 py-9 text-white sm:px-10 sm:py-12 lg:px-14">
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#e5c26a]" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f1d98d]">Christmas Community Care Drive</p>
          </div>
          <h2 className="mt-5 max-w-xl font-display text-3xl leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
            Share practical care this Christmas
          </h2>
          <p className="mt-5 max-w-[55ch] text-sm leading-relaxed text-white/80 sm:text-base">
            Help provide food parcels, family essentials, and seasonal support for communities across Jamaica.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/donate"
              className="inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-forest transition hover:bg-brand-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Support the Christmas drive
            </Link>
            <Link
              href="/updates#christmas-community-care-drive"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/55 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              See holiday activities <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="relative min-h-64 md:min-h-full">
          <Image
            src="/images/optimized/DJI_0689.jpg"
            alt="Community members and outreach partners gathering in Jamaica"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
            style={{ objectPosition: "center 48%" }}
          />
          <div className="absolute inset-y-0 left-0 hidden w-px bg-white/25 md:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
