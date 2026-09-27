import { upcomingActivities } from "@/data/activities";
import { outreachEvents } from "@/data/events";
import { programs } from "@/data/programs";

export type SearchCategory = "Pages" | "Outreach" | "Updates" | "Programmes" | "People";

export type SearchDocument = {
  id: string;
  title: string;
  description: string;
  href: string;
  category: SearchCategory;
  eyebrow?: string;
  keywords?: string[];
};

const corePages: SearchDocument[] = [
  {
    id: "page-home",
    title: "Block Island Hope for Jamaica",
    description:
      "Practical hope through relief, education, health support, and community partnerships across Jamaica.",
    href: "/",
    category: "Pages",
    eyebrow: "Home",
    keywords: ["charity", "nonprofit", "mission", "Jamaica", "Block Island"],
  },
  {
    id: "page-story",
    title: "Our Story",
    description:
      "Learn how one call to serve grew into relationship-first outreach led with dignity, care, and local partnership.",
    href: "/our-story",
    category: "Pages",
    keywords: ["history", "mission", "leadership", "about"],
  },
  {
    id: "page-impact",
    title: "Our Impact",
    description: "See the communities, families, schools, and local partners reached through our work.",
    href: "/impact",
    category: "Pages",
    keywords: ["results", "outcomes", "families", "schools", "communities"],
  },
  {
    id: "page-work",
    title: "What We Do",
    description: "Explore outreach stories, home restoration, school support, relief work, and community partnerships.",
    href: "/what-we-do",
    category: "Pages",
    keywords: ["outreach", "projects", "field stories", "locations"],
  },
  {
    id: "page-updates",
    title: "Updates",
    description: "Find Christmas, New Year, and other upcoming community activities and field updates.",
    href: "/updates",
    category: "Pages",
    keywords: ["news", "activities", "events", "Christmas", "New Year"],
  },
  {
    id: "page-action",
    title: "Take Action",
    description: "Volunteer, partner, contribute supplies, or find another practical way to support the mission.",
    href: "/take-action",
    category: "Pages",
    keywords: ["volunteer", "partner", "help", "supplies", "get involved"],
  },
  {
    id: "page-donate",
    title: "Donate",
    description: "Support the work and learn how to arrange a contribution while online giving is being prepared.",
    href: "/donate",
    category: "Pages",
    keywords: ["give", "giving", "contribute", "support", "money"],
  },
  {
    id: "page-contact",
    title: "Contact Us",
    description: "Reach the team by email, WhatsApp, social media, or the contact form.",
    href: "/contact",
    category: "Pages",
    keywords: ["email", "WhatsApp", "phone", "message", "form"],
  },
];

const outreachDocuments: SearchDocument[] = outreachEvents.map((event) => ({
  id: `outreach-${event.id}`,
  title: event.title,
  description: event.summary,
  href: `/what-we-do/${event.slug}`,
  category: "Outreach",
  eyebrow: event.location,
  keywords: [event.type, event.location, event.dateLabel, ...event.impactPoints],
}));

const updateDocuments: SearchDocument[] = upcomingActivities.map((activity) => ({
  id: `update-${activity.id}`,
  title: activity.title,
  description: activity.description,
  href: `/updates#${activity.id}`,
  category: "Updates",
  eyebrow: `${activity.timeframe} · ${activity.location}`,
  keywords: [activity.label, activity.timeframe, activity.location, activity.actionLabel],
}));

const programmeDocuments: SearchDocument[] = programs.map((program) => ({
  id: `programme-${program.id}`,
  title: program.name,
  description: program.description,
  href: "/take-action",
  category: "Programmes",
  eyebrow: `For ${program.beneficiaries}`,
  keywords: [program.beneficiaries, "programme", "program", "support"],
}));

const peopleDocuments: SearchDocument[] = [
  {
    id: "person-martin-rosato",
    title: "Martin Rosato",
    description:
      "International Board Member leading fundraising, equipment procurement, and international partner relationships.",
    href: "/our-story#martin-rosato",
    category: "People",
    eyebrow: "International Board Member",
    keywords: ["leadership", "interview", "fundraising", "partners"],
  },
  {
    id: "person-peter-preiser",
    title: "Rev. Peter Preiser",
    description:
      "Board Member supporting fundraising, church partnerships, and mission coordination between Block Island and Jamaica.",
    href: "/our-story#peter-preiser",
    category: "People",
    eyebrow: "Board Member",
    keywords: ["Reverend", "leadership", "interview", "church", "mission"],
  },
  {
    id: "person-shannon",
    title: "Shannon",
    description: "Board Member profile update coming soon.",
    href: "/our-story#shannon",
    category: "People",
    eyebrow: "Board Member",
    keywords: ["leadership", "board member"],
  },
];

export const searchDocuments: SearchDocument[] = [
  ...corePages,
  ...outreachDocuments,
  ...updateDocuments,
  ...programmeDocuments,
  ...peopleDocuments,
];
