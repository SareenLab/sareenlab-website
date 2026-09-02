import PageHeader from "@/components/layout/PageHeader";
import PublicationList from "@/components/publications/PublicationList";
import { fetchPublications } from "@/lib/pubmed";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
  description: "62+ peer-reviewed publications from the Sareen Lab spanning iPSC biology, cell therapy, bioengineering, and autonomous manufacturing.",
};

export const revalidate = 86400; // 24 hours

export default async function PublicationsPage() {
  const publications = await fetchPublications();

  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title={`${publications.length > 0 ? `${publications.length}` : "62+"} peer-reviewed publications.`}
        subtitle="Research output spanning iPSC biology, cell and gene therapy, bioengineered tissues, and autonomous biomanufacturing."
      />

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* External links */}
        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href="https://www.ncbi.nlm.nih.gov/myncbi/dhruv.sareen.1/bibliography/public/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-grid text-text-muted text-xs font-medium tracking-label uppercase rounded-sm hover:border-accent/40 hover:text-text-primary transition-all duration-200"
          >
            My NCBI Bibliography
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href="https://scholar.google.com/scholar?q=Dhruv+Sareen+Cedars-Sinai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-grid text-text-muted text-xs font-medium tracking-label uppercase rounded-sm hover:border-accent/40 hover:text-text-primary transition-all duration-200"
          >
            Google Scholar
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {publications.length > 0 ? (
          <PublicationList publications={publications} />
        ) : (
          <div className="text-center py-16 surface-card rounded-sm">
            <p className="text-text-muted mb-2">Publications are loaded from PubMed in real time.</p>
            <p className="text-xs text-text-muted/50">
              If this page is blank, PubMed may be temporarily unavailable. Try refreshing.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
