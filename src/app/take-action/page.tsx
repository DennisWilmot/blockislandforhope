import Link from "next/link";

import { PageHeader } from "@/components/ui/PageHeader";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const paths = [
  {
    title: "Donate",
    description:
      "Sustain outreach with recurring or one-time support. Your contribution helps cover food, medical supplies, transport, and volunteer logistics.",
    button: "Go to Donate",
    href: "/donate",
    highlighted: true,
    imageUrl:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1800&q=80",
    overlay: "from-brand-forest/80 via-brand-forest/50 to-brand-ink/75",
  },
  {
    title: "Volunteer",
    description:
      "Serve on outreach teams, event logistics, meal prep, youth mentoring, or communications support based on your skills and availability.",
    button: "Volunteer interest",
    href: "/contact",
    highlighted: false,
    imageUrl:
      "https://images.unsplash.com/photo-1469571486292-b53601020f1f?auto=format&fit=crop&w=1800&q=80",
    overlay: "from-brand-navy/80 via-brand-navy/50 to-brand-ink/75",
  },
  {
    title: "Partner / Sponsor",
    description:
      "Churches, businesses, and institutions can sponsor events, provide services, or co-host initiatives in specific communities.",
    button: "Start a partnership",
    href: "/contact",
    highlighted: false,
    imageUrl:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1800&q=80",
    overlay: "from-brand-coral/80 via-brand-coral/50 to-brand-ink/75",
  },
  {
    title: "Contribute In-Kind",
    description:
      "Support with goods and services: medical supplies, food items, hygiene packs, educational materials, transport, or professional expertise.",
    button: "View needs list",
    href: "/contact",
    highlighted: false,
    imageUrl:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1800&q=80",
    overlay: "from-brand-amber/80 via-brand-amber/50 to-brand-ink/75",
  },
];

export default function TakeActionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Take Action"
        title="Four ways to stand with communities"
        description="Choose the pathway that best fits your capacity. Every action contributes to long-term local impact."
        imageUrl="/images/optimized/DJI_0502.jpg"
      />

      <section className="mt-1">
        <div className="space-y-px">
          {paths.map((path, index) => (
            <FadeInSection key={path.title} delay={index * 80}>
              <article className="group relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url(${path.imageUrl})` }}
                />
                <div className="absolute inset-0 bg-brand-ink/40" />
                <div className={`absolute inset-0 bg-gradient-to-r ${path.overlay}`} />

                <div className="relative mx-auto grid w-full max-w-6xl gap-6 px-4 py-10 text-white sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-8 lg:py-14">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75">
                      {path.highlighted ? "Priority Path" : "Action Path"}
                    </p>
                    <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight">{path.title}</h2>
                    <p className="mt-3 max-w-[50ch] text-sm leading-relaxed text-white/90 md:text-base">{path.description}</p>
                  </div>

                  <div className="flex items-end justify-start lg:justify-end">
                    <Link
                      href={path.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-all duration-200 hover:gap-2.5"
                    >
                      {path.button}
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
                        <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            </FadeInSection>
          ))}
        </div>
      </section>
    </>
  );
}
