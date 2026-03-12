"use client";

import React from "react";

export const ResearchGovernance = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 01: Science */}
          <div className="flex flex-col bg-white border border-slate-200 p-10 md:p-14 transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-10">
              <span className="text-[#C5A059] uppercase tracking-[0.4em] text-[10px] font-bold">
                Science
              </span>
              <div className="h-px w-8 bg-[#C5A059]/30" />
            </div>

            <h2 className="text-4xl font-light text-[#0A1128] leading-tight mb-8">
              Applied Research & <br />
              <span className="font-bold uppercase tracking-tight">
                Management Science
              </span>
            </h2>

            <div className="space-y-8 flex-grow">
              <p className="text-slate-600 font-medium leading-relaxed text-lg">
                HSG is rooted in applied research (DBA) focusing on
                organizational performance, governance, and human systems
                engineering, with a strategic bridge between Europe and Africa.
              </p>

              <div className="grid grid-cols-1 gap-4 pt-8 border-t border-slate-100">
                {[
                  "A modeled approach, not just empirical.",
                  "Field-tested methods.",
                  "Measurement-based improvement.",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full" />
                    <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#0A1128]/60 group-hover:text-[#0A1128] transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 02: Structure */}
          <div className="flex flex-col bg-white border border-slate-200 p-10 md:p-14 transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-10">
              <span className="text-[#C5A059] uppercase tracking-[0.4em] text-[10px] font-bold">
                Structure
              </span>
              <div className="h-px w-8 bg-[#C5A059]/30" />
            </div>

            <h2 className="text-4xl font-light text-[#0A1128] leading-tight mb-8">
              Governance & <br />
              <span className="font-bold uppercase tracking-tight text-[#0A1128]">
                Asset Logic
              </span>
            </h2>

            <div className="space-y-8 flex-grow">
              <p className="text-slate-600 font-medium leading-relaxed text-lg">
                Human Systems Group is a single operating structure, organized
                by brands. This architecture ensures legibility, coherence, and
                steering capacity without unnecessary complexity.
              </p>

              <div className=" border-l-2 border-[#C5A059] pl-8 mt-auto">
                <h5 className="text-[10px] uppercase tracking-widest font-black mb-3 text-[#0A1128]">
                  Long-term Orientation
                </h5>
                <p className="text-xs text-slate-400 uppercase leading-loose tracking-wider max-w-md">
                  HSG develops a hybrid architecture: strategic consulting,
                  product (H), platforms, and structured networks. The objective
                  is to create a steerable and valuable asset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
