"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    { value: "4+", label: "Countries" },
    { value: "150+", label: "Schools" },
    { value: "15000+", label: "Happy Students" },
    { value: "2200+", label: "Trained Teachers" },
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-white">
      {/* Background Floating Icons */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image src="/images/assets/icons/Boy Student.svg" alt="" width={80} height={80} className="absolute top-[15%] left-[8%] rotate-[-15deg] opacity-10 animate-[pulse_6s_ease-in-out_infinite]" />
        <Image src="/images/assets/icons/Book pen.svg" alt="" width={60} height={60} className="absolute top-[40%] right-[30%] rotate-[10deg] opacity-10 animate-[pulse_5s_ease-in-out_infinite]" />
        <Image src="/images/assets/icons/Language.svg" alt="" width={90} height={90} className="absolute bottom-[10%] left-[40%] rotate-12 opacity-10 animate-[pulse_7s_ease-in-out_infinite]" />
        <Image src="/images/assets/icons/Trophy.svg" alt="" width={75} height={75} className="absolute top-[20%] right-[10%] rotate-[-20deg] opacity-10 animate-[pulse_6s_ease-in-out_infinite_1s]" />
        <Image src="/images/assets/icons/Library.svg" alt="" width={70} height={70} className="absolute bottom-[15%] right-[5%] rotate-6 opacity-10 animate-[pulse_8s_ease-in-out_infinite]" />
      </div>
      <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
        
        {/* Top Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 lg:mb-24">
            <h2 className="text-[#222] font-extrabold text-3xl md:text-4xl lg:text-[44px] leading-[1.15] uppercase max-w-lg tracking-tight">
                We Build A Strong Foundation For Your Child's Future
            </h2>
            
            <div className="flex flex-col items-start gap-6 pt-2 lg:pt-0 lg:ml-auto max-w-[450px]">
                <p className="text-gray-500 font-body text-base lg:text-[15px] leading-relaxed">
                    Whether it's interactive learning, a vibrant social environment, or captivating activities, we bring creativity and expertise to every child's growth.
                </p>
                <Link
                    href="/about-zeeque-preschool-kerala"
                    className="group inline-flex items-center gap-2 bg-[#FE3051] text-white px-8 py-3.5 rounded-full font-bold text-[15px] tracking-wide shadow-[4px_4px_0_0_#222] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#222] transition-all duration-300"
                >
                    Know More About us
                    <ArrowRight className="w-5 h-5 stroke-[3] group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 border-t border-gray-100 pt-12 lg:pt-16">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-start group"
            >
              <div className="font-body font-bold text-gray-500 text-xs sm:text-[13px] uppercase tracking-[0.1em] mb-3">
                {label}
              </div>
              <div className="font-extrabold tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[72px] text-[#222] group-hover:text-[#0060D6] transition-colors duration-300 leading-none">
                <AnimatedNumber value={value} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
