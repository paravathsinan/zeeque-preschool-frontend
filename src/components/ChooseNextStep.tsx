"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        title: "Apply for Admission",
        description: "Begin your child's joyful learning adventure today.",
        buttonText: "Apply Now",
        buttonHref: "/preschool-admission-kerala-2026#apply",
        icon: "/images/assets/icons/Boy Student.svg",
    },
    {
        title: "Open Your Zeeque Preschool Franchise",
        description: "Join 152+ successful branches to grow your own trusted preschool.",
        buttonText: "Contact Now",
        buttonHref: "/franchise",
        icon: "/images/assets/icons/Bag.svg",
    },
    {
        title: "Join as a Teacher",
        description: "Inspire young minds and grow with our passionate education family.",
        buttonText: "Join Now",
        buttonHref: "/teacher-trainees",
        icon: "/images/assets/icons/Teaching.svg",
    },
    {
        title: "Grade Stream Teacher Training",
        description: "Apply for our specialized training program for Grade Stream educators.",
        buttonText: "Apply Now",
        buttonHref: "/grade-stream-teacher-training-kerala",
        icon: "/images/assets/icons/Teaching.svg",
    }
];

export default function ChooseNextStep() {
    return (
        <section className="py-20 lg:py-28 bg-white overflow-hidden relative">
            {/* Subtle background decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-blue-100/30 blur-3xl" />
                <div className="absolute bottom-20 right-[10%] w-64 h-64 rounded-full bg-blue-100/20 blur-3xl" />
            </div>

            {/* Floating 3D decorations */}
            <div className="absolute top-[10%] right-[5%] z-[2] animate-float hidden lg:block">
                <Image src="/images/assets/3d-elements/3d-cloud.png" alt="" width={120} height={68} className="object-contain opacity-70" />
            </div>
            <div className="absolute bottom-[15%] left-[3%] z-[2] animate-float-medium hidden lg:block" style={{ transform: 'rotate(15deg)' }}>
                <Image src="/images/assets/3d-elements/3d-airplane.png" alt="" width={90} height={68} className="object-contain opacity-60" />
            </div>
            <div className="absolute top-[20%] left-[8%] z-[2] animate-float-medium hidden lg:block" style={{ transform: 'rotate(-10deg)' }}>
                <Image src="/images/assets/3d-elements/3d-cubeA.png" alt="" width={75} height={75} className="object-contain opacity-50" />
            </div>
            <div className="absolute bottom-[10%] right-[8%] z-[2] animate-float hidden lg:block" style={{ transform: 'rotate(20deg)' }}>
                <Image src="/images/assets/3d-elements/3d-cubeB.png" alt="" width={68} height={68} className="object-contain opacity-50" />
            </div>
            <div className="absolute top-[5%] left-[40%] z-[2] animate-float-medium hidden lg:block" style={{ transform: 'rotate(-5deg)' }}>
                <Image src="/images/assets/3d-elements/3d-sun.png" alt="" width={105} height={105} className="object-contain opacity-40" />
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
                    <h2 className="font-extrabold tracking-tight text-3xl md:text-5xl text-[#222] mb-6">
                        Choose Your <span className="text-[#0060D6]">Next Step</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Select one of the options below to continue your journey with Zeeque Preschool.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.15 + (index * 0.12), ease: "easeOut" }}
                            className="group flex flex-col items-center text-center p-8 sm:p-10 rounded-3xl bg-white border border-[#E8F0FE] relative overflow-hidden transition-all duration-500 hover:-translate-y-3 shadow-[0_4px_24px_rgba(0,96,214,0.08)] hover:shadow-[0_16px_48px_rgba(0,96,214,0.15)]"
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                                <Image src={step.icon} alt="" width={36} height={36} className="object-contain text-[#0060D6]" />
                            </div>

                            {/* Content */}
                            <h3 className="font-bold text-[22px] lg:text-[24px] text-[#222] mb-3 relative z-10 leading-tight">
                                {step.title}
                            </h3>

                            <p className="text-gray-500 mb-10 flex-grow relative z-10 text-[15px] leading-relaxed max-w-[280px]">
                                {step.description}
                            </p>

                            {/* CTA Button — Yellow with blue shadow */}
                            <div className="relative z-10 mt-auto w-full">
                                <Link
                                    href={step.buttonHref}
                                    className="inline-flex items-center justify-center gap-2 w-full px-4 sm:px-6 py-3 rounded-full font-bold text-[17px] tracking-wide bg-[#FFCB05] text-[#222] shadow-[4px_4px_0_0_#0060D6] hover:shadow-[2px_2px_0_0_#0060D6] hover:translate-y-[2px] hover:translate-x-[2px] transition-all duration-300 relative overflow-hidden border-none cursor-pointer whitespace-nowrap"
                                >
                                    {/* Shimmer effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                                    <span className="relative z-10 whitespace-nowrap">{step.buttonText}</span>
                                    <ArrowRight strokeWidth={2.5} className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300 shrink-0" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
