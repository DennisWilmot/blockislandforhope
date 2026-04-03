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
    overlay: "from-brand-forest/85 via-brand-forest/45 to-brand-ink/70",
  },
  {
    href: "/what-we-do",
    title: "What We Do",
    description: "Explore the programmes serving families, youth, and seniors.",
    imageUrl: "/images/optimized/DSC02874.jpg",
    imagePosition: "center 28%",
    overlay: "from-brand-navy/85 via-brand-navy/45 to-brand-ink/70",
  },
  {
    href: "/impact",
    title: "Impact",
    description: "See outcomes, numbers, and stories from the field.",
    imageUrl: "/images/optimized/DJI_0530.jpg",
    overlay: "from-brand-amber/85 via-brand-amber/45 to-brand-ink/70",
  },
  {
    href: "/take-action",
    title: "Take Action",
    description: "Choose your path: donate, volunteer, partner, or contribute.",
    imageUrl: "/images/optimized/DJI_0502.jpg",
    overlay: "from-brand-coral/85 via-brand-coral/45 to-brand-ink/70",
  },
  {
    href: "/updates",
    title: "Updates",
    description: "Read event recaps and follow where outreach is happening.",
    imageUrl: "/images/optimized/DSC02671.jpg",
    overlay: "from-brand-forest/85 via-brand-forest/45 to-brand-ink/70",
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Reach our team to ask, connect, or collaborate.",
    imageUrl: "/images/optimized/DSC02811.jpg",
    overlay: "from-brand-navy/85 via-brand-navy/45 to-brand-ink/70",
  },
];

export function PageGrid() {
  return (
    <section className="pb-14 pt-8">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Explore"
          title="Choose your path"
          description="Six living pathways, flat on the page, each carrying a different part of our story."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tiles.map((tile) => (
          <Link
            key={tile.href}
            href={tile.href}
            className="living-tile group relative h-[34svh] min-h-[240px] cursor-pointer overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${tile.imageUrl})`, backgroundPosition: tile.imagePosition ?? "center" }}
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${tile.overlay}`} />
            <span className="sparkle-dot absolute left-[16%] top-[20%] h-1.5 w-1.5 rounded-full bg-white/75" />
            <span
              className="sparkle-dot absolute right-[15%] top-[28%] h-1 w-1 rounded-full bg-white/70"
              style={{ animationDelay: "1.2s" }}
            />
            <span
              className="sparkle-dot absolute right-[22%] bottom-[24%] h-1.5 w-1.5 rounded-full bg-white/65"
              style={{ animationDelay: "2.3s" }}
            />
            <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Navigate</p>
                <h3 className="mt-3 font-display text-3xl leading-tight">{tile.title}</h3>
              </div>
              <div>
                <p className="max-w-[28ch] text-sm text-white/90">{tile.description}</p>
                <p className="mt-4 text-sm font-semibold text-white/95 transition-colors group-hover:text-brand-cream">
                  Explore section
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
