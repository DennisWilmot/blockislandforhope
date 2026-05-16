"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/impact", label: "Impact" },
  { href: "/missions", label: "Missions" },
  { href: "/take-action", label: "Take Action" },
  { href: "/updates", label: "Updates" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-forest/10 bg-brand-cream backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="/" className="group flex flex-col leading-tight">
          <span className="font-display text-lg text-brand-forest transition-colors group-hover:text-brand-forest-dark sm:text-xl">
            Block Island Hope for Jamaica
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-brand-ink/50">
            Charity Foundation
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-3 py-1.5 text-sm transition-all duration-200 ${
                  active
                    ? "font-semibold text-brand-forest"
                    : "text-brand-ink/70 hover:bg-brand-forest/5 hover:text-brand-forest"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-3.5 h-0.5 rounded-full bg-brand-forest" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/donate" className="hidden px-5 py-2 text-sm sm:inline-flex">
            Donate
          </Button>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-brand-ink transition-colors hover:bg-brand-forest/5 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">{mobileOpen ? "Close" : "Menu"}</span>
            <div className="flex w-5 flex-col items-center gap-[5px]">
              <span
                className={`block h-[1.5px] w-full rounded-full bg-current transition-all duration-300 ${
                  mobileOpen ? "translate-y-[6.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-full rounded-full bg-current transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-full rounded-full bg-current transition-all duration-300 ${
                  mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-x-0 top-[calc(var(--header-h,3.5rem)+1px)] bottom-0 z-40 overflow-y-auto bg-brand-cream/98 backdrop-blur-lg transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        style={{ "--header-h": "3.5rem" } as React.CSSProperties}
      >
        <nav className="mx-auto flex w-full max-w-md flex-col gap-1 px-6 py-8">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-xl px-4 py-3 text-base transition-colors ${
                  active
                    ? "bg-brand-forest/8 font-semibold text-brand-forest"
                    : "text-brand-ink/80 hover:bg-brand-forest/5 hover:text-brand-forest"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="mt-4 border-t border-brand-forest/10 pt-6">
            <Button href="/donate" className="w-full justify-center py-3 text-base">
              Donate
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
