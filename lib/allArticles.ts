// Combined slug map for every WordPress-permalink root article:
// FAQ sub-articles, Design Notes, and Blog posts all live at /<slug>, matching the live site.

import { faqArticles } from "./articles";
import { designNoteArticles } from "./articles";
import { posts } from "./posts";
import type { Article } from "./articles";
import type { Post } from "./posts";

export type RootArticle = (Article | Post) & { source: "faq" | "design-note" | "blog" };

const combined: RootArticle[] = [
  ...faqArticles.map((a) => ({ ...a, source: "faq" as const })),
  ...designNoteArticles.map((a) => ({ ...a, source: "design-note" as const })),
  ...posts.map((p) => ({ ...p, source: "blog" as const })),
];

export const rootArticles = combined;
export const rootArticleMap: Record<string, RootArticle> = Object.fromEntries(
  combined.map((a) => [a.slug, a])
);
