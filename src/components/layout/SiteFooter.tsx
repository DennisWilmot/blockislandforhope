import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";

const emergencyResources = [
  {
    href: "https://www.odpem.org.jm/",
    label: "ODPEM — Disaster Preparedness",
  },
  {
    href: "https://www.odpem.org.jm/contact",
    label: "Report an Emergency",
  },
  {
    href: "https://www.jamaica.gov.jm/",
    label: "Government of Jamaica",
  },
];

/** Add affiliated churches and partner orgs as they are confirmed. */
const partnerLinks: { href: string; label: string }[] = [];

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://linkedin.com", label: "LinkedIn" },
];

export function SiteFooter() {
  return (
    <footer className="bg-brand-ink px-4 pt-12 pb-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-6 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Stand With Jamaica</p>
            <h2 className="mt-2 max-w-xl font-display text-2xl leading-tight tracking-tight sm:text-3xl">
              Help us reach the next community with hope
            </h2>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button href="/donate" variant="primary" className="min-w-[130px]">
              Donate
            </Button>
            <Button href="/take-action" variant="ghost" className="min-w-[130px]">
              Volunteer
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/logo.png"
              alt="Block Island Hope for Jamaica"
              width={140}
              height={140}
              className="h-24 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-white/70">
              Rooted in compassion, we serve Jamaican communities through practical outreach, healthcare access, and
              nourishment.
            </p>
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-white/45">Est. 2024</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Emergency Resources</p>
            <ul className="mt-5 space-y-3">
              {emergencyResources.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white/75 transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Partners & Affiliations</p>
            {partnerLinks.length > 0 ? (
              <ul className="mt-5 space-y-3">
                {partnerLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-white/75 transition-colors duration-200 hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-5 text-sm leading-relaxed text-white/60">
                Affiliated churches and partner organizations will be listed here as partnerships are confirmed.
              </p>
            )}
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Connect</p>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/75 transition-colors duration-200 hover:text-white"
                >
                  Contact
                </Link>
              </li>
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white/75 transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-white/45">
            &copy; {new Date().getFullYear()} Block Island Hope for Jamaica. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
