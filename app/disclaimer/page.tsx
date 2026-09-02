import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer | Sareen Lab",
  description: "Views and opinions expressed on this site are solely those of Dhruv Sareen in his personal and academic capacity.",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-bg-primary pt-32 pb-24">
      <div className="max-w-2xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-text-muted hover:text-accent transition-colors mb-10"
        >
          ← Home
        </Link>

        <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
          Legal
        </p>
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-text-primary leading-snug mb-10">
          Disclaimer
        </h1>

        <div className="h-px bg-white/5 mb-10" />

        <div className="space-y-6 text-text-muted leading-relaxed">
          <p>
            The views, opinions, and commentary expressed on this website and in all published
            content — including but not limited to blog posts, op-eds, and social media linked
            from this site — are solely those of Dhruv Sareen in his personal and academic
            capacity.
          </p>
          <p>
            They do not represent, reflect, or constitute the official positions, policies, or
            endorsements of any institution, organization, employer, funding agency, or
            professional society with which he is or has been affiliated.
          </p>
          <p>
            All scientific content is intended for informational and educational purposes only
            and should not be construed as medical advice.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
          >
            ← Back to Sareen Lab
          </Link>
        </div>
      </div>
    </main>
  );
}
