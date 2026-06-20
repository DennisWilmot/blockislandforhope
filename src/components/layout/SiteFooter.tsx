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

const partnerLinks: { href: string; label: string; shortName: string }[] = [
  {
    href: "https://www.harborchurchblockisland.net/",
    label: "Harbor Church Block Island",
    shortName: "Harbor Church",
  },
  {
    href: "https://web.facebook.com/ODDM2022/",
    label: "Open Door Deliverance Ministries",
    shortName: "Open Door Ministries",
  },
];

const socialLinks = [
  {
    href: "https://wa.me/18762510622",
    label: "WhatsApp",
    ariaLabel: "Message us on WhatsApp",
  },
  {
    href: "https://www.instagram.com/bihopeforjamaica",
    label: "Instagram",
    ariaLabel: "Follow us on Instagram",
  },
  {
    href: "https://x.com/BIhopeforJa",
    label: "X (Twitter)",
    ariaLabel: "Follow us on X",
  },
  {
    href: "https://www.facebook.com/people/BIHopeforJamaica/61590290863318/",
    label: "Facebook",
    ariaLabel: "Follow us on Facebook",
  },
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
            <div className="mt-5 flex flex-col gap-3">
              {partnerLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="group flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-medium text-white/80 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/15 text-xs font-bold text-white">
                    {item.shortName.charAt(0)}
                  </span>
                  <span className="leading-snug">{item.shortName}</span>
                  <svg className="ml-auto h-3.5 w-3.5 shrink-0 text-white/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white/70" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
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
                    aria-label={item.ariaLabel}
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
