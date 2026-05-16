"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { eventTypeStyles, outreachEvents } from "@/data/events";
import { formatLongDate } from "@/lib/format";

const allTypes = ["All", "Community Outreach", "Medical Mission", "Feeding Programme"] as const;
type FilterType = (typeof allTypes)[number];

export function UpdatesFeed() {
  const [activeType, setActiveType] = useState<FilterType>("All");

  const events = useMemo(() => {
    const sorted = [...outreachEvents].sort((a, b) => (a.isoDate < b.isoDate ? 1 : -1));
    if (activeType === "All") return sorted;
    return sorted.filter((event) => event.type === activeType);
  }, [activeType]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {allTypes.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setActiveType(type)}
            className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              activeType === type
                ? "bg-brand-forest text-white shadow-soft"
                : "border border-brand-forest/15 bg-white text-brand-ink/70 hover:border-brand-forest/30 hover:text-brand-ink"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <article key={event.id} className="group overflow-hidden rounded-2xl border border-brand-forest/10 bg-white shadow-soft transition-all duration-300 hover:border-brand-forest/20 hover:shadow-glow">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={event.imageUrl}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
                style={{ objectPosition: event.imagePosition ?? "center" }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${eventTypeStyles[event.type]}`}>
                {event.type}
              </span>
              <h3 className="mt-4 font-display text-2xl leading-tight tracking-tight text-brand-ink">{event.title}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-brand-ink/50">{formatLongDate(event.isoDate)}</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">{event.summary}</p>
              <Link
                href={`/updates/${event.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-forest transition-all duration-200 hover:gap-2"
              >
                Read more
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
