import Link from "next/link";
import { FrontierPost, postTypeColors, postTypeLabels } from "@/lib/frontier-types";

interface FrontierPostCardProps {
  post: FrontierPost;
}

export default function FrontierPostCard({ post }: FrontierPostCardProps) {
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link href={`/frontier/${post.slug}`} className="group block h-full">
      <article className="surface-card rounded-xl p-6 border border-white/10 hover:border-accent/30 transition-all duration-300 h-full flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <span
            className={`text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border ${postTypeColors[post.type]}`}
          >
            {postTypeLabels[post.type]}
          </span>
        </div>

        <h3 className="font-display text-lg font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors leading-snug flex-1">
          {post.title}
        </h3>

        <p className="text-sm text-text-muted leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>

        <div className="flex items-center gap-3 text-xs text-text-muted mt-auto pt-4 border-t border-white/5">
          <time dateTime={post.date}>{date}</time>
          <span className="w-1 h-1 rounded-full bg-text-muted/40" />
          <span>{post.readTime}</span>
        </div>
      </article>
    </Link>
  );
}
