"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export const navLinks = [
  { name: "Approach", href: "/approach" },
  { name: "Brands", href: "/brands" },
  { name: "Manifesto", href: "/manifesto" },
  { name: "Research", href: "/research" },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#02142a]/95 backdrop-blur-md border-b border-white/10 py-3 md:py-4"
            : "bg-[#02142a] py-4 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 cursor-pointer">
            <img
              src="/logo3.png"
              alt="Human Systems Group"
              className="h-6 md:h-9 w-auto object-contain transition-all duration-300"
            />
            <span className="font-bold text-sm md:text-xl uppercase text-[#dbb164] tracking-tight md:tracking-normal">
              Human Systems Group
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors ${
                    isActive
                      ? "text-[#C5A059]"
                      : "text-white/70 hover:text-[#C5A059]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <a
              href="/contact"
              className={`px-5 py-2.5 border text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${
                pathname === "/contact"
                  ? "bg-[#C5A059] text-white border-[#C5A059]"
                  : "text-[#C5A059] border-[#C5A059] hover:bg-[#C5A059] hover:text-white"
              }`}
            >
              Get in touch
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0A1128] flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-300">
          <button
            className="absolute top-6 right-6 text-white hover:text-[#C5A059] transition-colors"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          {/* Home Link (Mobile Only) */}
          <a
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className={`text-2xl font-light tracking-widest uppercase transition-colors ${
              pathname === "/"
                ? "text-[#C5A059]"
                : "text-white/90 hover:text-[#C5A059]"
            }`}
          >
            Home
          </a>

          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-light tracking-widest uppercase transition-colors ${
                  isActive
                    ? "text-[#C5A059]"
                    : "text-white/90 hover:text-[#C5A059]"
                }`}
              >
                {link.name}
              </a>
            );
          })}

          <a
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={`text-2xl font-bold uppercase transition-all ${
              pathname === "/contact"
                ? "text-[#C5A059] underline decoration-2 underline-offset-8"
                : "text-white/90 hover:text-[#C5A059]"
            }`}
          >
            Contact
          </a>
        </div>
      )}
    </>
  );
};
