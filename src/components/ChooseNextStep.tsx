"use client";

import Link from 'next/link';
import { ArrowRight, GraduationCap, Building, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        title: "Apply for Admission",
        description: "Start your learning journey by submitting your application today.",
        buttonText: "Apply Now",
        buttonHref: "/admission",
        buttonColor: "bg-[#0052ff] hover:bg-[#0043d1] text-white",
        buttonShadow: "shadow-[4px_4px_0_0_#002b85] hover:shadow-[2px_2px_0_0_#002b85]",
        cardStyle: "bg-blue-50/50 border-2 border-blue-100",
        icon: <GraduationCap className="w-10 h-10 text-[#0052ff]" strokeWidth={2} />,
        iconBg: "bg-blue-100",
    },
    {
        title: "Open Your ZeeQue Franchise",
        description: "Partner with us and grow your own ZeeQue branch with our support.",
        buttonText: "Contact Now",
        buttonHref: "/franchise",
        buttonColor: "bg-[#0b8641] hover:bg-[#097036] text-white",
        buttonShadow: "shadow-[4px_4px_0_0_#054421] hover:shadow-[2px_2px_0_0_#054421]",
        cardStyle: "bg-emerald-50/50 border-2 border-emerald-100 lg:-translate-y-4",
        icon: <Building className="w-10 h-10 text-[#0b8641]" strokeWidth={2} />,
        iconBg: "bg-emerald-100",
    },
    {
        title: "Join as a Teacher",
        description: "Become part of our teaching network and inspire the next generation of learners.",
        buttonText: "Join Now",
        buttonHref: "/careers",
        buttonColor: "bg-[#fbaf01] hover:bg-[#d99700] text-[#222]",
        buttonShadow: "shadow-[4px_4px_0_0_#a87500] hover:shadow-[2px_2px_0_0_#a87500]",
        cardStyle: "bg-amber-50/50 border-2 border-amber-100",
        icon: <BookOpen className="w-10 h-10 text-[#fbaf01]" strokeWidth={2} />,
        iconBg: "bg-amber-100",
    }
];

export default function ChooseNextStep() {
    return (
        <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden relative">
            <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-[#222] dark:text-white mb-6">
                        Choose Your <span className="text-primary">Next Step</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 font-body text-lg">
                        Select one of the options below to continue your journey with ZeeQue.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.2 + (index * 0.15), ease: "easeOut" }}
                            className={`group flex flex-col items-center text-center p-8 sm:p-10 rounded-[30px] transition-colors transition-shadow duration-300 ${step.cardStyle} dark:bg-slate-800 dark:border-slate-700 relative overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-3`}
                        >

                            <div className={`w-20 h-20 rounded-2xl ${step.iconBg} dark:bg-slate-700 flex items-center justify-center mb-8 relative z-10 transform group-hover:rotate-6 transition-transform duration-300`}>
                                {step.icon}
                            </div>

                            <h3 className="font-heading font-bold text-2xl lg:text-[26px] text-[#222] dark:text-white mb-4 relative z-10 leading-tight">
                                {step.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300 mb-10 flex-grow relative z-10 font-body text-[17px] leading-relaxed">
                                {step.description}
                            </p>

                            <div className="relative z-10 mt-auto">
                                <Link
                                    href={step.buttonHref}
                                    className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-[14px] font-heading font-extrabold text-[17px] transition-all ${step.buttonColor} ${step.buttonShadow} hover:translate-y-[2px] hover:translate-x-[2px] w-full`}
                                >
                                    {step.buttonText}
                                    <ArrowRight strokeWidth={3} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
