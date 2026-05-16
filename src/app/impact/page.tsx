import Image from "next/image";
import Link from "next/link";

import { outreachEvents } from "@/data/events";
import { donationAllocation, impactStats } from "@/data/stats";
import { testimonials } from "@/data/testimonials";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

function DonationDonut() {
  const total = donationAllocation.reduce((acc, item) => acc + item.value, 0);
  const segments = donationAllocation.reduce<
    Array<{
      label: string;
      color: string;
      ratio: number;
      start: number;
    }>
  >((acc, item) => {
    const previousRatioTotal = acc.reduce((sum, segment) => sum + segment.ratio, 0);
    const ratio = (item.value / total) * 100;
    acc.push({
      label: item.label,
      color: item.color,
      ratio,
      start: previousRatioTotal,
    });
    return acc;
  }, []);

  return (
    <div className="rounded-2xl border border-brand-forest/10 bg-white p-6 shadow-soft md:p-8">
      <h3 className="font-display text-2xl tracking-tight text-brand-ink">How support is allocated</h3>
      <div className="mt-6 flex flex-col items-center gap-6 md:flex-row">
        <svg viewBox="0 0 42 42" className="h-44 w-44 -rotate-90 shrink-0">
          <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#e4e7e4" strokeWidth="5" />
          {segments.map((segment) => (
            <circle
              key={segment.label}
              cx="21"
              cy="21"
              r="15.915"
              fill="transparent"
              stroke={segment.color}
              strokeWidth="5"
              strokeDasharray={`${segment.ratio} ${100 - segment.ratio}`}
              strokeDashoffset={-segment.start}
            />
          ))}
        </svg>
        <ul className="w-full space-y-2.5">
          {donationAllocation.map((item) => (
            <li key={item.label} className="flex items-center justify-between text-sm text-brand-ink/80">
              <span className="inline-flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                {item.label}
              </span>
              <span className="font-semibold text-brand-ink">{item.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Impact"
        title="Proof that compassionate action changes outcomes"
        description="We track outcomes not to celebrate ourselves, but to stay accountable to every family and partner who trusts this work."
        imageUrl="/images/optimized/DJI_0530.jpg"
      />

      <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <section className="mx-auto w-full max-w-6xl">
          <FadeInSection>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {impactStats.map((stat) => (
                <article key={stat.label} className="rounded-2xl border border-brand-forest/10 bg-white p-6 shadow-soft">
                  <p className="font-display text-4xl tracking-tight text-brand-forest md:text-5xl">{stat.value}</p>
                  <p className="mt-2 text-sm text-brand-ink/70">{stat.label}</p>
                </article>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="mt-16 grid gap-6 lg:grid-cols-2">
              <article className="overflow-hidden rounded-2xl border border-brand-forest/10 bg-white shadow-soft">
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src="/images/DJI_0530.png"
                    alt="Aerial view of a Block Island Hope for Jamaica impact site"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <blockquote className="font-display text-2xl leading-snug tracking-tight text-brand-ink">
                    &quot;{testimonials[0].quote}&quot;
                  </blockquote>
                  <p className="mt-4 text-sm text-brand-ink/60">
                    {testimonials[0].author} &mdash; {testimonials[0].context}
                  </p>
                </div>
              </article>
              <article className="overflow-hidden rounded-2xl border border-brand-forest/10 bg-white shadow-soft">
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={outreachEvents[2].imageUrl}
                    alt="Feeding programme volunteers preparing meals"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <blockquote className="font-display text-2xl leading-snug tracking-tight text-brand-ink">
                    &quot;{testimonials[2].quote}&quot;
                  </blockquote>
                  <p className="mt-4 text-sm text-brand-ink/60">
                    {testimonials[2].author} &mdash; {testimonials[2].context}
                  </p>
                </div>
              </article>
            </div>
          </FadeInSection>

          <FadeInSection delay={150}>
            <div className="mt-16">
              <DonationDonut />
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <article className="mt-16 rounded-2xl bg-brand-forest-dark p-8 text-white md:p-10">
              <h3 className="font-display text-3xl tracking-tight">Ready to fuel the next outreach?</h3>
              <p className="mt-3 max-w-[55ch] text-sm leading-relaxed text-white/70">
                Your support helps us continue community events, medical visits, and feeding routes with consistency and
                dignity.
              </p>
              <Link
                href="/donate"
                className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-brand-forest transition-all duration-200 hover:bg-brand-cream hover:shadow-md"
              >
                Go to Donate
              </Link>
            </article>
          </FadeInSection>
        </section>
      </div>
    </>
  );
}
