"use client";

import Image from "next/image";
import Link from "next/link";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
    Home, ChevronRight, Star, ArrowRight, Mail,
    Shield, BookOpen, FlaskConical, Users,
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
    { name: "Rasheed Punnassery", role: "CEO", image: "/images/team/rasheed_punnashery.png", color: "#0052ff" },
    { name: "Unais Muhammed", role: "Director Academics", image: "/images/team/unais.jpg", color: "#0fb85c" },
    { name: "Illias Abdullah Al Hamil", role: "Academic Administrator", image: "/images/team/illias.jpg", color: "#7c3aed" },
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
        <main className="min-h-screen bg-[#fafafa] dark:bg-slate-950 font-body selection:bg-secondary selection:text-white relative overflow-hidden transition-colors duration-300">

            {/* ── Header ── */}
            <div className="w-full relative z-50 dark:bg-slate-800">
                <div className="hidden lg:block w-full bg-white dark:bg-slate-900 border-b border-dashed border-gray-200 dark:border-slate-700 transition-colors duration-300">
                    <TopHeader />
                </div>
                <div className="max-w-[1140px] mx-auto bg-white dark:bg-slate-900 rounded-b-[40px] shadow-sm border border-gray-100 dark:border-slate-800 px-4 xl:px-8 transition-colors duration-300">
                    <Navbar />
                </div>
            </div>

            {/* ══════════════════════════════════
                HERO
               ══════════════════════════════════ */}
            <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-[#fafafa] dark:from-slate-900 dark:to-slate-950">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/3 right-[5%] w-28 h-28 rounded-full border-2 border-dashed border-gray-200 dark:border-slate-700 opacity-60" />
                    <div className="absolute bottom-10 left-[8%] w-16 h-16 rounded-full border-2 border-dashed border-gray-200 dark:border-slate-700 opacity-40" />
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="flex items-center justify-center gap-2 mb-6 font-body text-sm">
                            <Link href="/about" className="text-gray-400 dark:text-gray-500 hover:text-primary transition-colors">About</Link>
                            <ChevronRight className="w-4 h-4 text-gray-300 dark:text-gray-600" />
                            <span className="text-primary font-semibold">Our Team</span>
                        </div>
                        <h1 className="font-heading font-extrabold text-[#222] dark:text-white text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-5">
                            Our <span className="text-primary">Team</span>
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            The passionate leaders, educators, and researchers behind Zeeque Preschool&apos;s mission to nurture the next generation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                CHIEF PATRONS
               ══════════════════════════════════ */}
            <section className="py-16 lg:py-24 bg-white dark:bg-slate-900">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-[2px] bg-primary rounded-full" />
                            <span className="text-primary font-heading font-bold uppercase tracking-wider text-xs">Guidance</span>
                        </div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-3xl md:text-4xl">Chief Patrons</h2>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl">
                        {chiefPatrons.map((person, i) => (
                            <motion.div key={person.name} custom={i} variants={fadeUp} className="group">
                                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-gray-100 dark:bg-slate-800">
                                    <Image src={person.image} alt={person.name} fill className="object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                                </div>
                                <h3 className="font-heading font-bold text-[#222] dark:text-white text-lg">{person.name}</h3>
                                <p className="text-gray-400 dark:text-gray-500 font-body text-sm tracking-wide uppercase">{person.role}</p>
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
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-[2px] bg-[#0052ff] rounded-full" />
                            <span className="text-[#0052ff] font-heading font-bold uppercase tracking-wider text-xs">Leadership</span>
                        </div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-3xl md:text-4xl">Directorate of Zeeque Preschool</h2>
                        <p className="text-gray-500 dark:text-gray-400 font-body text-base mt-2 max-w-xl">The core leadership team driving Zeeque Preschool&apos;s vision, strategy, and academic excellence across 50+ centers.</p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {directorate.map((person, i) => (
                            <motion.div key={person.name} custom={i} variants={fadeUp} className="group">
                                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-gray-100 dark:bg-slate-800">
                                    <Image src={person.image} alt={person.name} fill className="object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
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
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-[2px] bg-[#0fb85c] rounded-full" />
                                <span className="text-[#0fb85c] font-heading font-bold uppercase tracking-wider text-xs">Governance</span>
                            </div>
                            <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-2xl md:text-3xl mb-6">Council of Administration</h2>

                            <div className="space-y-3">
                                {councilMembers.map((member) => {
                                    const [name, designation] = member.split(" — ");
                                    return (
                                        <div key={member} className="flex items-start gap-3 p-4 rounded-xl bg-[#fafafa] dark:bg-slate-800 border border-gray-100 dark:border-slate-700 hover:border-[#0fb85c]/30 transition-colors duration-300">
                                            <div className="w-2 h-2 rounded-full bg-[#0fb85c] mt-2 flex-shrink-0" />
                                            <div>
                                                <p className="font-heading font-bold text-[#222] dark:text-white text-[15px]">{name}</p>
                                                {designation && <p className="text-gray-400 dark:text-gray-500 font-body text-xs mt-0.5">{designation}</p>}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Research & Development */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-[2px] bg-[#7c3aed] rounded-full" />
                                <span className="text-[#7c3aed] font-heading font-bold uppercase tracking-wider text-xs">Innovation</span>
                            </div>
                            <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-2xl md:text-3xl mb-6">Research & Development</h2>

                            <div className="space-y-3">
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
                                        <div key={member} className="flex items-start gap-3 p-4 rounded-xl bg-[#fafafa] dark:bg-slate-800 border border-gray-100 dark:border-slate-700 hover:border-[#7c3aed]/30 transition-colors duration-300">
                                            <div className="w-2 h-2 rounded-full bg-[#7c3aed] mt-2 flex-shrink-0" />
                                            <div>
                                                <p className="font-heading font-bold text-[#222] dark:text-white text-[15px]">{name}</p>
                                                {designation && <p className="text-gray-400 dark:text-gray-500 font-body text-xs mt-0.5">{designation}</p>}
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
                STATS STRIP
               ══════════════════════════════════ */}
            <section className="py-12 md:py-16 lg:py-20 bg-[#fafafa] dark:bg-slate-950">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
                        {[
                            { value: "12+", label: "Years of Experience", icon: Star },
                            { value: "50+", label: "Learning Centers", icon: Shield },
                            { value: "200+", label: "Trained Educators", icon: BookOpen },
                            { value: "5000+", label: "Happy Students", icon: Users },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <stat.icon className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
                                <div className="font-heading font-extrabold text-[#222] dark:text-white text-4xl mb-1">{stat.value}</div>
                                <div className="text-gray-400 dark:text-gray-500 font-body text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                CTA
               ══════════════════════════════════ */}
            <section className="py-16 lg:py-24 bg-white dark:bg-slate-900">
                <div className="max-w-[700px] mx-auto px-4 xl:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-3xl md:text-4xl leading-[1.15] mb-4">
                            Join the Zeeque Preschool Family
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 font-body text-lg max-w-lg mx-auto mb-8">
                            Whether you&apos;re a parent looking for the best start for your child, or an educator passionate about shaping young minds — we&apos;d love to hear from you.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/enroll" className="flex items-center gap-2 bg-[#ffb606] text-white px-9 py-3.5 rounded-2xl font-heading font-bold text-base hover:bg-[#ffa000] shadow-[4px_4px_0_0_#ef4225] hover:shadow-[2px_2px_0_0_#ef4225] hover:translate-y-[2px] hover:translate-x-[2px] transition-all">
                                Enroll Now <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                            </Link>
                            <Link href="/contact" className="flex items-center gap-2 bg-white dark:bg-slate-800 text-[#222] dark:text-white px-9 py-3.5 rounded-2xl font-heading font-bold text-base border-2 border-gray-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-all">
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
