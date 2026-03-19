import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Creometric — Digital Marketing Agency in Goa",
  description:
    "Creometric is the digital marketing arm of Kilowott, a results-driven firm with 10+ years of experience. Based in Goa, we deliver measurable growth through SEO, social media, PPC and web design.",
};

const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "We deep-dive into your business, audience, and competitors to understand what makes you unique.",
    icon: (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Strategize",
    description:
      "We craft a custom roadmap with clear goals, timelines, and KPIs — because true success comes when strategy and execution work in tandem.",
    icon: (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Execute",
    description:
      "Our team brings the strategy to life — from content and ads to SEO and design — delivering end-to-end solutions from ideation through implementation.",
    icon: (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Optimize",
    description:
      "We track every metric, A/B test relentlessly, and refine until the numbers deliver measurable outcomes and tangible business growth.",
    icon: (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
];

const values = [
  {
    title: "Strategy Meets Execution",
    description: "True business success is achieved when strategy and execution work in tandem. We do both.",
  },
  {
    title: "Accountability & Excellence",
    description: "We own every campaign like it's our own business — transparent reporting, no fluff.",
  },
  {
    title: "Rooted in Goa",
    description: "Our production base is in Goa, chosen for its culture, creativity, and work-life balance.",
  },
  {
    title: "End-to-End Solutions",
    description: "From ideation through implementation, we handle every step so you can focus on your business.",
  },
];

const capabilities = [
  "SEO & Organic Growth",
  "Social Media Management",
  "PPC & Google Ads",
  "Website Design & Development",
  "Content Marketing",
  "Web Analytics & Reporting",
];

export default function About() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0A0A]" />
        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-orange-500 uppercase tracking-widest mb-4 font-inter">
              About Creometric
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 font-sora" style={{ letterSpacing: "-0.04em" }}>
              Powering Impactful Results
            </h1>
            <p className="text-lg text-[#8A8A8A] leading-relaxed max-w-2xl font-inter" style={{ lineHeight: "1.6" }}>
              Creometric is the digital marketing arm of{" "}
              <a
                href="https://kilowott.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 transition-colors font-medium"
              >
                Kilowott
              </a>
              , a dynamic, results-driven firm with over 10 years of experience.
              Founded in 2014 and headquartered in Goa, we specialise in turning
              digital presence into measurable business growth.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-80 lg:h-96">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Creative team collaborating on digital strategy"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* Our Story — timeline style */}
      <section className="py-16 px-6 bg-[#0F0F0F]">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium text-orange-500 uppercase tracking-widest text-center mb-3">
            Our Story
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            From Goa to Global
          </h2>

          <div className="space-y-0 relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-300 via-orange-200 to-transparent sm:-translate-x-px" />

            {[
              {
                year: "2014",
                title: "Kodework is Born",
                description:
                  "Started as a web development company with a vision to deliver world-class digital solutions from Goa.",
              },
              {
                year: "2018",
                title: "Creometric Joins the Family",
                description:
                  "Acquired Creometric to bring full-service digital marketing capabilities — SEO, social media, PPC, and content.",
              },
              {
                year: "2020",
                title: "Expanding Horizons",
                description:
                  "Added Ninestack (software) and FatHamster (animation) to offer end-to-end digital solutions under one roof.",
              },
              {
                year: "Today",
                title: "Kilowott — One Unified Force",
                description:
                  "Operating across Nordics, EU, APAC, EMEA, and USA — serving Telecom, Fintech, Retail, Media, and more.",
              },
            ].map((item, i) => (
              <div
                key={item.year}
                className={`relative flex items-start gap-6 sm:gap-0 pb-10 last:pb-0 ${
                  i % 2 === 0
                    ? "sm:flex-row"
                    : "sm:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-orange-400 border-2 border-white -translate-x-1.5 sm:-translate-x-1.5 mt-1.5 z-10" />

                {/* Content */}
                <div className={`ml-12 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                  <span className="text-xs font-mono text-orange-400 tracking-wider">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-semibold mt-1 mb-1">{item.title}</h3>
                  <p className="text-sm text-[#525252] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden sm:block sm:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Approach — asymmetric cards */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#2A2A2A]/60 bg-gradient-to-br from-white to-gray-50/50 p-8 sm:p-10">
            <div className="w-10 h-10 rounded-lg bg-orange-500/15 flex items-center justify-center mb-5">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-orange-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-3">Our Mission</h2>
            <p className="text-[#8A8A8A] leading-relaxed text-sm">
              To empower businesses with data-driven digital strategies that
              deliver measurable growth. We combine creativity with analytics to
              build marketing that actually works — ensuring every campaign
              drives tangible business outcomes.
            </p>
          </div>
          <div className="rounded-2xl border border-[#2A2A2A]/60 bg-gradient-to-br from-white to-gray-50/50 p-8 sm:p-10">
            <div className="w-10 h-10 rounded-lg bg-orange-500/15 flex items-center justify-center mb-5">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-orange-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-3">Our Approach</h2>
            <p className="text-[#8A8A8A] leading-relaxed text-sm">
              We don&apos;t believe in cookie-cutter solutions. Every business
              gets a tailored strategy built around their unique goals, audience,
              and budget. Backed by Kilowott&apos;s full-stack capabilities in
              software, design, and animation, we deliver what standalone
              agencies can&apos;t.
            </p>
          </div>
        </div>
      </section>

      {/* Stats — minimal dark strip */}
      <section className="py-16 px-6 bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "10+", label: "Years of Experience" },
            { stat: "150+", label: "Clients Served" },
            { stat: "5", label: "Global Regions" },
            { stat: "7+", label: "Industries Covered" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-3xl sm:text-4xl font-bold text-orange-400">{item.stat}</p>
              <p className="text-sm text-[#525252] mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do — capability tags */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-orange-500 uppercase tracking-widest mb-3">
            Our Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            What We Bring to the Table
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {capabilities.map((cap) => (
              <span
                key={cap}
                className="px-5 py-2.5 rounded-full border border-[#2A2A2A] text-sm text-[#8A8A8A] hover:border-orange-300 hover:text-orange-500 transition-colors duration-300"
              >
                {cap}
              </span>
            ))}
          </div>
          <p className="text-[#525252] text-sm mt-8 max-w-xl mx-auto">
            Plus access to Kilowott&apos;s full ecosystem — software
            development, UI/UX design, animation, and consulting — for
            truly integrated digital solutions.
          </p>
        </div>
      </section>

      {/* How We Work — process steps */}
      <section className="py-16 sm:py-24 px-6 bg-[#0F0F0F]">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-orange-500 uppercase tracking-widest text-center mb-3">
            How We Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            From Brief to Results in Four Steps
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200" />

            {process.map((item) => (
              <div key={item.step} className="relative text-center group">
                {/* Step icon box */}
                <div className="w-20 h-20 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] group-hover:border-orange-300 mx-auto mb-6 flex items-center justify-center transition-colors duration-300 relative z-10">
                  <div className="text-[#525252] group-hover:text-orange-500 transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>
                <span className="text-xs font-mono text-orange-400 tracking-wider mb-2 block">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-[#525252] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values — minimal grid */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-orange-500 uppercase tracking-widest text-center mb-3">
            What We Stand For
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex items-start gap-4 p-6 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A]/60 hover:border-orange-200 transition-colors duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{v.title}</h3>
                  <p className="text-sm text-[#525252]">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part of Kilowott — badge section */}
      <section className="py-16 px-6 bg-[#0F0F0F]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
            Part of the Kilowott Family
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Backed by a Global Ecosystem
          </h2>
          <p className="text-[#8A8A8A] leading-relaxed max-w-2xl mx-auto">
            As part of Kilowott, Creometric has access to capabilities most
            agencies can only dream of — from custom software development and
            app engineering to animation and UI/UX design. When you work with
            us, you get the agility of a focused marketing team with the
            firepower of a full-scale digital firm.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs text-[#525252]">
            {[
              "Nordics",
              "EU",
              "APAC",
              "EMEA",
              "USA",
            ].map((region) => (
              <span
                key={region}
                className="px-3 py-1.5 rounded-full border border-[#2A2A2A] bg-[#1A1A1A]"
              >
                {region}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Grow Your Brand?</h2>
        <p className="text-[#8A8A8A] mb-8 max-w-lg mx-auto">
          Let&apos;s build something great together. No contracts, no
          commitments — just results.
        </p>
        <a
          href="/contact-us"
          className="inline-block rounded-full bg-orange-500 text-white px-8 py-3 text-sm font-medium hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
}
