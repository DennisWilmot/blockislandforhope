import Link from "next/link";

import { PageGrid } from "@/components/home/PageGrid";
import { WhereWeWorkMap } from "@/components/home/WhereWeWorkMap";
import { FadeInSection } from "@/components/ui/FadeInSection";

function HomeIdentity() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-brand-ink">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/optimized/DJI_0579.jpg')", filter: "brightness(1.1) saturate(1.14)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/78 via-brand-ink/52 to-brand-forest/15" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f8f5ef] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[620px] w-full max-w-6xl flex-col justify-between px-4 py-10 text-white sm:px-6 md:py-12 lg:px-8">
        <div className="flex max-w-xl items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/15 font-display text-xl text-white backdrop-blur-sm">
            BI
          </div>
          <div>
            <p className="font-display text-2xl leading-tight">Block Island Hope for Jamaica</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Charity Foundation
            </p>
          </div>
        </div>

        <div className="max-w-3xl py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">Foundation Purpose</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
            Practical hope for Jamaican communities.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/88 md:text-lg">
            We serve families through relief, education, health support, and community partnerships rooted in dignity,
            recovery, and care.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/missions"
              className="inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-forest transition-colors hover:bg-brand-cream"
            >
              Explore Missions
            </Link>
            <Link
              href="/take-action"
              className="inline-flex rounded-full border border-white/45 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/15"
            >
              Take Action
            </Link>
          </div>
        </div>

        <div className="grid gap-4 border-t border-white/20 pt-6 md:grid-cols-2">
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">Mission Statement</p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/88">
              Provide compassionate relief, family support, youth encouragement, and community partnership for
              underserved communities across Jamaica.
            </p>
          </article>
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">Vision Statement</p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/88">
              A Jamaica where families, youth, and local leaders have the support, resources, and relationships needed
              to recover, grow, and thrive.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? process.env.MAPBOX_TOKEN ?? "";

  return (
    <>
      <HomeIdentity />
      <FadeInSection>
        <WhereWeWorkMap mapboxToken={mapboxToken} />
      </FadeInSection>
      <FadeInSection>
        <PageGrid />
      </FadeInSection>
    </>
  );
}
