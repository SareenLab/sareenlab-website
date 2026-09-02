import PageHeader from "@/components/layout/PageHeader";
import ContactForm from "@/components/partnerships/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Partner with the Cedars-Sinai Biomanufacturing Center. cGMP manufacturing, co-development, technology licensing, and venture incubation.",
};

const tracks = [
  {
    number: "01",
    title: "cGMP Contract Manufacturing",
    description:
      "End-to-end GMP cell manufacturing services — from process development and tech transfer to cGMP production and release testing. We currently manufacture 12+ cell types including iPSC lines, endothelial cells, NK cells, T cells, and neural progenitors.",
    highlights: ["Process development", "Tech transfer", "GMP production", "Release testing", "Regulatory support"],
  },
  {
    number: "02",
    title: "Co-Development & Sponsored Research",
    description:
      "Joint research programs with industry partners where we co-develop manufacturing processes, differentiation protocols, or disease modeling platforms. Sponsored research agreements with defined IP provisions and milestones.",
    highlights: ["Joint research programs", "Sponsored research agreements", "IP co-ownership options", "Milestone-based contracts"],
  },
  {
    number: "03",
    title: "Technology Licensing",
    description:
      "Access to our portfolio of 32+ patents across six domains: iPSC reprogramming, cell differentiation, organ-on-chip, bioengineered tissues, hypoimmune engineering, and autonomous biomanufacturing.",
    highlights: ["Exclusive licensing", "Non-exclusive licensing", "Field-of-use restrictions", "Sublicensing options"],
  },
  {
    number: "04",
    title: "Venture Incubation",
    description:
      "We incubate early-stage cell and gene therapy companies within our cGMP facility — providing lab space, manufacturing access, regulatory expertise, and investor connections to help translate novel therapies toward clinical use.",
    highlights: ["Lab space", "Manufacturing access", "Regulatory expertise", "Investor network"],
  },
];

const partners = [
  "Cell & Gene Therapy Companies",
  "IND-Stage Biotechs",
  "Academic Medical Centers",
  "Biotech Startups",
  "Pharma Partners",
  "Regenerative Medicine Investors",
  "Government Agencies",
  "Patient Advocacy Foundations",
];

export default function PartnershipsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partnerships"
        title="Where academic depth meets industrial scale."
        subtitle="The Cedars-Sinai Biomanufacturing Center operates as a PDMO — co-develop, co-invest, and co-translate with us."
      />

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Tracks */}
        <section className="mb-20">
          <p className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-3">
            Collaboration Tracks
          </p>
          <h2 className="font-display font-semibold text-3xl text-text-primary tracking-tighter mb-12">
            Four ways to work with us.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tracks.map((track) => (
              <div
                key={track.number}
                className="surface-card rounded-sm p-7 flex flex-col gap-5 hover:border-accent/20 transition-all duration-200 group"
              >
                <div className="flex items-start gap-4">
                  <span className="font-display text-3xl font-semibold text-text-primary/10 tracking-tighter group-hover:text-accent/15 transition-colors shrink-0">
                    {track.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-text-primary tracking-tight mb-3">
                    {track.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">{track.description}</p>
                </div>
                <ul className="flex flex-col gap-2">
                  {track.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-text-muted">
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Who we work with */}
        <section className="mb-20 border-t border-grid pt-16">
          <p className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-3">
            Who we work with
          </p>
          <h2 className="font-display font-semibold text-3xl text-text-primary tracking-tighter mb-8">
            Across the full translation spectrum.
          </h2>
          <div className="flex flex-wrap gap-3">
            {partners.map((p) => (
              <div
                key={p}
                className="px-4 py-2.5 surface-card rounded-sm text-sm text-text-muted border border-grid hover:border-accent/30 hover:text-text-primary transition-all duration-200"
              >
                {p}
              </div>
            ))}
          </div>
        </section>

        {/* Manufacturing portfolio */}
        <section className="mb-20 border-t border-grid pt-16">
          <p className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-3">
            GMP Portfolio
          </p>
          <h2 className="font-display font-semibold text-3xl text-text-primary tracking-tighter mb-8">
            Currently manufacturing at cGMP.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="surface-card rounded-sm p-6">
              <h3 className="text-xs font-semibold tracking-label uppercase text-accent mb-4">Active cGMP</h3>
              <ul className="flex flex-col gap-2">
                {[
                  "iPSC lines & master cell banks (8+ lines, 3+ partners)",
                  "Endothelial cells (iEC)",
                  "NK cells",
                  "T cells / CAR-T",
                  "Neural progenitors & neurons",
                  "RPE",
                  "Photoreceptors",
                  "Skeletal muscle cells",
                  "Microglia-like cells",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="surface-card rounded-sm p-6">
              <h3 className="text-xs font-semibold tracking-label uppercase text-accent/60 mb-4">In Development</h3>
              <ul className="flex flex-col gap-2">
                {[
                  "Pancreatic islets",
                  "Vascular smooth muscle",
                  "Cardiomyocytes",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-text-muted">
                    <span className="w-1.5 h-1.5 rounded-sm border border-accent/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact form */}
        <section className="border-t border-grid pt-16">
          <p className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-3">
            Get in touch
          </p>
          <h2 className="font-display font-semibold text-3xl text-text-primary tracking-tighter mb-3">
            Start a conversation.
          </h2>
          <p className="text-text-muted mb-10 max-w-xl">
            Tell us about your program and how we can help. We typically respond within 2 business days.
          </p>
          <div className="max-w-2xl">
            <ContactForm />
          </div>
        </section>
      </div>
    </>
  );
}
