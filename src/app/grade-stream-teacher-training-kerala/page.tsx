"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronRight,
    User,
    Phone,
    Mail,
    MapPin,
    GraduationCap,
    Send,
    Calendar,
    AlertCircle,
    CheckCircle
} from "lucide-react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DatePicker from "@/components/DatePicker";
import CustomSelect from "@/components/CustomSelect";

const gstSchema = z.object({
    fullName: z.string().min(2, "Full name is required"),
    dob: z.string().min(1, "Date of birth is required"),
    gender: z.string().min(1, "Please select gender"),
    address: z.string().min(5, "Valid address is required"),
    city: z.string().min(2, "City is required"),
    state: z.string().min(1, "Please select state"),
    district: z.string().min(1, "Please select district"),
    maritalStatus: z.string().min(1, "Please select marital status"),
    contactNumber: z.string().min(10, "Valid contact number is required"),
    whatsappNumber: z.string().min(10, "Valid Whatsapp number is required"),
    email: z.string().email("Please enter a valid email address"),
    religiousEdu: z.string().min(1, "Please select religious education"),
    generalEdu: z.string().min(1, "Please select general education"),
    country: z.string().min(1, "Please select country"),
    prefState: z.string().min(1, "Please select preferred state"),
    prefDistrict: z.string().min(1, "District preference is required"),
    prefCentre: z.string().min(1, "Please select a centre")
});

type GstFormData = z.infer<typeof gstSchema>;

export default function GradeStreamTeacherTraineesPage() {
    const [shakeFields, setShakeFields] = useState<Record<string, boolean>>({});

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, touchedFields, dirtyFields, isSubmitted },
        reset
    } = useForm<GstFormData>({
        resolver: zodResolver(gstSchema),
        mode: "onTouched",
        defaultValues: {
            country: "india"
        }
    });

    const onSubmit = (data: GstFormData) => {
        console.log("Form submitted:", data);
        reset();
    };

    const onError = (errors: any) => {
        const newShake: Record<string, boolean> = {};
        Object.keys(errors).forEach(key => { newShake[key] = true; });
        setShakeFields(newShake);
        setTimeout(() => setShakeFields({}), 400);
    };

    const getFieldState = (fieldName: keyof GstFormData) => {
        const hasError = !!errors[fieldName];
        const isTouched = !!touchedFields[fieldName];
        const isDirty = !!dirtyFields[fieldName];
        return { 
            hasError: hasError && (isTouched || isDirty || isSubmitted), 
            isValid: (isTouched || isDirty) && !hasError 
        };
    };

    const getInputClasses = (fieldName: keyof GstFormData) => {
        const { hasError, isValid } = getFieldState(fieldName);
        const base = "w-full bg-[#f8f9fa] dark:bg-slate-800 border-2 rounded-2xl px-6 py-4 outline-none transition-all duration-300 text-gray-700 dark:text-gray-200";
        if (hasError) return `${base} border-red-500/50 focus:border-red-500 focus:bg-white dark:focus:bg-slate-700 ${shakeFields[fieldName] ? 'animate-shake' : ''}`;
        if (isValid) return `${base} border-green-500/50 focus:border-green-500 focus:bg-white dark:focus:bg-slate-700`;
        return `${base} border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700`;
    };

    const renderFieldError = (fieldName: keyof GstFormData) => (
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

    const renderInputIcons = (fieldName: keyof GstFormData) => (
        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-2">
            {getFieldState(fieldName).isValid && <CheckCircle className="w-[18px] h-[18px] text-green-500" />}
            {getFieldState(fieldName).hasError && <AlertCircle className="w-[18px] h-[18px] text-red-500" />}
        </div>
    );
    return (
        <main className="min-h-screen bg-[#fffcf2] dark:bg-slate-950 font-body selection:bg-secondary selection:text-white transition-colors duration-300">
            {/* ── Header ── */}
            <div className="w-full relative z-50">
                <div className="w-full bg-[#FFFCF2] dark:bg-slate-950 transition-colors duration-300">
                    <div className="max-w-[1140px] mx-auto relative z-10">
                        <Navbar />
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════
                SECTION 1: Hero Banner
               ══════════════════════════════════ */}
            <section className="relative py-12 md:py-32 overflow-hidden">

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Breadcrumbs */}
                        <div className="flex items-center justify-center gap-2 mb-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                            <span className="text-primary font-bold">Grade Stream Teacher Trainees</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[#222] dark:text-white mb-4 tracking-tight leading-tight">
                            ZeeQue TTGS Teacher Training for <br className="hidden md:block" /> Grade Level (Residential Program)
                        </h1>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 2: Recruitment Form
               ══════════════════════════════════ */}
            <section className="py-12 lg:py-32 relative overflow-hidden">
                <div className="max-w-[900px] mx-auto px-4 sm:px-6 relative z-10">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="bg-white dark:bg-slate-900 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 dark:border-slate-800 overflow-hidden"
                    >
                        {/* Form Header */}
                        <div className="bg-primary/5 dark:bg-primary/10 py-8 md:py-10 px-6 md:px-12 border-b border-dashed border-primary/20 text-center">
                            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#222] dark:text-white mb-2">
                                Application Form
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">Please provide accurate information for your trainee application.</p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit, onError)} noValidate className="p-6 md:p-12 space-y-8 md:space-y-12">

                            {/* Personal Details */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-slate-800 flex items-center justify-center text-primary">
                                        <User className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-[#222] dark:text-white">Personal Information</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="col-span-1 md:col-span-2">
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Name <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="gst-full-name"
                                                autoComplete="name"
                                                placeholder="Enter your full name"
                                                {...register("fullName")}
                                                className={getInputClasses("fullName")}
                                            />
                                            {renderInputIcons("fullName")}
                                        </div>
                                        {renderFieldError("fullName")}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Date of Birth <span className="text-red-500">*</span></label>
                                        <Controller
                                            name="dob"
                                            control={control}
                                            render={({ field }) => (
                                                <DatePicker
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    placeholder="Select Date"
                                                    className={getInputClasses("dob")}
                                                    hasError={getFieldState("dob").hasError}
                                                />
                                            )}
                                        />
                                        {renderFieldError("dob")}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Sex <span className="text-red-500">*</span></label>
                                        <Controller
                                            name="gender"
                                            control={control}
                                            render={({ field }) => (
                                                <CustomSelect
                                                    options={[
                                                        { value: "male", label: "Male" },
                                                        { value: "female", label: "Female" }
                                                    ]}
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    placeholder="SELECT"
                                                    hasError={getFieldState("gender").hasError}
                                                />
                                            )}
                                        />
                                        {renderFieldError("gender")}
                                    </div>

                                    <div className="col-span-1 md:col-span-2">
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Address with Pin code <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <textarea
                                                id="gst-address"
                                                autoComplete="street-address"
                                                placeholder="Enter your address"
                                                rows={4}
                                                {...register("address")}
                                                className={`${getInputClasses("address")} resize-none pr-12`}
                                            ></textarea>
                                            <div className="absolute right-6 top-6 pointer-events-none">
                                                {getFieldState("address").isValid && <CheckCircle className="w-[18px] h-[18px] text-green-500" />}
                                                {getFieldState("address").hasError && <AlertCircle className="w-[18px] h-[18px] text-red-500" />}
                                            </div>
                                        </div>
                                        {renderFieldError("address")}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">City <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="gst-city"
                                                autoComplete="address-level2"
                                                placeholder="Nearby City"
                                                {...register("city")}
                                                className={getInputClasses("city")}
                                            />
                                            {renderInputIcons("city")}
                                        </div>
                                        {renderFieldError("city")}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">State <span className="text-red-500">*</span></label>
                                        <Controller
                                            name="state"
                                            control={control}
                                            render={({ field }) => (
                                                <CustomSelect
                                                    options={[
                                                        { value: "kerala", label: "Kerala" }
                                                    ]}
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    placeholder="SELECT"
                                                    hasError={getFieldState("state").hasError}
                                                />
                                            )}
                                        />
                                        {renderFieldError("state")}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">District <span className="text-red-500">*</span></label>
                                        <Controller
                                            name="district"
                                            control={control}
                                            render={({ field }) => (
                                                <CustomSelect
                                                    options={[
                                                        { value: "kozhikode", label: "Kozhikode" },
                                                        { value: "malappuram", label: "Malappuram" }
                                                    ]}
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    placeholder="SELECT"
                                                    hasError={getFieldState("district").hasError}
                                                />
                                            )}
                                        />
                                        {renderFieldError("district")}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Marital Status <span className="text-red-500">*</span></label>
                                        <Controller
                                            name="maritalStatus"
                                            control={control}
                                            render={({ field }) => (
                                                <CustomSelect
                                                    options={[
                                                        { value: "single", label: "Single" },
                                                        { value: "married", label: "Married" }
                                                    ]}
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    placeholder="SELECT"
                                                    hasError={getFieldState("maritalStatus").hasError}
                                                />
                                            )}
                                        />
                                        {renderFieldError("maritalStatus")}
                                    </div>
                                </div>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6 group">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-[#3FB7E5]">
                                        <Phone className="w-5 h-5 group-hover:animate-ringing origin-center transition-transform" />
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-[#222] dark:text-white group-hover:text-primary transition-colors">Contact Details</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Contact Number <span className="text-red-500">*</span></label>
                                        <div className="relative group">
                                            <input
                                                type="tel"
                                                id="gst-contact"
                                                autoComplete="tel"
                                                {...register("contactNumber")}
                                                className={getInputClasses("contactNumber")}
                                            />
                                            {renderInputIcons("contactNumber")}
                                        </div>
                                        {renderFieldError("contactNumber")}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Whatsapp Number <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <input
                                                type="tel"
                                                id="gst-whatsapp"
                                                autoComplete="tel"
                                                {...register("whatsappNumber")}
                                                className={getInputClasses("whatsappNumber")}
                                            />
                                            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                                <Image src="https://cdn-icons-png.flaticon.com/512/733/733585.png" width={20} height={20} alt="WhatsApp contact icon" className="opacity-40" />
                                                {getFieldState("whatsappNumber").isValid && <CheckCircle className="w-[18px] h-[18px] text-green-500" />}
                                                {getFieldState("whatsappNumber").hasError && <AlertCircle className="w-[18px] h-[18px] text-red-500" />}
                                            </div>
                                        </div>
                                        {renderFieldError("whatsappNumber")}
                                    </div>

                                    <div className="col-span-1 md:col-span-2">
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Email Id <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="gst-email"
                                                autoComplete="email"
                                                placeholder="Your Email ID"
                                                {...register("email")}
                                                className={getInputClasses("email")}
                                            />
                                            {renderInputIcons("email")}
                                        </div>
                                        {renderFieldError("email")}
                                    </div>
                                </div>
                            </div>

                            {/* Qualifications */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-slate-800 flex items-center justify-center text-[#EF4225]">
                                        <GraduationCap className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-[#222] dark:text-white">Qualifications</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Religious Education <span className="text-red-500">*</span></label>
                                        <Controller
                                            name="religiousEdu"
                                            control={control}
                                            render={({ field }) => (
                                                <CustomSelect
                                                    options={[
                                                        { value: "Hifz", label: "Hifz" },
                                                        { value: "Alim", label: "Alim" }
                                                    ]}
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    placeholder="---SELECT---"
                                                    hasError={getFieldState("religiousEdu").hasError}
                                                />
                                            )}
                                        />
                                        {renderFieldError("religiousEdu")}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">General Education <span className="text-red-500">*</span></label>
                                        <Controller
                                            name="generalEdu"
                                            control={control}
                                            render={({ field }) => (
                                                <CustomSelect
                                                    options={[
                                                        { value: "sslc", label: "SSLC" },
                                                        { value: "plus-two", label: "Plus Two" },
                                                        { value: "degree", label: "Degree" }
                                                    ]}
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    placeholder="---SELECT---"
                                                    hasError={getFieldState("generalEdu").hasError}
                                                />
                                            )}
                                        />
                                        {renderFieldError("generalEdu")}
                                    </div>
                                </div>
                            </div>

                            {/* Centre Preference */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-slate-800 flex items-center justify-center text-[#0fb85c]">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-[#222] dark:text-white">Centre preference</h3>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Country <span className="text-red-500">*</span></label>
                                        <Controller
                                            name="country"
                                            control={control}
                                            render={({ field }) => (
                                                <CustomSelect
                                                    options={[
                                                        { value: "india", label: "India" }
                                                    ]}
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    placeholder="--SELECT--"
                                                    hasError={getFieldState("country").hasError}
                                                />
                                            )}
                                        />
                                        {renderFieldError("country")}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">State <span className="text-red-500">*</span></label>
                                        <Controller
                                            name="prefState"
                                            control={control}
                                            render={({ field }) => (
                                                <CustomSelect
                                                    options={[
                                                        { value: "kerala", label: "Kerala" }
                                                    ]}
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    placeholder="--SELECT--"
                                                    hasError={getFieldState("prefState").hasError}
                                                />
                                            )}
                                        />
                                        {renderFieldError("prefState")}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">District Preference <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="gst-district-pref"
                                                placeholder="Enter district"
                                                {...register("prefDistrict")}
                                                className={getInputClasses("prefDistrict")}
                                            />
                                            {renderInputIcons("prefDistrict")}
                                        </div>
                                        {renderFieldError("prefDistrict")}
                                    </div>

                                    <div className="col-span-1 sm:col-span-2 md:col-span-3 mt-4">
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Centre <span className="text-red-500">*</span></label>
                                        <Controller
                                            name="prefCentre"
                                            control={control}
                                            render={({ field }) => (
                                                <CustomSelect
                                                    options={[]}
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    placeholder="--SELECT--"
                                                    hasError={getFieldState("prefCentre").hasError}
                                                />
                                            )}
                                        />
                                        {renderFieldError("prefCentre")}
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-6 border-t border-dashed border-gray-100 dark:border-slate-800">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full sm:w-[200px] bg-[#c2185b] text-white font-heading font-extrabold text-lg py-4 rounded-2xl sm:rounded-3xl shadow-[0_10px_30px_rgba(194,24,91,0.3)] hover:shadow-[0_15px_40px_rgba(194,24,91,0.4)] transition-all duration-300 mx-auto block group relative overflow-hidden"
                                >
                                    <span className="relative z-10 uppercase tracking-widest text-sm">Submit Now</span>

                                    {/* Animation overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                                </motion.button>
                            </div>

                        </form>
                    </motion.div>

                    {/* Fun decorative background elements */}
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 3: Footer Decoration
               ══════════════════════════════════ */}
            <div className="w-full h-24 relative overflow-hidden pointer-events-none">
                {/* Illustrated background as per reference image */}
                <div className="absolute inset-x-0 bottom-0">
                    <svg viewBox="0 0 1440 100" className="w-full h-auto">
                        {/* Rolling hills */}
                        <path d="M0,80 C360,110 720,50 1080,80 C1260,95 1380,60 1440,80 L1440,100 L0,100 Z" fill="#4B8C1F" />
                        <path d="M0,90 C480,110 960,70 1440,90 L1440,100 L0,100 Z" fill="#2E5A12" />
                    </svg>
                    {/* Small illustated trees (simulated with SVG circles/paths) */}
                    <div className="absolute bottom-4 left-[20%] w-8 h-12 bg-[#3D7A19] rounded-t-full" />
                    <div className="absolute bottom-6 left-[45%] w-10 h-16 bg-[#3D7A19] rounded-t-full" />
                    <div className="absolute bottom-2 left-[75%] w-6 h-10 bg-[#3D7A19] rounded-t-full" />
                </div>
            </div>

            {/* ── Footer ── */}
            <Footer />
        </main>
    );
}
