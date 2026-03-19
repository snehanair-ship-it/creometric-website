"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How much does digital marketing cost in Goa?",
    answer:
      "Basic packages start around \u20B915,000\u2013\u20B925,000/month. Comprehensive strategies range from \u20B940,000\u2013\u20B91,00,000+/month depending on goals and scope.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "Most businesses see measurable improvements within 3\u20136 months. Competitive industries may take 6\u201312 months for significant results.",
  },
  {
    question: "What services does Creometric offer?",
    answer:
      "SEO, Social Media Management, PPC/Google Ads, Website Design, Content Marketing, and Web Analytics \u2014 all under one roof.",
  },
  {
    question: "Do you work with businesses outside Goa?",
    answer:
      "Absolutely! While we\u2019re based in Goa, we work with clients across India and globally through our parent company Kilowott.",
  },
  {
    question: "What makes Creometric different?",
    answer:
      "We\u2019re backed by Kilowott\u2019s full-stack capabilities \u2014 software, design, and marketing. No vanity metrics, just transparent ROI-focused strategies.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28 px-6 bg-[#0A0A0A]" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="w-10 h-[3px] bg-orange-500 rounded-full" />
            <span className="text-xs font-bold text-orange-500 uppercase tracking-[0.2em] font-inter">
              FAQ
            </span>
          </div>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-sora" style={{ letterSpacing: "-0.025em" }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-0 divide-y divide-[#1A1A1A]">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;

            return (
              <div key={i}>
                <button
                  id={buttonId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 rounded-sm"
                >
                  <span className="font-semibold text-base text-white pr-4 font-inter">
                    {faq.question}
                  </span>
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-5 h-5 shrink-0 text-[#525252] transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                >
                  {isOpen && (
                    <div className="pb-6 text-sm text-[#8A8A8A] leading-relaxed font-inter" style={{ lineHeight: "1.6" }}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
