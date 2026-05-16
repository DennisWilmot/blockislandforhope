import Link from "next/link";

import { PageHeader } from "@/components/ui/PageHeader";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
                      <span className="mt-1 block">hello@blockislandforhope.org</span>
                    </p>
                    <p>
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink/50">Phone</span>
                      <span className="mt-1 block">+1 (876) 555-0147</span>
                    </p>
                    <p>
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink/50">Office</span>
                      <span className="mt-1 block">Kingston, Jamaica</span>
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-brand-forest/10 bg-white p-6 shadow-soft md:p-8">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink/50">Follow Us</h3>
                  <div className="mt-4 flex gap-3">
                    {[
                      { href: "https://instagram.com", label: "Instagram" },
                      { href: "https://facebook.com", label: "Facebook" },
                      { href: "https://linkedin.com", label: "LinkedIn" },
                    ].map((link) => (
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

              <form className="rounded-2xl border border-brand-forest/10 bg-white p-6 shadow-soft md:p-8">
                <h2 className="font-display text-2xl tracking-tight text-brand-ink">Send us a message</h2>
                <div className="mt-6 space-y-5">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-brand-ink">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-1.5 w-full rounded-xl border border-brand-forest/15 bg-brand-cream/40 px-4 py-3 text-sm transition-colors duration-200 placeholder:text-brand-ink/35 focus:border-brand-forest focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-forest/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-brand-ink">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1.5 w-full rounded-xl border border-brand-forest/15 bg-brand-cream/40 px-4 py-3 text-sm transition-colors duration-200 placeholder:text-brand-ink/35 focus:border-brand-forest focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-forest/20"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="text-sm font-medium text-brand-ink">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="mt-1.5 w-full rounded-xl border border-brand-forest/15 bg-brand-cream/40 px-4 py-3 text-sm transition-colors duration-200 placeholder:text-brand-ink/35 focus:border-brand-forest focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-forest/20"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-brand-ink">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="mt-1.5 w-full rounded-xl border border-brand-forest/15 bg-brand-cream/40 px-4 py-3 text-sm transition-colors duration-200 placeholder:text-brand-ink/35 focus:border-brand-forest focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-forest/20"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-brand-forest px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-forest-dark hover:shadow-md active:scale-[0.99]"
                  >
                    Send message
                  </button>
                </div>
              </form>
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
