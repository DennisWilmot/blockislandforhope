import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="relative mt-14 overflow-hidden border-y border-brand-forest/25 bg-gradient-to-r from-brand-forest to-[#165a3f] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.25),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.16),transparent_28%),linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.1)_45%,transparent_70%)]" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-7 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75">Stand With Jamaica</p>
        <h2 className="max-w-3xl font-display text-2xl leading-tight sm:text-3xl md:text-4xl">
          Help us reach the next community with hope
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-white/90 md:text-base">
          Every visit, volunteer hour, and partnership strengthens families in underserved communities across Jamaica.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button href="/donate" variant="white" className="min-w-[120px]">
            Donate
          </Button>
          <Button href="/take-action" variant="ghost" className="min-w-[120px]">
            Volunteer
          </Button>
        </div>
      </div>
    </section>
  );
}
