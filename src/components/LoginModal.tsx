"use client";

import { X, Eye, EyeOff, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
    const [showPassword, setShowPassword] = useState(false);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12 overflow-y-auto">
                    {/* Dark Overlay Backdrop - 80% opacity as requested */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-[#000000]/80 transition-opacity"
                    />

                    {/* Modal Content - Split Screen */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full max-w-6xl flex flex-col lg:flex-row overflow-hidden rounded-[32px] sm:rounded-[40px] bg-[#FAF9F6] dark:bg-slate-900 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] z-10 my-auto"
                    >
                        {/* LEFT PANEL - Form Area */}
                        <div className="w-full lg:w-[45%] p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative bg-gradient-to-b from-[#FAF9F6] to-[#F3F0E6] dark:from-slate-900 dark:to-slate-950">

                            {/* Logo Pill */}
                            <div className="absolute top-8 left-8 sm:top-10 sm:left-12 mb-8">
                                <div className="px-4 py-1.5 rounded-full border border-gray-200/60 dark:border-gray-700/60 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md text-sm font-bold text-gray-800 dark:text-gray-100 shadow-sm flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#F4A261]" />
                                    <span>Zeeque</span>
                                </div>
                            </div>

                            <div className="max-w-md mx-auto w-full mt-12 lg:mt-0">
                                <h2 className="text-3xl sm:text-[40px] leading-tight font-heading font-extrabold text-[#1A1A1A] dark:text-white mb-2 tracking-tight">
                                    Create an account
                                </h2>
                                <p className="text-[#6B7280] dark:text-gray-400 text-[15px] mb-8 font-medium">
                                    Sign up and get 30 day free trial
                                </p>

                                <form className="space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Amélie Laurent"
                                            className="w-full bg-[#F3F4F6] dark:bg-slate-800/50 border border-transparent rounded-[20px] py-4 px-5 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F9C74F]/50 focus:bg-white dark:focus:bg-slate-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] transition-all font-medium text-[15px]"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="amélielelaurent7622@gmail.com"
                                            className="w-full bg-[#F3F4F6] dark:bg-slate-800/50 border border-transparent rounded-[20px] py-4 px-5 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F9C74F]/50 focus:bg-white dark:focus:bg-slate-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] transition-all font-medium text-[15px]"
                                        />
                                    </div>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••••••"
                                            className="w-full bg-[#F3F4F6] dark:bg-slate-800/50 border border-transparent rounded-[20px] py-4 px-5 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F9C74F]/50 focus:bg-white dark:focus:bg-slate-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] transition-all font-medium text-[15px]"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                        >
                                            {showPassword ? <EyeOff className="w-[18px] h-[18px]" /> : <Eye className="w-[18px] h-[18px]" />}
                                        </button>
                                    </div>

                                    <div className="pt-6 mt-4 border-t border-dashed border-gray-100 dark:border-slate-800">
                                        <button
                                            type="submit"
                                            className="w-full bg-primary text-white font-heading font-extrabold text-[16px] py-4 rounded-[20px] shadow-[0_10px_30px_rgba(232,62,140,0.3)] hover:shadow-[0_15px_40px_rgba(232,62,140,0.4)] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden group relative hover:-translate-y-0.5"
                                        >
                                            <span className="relative z-10 uppercase tracking-wider">Submit Now</span>
                                            <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                                        </button>
                                        <p className="text-center text-sm text-gray-400 mt-6 font-body">
                                            By submitting this form, you agree to Zeeque Preschool recruitment terms and conditions.
                                        </p>
                                    </div>
                                </form>

                                {/* Social Login */}
                                <div className="mt-8">
                                    <div className="flex gap-4">
                                        <button className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-[18px] border border-gray-200/80 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700/70 transition-colors text-[14px] font-bold text-gray-700 dark:text-gray-200 shadow-sm">
                                            <svg className="w-[18px] h-[18px]" viewBox="0 0 384 512" fill="currentColor">
                                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 48.6-.8 90.4-82.5 102.5-121-39.5-17.2-61.6-50.6-61.6-89.6zm-86.4-177.5c6.1-17.7 25.8-49 53.4-53.7-5.3 35.8-25.7 63.8-48.4 81.4-19.1 14.8-40.6 22.8-55.7 22.8-1.5-35.1 27.6-66.4 50.7-80.5z" />
                                            </svg>
                                            Apple
                                        </button>
                                        <button className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-[18px] border border-gray-200/80 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700/70 transition-colors text-[14px] font-bold text-gray-700 dark:text-gray-200 shadow-sm">
                                            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
                                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                            </svg>
                                            Google
                                        </button>
                                    </div>
                                </div>

                                {/* Bottom Links */}
                                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div className="text-[14px]">
                                        <span className="text-gray-500 dark:text-gray-400">Have an account? </span>
                                        <Link href="#" className="font-bold text-[#4361EE] hover:text-[#3A56D4] transition-colors">
                                            Sign in
                                        </Link>
                                    </div>
                                    <Link href="#" className="text-[13px] text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                                        Terms & Conditions
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT PANEL - Image Overlay */}
                        <div className="hidden lg:block lg:w-[55%] relative min-h-[500px] lg:min-h-auto bg-gray-100 dark:bg-slate-800">
                            {/* Stock photo of teamwork */}
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                                alt="Team collaborating"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Glass overlay on photo for blending/neumorphism effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent dark:from-black/20 mix-blend-overlay pointer-events-none" />

                            <div className="absolute inset-0 p-8 sm:p-12 relative h-full w-full pointer-events-none">
                                {/* Floating UI 1: Task Review */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                    className="absolute top-10 right-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-white/60 dark:border-slate-700/50 min-w-[220px]"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center shrink-0">
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#F4A261]" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[13px] text-gray-900 dark:text-white leading-tight">Task Review With Team</h4>
                                            <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 font-medium">09:30am - 10:00am</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating UI 2: Daily Meeting */}
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    className="absolute top-[45%] left-10 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-5 rounded-3xl shadow-[0_15px_50px_-12px_rgba(0,0,0,0.2)] border border-white/60 dark:border-slate-700/50 min-w-[240px]"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-bold text-[14px] text-gray-900 dark:text-white flex items-center gap-2">
                                            Daily Meeting
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#F4A261]" />
                                        </h4>
                                        <span className="text-[11px] text-gray-500 font-medium bg-gray-100 dark:bg-slate-700 px-2 py-0.5 rounded-md">12:00pm</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="w-9 h-9 rounded-full border-[2.5px] border-white dark:border-slate-800 overflow-hidden relative shadow-sm">
                                                    <Image src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="Avatar" fill className="object-cover" />
                                                </div>
                                            ))}
                                            <div className="w-9 h-9 rounded-full border-[2.5px] border-white dark:border-slate-800 bg-gray-100 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-gray-600 dark:text-gray-300 z-10 shadow-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]">
                                                +4
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating UI 3: Calendar Strip */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                    className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-2xl p-4 rounded-[24px] shadow-[0_15px_50px_-12px_rgba(0,0,0,0.2)] border border-white/60 dark:border-slate-700/50 flex gap-2 sm:gap-3"
                                >
                                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => {
                                        const date = 22 + i;
                                        const isSelected = day === 'Wed';
                                        return (
                                            <div key={day} className={`flex flex-col items-center justify-center w-11 h-14 rounded-[14px] transition-all duration-300 ${isSelected ? 'bg-gradient-to-br from-[#F9C74F] to-[#F4A261] text-white font-bold shadow-lg shadow-orange-500/20 scale-110' : 'text-gray-500 dark:text-gray-400 bg-white/40 dark:bg-slate-700/40 hover:bg-white/80 dark:hover:bg-slate-700/80'}`}>
                                                <span className={`text-[10px] mb-0.5 font-medium ${isSelected ? 'text-white/90' : ''}`}>{day}</span>
                                                <span className={`text-[15px] leading-none ${isSelected ? 'text-white font-extrabold' : 'text-gray-900 dark:text-white font-bold'}`}>{date}</span>
                                            </div>
                                        );
                                    })}
                                </motion.div>
                            </div>

                            {/* Close Button overlapping Top Right over photo */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2.5 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-md transition-all duration-200 z-50 shadow-sm pointer-events-auto border border-white/20"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Mobile Close Button (shows only when right panel is hidden) */}
                        <button
                            onClick={onClose}
                            className="lg:hidden absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-500 transition-all duration-200 z-50 border border-gray-200 dark:border-slate-700"
                            aria-label="Close"
                        >
                            <X className="w-5 h-5" />
                        </button>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
