"use client";

import { useState, useMemo } from "react";
import PublicationCard from "./PublicationCard";
import type { Publication } from "@/lib/pubmed";

interface PublicationListProps {
  publications: Publication[];
}

export default function PublicationList({ publications }: PublicationListProps) {
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [keyword, setKeyword] = useState("");

  const years = useMemo(() => {
    const ys = [...new Set(publications.map((p) => p.year).filter(Boolean))].sort(
      (a, b) => Number(b) - Number(a)
    );
    return ys;
  }, [publications]);

  const filtered = useMemo(() => {
    return publications.filter((p) => {
      const matchYear = yearFilter === "all" || p.year === yearFilter;
      const kw = keyword.toLowerCase();
      const matchKw =
        !kw ||
        p.title.toLowerCase().includes(kw) ||
        p.authors.toLowerCase().includes(kw) ||
        p.journal.toLowerCase().includes(kw);
      return matchYear && matchKw;
    });
  }, [publications, yearFilter, keyword]);

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by title, author, or journal..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="flex-1 bg-bg-surface border border-grid text-text-primary text-sm px-4 py-2.5 rounded-sm placeholder:text-text-muted/50 focus:outline-none focus:border-accent/40 transition-colors"
        />
        <select
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          className="bg-bg-surface border border-grid text-text-muted text-sm px-4 py-2.5 rounded-sm focus:outline-none focus:border-accent/40 transition-colors min-w-[120px]"
        >
          <option value="all">All years</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      {/* Count */}
      <p className="text-xs text-text-muted mb-6 tracking-label uppercase">
        {filtered.length} publication{filtered.length !== 1 ? "s" : ""}
        {yearFilter !== "all" ? ` in ${yearFilter}` : ""}
        {keyword ? ` matching "${keyword}"` : ""}
      </p>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-text-muted">
          No publications match your filters.
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map((pub) => (
            <PublicationCard key={pub.pmid} pub={pub} />
          ))}
        </div>
      )}
    </div>
  );
}
