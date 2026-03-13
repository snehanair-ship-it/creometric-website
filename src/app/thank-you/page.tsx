import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Creometric",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-[family-name:var(--font-geist-sans)]">
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
          <p className="text-lg text-gray-600 mb-2">
            We&apos;ll review your website and call you within{" "}
            <strong>24 hours</strong>.
          </p>
          <a
            href="tel:+919145246464"
            className="inline-block mt-4 text-2xl sm:text-3xl font-bold hover:underline"
          >
            +91 91452 46464
          </a>
          <p className="text-sm text-gray-500 mt-1">
            Can&apos;t wait? Call us directly.
          </p>
        </div>
      </section>

      {/* Calendly Placeholder */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Book a Call at Your Convenience
          </h2>
          <p className="text-gray-600 mb-8">
            Pick a time that works for you and we&apos;ll walk you through your
            custom growth plan.
          </p>
          {/*
            TODO: Replace this placeholder with your Calendly embed.
            Example:
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/YOUR-LINK"
              style={{ minWidth: 320, height: 700 }}
            />
            <script src="https://assets.calendly.com/assets/external/widget.js" async />
          */}
          <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-gray-400">
            <p className="text-lg font-medium">Calendly Embed</p>
            <p className="text-sm mt-1">
              Add your Calendly URL here
            </p>
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
              href="/blog/seo-tips-for-small-businesses"
              className="block rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                SEO
              </p>
              <h3 className="text-lg font-semibold mb-2">
                10 SEO Tips Every Small Business in Goa Should Know
              </h3>
              <p className="text-sm text-gray-600">
                Simple, actionable strategies to get your business found on
                Google.
              </p>
            </a>
            <a
              href="/blog/social-media-strategy-2024"
              className="block rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                Social Media
              </p>
              <h3 className="text-lg font-semibold mb-2">
                How to Build a Social Media Strategy That Actually Works
              </h3>
              <p className="text-sm text-gray-600">
                A step-by-step guide to growing your brand on Instagram and
                Facebook.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-gray-900 text-white text-center">
        <a
          href="tel:+919145246464"
          className="text-2xl sm:text-3xl font-bold hover:underline"
        >
          +91 91452 46464
        </a>
        <p className="text-gray-400 mt-2 text-sm">
          Creometric &mdash; Digital Marketing Agency, Goa
        </p>
      </section>
    </div>
  );
}
