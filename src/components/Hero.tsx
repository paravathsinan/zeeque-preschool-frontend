"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const heroImages = [
    "/images/bg/hero-section.jpg",
    "/images/gallery/gallery photos/IMG_5246.JPG",
    "/images/gallery/gallery photos/IMG_5282.JPG",
    "/images/gallery/gallery photos/IMG_5316.JPG",
    "/images/gallery/gallery photos/IMG_5744 (2) - Copy.JPG",
    "/images/gallery/gallery photos/IMG_5781.JPG",
    "/images/gallery/gallery photos/IMG_5836 (2) - Copy.JPG",
    "/images/gallery/gallery photos/IMG_6331 - Copy.JPG",
    "/images/gallery/gallery photos/RYZ03180.JPG"
];

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <section className="relative w-full pt-16 pb-48 overflow-hidden z-0">

            {/* Premium Solid Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#FFE7B1] dark:bg-slate-900 -z-10">
                {/* Pure CSS Grid Overlay for premium texture */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />

                {/* Soft Frosted Glass Blend Layer */}
                <div className="absolute inset-0 dark:bg-slate-950/40 backdrop-blur-[50px]" />
            </div>

            <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
                {/* Bottom Cloud/Wavy pattern can be an SVG or banner shape */}
                <Image src="/images/shape/banner-shape6.png" alt="Clouds" fill className="object-cover object-bottom" />
            </div>

            <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-20 flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">

                {/* Left Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="font-heading font-extrabold text-[#222222] dark:text-white text-5xl md:text-6xl lg:text-7xl leading-tight"
                    >
                        Happy Place <br />
                        Where Little Mind <br />
                        Grow Bright
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="text-gray-700 dark:text-gray-300 font-body text-lg md:text-xl max-w-lg leading-relaxed"
                    >
                        Join us for a delightful day of fun and learning at our annual Little Learners Day! This special event..
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8 mt-6 lg:mt-8"
                    >
                        <Link
                            href="https://admission.zeeque.in/"
                            className="group flex items-center justify-center gap-3 bg-primary text-white px-8 py-3.5 rounded-[15px] font-heading font-medium text-[19px] hover:bg-[#d93a1e] transition-all shadow-[4px_4px_0_0_#fbaf01] hover:shadow-[2px_2px_0_0_#fbaf01] hover:translate-y-[2px] hover:translate-x-[2px]"
                        >
                            Enroll Now
                            <ArrowRight strokeWidth={2.5} className="w-[22px] h-[22px]" />
                        </Link>

                        <div className="flex items-center gap-3">
                            <div className="relative group cursor-pointer inline-flex">
                                <Image src="/images/icon/banner-icon1.png" alt="Phone" width={55} height={55} className="object-contain group-hover:animate-ringing origin-center transition-transform" />
                            </div>
                            <div className="flex flex-col justify-center text-left">
                                <span className="text-[17px] text-gray-900 dark:text-gray-200 font-medium mb-1 leading-none">Admission Counsellor</span>
                                <span className="font-heading font-extrabold text-primary text-[22px] sm:text-[26px] tracking-wide leading-none">+91 9072500435</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Content / Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="w-full lg:w-1/2 relative flex justify-center mt-12 lg:mt-0"
                >
                    <div className="relative w-full max-w-[280px] sm:max-w-md lg:max-w-lg aspect-square mx-auto">
                        {/* Background Dashed Blob */}
                        <div
                            className="absolute inset-0 border-4 border-dashed border-[#fbaf01] transform rotate-6 opacity-70"
                            style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
                        />

                        {/* Main Image Blob */}
                        <div
                            className="absolute inset-4 shadow-2xl bg-yellow-100 dark:bg-slate-800"
                            style={{
                                borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                                overflow: 'hidden'
                            }}
                        >
                            <AnimatePresence>
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <Image
                                        src={heroImages[currentImageIndex]}
                                        alt="Child Learning"
                                        fill
                                        className="object-cover"
                                        priority={currentImageIndex === 0}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Floating Admission Badge */}
                        <div className="absolute top-[40%] -right-4 sm:-right-8 flex flex-col items-center sm:items-end z-30 drop-shadow-xl animate-bounce-slow">
                            {/* Red School Badge */}
                            <div className="bg-[#ef4225] text-white px-5 py-1.5 rounded-full text-xs sm:text-sm font-heading font-bold uppercase tracking-widest mb-[-12px] sm:mr-8 relative z-10 shadow-sm -top-[1px]">
                                School
                            </div>

                            {/* Orange Admission Badge */}
                            <div className="bg-[#fbaf01] text-white px-6 sm:px-10 py-2 sm:py-3 rounded-[20px] sm:rounded-[30px] rounded-br-sm text-lg sm:text-2xl font-heading font-extrabold shadow-lg relative z-20">
                                ADMISSION
                            </div>

                            {/* Red Open Badge */}
                            <div className="bg-[#ef4225] text-white px-6 sm:px-8 py-2 rounded-full text-lg sm:text-xl font-heading font-extrabold flex items-center gap-2 mt-[-10px] sm:ml-8 relative z-30 shadow-md">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#fbaf01] -ml-2">
                                    <path d="m3 11 18-5v12L3 14v-3z"></path>
                                    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
                                </svg>
                                OPEN
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
