"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";

type NavItem =
  | { href: string; label: string; children?: never }
  | { label: string; href?: never; children: { href: string; label: string }[] };

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  {
    label: "About",
    children: [
      { href: "/our-story", label: "Our Story" },
      { href: "/impact", label: "Impact" },
    ],
  },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/updates", label: "Updates" },
  {
    label: "Get Involved",
    children: [
      { href: "/take-action", label: "Take Action" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

const allLinks = navItems.flatMap((item) =>
  item.children ? item.children : [item],
);

function DropdownMenu({
  item,
  pathname,
}: {
  item: Extract<NavItem, { children: { href: string; label: string }[] }>;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const isChildActive = item.children.some((c) => c.href === pathname);

  function enter() {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  }
  function leave() {
    timeout.current = setTimeout(() => setOpen(false), 150);
  }

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`relative flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-all duration-200 ${
          isChildActive
            ? "font-semibold text-brand-forest"
            : "text-brand-ink/70 hover:bg-brand-forest/5 hover:text-brand-forest"
        }`}
        aria-expanded={open}
      >
        {item.label}
        <svg
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        {isChildActive && (
          <span className="absolute inset-x-3 -bottom-3.5 h-0.5 rounded-full bg-brand-forest" />
        )}
      </button>

      <div
        className={`absolute left-1/2 top-full z-50 min-w-[180px] -translate-x-1/2 pt-2 transition-all duration-200 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-xl border border-brand-forest/10 bg-brand-cream shadow-lg">
          {item.children.map((child) => {
            const active = pathname === child.href;
            return (
              <Link
                key={child.href}
                href={child.href}
                className={`block px-4 py-2.5 text-sm transition-colors ${
                  active
                    ? "bg-brand-forest/8 font-semibold text-brand-forest"
                    : "text-brand-ink/75 hover:bg-brand-forest/5 hover:text-brand-forest"
                }`}
              >
                {child.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

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
        <Link href="/" className="group shrink-0 transition-opacity hover:opacity-90">
          <Image
            src="/logo.png"
            alt="Block Island Hope for Jamaica — Charity Foundation, Est. 2024"
            width={160}
            height={160}
            className="h-14 w-auto sm:h-18"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            if (item.children) {
              return <DropdownMenu key={item.label} item={item} pathname={pathname} />;
            }
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
            if (item.children) {
              return (
                <div key={item.label}>
                  <p className="px-4 pb-1 pt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-ink/40">
                    {item.label}
                  </p>
                  {item.children.map((child) => {
                    const active = pathname === child.href;
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className={`rounded-xl px-4 py-3 text-base transition-colors ${
                          active
                            ? "bg-brand-forest/8 font-semibold text-brand-forest"
                            : "text-brand-ink/80 hover:bg-brand-forest/5 hover:text-brand-forest"
                        }`}
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              );
            }
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
