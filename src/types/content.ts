export type EventType = "Community Outreach" | "Medical Mission" | "Feeding Programme";

export type OutreachEvent = {
  id: string;
  slug: string;
  title: string;
  location: string;
  dateLabel: string;
  isoDate: string;
  type: EventType;
  summary: string;
  recap: string[];
  impactPoints: string[];
  imageUrl: string;
  imagePosition?: string;
  mapPosition: {
    top: string;
    left: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
};

export type ImpactStat = {
  label: string;
  value: string;
};

export type Program = {
  id: string;
  name: string;
  description: string;
  beneficiaries: string;
  supportHref: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  context: string;
};
