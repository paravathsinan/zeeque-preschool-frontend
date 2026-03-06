"use client";

import { X, Eye, EyeOff, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const loginSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

interface SignInModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSwitchToSignUp?: () => void;
    onForgotPassword?: () => void;
}

export default function SignInModal({ isOpen, onClose, onSwitchToSignUp, onForgotPassword }: SignInModalProps) {
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
        console.log("Login submitted:", { ...data, role: loginRole });
        // Handle login submission here
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
        const base = "w-full bg-[#F3F4F6] dark:bg-slate-800/50 border rounded-[16px] py-3 px-4 pr-10 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:bg-white dark:focus:bg-slate-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] transition-all duration-300 font-medium text-[14px]";
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
                    {/* Dark Overlay Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-[#000000]/80 transition-opacity"
                    />

                    {/* Modal Content - Centered Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full max-w-md flex flex-col overflow-hidden rounded-[24px] bg-[#FAF9F6] dark:bg-slate-900 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] z-10 max-h-[95vh]"
                    >
                        {/* Form Area */}
                        <div className="w-full p-4 sm:p-5 flex flex-col justify-center relative bg-gradient-to-b from-[#FAF9F6] to-[#F3F0E6] dark:from-slate-900 dark:to-slate-950 overflow-y-auto">

                            {/* Close Button overlapping Top Right */}
                            <button
                                onClick={onClose}
                                className="absolute top-3 right-3 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-500 transition-all duration-200 z-50 border border-gray-200 dark:border-slate-700"
                                aria-label="Close"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            <div className="max-w-md mx-auto w-full pt-1">
                                {/* Login Role Tabs */}
                                <div className="flex gap-2 mb-3 justify-center">
                                    {[
                                        { key: 'ao' as const, label: 'AO', activeClass: 'bg-gradient-to-br from-[#4361EE] to-[#3A56D4] text-white shadow-lg shadow-blue-500/20' },
                                        { key: 'franchise' as const, label: 'Franchise', activeClass: 'bg-gradient-to-br from-[#2DC653] to-[#1FAB40] text-white shadow-lg shadow-green-500/20' },
                                        { key: 'admin' as const, label: 'Admin', activeClass: 'bg-gradient-to-br from-[#7B61FF] to-[#6345E0] text-white shadow-lg shadow-purple-500/20' },
                                    ].map((role) => (
                                        <button
                                            key={role.key}
                                            type="button"
                                            onClick={() => setLoginRole(role.key)}
                                            className={`px-3 py-1 rounded-full text-[12px] font-bold transition-all duration-300 ${loginRole === role.key
                                                ? role.activeClass
                                                : 'bg-white/60 dark:bg-slate-800/60 text-gray-600 dark:text-gray-300 border border-gray-200/60 dark:border-gray-700/60 hover:bg-white dark:hover:bg-slate-700/80'
                                                }`}
                                        >
                                            {role.label}
                                        </button>
                                    ))}
                                </div>

                                <div className="text-center mb-4">
                                    <h2 className="text-xl leading-tight font-heading font-extrabold text-[#1A1A1A] dark:text-white mb-0.5 tracking-tight">
                                        Welcome Back
                                    </h2>
                                    <p className="text-[#6B7280] dark:text-gray-400 text-[11px] font-medium">
                                        Sign in to access the Zeeque platform
                                    </p>
                                </div>

                                <form className="space-y-3" onSubmit={handleSubmit(onSubmit, onError)} noValidate>
                                    {/* Email Field */}
                                    <div>
                                        <div className="relative">
                                            <input
                                                type="email"
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

                                    <div className="flex justify-end pr-2 pt-0.5">
                                        <button
                                            type="button"
                                            onClick={onForgotPassword}
                                            className="text-[11px] font-bold text-[#4361EE] hover:text-[#3A56D4] transition-colors"
                                        >
                                            Forgot Password?
                                        </button>
                                    </div>

                                    <div className="pt-2 mt-1 border-t border-dashed border-gray-200/60 dark:border-slate-800">
                                        <button
                                            type="submit"
                                            className="w-full bg-primary text-white font-heading font-extrabold text-[14px] py-3 rounded-[14px] shadow-[0_10px_30px_rgba(232,62,140,0.3)] hover:shadow-[0_15px_40px_rgba(232,62,140,0.4)] transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group relative hover:-translate-y-0.5"
                                        >
                                            <span className="relative z-10 uppercase tracking-wider">Sign In</span>
                                            <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                                        </button>
                                    </div>
                                </form>

                                {/* Social Login */}
                                <div className="mt-4">
                                    <div className="relative mb-4">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-200/60 dark:border-slate-800"></div>
                                        </div>
                                        <div className="relative flex justify-center text-[11px]">
                                            <span className="px-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-full text-gray-500 font-medium">Or continue with</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2.5">
                                        <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-[12px] border border-gray-200/80 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700/70 transition-colors text-[12px] font-bold text-gray-700 dark:text-gray-200 shadow-sm">
                                            <svg className="w-[16px] h-[16px]" viewBox="0 0 384 512" fill="currentColor">
                                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 48.6-.8 90.4-82.5 102.5-121-39.5-17.2-61.6-50.6-61.6-89.6zm-86.4-177.5c6.1-17.7 25.8-49 53.4-53.7-5.3 35.8-25.7 63.8-48.4 81.4-19.1 14.8-40.6 22.8-55.7 22.8-1.5-35.1 27.6-66.4 50.7-80.5z" />
                                            </svg>
                                            Apple
                                        </button>
                                        <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-[12px] border border-gray-200/80 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700/70 transition-colors text-[12px] font-bold text-gray-700 dark:text-gray-200 shadow-sm">
                                            <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24">
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
                                <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 border-t border-gray-100 dark:border-slate-800 pt-3">
                                    <div className="text-[12px]">
                                        <span className="text-gray-500 dark:text-gray-400">Don't have an account? </span>
                                        <button
                                            type="button"
                                            onClick={onSwitchToSignUp}
                                            className="font-bold text-primary hover:text-primary/80 transition-colors"
                                        >
                                            Sign up
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
