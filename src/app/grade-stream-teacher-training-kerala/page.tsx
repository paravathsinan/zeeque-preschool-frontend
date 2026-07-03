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
    CheckCircle,
    X
} from "lucide-react";
import { useState } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DatePicker from "@/components/DatePicker";
import CustomSelect from "@/components/CustomSelect";
import centersData from "@/data/centers.json";

const gstSchema = z.object({
    fullName: z.string().min(2, "Full name is required").max(100, "Maximum 100 characters allowed").regex(/^[A-Za-z\s.-]+$/, "Only letters and spaces are allowed"),
    dob: z.string().min(1, "Date of birth is required"),
    gender: z.string().min(1, "Please select gender"),
    address: z.string().min(5, "Valid address is required").max(250, "Maximum 250 characters allowed"),
    place: z.string().min(2, "Place is required").max(50, "Maximum 50 characters allowed").regex(/^[A-Za-z\s.-]+$/, "Only letters and spaces are allowed"),
    city: z.string().min(2, "City is required").max(50, "Maximum 50 characters allowed").regex(/^[A-Za-z\s.-]+$/, "Only letters and spaces are allowed"),
    state: z.string().min(2, "State is required").max(50, "Maximum 50 characters allowed").regex(/^[A-Za-z\s.-]+$/, "Only letters and spaces are allowed"),
    personalCountry: z.string().min(2, "Country is required").max(50, "Maximum 50 characters allowed").regex(/^[A-Za-z\s.-]+$/, "Only letters and spaces are allowed"),
    pincode: z.string().length(6, "Pincode must be exactly 6 digits").regex(/^\d+$/, "Pincode must contain only numbers"),
    maritalStatus: z.string().min(1, "Please select marital status"),
    contactNumber: z.string().length(10, "Contact number must be exactly 10 digits").regex(/^\d+$/, "Must contain only numbers"),
    whatsappNumber: z.string().length(10, "Whatsapp number must be exactly 10 digits").regex(/^\d+$/, "Must contain only numbers"),
    email: z.string().email("Please enter a valid email address").max(100, "Maximum 100 characters allowed").optional().or(z.literal('')),
    religiousEdu: z.string().min(1, "Please select religious education"),
    generalEdu: z.string().min(1, "Please select general education"),
    pref1Country: z.string().min(1, "Please select country"),
    pref1State: z.string().min(1, "Please select preferred state"),
    pref1District: z.string().min(1, "District preference is required"),
    pref1Centre: z.string().min(1, "Please select a centre"),
    pref2Country: z.string().optional(),
    pref2State: z.string().optional(),
    pref2District: z.string().optional().or(z.literal('')),
    pref2Centre: z.string().optional()
}).superRefine((data, ctx) => {
    const hasPref2 = data.pref2Country || data.pref2State || data.pref2District || data.pref2Centre;
    if (hasPref2) {
        if (!data.pref2Country) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please select country", path: ["pref2Country"] });
        if (!data.pref2State) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please select state", path: ["pref2State"] });
        if (!data.pref2District) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "District preference is required", path: ["pref2District"] });
        if (!data.pref2Centre) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please select a centre", path: ["pref2Centre"] });
    }
});

type GstFormData = z.infer<typeof gstSchema>;

export default function GradeStreamTeacherTraineesPage() {
    const [shakeFields, setShakeFields] = useState<Record<string, boolean>>({});
    const [showSecondPref, setShowSecondPref] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        trigger,
        formState: { errors, touchedFields, dirtyFields, isSubmitted },
        reset,
        setValue,
        clearErrors
    } = useForm<GstFormData>({
        resolver: zodResolver(gstSchema),
        mode: "onTouched",
        defaultValues: {
            pref1Country: "india"
        }
    });
    const pref1Country = useWatch({ control, name: "pref1Country" });
    const pref1State = useWatch({ control, name: "pref1State" });
    const pref1District = useWatch({ control, name: "pref1District" });
    const pref1Centre = useWatch({ control, name: "pref1Centre" });

    const pref2Country = useWatch({ control, name: "pref2Country" });
    const pref2State = useWatch({ control, name: "pref2State" });
    const pref2District = useWatch({ control, name: "pref2District" });
    const pref2Centre = useWatch({ control, name: "pref2Centre" });

    const isPref1Filled = !!(pref1Country && pref1State && pref1District && pref1Centre);

    // Compute Dropdown Options
    const getUniqueOptions = (items: any[], key: string) => {
        return [...new Set(items.map((item: any) => item[key]))].map(val => ({ value: String(val), label: String(val) }));
    };

    const countries = getUniqueOptions(centersData, 'country');
    
    const pref1States = getUniqueOptions(centersData.filter(c => c.country === pref1Country), 'state');
    const pref1Districts = getUniqueOptions(centersData.filter(c => c.country === pref1Country && c.state === pref1State), 'district');
    const pref1Centres = getUniqueOptions(centersData.filter(c => c.country === pref1Country && c.state === pref1State && c.district === pref1District), 'center');

    const pref2States = getUniqueOptions(centersData.filter(c => c.country === pref2Country), 'state');
    const pref2Districts = getUniqueOptions(centersData.filter(c => c.country === pref2Country && c.state === pref2State), 'district');
    const pref2Centres = getUniqueOptions(centersData.filter(c => c.country === pref2Country && c.state === pref2State && c.district === pref2District), 'center');


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
                                                maxLength={100}
                                                onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-z\s.-]/g, ''); }}
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
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Home address <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <textarea
                                                id="gst-address"
                                                autoComplete="street-address"
                                                placeholder="Enter your address"
                                                rows={4}
                                                {...register("address")}
                                                className={`${getInputClasses("address")} resize-none pr-12`}
                                                maxLength={250}
                                            ></textarea>
                                            <div className="absolute right-6 top-6 pointer-events-none">
                                                {getFieldState("address").isValid && <CheckCircle className="w-[18px] h-[18px] text-green-500" />}
                                                {getFieldState("address").hasError && <AlertCircle className="w-[18px] h-[18px] text-red-500" />}
                                            </div>
                                        </div>
                                        {renderFieldError("address")}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Country <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="gst-country"
                                                placeholder="Enter Country"
                                                {...register("personalCountry")}
                                                className={getInputClasses("personalCountry")}
                                                maxLength={50}
                                                onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-z\s.-]/g, ''); }}
                                            />
                                            {renderInputIcons("personalCountry")}
                                        </div>
                                        {renderFieldError("personalCountry")}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">State <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="gst-state"
                                                placeholder="Enter State"
                                                {...register("state")}
                                                className={getInputClasses("state")}
                                                maxLength={50}
                                                onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-z\s.-]/g, ''); }}
                                            />
                                            {renderInputIcons("state")}
                                        </div>
                                        {renderFieldError("state")}
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
                                                maxLength={50}
                                                onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-z\s.-]/g, ''); }}
                                            />
                                            {renderInputIcons("city")}
                                        </div>
                                        {renderFieldError("city")}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Place <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="gst-place"
                                                placeholder="Enter Place"
                                                {...register("place")}
                                                className={getInputClasses("place")}
                                                maxLength={50}
                                                onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-z\s.-]/g, ''); }}
                                            />
                                            {renderInputIcons("place")}
                                        </div>
                                        {renderFieldError("place")}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Pincode <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="gst-pincode"
                                                placeholder="Enter Pincode"
                                                {...register("pincode")}
                                                className={getInputClasses("pincode")}
                                                maxLength={6}
                                                onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\D/g, ''); }}
                                            />
                                            {renderInputIcons("pincode")}
                                        </div>
                                        {renderFieldError("pincode")}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Marital Status <span className="text-red-500">*</span></label>
                                        <Controller
                                            name="maritalStatus"
                                            control={control}
                                            render={({ field }) => (
                                                <CustomSelect
                                                    options={[
                                                        { value: "married", label: "MARRIED" },
                                                        { value: "widowed", label: "WIDOWED" },
                                                        { value: "separated", label: "SEPARATED" },
                                                        { value: "divorced", label: "DIVORCED" },
                                                        { value: "single", label: "SINGLE" }
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
                                                maxLength={10}
                                                onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\D/g, ''); }}
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
                                                maxLength={10}
                                                onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\D/g, ''); }}
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
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Email Id <span className="text-gray-400 font-normal ml-1">(Optional)</span></label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="gst-email"
                                                autoComplete="email"
                                                placeholder="Your Email ID"
                                                {...register("email")}
                                                className={getInputClasses("email")}
                                                maxLength={100}
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
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-slate-800 flex items-center justify-center text-[#0fb85c]">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-xl font-heading font-bold text-[#222] dark:text-white">Centre preference</h3>
                                    </div>
                                </div>

                                {/* Preference 1 */}
                                <div className="bg-gray-50/50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 space-y-6">
                                    <h4 className="text-lg font-bold text-gray-700 dark:text-gray-200">Preference 1</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Country <span className="text-red-500">*</span></label>
                                            <Controller
                                                name="pref1Country"
                                                control={control}
                                                render={({ field }) => (
                                                    <CustomSelect
                                                        options={countries}
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                        placeholder="--SELECT--"
                                                        hasError={getFieldState("pref1Country").hasError}
                                                    />
                                                )}
                                            />
                                            {renderFieldError("pref1Country")}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">State <span className="text-red-500">*</span></label>
                                            <Controller
                                                name="pref1State"
                                                control={control}
                                                render={({ field }) => (
                                                    <CustomSelect
                                                        options={pref1States}
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                        placeholder="--SELECT--"
                                                        hasError={getFieldState("pref1State").hasError}
                                                    />
                                                )}
                                            />
                                            {renderFieldError("pref1State")}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">District Preference <span className="text-red-500">*</span></label>
                                            <Controller
                                                name="pref1District"
                                                control={control}
                                                render={({ field }) => (
                                                    <CustomSelect
                                                        options={pref1Districts}
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                        placeholder="--SELECT--"
                                                        hasError={getFieldState("pref1District").hasError}
                                                    />
                                                )}
                                            />
                                            {renderFieldError("pref1District")}
                                        </div>

                                        <div className="col-span-1 sm:col-span-2 md:col-span-3 mt-2">
                                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Centre <span className="text-red-500">*</span></label>
                                            <Controller
                                                name="pref1Centre"
                                                control={control}
                                                render={({ field }) => (
                                                    <CustomSelect
                                                        options={pref1Centres}
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                        placeholder="--SELECT--"
                                                        hasError={getFieldState("pref1Centre").hasError}
                                                    />
                                                )}
                                            />
                                            {renderFieldError("pref1Centre")}
                                        </div>
                                    </div>
                                </div>

                                {/* Add Second Preference Button */}
                                {!showSecondPref && (
                                    <div className="flex justify-center mt-4">
                                        <button
                                            type="button"
                                            onClick={async () => {
                                                const isValid = await trigger(["pref1Country", "pref1State", "pref1District", "pref1Centre"]);
                                                if (isValid) {
                                                    setShowSecondPref(true);
                                                }
                                            }}
                                            className="text-primary font-bold hover:underline flex items-center gap-2"
                                        >
                                            + Add Second Preference (Optional)
                                        </button>
                                    </div>
                                )}

                                {/* Preference 2 */}
                                {showSecondPref && (
                                    <div className="bg-gray-50/50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 space-y-6 relative mt-6">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setShowSecondPref(false);
                                                setValue("pref2Country", "");
                                                setValue("pref2State", "");
                                                setValue("pref2District", "");
                                                setValue("pref2Centre", "");
                                                clearErrors(["pref2Country", "pref2State", "pref2District", "pref2Centre"]);
                                            }}
                                            className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                        <h4 className="text-lg font-bold text-gray-700 dark:text-gray-200">Preference 2</h4>
                                        
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Country <span className="text-red-500">*</span></label>
                                                <Controller
                                                    name="pref2Country"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <CustomSelect
                                                            options={countries}
                                                            value={field.value || ""}
                                                            onChange={field.onChange}
                                                            placeholder="--SELECT--"
                                                            hasError={getFieldState("pref2Country").hasError}
                                                        />
                                                    )}
                                                />
                                                {renderFieldError("pref2Country")}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">State <span className="text-red-500">*</span></label>
                                                <Controller
                                                    name="pref2State"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <CustomSelect
                                                            options={pref2States}
                                                            value={field.value || ""}
                                                            onChange={field.onChange}
                                                            placeholder="--SELECT--"
                                                            hasError={getFieldState("pref2State").hasError}
                                                        />
                                                    )}
                                                />
                                                {renderFieldError("pref2State")}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">District Preference <span className="text-red-500">*</span></label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Enter district"
                                                        {...register("pref2District")}
                                                        className={getInputClasses("pref2District")}
                                                        maxLength={50}
                                                        onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-z\s.-]/g, ''); }}
                                                    />
                                                    {renderInputIcons("pref2District")}
                                                </div>
                                                {renderFieldError("pref2District")}
                                            </div>

                                            <div className="col-span-1 sm:col-span-2 md:col-span-3 mt-2">
                                                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Centre <span className="text-red-500">*</span></label>
                                                <Controller
                                                    name="pref2Centre"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <CustomSelect
                                                            options={pref2Centres}
                                                            value={field.value || ""}
                                                            onChange={field.onChange}
                                                            placeholder="--SELECT--"
                                                            hasError={getFieldState("pref2Centre").hasError}
                                                        />
                                                    )}
                                                />
                                                {renderFieldError("pref2Centre")}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="pt-6 border-t border-dashed border-gray-100 dark:border-slate-800">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full sm:w-[200px] bg-primary text-white font-heading font-extrabold text-lg py-4 rounded-2xl sm:rounded-3xl shadow-[0_10px_30px_rgba(251,175,1,0.3)] hover:shadow-[0_15px_40px_rgba(251,175,1,0.4)] transition-all duration-300 mx-auto block group relative overflow-hidden"
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



            {/* ── Footer ── */}
            <Footer />
        </main>
    );
}
