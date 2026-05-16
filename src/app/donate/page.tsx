"use client";

import { useState } from "react";

import { PageHeader } from "@/components/ui/PageHeader";
import { FadeInSection } from "@/components/ui/FadeInSection";

const tiers = [
  {
    amount: 25,
    title: "$25",
    description: "Provides meal support for one family household.",
  },
  {
    amount: 50,
    title: "$50",
    description: "Covers school support kits for two students.",
  },
  {
    amount: 100,
    title: "$100",
    description: "Helps fund mobile outreach transport and essentials.",
  },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>("");

  return (
    <>
      <PageHeader
        eyebrow="Donate"
        title="Your generosity keeps hope moving"
        description="Every contribution helps us continue practical outreach for families who need consistent support."
      />

      <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <FadeInSection>
          <section className="mx-auto w-full max-w-3xl">
            <div className="rounded-2xl border border-brand-forest/10 bg-white p-8 shadow-soft md:p-10">
              <div className="grid gap-4 md:grid-cols-3">
                {tiers.map((tier) => (
                  <button
                    key={tier.amount}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(tier.amount);
                      setCustomAmount("");
                    }}
                    className={`cursor-pointer rounded-2xl border p-5 text-left transition-all duration-200 ${
                      selectedAmount === tier.amount && customAmount === ""
                        ? "border-brand-forest bg-brand-forest/5 shadow-soft"
                        : "border-brand-forest/15 hover:border-brand-forest/35 hover:shadow-soft"
                    }`}
                  >
                    <p className="font-display text-3xl tracking-tight text-brand-ink">{tier.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-brand-ink/65">{tier.description}</p>
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <label className="block text-sm font-medium text-brand-ink" htmlFor="custom-amount">
                  Custom amount (USD)
                </label>
                <input
                  id="custom-amount"
                  type="number"
                  min="1"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(event) => setCustomAmount(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-brand-forest/15 bg-brand-cream/40 px-4 py-3 text-sm transition-colors duration-200 placeholder:text-brand-ink/35 focus:border-brand-forest focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-forest/20"
                />
              </div>

              <button
                type="button"
                className="mt-8 w-full rounded-full bg-brand-forest px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-forest-dark hover:shadow-md active:scale-[0.99]"
              >
                Donate {customAmount ? `$${customAmount}` : `$${selectedAmount}`}
              </button>

              <p className="mt-6 rounded-xl bg-brand-cream/60 p-4 text-center text-sm leading-relaxed text-brand-ink/65">
                Payments coming soon. Your selected amount helps us estimate support demand while we finalize secure processing.
              </p>
              <p className="mt-3 text-center text-xs uppercase tracking-[0.14em] text-brand-ink/45">
                We publish clear impact reporting so supporters can see where funds are used.
              </p>
            </div>
          </section>
        </FadeInSection>
      </div>
    </>
  );
}
