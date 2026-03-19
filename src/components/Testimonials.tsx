"use client";

const testimonials = [
  {
    quote: "Creometric transformed our online presence. We went from barely visible to fully booked within 4 months. Their SEO and social media work is exceptional.",
    name: "Neil David Andrade",
    company: "Andrade Dental Clinic",
    initials: "NA",
    role: "Founder",
    result: "+180% enquiries",
    color: "orange",
  },
  {
    quote: "The social media strategy they built for us was incredible. Our Instagram went from 200 followers to 5,000+ and student enrollments tripled.",
    name: "Neha Malhotra",
    company: "Shai-N Dance Academy",
    initials: "NM",
    role: "Director",
    result: "3x student sign-ups",
    color: "green",
  },
  {
    quote: "Their Google Ads campaigns delivered 5.2x return on ad spend in the first quarter. They truly understand how to maximize every rupee.",
    name: "Henry Fernandes",
    company: "Henry's Cocktails",
    initials: "HF",
    role: "Owner",
    result: "5.2x ROAS",
    color: "blue",
  },
];

const colorMap: Record<string, { badge: string; badgeText: string; avatar: string }> = {
  orange: { badge: "bg-orange-500/10", badgeText: "text-orange-500", avatar: "text-orange-500" },
  green: { badge: "bg-green-500/10", badgeText: "text-green-400", avatar: "text-green-400" },
  blue: { badge: "bg-blue-500/10", badgeText: "text-blue-400", avatar: "text-blue-400" },
};

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 px-6 bg-[#0F0F0F] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="w-10 h-[3px] bg-orange-500 rounded-full" />
            <span className="text-xs font-bold text-orange-500 uppercase tracking-[0.2em] font-inter">
              Client Results
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-sora" style={{ letterSpacing: "-0.025em" }}>
            Real Results for Real Businesses
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => {
            const colors = colorMap[t.color];
            return (
              <div
                key={t.name}
                className="group relative rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] p-8 lg:p-10 hover:border-[#3A3A3A] transition-all duration-300"
              >
                {/* Result badge */}
                <div className={`inline-flex items-center rounded-full ${colors.badge} px-4 py-2 mb-6`}>
                  <span className={`text-sm font-semibold ${colors.badgeText} font-inter`}>{t.result}</span>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#8A8A8A] leading-relaxed mb-8 text-[15px] font-inter" style={{ lineHeight: "1.7" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-[#242424] flex items-center justify-center text-sm font-semibold ${colors.avatar} font-inter`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm font-inter">{t.name}</p>
                    <p className="text-xs text-[#525252] font-inter">{t.company}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
