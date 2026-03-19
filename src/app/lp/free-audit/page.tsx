import type { Metadata } from "next";
import Image from "next/image";
import LPForm from "@/components/LPForm";

export const metadata: Metadata = {
  title: "Free Website Audit | Creometric — Digital Marketing Agency Goa",
  description:
    "Get a free SEO & website audit with a custom 90-day growth plan. No commitment. Trusted by 20+ businesses across Goa.",
  robots: { index: false, follow: false },
};

const benefits = [
  "Complete SEO & technical website audit",
  "Competitor analysis with actionable insights",
  "Custom 90-day growth roadmap",
  "Google Search Console & Analytics review",
  "Priority action items ranked by impact",
];

const stats = [
  { value: "250+", label: "Projects Completed" },
  { value: "5 Cr+", label: "ROI Generated" },
  { value: "340%", label: "Avg. Traffic Growth" },
];

export default function FreeAuditLP() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-[family-name:var(--font-geist-sans)]">
      {/* Minimal header — logo only, no nav */}
      <header className="py-6 px-6">
        <div className="max-w-6xl mx-auto">
          <Image
            src="/images/logo-white.svg"
            alt="Creometric"
            width={140}
            height={35}
          />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-xs font-medium text-orange-300 uppercase tracking-wider">Limited spots available</span>
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Get a Free Website Audit
              <br />
              <span className="gradient-text">Worth Rs.15,000</span>
            </h1>

            <p className="mt-6 text-lg text-[#525252] leading-relaxed">
              Find out exactly why your competitors rank higher — and get a step-by-step
              plan to overtake them. No commitment, no fluff.
            </p>

            {/* Benefits */}
            <div className="mt-8 space-y-3">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                  </div>
                  <span className="text-sm text-[#525252]">{b}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center rounded-xl bg-gray-900/50 border border-gray-800/50 p-4">
                  <p className="text-2xl font-bold text-orange-400">{s.value}</p>
                  <p className="text-xs text-[#525252] mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="mt-10 rounded-xl bg-gray-900/50 border border-gray-800/50 p-6">
              <p className="text-sm text-[#525252] italic leading-relaxed">
                &ldquo;Creometric helped my dental practice scale new heights. We saw an instant increase in online enquiries.&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs font-bold">NA</div>
                <div>
                  <p className="text-xs font-semibold text-white">Neil David Andrade</p>
                  <p className="text-xs text-[#525252]">Andrade Dental Clinic</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:sticky lg:top-8">
            <div className="rounded-2xl bg-[#1A1A1A] p-8 lg:p-10 shadow-2xl">
              <h2 className="text-xl font-bold text-white mb-2">Claim Your Free Audit</h2>
              <p className="text-sm text-[#525252] mb-6">Fill in your details and we&apos;ll call within 24 hours.</p>
              <LPForm formName="lp-free-audit" buttonText="Get My Free Audit" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
