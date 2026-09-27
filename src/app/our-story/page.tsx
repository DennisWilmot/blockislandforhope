import type { Metadata } from "next";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { OUR_STORY_HERO_SLIDES } from "@/data/hero-slides";
import { FOUNDER_INTERVIEW_VIDEO_ID, PETER_INTERVIEW_VIDEO_ID } from "@/data/site-media";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Learn how Block Island Hope for Jamaica grew from one call to serve into practical, community-led outreach across Jamaica.",
};

export default function OurStoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="Hope grew from one call to serve"
        description="From one home repair to a movement serving communities across Jamaica."
        slides={OUR_STORY_HERO_SLIDES}
      />

      <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <FadeInSection>
          <section className="mx-auto w-full max-w-6xl">
            <SectionHeading title="A Jamaican outreach organisation rooted in dignity and care" />
            <div className="max-w-[65ch] space-y-5 text-base leading-relaxed text-brand-ink/75">
              <p>
                In the early days, outreach was small and local. A few volunteers visited neighboring communities with care
                kits, meals, and encouragement. What started as occasional support quickly revealed deeper needs: healthcare
                access, youth mentorship, elder care, and consistent family follow-up.
              </p>
              <p>
                Over time, churches, clinicians, teachers, and community leaders joined the mission. Together, they built a
                model grounded in relationship-first service. We listen before we act, collaborate with local leadership, and
                design every event around long-term wellbeing, not one-time visibility.
              </p>
              <p>
                Today, Block Island Hope for Jamaica serves communities across Jamaica through outreach days, mobile medical
                missions, and feeding programmes. Our work is guided by compassion, accountability, and a belief that hope
                becomes credible when people see it in action.
              </p>
            </div>
          </section>
        </FadeInSection>
      </div>

      <div className="border-t border-brand-forest/10 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <section className="mx-auto w-full max-w-6xl">
          <SectionHeading
            eyebrow="Leadership"
            title="The people behind the mission"
            description="Meet the people strengthening the connection between Block Island and communities across Jamaica."
          />

          <div className="mt-10 divide-y divide-brand-forest/10">
            <FadeInSection>
              <article id="martin-rosato" className="scroll-mt-32 pb-14 lg:grid lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-start lg:gap-12">
                <div>
                  <h3 className="font-display text-3xl tracking-tight text-brand-ink">Martin Rosato</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-brand-forest">
                    International Board Member
                  </p>
                  <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-brand-ink/75">
                    Martin leads fundraising, equipment procurement, and international partner relationships that make each
                    outreach trip possible.
                  </p>
                </div>

                <div className="mt-8 lg:mt-0">
                  <YouTubeEmbed
                    videoId={FOUNDER_INTERVIEW_VIDEO_ID}
                    title="Martin Rosato — Block Island Hope for Jamaica"
                  />
                </div>
              </article>
            </FadeInSection>

            <FadeInSection>
              <article id="peter-preiser" className="scroll-mt-32 py-14 lg:grid lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-start lg:gap-12">
                <div>
                  <h3 className="font-display text-3xl tracking-tight text-brand-ink">Rev. Peter Preiser</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-brand-forest">Board Member</p>
                  <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-brand-ink/75">
                    Peter supports fundraising, church partnerships, and mission coordination between Block Island and
                    Jamaica.
                  </p>
                </div>

                <div className="mt-8 lg:mt-0">
                  <YouTubeEmbed
                    videoId={PETER_INTERVIEW_VIDEO_ID}
                    title="Rev. Peter Preiser — Block Island Hope for Jamaica"
                  />
                </div>
              </article>
            </FadeInSection>

            <FadeInSection>
              <article id="shannon" className="scroll-mt-32 pt-14 lg:grid lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-start lg:gap-12">
                <div>
                  <h3 className="font-display text-3xl tracking-tight text-brand-ink">Shannon</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-brand-forest">
                    Board Member
                  </p>
                  <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-brand-ink/75">
                    More from Shannon is coming soon.
                  </p>
                </div>

                <div
                  className="mt-8 flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-brand-forest/15 bg-brand-cream-dark shadow-soft lg:mt-0"
                  role="status"
                  aria-label="More from Shannon is coming soon"
                >
                  <div className="max-w-sm px-8 text-center">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-brand-forest/20 bg-white text-brand-forest shadow-soft">
                      <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5" fill="currentColor" aria-hidden="true">
                        <path d="M8.2 5.7a1 1 0 0 1 1.55-.83l8.55 6.3a1 1 0 0 1 0 1.66l-8.55 6.3a1 1 0 0 1-1.55-.83V5.7Z" />
                      </svg>
                    </span>
                    <p className="mt-5 font-display text-2xl tracking-tight text-brand-ink">More from Shannon coming soon</p>
                    <p className="mt-2 text-sm leading-relaxed text-brand-ink/65">
                      Check back for an update from Shannon.
                    </p>
                  </div>
                </div>
              </article>
            </FadeInSection>
          </div>
        </section>
      </div>
    </>
  );
}
