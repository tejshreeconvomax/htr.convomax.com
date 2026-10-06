import Link from "next/link";
import type { Article } from "@/lib/articles";

// Every article's link is a root-level WordPress-style permalink (/<slug>).
export function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <div className="space-y-6">
      {articles.map((a) => (
        <article key={a.slug} className="border-b border-gray-200 pb-6">
          <h2 className="mb-2 font-serif text-xl font-bold">
            <Link href={`/${a.slug}`} className="text-htr-blue hover:text-htr-blue-dark">
              {a.title}
            </Link>
          </h2>
          <p className="text-gray-700">{a.excerpt}</p>
          <Link
            href={`/${a.slug}`}
            className="mt-2 inline-block text-sm font-semibold text-htr-blue hover:underline"
          >
            Read More »
          </Link>
        </article>
      ))}
    </div>
  );
}
