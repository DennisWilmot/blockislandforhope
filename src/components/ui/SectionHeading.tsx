type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-8 max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-forest">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-brand-ink md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base text-brand-ink/80">{description}</p> : null}
    </div>
  );
}
