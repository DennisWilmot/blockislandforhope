import Image from "next/image";

import { SectionHeading } from "@/components/ui/SectionHeading";

const roadmapSteps = [
  {
    id: "01",
    title: "Inception",
    period: "Where it started",
    description:
      "Block Island for Hope began with small neighborhood visits and simple care deliveries led by committed local volunteers.",
    points: [
      "A relationship-first model rooted in listening",
      "Early outreach focused on families, elders, and school-age children",
      "Community trust was built household by household",
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
    <div className="pb-14">
      <section className="relative h-[30svh] min-h-[210px] w-full overflow-hidden md:h-[42svh] md:min-h-[320px]">
        <Image
          src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1600&q=80"
          alt="Block Island for Hope team in outreach planning"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-black/10" />
        <div className="absolute inset-x-0 bottom-8">
          <div className="mx-auto w-full max-w-6xl px-4 text-white sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Our Story</p>
            <h1 className="mt-2 max-w-2xl font-display text-3xl md:mt-3 md:text-5xl">Hope grew from one call to serve</h1>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-6xl px-4 sm:px-6 lg:mt-14 lg:px-8">
        <SectionHeading
          eyebrow="Outreach Roadmap"
          title="Our Journey Step by Step"
          description="A vertical roadmap from inception to where the mission stands now, brought to life with video."
        />

        <div className="relative">
          <div className="absolute left-1/2 top-2 hidden h-[calc(100%-1rem)] w-px -translate-x-1/2 bg-brand-forest/25 lg:block" />
          <div className="space-y-12 lg:space-y-14">
            {roadmapSteps.map((step, index) => (
              <article key={step.id} className="grid gap-6 md:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)] lg:items-center">
                <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-3"}>
                  <video
                    className="h-[240px] w-full object-cover md:h-[300px] lg:h-[280px]"
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
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink/60">{step.period}</p>
                  <h3 className="mt-2 font-display text-3xl text-brand-ink">{step.title}</h3>
                  <p className="mt-3 text-base text-brand-ink/85">{step.description}</p>
                  <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-brand-ink/80">
                    {step.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="A Jamaican outreach organisation rooted in dignity and care"
          description="Context behind the journey, now placed after the roadmap for a more engaging flow."
        />
        <div className="space-y-5 text-base text-brand-ink/85">
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
            Today, Block Island for Hope serves communities across Jamaica through outreach days, mobile medical
            missions, and feeding programmes. Our work is guided by compassion, accountability, and a belief that hope
            becomes credible when people see it in action.
          </p>
        </div>
      </section>
    </div>
  );
}
