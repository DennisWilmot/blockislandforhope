import Image from "next/image";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { PageHeader } from "@/components/ui/PageHeader";

const roadmapSteps = [
  {
    id: "01",
    title: "Inception",
    period: "Where it started",
    description:
      "The mission began in the wake of hurricane damage, as recovery efforts and the repair of one home revealed a wider call to serve.",
    points: [
      "Hurricane damage exposed urgent needs for repair and recovery",
      "Volunteers rallied around one home and one family at a time",
      "That first response grew into a broader mission of practical hope",
    ],
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  {
    id: "02",
    title: "Organizing Outreach",
    period: "Building structure",
    description:
      "As needs grew, the team coordinated routes, volunteer schedules, and follow-up systems to serve communities with consistency.",
    points: [
      "Outreach days expanded from occasional to repeatable",
      "Local leaders and partners joined planning efforts",
      "Support shifted from one-time moments to ongoing care",
    ],
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
  },
  {
    id: "03",
    title: "Expanding Partnerships",
    period: "Schools and communities",
    description:
      "Work expanded into schools and additional districts through partnerships that strengthened both reach and accountability.",
    points: [
      "School-based outreach added to the journey",
      "Cross-community collaboration improved follow-through",
      "Field insights started shaping each next intervention",
    ],
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
  },
  {
    id: "04",
    title: "Where We Are Now",
    period: "Today",
    description:
      "Today the mission combines outreach, practical care, and long-term follow-up across multiple locations in Jamaica.",
    points: [
      "A living roadmap guided by real community needs",
      "Stronger systems for continuity and recap reporting",
      "Commitment to dignity, compassion, and measurable impact",
    ],
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

export default function OurStoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="Hope grew from one call to serve"
        description="From one home repair to a movement serving communities across Jamaica."
        imageUrl="/images/DSC02966.png"
        imagePosition="center 42%"
      />

      <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <section className="mx-auto w-full max-w-6xl">
          <SectionHeading
            eyebrow="Outreach Roadmap"
            title="Our Journey Step by Step"
            description="A vertical roadmap from inception to where the mission stands now, brought to life with video."
          />

          <div className="relative">
            <div className="absolute left-1/2 top-2 hidden h-[calc(100%-1rem)] w-px -translate-x-1/2 bg-brand-forest/20 lg:block" />
            <div className="space-y-16 lg:space-y-20">
              {roadmapSteps.map((step, index) => (
                <FadeInSection key={step.id} delay={index * 60}>
                  <article className="grid gap-8 md:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)] lg:items-center">
                    <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-3"}>
                      {step.id === "01" ? (
                        <div className="group relative h-[260px] w-full overflow-hidden rounded-2xl bg-brand-ink md:h-[300px] lg:h-[280px]">
                          <Image
                            src="/images/optimized/DSC02811.jpg"
                            alt="Inception story video placeholder showing the early recovery mission"
                            fill
                            className="object-cover opacity-75 transition duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/85 via-brand-ink/35 to-brand-ink/20" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/15 text-2xl text-white backdrop-blur-sm transition-colors duration-200 group-hover:bg-white/25">
                              ▶
                            </span>
                          </div>
                          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                              Documentary Segment
                            </p>
                            <p className="mt-2 font-display text-2xl leading-tight tracking-tight">Inception Story — Coming Soon</p>
                          </div>
                        </div>
                      ) : (
                        <video
                          className="h-[260px] w-full rounded-2xl object-cover md:h-[300px] lg:h-[280px]"
                          autoPlay
                          muted
                          loop
                          playsInline
                          controls
                          preload="metadata"
                          aria-label={`${step.title} roadmap video`}
                        >
                          <source src={step.videoUrl} type="video/mp4" />
                        </video>
                      )}
                    </div>

                    <div className="hidden lg:order-2 lg:flex lg:justify-center">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-forest text-sm font-semibold text-white shadow-soft">
                        {step.id}
                      </span>
                    </div>

                    <div className={index % 2 === 0 ? "lg:order-3" : "lg:order-1"}>
                      <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-forest text-xs font-semibold text-white lg:hidden">
                        {step.id}
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-ink/50">{step.period}</p>
                      <h3 className="mt-2 font-display text-3xl tracking-tight text-brand-ink">{step.title}</h3>
                      <p className="mt-3 max-w-[50ch] text-base leading-relaxed text-brand-ink/75">{step.description}</p>
                      <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-brand-ink/70">
                        {step.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <FadeInSection>
          <section className="mx-auto w-full max-w-6xl">
            <SectionHeading
              title="A Jamaican outreach organisation rooted in dignity and care"
            />
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
