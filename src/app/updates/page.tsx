import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageHeader } from "@/components/ui/PageHeader";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { upcomingActivities } from "@/data/activities";

export const metadata: Metadata = {
  title: "Updates",
  description:
    "Read the latest outreach stories, community updates, and field reports from Block Island Hope for Jamaica.",
};

export default function UpdatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Updates"
        title="Christmas & New Year activities"
        description="Two seasonal opportunities to share practical care, serve alongside local partners, and begin the new year with purpose."
        imageUrl="/images/optimized/DSC02671.jpg"
        imagePosition="center 28%"
      />

      <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <section className="mx-auto w-full max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingActivities.map((activity, index) => (
              <FadeInSection key={activity.id} delay={index * 60}>
                <article
                  id={activity.id}
                  className="group flex h-full min-h-[470px] scroll-mt-32 flex-col overflow-hidden rounded-2xl border border-brand-forest/10 bg-white shadow-soft transition-shadow duration-300 hover:shadow-glow"
                >
                  <div className="relative h-44 shrink-0 overflow-hidden">
                    <Image
                      src={activity.imageUrl}
                      alt={activity.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.035]"
                      style={{ objectPosition: activity.imagePosition }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/55 via-brand-ink/10 to-brand-ink/45" />
                    <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-4 border-b border-white/25 px-5 py-3 text-white">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">{activity.label}</p>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85">
                        {activity.timeframe}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-forest/75">
                      {activity.location}
                    </p>
                    <h2 className="mt-3 font-display text-2xl leading-[1.12] tracking-tight text-brand-ink sm:text-3xl">
                      {activity.title}
                    </h2>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-ink/70">{activity.description}</p>
                    <Link
                      href="/contact#contact-form"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-forest transition-all duration-200 hover:gap-3 hover:text-brand-forest-dark"
                    >
                      {activity.actionLabel}
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
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
        <section className="border-t border-brand-forest/10 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto w-full max-w-6xl">
            <SectionHeading
              eyebrow="Recent Outreach"
              title="Read the latest field stories"
              description="Catch up on completed outreach days and community impact reports."
            />
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-2 rounded-full bg-brand-forest px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-forest-dark hover:shadow-md"
            >
              View all outreach stories
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
