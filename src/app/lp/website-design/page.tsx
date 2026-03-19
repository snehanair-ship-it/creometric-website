import type { Metadata } from "next";
import Image from "next/image";
import LPForm from "@/components/LPForm";

export const metadata: Metadata = {
  title: "Website Design in Goa | Fast, Modern Websites — Creometric",
  description:
    "Get a stunning, high-converting website built by Goa's top web design agency. Mobile-first, SEO-ready, and designed to grow your business.",
  robots: { index: false, follow: false },
};

const features = [
  { title: "Mobile-First Design", description: "70% of your visitors are on mobile. We design for them first." },
  { title: "SEO-Ready", description: "Built with clean code, fast load times, and proper structure for Google." },
  { title: "Conversion Focused", description: "Every element is designed to turn visitors into leads and customers." },
  { title: "Lightning Fast", description: "Sub-second load times with modern frameworks and optimized assets." },
];

export default function WebDesignLP() {
  return (
    <div id="top" className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Minimal header */}
      <header className="py-6 px-6 border-b border-[#1A1A1A]">
        <div className="max-w-6xl mx-auto">
          <Image src="/images/logo.svg" alt="Creometric" width={140} height={35} />
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="inline-block text-xs font-semibold text-orange-500 uppercase tracking-[0.2em] mb-4 bg-orange-500/10 px-4 py-1.5 rounded-full">
                Website Design in Goa
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                A Website That
                <br />
                <span className="gradient-text">Actually Converts.</span>
              </h1>
              <p className="mt-6 text-lg text-[#525252] leading-relaxed max-w-lg">
                Your website is your #1 salesperson. We build fast, beautiful, SEO-optimized
                websites that turn visitors into paying customers.
              </p>

              {/* Features */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                {features.map((f) => (
                  <div key={f.title} className="rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] p-4">
                    <h3 className="font-semibold text-sm mb-1">{f.title}</h3>
                    <p className="text-xs text-[#525252] leading-relaxed">{f.description}</p>
                  </div>
                ))}
              </div>

              {/* Social proof */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {["NA", "NM", "HF"].map((initials) => (
                    <div key={initials} className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-bold border-2 border-white">
                      {initials}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#525252]">Trusted by <span className="font-semibold text-white">20+ businesses</span> in Goa</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:sticky lg:top-8">
              <div className="rounded-2xl bg-[#0F0F0F] border border-[#1A1A1A] p-8 lg:p-10 shadow-xl shadow-gray-200/30">
                <h2 className="text-xl font-bold text-white mb-2">Get a Free Quote</h2>
                <p className="text-sm text-[#525252] mb-6">Tell us about your project and we&apos;ll send a proposal within 48 hours.</p>
                <LPForm formName="lp-website-design" buttonText="Get My Free Quote" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 bg-gray-950 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready for a Better Website?</h2>
          <p className="text-[#525252] mb-8">Get a free consultation and see what we can build for your business.</p>
          <a href="/lp/website-design/#top" className="inline-block rounded-full bg-orange-500 text-white px-8 py-4 text-sm font-semibold hover:bg-orange-400 transition-all shadow-lg shadow-orange-500/25">
            Get Your Free Quote
          </a>
        </div>
      </section>
    </div>
  );
}
