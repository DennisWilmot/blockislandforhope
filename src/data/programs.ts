import { Program } from "@/types/content";

export const programs: Program[] = [
  {
    id: "prog-1",
    name: "Community Outreach Days",
    description:
      "Our outreach teams partner with local leaders to host practical support days focused on family care, youth development, and household resilience.",
    beneficiaries: "Families, youth, and seniors in vulnerable districts",
    supportHref: "/take-action",
  },
  {
    id: "prog-2",
    name: "Mobile Medical Missions",
    description:
      "Clinicians and volunteers bring basic healthcare services to communities where travel, cost, and access create barriers to regular medical care.",
    beneficiaries: "Rural residents, mothers, and elders with limited access",
    supportHref: "/take-action",
  },
  {
    id: "prog-3",
    name: "Feeding & Nutrition Support",
    description:
      "From emergency meal distribution to recurring food baskets, this programme helps households stay nourished while building practical nutrition knowledge.",
    beneficiaries: "Food-insecure households, children, and caregivers",
    supportHref: "/take-action",
  },
  {
    id: "prog-4",
    name: "Volunteer Capacity Building",
    description:
      "We train local volunteers in safeguarding, care coordination, and community logistics so support remains consistent beyond one-day events.",
    beneficiaries: "Church teams, youth groups, and local organisers",
    supportHref: "/take-action",
  },
];
