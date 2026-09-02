"use client";

import { PostType, postTypeLabels } from "@/lib/frontier-types";

const ALL_TYPES: Array<PostType | "all"> = [
  "all",
  "op-ed",
  "field-notes",
  "field-dispatch",
  "worth-reading",
];

const labels: Record<PostType | "all", string> = {
  all: "All",
  ...postTypeLabels,
};

interface FrontierFilterTabsProps {
  active: PostType | "all";
  onChange: (type: PostType | "all") => void;
}

export default function FrontierFilterTabs({ active, onChange }: FrontierFilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {ALL_TYPES.map((type) => (
        <button
          key={type}
          onClick={() => onChange(type)}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-colors border ${
            active === type
              ? "bg-accent text-bg-primary border-accent"
              : "bg-transparent text-text-muted border-white/10 hover:border-white/25 hover:text-text-primary"
          }`}
        >
          {labels[type]}
        </button>
      ))}
    </div>
  );
}
