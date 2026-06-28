import Link from "next/link";

import { OutreachRecapTeaser } from "@/components/home/OutreachRecapTeaser";
import { PageGrid } from "@/components/home/PageGrid";
import { WhereWeWorkMap } from "@/components/home/WhereWeWorkMap";
import { HeroSlideshow } from "@/components/ui/HeroSlideshow";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { HOME_HERO_SLIDES } from "@/data/hero-slides";

function HomeIdentity() {
  return (
    <section className="relative min-h-[672px] overflow-hidden bg-brand-ink md:min-h-[720px]">
      <HeroSlideshow slides={HOME_HERO_SLIDES} />
      <div className="absolute inset-0 z-[1] bg-brand-ink/30" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-brand-ink/35 via-brand-ink/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-[1] h-12 bg-gradient-to-t from-[#f8f5ef] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[672px] w-full max-w-6xl flex-col justify-end px-4 py-12 text-white sm:px-6 md:min-h-[720px] md:py-16 lg:px-8">
        <div className="max-w-3xl py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Charity Foundation · Est. 2024
          </p>
          <h1 className="mt-5 max-w-2xl font-display text-4xl leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
            Block Island Hope for Jamaica
          </h1>
          <p className="mt-6 max-w-[50ch] text-base leading-relaxed text-white/90 md:text-lg">
            Practical hope for Jamaican communities — through relief, education, health support, and community
            partnerships rooted in dignity, recovery, and care.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/what-we-do"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-forest shadow-sm transition-all duration-200 hover:bg-brand-cream hover:shadow-md"
            >
              See Our Outreach
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
        <OutreachRecapTeaser />
      </FadeInSection>
      <FadeInSection>
        <WhereWeWorkMap
          mapboxToken={mapboxToken}
          detailHrefBase="/what-we-do"
          detailLinkLabel="Read outreach story"
        />
      </FadeInSection>
      <FadeInSection delay={100}>
        <PageGrid />
      </FadeInSection>
    </>
  );
}
