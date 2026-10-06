import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, TitleBar } from "@/components/PageShell";
import { posts } from "@/lib/posts";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <PageShell>
      <TitleBar>Blog</TitleBar>
      <div className="space-y-6">
        {posts.map((p) => (
          <article key={p.slug} className="border-b border-gray-200 pb-6">
            <h2 className="mb-2 font-serif text-xl font-bold">
              <Link href={`/${p.slug}`} className="text-htr-blue hover:text-htr-blue-dark">
                {p.title}
              </Link>
            </h2>
            <p className="text-gray-700">{p.excerpt}</p>
            <Link
              href={`/${p.slug}`}
              className="mt-2 inline-block text-sm font-semibold text-htr-blue hover:underline"
            >
              Read More »
            </Link>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
