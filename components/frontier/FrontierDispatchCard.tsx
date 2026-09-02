import Link from "next/link";
import { FrontierPost } from "@/lib/frontier-types";

interface FrontierDispatchCardProps {
  post: FrontierPost;
}

export default function FrontierDispatchCard({ post }: FrontierDispatchCardProps) {
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link href={`/frontier/${post.slug}`} className="group block h-full">
      <article className="relative rounded-xl p-6 border border-amber-400/20 bg-amber-400/5 hover:border-amber-400/40 hover:bg-amber-400/8 transition-all duration-300 h-full flex flex-col overflow-hidden">
        {/* Left accent bar */}
        <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-amber-400/50 rounded-full" />

        <div className="flex items-center gap-2 mb-3 pl-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-400">
            Field Dispatch
          </span>
          <span className="w-4 h-px bg-amber-400/40" />
          <time dateTime={post.date} className="text-xs text-text-muted">
            {date}
          </time>
        </div>

        <h3 className="font-display text-base font-semibold text-text-primary mb-3 group-hover:text-amber-400 transition-colors leading-snug flex-1 pl-2">
          {post.title}
        </h3>

        <p className="text-sm text-text-muted leading-relaxed line-clamp-3 pl-2">{post.excerpt}</p>

        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-amber-400/10 pl-2">
          <span className="text-xs text-text-muted">{post.readTime}</span>
          <span className="ml-auto text-xs text-amber-400 font-medium group-hover:translate-x-0.5 transition-transform">
            Read →
          </span>
        </div>
      </article>
    </Link>
  );
}
