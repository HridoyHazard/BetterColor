"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tool", href: "#tool" },
  { label: "WCAG Guide", href: "#wcag" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#07090f]/90 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 group"
          aria-label="BetterColor home"
        >
          <Image
            src="/icon.png"
            alt="BetterColor Logo"
            width={36}
            height={36}
            className="rounded-lg object-cover"
          />
          <span
            className="font-display font-700 text-lg text-white tracking-tight"
            style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
          >
            BetterColor
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/HridoyHazard/BetterColor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-200"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            <AiFillGithub className="text-base" />
            <span>GitHub</span>
          </a>
          <a
            href="#tool"
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-[#f0b429] text-[#07090f] hover:bg-[#fcd34d] transition-all duration-200 shadow-lg shadow-[#f0b429]/20 hover:shadow-[#f0b429]/40"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Try the Tool
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-white/70 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-white/70 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-white/70 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mt-2 mb-4 rounded-xl bg-[#111827] border border-white/6 p-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center px-4 py-3 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              {link.label}
            </a>
          ))}
          <div className="sep my-2" />
          <a
            href="https://github.com/HridoyHazard/BetterColor"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            <AiFillGithub />
            View on GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
