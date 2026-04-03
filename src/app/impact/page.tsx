import Image from "next/image";
import Link from "next/link";

import { outreachEvents } from "@/data/events";
import { donationAllocation, impactStats } from "@/data/stats";
import { testimonials } from "@/data/testimonials";
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
    <div className="rounded-2xl border border-brand-forest/15 bg-white p-6 shadow-soft">
      <h3 className="font-display text-2xl text-brand-ink">How support is allocated</h3>
      <div className="mt-6 flex flex-col items-center gap-5 md:flex-row">
        <svg viewBox="0 0 42 42" className="h-44 w-44 -rotate-90">
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
        <ul className="w-full space-y-2">
          {donationAllocation.map((item) => (
            <li key={item.label} className="flex items-center justify-between text-sm text-brand-ink/85">
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                {item.label}
              </span>
              <span className="font-semibold">{item.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ImpactPage() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Impact"
          title="Proof that compassionate action changes outcomes"
          description="We track outcomes not to celebrate ourselves, but to stay accountable to every family and partner who trusts this work."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {impactStats.map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-brand-forest/15 bg-white p-6 shadow-soft">
              <p className="font-display text-5xl text-brand-forest">{stat.value}</p>
              <p className="mt-2 text-sm text-brand-ink/80">{stat.label}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-brand-forest/15 bg-white p-6 shadow-soft">
            <div className="relative mb-4 h-60 w-full overflow-hidden rounded-xl">
              <Image
                src="/images/DJI_0530.png"
                alt="Aerial view of a Block Island for Hope impact site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <blockquote className="font-display text-2xl leading-snug text-brand-ink">
              &quot;{testimonials[0].quote}&quot;
            </blockquote>
            <p className="mt-3 text-sm text-brand-ink/70">
              {testimonials[0].author} - {testimonials[0].context}
            </p>
          </article>
          <article className="rounded-2xl border border-brand-forest/15 bg-white p-6 shadow-soft">
            <div className="relative mb-4 h-60 w-full overflow-hidden rounded-xl">
              <Image
                src={outreachEvents[2].imageUrl}
                alt="Feeding programme volunteers preparing meals"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <blockquote className="font-display text-2xl leading-snug text-brand-ink">
              &quot;{testimonials[2].quote}&quot;
            </blockquote>
            <p className="mt-3 text-sm text-brand-ink/70">
              {testimonials[2].author} - {testimonials[2].context}
            </p>
          </article>
        </div>

        <div className="mt-8">
          <DonationDonut />
        </div>

        <div className="mt-8 rounded-2xl border border-brand-forest/15 bg-white p-6 shadow-soft">
          <h3 className="font-display text-3xl text-brand-ink">Ready to fuel the next outreach?</h3>
          <p className="mt-3 max-w-2xl text-sm text-brand-ink/80">
            Your support helps us continue community events, medical visits, and feeding routes with consistency and
            dignity.
          </p>
          <Link
            href="/donate"
            className="mt-5 inline-flex rounded-full bg-brand-forest px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#165a3f]"
          >
            Go to Donate
          </Link>
        </div>
      </section>
    </div>
  );
}
