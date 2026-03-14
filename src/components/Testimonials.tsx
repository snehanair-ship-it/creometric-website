"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "Creometric helped my dental practice scale new heights... instant increase in online enquiries.",
    name: "Neil David Andrade",
    company: "Andrade Dental Clinic",
  },
  {
    quote:
      "Hats off to the awesome team. I credit them for the growth of my Dance School.",
    name: "Neha Malhotra",
    company: "Shai-N Dance Academy",
  },
  {
    quote:
      "Really appreciate you for helping me grow my business to the next level.",
    name: "Henry Fernandes",
    company: "Henry's Cocktails",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          What Our Clients Say
        </h2>

        <div className="relative">
          <blockquote className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-8">
            &ldquo;{testimonials[current].quote}&rdquo;
          </blockquote>
          <p className="font-semibold text-gray-900">
            {testimonials[current].name}
          </p>
          <p className="text-sm text-gray-500">
            {testimonials[current].company}
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-gray-900" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
