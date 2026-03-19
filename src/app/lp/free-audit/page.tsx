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
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Minimal header — logo only, no nav */}
      <header className="py-6 px-6 border-b border-[#1A1A1A]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center">
              <span className="text-white font-sora font-bold text-lg">C</span>
            </div>
            <span className="text-white font-sora font-bold text-lg tracking-widest hidden sm:inline">CREOMETRIC</span>
          </div>
          <a href="tel:+919850950259" className="text-sm text-[#8A8A8A] hover:text-white transition-colors font-inter flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
            +91 98509 50259
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Copy */}
          <div>
            {/* Urgency badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-[11px] font-bold text-orange-500 uppercase tracking-[0.15em] font-inter">Only 3 spots left this month</span>
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight font-sora" style={{ letterSpacing: "-0.04em", lineHeight: "1.1" }}>
              Your Competitors Are
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">Outranking You.</span>
              <br />
              Find Out Why — Free.
            </h1>

            <p className="mt-6 text-lg text-[#8A8A8A] leading-relaxed font-inter" style={{ lineHeight: "1.6" }}>
              Get a detailed SEO & website audit worth <strong className="text-white">₹15,000</strong> — completely free. We&apos;ll show you exactly what&apos;s holding your site back and give you a step-by-step plan to fix it.
            </p>

            {/* Benefits */}
            <div className="mt-8 space-y-3">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                  </div>
                  <span className="text-sm text-[#8A8A8A] font-inter">{b}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] p-4">
                  <p className="text-2xl font-bold text-orange-500 font-sora">{s.value}</p>
                  <p className="text-xs text-[#525252] mt-1 font-inter">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="mt-10 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-[#8A8A8A] italic leading-relaxed font-inter">
                &ldquo;Creometric helped my dental practice scale new heights. We saw an instant increase in online enquiries and our Google visibility improved dramatically within 3 months.&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full bg-[#242424] text-orange-500 flex items-center justify-center text-sm font-bold font-inter">NA</div>
                <div>
                  <p className="text-sm font-semibold text-white font-inter">Neil David Andrade</p>
                  <p className="text-xs text-[#525252] font-inter">Andrade Dental Clinic — <span className="text-green-400">+180% enquiries</span></p>
                </div>
              </div>
            </div>

            {/* Trust image */}
            <div className="mt-8 relative rounded-xl overflow-hidden h-48">
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="Digital marketing strategy session"
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs text-[#525252] font-inter">Trusted by 20+ businesses across Goa & India</p>
              </div>
            </div>
          </div>

          {/* Right: Form — sticky */}
          <div className="lg:sticky lg:top-8">
            <div className="rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] p-8 lg:p-10 shadow-2xl shadow-orange-500/5">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-white font-sora mb-2">Claim Your Free Audit</h2>
                <p className="text-sm text-[#525252] font-inter">Takes 30 seconds. We&apos;ll call within 24 hours.</p>
              </div>
              <LPForm formName="lp-free-audit" buttonText="Get My Free Audit →" />
              <div className="mt-6 flex items-center justify-center gap-4 text-[10px] text-[#525252] font-inter">
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>
                  100% secure
                </span>
                <span>No spam</span>
                <span>No commitment</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
