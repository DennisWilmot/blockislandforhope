import { ProgramRing } from "@/components/what-we-do/ProgramRing";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function WhatWeDoPage() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="What We Do"
          title="Programmes in a living circle"
          description="Tap any focus on the ring to explore how each programme serves communities across Jamaica."
        />
        <ProgramRing />
      </section>
    </div>
  );
}
