import Link from "next/link";

import { PageGrid } from "@/components/home/PageGrid";
import { WhereWeWorkMap } from "@/components/home/WhereWeWorkMap";
import { FadeInSection } from "@/components/ui/FadeInSection";

function HomeIdentity() {
  return (
    <section className="relative min-h-[560px] overflow-hidden bg-brand-ink md:min-h-[600px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/optimized/DJI_0579.jpg')" }}
      />
      <div className="absolute inset-0 bg-brand-ink/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/70 via-brand-ink/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#f8f5ef] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[560px] w-full max-w-6xl flex-col justify-between px-4 py-12 text-white sm:px-6 md:min-h-[600px] md:py-16 lg:px-8">
        <div className="flex max-w-xl items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15 font-display text-lg text-white backdrop-blur-sm">
            BI
          </div>
          <div>
            <p className="font-display text-xl leading-tight sm:text-2xl">Block Island Hope for Jamaica</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
              Charity Foundation
            </p>
          </div>
        </div>

        <div className="max-w-3xl py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Foundation Purpose</p>
          <h1 className="mt-5 max-w-2xl font-display text-4xl leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
            Practical hope for Jamaican communities.
          </h1>
          <p className="mt-6 max-w-[50ch] text-base leading-relaxed text-white/90 md:text-lg">
            We serve families through relief, education, health support, and community partnerships rooted in dignity,
            recovery, and care.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/missions"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-forest shadow-sm transition-all duration-200 hover:bg-brand-cream hover:shadow-md"
            >
              Explore Missions
            </Link>
            <Link
              href="/take-action"
              className="inline-flex rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
            >
              Take Action
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="border-b border-brand-forest/10 bg-brand-cream">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:gap-16 md:py-20 lg:px-8">
        <article>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-forest">Mission</p>
          <p className="mt-4 font-display text-2xl leading-[1.3] tracking-tight text-brand-ink md:text-3xl">
            Provide compassionate relief, family support, youth encouragement, and community partnership for
            underserved communities across Jamaica.
          </p>
        </article>
        <article>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-forest">Vision</p>
          <p className="mt-4 font-display text-2xl leading-[1.3] tracking-tight text-brand-ink md:text-3xl">
            A Jamaica where families, youth, and local leaders have the support, resources, and relationships needed
            to recover, grow, and thrive.
          </p>
        </article>
      </div>
    </section>
  );
}

export default function HomePage() {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? process.env.MAPBOX_TOKEN ?? "";

  return (
    <>
      <HomeIdentity />
      <MissionVision />
      <FadeInSection>
        <WhereWeWorkMap mapboxToken={mapboxToken} />
      </FadeInSection>
      <FadeInSection delay={100}>
        <PageGrid />
      </FadeInSection>
    </>
  );
}
