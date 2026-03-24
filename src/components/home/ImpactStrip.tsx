import { impactStats } from "@/data/stats";

export function ImpactStrip() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-4 rounded-3xl bg-white p-6 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
        {impactStats.map((stat) => (
          <article key={stat.label} className="rounded-2xl border border-brand-forest/10 bg-brand-cream p-4">
            <p className="font-display text-4xl text-brand-forest md:text-5xl">{stat.value}</p>
            <p className="mt-2 text-sm font-medium text-brand-ink/80">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
