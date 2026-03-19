import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Our Services | Creometric — Digital Marketing Agency in Goa",
  description:
    "Explore Creometric's digital marketing services: SEO, social media management, PPC/Google Ads, website design, content marketing, and web analytics.",
};

export default function ServicePage() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      <section className="pt-24 sm:pt-32 pb-4 px-6 text-center">
        <p className="text-sm font-medium text-orange-500 uppercase tracking-wide mb-3">
          What We Do
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Our Services
        </h1>
        <p className="text-lg text-[#8A8A8A] max-w-xl mx-auto">
          Full-service digital marketing solutions tailored to help your
          business grow.
        </p>
      </section>

      <Services />

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-[#8A8A8A] mb-8">
          Get a free audit and find out how we can help your business grow.
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
