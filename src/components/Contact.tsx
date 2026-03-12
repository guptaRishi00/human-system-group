"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export const Contact = () => {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200";
  };

  return (
    <section id="contact" className="py-20 md:py-40 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Adjusted padding: p-8 on mobile, p-24 on desktop */}
        <div className="border border-slate-200 p-8 md:p-24 relative overflow-hidden bg-slate-50 text-[#0A1128]">
          {/* Background Texture */}
          <div className="absolute inset-0 opacity-20 grayscale">
            <img
              src="https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Texture"
              className="w-full h-full object-cover"
              onError={handleImgError}
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              {/* Responsive Heading: text-3xl on mobile, text-5xl on desktop */}
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6 leading-tight">
                Get in <span className="text-[#0A1128]">touch</span>
              </h2>

              <p className="text-base md:text-lg text-slate-600 mb-8 max-w-md font-medium leading-relaxed">
                For strategic requests, partnerships, or institutional
                inquiries, our steering team is available for targeted dialogue.
              </p>

              <div className="space-y-4">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-black text-[#0A1128]">
                  Direct Communication
                </div>
                {/* Responsive Email: 
                  break-all ensures the long email doesn't push the screen width on small devices 
                */}
                <a
                  href="mailto:contact@humansystemsgroup.com"
                  className="text-lg sm:text-xl md:text-2xl font-light hover:text-[#C5A059] transition-colors border-b border-slate-200 pb-2 inline-block break-all sm:break-normal"
                >
                  contact@humansystemsgroup.com
                </a>
              </div>
            </div>

            {/* Button Container */}
            <div className="flex lg:justify-end mt-4 lg:mt-0">
              <a
                href="mailto:contact@humansystemsgroup.com?subject=Meeting Request"
                className="w-full sm:w-auto bg-[#0A1128] text-white px-8 md:px-12 py-5 md:py-6 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#C5A059] transition-all flex items-center justify-center gap-4 no-underline"
              >
                Request a meeting
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
