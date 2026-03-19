import type { Metadata } from "next";
import Image from "next/image";
import LPForm from "@/components/LPForm";

export const metadata: Metadata = {
  title: "SEO Services in Goa | Rank #1 on Google — Creometric",
  description:
    "Get more organic traffic and leads with Goa's top-rated SEO agency. Proven results: 340% avg. traffic growth. Free audit included.",
  robots: { index: false, follow: false },
};

const results = [
  { metric: "+340%", label: "Organic Traffic", detail: "Average client growth in 6 months" },
  { metric: "Page 1", label: "Google Rankings", detail: "For 85% of target keywords" },
  { metric: "+180%", label: "Lead Generation", detail: "More enquiries from organic search" },
];

const process = [
  { step: "01", title: "Technical Audit", description: "We find every issue holding your site back from ranking." },
  { step: "02", title: "Keyword Strategy", description: "Target high-intent keywords your customers are actually searching." },
  { step: "03", title: "Content & Authority", description: "Build topical authority with strategic content and quality backlinks." },
  { step: "04", title: "Track & Optimize", description: "Monthly reporting with transparent metrics and continuous optimization." },
];

export default function SEOGoaLP() {
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
                SEO Services in Goa
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Get Found on Google.
                <br />
                <span className="gradient-text">Get More Customers.</span>
              </h1>
              <p className="mt-6 text-lg text-[#525252] leading-relaxed max-w-lg">
                We help Goa businesses rank on page 1 for the keywords that matter.
                Data-driven SEO that delivers measurable organic traffic growth.
              </p>

              {/* Results */}
              <div className="mt-10 grid grid-cols-3 gap-4">
                {results.map((r) => (
                  <div key={r.label} className="rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] p-4">
                    <p className="text-2xl font-bold text-white">{r.metric}</p>
                    <p className="text-sm font-medium text-orange-500 mt-1">{r.label}</p>
                    <p className="text-xs text-[#525252] mt-1">{r.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:sticky lg:top-8">
              <div className="rounded-2xl bg-[#0F0F0F] border border-[#1A1A1A] p-8 lg:p-10 shadow-xl shadow-gray-200/30">
                <h2 className="text-xl font-bold text-white mb-2">Get a Free SEO Audit</h2>
                <p className="text-sm text-[#525252] mb-6">See how your site performs and what&apos;s holding you back.</p>
                <LPForm formName="lp-seo-goa" buttonText="Get My SEO Audit" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Our Proven SEO Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="bg-[#1A1A1A] rounded-xl p-6 border border-[#1A1A1A]">
                <span className="text-3xl font-bold text-orange-500/20">{p.step}</span>
                <h3 className="font-semibold mt-2 mb-2">{p.title}</h3>
                <p className="text-sm text-[#525252] leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 bg-gray-950 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Rank Higher?</h2>
          <p className="text-[#525252] mb-8">Get your free SEO audit and start growing organic traffic today.</p>
          <a href="/lp/seo-goa/#top" className="inline-block rounded-full bg-orange-500 text-white px-8 py-4 text-sm font-semibold hover:bg-orange-400 transition-all shadow-lg shadow-orange-500/25">
            Claim Your Free Audit
          </a>
        </div>
      </section>
    </div>
  );
}
