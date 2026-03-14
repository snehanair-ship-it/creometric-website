"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const stats = [
  { target: 347, suffix: "+", label: "People Reached" },
  { target: 250, suffix: "+", label: "Projects Completed" },
  { target: 284000, suffix: "", label: "Clicks Grabbed", format: "indian" as const },
  { target: 5, suffix: " Cr+", label: "ROI Generated" },
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
      // Ease-out curve for smooth deceleration
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
    <section className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item) => (
          <StatItem key={item.label} {...item} />
        ))}
      </div>
    </section>
  );
}

function StatItem({
  target,
  suffix,
  label,
  format,
}: {
  target: number;
  suffix: string;
  label: string;
  format?: "indian";
}) {
  const { count, ref } = useCountUp(target);

  return (
    <div ref={ref}>
      <p className="text-3xl sm:text-4xl font-bold text-orange-400 tabular-nums">
        {formatNumber(count, format)}
        {suffix}
      </p>
      <p className="text-sm text-gray-400 mt-1">{label}</p>
    </div>
  );
}
