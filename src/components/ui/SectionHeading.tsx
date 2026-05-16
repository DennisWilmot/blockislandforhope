type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-12 max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-forest">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl leading-[1.12] tracking-tight text-brand-ink md:text-4xl lg:text-[2.75rem]">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-brand-ink/65 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
