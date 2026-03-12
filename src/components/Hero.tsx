"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200";
  };

  return (
    <section
      id="top"
      // Changed h-screen to min-h-screen and added padding for fixed navs
      className="relative min-h-screen flex items-center px-6 py-20 overflow-hidden bg-[#F8F9FA] mt-20"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
          alt="Architectural structure"
          className="w-full h-full object-cover opacity-20 grayscale"
          onError={handleImgError}
        />
        {/* Adjusted gradient for better mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#F8F9FA] via-[#F8F9FA]/95 md:via-[#F8F9FA]/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-4xl">
          {/* Responsive Heading: text-4xl on tiny screens, 6xl on mobile, 8xl on desktop */}
          <h1 className="text-6xl md:text-9xl font-light tracking-tighter mb-12 leading-none text-[#0A1128]">
            Architects of <br className="hidden sm:block" />
            <span className="text-[#C5A059]">Human Systems</span>
          </h1>

          {/* Responsive Paragraph */}
          <p className="text-lg md:text-2xl text-slate-600 font-light leading-relaxed mb-8 md:mb-12 max-w-2xl">
            Human Systems Group designs human infrastructures combining
            organizational engineering, digital systems, and ecosystem
            platforms.
          </p>

          {/* Responsive Status Tags */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-8 mb-10 md:mb-16">
            <div className="flex items-center gap-3 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold text-slate-400">
              <span className="w-6 md:w-8 h-[1px] bg-slate-300"></span>
              Not a consulting firm
            </div>
            <div className="flex items-center gap-3 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold text-slate-400">
              <span className="w-6 md:w-8 h-[1px] bg-slate-300"></span>
              Not a software vendor
            </div>
            <div className="flex items-center gap-3 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold text-[#C5A059]">
              <span className="w-6 md:w-8 h-[1px] bg-[#C5A059]"></span>
              An architecture
            </div>
          </div>

          {/* Responsive Buttons: Full width on mobile, auto on desktop */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#approach"
              className="bg-[#0A1128] text-white px-8 py-5 flex items-center justify-center sm:justify-start gap-4 hover:bg-black transition-all group"
            >
              <span className="uppercase text-[10px] md:text-xs tracking-[0.2em] font-bold">
                Explore the approach
              </span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#brands"
              className="border border-[#0A1128] text-[#0A1128] px-8 py-5 flex items-center justify-center sm:justify-start gap-4 hover:bg-[#0A1128] hover:text-white transition-all group"
            >
              <span className="uppercase text-[10px] md:text-xs tracking-[0.2em] font-bold">
                View the brands
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
