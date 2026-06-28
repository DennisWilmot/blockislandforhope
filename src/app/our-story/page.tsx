import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { OUR_STORY_HERO_SLIDES } from "@/data/hero-slides";
import { FOUNDER_INTERVIEW_VIDEO_ID } from "@/data/site-media";

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
            description="Hear from Martin Rosato on how hurricane recovery, one home, and a call to serve grew into Block Island Hope for Jamaica."
          />

          <FadeInSection>
            <article className="mt-10">
              <h3 className="font-display text-3xl tracking-tight text-brand-ink">Martin Rosato</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-brand-forest">
                International Director
              </p>
              <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-brand-ink/75">
                Martin leads fundraising, equipment procurement, and international partner relationships that make each
                outreach trip possible.
              </p>

              <div className="mt-10 max-w-3xl">
                <YouTubeEmbed
                  videoId={FOUNDER_INTERVIEW_VIDEO_ID}
                  title="Martin Rosato — Block Island Hope for Jamaica"
                />
              </div>
            </article>
          </FadeInSection>
        </section>
      </div>
    </>
  );
}
