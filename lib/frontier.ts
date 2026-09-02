import fs from "fs";
import path from "path";
import matter from "gray-matter";
export type { PostType, FrontierPost } from "./frontier-types";
export { postTypeLabels, postTypeColors } from "./frontier-types";
import type { PostType, FrontierPost } from "./frontier-types";

const CONTENT_DIR = path.join(process.cwd(), "content", "frontier");

export function getAllFrontierPosts(): FrontierPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title ?? "",
      date: data.date ?? "",
      type: (data.type ?? "op-ed") as PostType,
      excerpt: data.excerpt ?? "",
      readTime: data.readTime ?? "5 min read",
      featured: Boolean(data.featured),
      content,
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
