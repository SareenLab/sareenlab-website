import PageHeader from "@/components/layout/PageHeader";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "The mission, vision, and values of the Sareen Lab at Cedars-Sinai Medical Center.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Building the infrastructure for living medicines."
        subtitle="The Sareen Lab operates at the intersection of stem cell biology, bioengineering, and clinical translation."
      />

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <section>
              <h2 className="font-display font-semibold text-2xl text-text-primary tracking-tight mb-4">Mission</h2>
              <div className="h-px bg-grid mb-6" />
              <p className="text-text-muted leading-relaxed">
                To build the manufacturing infrastructure and cell therapy platforms needed to
                deliver the next generation of living medicines to patients — at clinical scale,
                with pharmaceutical-grade quality, and at accessible cost.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl text-text-primary tracking-tight mb-4">Vision</h2>
              <div className="h-px bg-grid mb-6" />
              <p className="text-text-muted leading-relaxed">
                A world where iPSC-derived cell therapies are as routinely manufactured and
                distributed as small molecule drugs — enabled by autonomous biomanufacturing,
                universal donor engineering, and deep integration of AI throughout the manufacturing lifecycle.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl text-text-primary tracking-tight mb-4">The PDMO Model</h2>
              <div className="h-px bg-grid mb-6" />
              <p className="text-text-muted leading-relaxed mb-4">
                The Cedars-Sinai Biomanufacturing Center operates as a Partnership Development
                Manufacturing Organization (PDMO) — a novel hybrid model that combines the depth
                of academic research with the operational rigor of a contract development and
                manufacturing organization (CDMO).
              </p>
              <p className="text-text-muted leading-relaxed">
                Unlike traditional CDMOs, the PDMO co-invests in early-stage programs, co-develops
                manufacturing processes alongside academic and industry partners, and provides
                IND-enabling support within an academic medical center setting.
              </p>
            </section>
          </div>

          <div className="space-y-8">
            <div className="surface-card rounded-sm p-8 border-l-2 border-accent">
              <p className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-4">Cedars-Sinai Context</p>
              <p className="text-text-muted text-sm leading-relaxed">
                The Sareen Lab is embedded within Cedars-Sinai Medical Center in West Hollywood, CA —
                one of the nation&apos;s top-ranked academic medical centers. This position gives us
                direct access to clinical collaborators, patient populations, regulatory affairs
                expertise, and a rich pipeline of translational research to advance into manufacturing.
              </p>
            </div>

            <div className="surface-card rounded-sm p-8">
              <p className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-4">Lab Values</p>
              <ul className="flex flex-col gap-4">
                {[
                  { v: "Rigor", d: "Every protocol, every batch, every data point meets the standard of clinical-grade quality." },
                  { v: "Translation", d: "Discovery has value only when it reaches the patient. We build for clinical use from day one." },
                  { v: "Collaboration", d: "The PDMO model is built on deep partnerships — we co-develop, co-invest, and co-translate." },
                  { v: "Automation", d: "We systematically eliminate human variability from cell manufacturing through robotics and AI." },
                ].map((item) => (
                  <li key={item.v} className="flex gap-3">
                    <span className="text-accent font-semibold text-sm w-24 shrink-0">{item.v}</span>
                    <span className="text-text-muted text-sm">{item.d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <Link
                href="/team"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 border border-accent text-accent text-sm font-medium tracking-label uppercase rounded-sm hover:bg-accent hover:text-bg-primary transition-all duration-200"
              >
                Meet the team
              </Link>
              <Link
                href="/partnerships"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 border border-grid text-text-muted text-sm font-medium tracking-label uppercase rounded-sm hover:border-accent/40 hover:text-text-primary transition-all duration-200"
              >
                Partner with us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
