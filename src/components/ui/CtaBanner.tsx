import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="bg-brand-forest-dark text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Stand With Jamaica</p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Help us reach the next community with hope
        </h2>
        <p className="mt-5 max-w-[55ch] text-base leading-relaxed text-white/85">
          Every visit, volunteer hour, and partnership strengthens families in underserved communities across Jamaica.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/donate" variant="white" className="min-w-[130px]">
            Donate
          </Button>
          <Button href="/take-action" variant="ghost" className="min-w-[130px]">
            Volunteer
          </Button>
        </div>
      </div>
    </section>
  );
}
