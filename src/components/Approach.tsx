"use client";

import React from "react";
import { Layers, Target, Cpu, ArrowUpRight } from "lucide-react";

export const Approach = () => {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200";
  };

  const services = [
    {
      index: "01",
      icon: <Layers size={32} strokeWidth={1} />,
      title: "Organizational Architecture",
      items: ["Structure design", "Role definition", "Governance frameworks"],
    },
    {
      index: "02",
      icon: <Target size={32} strokeWidth={1} />,
      title: "Steering Systems",
      items: ["Management rituals", "Core metrics", "Accountability"],
    },
    {
      index: "03",
      icon: <Cpu size={32} strokeWidth={1} />,
      title: "Digital Orchestration",
      items: ["System layer", "Purposeful automation", "Tooling coherence"],
    },
  ];

  return (
    <section id="approach" className="py-24 md:py-40 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <div>
            <h4 className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] font-bold mb-6">
              Strategy & Methodology
            </h4>
            <h2 className="text-4xl md:text-5xl font-light leading-[1.1] mb-8 text-[#0A1128] tracking-tight">
              Organizations don’t lack tools. <br />
              <span className="font-semibold">They lack structure.</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-xl">
              As growth accelerates, the human system exposes its weaknesses:
              unclear accountability, fragmented governance, and managerial
              overload. We don't add more noise; we provide the silence of a
              well-oiled machine.
            </p>

            <div className="space-y-10 border-t border-slate-100 pt-10">
              <div className="relative">
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tighter text-[#0A1128]">
                  The Infrastructure Method
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We treat organizational design as high-stakes infrastructure:
                  stabilizing governance to make it steerable over the long
                  term.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { title: "Sobriety", desc: "Fewer layers." },
                  { title: "Legibility", desc: "Clear paths." },
                  { title: "Steering", desc: "Total visibility." },
                ].map((p, i) => (
                  <div key={i} className="border-l border-slate-200 pl-4">
                    <h5 className="font-bold text-[#0A1128] text-[10px] uppercase tracking-widest mb-1">
                      {p.title}
                    </h5>
                    <p className="text-[11px] text-slate-400 uppercase font-medium">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[5/6] overflow-hidden border grayscale border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29ycG9yYXRlfGVufDB8fDB8fHww"
                alt="Symmetric architecture"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                onError={handleImgError}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-50 -z-10 border border-slate-100 hidden lg:block"></div>
          </div>
        </div>

        {/* Improved Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((box, i) => (
            <div
              key={i}
              className="group relative p-10 bg-white border border-[#C5A059] transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#C5A059] transition-all duration-700 group-hover:w-full" />

              <div className="relative z-10">
                <div className="mb-12 inline-flex items-center justify-center text-[#C5A059] transition-colors duration-500">
                  {box.icon}
                </div>

                <h4 className="text-xl font-bold uppercase tracking-tighter mb-8 text-[#0A1128] leading-tight max-w-[180px]">
                  {box.title}
                </h4>

                <div className="h-px w-12 bg-slate-200 mb-8 transition-all duration-500 group-hover:w-full group-hover:bg-[#C5A059]/30" />

                <ul className="space-y-4">
                  {box.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center justify-between text-[11px] text-slate-500 uppercase tracking-[0.15em] font-semibold group-hover:text-[#0A1128] transition-colors duration-300"
                    >
                      <span>{item}</span>
                      {/* <ArrowUpRight
                        size={12}
                        className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#C5A059]"
                      /> */}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
