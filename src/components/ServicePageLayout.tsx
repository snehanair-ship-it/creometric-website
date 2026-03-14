import Link from "next/link";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  process: { step: string; description: string }[];
  faq: { q: string; a: string }[];
}

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  benefits,
  process,
  faq,
}: ServicePageProps) {
  return (
    <div className="bg-white text-gray-900 font-[family-name:var(--font-geist-sans)]">
      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-16 px-6 text-center bg-gradient-to-b from-orange-50/50 to-white">
        <p className="text-sm font-medium text-orange-500 uppercase tracking-wide mb-3">
          {subtitle}
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 max-w-3xl mx-auto">
          {title}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact-us/"
            className="rounded-full bg-orange-500 text-white px-8 py-3.5 text-sm font-medium hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25"
          >
            Get a Free Audit
          </Link>
          <a
            href="tel:+919850950259"
            className="rounded-full border border-gray-300 px-8 py-3.5 text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Call Us Now
          </a>
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
                <div className="shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-3.5 h-3.5 text-orange-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 bg-gray-50">
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
                  <p className="text-gray-600 text-sm leading-relaxed">
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
              <div key={i} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
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
          className="inline-block rounded-full bg-white text-orange-600 px-8 py-3 text-sm font-semibold hover:bg-orange-50 transition-colors"
        >
          Book a Free Consultation
        </Link>
      </section>
    </div>
  );
}
