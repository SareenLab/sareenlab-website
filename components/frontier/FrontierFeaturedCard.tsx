import Link from "next/link";
import { FrontierPost, postTypeColors, postTypeLabels } from "@/lib/frontier-types";

interface FrontierFeaturedCardProps {
  post: FrontierPost;
}

export default function FrontierFeaturedCard({ post }: FrontierFeaturedCardProps) {
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/frontier/${post.slug}`} className="group block">
      <article className="relative surface-card rounded-xl p-8 md:p-10 border border-white/10 hover:border-accent/30 transition-all duration-300 overflow-hidden">
        {/* Accent line top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

        {/* Featured label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">
            Featured
          </span>
          <span className="w-8 h-px bg-accent/40" />
          <span
            className={`text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border ${postTypeColors[post.type]}`}
          >
            {postTypeLabels[post.type]}
          </span>
        </div>

        <h2 className="font-display text-2xl md:text-3xl font-semibold text-text-primary mb-4 group-hover:text-accent transition-colors leading-snug">
          {post.title}
        </h2>

        <p className="text-text-muted leading-relaxed mb-6 max-w-2xl">{post.excerpt}</p>

        <div className="flex items-center gap-4 text-xs text-text-muted">
          <time dateTime={post.date}>{date}</time>
          <span className="w-1 h-1 rounded-full bg-text-muted/40" />
          <span>{post.readTime}</span>
          <span className="ml-auto text-accent text-sm font-medium group-hover:translate-x-1 transition-transform">
            Read →
          </span>
        </div>
      </article>
    </Link>
  );
}
