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
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f8f5ef] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[620px] w-full max-w-6xl items-center px-4 py-10 sm:px-6 md:py-12 lg:px-8">
        <div className="relative w-full max-w-3xl">
          <div className="absolute -inset-4 bg-brand-ink/45" aria-hidden="true" />
          <div className="relative bg-brand-cream p-6 text-brand-ink shadow-[0_24px_90px_rgba(18,72,52,0.45)] ring-2 ring-white sm:p-8 lg:p-10">
            <div className="pb-9">
              <h1 className="mt-4 max-w-2xl font-display text-5xl leading-tight text-brand-ink md:text-6xl">
                Practical hope for Jamaican communities.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-ink md:text-xl">
                We serve families through relief, education, health support, and community partnerships rooted in
                dignity, recovery, and care.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/missions"
                  className="inline-flex rounded-full bg-brand-forest px-5 py-2.5 text-base font-bold text-white transition-colors hover:bg-[#165a3f]"
                >
                  Explore Missions
                </Link>
                <Link
                  href="/take-action"
                  className="inline-flex rounded-full border border-brand-forest/40 px-5 py-2.5 text-base font-bold text-brand-forest transition-colors hover:bg-brand-forest hover:text-white"
                >
                  Take Action
                </Link>
              </div>
            </div>

            <div className="grid gap-4 border-t border-brand-forest/20 pt-6 md:grid-cols-2">
              <article>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-forest">Mission Statement</p>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-brand-ink">
                  Provide compassionate relief, family support, youth encouragement, and community partnership for
                  underserved communities across Jamaica.
                </p>
              </article>
              <article>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-forest">Vision Statement</p>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-brand-ink">
                  A Jamaica where families, youth, and local leaders have the support, resources, and relationships
                  needed to recover, grow, and thrive.
                </p>
              </article>
            </div>
          </div>
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
