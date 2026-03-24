import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { eventTypeStyles, outreachEvents } from "@/data/events";
import { formatLongDate } from "@/lib/format";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = outreachEvents.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <article className="mx-auto w-full max-w-4xl">
        <div className="relative h-[350px] w-full overflow-hidden rounded-3xl">
          <Image src={event.imageUrl} alt={event.title} fill className="object-cover" priority sizes="100vw" />
        </div>
        <span className={`mt-6 inline-flex rounded-full px-3 py-1 text-xs font-medium ${eventTypeStyles[event.type]}`}>
          {event.dateLabel}
        </span>
        <h1 className="mt-4 font-display text-4xl leading-tight text-brand-ink">{event.title}</h1>
        <p className="mt-2 text-sm uppercase tracking-[0.12em] text-brand-ink/60">
          {event.location} - {formatLongDate(event.isoDate)}
        </p>
        <p className="mt-5 text-base text-brand-ink/85">{event.summary}</p>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-ink/90">
          {event.recap.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-brand-forest/15 bg-white p-5 shadow-soft">
          <h2 className="font-display text-2xl text-brand-ink">Key outcomes</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-brand-ink/85">
            {event.impactPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/updates"
            className="inline-flex rounded-full border border-brand-forest/30 px-4 py-2 text-sm font-semibold text-brand-forest transition-colors hover:bg-brand-forest hover:text-white"
          >
            Back to updates
          </Link>
          <Link
            href="/take-action"
            className="inline-flex rounded-full bg-brand-forest px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#165a3f]"
          >
            Support this work
          </Link>
        </div>
      </article>
    </div>
  );
}
