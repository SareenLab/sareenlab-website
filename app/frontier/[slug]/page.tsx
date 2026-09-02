import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllFrontierPosts, postTypeColors, postTypeLabels } from "@/lib/frontier";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllFrontierPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const posts = getAllFrontierPosts();
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | The Frontier — Sareen Lab`,
    description: post.excerpt,
  };
}

export const revalidate = 3600;

export default function FrontierPostPage({ params }: Props) {
  const posts = getAllFrontierPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) notFound();

  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Parse markdown-style content into simple HTML
  const paragraphs = post.content
    .split("\n\n")
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-bg-primary pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back */}
        <Link
          href="/frontier"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-text-muted hover:text-accent transition-colors mb-10"
        >
          ← The Frontier
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className={`text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border ${postTypeColors[post.type]}`}
          >
            {postTypeLabels[post.type]}
          </span>
          <span className="w-1 h-1 rounded-full bg-text-muted/40" />
          <time dateTime={post.date} className="text-xs text-text-muted">
            {date}
          </time>
          <span className="w-1 h-1 rounded-full bg-text-muted/40" />
          <span className="text-xs text-text-muted">{post.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-text-primary leading-snug mb-6">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-lg text-text-muted leading-relaxed mb-10 border-l-2 border-accent/40 pl-5">
          {post.excerpt}
        </p>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-10" />

        {/* Content */}
        <div className="prose-frontier">
          {paragraphs.map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="font-display text-xl font-semibold text-text-primary mt-10 mb-4"
                >
                  {block.replace(/^## /, "")}
                </h2>
              );
            }
            if (block.startsWith("# ")) {
              return (
                <h1
                  key={i}
                  className="font-display text-2xl font-semibold text-text-primary mt-10 mb-4"
                >
                  {block.replace(/^# /, "")}
                </h1>
              );
            }
            if (block === "---") {
              return <hr key={i} className="border-white/5 my-8" />;
            }
            // Inline bold: **text**
            const parts = block.split(/(\*\*[^*]+\*\*)/g);
            return (
              <p key={i} className="text-text-muted leading-relaxed mb-5">
                {parts.map((part, j) => {
                  if (part.startsWith("**") && part.endsWith("**")) {
                    return (
                      <strong key={j} className="text-text-primary font-semibold">
                        {part.slice(2, -2)}
                      </strong>
                    );
                  }
                  if (part.startsWith("*") && part.endsWith("*")) {
                    return <em key={j}>{part.slice(1, -1)}</em>;
                  }
                  return part;
                })}
              </p>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <p className="leading-relaxed mb-8" style={{ fontSize: "11px", color: "rgba(232,237,245,0.25)" }}>
            Views expressed in this post are solely those of Dhruv Sareen in his personal and academic capacity and do not reflect the positions of any affiliated institution or organization.{" "}
            <Link href="/disclaimer" className="underline underline-offset-2 hover:opacity-60 transition-opacity">
              Full disclaimer
            </Link>
          </p>
          <Link
            href="/frontier"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
          >
            ← Back to The Frontier
          </Link>
        </div>
      </div>
    </main>
  );
}
