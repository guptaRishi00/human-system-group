"use client";

import React from "react";
import { MoveRight } from "lucide-react";
import { Approach as ApproachSection } from "@/components/Approach";

export default function ApproachPage() {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200";
  };

  const principles = [
    {
      title: "Radical Clarity",
      desc: "Ambiguity breeds inefficiency. We establish exact boundaries for roles, responsibilities, and decision rights so every node in the system knows exactly how to function.",
    },
    {
      title: "Dynamic Coherence",
      desc: "A system must adapt without breaking. We design flexible governance structures that allow organizations to pivot strategically while maintaining operational stability.",
    },
    {
      title: "Technology as Leverage",
      desc: "Software should act as the connective tissue of a human system, not dictate its logic. We align technological tools to amplify designed human processes.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header: Immersive & Dark (Synced with Brands Page) */}
      <section className="px-6 pt-48 pb-32 bg-[#0A1128] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29ycG9yYXRlfGVufDB8fDB8fHww"
            alt="Technical infrastructure pattern"
            className="w-full h-full object-cover"
            onError={handleImgError}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-[#C5A059] uppercase tracking-[0.5em] text-[10px] font-bold mb-8 block">
            Methodology
          </span>
          <h1 className="text-6xl md:text-9xl font-light tracking-tighter mb-12 leading-none">
            Infrastructure <span className="text-[#C5A059]">Method</span>
          </h1>
          <p className="max-w-2xl text-2xl text-slate-400 font-light leading-relaxed">
            We provide architecture, not consulting. We restructure the
            fundamental human systems that drive organizational scaling.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="px-6 py-20 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-24 items-center">
            <div className="w-full lg:w-1/2">
              <div className="aspect-square relative">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
                  alt="Structure"
                  className="w-full h-full object-cover grayscale brightness-90"
                  onError={handleImgError}
                />
                <div className="hidden sm:block absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-24 h-24 md:w-40 md:h-40 border-l border-b border-slate-200 -z-10"></div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-8 md:space-y-10">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0A1128] leading-tight">
                Designing for <br className="hidden sm:block" />
                <span className="text-[#C5A059]">Infinite Scale</span>
              </h2>
              <div className="space-y-6 text-base md:text-lg text-slate-600 font-light leading-relaxed">
                <p>
                  Scaling isn't about adding management; it's about removing
                  friction. When systemic issues are solved with tactical tools,
                  organizations accumulate debt that eventually slows them to a
                  halt.
                </p>
                <p>
                  Our approach redesigns the core mechanisms—governance models,
                  accountability mapping, and technological alignment—to ensure
                  the system remains coherent as it grows.
                </p>
              </div>
              <a
                href="/contact"
                className="group flex items-center gap-4 md:gap-6 text-xs md:text-sm font-bold uppercase tracking-widest text-[#0A1128] hover:text-[#C5A059] transition-colors"
              >
                Start the dialogue{" "}
                <MoveRight className="group-hover:translate-x-3 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <ApproachSection />

      {/* Principles Section */}
      <section className="px-6 py-20 md:py-40 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
            <h4 className="text-[#C5A059] uppercase tracking-[0.4em] text-[10px] font-bold mb-4">
              Foundations
            </h4>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-[#0A1128] uppercase mb-6">
              Core Architectural <span className="">Principles</span>
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-medium">
              Three operational pillars that define the Human Systems Group
              approach to stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-100 border border-slate-100">
            {principles.map((principle, i) => (
              <div
                key={i}
                className="group relative bg-white p-8 sm:p-12 md:p-16 transition-all duration-500 hover:bg-slate-50"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8 md:mb-12">
                    <span className="text-xs md:text-sm font-black text-[#C5A059] tracking-tighter">
                      SYSTEM_P0{i + 1}
                    </span>
                  </div>

                  <h4 className="text-xl md:text-2xl font-bold text-[#0A1128] mb-4 md:mb-6 uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-300">
                    {principle.title}
                  </h4>

                  <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium mb-8">
                    {principle.desc}
                  </p>

                  <div className="mt-auto h-1 w-0 bg-[#C5A059] group-hover:w-12 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
