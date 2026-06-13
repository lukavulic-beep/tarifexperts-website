"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#vergleich", label: "Vergleich" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

function Logo({ dark }: { dark: boolean }) {
  return (
    <a href="/" className="flex items-center">
      <span
        className={`text-xl font-bold tracking-tight transition-colors ${
          dark ? "text-text" : "text-white"
        }`}
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        tarifexperts
        <span style={{ color: "#EE6C4D" }}>.</span>
      </span>
    </a>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Logo dark={isScrolled} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-text-secondary" : "text-white/85 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a href="#anfrage" className="btn-primary text-sm px-5 py-2.5">
              Jetzt vergleichen
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-text hover:bg-bg" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-text-secondary hover:text-primary font-medium py-2.5 px-3 rounded-lg hover:bg-bg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#anfrage"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary mt-2 text-center"
            >
              Jetzt vergleichen
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
