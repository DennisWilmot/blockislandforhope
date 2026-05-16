import Link from "next/link";

const footerLinks = [
  { href: "/our-story", label: "Our Story" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/impact", label: "Impact" },
  { href: "/missions", label: "Missions" },
  { href: "/take-action", label: "Take Action" },
  { href: "/updates", label: "Updates" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://linkedin.com", label: "LinkedIn" },
];

export function SiteFooter() {
  return (
    <footer className="bg-brand-ink px-4 pt-16 pb-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-3 md:gap-8">
        <div>
          <p className="font-display text-2xl leading-tight tracking-tight">Block Island Hope for Jamaica</p>
          <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-white/70">
            Rooted in compassion, we serve Jamaican communities through practical outreach, healthcare access, and
            nourishment.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Navigate</p>
          <ul className="mt-5 space-y-3">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/75 transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Connect</p>
          <ul className="mt-5 space-y-3">
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

      <div className="mx-auto mt-16 w-full max-w-6xl border-t border-white/8 pt-6">
        <p className="text-xs text-white/45">
          &copy; {new Date().getFullYear()} Block Island Hope for Jamaica. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
