"use client";

import React from "react";
import { Brands as BrandsSection } from "@/components/Brands";
import { ArrowRight, MoveRight } from "lucide-react";

export default function BrandsPage() {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200";
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header: Immersive & Dark */}
      <section className="px-6 pt-48 pb-32 bg-[#0A1128] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1462556791646-c201b8241a94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvcnBvcmF0ZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Technical pattern"
            className="w-full h-full object-cover"
            onError={handleImgError}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-[#C5A059] uppercase tracking-[0.5em] text-[10px] font-bold mb-8 block">
            The Ecosystem
          </span>
          <h1 className="text-6xl md:text-9xl font-light tracking-tighter mb-12 leading-none">
            Operating <span className="text-[#C5A059]">Brands</span>
          </h1>
          <p className="max-w-2xl text-2xl text-slate-400 font-light leading-relaxed">
            HSG operates as a singular infrastructure powering specialized
            layers of human system engineering.
          </p>
        </div>
      </section>

      {/* Context: Minimal Spacing & Stats */}
      <section className="px-6 py-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Context Text */}
            <div className="lg:col-span-8 space-y-8">
              <h2 className="text-4xl font-bold tracking-tight text-[#0A1128] uppercase">
                A Unified Governance{" "}
                <span className="text-[#C5A059]">Core</span>
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl">
                Our brands share a centralized core of operating principles,
                allowing each subsidiary to specialize deeply while drawing on
                the group's collective intelligence.
              </p>
              <div className="pt-8">
                <a
                  href="#brands-list"
                  className="group flex items-center gap-6 text-sm font-bold uppercase tracking-widest text-[#0A1128] hover:text-[#C5A059] transition-colors"
                >
                  Explore the Portfolio{" "}
                  <MoveRight className="group-hover:translate-x-3 transition-transform" />
                </a>
              </div>
            </div>

            {/* Subtle Stats List */}
            <div className="lg:col-span-4 border-l border-slate-100 pl-12 space-y-12">
              {[
                { label: "Operating Entities", val: "05" },
                { label: "Governance Core", val: "Unified" },
                { label: "Value Creation", val: "Synergistic" },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                    {item.label}
                  </div>
                  <div className="text-3xl font-bold text-[#0A1128]">
                    {item.val}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div id="brands-list" className="bg-white">
        <BrandsSection />
      </div>
    </main>
  );
}
