import Image from "next/image";
import Link from "next/link";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string;
  benefits: string[];
  process: { step: string; description: string }[];
  faq: { q: string; a: string }[];
}

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  heroImage,
  benefits,
  process,
  faq,
}: ServicePageProps) {
  return (
    <div className="bg-[#0A0A0A] text-white">
      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-16 px-6 text-center bg-[#0A0A0A] relative overflow-hidden">
        {heroImage && (
          <div className="absolute inset-0">
            <Image src={heroImage} alt="" fill className="object-cover opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/80 to-[#0A0A0A]" />
          </div>
        )}
        <div className="relative z-10">
          <p className="text-sm font-medium text-orange-500 uppercase tracking-wide mb-3 font-inter">
            {subtitle}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 max-w-3xl mx-auto font-sora" style={{ letterSpacing: "-0.03em" }}>
            {title}
          </h1>
          <p className="text-lg text-[#8A8A8A] max-w-2xl mx-auto leading-relaxed font-inter">
            {description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us/"
              className="rounded-lg bg-gradient-to-b from-orange-500 to-orange-600 text-white px-8 py-3.5 text-sm font-medium hover:from-orange-400 hover:to-orange-500 transition-all shadow-lg shadow-orange-500/25 font-inter"
            >
              Get a Free Audit
            </Link>
            <a
              href="tel:+919850950259"
              className="rounded-lg border border-[#2A2A2A] px-8 py-3.5 text-sm font-medium hover:border-[#3A3A3A] hover:text-white transition-colors text-[#8A8A8A] font-inter"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            Why Choose Creometric?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex gap-3">
                <div className="shrink-0 w-6 h-6 rounded-full bg-orange-500/15 flex items-center justify-center mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-3.5 h-3.5 text-orange-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-[#8A8A8A] text-sm leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 bg-[#0F0F0F]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            Our Process
          </h2>
          <div className="space-y-6">
            {process.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{step.step}</h3>
                  <p className="text-[#8A8A8A] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <div key={i} className="border border-[#2A2A2A] rounded-xl p-6">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-[#8A8A8A] text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-orange-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-orange-100 mb-8 max-w-lg mx-auto">
          Get a free audit and a custom strategy tailored to your business.
        </p>
        <Link
          href="/contact-us/"
          className="inline-block rounded-full bg-[#1A1A1A] text-orange-500 px-8 py-3 text-sm font-semibold hover:bg-orange-500/10 transition-colors"
        >
          Book a Free Consultation
        </Link>
      </section>
    </div>
  );
}
