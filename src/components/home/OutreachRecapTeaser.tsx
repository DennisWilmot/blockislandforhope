import Image from "next/image";
import Link from "next/link";

import { TRIP_RECAP_VIDEO_ID } from "@/data/site-media";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function OutreachRecapTeaser() {
  return (
    <section className="border-b border-brand-forest/10 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Outreach Recap"
          title="See our work in Jamaica"
          description="Watch highlights from our recent outreach trip — then explore each day, community, and story."
        />

        <Link
          href="/what-we-do#trip-recap"
          className="group relative mt-10 block overflow-hidden rounded-2xl shadow-soft transition-shadow duration-300 hover:shadow-glow"
        >
          <div className="relative aspect-video">
            <Image
              src={`https://i.ytimg.com/vi/${TRIP_RECAP_VIDEO_ID}/maxresdefault.jpg`}
              alt="Outreach trip recap video thumbnail"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 1152px"
            />
            <div className="absolute inset-0 bg-brand-ink/35 transition-colors duration-300 group-hover:bg-brand-ink/25" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/15 text-2xl backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/25">
                ▶
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-white/90">
                Watch the recap
              </span>
            </div>
          </div>
        </Link>

        <div className="mt-8">
          <Link
            href="/what-we-do"
            className="inline-flex items-center gap-2 rounded-full bg-brand-forest px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-forest-dark hover:shadow-md"
          >
            See our outreach
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10m0 0L9 4m4 4L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
