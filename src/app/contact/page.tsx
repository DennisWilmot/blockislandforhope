import Link from "next/link";

import { PageHeader } from "@/components/ui/PageHeader";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIconLinks } from "@/components/ui/SocialIconLinks";
import {
  GOOGLE_FORM_EMBED_URL,
  SUPPORT_EMAIL,
  WHATSAPP_DISPLAY,
  WHATSAPP_HREF,
} from "@/data/site-contact";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's connect"
        description="Reach out to volunteer, partner, or ask about a specific outreach event."
        imageUrl="/images/optimized/DSC02811.jpg"
      />

      <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <section className="mx-auto w-full max-w-6xl">
          <FadeInSection>
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <aside className="space-y-6">
                <div className="rounded-2xl border border-brand-forest/10 bg-white p-6 shadow-soft md:p-8">
                  <h2 className="font-display text-2xl tracking-tight text-brand-ink">Contact details</h2>
                  <div className="mt-5 space-y-4 text-sm text-brand-ink/75">
                    <p>
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink/50">Email</span>
                      <a
                        href={`mailto:${SUPPORT_EMAIL}`}
                        className="mt-1 block transition-colors duration-200 hover:text-brand-forest"
                      >
                        {SUPPORT_EMAIL}
                      </a>
                    </p>
                    <p>
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink/50">WhatsApp</span>
                      <a
                        href={WHATSAPP_HREF}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 block transition-colors duration-200 hover:text-brand-forest"
                      >
                        {WHATSAPP_DISPLAY}
                      </a>
                    </p>
                    <p>
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink/50">Location</span>
                      <span className="mt-1 block">Jamaica</span>
                    </p>
                  </div>

                  <div className="mt-8 border-t border-brand-forest/10 pt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink/50">Follow us</p>
                    <SocialIconLinks className="mt-4 flex flex-wrap gap-3" />
                  </div>
                </div>

                <div className="rounded-2xl border border-brand-forest/10 bg-brand-cream/50 p-6 shadow-soft md:p-8">
                  <h2 className="font-display text-xl tracking-tight text-brand-ink">Donations coming soon</h2>
                  <p className="mt-3 text-sm leading-relaxed text-brand-ink/75">
                    Online giving is not live yet. If you want to donate, submit an inquiry through our contact form or
                    reach out via{" "}
                    <a href={`mailto:${SUPPORT_EMAIL}`} className="font-medium text-brand-forest hover:underline">
                      email
                    </a>{" "}
                    or{" "}
                    <a
                      href={WHATSAPP_HREF}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-brand-forest hover:underline"
                    >
                      WhatsApp
                    </a>
                    .
                  </p>
                  <Link
                    href="#contact-form"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-forest px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-forest-dark"
                  >
                    Submit an inquiry
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path
                        d="M3 8h10m0 0L9 4m4 4L9 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </aside>

              <div
                id="contact-form"
                className="scroll-mt-24 overflow-hidden rounded-2xl border border-brand-forest/10 bg-white shadow-soft"
              >
                <iframe
                  src={GOOGLE_FORM_EMBED_URL}
                  title="Contact form — Block Island Hope for Jamaica"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="w-full"
                >
                  Loading form…
                </iframe>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="mt-16">
              <SectionHeading title="Frequently asked questions" />
              <div className="space-y-3">
                <details className="group rounded-2xl border border-brand-forest/10 bg-white p-5 shadow-soft transition-shadow hover:shadow-glow">
                  <summary className="cursor-pointer text-sm font-semibold text-brand-ink transition-colors group-open:text-brand-forest">
                    How quickly does someone respond?
                  </summary>
                  <p className="mt-3 max-w-[55ch] text-sm leading-relaxed text-brand-ink/70">We aim to respond within 1-2 business days.</p>
                </details>
                <details className="group rounded-2xl border border-brand-forest/10 bg-white p-5 shadow-soft transition-shadow hover:shadow-glow">
                  <summary className="cursor-pointer text-sm font-semibold text-brand-ink transition-colors group-open:text-brand-forest">
                    Can organisations request a partnership meeting?
                  </summary>
                  <p className="mt-3 max-w-[55ch] text-sm leading-relaxed text-brand-ink/70">
                    Yes. Use the form above and choose a subject related to partnership or sponsorship.
                  </p>
                </details>
              </div>
            </div>
          </FadeInSection>
        </section>
      </div>
    </>
  );
}
