"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const toggleVisibility = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progressHeight = (window.scrollY / totalHeight) * 100;
        setProgress(progressHeight);

        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const radius = 24;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-[6.5rem] right-8 z-[100] w-14 h-14 flex items-center justify-center cursor-pointer group"
                    aria-label="Scroll to top"
                >
                    <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 60 60">
                        {/* Background Circle */}
                        <circle
                            cx="30"
                            cy="30"
                            r={radius}
                            fill="transparent"
                            stroke="currentColor"
                            strokeWidth="3"
                            className="text-gray-100 dark:text-slate-800"
                        />
                        {/* Progress Circle */}
                        <motion.circle
                            cx="30"
                            cy="30"
                            r={radius}
                            fill="transparent"
                            stroke="#ef4225"
                            strokeWidth="3"
                            strokeDasharray={circumference}
                            animate={{ strokeDashoffset: offset }}
                            transition={{ type: "spring", damping: 20, stiffness: 100 }}
                            strokeLinecap="round"
                            className="drop-shadow-[0_0_5px_rgba(239,66,37,0.3)]"
                        />
                    </svg>

                    {/* Arrow Icon */}
                    <div className="relative z-10 flex items-center justify-center group-hover:animate-bounce-subtle">
                        <ArrowUp className="w-6 h-6 text-primary stroke-[3]" />
                    </div>

                    <style jsx global>{`
            @keyframes bounce-subtle {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-4px); }
            }
            .group-hover\\:animate-bounce-subtle {
              animation: bounce-subtle 0.8s ease-in-out infinite;
            }
          `}</style>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
