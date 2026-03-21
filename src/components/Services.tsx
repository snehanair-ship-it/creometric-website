"use client";

import Link from "next/link";

const services = [
  {
    title: "AI-Powered SEO",
    description: "Predictive keyword targeting, automated content optimization, and AI-driven link strategies that outrank competitors before they even see you coming.",
    href: "/service/search-engine-optimisation/",
    metric: "+340% avg traffic growth",
    color: "orange",
    icon: (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
  {
    title: "Intelligent Web Design",
    description: "AI-optimized, conversion-focused websites with smart layouts, predictive UX, and performance tuning that turns every visitor into a lead.",
    href: "/service/website-design/",
    metric: "3.2s → 0.8s load time",
    color: "blue",
    icon: (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
      </svg>
    ),
  },
  {
    title: "AI Social Intelligence",
    description: "Machine-learning-powered content scheduling, sentiment analysis, and audience targeting that builds communities on autopilot.",
    href: "/service/social-media-management/",
    metric: "4.8x engagement lift",
    color: "purple",
    icon: (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    ),
  },
  {
    title: "Smart Ad Optimization",
    description: "AI-driven bid management, predictive audience targeting, and real-time campaign optimization that maximizes every rupee of ad spend.",
    href: "/service/pay-per-click/",
    metric: "5.2x average ROAS",
    color: "yellow",
    icon: (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
      </svg>
    ),
  },
  {
    title: "AI Content Engine",
    description: "Data-driven content strategy powered by topic clustering, search intent analysis, and AI-assisted creation that ranks and converts.",
    href: "/service/content-marketing/",
    metric: "2.1M+ impressions",
    color: "pink",
    icon: (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
  },
  {
    title: "Predictive Analytics",
    description: "AI-powered dashboards, anomaly detection, and predictive modeling that turns raw data into your next growth move.",
    href: "/service/web-analytics/",
    metric: "100% full-funnel tracking",
    color: "cyan",
    icon: (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
];

const colorMap: Record<string, { iconBg: string; iconColor: string; badgeBg: string; badgeText: string }> = {
  orange: { iconBg: "bg-orange-500/10", iconColor: "text-orange-500", badgeBg: "bg-green-500/10", badgeText: "text-green-400" },
  blue: { iconBg: "bg-blue-500/10", iconColor: "text-blue-400", badgeBg: "bg-blue-500/10", badgeText: "text-blue-400" },
  purple: { iconBg: "bg-purple-500/10", iconColor: "text-purple-400", badgeBg: "bg-purple-500/10", badgeText: "text-purple-400" },
  yellow: { iconBg: "bg-yellow-500/10", iconColor: "text-yellow-500", badgeBg: "bg-yellow-500/10", badgeText: "text-yellow-500" },
  pink: { iconBg: "bg-pink-500/10", iconColor: "text-pink-400", badgeBg: "bg-pink-500/10", badgeText: "text-pink-400" },
  cyan: { iconBg: "bg-cyan-500/10", iconColor: "text-cyan-400", badgeBg: "bg-cyan-500/10", badgeText: "text-cyan-400" },
};

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 px-6 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="w-10 h-[3px] bg-orange-500 rounded-full" />
            <span className="text-xs font-bold text-orange-500 uppercase tracking-[0.2em] font-inter">
              AI-Powered Solutions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-sora" style={{ letterSpacing: "-0.025em" }}>
            Intelligent Marketing That Learns and Adapts
          </h2>
          <p className="text-[#8A8A8A] mt-4 max-w-xl mx-auto text-base font-inter">
            AI-powered tools and strategies that optimize in real time — so every campaign gets smarter
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => {
            const colors = colorMap[service.color];
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] p-8 hover:border-[#3A3A3A] transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${colors.iconBg} ${colors.iconColor} flex items-center justify-center mb-5`}>
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-sora" style={{ letterSpacing: "-0.01em" }}>
                  {service.title}
                </h3>
                <p className="text-[#8A8A8A] text-sm leading-relaxed mb-5 font-inter" style={{ lineHeight: "1.6" }}>
                  {service.description}
                </p>

                <div className={`inline-flex items-center rounded-full ${colors.badgeBg} px-3 py-1.5`}>
                  <span className={`text-xs font-semibold ${colors.badgeText} font-inter`}>{service.metric}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
