"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const stats = [
  { target: 347, suffix: "K+", label: "Audience Reached via AI" },
  { target: 250, suffix: "+", label: "AI-Optimized Campaigns" },
  { target: 284000, suffix: "", label: "Data Points Analyzed", format: "indian" as const },
  { target: 5, suffix: " Cr+", label: "Revenue Generated" },
];

function formatNumber(n: number, format?: "indian") {
  if (format === "indian") {
    const s = Math.floor(n).toString();
    if (s.length <= 3) return s;
    const last3 = s.slice(-3);
    const rest = s.slice(0, -3);
    const formatted = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
    return formatted + "," + last3;
  }
  return Math.floor(n).toString();
}

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  const startAnimation = useCallback(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [target, duration]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [startAnimation]);

  return { count, ref };
}

export default function Stats() {
  return (
    <section className="py-16 sm:py-20 px-6 bg-[#0F0F0F] relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-[#2A2A2A]">
          {stats.map((item, i) => (
            <StatItem key={item.label} {...item} isFirst={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({
  target,
  suffix,
  label,
  format,
  isFirst,
}: {
  target: number;
  suffix: string;
  label: string;
  format?: "indian";
  isFirst?: boolean;
}) {
  const { count, ref } = useCountUp(target);

  return (
    <div ref={ref} className="text-center py-8 px-4">
      <p className="text-3xl sm:text-4xl lg:text-5xl font-bold tabular-nums tracking-tight font-sora">
        {isFirst ? (
          <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
            {formatNumber(count, format)}{suffix}
          </span>
        ) : (
          <span className="text-white">
            {formatNumber(count, format)}{suffix}
          </span>
        )}
      </p>
      <p className="text-sm text-[#525252] mt-2 font-medium font-inter">{label}</p>
    </div>
  );
}
