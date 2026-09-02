import type { Publication } from "@/lib/pubmed";

interface PublicationCardProps {
  pub: Publication;
}

function citationSuffix(pub: Publication): string {
  const parts: string[] = [];
  if (pub.volume) {
    parts.push(pub.issue ? `${pub.volume}(${pub.issue})` : pub.volume);
  }
  if (pub.pages) parts.push(pub.pages);
  return parts.join(":");
}

export default function PublicationCard({ pub }: PublicationCardProps) {
  const suffix = citationSuffix(pub);

  return (
    <article className="surface-card rounded-sm p-5 hover:border-accent/20 transition-all duration-200 group">
      <div className="flex flex-col gap-3">
        {/* Year + PMID */}
        <div className="flex items-start justify-between gap-4">
          <span className="text-xs font-semibold tracking-label uppercase text-accent">
            {pub.year}
          </span>
          <span className="text-xs text-text-muted shrink-0">PMID {pub.pmid}</span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-medium text-text-primary leading-snug group-hover:text-accent transition-colors duration-200">
          <a
            href={`https://pubmed.ncbi.nlm.nih.gov/${pub.pmid}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {pub.title}
          </a>
        </h3>

        {/* Authors */}
        <p className="text-xs text-text-muted leading-relaxed">{pub.authors}</p>

        {/* Journal · volume(issue):pages */}
        <div className="flex items-center justify-between gap-4 mt-1 flex-wrap">
          <p className="text-xs text-text-muted italic">
            {pub.journal}
            {suffix && (
              <span className="not-italic text-text-muted/60">
                {" · "}
                {suffix}
              </span>
            )}
          </p>
          <div className="flex items-center gap-3 shrink-0">
            {pub.doi && (
              <a
                href={`https://doi.org/${pub.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-text-muted hover:text-accent transition-colors"
              >
                DOI
              </a>
            )}
            <a
              href={`https://pubmed.ncbi.nlm.nih.gov/${pub.pmid}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-accent hover:text-accent-light transition-colors"
            >
              PubMed
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
