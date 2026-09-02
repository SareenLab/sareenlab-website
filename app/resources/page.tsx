import PageHeader from "@/components/layout/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description: "Protocols, datasets, reagent requests, and software tools from the Sareen Lab.",
};

const resourceCategories = [
  {
    title: "Protocols",
    description: "Published and validated protocols for iPSC reprogramming, directed differentiation, and cGMP cell manufacturing.",
    items: ["Episomal iPSC reprogramming (blood/LCL)", "iEC differentiation (large-scale)", "Islet β-cell differentiation", "Motor neuron differentiation", "Bioreactor scale-up protocol"],
    status: "available",
  },
  {
    title: "Datasets",
    description: "Multi-omics datasets from the NeuroLINCS and Answer ALS programs, including RNAseq, proteomics, and epigenomics.",
    items: ["NeuroLINCS motor neuron transcriptomes", "Answer ALS iPSC RNA-seq (1,200+ lines)", "Endothelial cell surface proteome"],
    status: "available",
  },
  {
    title: "Reagent Requests",
    description: "Academic researchers can request access to disease-specific iPSC lines and validated antibody panels.",
    items: ["ALS patient iPSC lines", "T1D patient iPSC lines", "Marfan syndrome iPSC lines", "Validated differentiation antibody panels"],
    status: "request",
  },
  {
    title: "Software & Tools",
    description: "Computational tools developed in the lab for AI colony scoring, digital twin modeling, and multi-omics analysis.",
    items: ["AI colony morphology scorer", "Bioprocess digital twin models", "NeuroLINCS multi-omics pipeline"],
    status: "coming-soon",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Protocols, datasets & tools."
        subtitle="Open resources from the Sareen Lab to support the broader iPSC and cell therapy research community."
      />

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resourceCategories.map((cat) => (
            <div key={cat.title} className="surface-card rounded-sm p-7 flex flex-col gap-4 hover:border-accent/20 transition-all duration-200">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display font-semibold text-xl text-text-primary tracking-tight">{cat.title}</h3>
                <span
                  className={`text-xs font-semibold tracking-label uppercase px-2 py-0.5 rounded-sm border shrink-0 ${
                    cat.status === "available"
                      ? "text-accent bg-accent/10 border-accent/20"
                      : cat.status === "request"
                      ? "text-text-muted bg-white/[0.03] border-grid"
                      : "text-text-muted/50 bg-transparent border-grid/50"
                  }`}
                >
                  {cat.status === "available" ? "Available" : cat.status === "request" ? "On request" : "Coming soon"}
                </span>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">{cat.description}</p>
              <ul className="flex flex-col gap-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-text-muted">
                    <span className="w-1 h-1 rounded-full bg-accent/50 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              {cat.status !== "coming-soon" && (
                <button className="inline-flex items-center gap-2 px-4 py-2 border border-grid text-text-muted text-xs font-medium tracking-label uppercase rounded-sm hover:border-accent/40 hover:text-accent transition-all duration-200 w-fit mt-2">
                  {cat.status === "request" ? "Request access" : "Browse resources"}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
