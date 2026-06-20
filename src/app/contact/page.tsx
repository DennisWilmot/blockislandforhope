import Link from "next/link";

import { PageHeader } from "@/components/ui/PageHeader";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfft2XiJgqMdXWzom_QijRRlsF3T_c3VyWVqRrHJFksO33G-Q/viewform?embedded=true";

const CONTACT_EMAIL = "blockislandhopeja@gmail.com";
const WHATSAPP_HREF = "https://wa.me/18762510622";

const socialLinks = [
  { href: "https://wa.me/18762510622", label: "WhatsApp" },
  { href: "https://www.instagram.com/bihopeforjamaica", label: "Instagram" },
  { href: "https://x.com/BIhopeforJa", label: "X (Twitter)" },
  { href: "https://www.facebook.com/people/BIHopeforJamaica/61590290863318/", label: "Facebook" },
];

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
              <aside className="space-y-8">
                <div className="rounded-2xl border border-brand-forest/10 bg-white p-6 shadow-soft md:p-8">
                  <h2 className="font-display text-2xl tracking-tight text-brand-ink">Contact details</h2>
                  <div className="mt-5 space-y-4 text-sm text-brand-ink/75">
                    <p>
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink/50">Email</span>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="mt-1 block transition-colors duration-200 hover:text-brand-forest"
                      >
                        {CONTACT_EMAIL}
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
                        +1 (876) 251-0622
                      </a>
                    </p>
                    <p>
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink/50">Location</span>
                      <span className="mt-1 block">Jamaica</span>
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-brand-forest/10 bg-white p-6 shadow-soft md:p-8">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink/50">Follow Us</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {socialLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-brand-forest/15 px-4 py-2 text-sm text-brand-forest transition-colors duration-200 hover:bg-brand-forest/5"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>

              <div className="rounded-2xl border border-brand-forest/10 bg-white shadow-soft overflow-hidden">
                <iframe
                  src={GOOGLE_FORM_URL}
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
