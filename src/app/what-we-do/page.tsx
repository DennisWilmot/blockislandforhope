import Image from "next/image";
import Link from "next/link";

import { PageHeader } from "@/components/ui/PageHeader";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { WhereWeWorkMap } from "@/components/home/WhereWeWorkMap";
import { eventTypeStyles, outreachEvents } from "@/data/events";
import { TRIP_RECAP_VIDEO_ID } from "@/data/site-media";
import { WHAT_WE_DO_HERO_SLIDES } from "@/data/hero-slides";
import { formatLongDate } from "@/lib/format";

export default function WhatWeDoPage() {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? process.env.MAPBOX_TOKEN ?? "";
  const outreachDays = [...outreachEvents].sort((a, b) => a.isoDate.localeCompare(b.isoDate));

  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="Outreach across Jamaica"
        description="From community visits to school support — explore our recent field work, day by day."
        slides={WHAT_WE_DO_HERO_SLIDES}
      />

      <section id="trip-recap" className="scroll-mt-24 border-b border-brand-forest/10 bg-brand-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeading
            eyebrow="Trip Recap"
            title="Highlights from our outreach"
            description="A full look at the communities, families, and partners we served on this trip."
          />
          <FadeInSection>
            <YouTubeEmbed
              videoId={TRIP_RECAP_VIDEO_ID}
              title="Block Island Hope for Jamaica outreach recap"
              className="mt-10"
            />
          </FadeInSection>
        </div>
      </section>

      <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <section className="mx-auto w-full max-w-6xl">
          <SectionHeading
            eyebrow="Outreach Days"
            title="Stories from the field"
            description="Read each day's recap, photos, and outcomes from communities across Jamaica."
          />

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {outreachDays.map((event, index) => (
              <FadeInSection key={event.id} delay={index * 60}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-forest/10 bg-white shadow-soft transition-all duration-300 hover:border-brand-forest/20 hover:shadow-glow">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
                      style={{ objectPosition: event.imagePosition ?? "center" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span
                      className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium ${eventTypeStyles[event.type]}`}
                    >
                      {event.type}
                    </span>
                    <h3 className="mt-4 font-display text-2xl leading-tight tracking-tight text-brand-ink">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-brand-ink/50">
                      {formatLongDate(event.isoDate)}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-ink/70">{event.summary}</p>
                    <Link
                      href={`/what-we-do/${event.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-forest transition-all duration-200 hover:gap-2"
                    >
                      Read outreach story
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
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
                </article>
              </FadeInSection>
            ))}
          </div>
        </section>
      </div>

      <FadeInSection>
        <WhereWeWorkMap
          mapboxToken={mapboxToken}
          sectionId="outreach-locations"
          eyebrow="Find by Location"
          title="Outreach locations across Jamaica"
          description="Select a location on the map to explore the story from that community."
          detailHrefBase="/what-we-do"
          detailLinkLabel="Read outreach story"
        />
      </FadeInSection>
    </>
  );
}
