"use client";

import { useState } from "react";
import { FrontierPost, PostType } from "@/lib/frontier-types";
import FrontierFilterTabs from "./FrontierFilterTabs";
import FrontierPostCard from "./FrontierPostCard";
import FrontierDispatchCard from "./FrontierDispatchCard";

interface FrontierGridProps {
  posts: FrontierPost[];
}

export default function FrontierGrid({ posts }: FrontierGridProps) {
  const [activeFilter, setActiveFilter] = useState<PostType | "all">("all");

  const filtered =
    activeFilter === "all" ? posts : posts.filter((p) => p.type === activeFilter);

  return (
    <div>
      <FrontierFilterTabs active={activeFilter} onChange={setActiveFilter} />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.length === 0 && (
          <p className="text-text-muted col-span-2 py-12 text-center">
            No posts in this category yet.
          </p>
        )}
        {filtered.map((post) =>
          post.type === "field-dispatch" ? (
            <FrontierDispatchCard key={post.slug} post={post} />
          ) : (
            <FrontierPostCard key={post.slug} post={post} />
          )
        )}
      </div>
    </div>
  );
}
