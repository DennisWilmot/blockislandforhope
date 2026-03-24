"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { programs } from "@/data/programs";

type RingNode = {
  id: string;
  label: string;
  shortLabel: string;
  top: string;
  left: string;
  color: string;
  borderColor: string;
};

const ringNodes: RingNode[] = [
  {
    id: "prog-1",
    label: "Community Outreach",
    shortLabel: "Outreach",
    top: "6%",
    left: "50%",
    color: "bg-brand-forest",
    borderColor: "border-brand-forest/40",
  },
  {
    id: "prog-2",
    label: "Mobile Medical Missions",
    shortLabel: "Medical",
    top: "50%",
    left: "94%",
    color: "bg-brand-navy",
    borderColor: "border-brand-navy/40",
  },
  {
    id: "prog-3",
    label: "Feeding & Nutrition Support",
    shortLabel: "Feeding",
    top: "94%",
    left: "50%",
    color: "bg-brand-amber",
    borderColor: "border-brand-amber/40",
  },
  {
    id: "prog-4",
    label: "Volunteer Capacity Building",
    shortLabel: "Volunteer",
    top: "50%",
    left: "6%",
    color: "bg-brand-coral",
    borderColor: "border-brand-coral/40",
  },
];

export function ProgramRing() {
  const [activeId, setActiveId] = useState(ringNodes[0].id);

  const activeProgram = useMemo(() => programs.find((program) => program.id === activeId) ?? programs[0], [activeId]);
  const activeNode = useMemo(() => ringNodes.find((node) => node.id === activeId) ?? ringNodes[0], [activeId]);

  return (
    <section className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
      <div className="relative mx-auto aspect-square w-full max-w-[560px]">
        <div className="absolute inset-[7%] rounded-full border-2 border-brand-forest/35" />
        <div className="absolute inset-[20%] rounded-full border border-brand-forest/25" />
        <div className="absolute inset-[33%] flex items-center justify-center rounded-full bg-brand-cream/90 text-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink/60">Core Focus</p>
            <p className="mt-2 font-display text-3xl text-brand-ink">What We Do</p>
          </div>
        </div>

        {ringNodes.map((node) => {
          const isActive = node.id === activeId;

          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setActiveId(node.id)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ink ${
                isActive ? "scale-110" : "hover:scale-105"
              }`}
              style={{ top: node.top, left: node.left }}
              aria-pressed={isActive}
              aria-label={`Show ${node.label}`}
            >
              <span
                className={`inline-flex h-11 min-w-[92px] items-center justify-center px-2 text-center text-[10px] font-semibold uppercase tracking-[0.08em] text-white shadow-soft sm:h-12 sm:min-w-[120px] sm:px-3 sm:text-xs ${node.color}`}
              >
                {node.shortLabel}
              </span>
            </button>
          );
        })}
      </div>

      <div className="min-h-[340px] border-l border-brand-forest/20 pl-5 sm:pl-7">
        <div key={activeProgram.id} className="program-pop">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-ink/60">Selected Focus</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-brand-ink">{activeProgram.name}</h2>
          <p className="mt-4 text-base text-brand-ink/85">{activeProgram.description}</p>
          <p className="mt-4 text-sm text-brand-ink/75">
            <span className="font-semibold text-brand-ink">Serves:</span> {activeProgram.beneficiaries}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {ringNodes.map((node) => (
            <button
              key={`chip-${node.id}`}
              type="button"
              onClick={() => setActiveId(node.id)}
              className={`inline-flex items-center gap-2 border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] transition-colors ${
                node.id === activeId
                  ? "border-brand-forest bg-brand-forest text-white"
                  : "border-brand-forest/20 text-brand-ink/80 hover:border-brand-forest/45"
              }`}
            >
              <span className={`h-2 w-2 ${node.color}`} aria-hidden="true" />
              {node.shortLabel}
            </button>
          ))}
        </div>

        <Link
          href={activeProgram.supportHref}
          className={`mt-7 inline-flex items-center border-b pb-1 text-sm font-semibold text-brand-forest transition-colors hover:text-brand-ink ${activeNode.borderColor}`}
        >
          Support this focus
        </Link>
      </div>
    </section>
  );
}
