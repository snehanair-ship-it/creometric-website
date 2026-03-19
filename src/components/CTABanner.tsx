export default function CTABanner() {
  return (
    <section className="py-20 sm:py-28 px-6 bg-gradient-to-br from-[#1A0800] via-[#0A0A0A] to-[#0A0800] relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-sora" style={{ letterSpacing: "-0.04em" }}>
          Ready to Dominate Your Market?
        </h2>

        <p className="text-[#8A8A8A] mt-6 text-lg max-w-xl mx-auto leading-relaxed font-inter">
          Get a free SEO audit, competitor analysis, and a custom 90-day growth roadmap — no strings attached.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/#contact"
            className="rounded-lg bg-gradient-to-b from-orange-500 to-orange-600 text-white px-10 py-4 text-base font-semibold hover:from-orange-400 hover:to-orange-500 transition-all shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5 font-inter"
          >
            Get Your Free Audit
          </a>
          <a
            href="tel:+919850950259"
            className="rounded-lg border border-[#2A2A2A] text-[#8A8A8A] px-10 py-4 text-base font-medium hover:border-[#3A3A3A] hover:text-white transition-all hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 font-inter"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
            Call +91 98509 50259
          </a>
        </div>

        <p className="mt-8 text-sm text-[#525252] font-inter">
          Only accepting <span className="text-orange-500 font-semibold">3 new clients</span> this month
        </p>
      </div>
    </section>
  );
}
