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
    { title: "Tuition Fee", description: "Payable monthly or term-wise throughout the academic year", icon: BookOpen, color: "#0052ff" },
    { title: "Annual Fee", description: "Covers academic materials, activities, and enrichment programs", icon: Calendar, color: "#0fb85c" },
    { title: "Transport Fee", description: "Optional fee based on route and distance from school", icon: Bus, color: "#fbaf01" },
];

const newsEvents = [
    {
        title: "Annual Day Celebration 2025",
        date: "March 15, 2025",
        description: "Join us for a spectacular showcase of talent, creativity, and achievements from our little stars.",
        color: "#e83e8c",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop",
    },
    {
        title: "ZeeQue Fest – Fun & Learning",
        date: "April 5, 2025",
        description: "A day filled with games, competitions, art exhibitions, and live performances by our students.",
        color: "#0052ff",
        image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?q=80&w=600&auto=format&fit=crop",
    },
    {
        title: "Parent-Teacher Meeting",
        date: "April 20, 2025",
        description: "An opportunity for parents to discuss their child's progress and development with our mentors.",
        color: "#0fb85c",
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?q=80&w=600&auto=format&fit=crop",
    },
    {
        title: "Summer Camp Registration Open",
        date: "May 1, 2025",
        description: "Exciting summer camp with art, sports, nature exploration, and creative workshops for kids.",
        color: "#fbaf01",
        image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=600&auto=format&fit=crop",
    },
];

/* ══════════════════════════════════════════════
   ADMISSION PAGE
   ══════════════════════════════════════════════ */
export default function AdmissionPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#fffcf2] to-[#faeed1] dark:from-slate-900 dark:to-slate-950 font-body selection:bg-secondary selection:text-white relative overflow-hidden transition-colors duration-300">

            {/* ── Header ── */}
            <div className="w-full relative z-50">
                <div className="hidden lg:block w-full bg-white dark:bg-[#020618] border-b border-dashed border-gray-200 dark:border-slate-700 transition-colors duration-300">
                    <TopHeader />
                </div>
                <div className="max-w-[1140px] mx-auto bg-white dark:bg-transparent rounded-b-[40px] shadow-sm border border-gray-100 dark:border-slate-800 transition-colors duration-300">
                    <Navbar />
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

                        <h1 className="font-heading font-extrabold text-[#222222] dark:text-white text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
                            {"Admission "}
                            <span className="relative inline-block">
                                <span className="text-primary">Info</span>
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                                    <path d="M2 8C40 2 80 2 100 6C120 10 160 10 198 4" stroke="#fbaf01" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-[#0fb85c] font-heading font-bold uppercase tracking-wider text-sm mb-4">
                            Where Knowledge and Morality Go Hand in Hand
                        </p>
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
                        <span className="text-[#4361EE] font-heading font-bold uppercase tracking-wider text-sm mb-3 block flex items-center justify-center gap-2">
                            <ClipboardList className="w-4 h-4" />
                            Checklist
                        </span>
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
                                <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-[60px] opacity-10 group-hover:opacity-20 transition-opacity" style={{ backgroundColor: doc.color }} />
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
                        <span className="text-[#ef4225] font-heading font-bold uppercase tracking-wider text-sm mb-3 block flex items-center justify-center gap-2">
                            <CreditCard className="w-4 h-4" />
                            Fee Details
                        </span>
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
                            <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-[80px] bg-[#fbaf01]/10" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-tr-[60px] bg-[#ef4225]/5" />

                            <div className="relative z-10">
                                <div className="text-4xl mb-4">📞</div>
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

            {/* ══════════════════════════════════
                SECTION 5: News & Events
               ══════════════════════════════════ */}
            <section className="py-10 md:py-14 lg:py-18 bg-gradient-to-b from-[#fffcf2] to-white dark:from-slate-950 dark:to-slate-900 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <span className="text-[#7c3aed] font-heading font-bold uppercase tracking-wider text-sm mb-3 block flex items-center justify-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            Stay Updated
                        </span>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            News &{" "}
                            <span className="text-[#7c3aed]">Events</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-2xl mx-auto leading-relaxed">
                            Stay connected with the latest happenings, events, and announcements from ZeeQue Preschool.
                        </p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {newsEvents.map((event, i) => (
                            <motion.div
                                key={event.title}
                                custom={i}
                                variants={fadeUp}
                                className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border-2 border-gray-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                            >
                                {/* Image */}
                                <div className="relative h-44 overflow-hidden">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                        <Clock className="w-3 h-3 text-gray-500" />
                                        <span className="text-[11px] font-bold text-gray-600 dark:text-gray-300">{event.date}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <div className="w-8 h-1 rounded-full mb-3" style={{ backgroundColor: event.color }} />
                                    <h3 className="font-heading font-bold text-[#222] dark:text-white text-[15px] leading-tight mb-2 line-clamp-2">{event.title}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 font-body text-[13px] leading-relaxed line-clamp-2">{event.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* More News Button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-center"
                    >
                        <Link
                            href="/events"
                            className="inline-flex items-center gap-2 bg-[#7c3aed] text-white px-8 py-4 rounded-2xl font-heading font-bold text-[16px] hover:bg-[#6d28d9] shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            More News
                            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ── Footer ── */}
            <Footer />
        </main>
    );
}
