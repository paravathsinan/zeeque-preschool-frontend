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
    Building2,
    CheckCircle2,
    Calendar,
    Users,
    Globe,
    Send
} from "lucide-react";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GradeStreamTeacherTraineesPage() {
    return (
        <main className="min-h-screen bg-[#fffcf2] dark:bg-slate-950 font-body selection:bg-secondary selection:text-white transition-colors duration-300">
            {/* ── Header ── */}
            <div className="w-full relative z-50">
                <div className="hidden lg:block w-full bg-white dark:bg-slate-800 border-b border-dashed border-gray-200 dark:border-slate-700">
                    <TopHeader />
                </div>
                <div className="max-w-[1140px] mx-auto bg-white dark:bg-slate-900 rounded-b-[40px] shadow-sm border border-gray-100 dark:border-slate-800 px-4 xl:px-8">
                    <Navbar />
                </div>
            </div>

            {/* ══════════════════════════════════
                SECTION 1: Hero Banner
               ══════════════════════════════════ */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/zeeque images/hero-section.jpg"
                        alt="Zeeque Preschool Building"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Breadcrumbs */}
                        <div className="flex items-center justify-center gap-2 mb-6 text-sm font-medium text-gray-300">
                            <Link href="/careers" className="hover:text-primary transition-colors">Careers</Link>
                            <ChevronRight className="w-4 h-4 text-gray-500" />
                            <span className="text-primary">Grade Stream Teacher Trainees</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-4 tracking-tight uppercase">
                            GRADE STREAM <span className="text-primary italic block sm:inline">TEACHER TRAINEES</span>
                        </h1>
                        <p className="text-gray-300 text-lg uppercase tracking-[0.2em] font-heading font-bold mb-2">
                            [ TO BE FILLED BY THE CANDIDATE ]
                        </p>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 2: Recruitment Form
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-32 relative">
                <div className="max-w-[900px] mx-auto px-4 relative z-10">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="bg-white dark:bg-slate-900 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 dark:border-slate-800 overflow-hidden"
                    >
                        {/* Form Header */}
                        <div className="bg-primary/5 dark:bg-primary/10 py-10 px-8 md:px-12 border-b border-dashed border-primary/20 text-center">
                            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#222] dark:text-white mb-2">
                                Application Form
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400">Please provide accurate information for your trainee application.</p>
                        </div>

                        <form className="p-8 md:p-12 space-y-12">

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
                                        <input
                                            type="text"
                                            placeholder="Enter your full name"
                                            className="w-full bg-[#f8f9fa] dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-4 outline-none transition-all duration-300 text-gray-700 dark:text-gray-200"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Date of Birth <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <input
                                                type="date"
                                                className="w-full bg-[#f8f9fa] dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-4 outline-none transition-all duration-300 text-gray-700 dark:text-gray-200 appearance-none"
                                                required
                                            />
                                            <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Sex <span className="text-red-500">*</span></label>
                                        <select
                                            className="w-full bg-[#f8f9fa] dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-4 outline-none transition-all duration-300 text-gray-700 dark:text-gray-200 appearance-none"
                                            required
                                            defaultValue=""
                                        >
                                            <option value="" disabled>SELECT</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>

                                    <div className="col-span-1 md:col-span-2">
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Address with Pin code <span className="text-red-500">*</span></label>
                                        <textarea
                                            placeholder="Enter your address"
                                            rows={4}
                                            className="w-full bg-[#f8f9fa] dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-4 outline-none transition-all duration-300 text-gray-700 dark:text-gray-200 resize-none"
                                            required
                                        ></textarea>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">City <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            placeholder="Nearby City"
                                            className="w-full bg-[#f8f9fa] dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-4 outline-none transition-all duration-300 text-gray-700 dark:text-gray-200"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">State <span className="text-red-500">*</span></label>
                                        <select className="w-full bg-[#f8f9fa] dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-4 outline-none transition-all duration-300 text-gray-700 dark:text-gray-200" required defaultValue="">
                                            <option value="" disabled>SELECT</option>
                                            <option value="kerala">Kerala</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">District <span className="text-red-500">*</span></label>
                                        <select className="w-full bg-[#f8f9fa] dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-4 outline-none transition-all duration-300 text-gray-700 dark:text-gray-200" required defaultValue="">
                                            <option value="" disabled>SELECT</option>
                                            <option value="kozhikode">Kozhikode</option>
                                            <option value="malappuram">Malappuram</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Marital Status <span className="text-red-500">*</span></label>
                                        <select className="w-full bg-[#f8f9fa] dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-4 outline-none transition-all duration-300 text-gray-700 dark:text-gray-200" required defaultValue="">
                                            <option value="" disabled>SELECT</option>
                                            <option value="single">Single</option>
                                            <option value="married">Married</option>
                                        </select>
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
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Contact Number <span className="text-red-500">*</span></label>
                                        <div className="relative group">
                                            <input
                                                type="tel"
                                                className="w-full bg-[#f8f9fa] dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-4 outline-none transition-all duration-300 text-gray-700 dark:text-gray-200"
                                                required
                                            />
                                            <Phone className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:animate-ringing origin-center transition-transform group-hover:text-primary" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Whatsapp Number <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <input
                                                type="tel"
                                                className="w-full bg-[#f8f9fa] dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-4 outline-none transition-all duration-300 text-gray-700 dark:text-gray-200"
                                                required
                                            />
                                            <Image src="https://cdn-icons-png.flaticon.com/512/733/733585.png" width={20} height={20} alt="WhatsApp" className="absolute right-6 top-1/2 -translate-y-1/2 opacity-40" />
                                        </div>
                                    </div>

                                    <div className="col-span-1 md:col-span-2">
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Email Id <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                placeholder="Your Email ID"
                                                className="w-full bg-[#f8f9fa] dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-4 outline-none transition-all duration-300 text-gray-700 dark:text-gray-200"
                                                required
                                            />
                                            <Mail className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Qualifications */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-slate-800 flex items-center justify-center text-[#7c3aed]">
                                        <GraduationCap className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-[#222] dark:text-white">Qualifications</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Religious Education <span className="text-red-500">*</span></label>
                                        <select className="w-full bg-[#f8f9fa] dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-4 outline-none transition-all duration-300 text-gray-700 dark:text-gray-200" required defaultValue="">
                                            <option value="" disabled>---SELECT---</option>
                                            <option value="Hifz">Hifz</option>
                                            <option value="Alim">Alim</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">General Education <span className="text-red-500">*</span></label>
                                        <select className="w-full bg-[#f8f9fa] dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-4 outline-none transition-all duration-300 text-gray-700 dark:text-gray-200" required defaultValue="">
                                            <option value="" disabled>---SELECT---</option>
                                            <option value="sslc">SSLC</option>
                                            <option value="plus-two">Plus Two</option>
                                            <option value="degree">Degree</option>
                                        </select>
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
                                        <select className="w-full bg-[#f8f9fa] dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-3 outline-none transition-all duration-300 text-gray-700 dark:text-gray-200" required defaultValue="">
                                            <option value="" disabled>--SELECT--</option>
                                            <option value="india">India</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">State <span className="text-red-500">*</span></label>
                                        <select className="w-full bg-[#f8f9fa] dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-3 outline-none transition-all duration-300 text-gray-700 dark:text-gray-200" required defaultValue="">
                                            <option value="" disabled>--SELECT--</option>
                                            <option value="kerala">Kerala</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">District <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            className="w-full bg-[#f8f9fa] dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-3 outline-none transition-all duration-300 text-gray-700 dark:text-gray-200"
                                            required
                                        />
                                    </div>

                                    <div className="col-span-1 sm:col-span-2 md:col-span-3 mt-4">
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Centre <span className="text-red-500">*</span></label>
                                        <select className="w-full bg-[#f8f9fa] dark:bg-slate-800 border-2 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-slate-700 rounded-2xl px-6 py-4 outline-none transition-all duration-300 text-gray-700 dark:text-gray-200" required defaultValue="">
                                            <option value="" disabled>--SELECT--</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-6 border-t border-dashed border-gray-100 dark:border-slate-800">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-[200px] bg-[#c2185b] text-white font-heading font-extrabold text-lg py-4 rounded-3xl shadow-[0_10px_30px_rgba(194,24,91,0.3)] hover:shadow-[0_15px_40px_rgba(194,24,91,0.4)] transition-all duration-300 mx-auto block group relative overflow-hidden"
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
            <div className="w-full h-24 relative overflow-hidden pointer-events-none mb-10">
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
