import { HeroCarousel } from "@/components/home/HeroCarousel";
import { PageGrid } from "@/components/home/PageGrid";
import { WhereWeWorkMap } from "@/components/home/WhereWeWorkMap";
import { FadeInSection } from "@/components/ui/FadeInSection";

export default function HomePage() {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? process.env.MAPBOX_TOKEN ?? "";

  return (
    <>
      <HeroCarousel />
      <FadeInSection>
        <WhereWeWorkMap mapboxToken={mapboxToken} />
      </FadeInSection>
      <FadeInSection>
        <PageGrid />
      </FadeInSection>
    </>
  );
}
