import PageHeader from "@/components/layout/PageHeader";
import Badge from "@/components/ui/Badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description: "Lab news, grant awards, publications, and events from the Sareen Lab.",
};

// Placeholder posts — replace with MDX filesystem reads
const placeholderPosts = [
  {
    slug: "breakthrough-t1d-grant-2026",
    title: "Sareen Lab awarded $600K Breakthrough T1D grant for scalable iPSC-derived beta cell manufacturing",
    date: "2026-01-15",
    category: "Grant Award",
    excerpt: "The lab has been awarded a new Breakthrough T1D grant to advance scalable cGMP manufacturing of iPSC-derived insulin-producing cells.",
    author: "Sareen Lab",
  },
  {
    slug: "cirm-cgt-network-2023",
    title: "CIRM awards $7.96M to Cedars-Sinai CGT Manufacturing Network",
    date: "2023-08-01",
    category: "Grant Award",
    excerpt: "The Cedars-Sinai Biomanufacturing Center joins the CIRM Cell & Gene Therapy Manufacturing Network with a $7.96M infrastructure award.",
    author: "Sareen Lab",
  },
  {
    slug: "answer-als-biorepository",
    title: "Answer ALS biorepository reaches 1,200+ patient iPSC lines",
    date: "2024-03-10",
    category: "Lab News",
    excerpt: "The world's largest ALS patient iPSC biorepository, led by the Sareen Lab, has surpassed 1,200 banked patient lines.",
    author: "Sareen Lab",
  },
];

const categoryColors: Record<string, "accent" | "surface" | "outline"> = {
  "Grant Award": "accent",
  "Lab News": "surface",
  "Publication": "surface",
  "Press": "surface",
  "Event": "outline",
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="News"
        title="Lab news & updates."
        subtitle="Grant awards, publications, lab milestones, and events from the Sareen Lab at Cedars-Sinai."
      />

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholderPosts.map((post) => (
            <article
              key={post.slug}
              className="surface-card rounded-sm p-6 flex flex-col gap-4 hover:border-accent/20 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between gap-4">
                <Badge variant={categoryColors[post.category] ?? "surface"}>
                  {post.category}
                </Badge>
                <time className="text-xs text-text-muted">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
              <h3 className="font-display font-semibold text-base text-text-primary tracking-tight leading-snug group-hover:text-accent transition-colors duration-200">
                {post.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed flex-1">{post.excerpt}</p>
              <div className="text-xs text-text-muted">{post.author}</div>
            </article>
          ))}
        </div>

        <div className="mt-16 surface-card rounded-sm p-8 text-center">
          <p className="text-text-muted text-sm">
            Full MDX blog system is configured. Add posts to{" "}
            <code className="text-accent bg-accent/10 px-1.5 py-0.5 rounded-sm text-xs">/content/news/</code>
            {" "}to publish new articles.
          </p>
        </div>
      </div>
    </>
  );
}
