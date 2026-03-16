"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ChevronRight,
    User,
    Phone,
    Mail,
    MapPin,
    GraduationCap,
    Send,
    Calendar
} from "lucide-react";
import { useState } from "react";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DatePicker from "@/components/DatePicker";
import CustomSelect from "@/components/CustomSelect";

export default function TeacherTraineesPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        dob: "",
        gender: "",
        address: "",
        city: "",
        state: "",
        district: "",
        maritalStatus: "",
        contactNumber: "",
        whatsappNumber: "",
        email: "",
        religiousEdu: "",
        generalEdu: "",
        country: "india",
        prefState: "",
        prefDistrict: "",
        prefCentre: ""
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
        if (!formData.dob) newErrors.dob = "Date of birth is required";
        if (!formData.gender) newErrors.gender = "Gender is required";
        if (!formData.address.trim()) newErrors.address = "Address is required";
        if (!formData.city.trim()) newErrors.city = "City is required";
        if (!formData.state) newErrors.state = "State is required";
        if (!formData.district) newErrors.district = "District is required";
        if (!formData.maritalStatus) newErrors.maritalStatus = "Marital status is required";
        if (!formData.contactNumber.trim()) newErrors.contactNumber = "Contact number is required";
        if (!formData.whatsappNumber.trim()) newErrors.whatsappNumber = "WhatsApp number is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email address is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.religiousEdu) newErrors.religiousEdu = "Religious education is required";
        if (!formData.generalEdu) newErrors.generalEdu = "General education is required";
        if (!formData.country) newErrors.country = "Country is required";
        if (!formData.prefState) newErrors.prefState = "Preferred state is required";
        if (!formData.prefDistrict) newErrors.prefDistrict = "Preferred district is required";
        if (!formData.prefCentre) newErrors.prefCentre = "Preferred centre is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (isSubmitted) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
        if (isSubmitted) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        if (validate()) {
            console.log("Form Submitted:", formData);
            alert("Application submitted successfully!");
        }
    };
    return (
        <main className="min-h-screen bg-[#fffcf2] dark:bg-slate-950 font-body selection:bg-secondary selection:text-white transition-colors duration-300">
            {/* ── Header ── */}
            <div className="w-full relative z-50">
                <div className="hidden lg:block w-full bg-white dark:bg-slate-800">
                    <TopHeader />
                </div>
                <div className="w-full bg-[#FFFCF2] dark:bg-slate-950 transition-colors duration-300">
                    <div className="max-w-[1140px] mx-auto relative z-10 transition-colors duration-300">
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
                            <Link href="/careers" className="hover:text-primary transition-colors">Careers</Link>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                            <span className="text-primary font-bold">Teacher Trainees</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-extrabold text-[#222] dark:text-white mb-4 tracking-tight">
                            TEACHER <span className="text-primary italic">TRAINEES</span>
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg uppercase tracking-[0.1em] sm:tracking-[0.2em] font-heading font-bold mb-2">
                            [ TO BE FILLED BY THE CANDIDATE ]
                        </p>
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

                        <form 
                            className="p-6 md:p-12 space-y-8 md:space-y-12"
                            onSubmit={handleSubmit}
                            noValidate
                        >

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
                                        <label className={`block text-sm font-bold mb-2 transition-colors ${errors.fullName ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>Full Name <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            id="trainee-full-name"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            autoComplete="name"
                                            placeholder="Enter your full name"
                                            className={`w-full bg-[#f8f9fa] dark:bg-slate-800 border-2 transition-all duration-300 rounded-2xl px-6 py-4 outline-none ${errors.fullName ? 'border-red-500/50 focus:border-red-500 bg-red-50/10' : 'border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700'} text-gray-700 dark:text-gray-200`}
                                            required
                                        />
                                        {errors.fullName && (
                                            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs font-bold mt-2 ml-2">{errors.fullName}</motion.p>
                                        )}
                                    </div>

                                    <div>
                                        <label className={`block text-sm font-bold mb-2 transition-colors ${errors.dob ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>Date of Birth <span className="text-red-500">*</span></label>
                                        <DatePicker
                                            value={formData.dob}
                                            onChange={(date) => handleSelectChange("dob", date)}
                                            placeholder="Select Date"
                                            hasError={!!errors.dob}
                                            className={`w-full bg-[#f8f9fa] dark:bg-slate-800 border-2 transition-all duration-300 rounded-2xl px-6 py-4 outline-none ${errors.dob ? 'border-red-500/50 focus:border-red-500 bg-red-50/10' : 'border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700'} text-gray-700 dark:text-gray-200`}
                                        />
                                        {errors.dob && (
                                            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs font-bold mt-2 ml-2">{errors.dob}</motion.p>
                                        )}
                                    </div>

                                    <div>
                                        <label className={`block text-sm font-bold mb-2 transition-colors ${errors.gender ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>Sex <span className="text-red-500">*</span></label>
                                        <CustomSelect
                                            options={[
                                                { value: "male", label: "Male" },
                                                { value: "female", label: "Female" },
                                                { value: "other", label: "Other" }
                                            ]}
                                            value={formData.gender}
                                            onChange={(val) => handleSelectChange("gender", val)}
                                            placeholder="Select Gender"
                                            hasError={!!errors.gender}
                                        />
                                        {errors.gender && (
                                            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs font-bold mt-2 ml-2">{errors.gender}</motion.p>
                                        )}
                                    </div>

                                    <div className="col-span-1 md:col-span-2">
                                        <label className={`block text-sm font-bold mb-2 transition-colors ${errors.address ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>Address with Pin code <span className="text-red-500">*</span></label>
                                        <textarea
                                            id="trainee-address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            autoComplete="street-address"
                                            placeholder="Enter your complete residential address"
                                            rows={4}
                                            className={`w-full bg-[#f8f9fa] dark:bg-slate-800 border-2 transition-all duration-300 rounded-2xl px-6 py-4 outline-none resize-none ${errors.address ? 'border-red-500/50 focus:border-red-500 bg-red-50/10' : 'border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700'} text-gray-700 dark:text-gray-200`}
                                            required
                                        ></textarea>
                                        {errors.address && (
                                            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs font-bold mt-2 ml-2">{errors.address}</motion.p>
                                        )}
                                    </div>

                                    <div>
                                        <label className={`block text-sm font-bold mb-2 transition-colors ${errors.city ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>City <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            id="trainee-city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            autoComplete="address-level2"
                                            placeholder="Nearby City"
                                            className={`w-full bg-[#f8f9fa] dark:bg-slate-800 border-2 transition-all duration-300 rounded-2xl px-6 py-4 outline-none ${errors.city ? 'border-red-500/50 focus:border-red-500 bg-red-50/10' : 'border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700'} text-gray-700 dark:text-gray-200`}
                                            required
                                        />
                                        {errors.city && (
                                            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs font-bold mt-2 ml-2">{errors.city}</motion.p>
                                        )}
                                    </div>

                                    <div>
                                        <label className={`block text-sm font-bold mb-2 transition-colors ${errors.state ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>State <span className="text-red-500">*</span></label>
                                        <CustomSelect
                                            options={[
                                                { value: "kerala", label: "Kerala" }
                                            ]}
                                            value={formData.state}
                                            onChange={(val) => handleSelectChange("state", val)}
                                            placeholder="SELECT STATE"
                                            hasError={!!errors.state}
                                        />
                                        {errors.state && (
                                            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs font-bold mt-2 ml-2">{errors.state}</motion.p>
                                        )}
                                    </div>

                                    <div>
                                        <label className={`block text-sm font-bold mb-2 transition-colors ${errors.district ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>District <span className="text-red-500">*</span></label>
                                        <CustomSelect
                                            options={[
                                                { value: "kozhikode", label: "Kozhikode" }
                                            ]}
                                            value={formData.district}
                                            onChange={(val) => handleSelectChange("district", val)}
                                            placeholder="SELECT DISTRICT"
                                            hasError={!!errors.district}
                                        />
                                        {errors.district && (
                                            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs font-bold mt-2 ml-2">{errors.district}</motion.p>
                                        )}
                                    </div>

                                    <div>
                                        <label className={`block text-sm font-bold mb-2 transition-colors ${errors.maritalStatus ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>Marital Status <span className="text-red-500">*</span></label>
                                        <CustomSelect
                                            options={[
                                                { value: "single", label: "Single" },
                                                { value: "married", label: "Married" }
                                            ]}
                                            value={formData.maritalStatus}
                                            onChange={(val) => handleSelectChange("maritalStatus", val)}
                                            placeholder="SELECT STATUS"
                                            hasError={!!errors.maritalStatus}
                                        />
                                        {errors.maritalStatus && (
                                            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs font-bold mt-2 ml-2">{errors.maritalStatus}</motion.p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6 group">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-[#0052ff]">
                                        <Phone className="w-5 h-5 group-hover:animate-ringing origin-center transition-transform" />
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-[#222] dark:text-white group-hover:text-primary transition-colors">Contact Details</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className={`block text-sm font-bold mb-2 transition-colors ${errors.contactNumber ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>Contact Number <span className="text-red-500">*</span></label>
                                        <div className="relative group">
                                            <input
                                                type="tel"
                                                id="trainee-contact"
                                                name="contactNumber"
                                                value={formData.contactNumber}
                                                onChange={handleInputChange}
                                                autoComplete="tel"
                                                placeholder="Mobile number"
                                                className={`w-full bg-[#f8f9fa] dark:bg-slate-800 border-2 transition-all duration-300 rounded-2xl px-6 py-4 outline-none ${errors.contactNumber ? 'border-red-500/50 focus:border-red-500 bg-red-50/10' : 'border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700'} text-gray-700 dark:text-gray-200`}
                                                required
                                            />
                                            <Phone className={`absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${errors.contactNumber ? 'text-red-500' : 'text-gray-400 group-hover:text-primary'}`} />
                                        </div>
                                        {errors.contactNumber && (
                                            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs font-bold mt-2 ml-2">{errors.contactNumber}</motion.p>
                                        )}
                                    </div>

                                    <div>
                                        <label className={`block text-sm font-bold mb-2 transition-colors ${errors.whatsappNumber ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>WhatsApp Number <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <input
                                                type="tel"
                                                id="trainee-whatsapp"
                                                name="whatsappNumber"
                                                value={formData.whatsappNumber}
                                                onChange={handleInputChange}
                                                placeholder="WhatsApp number"
                                                className={`w-full bg-[#f8f9fa] dark:bg-slate-800 border-2 transition-all duration-300 rounded-2xl px-6 py-4 outline-none ${errors.whatsappNumber ? 'border-red-500/50 focus:border-red-500 bg-red-50/10' : 'border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700'} text-gray-700 dark:text-gray-200`}
                                                required
                                            />
                                            <Image src="https://cdn-icons-png.flaticon.com/512/733/733585.png" width={20} height={20} alt="WhatsApp icon" className={`absolute right-6 top-1/2 -translate-y-1/2 transition-opacity ${errors.whatsappNumber ? 'opacity-100' : 'opacity-40'}`} />
                                        </div>
                                        {errors.whatsappNumber && (
                                            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs font-bold mt-2 ml-2">{errors.whatsappNumber}</motion.p>
                                        )}
                                    </div>

                                    <div className="col-span-1 md:col-span-2">
                                        <label className={`block text-sm font-bold mb-2 transition-colors ${errors.email ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>Email Address <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="trainee-email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                autoComplete="email"
                                                placeholder="Your Email ID"
                                                className={`w-full bg-[#f8f9fa] dark:bg-slate-800 border-2 transition-all duration-300 rounded-2xl px-6 py-4 outline-none ${errors.email ? 'border-red-500/50 focus:border-red-500 bg-red-50/10' : 'border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700'} text-gray-700 dark:text-gray-200`}
                                                required
                                            />
                                            <Mail className={`absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${errors.email ? 'text-red-500' : 'text-gray-400'}`} />
                                        </div>
                                        {errors.email && (
                                            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs font-bold mt-2 ml-2">{errors.email}</motion.p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Qualifications */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-slate-800 flex items-center justify-center text-[#7c3aed]">
                                        <GraduationCap className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-[#222] dark:text-white">Educational Qualifications</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className={`block text-sm font-bold mb-2 transition-colors ${errors.religiousEdu ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>Religious Education <span className="text-red-500">*</span></label>
                                        <CustomSelect
                                            options={[
                                                { value: "madrasa", label: "Madrasa Grade 7/10/12" },
                                                { value: "degree", label: "Afzal-ul-ulama Degree" },
                                                { value: "post-graduation", label: "M.A/Ph.D" },
                                                { value: "other", label: "Other" }
                                            ]}
                                            value={formData.religiousEdu}
                                            onChange={(val) => handleSelectChange("religiousEdu", val)}
                                            placeholder="-- SELECT --"
                                            hasError={!!errors.religiousEdu}
                                        />
                                        {errors.religiousEdu && (
                                            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs font-bold mt-2 ml-2">{errors.religiousEdu}</motion.p>
                                        )}
                                    </div>

                                    <div>
                                        <label className={`block text-sm font-bold mb-2 transition-colors ${errors.generalEdu ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>General Education <span className="text-red-500">*</span></label>
                                        <CustomSelect
                                            options={[
                                                { value: "sslc", label: "SSLC / Class 10" },
                                                { value: "plus-two", label: "Plus Two / Class 12" },
                                                { value: "degree", label: "Bachelor's Degree" },
                                                { value: "pg", label: "Post Graduation" }
                                            ]}
                                            value={formData.generalEdu}
                                            onChange={(val) => handleSelectChange("generalEdu", val)}
                                            placeholder="-- SELECT --"
                                            hasError={!!errors.generalEdu}
                                        />
                                        {errors.generalEdu && (
                                            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs font-bold mt-2 ml-2">{errors.generalEdu}</motion.p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Centre Preference */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-slate-800 flex items-center justify-center text-[#0fb85c]">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-[#222] dark:text-white">Centre Preference</h3>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    <div>
                                        <label className={`block text-sm font-bold mb-2 transition-colors ${errors.country ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>Country <span className="text-red-500">*</span></label>
                                        <CustomSelect
                                            options={[
                                                { value: "india", label: "India" },
                                                { value: "uae", label: "UAE" }
                                            ]}
                                            value={formData.country}
                                            onChange={(val) => handleSelectChange("country", val)}
                                            placeholder="SELECT"
                                            hasError={!!errors.country}
                                        />
                                        {errors.country && (
                                            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs font-bold mt-2 ml-2">{errors.country}</motion.p>
                                        )}
                                    </div>

                                    <div>
                                        <label className={`block text-sm font-bold mb-2 transition-colors ${errors.prefState ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>State <span className="text-red-500">*</span></label>
                                        <CustomSelect
                                            options={[
                                                { value: "kerala", label: "Kerala" }
                                            ]}
                                            value={formData.prefState}
                                            onChange={(val) => handleSelectChange("prefState", val)}
                                            placeholder="SELECT"
                                            hasError={!!errors.prefState}
                                        />
                                        {errors.prefState && (
                                            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs font-bold mt-2 ml-2">{errors.prefState}</motion.p>
                                        )}
                                    </div>

                                    <div>
                                        <label className={`block text-sm font-bold mb-2 transition-colors ${errors.prefDistrict ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>District <span className="text-red-500">*</span></label>
                                        <CustomSelect
                                            options={[
                                                { value: "kozhikode", label: "Kozhikode" }
                                            ]}
                                            value={formData.prefDistrict}
                                            onChange={(val) => handleSelectChange("prefDistrict", val)}
                                            placeholder="SELECT"
                                            hasError={!!errors.prefDistrict}
                                        />
                                        {errors.prefDistrict && (
                                            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs font-bold mt-2 ml-2">{errors.prefDistrict}</motion.p>
                                        )}
                                    </div>

                                    <div className="col-span-1 sm:col-span-2 md:col-span-3">
                                        <label className={`block text-sm font-bold mb-2 transition-colors ${errors.prefCentre ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>Preferred Centre <span className="text-red-500">*</span></label>
                                        <CustomSelect
                                            options={[
                                                { value: "centre1", label: "Zeeque Preschool Academy - Kozhikode" },
                                                { value: "centre2", label: "Zeeque Preschool Academy - Kochi" },
                                                { value: "centre3", label: "Zeeque Preschool Academy - Thrissur" }
                                            ]}
                                            value={formData.prefCentre}
                                            onChange={(val) => handleSelectChange("prefCentre", val)}
                                            placeholder="SELECT CENTRE"
                                            hasError={!!errors.prefCentre}
                                        />
                                        {errors.prefCentre && (
                                            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs font-bold mt-2 ml-2">{errors.prefCentre}</motion.p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-6 border-t border-dashed border-gray-100 dark:border-slate-800">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full bg-primary text-white font-heading font-extrabold text-lg sm:text-xl py-5 sm:py-6 rounded-2xl sm:rounded-3xl shadow-[0_10px_30px_rgba(232,62,140,0.3)] hover:shadow-[0_15px_40px_rgba(232,62,140,0.4)] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden group relative"
                                >
                                    <span className="relative z-10 uppercase tracking-wider">Submit Now</span>
                                    <Send className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />

                                    {/* Animation overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                                </motion.button>
                                <p className="text-center text-sm text-gray-400 mt-6 font-body">
                                    By submitting this form, you agree to Zeeque Preschool recruitment terms and conditions.
                                </p>
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
