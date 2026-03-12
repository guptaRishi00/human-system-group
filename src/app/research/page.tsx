"use client";

import React from "react";
import { ResearchGovernance as ResearchSection } from "@/components/ResearchGovernance";
import { MoveRight } from "lucide-react";

export default function ResearchPage() {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200";
  };

  const researchVectors = [
    "Organizational Cybernetics",
    "Asymmetric Information Flow",
    "Decentralized Governance Modeling",
    "Cognitive Load in Scaling Systems",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Expansive Header: Immersive & Dark (Synced with Brands Page) */}
      <section className="px-6 pt-48 pb-32 bg-[#0A1128] text-white relative overflow-hidden">
        {/* Technical Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvcnBvcmF0ZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Technical infrastructure pattern"
            className="w-full h-full object-cover"
            onError={handleImgError}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-[#C5A059] uppercase tracking-[0.5em] text-[10px] font-bold mb-8 block">
            Research & Structure
          </span>
          <h1 className="text-6xl md:text-9xl font-light tracking-tighter mb-12 leading-none">
            Governing the <span className="text-[#C5A059]">Unpredictable</span>
          </h1>
          <p className="max-w-2xl text-2xl text-slate-400 font-light leading-relaxed">
            The foundation of our architectural work lies in rigorous management
            science. We build structures capable of weathering complex ecosystem
            shifts.
          </p>
        </div>
      </section>

      {/* 2. Embedded Governance Section */}
      <div className="py-20 bg-white">
        <ResearchSection />
      </div>

      {/* 3. Narrative & Empirical Validation */}
      <section className="px-6 py-40 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-7 space-y-12">
              <div>
                <h3 className="text-[#0A1128] text-5xl font-bold tracking-tighter uppercase mb-8">
                  Empirical <span className="text-[#C5A059]">Validation</span>
                </h3>
                <div className="space-y-6 text-xl text-slate-600 font-light leading-relaxed">
                  <p>
                    Our methodologies are not based on fleeting management
                    trends. They are the synthesis of applied research in
                    organizational behavior, cybernetics, and complex systems
                    theory.
                  </p>
                  <p>
                    We operate as an applied research laboratory disguised as an
                    infrastructure firm, testing frameworks against reality
                    before implementation.
                  </p>
                </div>
              </div>

              <div className="pt-12 border-t border-slate-100">
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#C5A059] mb-10">
                  Key Research Vectors
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {researchVectors.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full group-hover:scale-150 transition-transform" />
                      <span className="text-sm font-bold uppercase tracking-widest text-[#0A1128]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="/approach"
                  className="group inline-flex items-center gap-6 text-sm font-bold uppercase text-[#0A1128] hover:text-[#C5A059] transition-colors"
                >
                  Explore Methodology
                  <MoveRight className="group-hover:translate-x-3 transition-transform" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 border border-slate-100 -z-10 translate-x-4 translate-y-4" />
              <div className="relative aspect-[4/5] overflow-hidden grayscale brightness-90 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                  alt="Structure"
                  className="w-full h-full object-cover"
                  onError={handleImgError}
                />
              </div>
              <div className="absolute bottom-8 -left-8 bg-[#0A1128] p-6 text-white hidden lg:block shadow-xl">
                <div className="text-[10px] uppercase tracking-[0.3em] font-bold mb-1">
                  Vector
                </div>
                <div className="text-sm font-bold text-[#C5A059]">
                  Applied Science Core
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA: Dark Theme Bookend */}
      <section className="bg-[#0A1128] py-40 text-center px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-5xl font-light tracking-tighter text-white mb-8">
            Evidence-Based{" "}
            <span className="text-[#C5A059] italic font-serif">Scaling</span>
          </h2>
          <p className="text-xl font-light mb-12 leading-relaxed text-slate-400">
            If you require architectural clarity backed by management science,
            we should initiate a targeted dialogue.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-6 text-sm font-bold uppercase tracking-widest text-white hover:text-[#C5A059] transition-colors"
          >
            Request a Meeting
            <MoveRight className="group-hover:translate-x-3 transition-transform" />
          </a>
        </div>
      </section>
    </main>
  );
}
