import Link from "next/link";
import { notFound } from "next/navigation";

import { outreachEvents } from "@/data/events";
import { formatLongDate } from "@/lib/format";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { ImageCollage } from "@/components/ui/ImageCollage";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = outreachEvents.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  const hasCollage = event.collageImages && event.collageImages.length > 0;

  return (
    <>
      <PageHeader
        eyebrow={event.dateLabel}
        title={event.title}
        description={`${event.location} — ${formatLongDate(event.isoDate)}`}
        imageUrl={!hasCollage ? event.imageUrl : undefined}
        imagePosition={event.imagePosition ?? "center"}
      />

      <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <FadeInSection>
          <article className="mx-auto w-full max-w-4xl">
            {hasCollage && (
              <div className="mb-12">
                <ImageCollage
                  images={event.collageImages!}
                  alt={event.title}
                  priority
                />
              </div>
            )}

            <p className="max-w-[60ch] text-lg leading-relaxed text-brand-ink/80">{event.summary}</p>

            <div className="mt-8 max-w-[65ch] space-y-5 text-base leading-relaxed text-brand-ink/75">
              {event.recap.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-brand-forest/10 bg-white p-6 shadow-soft md:p-8">
              <h2 className="font-display text-2xl tracking-tight text-brand-ink">Key outcomes</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-brand-ink/70">
                {event.impactPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/updates"
                className="inline-flex rounded-full border border-brand-forest/20 px-5 py-2.5 text-sm font-semibold text-brand-forest transition-all duration-200 hover:bg-brand-forest hover:text-white"
              >
                Back to updates
              </Link>
              <Link
                href="/take-action"
                className="inline-flex rounded-full bg-brand-forest px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-forest-dark hover:shadow-md"
              >
                Support this work
              </Link>
            </div>
          </article>
        </FadeInSection>
      </div>
    </>
  );
}
