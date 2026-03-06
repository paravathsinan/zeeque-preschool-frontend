"use client";

import { X, Send, CheckCircle, AlertCircle, KeyRound } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const forgotPasswordSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

interface ForgotPasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ForgotPasswordModal({ isOpen, onClose }: ForgotPasswordModalProps) {
    const [shakeFields, setShakeFields] = useState<Record<string, boolean>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields, dirtyFields },
        reset,
    } = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordSchema),
        mode: "onTouched",
    });

    const onSubmit = (data: ForgotPasswordFormData) => {
        console.log("Reset link requested for:", data.email);
        setIsSubmitted(true);
        // Reset state after 3 seconds for demo purposes
        setTimeout(() => {
            setIsSubmitted(false);
            reset();
            onClose();
        }, 3000);
    };

    const onError = (fieldErrors: Record<string, unknown>) => {
        const newShake: Record<string, boolean> = {};
        Object.keys(fieldErrors).forEach((key) => { newShake[key] = true; });
        setShakeFields(newShake);
        setTimeout(() => setShakeFields({}), 400);
    };

    const getFieldState = (fieldName: keyof ForgotPasswordFormData) => {
        const hasError = !!errors[fieldName];
        const isTouched = !!touchedFields[fieldName];
        const isDirty = !!dirtyFields[fieldName];
        const isValid = isTouched && isDirty && !hasError;
        return { hasError: isTouched && hasError, isValid };
    };

    const getInputClasses = (fieldName: keyof ForgotPasswordFormData) => {
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
            setIsSubmitted(false);
            reset();
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen, reset]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
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
                        className="relative w-full max-w-md flex flex-col overflow-hidden rounded-[24px] bg-[#FAF9F6] dark:bg-slate-900 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] z-10"
                    >
                        {/* Form Area */}
                        <div className="w-full p-6 sm:p-8 flex flex-col justify-center relative bg-gradient-to-b from-[#FAF9F6] to-[#F3F0E6] dark:from-slate-900 dark:to-slate-950">

                            {/* Close Button overlapping Top Right */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-500 transition-all duration-200 z-50 border border-gray-200 dark:border-slate-700"
                                aria-label="Close"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            <div className="w-full pt-2">
                                {/* Header Section */}
                                <div className="mb-6 flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center shrink-0 shadow-inner">
                                        <KeyRound className="w-5 h-5 text-orange-500" />
                                    </div>
                                    <div>
                                        <h2 className="text-[22px] leading-tight font-heading font-extrabold text-[#1A1A1A] dark:text-white mb-1.5 tracking-tight flex items-center gap-2">
                                            Reset Password
                                        </h2>
                                        <p className="text-[#6B7280] dark:text-gray-400 text-sm font-medium leading-relaxed max-w-[95%]">
                                            Enter your email address and we'll send you a link to reset your password.
                                        </p>
                                    </div>
                                </div>

                                <AnimatePresence mode="wait">
                                    {isSubmitted ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-2xl p-6 text-center space-y-3"
                                        >
                                            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-500/20 text-green-500 flex items-center justify-center mx-auto mb-2">
                                                <Send className="w-6 h-6 ml-1" />
                                            </div>
                                            <h3 className="text-green-800 dark:text-green-400 font-bold text-lg font-heading">Link Sent Successfully!</h3>
                                            <p className="text-sm text-green-600 dark:text-green-500/80 font-medium">Please check your email inbox to reset your password.</p>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="space-y-4"
                                            onSubmit={handleSubmit(onSubmit, onError)}
                                            noValidate
                                        >
                                            {/* Email Field Label */}
                                            <div className="flex flex-col space-y-1.5">
                                                <label htmlFor="email" className="text-sm font-bold text-gray-800 dark:text-gray-200 font-heading">
                                                    Email Address
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        id="email"
                                                        type="email"
                                                        placeholder="name@example.com"
                                                        {...register("email")}
                                                        className={getInputClasses("email")}
                                                    />
                                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                        {getFieldState("email").isValid && <CheckCircle className="w-4 h-4 text-green-500" />}
                                                        {getFieldState("email").hasError && <AlertCircle className="w-4 h-4 text-red-500" />}
                                                    </div>
                                                </div>
                                                <AnimatePresence>
                                                    {getFieldState("email").hasError && (
                                                        <motion.p
                                                            initial={{ opacity: 0, y: -4, height: 0 }}
                                                            animate={{ opacity: 1, y: 0, height: "auto" }}
                                                            exit={{ opacity: 0, y: -4, height: 0 }}
                                                            className="text-red-500 text-[12px] font-medium pt-1"
                                                        >
                                                            {errors.email?.message}
                                                        </motion.p>
                                                    )}
                                                </AnimatePresence>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="pt-6 flex items-center justify-end gap-3 mt-4 border-t border-gray-200/60 dark:border-slate-800">
                                                <button
                                                    type="button"
                                                    onClick={onClose}
                                                    className="px-5 py-2.5 rounded-xl font-heading font-bold text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-slate-800 transition-colors"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="bg-[#2463EB] hover:bg-[#1D4ED8] text-white font-heading font-bold text-sm px-6 py-2.5 rounded-xl transition-colors shadow-sm focus:ring-4 focus:ring-blue-500/20 active:scale-95"
                                                >
                                                    Send Reset Link
                                                </button>
                                            </div>
                                        </motion.form>
                                    )}
                                </AnimatePresence>

                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
