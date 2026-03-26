"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        title: "Apply for Admission",
        description: "Begin your child's joyful learning adventure today.",
        buttonText: "Apply Now",
        buttonHref: "https://admission.zeeque.in/",
        glowColor: "rgba(245,158,11,0.25)",
        hoverGlow: "rgba(245,158,11,0.45)",
        cardBg: "bg-gradient-to-br from-amber-50/60 via-white/80 to-amber-50/40 dark:from-slate-800/80 dark:via-slate-800/60 dark:to-slate-800/80",
        cardBorder: "border-amber-200/40 dark:border-amber-500/15",
        btnClass: "bg-[#ffb606] hover:bg-[#ffa000] text-white shadow-[4px_4px_0_0_#ef4225] hover:shadow-[2px_2px_0_0_#ef4225] hover:translate-y-[2px] hover:translate-x-[2px]",
    },
    {
        title: "Open Your Zeeque Preschool Franchise",
        description: "Join 152+ successful branches to grow your own trusted preschool.",
        buttonText: "Contact Now",
        buttonHref: "https://franchise.zeeque.in/",
        glowColor: "rgba(245,158,11,0.25)",
        hoverGlow: "rgba(245,158,11,0.45)",
        cardBg: "bg-gradient-to-br from-emerald-50/60 via-white/80 to-emerald-50/40 dark:from-slate-800/80 dark:via-slate-800/60 dark:to-slate-800/80",
        cardBorder: "border-emerald-200/40 dark:border-emerald-500/15",
        btnClass: "bg-[#ffb606] hover:bg-[#ffa000] text-white shadow-[4px_4px_0_0_#ef4225] hover:shadow-[2px_2px_0_0_#ef4225] hover:translate-y-[2px] hover:translate-x-[2px]",
    },
    {
        title: "Join as a Teacher",
        description: "Inspire young minds and grow with our passionate education family.",
        buttonText: "Join Now",
        buttonHref: "/teacher-trainees",
        glowColor: "rgba(245,158,11,0.25)",
        hoverGlow: "rgba(245,158,11,0.45)",
        cardBg: "bg-gradient-to-br from-amber-50/60 via-white/80 to-amber-50/40 dark:from-slate-800/80 dark:via-slate-800/60 dark:to-slate-800/80",
        cardBorder: "border-amber-200/40 dark:border-amber-500/15",
        btnClass: "bg-[#ffb606] hover:bg-[#ffa000] text-white shadow-[4px_4px_0_0_#ef4225] hover:shadow-[2px_2px_0_0_#ef4225] hover:translate-y-[2px] hover:translate-x-[2px]",
    }
];

export default function ChooseNextStep() {
    return (
        <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50/50 to-white dark:from-slate-950 dark:to-slate-900 overflow-hidden relative">
            {/* Subtle background decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-blue-200/15 dark:bg-blue-500/5 blur-3xl" />
                <div className="absolute bottom-20 right-[10%] w-64 h-64 rounded-full bg-emerald-200/15 dark:bg-emerald-500/5 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-amber-200/10 dark:bg-amber-500/5 blur-3xl" />
            </div>

            <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <div className="text-amber-600 dark:text-amber-400 font-body font-semibold text-sm mb-5 flex items-center gap-2 bg-amber-50/80 dark:bg-amber-900/20 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-amber-200/50 dark:border-amber-700/30 w-fit mx-auto px-4">
                        <span>Get Started</span>
                    </div>
                    <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-[#222] dark:text-white mb-6">
                        Choose Your <span className="text-primary">Next Step</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed">
                        Select one of the options below to continue your journey with Zeeque Preschool.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.15 + (index * 0.12), ease: "easeOut" }}
                            className={`group flex flex-col items-center text-center p-8 sm:p-10 rounded-[32px] ${step.cardBg} backdrop-blur-xl border ${step.cardBorder} relative overflow-hidden transition-all duration-500 hover:-translate-y-3`}
                            style={{
                                boxShadow: `0 8px 40px -12px ${step.glowColor}, 0 0 0 1px rgba(255,255,255,0.1) inset`,
                            }}
                            whileHover={{
                                boxShadow: `0 20px 60px -12px ${step.hoverGlow}, 0 0 0 1px rgba(255,255,255,0.2) inset`,
                            }}
                        >
                            {/* Content */}
                            <h3 className="font-heading font-extrabold text-[22px] lg:text-[24px] text-[#222] dark:text-white mb-3 relative z-10 leading-tight">
                                {step.title}
                            </h3>

                            <p className="text-gray-500 dark:text-gray-400 mb-10 flex-grow relative z-10 font-body text-[15px] leading-relaxed max-w-[280px]">
                                {step.description}
                            </p>

                            {/* CTA Button */}
                            <div className="relative z-10 mt-auto w-full">
                                <Link
                                    href={step.buttonHref}
                                    className={`inline-flex items-center justify-center gap-2.5 w-full px-8 py-3 rounded-2xl font-body font-bold text-[18px] tracking-wide ${step.btnClass} transition-all duration-300 relative overflow-hidden border-none cursor-pointer`}
                                >
                                    {/* Shimmer effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                                    <span className="relative z-10">{step.buttonText}</span>
                                    <ArrowRight strokeWidth={2.5} className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
