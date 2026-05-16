import Image from "next/image";
import Link from "next/link";

import { HeroCarousel } from "@/components/home/HeroCarousel";
import { WhereWeWorkMap } from "@/components/home/WhereWeWorkMap";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { eventTypeStyles, outreachEvents } from "@/data/events";
import { formatLongDate } from "@/lib/format";

const featuredMission = {
  title: "Hurricane Melissa Relief Mission",
  summary:
    "A focused relief mission preparing practical support, volunteer coordination, and partner communication for families affected by Hurricane Melissa.",
  imageUrl: "/images/optimized/DJI_0530.jpg",
};

const reliefGoals = [
  "Coordinate urgent supply support with local community partners.",
  "Organize volunteers for relief preparation, distribution, and follow-up.",
  "Keep families connected to practical aid beyond the first response.",
];

const missionUpdates = [
  {
    label: "Partner Coordination",
    detail: "Relief needs are being coordinated with community partners.",
  },
  {
    label: "Volunteer Planning",
    detail: "Volunteer roles are being organized for supply support and follow-up.",
  },
  {
    label: "Relief Focus",
    detail: "Mission planning is focused on practical aid, dignity, and continuity.",
  },
];

export default function MissionsPage() {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? process.env.MAPBOX_TOKEN ?? "";
  const missionStories = [...outreachEvents].sort((a, b) => (a.isoDate < b.isoDate ? 1 : -1));

  return (
    <>
      <HeroCarousel
        detailHrefBase="/missions"
        primaryHref="/impact"
        secondaryHref="#mission-stories"
        eyebrow="Featured Mission"
        title={featuredMission.title}
        summary={featuredMission.summary}
        primaryCtaLabel="See the Impact"
        secondaryCtaLabel="Read Mission Stories"
      />

      <div className="px-4 py-14 sm:px-6 lg:px-8">
        <section className="mx-auto w-full max-w-6xl">
          <SectionHeading
            eyebrow="Missions"
            title="Featured mission spotlight"
            description="A closer look at the current relief mission, the goals guiding the work, and the updates shaping next steps."
          />

          <article className="overflow-hidden rounded-2xl border border-brand-forest/15 bg-white shadow-soft">
            <div className="grid gap-0 lg:grid-cols-[1fr_1fr]">
              <div className="relative min-h-[320px]">
                <Image
                  src={featuredMission.imageUrl}
                  alt={featuredMission.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  priority
                />
              </div>
              <div className="p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-forest">
                  Hurricane Relief
                </p>
                <h1 className="mt-3 font-display text-4xl leading-tight text-brand-ink">{featuredMission.title}</h1>
                <p className="mt-4 text-base leading-relaxed text-brand-ink/85">{featuredMission.summary}</p>

                <div className="mt-6 border-t border-brand-forest/15 pt-5">
                  <h2 className="font-display text-2xl text-brand-ink">Relief goals</h2>
                  <ul className="mt-3 space-y-3 text-sm text-brand-ink/85">
                    {reliefGoals.map((goal) => (
                      <li key={goal} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-forest" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-brand-forest/15 pt-5">
                  <h2 className="font-display text-2xl text-brand-ink">Latest focus</h2>
                  <p className="mt-3 text-sm leading-relaxed text-brand-ink/80">
                    Mission updates are being gathered as partner needs, volunteer availability, and support priorities
                    are confirmed.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>

      <WhereWeWorkMap
        mapboxToken={mapboxToken}
        sectionId="mission-locations"
        eyebrow="Mission Map"
        title="Track mission locations across Jamaica"
        description="Explore outreach locations connected to mission stories, field visits, and community impact."
        detailHrefBase="/missions"
        detailLinkLabel="Read mission story"
      />

      <div className="px-4 pb-14 sm:px-6 lg:px-8">
        <section id="mission-stories" className="mx-auto w-full max-w-6xl scroll-mt-24">
          <SectionHeading
            eyebrow="Mission Stories"
            title="Stories from the field"
            description="Read mission recaps and outreach stories from communities served by the foundation."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {missionStories.map((event) => (
              <article
                key={event.id}
                className="group overflow-hidden rounded-2xl border border-brand-forest/15 bg-white shadow-soft transition duration-200 hover:-translate-y-1 hover:border-brand-forest/30"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    style={{ objectPosition: event.imagePosition ?? "center" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${eventTypeStyles[event.type]}`}
                  >
                    {event.type}
                  </span>
                  <h3 className="mt-4 font-display text-2xl leading-tight text-brand-ink">{event.title}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.12em] text-brand-ink/60">
                    {formatLongDate(event.isoDate)}
                  </p>
                  <p className="mt-3 text-sm text-brand-ink/80">{event.summary}</p>
                  <Link
                    href={`/missions/${event.slug}`}
                    className="mt-5 inline-flex text-sm font-semibold text-brand-forest transition-colors group-hover:text-[#165a3f] group-hover:underline"
                  >
                    Read mission story
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <div className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <section className="mx-auto w-full max-w-6xl">
          <SectionHeading
            eyebrow="Mission Updates"
            title="Recent outreach activity"
            description="Current planning notes and announcements connected to relief and outreach priorities."
          />

          <div className="space-y-4 border-l border-brand-forest/20 pl-5">
            {missionUpdates.map((update) => (
              <article key={update.label} className="relative pb-5">
                <span className="absolute -left-[1.75rem] top-1 h-3 w-3 rounded-full border-2 border-white bg-brand-forest" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-forest">{update.label}</p>
                <h3 className="mt-2 font-display text-2xl leading-tight text-brand-ink">{update.detail}</h3>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
