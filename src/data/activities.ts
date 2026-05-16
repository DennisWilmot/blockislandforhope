export type UpcomingActivity = {
  id: string;
  title: string;
  timeframe: string;
  location: string;
  description: string;
  status: string;
};

export const upcomingActivities: UpcomingActivity[] = [
  {
    id: "activity-001",
    title: "Hurricane Melissa Relief Preparation",
    timeframe: "Upcoming",
    location: "Jamaica",
    description:
      "Coordinating supply needs, volunteer roles, and local partner communication for hurricane relief response.",
    status: "Planning",
  },
  {
    id: "activity-002",
    title: "Community Support Drive",
    timeframe: "Upcoming",
    location: "Block Island and Jamaica",
    description:
      "Collecting practical support items for families, schools, and community partners ahead of the next outreach window.",
    status: "Organizing",
  },
  {
    id: "activity-003",
    title: "Volunteer Coordination Session",
    timeframe: "Upcoming",
    location: "Virtual and in-person",
    description:
      "Preparing active volunteers for upcoming service needs, communication flow, and field support expectations.",
    status: "Scheduling",
  },
];
