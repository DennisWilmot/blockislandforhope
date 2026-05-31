import Link from "next/link";

import { SectionHeading } from "@/components/ui/SectionHeading";

type Tile = {
  href: string;
  title: string;
  description: string;
  imageUrl: string;
  overlay: string;
  imagePosition?: string;
};

const tiles: Tile[] = [
  {
    href: "/our-story",
    title: "Our Story",
    description: "How a local vision grew into a movement of practical hope.",
    imageUrl: "/images/optimized/DJI_0579.jpg",
    overlay: "from-brand-forest/70 via-brand-forest/30 to-brand-ink/60",
  },
  {
    href: "/what-we-do",
    title: "What We Do",
    description: "Watch the trip recap and read stories from each outreach day across Jamaica.",
    imageUrl: "/images/optimized/DSC02874.jpg",
    imagePosition: "center 28%",
    overlay: "from-brand-navy/70 via-brand-navy/30 to-brand-ink/60",
  },
  {
    href: "/impact",
    title: "Impact",
    description: "See outcomes, numbers, and stories from the field.",
    imageUrl: "/images/optimized/DJI_0530.jpg",
    overlay: "from-brand-amber/70 via-brand-amber/30 to-brand-ink/60",
  },
  {
    href: "/take-action",
    title: "Take Action",
    description: "Choose your path: donate, volunteer, partner, or contribute.",
    imageUrl: "/images/optimized/DJI_0502.jpg",
    overlay: "from-brand-coral/70 via-brand-coral/30 to-brand-ink/60",
  },
  {
    href: "/updates",
    title: "Updates",
    description: "Read event recaps and follow where outreach is happening.",
    imageUrl: "/images/optimized/DSC02671.jpg",
    overlay: "from-brand-forest/70 via-brand-forest/30 to-brand-ink/60",
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Reach our team to ask, connect, or collaborate.",
    imageUrl: "/images/optimized/DSC02811.jpg",
    overlay: "from-brand-navy/70 via-brand-navy/30 to-brand-ink/60",
  },
];

export function PageGrid() {
  return (
    <section className="pb-20 pt-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Explore"
          title="Choose your path"
          description="Each section carries a different part of our story."
        />
      </div>
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-px bg-brand-forest/10 md:grid-cols-2 lg:grid-cols-3">
        {tiles.map((tile) => (
          <Link
            key={tile.href}
            href={tile.href}
            className="living-tile group relative h-[32svh] min-h-[260px] cursor-pointer overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
              style={{
                backgroundImage: `url(${tile.imageUrl})`,
                backgroundPosition: tile.imagePosition ?? "center",
              }}
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${tile.overlay} transition-opacity duration-500 group-hover:opacity-90`} />
            <div className="relative z-10 flex h-full flex-col justify-between p-7 text-white sm:p-8">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">Navigate</p>
                <h3 className="mt-3 font-display text-3xl leading-tight tracking-tight">{tile.title}</h3>
              </div>
              <div>
                <p className="max-w-[30ch] text-sm leading-relaxed text-white/85">{tile.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 transition-all duration-300 group-hover:gap-2.5 group-hover:text-white">
                  Explore section
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                    <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
