"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Sparkles, User, Palette } from "lucide-react";
import { motion } from "framer-motion";

export default function WhoWeAre() {
    return (
        <section className="py-20 lg:py-32 bg-white dark:bg-slate-900 relative overflow-hidden">

            {/* Decorative Background Elements */}


            <div className="absolute bottom-20 left-20 opacity-20 pointer-events-none hidden xl:block">
                <User className="w-24 h-24 text-[#0fb85c]" />
            </div>

            <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16 xl:gap-24">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                    <span className="text-[#e83e8c] font-heading font-bold uppercase tracking-wider text-sm mb-3">
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
                        className="inline-flex items-center justify-center bg-[#e83e8c] text-white px-10 py-3.5 rounded-full font-heading font-bold text-[16px] uppercase tracking-wide hover:bg-[#c02870] hover:scale-105 transition-all duration-300 shadow-[0_8px_20px_rgba(232,62,140,0.3)]"
                    >
                        Know More
                    </Link>

                    {/* Abstract Hand-drawn style decorative kids (Left Bottom) */}
                    <div className="absolute -bottom-10 -left-10 lg:-left-20 xl:-left-40 hidden lg:block w-64 h-64 pointer-events-none opacity-80 z-[-1]">
                        <Image src="/images/shape/kindergarden-shape3.png" alt="Decoration" fill className="object-contain" />
                    </div>
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
                                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop"
                                alt="Children reading"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Top Right Image */}
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl transform transition-transform hover:scale-105 hover:rotate-1 duration-300 translate-y-4 sm:translate-y-8">
                            <Image
                                src="https://images.unsplash.com/photo-1509062522246-3755f77d5227?q=80&w=800&auto=format&fit=crop"
                                alt="Children learning"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Bottom Wide Image */}
                        <div className="relative col-span-2 aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl mt-4 sm:mt-8 group cursor-pointer">
                            <Image
                                src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1200&auto=format&fit=crop"
                                alt="Child playing with paper plane"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Video Play Button Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#e83e8c] shadow-[0_0_30px_rgba(255,255,255,0.4)] group-hover:scale-110 transition-transform duration-300">
                                    <Play className="w-8 h-8 ml-1 fill-current" />
                                </div>
                            </div>
                        </div>
                    </div>



                </motion.div>

            </div>
        </section>
    );
}
