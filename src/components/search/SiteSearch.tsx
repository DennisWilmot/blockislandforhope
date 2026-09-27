"use client";

import Link from "next/link";
import { Fragment, KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";

import { searchDocuments, type SearchCategory } from "@/data/search-index";
import { isApproximateMatch, searchSite } from "@/lib/search";

const categoryOrder: SearchCategory[] = ["Pages", "Outreach", "Updates", "Programmes", "People"];

function SearchIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function HighlightedText({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return text;

  const parts = text.split(/(\s+|(?=[,.;:!?—–()-])|(?<=[,.;:!?—–()-]))/g);
  return parts.map((part, index) => {
    const searchable = /[a-z0-9]/i.test(part);
    return searchable && isApproximateMatch(part, query) ? (
      <mark key={`${part}-${index}`} className="rounded-sm bg-brand-amber/15 px-0.5 text-inherit">
        {part}
      </mark>
    ) : (
      <Fragment key={`${part}-${index}`}>{part}</Fragment>
    );
  });
}

export function SiteSearch({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const results = useMemo(() => searchSite(searchDocuments, query), [query]);
  const groupedResults = useMemo(
    () =>
      categoryOrder
        .map((category) => ({ category, results: results.filter((result) => result.category === category) }))
        .filter((group) => group.results.length > 0),
    [results],
  );
  const resultPositions = useMemo(
    () =>
      new Map(
        groupedResults
          .flatMap((group) => group.results)
          .map((result, index) => [result.id, index]),
      ),
    [groupedResults],
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function updateQuery(value: string) {
    setQuery(value);
    setActiveIndex(0);
    const url = new URL(window.location.href);
    if (value.trim()) url.searchParams.set("q", value);
    else url.searchParams.delete("q");
    window.history.replaceState({}, "", url);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (!results.length) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      const next = (activeIndex + 1) % results.length;
      setActiveIndex(next);
      resultRefs.current[next]?.scrollIntoView({ block: "nearest" });
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      const next = (activeIndex - 1 + results.length) % results.length;
      setActiveIndex(next);
      resultRefs.current[next]?.scrollIntoView({ block: "nearest" });
    } else if (event.key === "Enter") {
      event.preventDefault();
      resultRefs.current[activeIndex]?.click();
    } else if (event.key === "Escape") {
      updateQuery("");
    }
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-forest">Search the site</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-brand-ink sm:text-5xl">What can we help you find?</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-ink/65">
          Search outreach locations, programmes, people, updates, and ways to help. Small spelling mistakes are okay.
        </p>
      </div>

      <div className="relative mt-8 max-w-4xl">
        <SearchIcon className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-forest" />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(event) => updateQuery(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Try ‘Petersfield’, ‘volunteer’, or ‘Chritsmas’"
          aria-label="Search the Block Island Hope for Jamaica website"
          aria-controls="site-search-results"
          aria-activedescendant={results.length ? `search-result-${activeIndex}` : undefined}
          className="h-16 w-full rounded-2xl border border-brand-forest/20 bg-white pl-14 pr-24 text-base text-brand-ink shadow-soft outline-none transition focus:border-brand-forest/55 focus:ring-4 focus:ring-brand-forest/10 sm:text-lg"
        />
        {query && (
          <button
            type="button"
            onClick={() => updateQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full px-3 py-2 text-sm font-semibold text-brand-ink/55 transition hover:bg-brand-forest/5 hover:text-brand-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-forest"
          >
            Clear
          </button>
        )}
      </div>

      <div id="site-search-results" className="mt-10" aria-live="polite">
        {!query.trim() ? (
          <div className="max-w-4xl border-l-2 border-brand-amber/45 py-2 pl-5">
            <p className="font-semibold text-brand-ink">A few ideas to get started</p>
            <p className="mt-1 text-sm leading-relaxed text-brand-ink/65">
              Look for an outreach community, a leadership interview, Christmas activities, volunteer opportunities, or donation information.
            </p>
          </div>
        ) : results.length === 0 ? (
          <div className="max-w-4xl border-t border-brand-forest/15 py-10">
            <p className="font-display text-2xl text-brand-ink">No close matches yet</p>
            <p className="mt-2 text-brand-ink/65">
              Try a shorter phrase, a location such as “Galloway,” or a topic such as “school,” “donate,” or “volunteer.”
            </p>
            <Link
              href="/contact#contact-form"
              className="mt-6 inline-flex rounded-full bg-brand-forest px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-forest-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-forest"
            >
              Ask us directly
            </Link>
          </div>
        ) : (
          <>
            <p className="mb-8 text-sm text-brand-ink/55">
              {results.length} {results.length === 1 ? "result" : "results"} for “{query}”
            </p>
            <div className="max-w-4xl space-y-10">
              {groupedResults.map((group) => (
                <section key={group.category} aria-labelledby={`search-group-${group.category}`}>
                  <div className="flex items-center gap-4">
                    <h2
                      id={`search-group-${group.category}`}
                      className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-brand-forest"
                    >
                      {group.category}
                    </h2>
                    <span className="h-px flex-1 bg-brand-forest/12" />
                  </div>
                  <div className="mt-3 divide-y divide-brand-forest/10 border-y border-brand-forest/10">
                    {group.results.map((result) => {
                      const currentIndex = resultPositions.get(result.id) ?? 0;
                      const active = currentIndex === activeIndex;
                      return (
                        <Link
                          key={result.id}
                          id={`search-result-${currentIndex}`}
                          ref={(node) => {
                            resultRefs.current[currentIndex] = node;
                          }}
                          href={result.href}
                          onMouseEnter={() => setActiveIndex(currentIndex)}
                          className={`group block px-3 py-5 transition sm:px-5 ${
                            active ? "bg-brand-forest/[0.055]" : "hover:bg-brand-forest/[0.035]"
                          }`}
                        >
                          {result.eyebrow && (
                            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-forest/70">
                              {result.eyebrow}
                            </p>
                          )}
                          <div className="mt-1 flex items-start justify-between gap-5">
                            <div>
                              <h3 className="font-display text-xl tracking-tight text-brand-ink sm:text-2xl">
                                <HighlightedText text={result.title} query={query} />
                              </h3>
                              <p className="mt-2 max-w-[70ch] text-sm leading-relaxed text-brand-ink/65 sm:text-base">
                                <HighlightedText text={result.description} query={query} />
                              </p>
                            </div>
                            <span className="mt-1 shrink-0 text-brand-forest transition-transform group-hover:translate-x-1" aria-hidden="true">
                              →
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
