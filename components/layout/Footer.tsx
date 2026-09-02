import Link from "next/link";

const socialLinks = [
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=5ypvlEQAAAAJ&hl=en",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5h3.64v9.93A12.06 12.06 0 0 1 12 18a12.06 12.06 0 0 1 8.36 1.43V9.5H24L12 0z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dhruvsareen/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0000-0002-0898-9656",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.516.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 3.872-2.484 3.872-3.722 0-2.016-1.284-3.722-3.872-3.722h-2.297z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://x.com/DrSareen",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const footerLinks = {
  Research: [
    { label: "iPSC Platform", href: "/research/ipsc-platform" },
    { label: "Cell & Gene Therapies", href: "/research/cell-gene-therapies" },
    { label: "Bioengineered Tissues", href: "/research/bioengineered-tissues" },
    { label: "Robotics & AI", href: "/research/robotics-automation-ai" },
  ],
  Lab: [
    { label: "Team", href: "/team" },
    { label: "Publications", href: "/publications" },
    { label: "Technology & IP", href: "/technology" },
    { label: "News", href: "/news" },
  ],
  Connect: [
    { label: "Partnerships", href: "/partnerships" },
    { label: "Join Us", href: "/join" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-bg-surface border-t border-grid mt-24">
      {/* Accent top line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand col */}
          <div className="col-span-1">
            <Link href="/" className="font-display font-semibold text-2xl tracking-tight">
              <span className="text-text-primary">SAREEN</span>
              <span className="text-accent">LAB</span>
            </Link>
            <p className="mt-4 text-sm text-text-muted leading-relaxed max-w-xs">
              Accelerating clinical translation with iPSC technology — at scale and at speed.
            </p>
            <div className="mt-6 flex flex-col gap-1 text-xs text-text-muted">
              <span>8687 Melrose Ave Suite B227</span>
              <span>West Hollywood, CA 90069</span>
            </div>
            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-text-muted/60 hover:text-accent hover:border-accent/40 transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-4">
                {section}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-grid">
          <p className="mb-4 leading-relaxed" style={{ fontSize: "11px", color: "rgba(232,237,245,0.25)" }}>
            Views expressed on this site are solely those of Dhruv Sareen in his personal and academic capacity and do not reflect the positions of any affiliated institution or organization.
          </p>
          <div className="flex items-center gap-3">
            <p className="text-xs text-text-muted">
              © {new Date().getFullYear()} Sareen Lab. All rights reserved.
            </p>
            <span style={{ color: "rgba(232,237,245,0.25)", fontSize: "11px" }}>·</span>
            <Link href="/disclaimer" className="text-xs hover:text-accent transition-colors" style={{ color: "rgba(232,237,245,0.35)" }}>
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
