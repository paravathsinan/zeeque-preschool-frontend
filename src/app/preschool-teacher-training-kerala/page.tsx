"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmploymentApplicationForm from "@/components/employment/EmploymentApplicationForm";

export default function TeacherTraineesPage() {
    return (
        <main className="min-h-screen bg-[#fffcf2] dark:bg-slate-950 font-body selection:bg-secondary selection:text-white transition-colors duration-300">
            <div className="w-full relative z-50">
                <div className="hidden lg:block w-full bg-white dark:bg-slate-800">

                </div>
                <div className="w-full bg-[#FFFCF2] dark:bg-slate-950 transition-colors duration-300">
                    <div className="max-w-[1140px] mx-auto relative z-10 transition-colors duration-300">
                        <Navbar />
                    </div>
                </div>
            </div>

            <section className="relative overflow-hidden py-10 md:py-16">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center gap-2 mb-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                            <Link href="/" className="hover:text-primary transition-colors">
                                Home
                            </Link>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                            <span className="text-primary font-bold">Teacher Trainees</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[#222] dark:text-white mb-4 tracking-tight">
                            Professional Preschool Teacher Training in Kerala <br className="hidden md:block" /> ZeeQue
                            Diploma in ECCE
                        </h1>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
                    </motion.div>
                </div>
            </section>

            <section className="relative overflow-hidden py-8 lg:py-12">
                <div className="max-w-[900px] mx-auto px-4 sm:px-6 relative z-10">
                    <EmploymentApplicationForm />
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
                </div>
            </section>



            <Footer />
        </main>
    );
}
