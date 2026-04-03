"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { outreachEvents } from "@/data/events";

const autoAdvanceMs = 4500;

export function HeroCarousel() {
  const slides = useMemo(
    () =>
      outreachEvents
        .filter((event) => event.type === "Community Outreach" && event.dateLabel.includes("Day"))
        .sort((a, b) => a.isoDate.localeCompare(b.isoDate)),
    [],
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, autoAdvanceMs);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const activeSlide = slides[activeIndex];

  function goToPrevious() {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }

  function goToNext() {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }

  return (
    <section className="relative isolate h-[calc(100svh-5.5rem)] min-h-[560px] overflow-hidden md:h-[calc(100svh-4.5rem)]">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
            aria-hidden={index !== activeIndex}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/35 via-brand-ink/55 to-brand-ink/80" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col justify-between px-4 py-10 text-white sm:px-6 md:py-14 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">
            {activeSlide.dateLabel}
          </span>
          <h1 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
            {activeSlide.title} <span className="text-white/80">({activeSlide.location})</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-white/90 md:text-lg">{activeSlide.summary}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={`/updates/${activeSlide.slug}`} variant="white">
              See the impact
            </Button>
            <Button href="#where-we-work" variant="ghost">
              View on map
            </Button>
          </div>
        </div>

        <div className="flex items-end justify-between gap-6">
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  activeIndex === index ? "w-8 bg-white" : "w-2.5 bg-white/45 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goToPrevious}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-xl text-white transition hover:bg-white/20"
              aria-label="Previous event slide"
            >
              {"<"}
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-xl text-white transition hover:bg-white/20"
              aria-label="Next event slide"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-5 right-6 hidden text-sm text-white/75 md:block">
        <p>
          {activeIndex + 1} / {slides.length}
        </p>
      </div>
      <Link
        href={`/updates/${activeSlide.slug}`}
        className="absolute inset-0 z-0"
        tabIndex={-1}
        aria-label={`Open recap for ${activeSlide.title}`}
      />
    </section>
  );
}
