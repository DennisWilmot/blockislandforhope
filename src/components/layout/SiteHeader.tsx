"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/Button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/impact", label: "Impact" },
  { href: "/take-action", label: "Take Action" },
  { href: "/updates", label: "Updates" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-forest/10 bg-[#f8f5ef]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-xl text-brand-forest">
          Block Island for Hope
        </Link>
        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors duration-200 ${
                  active ? "font-semibold text-brand-forest" : "text-brand-ink/80 hover:text-brand-forest"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Button href="/donate" className="px-4 py-2 text-xs sm:text-sm">
          Donate
        </Button>
      </div>
      <div className="border-t border-brand-forest/10 px-4 pb-3 md:hidden">
        <nav className="mx-auto flex w-full max-w-6xl gap-4 overflow-x-auto pt-3">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-full px-3 py-1 text-xs transition-colors ${
                  active ? "bg-brand-forest text-white" : "bg-white text-brand-ink/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
