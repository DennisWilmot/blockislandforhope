import Link from "next/link";

import { PageHeader } from "@/components/ui/PageHeader";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { upcomingActivities } from "@/data/activities";

export default function UpdatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Updates"
        title="Upcoming activities"
        description="Follow what is being prepared next, from relief planning to volunteer coordination and community support."
        imageUrl="/images/optimized/DSC02671.jpg"
        imagePosition="center 28%"
      />

      <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <section className="mx-auto w-full max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingActivities.map((activity, index) => (
              <FadeInSection key={activity.id} delay={index * 60}>
                <article className="flex h-full flex-col rounded-2xl border border-brand-forest/10 bg-white p-6 shadow-soft transition-shadow duration-200 hover:shadow-glow">
                  <span className="inline-flex w-fit rounded-full border border-brand-forest/30 bg-brand-forest/10 px-3 py-1 text-xs font-medium text-brand-forest">
                    {activity.status}
                  </span>
                  <h3 className="mt-5 font-display text-2xl leading-tight tracking-tight text-brand-ink">{activity.title}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-brand-ink/50">
                    {activity.timeframe} &middot; {activity.location}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-ink/70">{activity.description}</p>
                </article>
              </FadeInSection>
            ))}
          </div>
        </section>
      </div>

      <FadeInSection>
        <section className="border-t border-brand-forest/10 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto w-full max-w-6xl">
            <SectionHeading
              eyebrow="Recent Missions"
              title="Read the latest field stories"
              description="Catch up on completed outreach missions and community impact reports."
            />
            <Link
              href="/missions"
              className="inline-flex items-center gap-2 rounded-full bg-brand-forest px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-forest-dark hover:shadow-md"
            >
              View all mission stories
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>
      </FadeInSection>
    </>
  );
}
