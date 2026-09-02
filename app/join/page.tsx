import PageHeader from "@/components/layout/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Us",
  description: "Postdoc opportunities, PhD rotations, and general inquiries at the Sareen Lab.",
};

export default function JoinPage() {
  return (
    <>
      <PageHeader
        eyebrow="Join Us"
        title="Join the Sareen Lab."
        subtitle="We're building the infrastructure for the next generation of living medicines. If you want to work at the intersection of stem cell biology, clinical manufacturing, and AI-driven bioprocessing — we'd love to hear from you."
      />

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Open positions */}
        <section className="mb-20">
          <p className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-3">Open Positions</p>
          <h2 className="font-display font-semibold text-3xl text-text-primary tracking-tighter mb-8">
            Current opportunities.
          </h2>
          <div className="surface-card rounded-sm p-8 flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <div className="w-1 self-stretch bg-accent/30 rounded-full shrink-0" />
              <p className="text-text-muted leading-relaxed">
                There are no open positions at this time. When positions become available they will
                be posted on the Cedars-Sinai careers website. Check back here for updates or reach
                out directly if you are interested in scientist, managerial, postdoctoral or
                graduate opportunities.
              </p>
            </div>
            <a
              href="https://careers.cedars-sinai.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-accent text-accent text-xs font-semibold tracking-label uppercase rounded-sm hover:bg-accent hover:text-bg-primary transition-all duration-200 w-fit"
            >
              Cedars-Sinai careers website
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </section>

        {/* Postdoc / PhD / General inquiry */}
        <section className="border-t border-grid pt-16">
          <p className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-3">Inquiries</p>
          <h2 className="font-display font-semibold text-3xl text-text-primary tracking-tighter mb-4">
            Postdoctoral, graduate & general inquiries.
          </h2>
          <p className="text-text-muted mb-8 max-w-2xl leading-relaxed">
            We welcome inquiries from exceptional candidates at all career stages — postdoctoral
            fellows, PhD rotation students, and scientists interested in future opportunities.
            Send your CV and a brief cover letter to{" "}
            <a href="mailto:Dhruv.Sareen@cshs.org" className="text-accent hover:underline">
              Dhruv.Sareen@cshs.org
            </a>.
          </p>
          <div className="surface-card rounded-sm p-8">
            <p className="text-text-muted text-sm text-center">Application form with CV upload — coming soon.</p>
          </div>
        </section>
      </div>
    </>
  );
}
