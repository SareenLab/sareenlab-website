import PageHeader from "@/components/layout/PageHeader";
import Tag from "@/components/ui/Tag";
import { pillars } from "@/lib/pillars";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cell & Gene Therapies",
  description:
    "Engineering hypoimmune, off-the-shelf cell therapies using CRISPR-based gene editing for vascular, metabolic, cardiac, and oncology indications.",
};

const pillar = pillars[1];

export default function CellGeneTherapiesPage() {
  return (
    <>
      <PageHeader
        eyebrow={`Platform ${pillar.number} · ${pillar.tagline}`}
        title={pillar.title}
        subtitle="We engineer hypoimmune, off-the-shelf cell therapies using CRISPR-based gene editing. Our pipeline spans vascular progenitors, insulin-secreting beta cells, and CAR-T/NK platforms."
      />

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="font-display font-semibold text-2xl text-text-primary tracking-tight mb-4">Overview</h2>
              <div className="h-px bg-grid mb-8" />
              <p className="text-text-muted leading-relaxed mb-4">
                Our cell and gene therapy programs are built on a hypoimmune iPSC backbone — enabling
                allogeneic, off-the-shelf therapies that evade immune rejection without requiring
                life-long immunosuppression. CRISPR editing is applied at the iPSC stage, ensuring
                uniform genetic modification across differentiated progeny.
              </p>
              <p className="text-text-muted leading-relaxed">
                Therapeutic programs span critical limb ischemia (vascular progenitors), Type 1
                Diabetes (insulin-secreting beta cells), heart failure (cardiomyocytes and vascular
                progenitors), and immuno-oncology (CAR-NK and CAR-T). All programs include IND-enabling
                CMC development at our cGMP facility.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl text-text-primary tracking-tight mb-4">Pipeline Programs</h2>
              <div className="h-px bg-grid mb-8" />
              <div className="flex flex-col gap-4">
                {[
                  { indication: "Critical Limb Ischemia", cell: "Hypoimmune iPSC-Endothelial + Vascular Progenitors", stage: "IND-enabling" },
                  { indication: "Type 1 Diabetes", cell: "Hypoimmune iPSC-β cells (insulin-secreting)", stage: "Process dev." },
                  { indication: "Cardiomyopathy", cell: "iPSC-Cardiomyocytes + Vascular progenitors", stage: "Preclinical" },
                  { indication: "Immuno-Oncology", cell: "iPSC-CAR-NK / CAR-T cells", stage: "Research" },
                ].map((p) => (
                  <div key={p.indication} className="surface-card rounded-sm p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1">
                      <p className="font-medium text-text-primary text-sm">{p.indication}</p>
                      <p className="text-xs text-text-muted mt-1">{p.cell}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-xs font-medium text-accent bg-accent/10 border border-accent/20 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {p.stage}
                    </span>
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
                  <Link key={p.slug} href={p.href} className="flex items-center gap-3 text-sm text-text-muted hover:text-accent transition-colors duration-200 group">
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
