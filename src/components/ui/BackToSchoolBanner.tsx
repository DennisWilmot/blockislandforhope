"use client";

import Link from "next/link";
import { useState } from "react";

/** Shows a dismissable back-to-school outreach banner during July–August. */
export function BackToSchoolBanner() {
  const [dismissed, setDismissed] = useState(false);

  const now = new Date();
  const month = now.getMonth(); // 0-indexed: 6 = July, 7 = August
  const isActive = month === 6 || month === 7;

  if (!isActive || dismissed) return null;

  return (
    <div className="relative z-50 bg-brand-forest px-4 py-3 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
        <p className="text-sm font-medium leading-snug">
          <span className="mr-2 inline-block rounded-full bg-white/20 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide">
            Coming August
          </span>
          We're planning a back-to-school outreach for Jamaican students this August —
          <Link
            href="/take-action"
            className="ml-1.5 underline underline-offset-2 transition-opacity duration-200 hover:opacity-80"
          >
            get involved
          </Link>
        </p>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss banner"
          className="shrink-0 rounded-full p-1 text-white/70 transition-colors duration-200 hover:bg-white/15 hover:text-white"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
