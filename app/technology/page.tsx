import PageHeader from "@/components/layout/PageHeader";
import StatBlock from "@/components/ui/StatBlock";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology & IP",
  description: "A portfolio of 32+ patents across six technology domains at the frontier of iPSC biology and autonomous manufacturing.",
};

const patentDomains = [
  {
    number: "01",
    title: "iPSC Reprogramming & Banking",
    description:
      "Blood, LCL, and cord blood reprogramming methods. cGMP suspension culture systems. Cell banking and characterization protocols for clinical-grade iPSC lines.",
    tags: ["Blood reprogramming", "LCL reprogramming", "Cord blood methods", "cGMP suspension", "Cell banking"],
  },
  {
    number: "02",
    title: "Cell Differentiation & Manufacturing",
    description:
      "Large-scale iEC manufacturing. iPSC-derived islet differentiation methods. Smooth muscle cell protocols. Islet co-culture systems for enhanced function.",
    tags: ["iEC scale-up", "Islet differentiation", "Smooth muscle", "Co-culture systems"],
  },
  {
    number: "03",
    title: "Organ-on-Chip & Microphysiological Systems",
    description:
      "NMJ-on-chip systems for neuromuscular disease. Spinal cord chip platforms. Intestinal microphysiological systems. Infection and pathogen modeling devices.",
    tags: ["NMJ-on-chip", "Spinal cord chip", "Intestinal systems", "Infection models"],
  },
  {
    number: "04",
    title: "Bioengineered Tissues & Organoids",
    description:
      "3D bioprinting of vascularized constructs. Prevascularized organoid systems. iEC-microgel platforms for transplantation. Scaffold-based tissue engineering.",
    tags: ["3D bioprinting", "Prevascularized organoids", "iEC microgels", "Biomaterial scaffolds"],
  },
  {
    number: "05",
    title: "Hypoimmune & Immune Evasion",
    description:
      "HIDE-iPSC platform for universal donor design. Off-the-shelf cell therapy engineering. Immune evasion strategies for allogeneic cell products without immunosuppression.",
    tags: ["HIDE-iPSC platform", "Universal donor", "Off-the-shelf CGT", "Immune evasion"],
  },
  {
    number: "06",
    title: "Autonomous Biomanufacturing",
    description:
      "Robotic systems for closed-loop iPSC manufacturing. AI-driven quality control platforms. Digital twin infrastructure for bioprocess modeling and regulatory support.",
    tags: ["Robotic systems", "Closed-loop manufacturing", "AI-driven QC", "Digital twins"],
  },
];

const licensingTracks = [
  {
    title: "Exclusive License",
    desc: "Full field-of-use exclusive licensing for commercial development. Ideal for companies building proprietary cell therapy products.",
  },
  {
    title: "Non-Exclusive License",
    desc: "Broad access to platform technologies for multiple commercial partners in non-competing fields.",
  },
  {
    title: "Co-Development",
    desc: "Joint development agreements with IP sharing provisions. Best for early-stage technology requiring additional development investment.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Technology & IP"
        title="A portfolio built at the frontier of iPSC biology and autonomous manufacturing."
        subtitle="32+ patents across six technology domains — from hypoimmune cell engineering to AI-driven biomanufacturing systems."
      />

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 pb-16 border-b border-grid">
          <StatBlock value="32+" label="Patents" />
          <StatBlock value="6" label="Technology domains" />
          <StatBlock value="2010–2025" label="Portfolio span" />
          <StatBlock value="3" label="Licensing tracks" />
        </div>

        {/* Patent domains */}
        <section className="mb-20">
          <p className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-3">
            Patent Portfolio
          </p>
          <h2 className="font-display font-semibold text-3xl text-text-primary tracking-tighter mb-12">
            Six technology domains.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {patentDomains.map((domain) => (
              <div
                key={domain.number}
                className="surface-card rounded-sm p-7 flex flex-col gap-4 hover:border-accent/20 transition-all duration-200 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-4xl font-semibold text-text-primary/10 tracking-tighter group-hover:text-accent/15 transition-colors duration-300">
                    {domain.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-text-primary tracking-tight mb-2">
                    {domain.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">{domain.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {domain.tags.map((tag) => (
                    <Badge key={tag} variant="surface">{tag}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Licensing tracks */}
        <section className="mb-20 border-t border-grid pt-16">
          <p className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-3">
            Licensing
          </p>
          <h2 className="font-display font-semibold text-3xl text-text-primary tracking-tighter mb-12">
            Three collaboration tracks.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {licensingTracks.map((track, i) => (
              <div key={track.title} className="surface-card rounded-sm p-7 flex flex-col gap-4">
                <span className="text-xs font-mono text-accent/50">{String(i + 1).padStart(2, "0")}</span>
                <div className="w-px h-8 bg-accent/30" />
                <h3 className="font-display font-semibold text-lg text-text-primary">{track.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{track.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="surface-card rounded-sm p-10 flex flex-col md:flex-row items-center justify-between gap-8 border-accent/20">
          <div>
            <p className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-2">
              Interested in licensing?
            </p>
            <h3 className="font-display font-semibold text-2xl text-text-primary tracking-tight">
              Let&apos;s discuss how our technology can advance your program.
            </h3>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              href="/partnerships"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg-primary font-semibold text-sm tracking-label uppercase rounded-sm hover:bg-accent-light transition-all duration-200"
            >
              Partner with us
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-grid text-text-muted font-medium text-sm tracking-label uppercase rounded-sm hover:border-accent/40 hover:text-text-primary transition-all duration-200"
            >
              Contact us
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
