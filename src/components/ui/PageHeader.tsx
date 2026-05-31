import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  imageUrl?: string;
  imagePosition?: string;
  videoId?: string;
  videoTitle?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  imageUrl,
  imagePosition,
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
      {imageUrl && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})`, backgroundPosition: imagePosition ?? "center" }}
          />
          <div className="absolute inset-0 bg-brand-ink/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/60 via-transparent to-brand-ink/20" />
        </>
      )}
      {!imageUrl && (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-forest-dark via-brand-ink to-brand-ink" />
      )}
      <div className="relative mx-auto w-full max-w-6xl px-4 pb-12 pt-20 text-white sm:px-6 md:pb-16 md:pt-28 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-3xl leading-[1.12] tracking-tight md:text-4xl lg:text-5xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
