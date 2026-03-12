"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

export const Brands = () => {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200";
  };

  // 1. Added href to the brand objects
  const brands = [
    {
      name: "Socle RH",
      tag: "Org Architecture",
      desc: "Structuring, governance, trajectories, and skill development—driven by clarity and results.",
      href: "https://soclerh.fr",
    },
    {
      name: "Human System Hub (H)",
      tag: "Infrastructure",
      desc: "An orchestration layer to structure, synchronize, and provide visibility. Governance infrastructure, not an HR tool.",
      href: "https://soclerh.fr",
    },
    {
      name: "Kora",
      tag: "Ecosystems",
      desc: "B2B matching infrastructure. A quality-oriented platform for structuring access to partners and opportunities.",
      href: "https://korab2b.com/",
    },
    {
      name: "Capahome",
      tag: "Human Services",
      desc: "Territorial licensing, standardization of methods, tools, and processes. A network logic operated as infrastructure.",
      href: "https://capahome.fr/",
    },
    {
      name: "Capabilis",
      tag: "Employability",
      desc: "Public-private interface: trajectories, skills, inclusion, and social performance platform.",
      href: " https://capabilis.fr/",
    },
  ];

  return (
    <section
      id="brands"
      className="py-24 md:py-40 bg-white text-[#0A1128] px-6 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-full h-full opacity-70 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1609408197217-65fe7a1e6e7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExOXx8fGVufDB8fHx8fA%3D%3D"
          alt="Technical pattern"
          className="w-full h-full object-cover mix-blend-luminosity"
          onError={handleImgError}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h4 className="text-[#0A1128] uppercase tracking-[0.3em] text-[10px] font-bold mb-6">
              Operating Ecosystem
            </h4>
            <h2 className="text-4xl md:text-5xl font-light">
              One group. Distinct operating brands.{" "}
              <span className="font-semibold">One coherence.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="bg-slate-50 p-10 flex flex-col justify-between group hover:bg-white hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex justify-between items-start mb-10">
                  <h3 className="text-2xl font-bold tracking-tighter">
                    {brand.name}
                  </h3>
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold border border-[#C5A059]/30 px-2 py-1">
                    {brand.tag}
                  </span>
                </div>
                <p className="text-slate-600 font-medium leading-relaxed mb-12 min-h-[80px]">
                  {brand.desc}
                </p>
              </div>

              {/* 2. Wrapped the footer in an anchor tag */}
              <a
                href={brand.href}
                target="_blank" // Opens in new tab
                rel="noopener noreferrer" // Security best practice
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:text-[#C5A059] transition-colors cursor-pointer"
              >
                <span>Explore Brand</span>
                <ChevronRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          ))}

          <div className="bg-slate-50 p-10 flex items-center justify-center border-l border-slate-200 opacity-60 font-medium text-slate-600 text-sm italic">
            Additional infrastructure layers under development...
          </div>
        </div>
      </div>
    </section>
  );
};
