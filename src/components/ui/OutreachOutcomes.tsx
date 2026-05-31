type Props = {
  points: string[];
  title?: string;
  className?: string;
};

export function OutreachOutcomes({ points, title = "Outreach outcomes", className = "" }: Props) {
  return (
    <section
      className={`rounded-2xl border border-brand-forest/10 bg-white p-6 shadow-soft md:p-8 ${className}`}
    >
      <h2 className="font-display text-2xl tracking-tight text-brand-ink">{title}</h2>
      <ul className="mt-5 space-y-3">
        {points.map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-relaxed">
            <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-forest" aria-hidden />
            <span className="font-medium text-brand-ink">{point}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
