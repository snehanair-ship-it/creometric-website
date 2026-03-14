"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 347, suffix: "+", label: "People Reached" },
  { target: 250, suffix: "+", label: "Projects Completed" },
  { target: 284000, suffix: "", label: "Clicks Grabbed", format: "indian" },
  { target: 5, suffix: " Cr+", label: "ROI Generated" },
];

function formatNumber(n: number, format?: string) {
  if (format === "indian") {
    // Indian number format: 2,84,000
    const s = Math.floor(n).toString();
    if (s.length <= 3) return s;
    const last3 = s.slice(-3);
    const rest = s.slice(0, -3);
    const formatted = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
    return formatted + "," + last3;
  }
  return Math.floor(n).toLocaleString("en-IN");
}

function CountUp({
  target,
  suffix,
  format,
}: {
  target: number;
  suffix: string;
  format?: string;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref}>
      {formatNumber(count, format)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item) => (
          <div key={item.label}>
            <p className="text-3xl sm:text-4xl font-bold text-orange-400">
              <CountUp
                target={item.target}
                suffix={item.suffix}
                format={item.format}
              />
            </p>
            <p className="text-sm text-gray-400 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
