"use client";

import Link from "next/link";
import { Bell } from "lucide-react";
import { motion } from "framer-motion";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotificationsPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#fffcf2] to-[#faeed1] dark:from-slate-900 dark:to-slate-950 font-body selection:bg-secondary selection:text-white flex flex-col transition-colors duration-300">
            {/* ── Header ── */}
            <div className="w-full relative z-50">
                <div className="hidden lg:block w-full bg-white dark:bg-slate-900 border-b border-dashed border-gray-200 dark:border-slate-700 transition-colors duration-300">
                    <TopHeader />
                </div>
                <div className="max-w-[1140px] mx-auto bg-white dark:bg-slate-900 rounded-b-[40px] shadow-sm border border-gray-100 dark:border-slate-800 px-4 xl:px-8 transition-colors duration-300 relative z-50">
                    <Navbar />
                </div>
            </div>

            {/* Main Content Area */}
            <section className="flex-1 w-full max-w-5xl mx-auto px-6 py-12 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-[28px] font-bold text-[#111111] dark:text-white tracking-tight">Notifications</h1>
                    <button className="text-[14px] text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white underline decoration-gray-300 dark:decoration-gray-600 hover:decoration-gray-500 underline-offset-4 transition-all transition-colors font-medium">
                        Mark all as read
                    </button>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] ring-1 ring-gray-100 dark:ring-slate-800 flex-1 flex flex-col items-center justify-center min-h-[500px] p-8">

                    {/* Illustration Container */}
                    <div className="relative mb-8 flex justify-center items-center w-40 h-40">
                        {/* Background Bubble */}
                        <div className="absolute inset-0 bg-[#f4f5f7] rounded-full" />

                        {/* Zzz floating icons */}
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: -10 }}
                            animate={{ opacity: [0, 1, 0], y: [-5, -20], x: [-15, -25] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-4 left-4 text-[#d1d5db] font-bold text-2xl z-10"
                        >
                            Z
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: -10 }}
                            animate={{ opacity: [0, 1, 0], y: [-5, -15], x: [10, 20] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute top-10 text-[#e5e7eb] font-bold text-xl z-10"
                            style={{ left: '-10px' }}
                        >
                            z
                        </motion.div>

                        {/* Bell Icon */}
                        <Bell className="w-20 h-20 text-[#e5e7eb] fill-[#e5e7eb] relative z-20" strokeWidth={1} />

                        {/* Notification Badge */}
                        <div className="absolute -top-1 -right-1 w-12 h-12 bg-[#2a3a5e] rounded-full border-4 border-white flex items-center justify-center text-white text-[22px] font-semibold z-30 shadow-sm">
                            0
                        </div>
                    </div>

                    {/* Text content */}
                    <h2 className="text-[#111111] dark:text-white text-[22px] font-bold tracking-tight mb-3">
                        It's quiet for now.
                    </h2>
                    <p className="text-[#6b7280] dark:text-gray-400 text-[15px] font-medium text-center max-w-xs leading-relaxed">
                        Your notifications will appear here once there's something new to review.
                    </p>
                </div>
            </section>

            {/* ── Footer ── */}
            <Footer />
        </main>
    );
}
