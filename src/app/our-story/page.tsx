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
        <section className="mx-auto w-full max-w-6xl">
          <SectionHeading
            eyebrow="What Keeps Us Going"
            title="Interview with a founder"
            description="Hear how hurricane recovery, one home, and a call to serve grew into Block Island Hope for Jamaica."
          />

          <FadeInSection>
            <article className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
              <YouTubeEmbed
                videoId={FOUNDER_INTERVIEW_VIDEO_ID}
                title="What keeps us going — Interview with a founder"
              />

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-ink/50">Where it started</p>
                <h3 className="mt-2 font-display text-3xl tracking-tight text-brand-ink">Inception</h3>
                <p className="mt-4 max-w-[50ch] text-base leading-relaxed text-brand-ink/75">
                  The mission began in the wake of hurricane damage, as recovery efforts and the repair of one home revealed
                  a wider call to serve families across Jamaica.
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-brand-ink/70">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-forest" aria-hidden />
                    <span>Hurricane damage exposed urgent needs for repair and recovery</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-forest" aria-hidden />
                    <span>Volunteers rallied around one home and one family at a time</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-forest" aria-hidden />
                    <span>That first response grew into a broader mission of practical hope</span>
                  </li>
                </ul>
              </div>
            </article>
          </FadeInSection>
        </section>
      </div>

      <div className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
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
    </>
  );
}
