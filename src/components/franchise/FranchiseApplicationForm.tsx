"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
    Check,
    ChevronRight,
    Loader2,
    Send,
    Sparkles,
    User,
    Phone,
    Mail,
    MapPin,
    Briefcase,
    MessageSquare
} from "lucide-react";
import {
    franchiseFormSchema,
    defaultFranchiseFormValues,
    type FranchiseFormValues,
} from "@/lib/franchiseFormSchema";

function inputClass(err?: boolean) {
    const base =
        "w-full bg-white dark:bg-slate-900 border-2 transition-all duration-300 rounded-2xl px-6 py-4 outline-none text-gray-700 dark:text-gray-200 shadow-sm";
    return err
        ? `${base} border-red-500/60 focus:border-red-500 bg-red-50/40 dark:bg-red-950/25`
        : `${base} border-gray-200 dark:border-slate-600 focus:border-[#0060D6]/50 focus:shadow-md dark:focus:bg-slate-800`;
}

function Err({ name }: { name?: string }) {
    if (!name) return null;
    return <p className="mt-1 text-sm font-medium text-red-500">{name}</p>;
}

export default function FranchiseApplicationForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FranchiseFormValues>({
        resolver: zodResolver(franchiseFormSchema),
        defaultValues: defaultFranchiseFormValues,
    });

    const onSubmit = async (data: FranchiseFormValues) => {
        setIsSubmitting(true);
        try {
            // TODO: API integration will go here
            console.log("Franchise form submitted:", data);
            
            // Simulate network request
            await new Promise((resolve) => setTimeout(resolve, 1500));
            
            setIsSuccess(true);
        } catch (error) {
            console.error("Submission error:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-[40px] border border-gray-100 bg-white p-10 text-center shadow-[0_24px_80px_rgba(0,96,214,0.12)] max-w-xl mx-auto"
            >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0060D6] to-[#004B8F] text-white shadow-lg">
                    <Check className="h-10 w-10" strokeWidth={3} />
                </div>
                <p className="mb-2 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0060D6]">
                    <Sparkles className="h-4 w-4" />
                    Enquiry Received
                </p>
                <h2 className="mb-4 font-heading text-3xl font-extrabold text-[#222]">
                    Thank You for Your Interest
                </h2>
                <p className="mx-auto mb-6 max-w-md text-sm leading-relaxed text-gray-600">
                    Our franchise team will contact you shortly to discuss the incredible opportunities of partnering with Zeeque Preschool.
                </p>
                <button
                    onClick={() => window.location.href = '/'}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#F4F9FF] px-6 py-3 font-bold text-[#0060D6] transition-all hover:bg-[#E8F0FE]"
                >
                    Back to Home
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative">
            <div className="grid gap-6 md:grid-cols-2">
                {/* Full Name */}
                <div className="space-y-2 md:col-span-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                        <User className="h-4 w-4 text-[#FFC107]" /> Full Name
                    </label>
                    <input
                        {...register("fullName")}
                        className={inputClass(!!errors.fullName)}
                        placeholder="Enter your full name"
                    />
                    <Err name={errors.fullName?.message} />
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                        <Mail className="h-4 w-4 text-[#FFC107]" /> Email Address
                    </label>
                    <input
                        {...register("email")}
                        type="email"
                        className={inputClass(!!errors.email)}
                        placeholder="you@example.com"
                    />
                    <Err name={errors.email?.message} />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                        <Phone className="h-4 w-4 text-[#FFC107]" /> Phone Number
                    </label>
                    <input
                        {...register("phone")}
                        type="tel"
                        className={inputClass(!!errors.phone)}
                        placeholder="10-digit mobile number"
                    />
                    <Err name={errors.phone?.message} />
                </div>

                {/* City */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                        <MapPin className="h-4 w-4 text-[#FFC107]" /> Desired City/Location
                    </label>
                    <input
                        {...register("city")}
                        className={inputClass(!!errors.city)}
                        placeholder="Where do you want to open?"
                    />
                    <Err name={errors.city?.message} />
                </div>

                {/* Investment Capacity */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                        <Briefcase className="h-4 w-4 text-[#FFC107]" /> Investment Capacity
                    </label>
                    <select
                        {...register("investmentCapacity")}
                        className={inputClass(!!errors.investmentCapacity)}
                    >
                        <option value="">Select your budget...</option>
                        <option value="5-10 Lakhs">5 - 10 Lakhs</option>
                        <option value="10-20 Lakhs">10 - 20 Lakhs</option>
                        <option value="20-30 Lakhs">20 - 30 Lakhs</option>
                        <option value="30+ Lakhs">Above 30 Lakhs</option>
                    </select>
                    <Err name={errors.investmentCapacity?.message} />
                </div>

                {/* Message */}
                <div className="space-y-2 md:col-span-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                        <MessageSquare className="h-4 w-4 text-[#FFC107]" /> Additional Message (Optional)
                    </label>
                    <textarea
                        {...register("message")}
                        rows={4}
                        className={inputClass(!!errors.message)}
                        placeholder="Tell us a little bit about your background or ask any questions..."
                    />
                    <Err name={errors.message?.message} />
                </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex justify-end">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#0060D6] px-10 py-5 font-bold text-white transition-transform hover:scale-105 active:scale-95 disabled:pointer-events-none disabled:opacity-70 shadow-xl shadow-[#0060D6]/20 w-full md:w-auto"
                >
                    <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                        <div className="relative h-full w-8 bg-white/20" />
                    </div>
                    {isSubmitting ? (
                        <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            <span>Submitting...</span>
                        </>
                    ) : (
                        <>
                            <span>Submit Enquiry</span>
                            <Send className="h-5 w-5" />
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}
