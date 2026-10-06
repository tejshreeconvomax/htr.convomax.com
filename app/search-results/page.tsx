import type { Metadata } from "next";
import { PageShell, TitleBar } from "@/components/PageShell";
import { SearchResults } from "@/components/SearchResults";

export const metadata: Metadata = { title: "Search Results" };

export default async function SearchResultsPage({
  searchParams,
}: PageProps<"/search-results">) {
  const sp = await searchParams;
  const q = typeof sp.q === "string" ? sp.q : "";
  return (
    <PageShell>
      <TitleBar>Search Results</TitleBar>
      <SearchResults initialQuery={q} />
    </PageShell>
  );
}
