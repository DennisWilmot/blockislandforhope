import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { HeroSlideshow } from "@/components/ui/HeroSlideshow";
import type { HeroSlide } from "@/data/hero-slides";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  imageUrl?: string;
  imagePosition?: string;
  slides?: HeroSlide[];
  videoId?: string;
  videoTitle?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  imageUrl,
  imagePosition,
  slides,
  videoId,
  videoTitle,
}: Props) {
  if (videoId) {
    return (
      <section className="bg-brand-ink text-white">
        <div className="mx-auto w-full max-w-6xl px-4 pb-8 pt-20 sm:px-6 md:pt-28 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-3xl leading-[1.12] tracking-tight md:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">{description}</p>
          )}
        </div>
        <div className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
          <YouTubeEmbed videoId={videoId} title={videoTitle ?? title} />
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-brand-ink">
      {slides && slides.length > 0 ? (
        <HeroSlideshow slides={slides} />
      ) : (
        imageUrl && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})`, backgroundPosition: imagePosition ?? "center" }}
          />
        )
      )}
      {(slides?.length || imageUrl) && (
        <>
          <div className="absolute inset-0 z-[1] bg-brand-ink/30" />
          <div className="absolute inset-0 z-[1] bg-gradient-to-t from-brand-ink/35 via-transparent to-brand-ink/20" />
        </>
      )}
      {!slides?.length && !imageUrl && (
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-brand-forest-dark via-brand-ink to-brand-ink" />
      )}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-12 pt-20 text-white sm:px-6 md:pb-16 md:pt-28 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-3xl leading-[1.12] tracking-tight md:text-4xl lg:text-5xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
