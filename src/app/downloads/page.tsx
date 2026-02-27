"use client";

import Image from "next/image";
import Link from "next/link";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ChevronRight, FileDown, FolderArchive } from "lucide-react";

export default function DownloadsPage() {
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
                    <div className="absolute top-10 right-[15%] w-20 h-20 rounded-full bg-[#fbaf01]/10 animate-pulse" />
                    <div className="absolute top-24 left-[10%] w-14 h-14 rounded-full bg-[#e83e8c]/10 animate-pulse delay-500" />
                    <div className="absolute bottom-10 left-[25%] w-16 h-16 rounded-full bg-[#0fb85c]/10 animate-pulse delay-1000" />
                    <div className="absolute top-1/2 right-[10%] w-24 h-24 rounded-full border-4 border-dashed border-[#ef4225]/10" />
                    <div className="absolute bottom-16 right-[30%] w-10 h-10 rounded-full bg-[#0052ff]/10 animate-pulse delay-700" />
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
                            <span className="text-primary font-semibold">Downloads</span>
                        </div>

                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="bg-[#0fb85c]/10 p-3 rounded-2xl">
                                <FileDown className="w-8 h-8 text-[#0fb85c]" />
                            </div>
                        </div>

                        <h1 className="font-heading font-extrabold text-[#222222] dark:text-white text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
                            Important{" "}
                            <span className="relative inline-block">
                                <span className="text-[#0fb85c]">Downloads</span>
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                                    <path d="M2 8C40 2 80 2 100 6C120 10 160 10 198 4" stroke="#0fb85c" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Access all essential resources, forms, curriculum details, and educational materials from ZeeQue Preschool in one place.
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
                SECTION 2: Content (Download Cards)
               ══════════════════════════════════ */}
            <section className="py-16 md:py-24 bg-white dark:bg-slate-900 relative">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        {/* Playful Download Card */}
                        <div className="bg-white dark:bg-slate-800 border-2 border-gray-100 dark:border-slate-700 hover:border-[#e83e8c] dark:hover:border-[#e83e8c] rounded-[40px] p-10 md:p-14 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group max-w-md w-full relative overflow-hidden">

                            {/* Decorative corner shape */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#e83e8c]/5 rounded-bl-full transition-transform group-hover:scale-125 duration-500" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#0fb85c]/5 rounded-tr-full transition-transform group-hover:scale-125 duration-500" />

                            {/* Animated Icon */}
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#e83e8c]/10 to-[#fbaf01]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10">
                                <FolderArchive className="w-10 h-10 text-[#e83e8c]" />
                            </div>

                            <h3 className="font-heading font-bold text-[#222] dark:text-white text-2xl md:text-3xl mb-4 relative z-10">
                                Download Contents
                            </h3>

                            <p className="text-gray-500 dark:text-gray-400 font-body text-base mb-10 leading-relaxed relative z-10">
                                Access our shared Google Drive folder containing all the PDFs and resources you need.
                            </p>

                            {/* Modern View More Button */}
                            <a
                                href="https://drive.google.com/drive/folders/1N58LlziulWnB0qw-4dP-DVnwBrvgy8qF"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative inline-flex items-center gap-2 bg-[#ffb606] text-white px-8 py-4 rounded-2xl font-heading font-bold text-lg hover:bg-[#ffa000] shadow-[4px_4px_0_0_#ef4225] hover:shadow-[2px_2px_0_0_#ef4225] hover:translate-y-[2px] hover:translate-x-[2px] transition-all z-10"
                            >
                                View Folder
                                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                            </a>

                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Footer ── */}
            <Footer />
        </main>
    );
}
