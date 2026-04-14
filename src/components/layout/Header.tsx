"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Top", href: "/#hero" },
  { label: "Service", href: "/#service" },
  { label: "Profile", href: "/#profile" },
  { label: "Q&A", href: "/#qa" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/#hero"
          className="font-display italic text-gold text-2xl tracking-wide"
          onClick={closeMenu}
        >
          fumi
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-ink-muted text-sm tracking-wide hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/#contact"
          className="hidden md:inline-block font-sans text-gold text-sm tracking-wider border border-gold px-5 py-2.5 hover:bg-gold hover:text-white transition-all duration-300"
        >
          無料体験セッション
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative z-50 flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span
            className={`block w-6 h-px bg-ink transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center gap-10 transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="font-serif text-ink text-2xl hover:text-gold transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/#contact"
          onClick={closeMenu}
          className="font-sans text-gold text-base tracking-wider border border-gold px-8 py-3 hover:bg-gold hover:text-white transition-all duration-300 mt-4"
        >
          無料体験セッション
        </Link>
      </div>
    </header>
  );
}
