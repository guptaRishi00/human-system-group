"use client";

import React from "react";

export const Footer = () => {
  // Navigation links array for cleaner mapping
  const footerLinks = [
    { name: "Approach", href: "/approach" },
    { name: "Brands", href: "/brands" },
    { name: "Manifesto", href: "/manifesto" },
    { name: "Research", href: "/research" },
  ];

  return (
    <footer className="bg-[#02142a] py-12 md:py-16 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12 mb-12">
          {/* Brand Identity Section - Wrapped in Home Link */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <a
              href="/"
              className="flex items-center gap-2 md:gap-3 group transition-opacity hover:opacity-80"
            >
              <img
                src="/logo3.png"
                alt="Human Systems Group"
                className="h-8 md:h-12 w-auto object-contain"
              />
              <span className="font-bold text-base md:text-md uppercase tracking-tight text-[#dbb164]">
                Human Systems Group
              </span>
            </a>
          </div>

          {/* Navigation Links - Centered on mobile, Right-aligned on desktop */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/70 hover:text-[#C5A059] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Utility Row */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex gap-6 md:gap-8 text-[9px] md:text-[10px] uppercase tracking-widest font-medium text-slate-500">
            <a href="#" className="hover:text-white transition-colors">
              Legal Notice
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>

          <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-medium text-slate-500 select-none">
            © {new Date().getFullYear()} Human Systems Group — All Rights
            Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};
