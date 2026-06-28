import Link from "next/link";

import { PageHeader } from "@/components/ui/PageHeader";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SUPPORT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_HREF } from "@/data/site-contact";

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
              <div className="rounded-xl bg-brand-cream/60 p-5 text-center">
                <p className="font-display text-2xl tracking-tight text-brand-ink">Donations coming soon</p>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                  Secure online giving is not live yet. If you want to donate, submit an inquiry through our contact form
                  or reach out via email or WhatsApp.
                </p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {tiers.map((tier) => (
                  <div
                    key={tier.amount}
                    className="rounded-2xl border border-brand-forest/15 bg-brand-cream/30 p-5 text-left"
                  >
                    <p className="font-display text-3xl tracking-tight text-brand-ink">{tier.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-brand-ink/65">{tier.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/contact#contact-form"
                  className="inline-flex items-center justify-center rounded-full bg-brand-forest px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-forest-dark hover:shadow-md"
                >
                  Submit an inquiry
                </Link>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="inline-flex items-center justify-center rounded-full border border-brand-forest/20 px-6 py-3.5 text-sm font-semibold text-brand-forest transition-colors duration-200 hover:bg-brand-forest/5"
                >
                  {SUPPORT_EMAIL}
                </a>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-brand-forest/20 px-6 py-3.5 text-sm font-semibold text-brand-forest transition-colors duration-200 hover:bg-brand-forest/5"
                >
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </div>

              <p className="mt-8 text-center text-xs uppercase tracking-[0.14em] text-brand-ink/45">
                We publish clear impact reporting so supporters can see where funds are used.
              </p>
            </div>
          </section>
        </FadeInSection>
      </div>
    </>
  );
}
