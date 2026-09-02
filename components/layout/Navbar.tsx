"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Research", href: "/research" },
  { label: "Team", href: "/team" },
  { label: "Publications", href: "/publications" },
  { label: "The Frontier", href: "/frontier" },
  { label: "Technology", href: "/technology" },
  { label: "News", href: "/news" },
  { label: "Join us", href: "/join" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/95 backdrop-blur-md border-b border-grid"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-0 font-display font-semibold text-xl tracking-tight">
          <span className="text-text-primary">SAREEN</span>
          <span className="text-accent">LAB</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-label uppercase transition-colors duration-200 ${
                pathname.startsWith(link.href)
                  ? "text-accent"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/partnerships"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-accent text-accent text-sm font-medium tracking-label uppercase hover:bg-accent hover:text-bg-primary transition-all duration-200"
          >
            Partner with us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-text-primary transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-text-primary transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-text-primary transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg-surface border-t border-grid px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium tracking-label uppercase ${
                pathname.startsWith(link.href) ? "text-accent" : "text-text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/partnerships"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-accent text-accent text-sm font-medium tracking-label uppercase w-fit"
          >
            Partner with us
          </Link>
        </div>
      )}
    </header>
  );
}
