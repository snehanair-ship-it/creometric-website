"use client";

const testimonials = [
  {
    quote: "Creometric helped my dental practice scale new heights... instant increase in online enquiries.",
    name: "Neil David Andrade",
    company: "Andrade Dental Clinic",
    initials: "NA",
  },
  {
    quote: "Hats off to the awesome team. I credit them for the growth of my Dance School.",
    name: "Neha Malhotra",
    company: "Shai-N Dance Academy",
    initials: "NM",
  },
  {
    quote: "Really appreciate you for helping me grow my business to the next level.",
    name: "Henry Fernandes",
    company: "Henry's Cocktails",
    initials: "HF",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-medium text-orange-500 uppercase tracking-widest text-center mb-3">
          Testimonials
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
          Real feedback from real businesses we&apos;ve helped grow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative rounded-2xl border border-gray-200/60 bg-gradient-to-b from-white to-gray-50/50 p-8 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Large quote mark */}
              <span className="text-6xl font-serif text-orange-200 leading-none block mb-4">
                &ldquo;
              </span>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                {t.quote}
              </p>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-orange-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
