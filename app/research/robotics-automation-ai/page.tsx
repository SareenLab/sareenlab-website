import PageHeader from "@/components/layout/PageHeader";
import Tag from "@/components/ui/Tag";
import { pillars } from "@/lib/pillars";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robotics, Automation & AI",
  description: "Closed-loop AI-integrated biomanufacturing infrastructure for reproducible, scalable cell therapy production.",
};

const pillar = pillars[3];

export default function RoboticsAIPage() {
  return (
    <>
      <PageHeader
        eyebrow={`Platform ${pillar.number} · ${pillar.tagline}`}
        title={pillar.title}
        subtitle="We're building closed-loop, AI-integrated biomanufacturing infrastructure where robotic systems handle iPSC reprogramming, differentiation, and QC — eliminating batch-to-batch variability."
      />
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="font-display font-semibold text-2xl text-text-primary tracking-tight mb-4">Overview</h2>
              <div className="h-px bg-grid mb-8" />
              <p className="text-text-muted leading-relaxed mb-4">
                Cell therapy manufacturing suffers from the same manual variability that plagued
                semiconductor fabrication before automation. We&apos;re solving this by building fully
                integrated robotic systems that execute iPSC reprogramming, colony picking, passaging,
                differentiation, and quality control — all within controlled cleanroom environments.
              </p>
              <p className="text-text-muted leading-relaxed">
                Machine learning models trained on our manufacturing datasets score iPSC colony
                morphology, predict deviation events, and optimize bioprocess parameters in real time.
                Digital twin infrastructure enables in silico process development and regulatory
                submission support.
              </p>
            </section>
            <section>
              <h2 className="font-display font-semibold text-2xl text-text-primary tracking-tight mb-4">Technology Stack</h2>
              <div className="h-px bg-grid mb-8" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { t: "Automated Reprogramming", d: "Robotic liquid handling and colony picking for standardized episomal reprogramming workflows." },
                  { t: "AI Colony Scoring", d: "Computer vision models for pluripotency and morphology scoring without manual review." },
                  { t: "Robotic Differentiation", d: "Automated media exchange, sampling, and feeding schedules for large-scale differentiation runs." },
                  { t: "Real-Time CQA Monitoring", d: "Inline sensors and automated sampling for critical quality attribute measurement." },
                  { t: "ML Process Optimization", d: "Bayesian optimization and reinforcement learning models for yield and purity maximization." },
                  { t: "Digital Twins", d: "Computational models of bioreactor processes for regulatory submissions and process scale-up." },
                ].map((item) => (
                  <div key={item.t} className="surface-card rounded-sm p-5 hover:border-accent/20 transition-colors duration-200">
                    <p className="font-medium text-text-primary text-sm mb-2">{item.t}</p>
                    <p className="text-sm text-text-muted leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <aside className="space-y-8">
            <div className="surface-card rounded-sm p-6">
              <h3 className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-4">Program Tags</h3>
              <div className="flex flex-wrap gap-2">
                {pillar.tags.map((tag) => (<Tag key={tag}>{tag}</Tag>))}
              </div>
            </div>
            <div className="surface-card rounded-sm p-6">
              <h3 className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-4">Related Programs</h3>
              <div className="flex flex-col gap-3">
                {pillars.filter((p) => p.slug !== pillar.slug).map((p) => (
                  <Link key={p.slug} href={p.href} className="flex items-center gap-3 text-sm text-text-muted hover:text-accent transition-colors duration-200">
                    <span className="text-accent/50 text-xs font-mono">{p.number}</span>
                    <span>{p.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
