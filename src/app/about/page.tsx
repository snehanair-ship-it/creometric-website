import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Creometric — Digital Marketing Agency in Goa",
  description:
    "Meet the Creometric team. Based in Goa since 2018, we help local businesses grow through digital marketing, SEO, social media and web design.",
};

const team = [
  { name: "Sneha Nair", role: "Founder & CEO" },
  { name: "Rahul Desai", role: "Head of SEO" },
  { name: "Priya Kamat", role: "Social Media Manager" },
  { name: "Arjun Naik", role: "Web Developer" },
];

export default function About() {
  return (
    <div className="bg-white text-gray-900 font-[family-name:var(--font-geist-sans)]">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-medium text-orange-500 uppercase tracking-wide mb-3">
            About Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Based in Goa Since 2018
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Creometric was born out of a simple belief: every business in Goa
            deserves world-class digital marketing. What started as a small team
            with big ideas has grown into a full-service agency trusted by
            businesses across the state and beyond.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To empower local businesses with data-driven digital strategies
              that deliver measurable growth. We combine creativity with
              analytics to build marketing that actually works — not just looks
              good.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
            <p className="text-gray-600 leading-relaxed">
              We don&apos;t believe in cookie-cutter solutions. Every business
              gets a tailored strategy built around their unique goals, audience,
              and budget. We treat your business like it&apos;s our own.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "7+", label: "Years in Business" },
            { stat: "150+", label: "Clients Served" },
            { stat: "500+", label: "Campaigns Launched" },
            { stat: "98%", label: "Client Retention" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-3xl sm:text-4xl font-bold">{item.stat}</p>
              <p className="text-sm text-gray-500 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet the Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-full aspect-square bg-gray-200 rounded-2xl mb-4 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-12 h-12 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </div>
                <p className="font-semibold text-sm">{member.name}</p>
                <p className="text-xs text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Brand?</h2>
        <p className="text-gray-600 mb-8">
          Let&apos;s build something great together.
        </p>
        <a
          href="/contact"
          className="inline-block rounded-full bg-orange-500 text-white px-8 py-3 text-sm font-medium hover:bg-orange-600 transition-colors"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
}
