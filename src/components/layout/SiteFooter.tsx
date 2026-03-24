import Link from "next/link";

const footerLinks = [
  { href: "/our-story", label: "Our Story" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/impact", label: "Impact" },
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
    <footer className="bg-[#124834] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">Block Island for Hope</p>
          <p className="mt-3 max-w-sm text-sm text-white/85">
            Rooted in compassion, we serve Jamaican communities through practical outreach, healthcare access, and
            nourishment.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Navigate</p>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/90 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Connect</p>
          <ul className="mt-4 space-y-2">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/90 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
