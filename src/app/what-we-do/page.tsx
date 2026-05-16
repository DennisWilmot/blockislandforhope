import { ProgramRing } from "@/components/what-we-do/ProgramRing";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function WhatWeDoPage() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="What We Do"
          title="Core areas of focus"
          description="Explore the four focus areas guiding how we serve communities across Jamaica."
        />
        <ProgramRing />
      </section>
    </div>
  );
}
