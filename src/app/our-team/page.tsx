"use client";

import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import { motion } from "framer-motion";
import {
    Home, ChevronRight, ArrowRight, Mail, Sparkles, Star, Crown, Shield,
} from "lucide-react";
import type { Easing } from "framer-motion";

const ease: Easing = [0.25, 0.1, 0.25, 1];
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease } }),
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

/* ── Data ── */
const chiefPatrons = [
    { name: "Sheikh Abubakar Ahmad", role: "Chief Patron", image: "/images/team/sheikh_abubkr_ahammed.png" },
    { name: "C Muhammed Faizi", role: "Chief Patron", image: "/images/team/c_usthad.png" },
];

const directorate = [
    { name: "Dr. Hafi Azhari Al Handi", role: "Director General", image: "/images/team/MAH-1.jpg", color: "#ef4225" },
    { name: "Rasheed Punnassery", role: "CEO", image: "/images/team/rasheed_punnashery.png", color: "#3FB7E5" },
    { name: "Unais Muhammed", role: "Director Academics", image: "/images/team/unais.jpg", color: "#0fb85c" },
    { name: "Illias Abdullah Al Hamil", role: "Academic Administrator", image: "/images/team/illias.jpg", color: "#EF4225" },
];

const councilMembers = [
    "Muhammed Shakir — Chairman, Markaz Knowledge City",
    "Abdussalam Puthur — Managing Committee Member",
    "Urdappa Nehan — Executive Trustee, Markaz",
    "Umar Rahman Yousuf — Academic Counselor, Kerala",
];

const rdMembers = [
    "Mr. Mushtaq — Inspector (R&D)",
    "Al Hafiz Aseel Al Hamid (Ma. Comm. Research & Preschool Survey, IIT Hyderabad)",
    "Qazi Muhammad Shaqif Anwar — Chairman Markaz Quran Study Centre",
    "Hafidha Tharanum — Coordinator ECCE Institute & Consultant Mobile Pre-school",
    "Mr. Abdulrahman Muthukoya (PhD — Psychology & Education)",
    "Raseebhanu Afeefa Meleveetil — Curriculum Designer",
    "Muhammad Shareef Kunnummal — Preschool Physical Training Expert",
    "Al Hafiz Muneeb MSA — Content & Consulting",
];

/* ══════════════════════════════════════════════
   OUR TEAM PAGE
   ══════════════════════════════════════════════ */
export default function OurTeamPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 font-body selection:bg-secondary selection:text-white relative overflow-hidden transition-colors duration-300">

            {/* ── Header ── */}
            <div className="w-full relative z-50">
                <Navbar />
            </div>

            {/* ══════════════════════════════════
                SECTION 1: Custom Team Hero Banner
               ══════════════════════════════════ */}
            <section className="relative w-full pt-16 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-gradient-to-b from-[#f0f7ff] to-white dark:from-slate-900 dark:to-slate-950">
                
                {/* Abstract Background Shapes */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden max-w-[1440px] mx-auto">
                    <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-[#FFCB05]/20 blur-3xl" />
                    <div className="absolute top-[40%] right-[10%] w-80 h-80 rounded-full bg-[#0fb85c]/15 blur-3xl" />
                    <div className="absolute bottom-[10%] left-[20%] w-72 h-72 rounded-full bg-[#0060D6]/10 blur-3xl" />
                    
                    {/* Dotted pattern overlay */}
                    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#222 2px, transparent 2px)', backgroundSize: '32px 32px' }} />
                </div>



                {/* ===== Main Content Area ===== */}
                <div className="relative z-20 flex flex-col items-center px-4 max-w-[800px] mx-auto text-center mt-10 md:mt-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                    >
                        {/* Breadcrumb */}
                        <div className="flex items-center justify-center gap-2 mb-8 font-body text-sm bg-white/60 dark:bg-slate-800/60 backdrop-blur-md px-5 py-2 rounded-full w-fit mx-auto border border-gray-200 dark:border-slate-700 shadow-sm">
                            <Link href="/about-zeeque-preschool-kerala" className="text-gray-500 hover:text-primary transition-colors font-medium">About</Link>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                            <span className="font-bold text-primary">Our Team</span>
                        </div>

                        {/* Tagline */}
                        <span className="block text-primary font-heading font-bold tracking-wider uppercase text-sm mb-4">
                            The Minds Behind ZeeQue
                        </span>

                        {/* Heading */}
                        <h1 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl lg:text-[64px] leading-[1.1] mb-8 tracking-tight">
                            Meet Our Expert <br /> Educators & Leaders
                        </h1>

                        {/* Description */}
                        <p className="font-body text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            A passionate collective of educators, researchers, and visionary leaders dedicated to shaping the future of early childhood education.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                CHIEF PATRONS
               ══════════════════════════════════ */}
            <section className="pt-16 lg:pt-24 pb-0 bg-white dark:bg-slate-900">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-3xl md:text-4xl">Chief Patrons</h2>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl">
                        {chiefPatrons.map((person, i) => (
                            <motion.div key={person.name} custom={i} variants={fadeUp} className="group">
                                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-gray-100 dark:bg-slate-800">
                                    <Image
                                        src={person.image}
                                        alt={person.name}
                                        fill
                                        className="object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                </div>
                                <h3 className="font-heading font-bold text-[#222] dark:text-white text-lg">{person.name}</h3>
                                <p className="text-gray-400 dark:text-gray-500 font-body text-sm">{person.role}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── Subtle divider ── */}
            <div className="max-w-[1140px] mx-auto px-4 xl:px-8"><div className="h-px bg-gray-100 dark:bg-slate-800" /></div>

            {/* ══════════════════════════════════
                DIRECTORATE
               ══════════════════════════════════ */}
            <section className="py-16 lg:py-24 bg-white dark:bg-slate-900">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-3xl md:text-4xl">Directorate of Zeeque Preschool</h2>
                        <p className="text-gray-500 dark:text-gray-400 font-body text-base mt-2 max-w-xl">The core leadership team driving Zeeque Preschool&apos;s vision, strategy, and academic excellence across 50+ centers.</p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {directorate.map((person, i) => (
                            <motion.div key={person.name} custom={i} variants={fadeUp} className="group">
                                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-gray-100 dark:bg-slate-800">
                                    <Image
                                        src={person.image}
                                        alt={person.name}
                                        fill
                                        className="object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                </div>
                                <h3 className="font-heading font-bold text-[#222] dark:text-white text-[17px] leading-snug">{person.name}</h3>
                                <p className="text-sm font-body mt-0.5" style={{ color: person.color }}>{person.role}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── Subtle divider ── */}
            <div className="max-w-[1140px] mx-auto px-4 xl:px-8"><div className="h-px bg-gray-100 dark:bg-slate-800" /></div>

            {/* ══════════════════════════════════
                COUNCIL & R&D — Two column layout
               ══════════════════════════════════ */}
            <section className="py-16 lg:py-24 bg-white dark:bg-slate-900">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Council of Administration */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-3xl md:text-4xl mb-8">Council of Administration</h2>

                            <div className="grid grid-cols-1 gap-5">
                                {councilMembers.map((member) => {
                                    const [name, designation] = member.split(" — ");
                                    return (
                                        <div key={member} className="group relative flex flex-col p-6 rounded-3xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-[0_8px_30px_rgba(15,184,92,0.12)] hover:-translate-y-1 transition-all duration-500 overflow-hidden cursor-default">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#0fb85c]/20 to-transparent rounded-full blur-2xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="relative z-10 flex items-start gap-4">
                                                <div className="flex flex-col pt-1">
                                                    <h3 className="font-heading font-extrabold text-[#222] dark:text-white text-[19px] leading-tight group-hover:text-[#0fb85c] transition-colors duration-300">{name}</h3>
                                                    {designation && (
                                                        <p className="text-xs uppercase font-bold tracking-[0.1em] text-gray-400 dark:text-slate-500 mt-1.5 group-hover:text-gray-500 transition-colors duration-300">{designation}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Research & Development */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
                            <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-3xl md:text-4xl mb-8">Research & Development</h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {rdMembers.map((member) => {
                                    const parenMatch = member.match(/^(.+?)\s*\((.+)\)$/);
                                    const dashMatch = member.match(/^(.+?)\s*—\s*(.+)$/);
                                    let name = member;
                                    let designation = "";
                                    if (parenMatch) {
                                        name = parenMatch[1];
                                        designation = parenMatch[2];
                                    } else if (dashMatch) {
                                        name = dashMatch[1];
                                        designation = dashMatch[2];
                                    }
                                    return (
                                        <div key={member} className="group relative flex flex-col p-5 rounded-3xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-[0_8px_30px_rgba(239,66,37,0.12)] hover:-translate-y-1 transition-all duration-500 overflow-hidden cursor-default">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#EF4225]/20 to-transparent rounded-full blur-2xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="relative z-10 flex items-start gap-4">
                                                <div className="flex flex-col pt-0.5">
                                                    <h3 className="font-heading font-extrabold text-[#222] dark:text-white text-[17px] leading-tight group-hover:text-[#EF4225] transition-colors duration-300">{name}</h3>
                                                    {designation && (
                                                        <p className="text-[11px] uppercase font-bold tracking-[0.1em] text-gray-400 dark:text-slate-500 mt-1.5 leading-relaxed group-hover:text-gray-500 transition-colors duration-300">{designation}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                STATS SECTION
               ══════════════════════════════════ */}
            <StatsSection />

            {/* ══════════════════════════════════
                CTA
               ══════════════════════════════════ */}
            <section className="py-0 bg-white dark:bg-slate-900">
                <div className="max-w-[700px] mx-auto px-4 xl:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-3xl md:text-4xl leading-[1.15] mb-4">
                            Join the Zeeque Preschool Family
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 font-body text-lg max-w-lg mx-auto mb-8">
                            Whether you&apos;re a parent looking for the best start for your child, or an educator passionate about shaping young minds — we&apos;d love to hear from you.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="https://admission.zeeque.in/" className="flex items-center justify-center gap-2 bg-[#FFCB05] text-[#222] px-9 py-3.5 rounded-full font-heading font-bold text-base shadow-[4px_4px_0_0_#0060D6] hover:shadow-[2px_2px_0_0_#0060D6] hover:translate-y-[2px] hover:translate-x-[2px] transition-all whitespace-nowrap w-full sm:w-auto relative overflow-hidden group">
                                {/* Shimmer effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                                <span className="relative z-10">Enquiry Now</span>
                                <ArrowRight className="w-4 h-4 stroke-[2.5] relative z-10" />
                            </Link>
                            <Link href="/contact" className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-[#222] dark:text-white px-9 py-3.5 rounded-2xl font-heading font-bold text-base border-2 border-gray-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-all whitespace-nowrap w-full sm:w-auto">
                                <Mail className="w-4 h-4" /> Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
