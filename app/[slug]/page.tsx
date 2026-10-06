import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell, TitleBar } from "@/components/PageShell";
import { rootArticles, rootArticleMap } from "@/lib/allArticles";

// Root-level article pages — matches the live site's WordPress permalinks:
// /caution/, /material-data-sheet/, /pulse-surge-capability-of-resistors/,
// /application-design-notes-on-selection-of-wirewound-resistor/, etc.

export function generateStaticParams() {
  return rootArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = rootArticleMap[slug];
  return { title: a?.title ?? "Not Found" };
}

export default async function RootArticlePage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const article = rootArticleMap[slug];
  if (!article) notFound();

  return (
    <PageShell>
      <TitleBar>{article.title}</TitleBar>
      {article.body ? (
        <div className="htr-prose" dangerouslySetInnerHTML={{ __html: article.body }} />
      ) : (
        <div className="htr-prose">
          <p>{article.excerpt}</p>
        </div>
      )}
    </PageShell>
  );
}
