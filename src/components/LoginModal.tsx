"use client";

import { X, Eye, EyeOff, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const loginSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSwitchToSignIn?: () => void;
}

export default function LoginModal({ isOpen, onClose, onSwitchToSignIn }: LoginModalProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [loginRole, setLoginRole] = useState<'ao' | 'franchise' | 'admin'>('ao');
    const [shakeFields, setShakeFields] = useState<Record<string, boolean>>({});

    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields, dirtyFields },
        reset,
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        mode: "onTouched",
    });

    const onSubmit = (data: LoginFormData) => {
        console.log("Form submitted:", { ...data, role: loginRole });
        // Handle form submission here
    };

    const onError = (fieldErrors: Record<string, unknown>) => {
        const newShake: Record<string, boolean> = {};
        Object.keys(fieldErrors).forEach((key) => { newShake[key] = true; });
        setShakeFields(newShake);
        setTimeout(() => setShakeFields({}), 400);
    };

    const getFieldState = (fieldName: keyof LoginFormData) => {
        const hasError = !!errors[fieldName];
        const isTouched = !!touchedFields[fieldName];
        const isDirty = !!dirtyFields[fieldName];
        const isValid = isTouched && isDirty && !hasError;
        return { hasError: isTouched && hasError, isValid };
    };

    const getInputClasses = (fieldName: keyof LoginFormData) => {
        const { hasError, isValid } = getFieldState(fieldName);
        const base = "w-full bg-[#F3F4F6] dark:bg-slate-800/50 border rounded-[20px] py-4 px-5 pr-12 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:bg-white dark:focus:bg-slate-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] transition-all duration-300 font-medium text-[15px]";
        if (hasError) return `${base} border-red-400 dark:border-red-500 focus:ring-2 focus:ring-red-400/50 ${shakeFields[fieldName] ? 'animate-shake' : ''}`;
        if (isValid) return `${base} border-green-400 dark:border-green-500 focus:ring-2 focus:ring-green-400/50`;
        return `${base} border-transparent focus:ring-2 focus:ring-[#ffb606]/50 focus:shadow-[0_0_15px_rgba(255,182,6,0.15)]`;
    };

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
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
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
                        className="relative w-full max-w-5xl flex flex-col lg:flex-row overflow-hidden rounded-[24px] bg-[#FAF9F6] dark:bg-slate-900 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] z-10 my-auto max-h-[95vh]"
                    >
                        {/* LEFT PANEL - Form Area */}
                        <div className="w-full lg:w-[45%] p-6 sm:p-8 flex flex-col justify-center relative bg-gradient-to-b from-[#FAF9F6] to-[#F3F0E6] dark:from-slate-900 dark:to-slate-950 overflow-y-auto">


                            <div className="max-w-md mx-auto w-full">
                                <div className="mb-3 inline-flex">
                                    <div className="px-4 py-1.5 rounded-full border border-gray-200/60 dark:border-gray-700/60 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md text-sm font-bold text-gray-800 dark:text-gray-100 shadow-sm flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#F4A261]" />
                                        <span>Zeeque</span>
                                    </div>
                                </div>

                                {/* Login Role Tabs */}
                                <div className="flex gap-2 mb-3">
                                    {[
                                        { key: 'ao' as const, label: 'AO', activeClass: 'bg-gradient-to-br from-[#4361EE] to-[#3A56D4] text-white shadow-lg shadow-blue-500/20' },
                                        { key: 'franchise' as const, label: 'Franchise', activeClass: 'bg-gradient-to-br from-[#2DC653] to-[#1FAB40] text-white shadow-lg shadow-green-500/20' },
                                        { key: 'admin' as const, label: 'Admin', activeClass: 'bg-gradient-to-br from-[#7B61FF] to-[#6345E0] text-white shadow-lg shadow-purple-500/20' },
                                    ].map((role) => (
                                        <button
                                            key={role.key}
                                            type="button"
                                            onClick={() => setLoginRole(role.key)}
                                            className={`px-5 py-2 rounded-full text-[13px] font-bold transition-all duration-300 ${loginRole === role.key
                                                ? role.activeClass
                                                : 'bg-white/60 dark:bg-slate-800/60 text-gray-600 dark:text-gray-300 border border-gray-200/60 dark:border-gray-700/60 hover:bg-white dark:hover:bg-slate-700/80'
                                                }`}
                                        >
                                            {role.label}
                                        </button>
                                    ))}
                                </div>

                                <h2 className="text-2xl sm:text-3xl leading-tight font-heading font-extrabold text-[#1A1A1A] dark:text-white mb-1 tracking-tight">
                                    Create an account
                                </h2>
                                <p className="text-[#6B7280] dark:text-gray-400 text-[13px] mb-4 font-medium">
                                    Sign up to access the Zeeque Preschool platform
                                </p>

                                <form className="space-y-2.5" onSubmit={handleSubmit(onSubmit, onError)} noValidate>
                                    {/* Name Field */}
                                    <div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="signup-name"
                                                autoComplete="name"
                                                placeholder="Full Name"
                                                {...register("name")}
                                                className={getInputClasses("name")}
                                            />
                                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                                                {getFieldState("name").isValid && <CheckCircle className="w-[18px] h-[18px] text-green-500" />}
                                                {getFieldState("name").hasError && <AlertCircle className="w-[18px] h-[18px] text-red-500" />}
                                            </div>
                                        </div>
                                        <AnimatePresence>
                                            {getFieldState("name").hasError && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -4 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -4 }}
                                                    className="text-red-500 text-[12px] font-medium mt-1.5 ml-5"
                                                >
                                                    {errors.name?.message}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="signup-email"
                                                autoComplete="email"
                                                placeholder="Email Address"
                                                {...register("email")}
                                                className={getInputClasses("email")}
                                            />
                                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                                                {getFieldState("email").isValid && <CheckCircle className="w-[18px] h-[18px] text-green-500" />}
                                                {getFieldState("email").hasError && <AlertCircle className="w-[18px] h-[18px] text-red-500" />}
                                            </div>
                                        </div>
                                        <AnimatePresence>
                                            {getFieldState("email").hasError && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -4 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -4 }}
                                                    className="text-red-500 text-[12px] font-medium mt-1.5 ml-5"
                                                >
                                                    {errors.email?.message}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Password Field */}
                                    <div>
                                        <div className="relative">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                id="signup-password"
                                                autoComplete="new-password"
                                                placeholder="••••••••••••"
                                                {...register("password")}
                                                className={getInputClasses("password")}
                                            />
                                            <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                                <span className="pointer-events-none">
                                                    {getFieldState("password").isValid && <CheckCircle className="w-[18px] h-[18px] text-green-500" />}
                                                    {getFieldState("password").hasError && <AlertCircle className="w-[18px] h-[18px] text-red-500" />}
                                                </span>
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                                >
                                                    {showPassword ? <EyeOff className="w-[18px] h-[18px]" /> : <Eye className="w-[18px] h-[18px]" />}
                                                </button>
                                            </div>
                                        </div>
                                        <AnimatePresence>
                                            {getFieldState("password").hasError && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -4 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -4 }}
                                                    className="text-red-500 text-[12px] font-medium mt-1.5 ml-5"
                                                >
                                                    {errors.password?.message}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <div className="pt-3 mt-2 border-t border-dashed border-gray-100 dark:border-slate-800">
                                        <button
                                            type="submit"
                                            className="w-full bg-primary text-white font-heading font-extrabold text-[15px] py-3 rounded-[16px] shadow-[0_10px_30px_rgba(232,62,140,0.3)] hover:shadow-[0_15px_40px_rgba(232,62,140,0.4)] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden group relative hover:-translate-y-0.5"
                                        >
                                            <span className="relative z-10 uppercase tracking-wider">Submit Now</span>
                                            <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                                        </button>
                                        <p className="text-center text-xs text-gray-400 mt-2 font-body">
                                            By submitting this form, you agree to Zeeque Preschool recruitment terms and conditions.
                                        </p>
                                    </div>
                                </form>



                                {/* Bottom Links */}
                                <div className="mt-3 flex flex-col sm:flex-row items-center justify-between gap-2">
                                    <div className="text-[14px]">
                                        <span className="text-gray-500 dark:text-gray-400">Have an account? </span>
                                        <button
                                            type="button"
                                            onClick={onSwitchToSignIn}
                                            className="font-bold text-[#4361EE] hover:text-[#3A56D4] transition-colors"
                                        >
                                            Sign in
                                        </button>
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
                                src="/images/gallery/page-title.jpg"
                                alt="Dedicated staff collaborating to improve early education at Zeeque Preschool, Kerala."
                                fill
                                className="object-cover blur-[1px] scale-[1.02]"
                                priority
                            />
                            {/* Glass overlay on photo for blending/neumorphism effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent dark:from-black/20 mix-blend-overlay pointer-events-none" />

                            <div className="absolute inset-0 p-8 sm:p-12 relative h-full w-full pointer-events-none">




                                {/* Floating UI 3: Calendar Strip */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                    className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-2xl p-4 rounded-[24px] shadow-[0_15px_50px_-12px_rgba(0,0,0,0.2)] border border-white/60 dark:border-slate-700/50 flex gap-2 sm:gap-3"
                                >
                                    {Array.from({ length: 7 }).map((_, i) => {
                                        const today = new Date();
                                        const currentDayIndex = today.getDay();
                                        const isToday = i === currentDayIndex;

                                        const diff = i - currentDayIndex;
                                        const thisDate = new Date(today);
                                        thisDate.setDate(today.getDate() + diff);
                                        const dayNumber = thisDate.getDate();

                                        const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(thisDate);

                                        return (
                                            <div key={i} className={`flex flex-col items-center justify-center w-11 h-14 rounded-[14px] transition-all duration-300 ${isToday ? 'bg-gradient-to-br from-[#F9C74F] to-[#F4A261] text-white font-bold shadow-lg shadow-orange-500/20 scale-110' : 'text-gray-500 dark:text-gray-400 bg-white/40 dark:bg-slate-700/40 hover:bg-white/80 dark:hover:bg-slate-700/80'}`}>
                                                <span className={`text-[10px] mb-0.5 font-medium ${isToday ? 'text-white/90' : ''}`}>{weekday}</span>
                                                <span className={`text-[15px] leading-none ${isToday ? 'text-white font-extrabold' : 'text-gray-900 dark:text-white font-bold'}`}>{dayNumber}</span>
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
