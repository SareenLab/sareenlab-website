import PageHeader from "@/components/layout/PageHeader";
import PillarCard from "@/components/research/PillarCard";
import DiseaseTag from "@/components/research/DiseaseTag";
import { pillars, diseaseAreas } from "@/lib/pillars";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Four integrated research platforms spanning iPSC biology, cell and gene therapies, bioengineered tissues, and autonomous biomanufacturing.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research Overview"
        title="Four platforms. One manufacturing backbone."
        subtitle="Every program we run shares the same iPSC manufacturing infrastructure — from initial reprogramming and quality testing to cGMP-grade scale-up and IND-enabling CMC."
      />

      {/* Pillars grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <PillarCard key={pillar.slug} pillar={pillar} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Disease focus */}
      <section className="py-20 bg-bg-surface border-t border-b border-grid">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-3">
            Disease Focus
          </p>
          <h2 className="font-display font-semibold text-3xl text-text-primary tracking-tighter mb-10">
            Active therapeutic programs.
          </h2>
          <div className="flex flex-wrap gap-3 mb-4">
            {diseaseAreas.active.map((d) => (
              <DiseaseTag key={d} label={d} active />
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {diseaseAreas.secondary.map((d) => (
              <DiseaseTag key={d} label={d} active={false} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
