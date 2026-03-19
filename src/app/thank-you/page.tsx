import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Creometric",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Confirmation */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Thank You!
          </h1>
          <p className="text-lg text-[#8A8A8A] mb-2">
            We&apos;ll review your website and call you within{" "}
            <strong>24 hours</strong>.
          </p>
          <a
            href="tel:+919850950259"
            className="inline-block mt-4 text-2xl sm:text-3xl font-bold hover:underline"
          >
            +91 98509 50259
          </a>
          <p className="text-sm text-[#525252] mt-1">
            Can&apos;t wait? Call us directly.
          </p>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 px-6 bg-[#0F0F0F]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            What Happens Next?
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "We Audit Your Website",
                description:
                  "Our team reviews your website, SEO, social presence, and competitors within a few hours.",
              },
              {
                step: "2",
                title: "We Build a Custom Plan",
                description:
                  "Based on the audit, we put together a tailored growth strategy with clear goals and timelines.",
              },
              {
                step: "3",
                title: "We Call You",
                description:
                  "Within 24 hours, we'll walk you through our findings and recommendations — no strings attached.",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-orange-500/15 text-orange-500 flex items-center justify-center text-sm font-bold shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-[#525252] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            While You Wait, Check These Out
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a
              href="/blog/the-intersection-of-ux-design-and-seo-creating-user-friendly-websites"
              className="block rounded-2xl border border-[#2A2A2A] p-6 hover:shadow-lg hover:shadow-orange-500/5 transition-shadow"
            >
              <p className="text-xs font-medium text-[#525252] uppercase tracking-wide mb-2">
                SEO
              </p>
              <h3 className="text-lg font-semibold mb-2">
                The Intersection of UX Design and SEO: Creating User-Friendly Websites
              </h3>
              <p className="text-sm text-[#8A8A8A]">
                How UX design and SEO work together to create websites that rank
                well.
              </p>
            </a>
            <a
              href="/blog/sustainable-marketing-promoting-eco-friendly-practices-in-the-digital-age"
              className="block rounded-2xl border border-[#2A2A2A] p-6 hover:shadow-lg hover:shadow-orange-500/5 transition-shadow"
            >
              <p className="text-xs font-medium text-[#525252] uppercase tracking-wide mb-2">
                Marketing
              </p>
              <h3 className="text-lg font-semibold mb-2">
                Sustainable Marketing: Promoting Eco-Friendly Practices in the Digital Age
              </h3>
              <p className="text-sm text-[#8A8A8A]">
                How brands can adopt sustainable marketing practices in
                today&apos;s digital landscape.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-gray-900 text-white text-center">
        <a
          href="tel:+919850950259"
          className="text-2xl sm:text-3xl font-bold hover:underline"
        >
          +91 98509 50259
        </a>
        <p className="text-[#525252] mt-2 text-sm">
          Creometric &mdash; Digital Marketing Agency, Goa
        </p>
      </section>
    </div>
  );
}
