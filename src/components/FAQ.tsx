"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How much does digital marketing cost in Goa?",
    answer:
      "Basic packages for small businesses start around \u20B915,000\u2013\u20B925,000 per month for SEO or social media management. Comprehensive strategies covering SEO, PPC, social media and content marketing typically range from \u20B940,000\u2013\u20B91,00,000+ per month. Contact us for a free audit and custom quote.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "Most businesses start seeing measurable improvements in organic traffic and rankings within 3\u20136 months. Competitive industries may take 6\u201312 months. We provide monthly reports so you can track progress from day one.",
  },
  {
    question: "What services does Creometric offer?",
    answer:
      "We offer SEO, Social Media Management, PPC / Google Ads, Website Design & Development, Content Marketing, and Web Analytics. We serve local businesses in Goa and clients across India.",
  },
  {
    question: "Do you work with businesses outside Goa?",
    answer:
      "Yes! While we\u2019re based in Goa, we work with clients across India and internationally. All our services can be delivered remotely with regular video calls and reporting.",
  },
  {
    question: "What makes Creometric different from other agencies?",
    answer:
      "We\u2019re a results-first agency. Every strategy is backed by data, and we measure success by your ROI \u2014 not vanity metrics. With 7+ years in the industry and 250+ projects completed, we know what works.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Got questions? We&apos;ve got answers.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`w-5 h-5 shrink-0 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
