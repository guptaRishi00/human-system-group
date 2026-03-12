"use client";

import React, { useState } from "react";
import { MoveRight, Send, Globe, MessageSquare, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200";
  };

  const SCRIPT_URL =
    "https://script.google.com/a/macros/softexedge.in/s/AKfycbw-hQdomwCWamTrxKCE5qollwQeKRcKGyk_23Pr6CXY8s8ocQMhxuM0jsc1YnyDZv59/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Expansive Header: Optimized for Mobile Viewports */}
      <section className="px-6 pt-32 pb-20 md:pt-48 md:pb-32 bg-[#0A1128] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1547321568-f2e8dbaa32d1?w=600&auto=format&fit=crop&q=60"
            alt="Technical pattern"
            className="w-full h-full object-cover"
            onError={handleImgError}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-[#C5A059] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] font-bold mb-6 md:mb-8 block">
            Communication
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-light tracking-tighter mb-8 md:mb-12 leading-[0.9] md:leading-none">
            Engage the <span className="text-[#C5A059]">System</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-2xl text-slate-400 font-light leading-relaxed">
            Initiate a conversation about organizational architecture or
            ecosystem strategy. Our partners are available for select
            institutional engagements.
          </p>
        </div>
      </section>

      {/* 2. Service Cards: Stackable Grid */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                id: "01",
                title: "Strategic Engagements",
                desc: "Complex organizational restructuring, M&A integration stabilization, and deep infrastructural realignments at the executive level.",
              },
              {
                id: "02",
                title: "Brand Integration",
                desc: "Direct access to specialized operating brands (Socle RH, Kora, etc.) depending on your localized human system requirements.",
              },
              {
                id: "03",
                title: "Research Partnerships",
                desc: "Collaborations focused on advancing management science, corporate governance research, and institutional performance metrics.",
              },
            ].map((type, i) => (
              <div
                key={i}
                className="group relative bg-white border border-slate-100 p-8 md:p-12 transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-slate-100 group-hover:bg-[#C5A059] transition-colors duration-500"></div>
                <div className="text-2xl md:text-3xl font-serif italic text-slate-200 group-hover:text-[#C5A059] transition-colors duration-500 mb-6 md:mb-8">
                  {type.id}.
                </div>
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-[#0A1128] uppercase mb-4">
                  {type.title}
                </h3>
                <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed">
                  {type.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Engagement Form: Grid-to-Stack Transition */}
      <section className="py-24 md:py-40 px-6 bg-[#0A1128] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 grayscale pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
            alt="Architecture"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-5 space-y-10 md:space-y-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-6 md:mb-8">
                  Request a <br className="hidden md:block" />
                  <span className="text-[#C5A059] italic font-serif">
                    Meeting
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
                  Provide your institutional details and the nature of your
                  inquiry. Our steering team will review and respond within 48
                  business hours.
                </p>
              </div>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center gap-4 md:gap-6 group">
                  <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#C5A059] transition-colors">
                    <Globe size={18} className="text-[#C5A059]" />
                  </div>
                  <div>
                    <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                      Global Presence
                    </div>
                    <div className="text-base md:text-lg font-light tracking-tight">
                      Europe — Africa — Middle East
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 md:gap-6 group">
                  <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#C5A059] transition-colors">
                    <MessageSquare size={18} className="text-[#C5A059]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                      Direct Channel
                    </div>
                    <div className="text-base md:text-lg font-light tracking-tight truncate">
                      dialogue@humansystemsgroup.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-8 md:p-16 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 md:py-20 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0A1128] uppercase tracking-tight">
                    Transmission Received
                  </h3>
                  <p className="text-slate-500 font-light">
                    Your inquiry has been logged in our system. A partner will
                    contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[#C5A059] uppercase tracking-widest text-xs font-bold border-b border-[#C5A059] pb-1"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-8 md:space-y-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-[#0A1128] placeholder:text-slate-300 focus:outline-none focus:border-[#C5A059] transition-colors font-medium text-sm md:text-base"
                    />
                    <input
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Institutional Email"
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-[#0A1128] placeholder:text-slate-300 focus:outline-none focus:border-[#C5A059] transition-colors font-medium text-sm md:text-base"
                    />
                  </div>

                  <select
                    required
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-slate-200 py-3 text-[#0A1128] focus:outline-none focus:border-[#C5A059] transition-colors font-medium appearance-none text-sm md:text-base"
                  >
                    <option value="">Nature of Inquiry</option>
                    <option value="Strategic Engagement">
                      Strategic Engagement
                    </option>
                    <option value="Brand Integration">Brand Integration</option>
                    <option value="Research Partnership">
                      Research Partnership
                    </option>
                  </select>

                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Brief overview of your human system challenge..."
                    className="w-full bg-transparent border-b border-slate-200 py-3 text-[#0A1128] placeholder:text-slate-300 focus:outline-none focus:border-[#C5A059] transition-colors font-medium resize-none text-sm md:text-base"
                  ></textarea>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="group flex items-center gap-6 bg-[#0A1128] text-white px-8 md:px-10 py-4 md:py-5 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#C5A059] disabled:bg-slate-200 disabled:cursor-not-allowed transition-all duration-300 shadow-xl w-full sm:w-auto justify-center sm:justify-start"
                  >
                    {isSubmitting ? (
                      <>
                        Processing{" "}
                        <Loader2 size={16} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        Initiate Transmission{" "}
                        <Send
                          size={16}
                          className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform"
                        />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
