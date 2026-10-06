import type { Metadata } from "next";
import { PageShell, TitleBar } from "@/components/PageShell";
import { ArticleList } from "@/components/ArticleList";
import { designNoteArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "HTR Resistor Design Notes | Expert Tips & Technical Insights",
};

export default function DesignNotesPage() {
  return (
    <PageShell>
      <TitleBar>Design Notes</TitleBar>
      <ArticleList articles={designNoteArticles} />
    </PageShell>
  );
}
