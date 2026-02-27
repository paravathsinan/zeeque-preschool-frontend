"use client";

import Image from "next/image";
import Link from "next/link";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ChevronRight, Calendar, Sparkles } from "lucide-react";

const eventsGallery = [
    {
        src: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?q=80&w=800&auto=format&fit=crop",
        alt: "Kids playing outside",
        className: "col-span-1 row-span-2 rounded-[40px] rounded-tr-none md:rounded-[60px] md:rounded-tr-none aspect-[3/4] md:aspect-auto h-full",
    },
    {
        src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
        alt: "Classroom activity",
        className: "col-span-1 row-span-1 rounded-[30px] rounded-br-none aspect-square",
    },
    {
        src: "https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?q=80&w=800&auto=format&fit=crop",
        alt: "Art and craft",
        className: "col-span-1 row-span-1 rounded-[30px] rounded-tl-none aspect-square h-full",
    },
    {
        src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop",
        alt: "Sports day",
        className: "col-span-2 md:col-span-1 row-span-1 rounded-[40px] rounded-bl-none aspect-[2/1] md:aspect-auto",
    }
];

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#fffcf2] to-[#faeed1] dark:from-slate-900 dark:to-slate-950 font-body selection:bg-secondary selection:text-white relative overflow-hidden transition-colors duration-300">
            {/* ── Header ── */}
            <div className="w-full relative z-50">
                <div className="hidden lg:block w-full bg-white dark:bg-slate-900 border-b border-dashed border-gray-200 dark:border-slate-700 transition-colors duration-300">
                    <TopHeader />
                </div>
                <div className="max-w-[1140px] mx-auto bg-white dark:bg-slate-900 rounded-b-[40px] shadow-sm border border-gray-100 dark:border-slate-800 px-4 xl:px-8 transition-colors duration-300 relative z-50">
                    <Navbar />
                </div>
            </div>

            {/* ══════════════════════════════════
                SECTION 1: Hero Banner
               ══════════════════════════════════ */}
            <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-[10%] w-20 h-20 rounded-full bg-[#fbaf01]/10 animate-pulse" />
                    <div className="absolute top-20 right-[15%] w-14 h-14 rounded-full bg-[#e83e8c]/10 animate-pulse delay-500" />
                    <div className="absolute bottom-10 left-[20%] w-16 h-16 rounded-full bg-[#0fb85c]/10 animate-pulse delay-1000" />
                    <div className="absolute top-1/2 right-[8%] w-24 h-24 rounded-full border-4 border-dashed border-[#ef4225]/10" />
                    <div className="absolute bottom-20 right-[25%] w-10 h-10 rounded-full bg-[#0052ff]/10 animate-pulse delay-700" />
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        {/* Breadcrumb */}
                        <div className="flex items-center justify-center gap-2 mb-6 font-body text-sm">
                            <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                            <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors cursor-default pointer-events-none">Updates</Link>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                            <span className="text-primary font-semibold">Events</span>
                        </div>

                        <h1 className="font-heading font-extrabold text-[#222222] dark:text-white text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
                            Life at{" "}
                            <span className="relative inline-block">
                                <span className="text-[#0fb85c]">ZeeQue</span>
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                                    <path d="M2 8C40 2 80 2 100 6C120 10 160 10 198 4" stroke="#0fb85c" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Every day is a celebration of learning! Discover the joyful events, colorful days, and exciting activities that make our preschool special.
                        </p>
                    </motion.div>
                </div>

                {/* Wavy divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1440 100" fill="none" className="w-full h-auto">
                        <path d="M0,60 C360,100 720,20 1080,60 C1260,80 1380,40 1440,60 L1440,100 L0,100 Z" fill="white" className="dark:fill-slate-900" />
                    </svg>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 2: Content & Gallery
               ══════════════════════════════════ */}
            <section className="py-16 md:py-24 bg-white dark:bg-slate-900 relative">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10 flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Typography */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="lg:w-1/2"
                    >
                        <span className="text-[#e83e8c] font-heading font-bold uppercase tracking-wider text-sm mb-3 flex items-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            Joyful Moments
                        </span>
                        <h2 className="font-heading font-extrabold text-[#222222] dark:text-white text-4xl md:text-5xl leading-[1.2] mb-6">
                            At ZeeQue Every <span className="text-[#fbaf01]">Day is Special</span>
                        </h2>

                        <div className="space-y-6 text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed">
                            <p>
                                Begins with Alif day we conduct Family day, colours day, Meelad day, sports day, vehicles day etc in align with the Curriculum.
                            </p>
                            <p>
                                By observing these different days we create opportunities for children to expand their knowledge base and to explore their immediate environment.
                            </p>

                            <div className="bg-orange-50 dark:bg-slate-800 rounded-2xl p-6 mt-8 border-l-4 border-[#ffb606]">
                                <p className="text-gray-700 dark:text-gray-200 font-medium italic">
                                    * trained teachers and the children who completed the three-year course.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Gallery */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="lg:w-1/2 w-full relative"
                    >
                        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[400px] md:h-[500px]">
                            {eventsGallery.map((img, i) => (
                                <div key={i} className={`relative overflow-hidden group shadow-lg ${img.className}`}>
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            ))}
                        </div>
                        {/* Decorative Badge */}
                        <div className="absolute bottom-10 right-0 lg:-right-6 bg-white dark:bg-slate-800 rounded-full px-6 py-4 shadow-xl z-20 flex items-center gap-3 animate-bounce shadow-[#0fb85c]/20 max-md:hidden">
                            <div className="w-10 h-10 rounded-full bg-[#0fb85c]/10 flex items-center justify-center">
                                <Calendar className="w-5 h-5 text-[#0fb85c]" />
                            </div>
                            <span className="font-heading font-bold text-sm text-[#222] dark:text-white">Daily Activities</span>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* ── Footer ── */}
            <Footer />
        </main>
    );
}
