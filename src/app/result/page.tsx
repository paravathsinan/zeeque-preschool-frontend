"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Search, Copy, Printer, Check } from "lucide-react";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ResultPortalPage() {
    const [registerNumber, setRegisterNumber] = useState("");
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (registerNumber) {
            navigator.clipboard.writeText(registerNumber);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <main className="min-h-screen bg-[#f8f9fa] dark:bg-slate-950 font-body selection:bg-blue-600 selection:text-white transition-colors duration-300 flex flex-col">
            {/* ── Header ── */}
            <div className="w-full relative z-50 flex-none px-4 xl:px-8 pt-4 xl:pt-6">
                <div className="hidden lg:block w-full bg-white dark:bg-slate-800 rounded-t-[40px] shadow-sm border border-gray-100 dark:border-slate-800 overflow-hidden max-w-[1140px] mx-auto">
                    <TopHeader />
                </div>
                <div className="max-w-[1140px] mx-auto bg-white dark:bg-slate-800 rounded-b-[40px] shadow-sm border border-gray-100 dark:border-slate-800 lg:border-t-0 rounded-[40px] lg:rounded-t-none">
                    <Navbar />
                </div>
            </div>

            {/* ── Main Content Area ── */}
            <div className="flex-1 flex flex-col justify-center items-center py-20 px-4 xl:px-8 relative">

                {/* Background Decor */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-indigo-100/40 dark:bg-indigo-900/10 rounded-full blur-[100px]" />
                </div>

                <div className="w-full max-w-[1000px] relative z-10">

                    {/* Breadcrumbs */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-2 mb-12 text-sm font-medium text-slate-500 dark:text-slate-400 print:hidden"
                    >
                        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">Results Portal</span>
                    </motion.div>

                    {/* Centered Cards Container */}
                    <div className="flex flex-col md:flex-row items-stretch justify-center gap-6">

                        {/* ── Left Card: Information Panel ── */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex-1 max-w-[450px] bg-white dark:bg-slate-900 rounded-[24px] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-slate-100 dark:border-slate-800"
                        >
                            <h1 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                                ZET Result Portal
                            </h1>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-medium">
                                Check your exam status quickly using your register number. Results are shown instantly with clear eligibility information.
                            </p>

                            <h2 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-3">
                                Why use this?
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-sm">
                                Official exam results shown securely. You can print or copy your result for records.
                            </p>
                        </motion.div>

                        {/* ── Right Card: Action Panel ── */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex-1 max-w-[550px] bg-white dark:bg-slate-900 rounded-[24px] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-slate-100 dark:border-slate-800 flex flex-col justify-center"
                        >
                            {/* Input Area */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                <div className="relative flex-grow">
                                    <input
                                        type="text"
                                        value={registerNumber}
                                        onChange={(e) => setRegisterNumber(e.target.value)}
                                        placeholder="Enter Register Number"
                                        className="w-full h-[52px] bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl px-5 outline-none transition-all text-slate-900 dark:text-white font-medium placeholder:text-slate-400"
                                    />
                                </div>
                                <button className="h-[52px] px-8 bg-[#0066ff] hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shrink-0 shadow-[0_4px_14px_0_rgba(0,102,255,0.39)]">
                                    Check
                                </button>
                            </div>

                            {/* Secondary Actions */}
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={handleCopy}
                                    className="h-11 px-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 rounded-lg flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium transition-colors"
                                    title="Copy Register Number"
                                >
                                    {copied ? (
                                        <>
                                            <Check className="w-4 h-4 text-green-500" />
                                            <span>Copied</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-4 h-4" />
                                            <span>Copy</span>
                                        </>
                                    )}
                                </button>

                                <button
                                    onClick={handlePrint}
                                    className="h-11 px-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 rounded-lg flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium transition-colors"
                                    title="Print Page"
                                >
                                    <Printer className="w-4 h-4" />
                                    <span>Print</span>
                                </button>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* ── Footer ── */}
            <div className="flex-none print:hidden">
                <Footer />
            </div>
        </main>
    );
}
