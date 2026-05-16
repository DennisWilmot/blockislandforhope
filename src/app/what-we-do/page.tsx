import { ProgramRing } from "@/components/what-we-do/ProgramRing";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeInSection } from "@/components/ui/FadeInSection";

export default function WhatWeDoPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="Core areas of focus"
        description="Explore the four focus areas guiding how we serve communities across Jamaica."
        imageUrl="/images/optimized/DSC02874.jpg"
        imagePosition="center 28%"
      />
      <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <FadeInSection>
          <section className="mx-auto w-full max-w-6xl">
            <ProgramRing />
          </section>
        </FadeInSection>
      </div>
    </>
  );
}
