import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Creometric — Digital Marketing Agency in Goa",
  description:
    "Get in touch with Creometric. Call +91 91452 46464 or fill out the form. We reply within 24 hours.",
};

export default function Contact() {
  return (
    <div className="bg-white text-gray-900 font-[family-name:var(--font-geist-sans)]">
      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-12 px-6 text-center">
        <p className="text-sm font-medium text-orange-500 uppercase tracking-wide mb-3">
          Contact Us
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Let&apos;s Talk Growth
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Have a project in mind? We reply within <strong>24 hours</strong>.
        </p>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <ContactForm />

          {/* Info + Map */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                  Phone
                </h3>
                <a
                  href="tel:+919145246464"
                  className="text-xl font-bold hover:underline"
                >
                  +91 91452 46464
                </a>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                  Email
                </h3>
                <a
                  href="mailto:hello@creometric.com"
                  className="text-xl font-bold hover:underline"
                >
                  hello@creometric.com
                </a>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                  Office
                </h3>
                <p className="text-gray-700">
                  Goa, India
                </p>
              </div>
              <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 rounded-full px-4 py-2 text-sm font-medium">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                We reply within 24 hours
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div aria-label="Business location map" className="w-full aspect-video bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-10 h-10 mb-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <p className="text-sm font-medium">Google Maps Embed</p>
              <p className="text-xs mt-1">Add your embed URL here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
