type Props = {
  videoId: string;
  title: string;
  className?: string;
};

export function YouTubeEmbed({ videoId, title, className = "" }: Props) {
  return (
    <div className={`aspect-video overflow-hidden rounded-2xl bg-brand-ink shadow-soft ${className}`}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        className="h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
