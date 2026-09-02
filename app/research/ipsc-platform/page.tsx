import PageHeader from "@/components/layout/PageHeader";
import Tag from "@/components/ui/Tag";
import { pillars } from "@/lib/pillars";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "iPSC Platform",
  description:
    "The foundational layer for everything we build — cGMP iPSC banking, directed differentiation, and the world&apos;s largest ALS patient iPSC biorepository.",
};

const pillar = pillars[0];

export default function IPSCPlatformPage() {
  return (
    <>
      <PageHeader
        eyebrow={`Platform ${pillar.number} · ${pillar.tagline}`}
        title={pillar.title}
        subtitle="Our iPSC core operates as the backbone of every therapeutic program — from cGMP-grade reprogramming and banking to scalable directed differentiation into clinically relevant cell types."
      />

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Overview */}
            <section>
              <h2 className="font-display font-semibold text-2xl text-text-primary tracking-tight mb-4">Overview</h2>
              <div className="h-px bg-grid mb-8" />
              <p className="text-text-muted leading-relaxed mb-4">
                The Sareen Lab iPSC Core has developed robust, scalable protocols for reprogramming
                somatic cells from blood, lymphoblastoid cell lines (LCLs), and cord blood into
                iPSCs under cGMP-compatible conditions. We operate ISO-certified cleanroom suites
                and maintain master cell banks for clinical applications.
              </p>
              <p className="text-text-muted leading-relaxed">
                Our differentiation portfolio spans endothelial cells, insulin-producing beta cells,
                motor neurons, cardiomyocytes, and vascular smooth muscle — each optimized for
                large-scale bioreactor production with validated release criteria.
              </p>
            </section>

            {/* Capabilities */}
            <section>
              <h2 className="font-display font-semibold text-2xl text-text-primary tracking-tight mb-4">Platform Capabilities</h2>
              <div className="h-px bg-grid mb-8" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "cGMP Reprogramming",
                    desc: "Blood, LCL, and cord blood reprogramming using non-integrating episomal vectors under current Good Manufacturing Practice conditions.",
                  },
                  {
                    title: "Master Cell Banking",
                    desc: "Characterization, karyotyping, STR fingerprinting, and cryopreservation of iPSC master and working cell banks for clinical use.",
                  },
                  {
                    title: "Directed Differentiation",
                    desc: "Validated protocols for endothelial, beta cell, motor neuron, cardiomyocyte, and smooth muscle lineages.",
                  },
                  {
                    title: "Bioreactor Scale-Up",
                    desc: "Suspension aggregate and microcarrier-based scale-up in stirred-tank bioreactors from 125 mL to 5L.",
                  },
                  {
                    title: "Disease Modeling",
                    desc: "Over 1,200 patient-derived iPSC lines including the world&apos;s largest ALS, SMA, and Marfan syndrome collections.",
                  },
                  {
                    title: "Quality & Release Testing",
                    desc: "Flow cytometry, qPCR, functional assays, and sterility testing for GMP-grade cell product release.",
                  },
                ].map((cap) => (
                  <div key={cap.title} className="surface-card rounded-sm p-5 group hover:border-accent/20 transition-colors duration-200">
                    <div className="flex gap-3 items-start mb-2">
                      <div className="w-px h-full bg-accent/30 self-stretch group-hover:bg-accent/60 transition-colors" />
                      <div>
                        <p className="font-medium text-text-primary text-sm">{cap.title}</p>
                        <p className="text-sm text-text-muted mt-1 leading-relaxed">{cap.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ALS Biorepository highlight */}
            <section>
              <h2 className="font-display font-semibold text-2xl text-text-primary tracking-tight mb-4">
                Answer ALS iPSC Biorepository
              </h2>
              <div className="h-px bg-grid mb-8" />
              <div className="surface-card rounded-sm p-8 border-l-2 border-accent">
                <p className="text-text-muted leading-relaxed mb-4">
                  As part of the Answer ALS consortium, we led the creation of the world&apos;s largest
                  ALS patient iPSC biorepository — with over 1,200 patient lines and more than
                  4,000 clonal iPSCs distributed to researchers globally.
                </p>
                <div className="grid grid-cols-3 gap-6 mt-6">
                  {[
                    { v: "1,200+", l: "Patient iPSC lines" },
                    { v: "4,000+", l: "Clonal iPSCs distributed" },
                    { v: "Global", l: "Distribution network" },
                  ].map((s) => (
                    <div key={s.l}>
                      <p className="font-display font-semibold text-2xl text-text-primary">{s.v}</p>
                      <p className="text-xs text-text-muted tracking-label uppercase mt-1">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="surface-card rounded-sm p-6">
              <h3 className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-4">
                Program Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {pillar.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>

            <div className="surface-card rounded-sm p-6">
              <h3 className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-4">
                Related Programs
              </h3>
              <div className="flex flex-col gap-3">
                {pillars.slice(1).map((p) => (
                  <Link
                    key={p.slug}
                    href={p.href}
                    className="flex items-center gap-3 text-sm text-text-muted hover:text-text-primary hover:text-accent transition-colors duration-200 group"
                  >
                    <span className="text-accent/50 text-xs font-mono">{p.number}</span>
                    <span className="group-hover:text-accent transition-colors">{p.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="surface-card rounded-sm p-6 border-accent/20">
              <h3 className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-3">
                Request Cell Lines
              </h3>
              <p className="text-sm text-text-muted mb-4">
                Academic and industry partners can request access to our iPSC disease modeling lines.
              </p>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 px-4 py-2 border border-accent text-accent text-xs font-medium tracking-label uppercase rounded-sm hover:bg-accent hover:text-bg-primary transition-all duration-200"
              >
                View resources
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
