import Link from "next/link";

import { SectionHeading } from "@/components/ui/SectionHeading";

type Tile = {
  href: string;
  title: string;
  description: string;
  imageUrl: string;
  overlay: string;
};

const tiles: Tile[] = [
  {
    href: "/our-story",
    title: "Our Story",
    description: "How a local vision grew into a movement of practical hope.",
    imageUrl:
      "https://images.unsplash.com/photo-1469571486292-b53601020f1f?auto=format&fit=crop&w=1600&q=80",
    overlay: "from-brand-forest/85 via-brand-forest/45 to-brand-ink/70",
  },
  {
    href: "/what-we-do",
    title: "What We Do",
    description: "Explore the programmes serving families, youth, and seniors.",
    imageUrl:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1600&q=80",
    overlay: "from-brand-navy/85 via-brand-navy/45 to-brand-ink/70",
  },
  {
    href: "/impact",
    title: "Impact",
    description: "See outcomes, numbers, and stories from the field.",
    imageUrl:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80",
    overlay: "from-brand-amber/85 via-brand-amber/45 to-brand-ink/70",
  },
  {
    href: "/take-action",
    title: "Take Action",
    description: "Choose your path: donate, volunteer, partner, or contribute.",
    imageUrl:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1600&q=80",
    overlay: "from-brand-coral/85 via-brand-coral/45 to-brand-ink/70",
  },
  {
    href: "/updates",
    title: "Updates",
    description: "Read event recaps and follow where outreach is happening.",
    imageUrl:
      "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?auto=format&fit=crop&w=1600&q=80",
    overlay: "from-brand-forest/85 via-brand-forest/45 to-brand-ink/70",
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Reach our team to ask, connect, or collaborate.",
    imageUrl:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1600&q=80",
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
              style={{ backgroundImage: `url(${tile.imageUrl})` }}
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
