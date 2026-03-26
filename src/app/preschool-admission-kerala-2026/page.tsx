"use client";

import Image from "next/image";
import Link from "next/link";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import {
    ChevronRight,
    FileText,
    ClipboardList,
    Baby,
    Camera,
    CreditCard,
    BookOpen,
    Calendar,
    Bus,
    Phone,
    Mail,
    ArrowRight,
    Sparkles,
    Clock,
    MapPin,
} from "lucide-react";

/* ── Animation Variants ── */
const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
    }),
};

const stagger: Variants = {
    visible: { transition: { staggerChildren: 0.1 } },
};

/* ── Data ── */
const documents = [
    { title: "Aadhaar Card Copy", description: "Photocopy of the child's Aadhaar card for identity verification", icon: FileText, color: "#4361EE" },
    { title: "Application Form", description: "Completed admission application form available at the school office", icon: ClipboardList, color: "#0fb85c" },
    { title: "Birth Certificate Copy", description: "Official birth certificate copy issued by the local municipality", icon: Baby, color: "#e83e8c" },
    { title: "2 Passport Size Photos", description: "Recent passport-sized photographs with white background", icon: Camera, color: "#fbaf01" },
];

const feeItems = [
    { title: "Admission Fee", description: "One-time fee payable at the time of joining", icon: CreditCard, color: "#ef4225" },
    { title: "Tuition Fee", description: "Payable monthly or term-wise throughout the academic year", icon: BookOpen, color: "#3FB7E5" },
    { title: "Annual Fee", description: "Covers academic materials, activities, and enrichment programs", icon: Calendar, color: "#0fb85c" },
    { title: "Transport Fee", description: "Optional fee based on route and distance from school", icon: Bus, color: "#fbaf01" },
];


/* ══════════════════════════════════════════════
   ADMISSION PAGE
   ══════════════════════════════════════════════ */
export default function AdmissionPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#fffcf2] to-[#faeed1] dark:from-slate-900 dark:to-slate-950 font-body selection:bg-secondary selection:text-white relative overflow-hidden transition-colors duration-300">

            {/* ── Header ── */}
            <div className="w-full relative z-50">
                <div className="hidden lg:block w-full bg-white dark:bg-[#020618] transition-colors duration-300">
                    <TopHeader />
                </div>
                <div className="w-full bg-[#fffcf2] dark:bg-slate-900 transition-colors duration-300">
                    <div className="max-w-[1140px] mx-auto relative z-10">
                        <Navbar />
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════
                SECTION 1: Hero Banner
               ══════════════════════════════════ */}
            <section className="relative py-10 md:py-14 lg:py-20 overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-[10%] w-20 h-20 rounded-full bg-[#fbaf01]/10 animate-pulse" />
                    <div className="absolute top-20 right-[15%] w-14 h-14 rounded-full bg-[#e83e8c]/10 animate-pulse delay-500" />
                    <div className="absolute bottom-10 left-[20%] w-16 h-16 rounded-full bg-[#0fb85c]/10 animate-pulse delay-1000" />
                    <div className="absolute top-1/2 right-[8%] w-24 h-24 rounded-full border-4 border-dashed border-[#ef4225]/10" />
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        {/* Breadcrumb */}
                        <div className="flex items-center justify-center gap-2 mb-6 font-body text-sm">
                            <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                            <span className="text-primary font-semibold">Admission</span>
                        </div>

                        <h1 className="font-heading font-extrabold text-[#222222] dark:text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
                            ZeeQue Preschool Admission 2026 <br className="hidden md:block" /> Secure Your Child&apos;s Future with Islamic Montessori Education
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            At Zeeque, we believe in making the admission process simple, transparent, and parent-friendly. This page provides all the essential information you need about enrolling your child, including our fee structure, school uniform guidelines, and required documents. Our goal is to ensure a smooth start to your child&apos;s educational journey in a nurturing and value-based learning environment.
                        </p>
                    </motion.div>
                </div>

                {/* Wavy divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1440 100" fill="none" className="w-full h-auto">
                        <path d="M0,60 C360,100 720,20 1080,60 C1260,80 1380,40 1440,60 L1440,100 L0,100 Z" fill="white" className="dark:fill-slate-900" />
                    </svg>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 2: Documents Required
               ══════════════════════════════════ */}
            <section className="py-10 md:py-14 lg:py-18 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="absolute top-20 right-10 w-32 h-32 rounded-full border-4 border-dashed border-[#4361EE]/10 pointer-events-none hidden xl:block" />

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center bg-[#4361EE]/10 border border-[#4361EE]/20 px-4 py-2 rounded-full mb-6 backdrop-blur-md shadow-sm group hover:bg-[#4361EE]/15 transition-all duration-300 mx-auto w-fit">
                            <span className="text-sm font-heading font-bold text-[#4361EE] tracking-tight">Checklist</span>
                        </div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Documents Required for{" "}
                            <span className="text-[#4361EE]">Admission</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-2xl mx-auto leading-relaxed">
                            Please ensure you have the following documents ready when applying for admission at ZeeQue Preschool.
                        </p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {documents.map((doc, i) => (
                            <motion.div
                                key={doc.title}
                                custom={i}
                                variants={fadeUp}
                                className="bg-white dark:bg-slate-800 rounded-3xl p-7 border-2 border-gray-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center relative overflow-hidden"
                            >
                                <div
                                    className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                                    style={{ backgroundColor: `${doc.color}15` }}
                                >
                                    <doc.icon className="w-8 h-8" style={{ color: doc.color }} />
                                </div>
                                <h3 className="font-heading font-bold text-[#222] dark:text-white text-lg mb-2">{doc.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 font-body text-[14px] leading-relaxed">{doc.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 3: Fee Structure
               ══════════════════════════════════ */}
            <section className="py-10 md:py-14 lg:py-18 bg-gradient-to-b from-[#fffcf2] to-white dark:from-slate-950 dark:to-slate-900 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
                    <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
                        <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="white" className="dark:fill-slate-900" />
                    </svg>
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center bg-[#ef4225]/10 border border-[#ef4225]/20 px-4 py-2 rounded-full mb-6 backdrop-blur-md shadow-sm group hover:bg-[#ef4225]/15 transition-all duration-300 mx-auto w-fit">
                            <span className="text-sm font-heading font-bold text-[#ef4225] tracking-tight">Fee Details</span>
                        </div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Fee Structure{" "}
                            <span className="text-[#ef4225]">Includes</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-2xl mx-auto leading-relaxed">
                            Our fee structure is designed to be transparent and affordable, covering all essential aspects of your child&apos;s education.
                        </p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {feeItems.map((fee, i) => (
                            <motion.div
                                key={fee.title}
                                custom={i}
                                variants={fadeUp}
                                className="flex items-start gap-5 bg-white dark:bg-slate-800 rounded-3xl p-7 border-2 border-gray-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <div
                                    className="w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                                    style={{ backgroundColor: `${fee.color}12` }}
                                >
                                    <fee.icon className="w-7 h-7" style={{ color: fee.color }} />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-[#222] dark:text-white text-lg mb-1">{fee.title}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 font-body text-[15px] leading-relaxed">{fee.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 4: Contact for Fee Queries
               ══════════════════════════════════ */}
            <section className="py-10 md:py-14 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="max-w-[800px] mx-auto px-4 xl:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="bg-gradient-to-br from-[#fffcf2] to-[#faeed1] dark:from-slate-800 dark:to-slate-900 rounded-[32px] p-10 md:p-14 border-2 border-gray-100 dark:border-slate-700 shadow-lg relative overflow-hidden">
                            {/* Decorative corner */}

                            <div className="relative z-10">
                                <div className="text-4xl mb-4"></div>
                                <h3 className="font-heading font-extrabold text-[#222] dark:text-white text-2xl md:text-3xl mb-4">
                                    Have Questions About Fees?
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                                    For the latest fee details or any queries, please contact the school office.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                                    <a href="tel:+914832744451" className="flex items-center gap-3 group">
                                        <div className="w-12 h-12 rounded-xl bg-[#0fb85c]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Phone className="w-6 h-6 text-[#0fb85c]" />
                                        </div>
                                        <div className="text-left">
                                            <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Call Us</div>
                                            <div className="font-heading font-bold text-[#222] dark:text-white text-lg">+91 483 2744451</div>
                                        </div>
                                    </a>

                                    <a href="mailto:enquiry@zeeque.com" className="flex items-center gap-3 group">
                                        <div className="w-12 h-12 rounded-xl bg-[#4361EE]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Mail className="w-6 h-6 text-[#4361EE]" />
                                        </div>
                                        <div className="text-left">
                                            <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Email</div>
                                            <div className="font-heading font-bold text-[#222] dark:text-white text-lg">enquiry@zeeque.com</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* ── Footer ── */}
            <Footer />
        </main>
    );
}
