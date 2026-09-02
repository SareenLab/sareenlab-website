import PageHeader from "@/components/layout/PageHeader";
import Tag from "@/components/ui/Tag";
import { pillars } from "@/lib/pillars";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bioengineered Tissues & Organoids",
  description: "Vascularized cardiac constructs, bioengineered pancreas systems, organ-on-chip, and next-generation alternatives to animal models.",
};

const pillar = pillars[2];

export default function BioengineeredTissuesPage() {
  return (
    <>
      <PageHeader
        eyebrow={`Platform ${pillar.number} · ${pillar.tagline}`}
        title={pillar.title}
        subtitle="We build multi-cellular tissue architectures that recapitulate native organ physiology — from vascularized cardiac constructs to bioengineered pancreas systems and organ-on-chip platforms."
      />
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="font-display font-semibold text-2xl text-text-primary tracking-tight mb-4">Overview</h2>
              <div className="h-px bg-grid mb-8" />
              <p className="text-text-muted leading-relaxed mb-4">
                Our bioengineering programs integrate iPSC-derived cell types with engineered biomaterial
                scaffolds and microfluidic systems to create physiologically relevant tissue models. These
                platforms serve dual purposes: disease modeling for drug discovery and next-generation
                alternatives to animal models (NAMs) for regulatory studies.
              </p>
              <p className="text-text-muted leading-relaxed">
                Key programs include vascularized cardiac tissue constructs for heart failure modeling,
                prevascularized organoids for transplantation research, a bioengineered pancreas platform
                for T1D, and NMJ-on-chip and spinal cord chip systems for neuromuscular disease.
              </p>
            </section>
            <section>
              <h2 className="font-display font-semibold text-2xl text-text-primary tracking-tight mb-4">Platforms</h2>
              <div className="h-px bg-grid mb-8" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { t: "Vascularized Cardiac Tissue", d: "3D cardiac constructs with integrated vasculature for contractility and perfusion studies." },
                  { t: "Bioengineered Pancreas", d: "iPSC-derived islet organoids co-cultured with vascular and stromal cell types in biomaterial scaffolds." },
                  { t: "NMJ-on-Chip", d: "Microfluidic systems modeling neuromuscular junction disease including ALS and SMA." },
                  { t: "Vascular Organoids", d: "Self-assembling vascular organoid systems for angiogenesis research and disease modeling." },
                  { t: "Intestinal Systems", d: "Patient iPSC-derived intestinal organoids for cystic fibrosis and GI disease modeling." },
                  { t: "Placental Organoids", d: "Models of placental development and preeclampsia for maternal-fetal medicine research." },
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
