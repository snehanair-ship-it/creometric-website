import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Case Studies | Creometric — Real Results for Real Businesses",
  description:
    "See how Creometric helped businesses in Goa grow with digital marketing. Real case studies with measurable results.",
};

const caseStudies = [
  {
    client: "Andrade Dental Clinic",
    industry: "Healthcare",
    service: "SEO + Google Ads",
    result: "3x increase in online enquiries within 4 months",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    description:
      "Dr. Neil David Andrade needed more patients finding his clinic online. We implemented a local SEO strategy targeting dental keywords in Goa, combined with Google Ads campaigns for high-intent searches. The result was an immediate increase in online enquiries and appointment bookings.",
    metrics: [
      { label: "Online Enquiries", value: "3x" },
      { label: "Google Rankings", value: "Top 3" },
      { label: "Cost per Lead", value: "-45%" },
    ],
  },
  {
    client: "Shai-N Dance Academy",
    industry: "Education",
    service: "Social Media Management",
    result: "200% growth in student enrollments via Instagram",
    image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&q=80",
    description:
      "Neha Malhotra's dance academy was well-known locally but had minimal digital presence. We built a content strategy around short-form dance videos, student showcases, and behind-the-scenes content. Within 6 months, the academy saw a 200% growth in new student enrollments driven by social media.",
    metrics: [
      { label: "Enrollments", value: "+200%" },
      { label: "Instagram Followers", value: "5K+" },
      { label: "Engagement Rate", value: "8.5%" },
    ],
  },
  {
    client: "Henry's Cocktails",
    industry: "Food & Beverage",
    service: "Social Media + Content Marketing",
    result: "Built brand from zero to 10K followers in 5 months",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
    description:
      "Henry Fernandes wanted to establish his cocktail brand in Goa's competitive F&B scene. We created a visually-driven content strategy with recipe videos, mixology tips, and event coverage. The brand went from zero to a loyal following, driving both online orders and event bookings.",
    metrics: [
      { label: "Followers", value: "10K+" },
      { label: "Monthly Reach", value: "50K+" },
      { label: "Event Bookings", value: "+150%" },
    ],
  },
  {
    client: "Goa Tourism Partner",
    industry: "Tourism & Hospitality",
    service: "SEO + Website Design",
    result: "85% increase in organic traffic within 6 months",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
    description:
      "A leading Goa tourism operator needed to compete with larger aggregators in search results. We redesigned their website for speed and user experience, implemented technical SEO, and created location-specific content. Organic traffic increased by 85% and direct bookings doubled.",
    metrics: [
      { label: "Organic Traffic", value: "+85%" },
      { label: "Direct Bookings", value: "2x" },
      { label: "Page Load Time", value: "1.8s" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-12 px-6 text-center">
        <p className="text-sm font-medium text-orange-500 uppercase tracking-wide mb-3">
          Case Studies
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Real Results. Real Businesses.
        </h1>
        <p className="text-lg text-[#8A8A8A] max-w-2xl mx-auto">
          See how we&apos;ve helped businesses across Goa achieve measurable
          growth through digital marketing.
        </p>
      </section>

      {/* Case Studies */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {caseStudies.map((study) => (
            <div
              key={study.client}
              className="rounded-2xl border border-[#2A2A2A] overflow-hidden"
            >
              <div className="relative h-48 sm:h-56">
                <Image
                  src={study.image}
                  alt={study.client}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
              </div>
              <div className="p-5 sm:p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                  <span className="text-xs font-medium text-[#525252] bg-[#1A1A1A] px-3 py-1 rounded-full">
                    {study.service}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-2">{study.client}</h2>
                <p className="text-orange-500 font-medium mb-4">
                  {study.result}
                </p>
                <p className="text-[#8A8A8A] leading-relaxed mb-6">
                  {study.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {study.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="text-center bg-[#0F0F0F] rounded-xl p-4"
                    >
                      <p className="text-2xl font-bold text-white">
                        {metric.value}
                      </p>
                      <p className="text-xs text-[#525252] mt-1">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-orange-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Want Results Like These?
        </h2>
        <p className="text-orange-100 mb-8 max-w-lg mx-auto">
          Get a free audit and find out exactly how we can grow your business.
        </p>
        <a
          href="/contact-us/"
          className="inline-block rounded-full bg-[#1A1A1A] text-orange-500 px-8 py-3 text-sm font-semibold hover:bg-orange-500/10 transition-colors"
        >
          Get Your Free Audit
        </a>
      </section>
    </div>
  );
}
