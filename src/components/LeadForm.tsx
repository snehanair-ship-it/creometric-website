"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { sendGAEvent } from "@/lib/analytics";

export default function LeadForm() {
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "03c25fe0-b587-4406-bc6d-c33112140ce0");
    formData.append("subject", "New Lead — Creometric Website");
    formData.append("from_name", "Creometric Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (!result.success) throw new Error("Submission failed");

      sendGAEvent("generate_lead", {
        form_name: "lead-form",
        currency: "INR",
        value: "1",
      });

      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", "Lead", { content_name: "lead-form" });
      }

      router.push("/thank-you");
    } catch {
      alert("Something went wrong. Please try again or call us directly.");
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28 px-6 bg-[#0F0F0F] relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <div className="flex flex-col items-start gap-4 mb-6">
              <div className="w-10 h-[3px] bg-orange-500 rounded-full" />
              <span className="text-xs font-bold text-orange-500 uppercase tracking-[0.2em] font-inter">
                Get in Touch
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sora mb-4" style={{ letterSpacing: "-0.025em", lineHeight: "1.2" }}>
              Get Your Free AI-Powered Audit
            </h2>

            <div className="mt-8 space-y-4">
              {[
                "AI-powered website & SEO health analysis",
                "Competitor intelligence with opportunity scoring",
                "Custom AI-driven 90-day growth roadmap",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                  </div>
                  <span className="text-sm text-[#8A8A8A] font-inter">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] p-8 lg:p-10">
            <h3 className="text-xl font-bold text-white font-sora mb-6">Start Your AI-Powered Audit</h3>
            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#8A8A8A] mb-2 font-inter">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-[#2A2A2A] bg-[#242424] px-4 py-3 text-sm text-white placeholder-[#525252] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow font-inter"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#8A8A8A] mb-2 font-inter">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full rounded-lg border border-[#2A2A2A] bg-[#242424] px-4 py-3 text-sm text-white placeholder-[#525252] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow font-inter"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#8A8A8A] mb-2 font-inter">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-[#2A2A2A] bg-[#242424] px-4 py-3 text-sm text-white placeholder-[#525252] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow font-inter"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-[#8A8A8A] mb-2 font-inter">
                  Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  className="w-full rounded-lg border border-[#2A2A2A] bg-[#242424] px-4 py-3 text-sm text-white placeholder-[#525252] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow font-inter"
                  placeholder="www.yoursite.com"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-b from-orange-500 to-orange-600 text-white py-3.5 text-base font-semibold hover:from-orange-400 hover:to-orange-500 transition-all shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 font-inter"
              >
                Get My AI Audit — Free
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
