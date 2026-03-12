"use client";

import React from "react";
import { Manifesto as ManifestoSection } from "@/components/Manifesto";
import { MoveRight } from "lucide-react";

export default function ManifestoPage() {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200";
  };

  const pillars = [
    {
      id: "01",
      title: "Governance",
      highlight: "The Foundation",
      desc: "Without clear governance mechanisms, organizations dissolve into chaos. We establish the specific rules of the game before introducing specialized talent. An organization without governance is simply a crowd of people.",
    },
    {
      id: "02",
      title: "Technology",
      highlight: "Orchestration Layer",
      desc: "Tools should not dictate workflows; they should encode predetermined architectures. We deploy digital solutions only to stabilize and accelerate properly designed human processes.",
    },
    {
      id: "03",
      title: "Culture",
      highlight: "Structural Output",
      desc: "You cannot mandate culture. Culture is the natural byproduct of the incentives, governance, and operating mechanisms embedded in your structure. To change culture, you must change the architecture.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header: Immersive & Dark (Synced with Brands Page) */}
      <section className="px-6 pt-48 pb-32 bg-[#0A1128] text-white relative overflow-hidden">
        {/* Technical Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvcnBvcmF0ZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Technical pattern"
            className="w-full h-full object-cover"
            onError={handleImgError}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-[#C5A059] uppercase tracking-[0.5em] text-[10px] font-bold mb-8 block">
            Core Beliefs
          </span>
          <h1 className="text-6xl md:text-9xl font-light tracking-tighter mb-12 leading-none">
            Our <span className="text-[#C5A059]">Philosophy</span>
          </h1>
          <p className="max-w-2xl text-2xl text-slate-400 font-light leading-relaxed">
            The fundamental principles that dictate how we engineer, structure,
            and scale human systems.
          </p>
        </div>
      </section>

      {/* Philosophy Card Grid */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="group relative bg-white border border-slate-100 p-12 md:p-16 transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-2 flex flex-col"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-50 group-hover:bg-[#C5A059] transition-colors duration-500"></div>

                <div className="text-4xl font-serif italic text-slate-200 group-hover:text-[#C5A059] transition-colors duration-500 mb-12">
                  {pillar.id}.
                </div>

                <div className="space-y-6 flex-grow">
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-400">
                      {pillar.title}
                    </h3>
                    <h4 className="text-3xl font-bold tracking-tight text-[#0A1128] uppercase">
                      {pillar.highlight}
                    </h4>
                  </div>

                  <div className="w-12 h-px bg-slate-200 group-hover:w-full group-hover:bg-[#C5A059]/20 transition-all duration-700"></div>

                  <p className="text-lg text-slate-500 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[10px] uppercase tracking-widest font-black text-[#C5A059]">
                    HSG_PRINCIPLE_{pillar.id}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refined Action Block */}
      <section className="bg-[#0A1128] py-40 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
            alt="Architecture"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-5xl font-light tracking-tighter text-white mb-8">
            Ready to{" "}
            <span className="text-[#C5A059] italic font-serif">
              Restructure?
            </span>
          </h2>
          <p className="text-xl font-light mb-12 leading-relaxed text-slate-400">
            If these principles align with your vision for sustainable
            organizational scaling, our partners are available for strategic
            dialogue.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-6 text-sm font-bold uppercase tracking-[0.3em] text-white hover:text-[#C5A059] transition-colors"
          >
            Initiate Dialogue
            <MoveRight className="group-hover:translate-x-3 transition-transform" />
          </a>
        </div>
      </section>

      <div className="bg-white">
        <ManifestoSection />
      </div>
    </main>
  );
}
