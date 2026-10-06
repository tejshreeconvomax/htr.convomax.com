import type { Metadata } from "next";
import { PageShell, TitleBar } from "@/components/PageShell";
import { ArticleList } from "@/components/ArticleList";
import { faqArticles } from "@/lib/articles";

export const metadata: Metadata = { title: "FAQs" };

export default function FaqsPage() {
  return (
    <PageShell>
      <TitleBar>FAQs</TitleBar>
      <ArticleList articles={faqArticles} />
    </PageShell>
  );
}
