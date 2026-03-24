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
      <div className="mb-6 flex flex-wrap gap-2">
        {allTypes.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setActiveType(type)}
            className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeType === type
                ? "bg-brand-forest text-white"
                : "border border-brand-forest/20 bg-white text-brand-ink hover:border-brand-forest/40"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <article key={event.id} className="overflow-hidden rounded-2xl border border-brand-forest/15 bg-white shadow-soft">
            <div className="relative h-48 w-full">
              <Image src={event.imageUrl} alt={event.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="p-5">
              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${eventTypeStyles[event.type]}`}>
                {event.type}
              </span>
              <h3 className="mt-4 font-display text-2xl leading-tight text-brand-ink">{event.title}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.12em] text-brand-ink/60">{formatLongDate(event.isoDate)}</p>
              <p className="mt-3 text-sm text-brand-ink/80">{event.summary}</p>
              <Link href={`/updates/${event.slug}`} className="mt-4 inline-flex text-sm font-semibold text-brand-forest hover:underline">
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
