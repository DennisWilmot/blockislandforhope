export type UpcomingActivity = {
  id: string;
  label: string;
  title: string;
  timeframe: string;
  location: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imagePosition?: string;
  actionLabel: string;
};

export const upcomingActivities: UpcomingActivity[] = [
  {
    id: "christmas-community-care-drive",
    label: "Christmas outreach",
    title: "Christmas Community Care Drive",
    timeframe: "December",
    location: "Jamaica",
    description:
      "Bringing together food parcels, family essentials, and seasonal support for communities during Christmas.",
    imageUrl: "/images/optimized/DJI_0689.jpg",
    imageAlt: "Community members and outreach partners gathering in Jamaica",
    imagePosition: "center 48%",
    actionLabel: "Support the Christmas drive",
  },
  {
    id: "christmas-giving-collection",
    label: "Holiday giving",
    title: "Christmas Giving & Supply Collection",
    timeframe: "Nov–Dec",
    location: "Block Island & Jamaica",
    description:
      "Collecting practical gifts, household essentials, and outreach supplies for families and community partners.",
    imageUrl: "/images/optimized/DJI_0502.jpg",
    imageAlt: "Volunteers unloading outreach supplies from a van",
    imagePosition: "center 52%",
    actionLabel: "Contribute supplies",
  },
  {
    id: "new-year-outreach-kickoff",
    label: "New Year kickoff",
    title: "New Year Volunteer & Outreach Kickoff",
    timeframe: "Early January",
    location: "Jamaica & virtual",
    description:
      "Gathering volunteers and partners to align priorities, supplies, and field roles for the first outreach work of the new year.",
    imageUrl: "/images/optimized/DJI_0514.jpg",
    imageAlt: "Block Island Hope for Jamaica volunteers restoring a community home",
    imagePosition: "center 45%",
    actionLabel: "Join the kickoff",
  },
];
