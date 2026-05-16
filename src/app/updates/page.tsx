import { SectionHeading } from "@/components/ui/SectionHeading";
import { upcomingActivities } from "@/data/activities";

export default function UpdatesPage() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Updates"
          title="Upcoming activities"
          description="Follow what is being prepared next, from relief planning to volunteer coordination and community support."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcomingActivities.map((activity) => (
            <article
              key={activity.id}
              className="rounded-2xl border border-brand-forest/15 bg-white p-6 shadow-soft"
            >
              <span className="inline-flex rounded-full border border-brand-forest/40 bg-brand-forest/20 px-3 py-1 text-xs font-medium text-brand-forest">
                {activity.status}
              </span>
              <h3 className="mt-4 font-display text-2xl leading-tight text-brand-ink">{activity.title}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.12em] text-brand-ink/60">
                {activity.timeframe} - {activity.location}
              </p>
              <p className="mt-3 text-sm text-brand-ink/80">{activity.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
