import Link from "next/link";

import { SectionHeading } from "@/components/ui/SectionHeading";

export default function ContactPage() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="Reach out to volunteer, partner, or ask about a specific outreach event."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <aside className="rounded-2xl border border-brand-forest/15 bg-white p-6 shadow-soft">
            <h2 className="font-display text-2xl text-brand-ink">Contact details</h2>
            <div className="mt-4 space-y-3 text-sm text-brand-ink/85">
              <p>
                <span className="font-semibold text-brand-ink">Email:</span> hello@blockislandforhope.org
              </p>
              <p>
                <span className="font-semibold text-brand-ink">Phone:</span> +1 (876) 555-0147
              </p>
              <p>
                <span className="font-semibold text-brand-ink">Office:</span> Kingston, Jamaica
              </p>
            </div>
            <div className="mt-5 space-y-2 text-sm">
              <Link href="https://instagram.com" target="_blank" rel="noreferrer" className="block text-brand-forest hover:underline">
                Instagram
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noreferrer" className="block text-brand-forest hover:underline">
                Facebook
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noreferrer" className="block text-brand-forest hover:underline">
                LinkedIn
              </Link>
            </div>
          </aside>

          <form className="rounded-2xl border border-brand-forest/15 bg-white p-6 shadow-soft">
            <h2 className="font-display text-2xl text-brand-ink">Send us a message</h2>
            <div className="mt-4 space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-brand-ink">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl border border-brand-forest/25 px-4 py-2.5 text-sm focus:border-brand-forest focus:outline-none focus:ring-2 focus:ring-brand-forest/25"
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
                  className="mt-1 w-full rounded-xl border border-brand-forest/25 px-4 py-2.5 text-sm focus:border-brand-forest focus:outline-none focus:ring-2 focus:ring-brand-forest/25"
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
                  className="mt-1 w-full rounded-xl border border-brand-forest/25 px-4 py-2.5 text-sm focus:border-brand-forest focus:outline-none focus:ring-2 focus:ring-brand-forest/25"
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
                  className="mt-1 w-full rounded-xl border border-brand-forest/25 px-4 py-2.5 text-sm focus:border-brand-forest focus:outline-none focus:ring-2 focus:ring-brand-forest/25"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-brand-forest px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#165a3f]"
              >
                Send message
              </button>
            </div>
          </form>
        </div>

        <div className="mt-6 rounded-2xl border border-brand-forest/15 bg-white p-6 shadow-soft">
          <h3 className="font-display text-2xl text-brand-ink">Frequently asked questions</h3>
          <div className="mt-4 space-y-3">
            <details className="rounded-xl border border-brand-forest/15 p-4">
              <summary className="cursor-pointer text-sm font-semibold text-brand-ink">
                How quickly does someone respond?
              </summary>
              <p className="mt-2 text-sm text-brand-ink/80">We aim to respond within 1-2 business days.</p>
            </details>
            <details className="rounded-xl border border-brand-forest/15 p-4">
              <summary className="cursor-pointer text-sm font-semibold text-brand-ink">
                Can organisations request a partnership meeting?
              </summary>
              <p className="mt-2 text-sm text-brand-ink/80">
                Yes. Use the form above and choose a subject related to partnership or sponsorship.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
