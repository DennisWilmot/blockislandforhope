"use client";

import { useEffect, useState } from "react";

import type { HeroSlide } from "@/data/hero-slides";

const slideDurationMs = 2000;

type Props = {
  slides: HeroSlide[];
  className?: string;
};

export function HeroSlideshow({ slides, className = "" }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;

    const advance = () => {
      if (cancelled) return;
      setActiveIndex((prev) => (prev + 1) % slides.length);
      window.setTimeout(advance, slideDurationMs);
    };

    const timer = window.setTimeout(advance, slideDurationMs);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [slides.length]);

  if (slides.length === 0) return null;

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`} aria-hidden>
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={slide.url}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "z-[2] opacity-100" : "z-[1] opacity-0"
            }`}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center ${isActive ? "animate-ken-burns" : ""}`}
              style={{
                backgroundImage: `url(${slide.url})`,
                backgroundPosition: slide.position ?? "center",
                animationDuration: `${slideDurationMs}ms`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
