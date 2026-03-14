export default function CTABanner() {
  return (
    <section className="py-12 sm:py-20 px-6 bg-orange-500 text-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Grow Your Business?
        </h2>
        <p className="text-orange-100 mb-8 text-lg">
          Get a free website audit and a custom growth plan within 24 hours.
          No commitment required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/#contact"
            className="rounded-full bg-white text-orange-600 px-8 py-3 text-sm font-semibold hover:bg-orange-50 transition-colors"
          >
            Get Your Free Audit
          </a>
          <a
            href="tel:+919145246464"
            className="rounded-full border-2 border-white px-8 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            Call +91 91452 46464
          </a>
        </div>
      </div>
    </section>
  );
}
