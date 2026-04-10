"use client";

import { X, Eye, EyeOff, Send, AlertCircle, User, Lock } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const loginSchema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required"),
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
    const [shakeFields, setShakeFields] = useState<Record<string, boolean>>({});
    const [loginError, setLoginError] = useState<string | null>(null);
    const router = useRouter();
    const loginRole = 'admin';

    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields, dirtyFields },
        reset,
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        mode: "onSubmit",
    });

    const onSubmit = (data: LoginFormData) => {
        setLoginError(null);
        
        // Mock Admin Login Check
        if (data.username === "zqpreschool" && data.password === "admin@1234") {
            // Success! Mock login
            onClose();
            router.push("/admin-dashboard");
        } else {
            setLoginError("Invalid username or password");
            // Highlight fields with error
            const newShake: Record<string, boolean> = { username: true, password: true };
            setShakeFields(newShake);
            setTimeout(() => setShakeFields({}), 400);
        }
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
        const base = "w-full bg-[#F3F4F6] dark:bg-slate-800/50 border rounded-[16px] py-3 pl-11 pr-10 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:bg-white dark:focus:bg-slate-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] transition-all duration-300 font-medium text-[14px]";
        if (hasError) return `${base} border-red-400 dark:border-red-500 focus:ring-2 focus:ring-red-400/50 ${shakeFields[fieldName] ? 'animate-shake' : ''}`;
        return `${base} border-transparent focus:ring-2 focus:ring-[#ffb606]/50 focus:shadow-[0_0_15px_rgba(255,182,6,0.15)]`;
    };

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.body.classList.add("modal-open");
        } else {
            document.body.style.overflow = "unset";
            document.body.classList.remove("modal-open");
        }
        return () => {
            document.body.style.overflow = "unset";
            document.body.classList.remove("modal-open");
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
                                {/* Admin Title Only */}
                                <div className="flex justify-center mb-3">
                                    <div className="bg-gradient-to-br from-[#7B61FF] to-[#6345E0] text-white shadow-lg shadow-purple-500/20 px-5 py-1.5 rounded-full text-[13px] font-bold">
                                        Admin
                                    </div>
                                </div>

                                <div className="text-center mb-4">
                                    <h2 className="text-xl leading-tight font-heading font-extrabold text-[#1A1A1A] dark:text-white mb-0.5 tracking-tight">
                                        Admin Login
                                    </h2>
                                    <p className="text-[#6B7280] dark:text-gray-400 text-[11px] font-medium">
                                        Enter your credentials to access the dashboard
                                    </p>
                                </div>

                                <form className="space-y-3" onSubmit={handleSubmit(onSubmit, onError)} noValidate>
                                    {/* Username Field */}
                                    <div>
                                        <label className="block text-[#1A1A1A] dark:text-white text-[13px] font-bold mb-1.5 ml-1">
                                            Enter Username
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400" />
                                            <input
                                                type="text"
                                                id="signin-username"
                                                autoComplete="username"
                                                placeholder="Enter your username"
                                                {...register("username")}
                                                className={getInputClasses("username")}
                                            />
                                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                                                {getFieldState("username").hasError && <AlertCircle className="w-[18px] h-[18px] text-red-500" />}
                                            </div>
                                        </div>
                                        <AnimatePresence>
                                            {getFieldState("username").hasError && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -4 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -4 }}
                                                    className="text-red-500 text-[12px] font-medium mt-1.5 ml-5"
                                                >
                                                    {errors.username?.message}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Password Field */}
                                    <div>
                                        <label className="block text-[#1A1A1A] dark:text-white text-[13px] font-bold mb-1.5 ml-1">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400" />
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                id="signin-password"
                                                autoComplete="current-password"
                                                placeholder="Enter your password"
                                                {...register("password")}
                                                className={getInputClasses("password")}
                                            />
                                            <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                                <span className="pointer-events-none">
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


                                    {loginError && (
                                        <div className="flex items-center gap-2 p-3 mb-3 text-xs font-bold text-red-500 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 uppercase tracking-wide">
                                            <AlertCircle className="w-4 h-4" />
                                            {loginError}
                                        </div>
                                    )}

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



                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
