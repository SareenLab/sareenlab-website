import { getAllFrontierPosts } from "@/lib/frontier";
import FrontierFeaturedCard from "@/components/frontier/FrontierFeaturedCard";
import FrontierGrid from "@/components/frontier/FrontierGrid";
import FrontierSubscribeForm from "@/components/frontier/FrontierSubscribeForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Frontier | Sareen Lab",
  description:
    "Thought leadership from the Sareen Lab — op-eds, field notes, dispatches, and reading lists on cell therapy, biomanufacturing, and the future of living medicines.",
};

export const revalidate = 3600;

export default function FrontierPage() {
  const allPosts = getAllFrontierPosts();
  const featuredPost = allPosts.find((p) => p.featured) ?? null;
  const gridPosts = allPosts.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-bg-primary pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
              The Frontier
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-text-primary leading-tight mb-4">
              Ideas at the edge
              <br />
              of what&apos;s possible
            </h1>
            <p className="text-text-muted max-w-xl leading-relaxed">
              Op-eds, field notes, dispatches, and reading lists from the Sareen Lab — on cell
              therapy, biomanufacturing, and the science of making living medicines real.
            </p>
            <p className="mt-3 leading-relaxed" style={{ fontSize: "11px", color: "rgba(232,237,245,0.25)" }}>
              Views expressed here are solely those of Dhruv Sareen in his personal and academic capacity and do not reflect the positions of any affiliated institution or organization.
            </p>
          </div>

          {/* Subscribe */}
          <div className="md:text-right shrink-0">
            <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-3">
              Stay current
            </p>
            <FrontierSubscribeForm />
          </div>
        </div>

        {/* Featured post */}
        {featuredPost && (
          <section className="mb-16">
            <FrontierFeaturedCard post={featuredPost} />
          </section>
        )}

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-text-muted">
            All posts
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        {/* Filterable grid */}
        <FrontierGrid posts={gridPosts} />
      </div>
    </main>
  );
}
