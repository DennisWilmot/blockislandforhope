import { impactStats } from "@/data/stats";

export function ImpactStrip() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {impactStats.map((stat) => (
          <article key={stat.label} className="rounded-2xl border border-brand-forest/10 bg-white p-6 shadow-soft">
            <p className="font-display text-4xl tracking-tight text-brand-forest md:text-5xl">{stat.value}</p>
            <p className="mt-2 text-sm text-brand-ink/65">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
