import PageHeader from "@/components/layout/PageHeader";
import StatBlock from "@/components/ui/StatBlock";
import Badge from "@/components/ui/Badge";
import GrantCard from "@/components/grants/GrantCard";
import { activeGrantsPI, activeGrantsCoI, pastGrants } from "@/lib/grants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet Dhruv Sareen, PhD — founding Executive Director of the Cedars-Sinai Biomanufacturing Center and leader of the Sareen Lab.",
};

const education = [
  {
    role: "Postdoctoral Fellow, Stem Cells & Neuroscience",
    institution: "University of Wisconsin–Madison",
    period: "2007–2010",
  },
  {
    role: "PhD, Biomolecular Chemistry",
    institution: "University of Wisconsin–Madison",
    period: "2002–2007",
  },
  {
    role: "BTech, Chemical Technology",
    institution: "University of Mumbai Institute of Chemical Technology",
    period: "1998–2002",
  },
];

const affiliations = [
  "NIIMBL Committee",
  "CIRM CGT Mfg. Network",
  "ISSCR Standards Task Force",
  "ISCT",
  "ARM",
  "Eyestem Research (Founder)",
  "LA Mission College Biotech Advisory Board",
];

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="Sareen Lab"
        subtitle="Led by Dr. Dhruv Sareen at the Cedars-Sinai Biomanufacturing Center — a 25,000 sq ft cGMP facility built for clinical-grade cell and gene therapy manufacturing."
      />

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* PI Profile */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Avatar + quick facts */}
            <div className="flex flex-col gap-6">
              {/* Avatar placeholder */}
              <div className="w-full aspect-square max-w-xs rounded-sm surface-card border border-grid flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 dot-grid-bg opacity-50" />
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-display font-semibold text-accent">DS</span>
                  </div>
                  <p className="text-xs text-text-muted">Photo coming soon</p>
                </div>
              </div>

              {/* Quick facts */}
              <div className="surface-card rounded-sm p-5 flex flex-col gap-3">
                <div>
                  <p className="text-xs text-text-muted tracking-label uppercase mb-1">Title</p>
                  <p className="text-sm text-text-primary">Chief Biomanufacturing Officer & Executive Director</p>
                </div>
                <div className="h-px bg-grid" />
                <div>
                  <p className="text-xs text-text-muted tracking-label uppercase mb-1">Institution</p>
                  <p className="text-sm text-text-primary">Cedars-Sinai Medical Center</p>
                  <p className="text-sm text-text-muted">Associate Professor</p>
                </div>
                <div className="h-px bg-grid" />
                <div>
                  <p className="text-xs text-text-muted tracking-label uppercase mb-1">Also</p>
                  <p className="text-sm text-text-primary">Director, iPSC Core</p>
                  <p className="text-sm text-text-muted">Board of Governors Regenerative Medicine Institute</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: "62+", l: "Publications" },
                  { v: "32+", l: "Patents" },
                  { v: "1,200+", l: "iPSC Lines" },
                  { v: "8+", l: "GMP iPSC Lines" },
                  { v: "25+", l: "Years in science" },
                ].map((s) => (
                  <div key={s.l} className="surface-card rounded-sm p-4">
                    <StatBlock value={s.v} label={s.l} />
                  </div>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <p className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-2">
                  Principal Investigator
                </p>
                <h2 className="font-display font-semibold text-4xl text-text-primary tracking-tight">
                  Dhruv Sareen, PhD
                </h2>
                <p className="mt-3 text-text-muted italic leading-relaxed border-l-2 border-accent pl-4">
                  Building next-generation cell and gene therapy platforms — accelerating clinical translation with iPSC technology at the core, at scale and at speed.
                </p>
              </div>

              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Dhruv Sareen is the founding Executive Director and Chief Biomanufacturing Officer
                  of the Cedars-Sinai Biomanufacturing Center — a 25,000 sq ft cGMP facility with
                  ISO-certified cleanroom suites, automated differentiation labs, and AI-integrated
                  bioprocessing infrastructure built to support human IND-enabling clinical trials.
                </p>
                <p>
                  His lab develops iPSC-derived cell therapy platforms across vascular, metabolic,
                  cardiac, and neurological disease, with a unified manufacturing backbone spanning
                  allogeneic and autologous programs. He led the Answer ALS consortium&apos;s iPSC
                  biorepository — the world&apos;s largest, with over 1,200 patient lines and more
                  than 4,000 clonal iPSCs distributed globally. The CBC operates as a Partnership
                  Development Manufacturing Organization (PDMO): an academic-industrial engine
                  providing cGMP manufacturing services, incubating early-stage companies, and
                  translating novel therapies toward IND.
                </p>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-4">Education</h3>
                <div className="flex flex-col gap-4">
                  {education.map((edu) => (
                    <div key={edu.role} className="flex gap-4 items-start">
                      <div className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                      <div>
                        <p className="text-sm text-text-primary">{edu.role}</p>
                        <p className="text-sm text-text-muted">{edu.institution} · {edu.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Affiliations */}
              <div>
                <h3 className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-4">Affiliations</h3>
                <div className="flex flex-wrap gap-2">
                  {affiliations.map((aff) => (
                    <Badge key={aff} variant="surface">{aff}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grants */}
        <section className="border-t border-grid pt-16 mb-16">
          <p className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-3">Grant Portfolio</p>
          <h2 className="font-display font-semibold text-3xl text-text-primary tracking-tighter mb-12">
            Selected grant funding.
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-semibold tracking-label uppercase text-text-muted mb-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Active — PI / Co-PI
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeGrantsPI.map((g, i) => (
                  <GrantCard key={i} grant={g} index={i} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-label uppercase text-text-muted mb-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                Active — Co-Investigator
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeGrantsCoI.map((g, i) => (
                  <GrantCard key={i} grant={g} index={activeGrantsPI.length + i} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-label uppercase text-text-muted mb-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-text-muted/30" />
                Selected Past Funding
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pastGrants.map((g, i) => (
                  <GrantCard key={i} grant={g} index={activeGrantsPI.length + activeGrantsCoI.length + i} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team grid placeholder */}
        <section className="border-t border-grid pt-16">
          <p className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-3">The Team</p>
          <h2 className="font-display font-semibold text-3xl text-text-primary tracking-tighter mb-4">
            Lab members.
          </h2>
          <p className="text-text-muted mb-10">Full profiles coming soon. Reach out at <a href="mailto:Dhruv.Sareen@cshs.org" className="text-accent hover:underline">Dhruv.Sareen@cshs.org</a> for lab inquiries.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { initials: "SC", name: "Staff Scientist", role: "iPSC Core Operations" },
              { initials: "RA", name: "Research Associate", role: "Cell Therapy Manufacturing" },
              { initials: "PD", name: "Postdoctoral Fellow", role: "Vascular Biology" },
              { initials: "PD", name: "Postdoctoral Fellow", role: "Islet Differentiation" },
              { initials: "GS", name: "Graduate Student", role: "Bioengineered Tissues" },
              { initials: "GS", name: "Graduate Student", role: "Neurological Disease" },
              { initials: "BS", name: "Bioinformatics Scientist", role: "Multi-omics & AI" },
              { initials: "PM", name: "Program Manager", role: "GMP Operations" },
            ].map((m, i) => (
              <div key={i} className="surface-card rounded-sm p-6 flex flex-col items-center gap-3 text-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <span className="text-xs font-semibold text-accent">{m.initials}</span>
                </div>
                <div>
                  <p className="text-sm text-text-primary">{m.name}</p>
                  <p className="text-xs text-text-muted mt-0.5">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
