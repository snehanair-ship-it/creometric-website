import type { Metadata } from "next";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";
import Stats from "@/components/Stats";
import ClientLogos from "@/components/ClientLogos";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title:
    "AI-Powered Digital Growth Agency | SEO, Ads & Automation — Creometric",
  description:
    "Creometric uses AI and machine learning to drive measurable growth. Predictive SEO, intelligent ad optimization, and automated marketing — powered by data, not guesswork.",
  openGraph: {
    title:
      "AI-Powered Digital Growth Agency | SEO, Ads & Automation — Creometric",
    description:
      "Creometric uses AI and machine learning to drive measurable growth. Predictive SEO, intelligent ad optimization, and automated marketing — powered by data, not guesswork.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Creometric",
  description:
    "AI-powered digital growth agency offering predictive SEO, intelligent ad optimization, marketing automation, website design, content strategy, and advanced analytics.",
  url: "https://creometric.com",
  telephone: "+919850950259",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nordic Intent, Lane 4, PDA Colony",
    addressLocality: "Porvorim",
    addressRegion: "Goa",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 15.4909,
    longitude: 73.8278,
  },
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Management" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "PPC / Google Ads" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Design" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content Marketing" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Analytics" } },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does AI improve my marketing results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our AI tools analyze millions of data points in real time — from search trends to audience behavior — so we can predict what works before spending your budget. This means faster results, lower cost per lead, and campaigns that get smarter over time.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI-powered PPC campaigns often show results within the first week. SEO improvements typically appear within 3–6 months, but our predictive models accelerate this by targeting high-opportunity keywords early.",
      },
    },
    {
      "@type": "Question",
      name: "What AI-powered services does Creometric offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Predictive SEO, intelligent ad optimization, AI-driven content strategy, smart social media management, conversion-focused web design, and advanced predictive analytics.",
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ─── Hero: Dark, bold, agency-grade ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
        {/* Radial glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] animate-pulse-glow" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 mb-8 animate-fade-up opacity-0">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                <span className="text-[11px] font-bold text-orange-500 uppercase tracking-[0.15em] font-inter">AI-Powered Digital Growth Agency</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] animate-fade-up opacity-0 delay-100 font-sora" style={{ letterSpacing: "-0.04em" }}>
                AI-Driven Growth
                <br />
                For Brands That
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">Demand Results.</span>
              </h1>

              <p className="mt-6 text-lg text-[#8A8A8A] max-w-lg leading-relaxed animate-fade-up opacity-0 delay-200 font-inter" style={{ lineHeight: "1.6" }}>
                We combine AI, predictive analytics, and intelligent automation to drive measurable growth. From SEO to paid ads — every decision is powered by data, not guesswork.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 delay-300">
                <a
                  href="#contact"
                  className="rounded-lg bg-gradient-to-b from-orange-500 to-orange-600 text-white px-8 py-4 text-base font-semibold hover:from-orange-400 hover:to-orange-500 transition-all shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5 text-center font-inter"
                >
                  Get a Free Audit
                </a>
                <a
                  href="#services"
                  className="rounded-lg border border-[#2A2A2A] text-[#8A8A8A] px-8 py-4 text-base font-medium hover:border-[#3A3A3A] hover:text-white transition-all hover:-translate-y-0.5 text-center font-inter"
                >
                  Explore Services
                </a>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 flex flex-wrap items-center gap-8 animate-fade-up opacity-0 delay-400">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                  </div>
                  <span className="text-sm text-[#525252] font-inter font-medium">250+ AI-Driven Campaigns</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg>
                  </div>
                  <span className="text-sm text-[#525252] font-inter font-medium">5 Cr+ ROI Generated</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>
                  </div>
                  <span className="text-sm text-[#525252] font-inter font-medium">Real-Time AI Insights</span>
                </div>
              </div>
            </div>

            {/* Right: Results dashboard mockup */}
            <div className="hidden lg:block animate-fade-up opacity-0 delay-300">
              <div className="relative">
                {/* Glow behind card */}
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/15 via-amber-500/5 to-orange-500/15 rounded-3xl blur-2xl" />

                {/* Dashboard card */}
                <div className="relative rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] p-6 shadow-2xl shadow-orange-500/5">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-[9px] text-[#525252] uppercase tracking-[0.2em] font-bold font-inter">AI Analytics Dashboard</p>
                      <p className="text-sm font-bold text-white mt-0.5 font-sora">AI-Predicted Growth</p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-3 py-1.5 text-xs font-semibold text-green-400 font-inter">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                      +340%
                    </span>
                  </div>

                  {/* Chart mockup */}
                  <div className="relative h-32 mb-6 rounded-lg bg-[#242424]/50">
                    <svg className="w-full h-full" viewBox="0 0 400 128" fill="none" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0 112 Q50 108 80 96 Q120 80 160 76 Q200 72 240 48 Q280 28 320 20 Q360 14 400 6 L400 128 L0 128Z" fill="url(#chartGrad)" />
                      <path d="M0 112 Q50 108 80 96 Q120 80 160 76 Q200 72 240 48 Q280 28 320 20 Q360 14 400 6" stroke="#f97316" strokeWidth="2.5" fill="none" />
                      <circle cx="400" cy="6" r="4" fill="#f97316" />
                      <circle cx="400" cy="6" r="8" fill="#f97316" opacity="0.3" />
                    </svg>
                  </div>

                  {/* Metric cards */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-xl bg-[#242424] border border-[#2A2A2A] p-4">
                      <p className="text-[11px] text-[#525252] font-inter font-medium">Keywords</p>
                      <p className="text-xl font-bold text-white font-sora">1,247</p>
                      <p className="text-[11px] text-green-400 font-inter font-medium">+89 this month</p>
                    </div>
                    <div className="rounded-xl bg-[#242424] border border-[#2A2A2A] p-4">
                      <p className="text-[11px] text-[#525252] font-inter font-medium">Clicks</p>
                      <p className="text-xl font-bold text-white font-sora">28.4K</p>
                      <p className="text-[11px] text-green-400 font-inter font-medium">+12.3% MoM</p>
                    </div>
                    <div className="rounded-xl bg-[#242424] border border-[#2A2A2A] p-4">
                      <p className="text-[11px] text-[#525252] font-inter font-medium">Conversions</p>
                      <p className="text-xl font-bold text-white font-sora">342</p>
                      <p className="text-[11px] text-green-400 font-inter font-medium">+28% MoM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos — full width for marquee effect */}
      <ClientLogos />

      {/* Stats */}
      <Stats />

      {/* Services */}
      <Services />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Banner */}
      <CTABanner />

      {/* FAQ */}
      <FAQ />

      {/* Lead Form */}
      <LeadForm />
    </div>
  );
}
