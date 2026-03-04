"use client";

import { X, CloudDownload, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const admissionSchema = z.object({
    studentName: z.string().min(2, "Name must be at least 2 characters"),
    class: z.string().min(1, "Please select a class"),
    dob: z.string().min(1, "Date of Birth is required"),
    mobile: z.string().min(10, "Valid mobile number is required"),
    fatherName: z.string().min(2, "Father's name is required"),
    email: z.string().email("Please enter a valid email address"),
    enquiry: z.string().min(5, "Enquiry must be at least 5 characters"),
});

type AdmissionFormData = z.infer<typeof admissionSchema>;

interface AdmissionFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AdmissionFormModal({ isOpen, onClose }: AdmissionFormModalProps) {
    const [shakeFields, setShakeFields] = useState<Record<string, boolean>>({});

    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields, dirtyFields },
        reset,
    } = useForm<AdmissionFormData>({
        resolver: zodResolver(admissionSchema),
        mode: "onTouched",
    });

    if (!isOpen) return null;

    const onSubmit = (data: AdmissionFormData) => {
        // Trigger download
        const link = document.createElement("a");
        link.href = "/documents/APPLICATION FOR ADMISSION 2024-25.pdf";
        link.download = "APPLICATION FOR ADMISSION 2024-25.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Reset form and close modal after initiating download
        reset();
        onClose();
    };

    const onError = (fieldErrors: Record<string, unknown>) => {
        const newShake: Record<string, boolean> = {};
        Object.keys(fieldErrors).forEach((key) => { newShake[key] = true; });
        setShakeFields(newShake);
        setTimeout(() => setShakeFields({}), 400);
    };

    const getFieldState = (fieldName: keyof AdmissionFormData) => {
        const hasError = !!errors[fieldName];
        const isTouched = !!touchedFields[fieldName];
        const isDirty = !!dirtyFields[fieldName];
        const isValid = (isTouched || isDirty) && !hasError;
        return { hasError: isTouched && hasError, isValid };
    };

    const getInputClasses = (fieldName: keyof AdmissionFormData) => {
        const { hasError, isValid } = getFieldState(fieldName);
        const base = "w-full bg-gray-50 dark:bg-slate-800/80 rounded-xl px-4 py-3 pr-11 border text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none transition-all duration-300";
        if (hasError) return `${base} border-red-400 dark:border-red-500 focus:ring-2 focus:ring-red-400/50 focus:bg-white dark:focus:bg-slate-800 ${shakeFields[fieldName] ? 'animate-shake' : ''}`;
        if (isValid) return `${base} border-green-400 dark:border-green-500 focus:ring-2 focus:ring-green-400/50 focus:bg-white dark:focus:bg-slate-800`;
        return `${base} border-transparent focus:ring-2 focus:ring-primary/50 focus:bg-white dark:focus:bg-slate-800`;
    };

    const renderFieldError = (fieldName: keyof AdmissionFormData) => (
        <AnimatePresence>
            {getFieldState(fieldName).hasError && (
                <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="text-red-500 text-[12px] font-medium mt-1 ml-2"
                >
                    {errors[fieldName]?.message}
                </motion.p>
            )}
        </AnimatePresence>
    );

    const renderInputIcons = (fieldName: keyof AdmissionFormData) => (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            {getFieldState(fieldName).isValid && <CheckCircle className="w-[18px] h-[18px] text-green-500" />}
            {getFieldState(fieldName).hasError && <AlertCircle className="w-[18px] h-[18px] text-red-500" />}
        </div>
    );

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
            <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200 my-8">
                <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Admission Enquiry</h2>
                    <button
                        onClick={() => {
                            reset();
                            onClose();
                        }}
                        className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit, onError)} noValidate className="p-6 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Student's Name"
                                    {...register("studentName")}
                                    className={getInputClasses("studentName")}
                                />
                                {renderInputIcons("studentName")}
                            </div>
                            {renderFieldError("studentName")}
                        </div>
                        <div>
                            <div className="relative">
                                <select
                                    {...register("class")}
                                    defaultValue=""
                                    className={`${getInputClasses("class")} appearance-none`}
                                >
                                    <option value="" disabled hidden>Select Class</option>
                                    <option value="playgroup">Playgroup</option>
                                    <option value="nursery">Nursery</option>
                                    <option value="lkg">LKG</option>
                                    <option value="ukg">UKG</option>
                                </select>
                                {renderInputIcons("class")}
                            </div>
                            {renderFieldError("class")}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Date of Birth"
                                    {...register("dob")}
                                    onFocus={(e) => e.target.type = 'date'}
                                    onBlur={(e) => {
                                        // Standard react-hook-form onBlur takes over, we just manage placeholder state visually
                                        if (!e.target.value) e.target.type = 'text';
                                        register("dob").onBlur(e);
                                    }}
                                    className={getInputClasses("dob")}
                                />
                                {renderInputIcons("dob")}
                            </div>
                            {renderFieldError("dob")}
                        </div>
                        <div>
                            <div className="relative">
                                <input
                                    type="tel"
                                    placeholder="Mobile Number"
                                    {...register("mobile")}
                                    className={getInputClasses("mobile")}
                                />
                                {renderInputIcons("mobile")}
                            </div>
                            {renderFieldError("mobile")}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Father's Name"
                                    {...register("fatherName")}
                                    className={getInputClasses("fatherName")}
                                />
                                {renderInputIcons("fatherName")}
                            </div>
                            {renderFieldError("fatherName")}
                        </div>
                        <div>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    {...register("email")}
                                    className={getInputClasses("email")}
                                />
                                {renderInputIcons("email")}
                            </div>
                            {renderFieldError("email")}
                        </div>
                    </div>

                    <div>
                        <div className="relative">
                            <textarea
                                placeholder="Your Enquiry"
                                rows={3}
                                {...register("enquiry")}
                                className={`${getInputClasses("enquiry")} resize-none py-3`}
                            ></textarea>
                            <div className="absolute right-3 top-3 pointer-events-none">
                                {getFieldState("enquiry").isValid && <CheckCircle className="w-[18px] h-[18px] text-green-500" />}
                                {getFieldState("enquiry").hasError && <AlertCircle className="w-[18px] h-[18px] text-red-500" />}
                            </div>
                        </div>
                        {renderFieldError("enquiry")}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 mt-2 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2"
                    >
                        <CloudDownload className="w-5 h-5" />
                        Download Admission Form
                    </button>
                </form>
            </div>
        </div>
    );
}
