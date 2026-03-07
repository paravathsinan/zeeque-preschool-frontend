"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

function AnimatedNumber({ value }: { value: string }) {
  const numMatches = value.match(/\d+/);
  const numericValue = numMatches ? parseInt(numMatches[0], 10) : 0;
  const suffix = value.replace(/\d+/g, "");

  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      if (start === end) return;

      const totalDuration = 2500;
      let startTime: number;

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / totalDuration, 1);

        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(easeProgress * end));

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [numericValue, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsSection() {
  const stats = [
    { value: "4", label: "Countries" },
    { value: "152", label: "Schools" },
    { value: "15000", label: "Happy Students" },
    { value: "2200", label: "Trained Teachers" },
  ];

  return (
    <section className="py-10 lg:py-16 bg-[#f9f9f9] dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-4 xl:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-white/60 dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-gray-200/40 dark:border-slate-700/40 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group"
            >
              <div className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl mb-2 text-[#222] dark:text-white group-hover:text-[#EF4225] transition-colors duration-300">
                <AnimatedNumber value={value} />
              </div>
              <div className="w-8 h-0.5 bg-[#EF4225]/60 mx-auto mb-3 rounded-full" />
              <div className="font-body font-medium text-gray-500 dark:text-gray-400 text-[15px] group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
