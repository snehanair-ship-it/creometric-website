"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/service/", label: "Services" },
  { href: "/case-studies/", label: "Case Studies" },
  { href: "/about-us/", label: "About Us" },
  { href: "/blog/", label: "Blog" },
  { href: "/academy/", label: "Academy" },
  { href: "/contact-us/", label: "Contact Us" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#0A0A0A] rounded-lg">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center">
            <span className="text-white font-sora font-bold text-lg">C</span>
          </div>
          <span className="text-white font-sora font-bold text-lg tracking-widest hidden sm:inline">CREOMETRIC</span>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#8A8A8A] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#0A0A0A] rounded-md px-1 py-0.5 font-inter font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-lg bg-gradient-to-b from-orange-500 to-orange-600 text-white px-6 py-2.5 text-sm font-semibold hover:from-orange-400 hover:to-orange-500 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#0A0A0A] font-inter"
          >
            Free Audit
          </Link>
        </nav>

        {/* Mobile: CTA + Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/#contact"
            className="rounded-lg bg-gradient-to-b from-orange-500 to-orange-600 text-white px-4 py-2 text-xs font-medium hover:from-orange-400 hover:to-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
          >
            Free Audit
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav aria-label="Mobile navigation" className="md:hidden border-t border-white/5 bg-[#0A0A0A] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-[#8A8A8A] hover:text-white transition-colors py-1 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-md px-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
