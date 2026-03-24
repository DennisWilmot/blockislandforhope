"use client";

import { useState } from "react";

import { SectionHeading } from "@/components/ui/SectionHeading";

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
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-4xl rounded-3xl border border-brand-forest/15 bg-white p-8 shadow-soft md:p-10">
        <SectionHeading
          eyebrow="Donate"
          title="Your generosity keeps hope moving"
          description="Every contribution helps us continue practical outreach for families who need consistent support."
          align="center"
        />

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {tiers.map((tier) => (
            <button
              key={tier.amount}
              type="button"
              onClick={() => {
                setSelectedAmount(tier.amount);
                setCustomAmount("");
              }}
              className={`cursor-pointer rounded-2xl border p-4 text-left transition-colors ${
                selectedAmount === tier.amount && customAmount === ""
                  ? "border-brand-forest bg-brand-forest/5"
                  : "border-brand-forest/20 hover:border-brand-forest/45"
              }`}
            >
              <p className="font-display text-3xl text-brand-ink">{tier.title}</p>
              <p className="mt-2 text-sm text-brand-ink/75">{tier.description}</p>
            </button>
          ))}
        </div>

        <label className="mt-5 block text-sm font-medium text-brand-ink" htmlFor="custom-amount">
          Custom amount (USD)
        </label>
        <input
          id="custom-amount"
          type="number"
          min="1"
          placeholder="Enter custom amount"
          value={customAmount}
          onChange={(event) => setCustomAmount(event.target.value)}
          className="mt-2 w-full rounded-xl border border-brand-forest/25 px-4 py-3 text-sm text-brand-ink focus:border-brand-forest focus:outline-none focus:ring-2 focus:ring-brand-forest/25"
        />

        <button
          type="button"
          className="mt-6 w-full rounded-full bg-brand-forest px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#165a3f]"
        >
          Donate {customAmount ? `$${customAmount}` : `$${selectedAmount}`}
        </button>

        <p className="mt-4 rounded-xl bg-brand-cream p-3 text-center text-sm text-brand-ink/80">
          Payments coming soon. Your selected amount helps us estimate support demand while we finalize secure processing.
        </p>
        <p className="mt-3 text-center text-xs uppercase tracking-[0.12em] text-brand-ink/60">
          We publish clear impact reporting so supporters can see where funds are used.
        </p>
      </section>
    </div>
  );
}
