import { Program } from "@/types/content";

export const programs: Program[] = [
  {
    id: "prog-1",
    name: "Humanitarian Relief & Recovery",
    description:
      "Rapid, practical support for families facing urgent needs, including food, supplies, and relief coordination.",
    beneficiaries: "Families and seniors facing urgent hardship",
    supportHref: "/take-action",
  },
  {
    id: "prog-2",
    name: "Youth & Educational Advancement",
    description:
      "School visits, youth encouragement, and learning support that help children feel seen, prepared, and valued.",
    beneficiaries: "Students, teachers, and youth groups",
    supportHref: "/take-action",
  },
  {
    id: "prog-3",
    name: "Health & Family Support Services",
    description:
      "Care-focused outreach that supports household wellness, basic health access, and family stability.",
    beneficiaries: "Parents, caregivers, children, and elders",
    supportHref: "/take-action",
  },
  {
    id: "prog-4",
    name: "Community Development & Economic Empowerment",
    description:
      "Local partnerships and volunteer coordination that strengthen communities beyond a single outreach day.",
    beneficiaries: "Community partners, volunteers, and local leaders",
    supportHref: "/take-action",
  },
];
