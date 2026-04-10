"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, User, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function WhoWeAre() {

    return (
        <section className="py-10 lg:py-16 bg-white dark:bg-slate-900 relative overflow-hidden">

            {/* Decorative Background Elements */}


            <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16 xl:gap-24">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                    <span className="text-amber-600 dark:text-amber-400 font-heading font-bold text-sm mb-4 bg-amber-50/80 dark:bg-amber-900/20 backdrop-blur-md px-4 py-2 rounded-full border border-amber-200/50 dark:border-amber-700/30 w-fit shadow-sm group hover:bg-amber-100/50 transition-all duration-300">
                        Who we are
                    </span>
                    <h2 className="font-heading font-extrabold text-[#222222] dark:text-white text-4xl md:text-5xl lg:text-[54px] leading-[1.1] mb-6">
                        Zeeque Preschool Network
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed mb-6">
                        Zeeque Preschool is a unique and state of the art Early Childhood Care and Education program specially designed for children between 3 to 6 years of age, spanning three developmental stages: Lower, Middle, and Upper (LZQ, MZQ, and UZQ).
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed mb-10">
                        We draw upon a diverse range of educational approaches, methods, and techniques, all geared towards nurturing creativity, collaboration, and joyful learning.
                    </p>

                    <Link
                        href="/about"
                        className="inline-flex items-center justify-center bg-[#ffb606] hover:bg-[#ffa000] text-white px-10 py-3.5 rounded-2xl font-body font-bold text-[18px] transition-all shadow-[4px_4px_0_0_#ef4225] hover:shadow-[2px_2px_0_0_#ef4225] hover:translate-y-[2px] hover:translate-x-[2px] border-none"
                    >
                        Know More
                    </Link>

                </motion.div>

                {/* Right Content / Image Collage */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full lg:w-1/2 relative"
                >



                    <div className="grid grid-cols-2 gap-4 sm:gap-6 relative z-10">
                        {/* Top Left Image */}
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl transform transition-transform hover:scale-105 hover:-rotate-1 duration-300">
                            <Image
                                src="/images/gallery/gallery photos/IMG_5316.JPG"
                                alt="Young students reading books together in the bright Zeeque Preschool library, Kerala."
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>

                        {/* Top Right Image */}
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl transform transition-transform hover:scale-105 hover:rotate-1 duration-300 translate-y-4 sm:translate-y-8">
                            <Image
                                src="/images/gallery/gallery photos/IMG_5246.JPG"
                                alt="Kids engaged in interactive learning at our Islamic Montessori preschool in Kerala."
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>

                        {/* Bottom Wide Video Card */}
                        <Link
                            href="https://www.youtube.com/watch?v=AQc09O3uEbM"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative col-span-2 aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl mt-4 sm:mt-8 group cursor-pointer border-2 border-white/10"
                        >
                            {/* Background Video */}
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover scale-[1.3] transition-transform duration-700 group-hover:scale-[1.4]"
                                poster="/images/gallery/page-title.jpg"
                            >
                                <source src="/videos/ZAHRATUL_QUR_AN_THE_ZEE_QUE_PRESCHOOL_ENGLISH_PROMO_VIDEO_1080P - Trim.mp4" type="video/mp4" />
                            </video>

                            {/* Subtle Overlay on hover */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                        </Link>
                    </div>



                </motion.div>

            </div>

        </section>
    );
}
