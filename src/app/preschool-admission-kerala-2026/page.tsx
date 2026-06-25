"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdmissionApplicationForm from "@/components/admission/AdmissionApplicationForm";

export default function AdmissionPage() {
    return (
        <main className="min-h-screen bg-[#fffcf2] font-body selection:bg-secondary selection:text-white transition-colors duration-300 dark:bg-slate-950">
            <div className="relative z-50 w-full">
                <div className="hidden w-full bg-white dark:bg-slate-800 lg:block">
                    <TopHeader />
                </div>
                <div className="w-full bg-[#FFFCF2] transition-colors duration-300 dark:bg-slate-950">
                    <div className="relative z-10 mx-auto max-w-[1140px] transition-colors duration-300">
                        <Navbar />
                    </div>
                </div>
            </div>

            <section className="relative overflow-hidden py-12 md:py-24">
                <div className="relative z-10 mx-auto max-w-[1140px] px-4 text-center xl:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-6 flex items-center justify-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                            <Link href="/" className="transition-colors hover:text-primary">
                                Home
                            </Link>
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                            <span className="font-bold text-primary">Admission</span>
                        </div>

                        <h1 className="mb-4 font-heading text-3xl font-extrabold tracking-tight text-[#222] dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
                            ZeeQue Preschool Admission 2026 <br className="hidden md:block" />
                            Apply Online for Enrollment
                        </h1>
                        <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-primary" />
                    </motion.div>
                </div>
            </section>

            <section className="relative overflow-hidden py-12 lg:py-16">
                <div className="relative z-10 mx-auto max-w-[900px] px-4 sm:px-6">
                    <AdmissionApplicationForm />
                    <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-orange-500/5 blur-3xl" />
                </div>
            </section>

            <div className="pointer-events-none relative h-24 w-full overflow-hidden">
                <div className="absolute inset-x-0 bottom-0">
                    <svg viewBox="0 0 1440 100" className="h-auto w-full" aria-hidden>
                        <path
                            d="M0,80 C360,110 720,50 1080,80 C1260,95 1380,60 1440,80 L1440,100 L0,100 Z"
                            fill="#4B8C1F"
                        />
                        <path d="M0,90 C480,110 960,70 1440,90 L1440,100 L0,100 Z" fill="#2E5A12" />
                    </svg>
                    <div className="absolute bottom-4 left-[20%] h-12 w-8 rounded-t-full bg-[#3D7A19]" />
                    <div className="absolute bottom-6 left-[45%] h-16 w-10 rounded-t-full bg-[#3D7A19]" />
                    <div className="absolute bottom-2 left-[75%] h-10 w-6 rounded-t-full bg-[#3D7A19]" />
                </div>
            </div>

            <Footer />
        </main>
    );
}
