"use client";

import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InstitutionPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#f9fafb] to-[#f3f4f6] dark:from-slate-900 dark:to-slate-950 font-body selection:bg-secondary selection:text-white flex flex-col transition-colors duration-300">
            {/* ── Header ── */}
            <div className="w-full relative z-50">
                <div className="hidden lg:block w-full bg-white dark:bg-slate-900 border-b border-dashed border-gray-200 dark:border-slate-700 transition-colors duration-300">
                    <TopHeader />
                </div>
                <div className="max-w-[1140px] mx-auto bg-white dark:bg-slate-900 rounded-b-[40px] shadow-sm border border-gray-100 dark:border-slate-800 px-4 xl:px-8 transition-colors duration-300 relative z-50">
                    <Navbar />
                </div>
            </div>

            {/* ── Main Content ── */}
            <section className="flex-1 w-full max-w-5xl mx-auto px-6 py-20 flex flex-col items-center justify-center">
                <div className="text-center mb-12">
                    <h1 className="text-[32px] md:text-[40px] font-bold text-[#0094ff] mb-4">
                        Choose Your Login
                    </h1>
                    <p className="text-[16px] text-gray-500 font-medium">
                        Select your login portal to access ZeeQue services.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center">

                    {/* AO Login Card */}
                    <Link href="#" className="flex-1 group"> {/* Update href later if needed */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.1)] transition-shadow p-12 flex flex-col items-center text-center h-full ring-1 ring-gray-100"
                        >
                            <div className="w-[80px] h-[80px] rounded-full bg-[#1273ff] mb-8" />
                            <h2 className="text-[24px] font-bold text-[#1a1a1a] mb-4 group-hover:text-[#1273ff] transition-colors">
                                AO Login
                            </h2>
                            <p className="text-[14px] text-gray-500 leading-relaxed font-medium max-w-[250px]">
                                Login as an Admission Officer to manage student and franchise operations.
                            </p>
                        </motion.div>
                    </Link>

                    {/* ZeeQue Login Card */}
                    <Link href="#" className="flex-1 group"> {/* Update href later if needed */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.1)] transition-shadow p-12 flex flex-col items-center text-center h-full ring-1 ring-gray-100"
                        >
                            <div className="w-[80px] h-[80px] rounded-full bg-[#1b8c53] mb-8" />
                            <h2 className="text-[24px] font-bold text-[#1a1a1a] mb-4 group-hover:text-[#1b8c53] transition-colors">
                                ZeeQue Login
                            </h2>
                            <p className="text-[14px] text-gray-500 leading-relaxed font-medium max-w-[280px]">
                                Access the ZeeQue franchise dashboard to manage centers and applications.
                            </p>
                        </motion.div>
                    </Link>

                </div>
            </section>

            {/* ── Footer ── */}
            <Footer />
        </main>
    );
}
