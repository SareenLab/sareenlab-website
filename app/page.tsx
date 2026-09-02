import Link from "next/link";
import StatBlock from "@/components/ui/StatBlock";
import PillarCard from "@/components/research/PillarCard";
import DiseaseTag from "@/components/research/DiseaseTag";
import { pillars, diseaseAreas } from "@/lib/pillars";

const stats = [
  { value: "62+", label: "Publications" },
  { value: "32+", label: "Patents" },
  { value: "1,200+", label: "iPSC Lines" },
  { value: "8+", label: "GMP iPSC Lines" },
  { value: "25+", label: "Years in science" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center dot-grid-bg overflow-hidden">
        {/* Radial overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,170,0.04) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 100% 50%, rgba(0,212,170,0.03) 0%, transparent 60%)",
          }}
        />
        {/* Vertical accent line */}
        <div
          className="absolute top-0 bottom-0 w-px hidden xl:block"
          style={{
            left: "calc(8.33% + 24px)",
            background: "linear-gradient(to bottom, transparent, rgba(0,212,170,0.25) 30%, rgba(0,212,170,0.25) 70%, transparent)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
          {/* Eyebrow */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8 animate-fade-in">
            {["iPSC Platforms", "Cell & Gene Therapies", "Regenerative Medicine"].map(
              (item, i, arr) => (
                <span key={item} className="flex items-center gap-4">
                  <span className="text-xs font-semibold tracking-label-wide uppercase text-accent">
                    {item}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="w-1 h-1 rounded-full bg-text-muted/40" />
                  )}
                </span>
              )
            )}
          </div>

          {/* H1 */}
          <h1 className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] text-text-primary tracking-tighter leading-[0.95] max-w-5xl animate-fade-up">
            Engineering the{" "}
            <span className="text-accent">next generation</span>
            <br className="hidden md:block" />
            {" "}of living medicines
          </h1>

          {/* Subhead */}
          <p className="mt-8 text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed animate-fade-up-delay">
            Building next-generation cell and gene therapy platforms, gene-edited living medicines, and autonomous biomanufacturing systems that accelerate clinical translation — at scale and at speed — with iPSC technology at the core.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up-delay-2">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-bg-primary font-semibold text-sm tracking-label uppercase rounded-sm hover:bg-accent-light transition-all duration-200"
              style={{ boxShadow: "0 0 32px rgba(0,212,170,0.25)" }}
            >
              Explore our platforms
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-grid text-text-muted font-medium text-sm tracking-label uppercase rounded-sm hover:border-white/20 hover:text-text-primary transition-all duration-200"
            >
              View publications
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-20 pt-10 border-t border-grid grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <StatBlock key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
      </section>

      {/* ── FOUR PILLARS ─────────────────────────────────────── */}
      <section className="py-24 bg-bg-primary" id="research">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-3">
                Research Programs
              </p>
              <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary tracking-tighter max-w-xl">
                Four integrated platforms,{" "}
                <span className="text-text-muted">one manufacturing backbone.</span>
              </h2>
            </div>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-accent transition-colors duration-200 shrink-0"
            >
              All research programs
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <PillarCard key={pillar.slug} pillar={pillar} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── DISEASE FOCUS ────────────────────────────────────── */}
      <section className="py-24 bg-bg-surface border-t border-b border-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-3">
              Disease Focus
            </p>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-text-primary tracking-tighter">
              From discovery to clinic across six therapeutic areas.
            </h2>
          </div>

          <div className="mb-3">
            <span className="text-xs text-text-muted tracking-label uppercase font-medium">Active programs</span>
          </div>
          <div className="flex flex-wrap gap-3 mb-8">
            {diseaseAreas.active.map((d) => (
              <DiseaseTag key={d} label={d} active={true} />
            ))}
          </div>

          <div className="mb-3">
            <span className="text-xs text-text-muted tracking-label uppercase font-medium">Expanding areas</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {diseaseAreas.secondary.map((d) => (
              <DiseaseTag key={d} label={d} active={false} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MANUFACTURING CREDENTIALS ────────────────────────── */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-4">
                Biomanufacturing Center
              </p>
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-text-primary tracking-tighter leading-tight">
                A 25,000 sq ft cGMP facility built for clinical-grade cell therapy.
              </h2>
              <p className="mt-6 text-text-muted leading-relaxed">
                The Cedars-Sinai Biomanufacturing Center operates as a Partnership
                Development Manufacturing Organization (PDMO) — an academic-industrial
                engine providing cGMP manufacturing services, incubating early-stage
                companies, and translating novel therapies toward IND.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-grid pt-8">
                {[
                  { v: "12+", l: "Cell types in GMP" },
                  { v: "8+", l: "GMP iPSC Lines" },
                  { v: "3+", l: "Reprogramming partners" },
                  { v: "$25M+", l: "Industry contracts" },
                ].map((s) => (
                  <StatBlock key={s.l} value={s.v} label={s.l} />
                ))}
              </div>
              <div className="mt-10">
                <Link
                  href="/partnerships"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent font-medium text-sm tracking-label uppercase rounded-sm hover:bg-accent hover:text-bg-primary transition-all duration-200"
                >
                  Partner with us
                </Link>
              </div>
            </div>

            {/* Feature list */}
            <div className="flex flex-col gap-4">
              {[
                {
                  title: "ISO-Certified Cleanroom Suites",
                  desc: "Class 100/10,000 cleanrooms for GMP cell manufacturing with controlled access and environmental monitoring.",
                },
                {
                  title: "Automated Differentiation Labs",
                  desc: "Robotic platforms for scalable, reproducible iPSC reprogramming and directed differentiation at scale.",
                },
                {
                  title: "AI-Integrated Bioprocessing",
                  desc: "Real-time CQA monitoring, ML colony scoring, and closed-loop process optimization infrastructure.",
                },
                {
                  title: "IND-Enabling CMC Support",
                  desc: "Full regulatory support from process development to IND submission, including quality management systems.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-5 p-5 surface-card rounded-sm hover:border-accent/20 transition-all duration-200 group"
                >
                  <div className="w-px bg-accent/30 shrink-0 self-stretch group-hover:bg-accent/60 transition-colors duration-200" />
                  <div>
                    <p className="font-medium text-text-primary text-sm">{item.title}</p>
                    <p className="text-sm text-text-muted mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────── */}
      <section className="py-20 bg-bg-surface border-t border-grid relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(0,212,170,0.04) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-4">
            Ready to collaborate?
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-text-primary tracking-tighter max-w-2xl mx-auto">
            Where academic depth meets industrial scale.
          </h2>
          <p className="mt-4 text-text-muted max-w-xl mx-auto leading-relaxed">
            Co-develop, co-invest, and co-translate with the Cedars-Sinai Biomanufacturing Center.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/partnerships"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-bg-primary font-semibold text-sm tracking-label uppercase rounded-sm hover:bg-accent-light transition-all duration-200"
              style={{ boxShadow: "0 0 32px rgba(0,212,170,0.2)" }}
            >
              Explore partnerships
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-grid text-text-muted font-medium text-sm tracking-label uppercase rounded-sm hover:border-white/20 hover:text-text-primary transition-all duration-200"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
