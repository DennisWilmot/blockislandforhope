import type { Metadata } from "next";

import { SiteSearch } from "@/components/search/SiteSearch";

export const metadata: Metadata = {
  title: "Search",
  description: "Search outreach stories, programmes, updates, people, and ways to support Block Island Hope for Jamaica.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  const params = await searchParams;
  const initialQuery = typeof params.q === "string" ? params.q : "";

  return <SiteSearch initialQuery={initialQuery} />;
}
