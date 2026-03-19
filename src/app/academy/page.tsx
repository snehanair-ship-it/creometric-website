import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Academy | Creometric — Learn Digital Marketing",
  description:
    "Free digital marketing resources, guides, and tutorials from Creometric. Learn SEO, social media, PPC, and more.",
};

const resources = [
  {
    title: "SEO Starter Guide for Small Businesses",
    category: "SEO",
    description:
      "Everything you need to know to get your business ranking on Google. From keyword research to on-page optimization, this guide covers the fundamentals of SEO for local businesses in Goa.",
    level: "Beginner",
  },
  {
    title: "Social Media Content Calendar Template",
    category: "Social Media",
    description:
      "A ready-to-use content calendar template to plan and schedule your social media posts. Includes best posting times for Indian audiences and content ideas for every day of the week.",
    level: "Beginner",
  },
  {
    title: "Google Ads for Local Businesses",
    category: "PPC",
    description:
      "Learn how to set up, manage, and optimize Google Ads campaigns for your local business. Covers campaign structure, keyword bidding, ad copy, and budget optimization.",
    level: "Intermediate",
  },
  {
    title: "Website Speed Optimization Checklist",
    category: "Web Design",
    description:
      "A step-by-step checklist to improve your website loading speed. Faster websites rank better on Google and convert more visitors into customers.",
    level: "Intermediate",
  },
  {
    title: "Content Marketing Playbook",
    category: "Content",
    description:
      "How to create content that attracts, engages, and converts your target audience. Includes frameworks for blog posts, case studies, and lead magnets.",
    level: "Advanced",
  },
  {
    title: "Analytics & Reporting Dashboard Guide",
    category: "Analytics",
    description:
      "Learn how to set up Google Analytics 4, track key metrics, and build custom dashboards to measure your marketing ROI effectively.",
    level: "Intermediate",
  },
];

const levelColors: Record<string, string> = {
  Beginner: "bg-green-500/10 text-green-400",
  Intermediate: "bg-blue-500/10 text-blue-400",
  Advanced: "bg-purple-500/10 text-purple-400",
};

export default function Academy() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-12 px-6 text-center">
        <p className="text-sm font-medium text-orange-500 uppercase tracking-wide mb-3">
          Academy
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Learn Digital Marketing
        </h1>
        <p className="text-lg text-[#8A8A8A] max-w-2xl mx-auto">
          Free guides, templates, and resources to help you grow your business
          online. Created by the Creometric team.
        </p>
      </section>

      {/* Resources */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="rounded-2xl border border-[#2A2A2A] p-8 hover:shadow-lg hover:shadow-orange-500/5 transition-shadow flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-medium text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full">
                  {resource.category}
                </span>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${
                    levelColors[resource.level]
                  }`}
                >
                  {resource.level}
                </span>
              </div>
              <h2 className="text-lg font-semibold mb-2">{resource.title}</h2>
              <p className="text-[#8A8A8A] text-sm leading-relaxed mb-4 flex-1">
                {resource.description}
              </p>
              <span className="text-sm font-medium text-white">
                Coming Soon &rarr;
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#0F0F0F] text-center">
        <h2 className="text-2xl font-bold mb-3">
          Want Personalized Guidance?
        </h2>
        <p className="text-[#8A8A8A] mb-6 max-w-lg mx-auto">
          Our team can create a custom growth plan tailored to your business.
          Get started with a free audit.
        </p>
        <Link
          href="/contact-us/"
          className="inline-block rounded-full bg-orange-500 text-white px-8 py-3 text-sm font-medium hover:bg-orange-600 transition-colors"
        >
          Get a Free Audit
        </Link>
      </section>
    </div>
  );
}
