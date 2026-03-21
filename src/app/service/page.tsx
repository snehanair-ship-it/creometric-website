import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "AI-Powered Marketing Services in Goa | Creometric",
  description:
    "Explore Creometric's AI-powered marketing services: predictive SEO, intelligent ad optimization, smart social media, AI web design, content strategy, and predictive analytics — all in Goa.",
};

export default function ServicePage() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      <section className="pt-24 sm:pt-32 pb-4 px-6 text-center">
        <p className="text-sm font-medium text-orange-500 uppercase tracking-wide mb-3">
          AI-Powered Solutions
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Intelligent Marketing Services
        </h1>
        <p className="text-lg text-[#8A8A8A] max-w-xl mx-auto">
          AI-driven marketing solutions for Goa businesses ready to scale
          with predictive analytics and intelligent automation.
        </p>
      </section>

      <Services />

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Grow Smarter?
        </h2>
        <p className="text-[#8A8A8A] mb-8">
          Get a free AI-powered audit and discover how intelligent marketing can accelerate your growth in Goa.
        </p>
        <a
          href="/contact-us/"
          className="inline-block rounded-full bg-orange-500 text-white px-8 py-3 text-sm font-medium hover:bg-orange-600 transition-colors"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
