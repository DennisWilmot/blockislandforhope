import { UpdatesFeed } from "@/components/updates/UpdatesFeed";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function UpdatesPage() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Updates"
          title="News and event recaps"
          description="Follow our outreach journey across Jamaica. Use filters to focus on the work you care about most."
        />
        <UpdatesFeed />
      </section>
    </div>
  );
}
