import PageHeader from "@/components/layout/PageHeader";
import ContactForm from "@/components/partnerships/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the Sareen Lab at Cedars-Sinai Medical Center.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch."
        subtitle="Reach out for collaborations, media inquiries, or general questions about our research programs."
      />

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div className="surface-card rounded-sm p-6 flex flex-col gap-4">
              <h3 className="text-xs font-semibold tracking-label-wide uppercase text-accent">Address</h3>
              <div className="text-sm text-text-muted leading-relaxed">
                <p className="font-medium text-text-primary">Cedars-Sinai Biomanufacturing Center</p>
                <p>8687 Melrose Ave Suite B227</p>
                <p>West Hollywood, CA 90069</p>
              </div>
            </div>

            <div className="surface-card rounded-sm p-6 flex flex-col gap-4">
              <h3 className="text-xs font-semibold tracking-label-wide uppercase text-accent">Phone</h3>
              <a href="tel:+13102488556" className="text-sm text-text-primary hover:text-accent transition-colors">
                (310) 248-8556
              </a>
            </div>

            <div className="surface-card rounded-sm p-6 flex flex-col gap-4">
              <h3 className="text-xs font-semibold tracking-label-wide uppercase text-accent">Email</h3>
              <a
                href="mailto:Dhruv.Sareen@cshs.org"
                className="text-sm text-text-primary hover:text-accent transition-colors"
              >
                Dhruv.Sareen@cshs.org
              </a>
            </div>

            <div className="surface-card rounded-sm p-6 flex flex-col gap-4">
              <h3 className="text-xs font-semibold tracking-label-wide uppercase text-accent">Online</h3>
              <div className="flex flex-col gap-2">
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=Sareen+D%5BAuthor%5D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted hover:text-accent transition-colors"
                >
                  PubMed ↗
                </a>
                <a
                  href="https://scholar.google.com/citations?user=5ypvlEQAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted hover:text-accent transition-colors"
                >
                  Google Scholar ↗
                </a>
                <a
                  href="https://orcid.org/0000-0002-0898-9656"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted hover:text-accent transition-colors"
                >
                  ORCID ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/dhruvsareen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted hover:text-accent transition-colors"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://x.com/DrSareen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted hover:text-accent transition-colors"
                >
                  X / Twitter ↗
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-3">
              Send a message
            </p>
            <h2 className="font-display font-semibold text-2xl text-text-primary tracking-tight mb-8">
              We typically respond within 2 business days.
            </h2>
            <ContactForm />
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16 surface-card rounded-sm overflow-hidden" style={{ height: "320px" }}>
          <div className="w-full h-full flex items-center justify-center dot-grid-bg">
            <div className="text-center">
              <p className="text-text-muted text-sm mb-2">Google Maps embed</p>
              <p className="text-xs text-text-muted/50">8687 Melrose Ave Suite B227, West Hollywood CA 90069</p>
              <a
                href="https://maps.google.com/?q=8687+Melrose+Ave+Suite+B227+West+Hollywood+CA+90069"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-xs text-accent hover:underline"
              >
                Open in Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
