"use client";

import Link from "next/link";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
    ChevronRight,
    FileText,
    UserCheck,
    CreditCard,
    ShieldCheck,
    BookOpen,
    HeartPulse,
    Copyright,
    AlertTriangle,
    RefreshCw,
    Mail,
} from "lucide-react";

/* ──────────────────────────────────────────────
   Terms Data
   ────────────────────────────────────────────── */
const sections = [
    {
        id: "general",
        icon: FileText,
        color: "#ef4225",
        title: "General Terms",
        content: [
            "By accessing and using the Zeeque Preschool website and services, you agree to be bound by these Terms and Conditions.",
            "Zeeque Preschool reserves the right to modify these terms at any time. Continued use of our services after any changes constitutes acceptance of the updated terms.",
            "These terms apply to all visitors, parents, guardians, students, and any other users who access or use our services.",
            "If you do not agree with any part of these terms, please discontinue use of our website and services immediately.",
        ],
    },
    {
        id: "admission",
        icon: UserCheck,
        color: "#0052ff",
        title: "Admission & Enrollment",
        content: [
            "Admission to Zeeque Preschool is subject to availability and meeting the age requirements for the respective programs (LZQ: 3–4 years, MZQ: 4–5 years, UZQ: 5–6 years).",
            "Parents or guardians must provide accurate and complete information during the admission process. Any false or misleading information may result in cancellation of admission.",
            "Submission of an application does not guarantee admission. Zeeque Preschool reserves the right to accept or decline any application at its sole discretion.",
            "All required documents, including birth certificates and medical records, must be submitted at the time of enrollment.",
        ],
    },
    {
        id: "fees",
        icon: CreditCard,
        color: "#0fb85c",
        title: "Fees & Payment",
        content: [
            "Tuition fees and other charges are communicated at the time of admission and are subject to periodic revision. Fee revisions will be notified in advance.",
            "Fees once paid are non-refundable unless otherwise specified in a separate refund policy.",
            "Late payment of fees may attract additional charges. Continued non-payment may result in suspension of the child's enrollment.",
            "All payments should be made through the designated payment channels communicated by the school administration.",
        ],
    },
    {
        id: "privacy",
        icon: ShieldCheck,
        color: "#7c3aed",
        title: "Privacy & Data Protection",
        content: [
            "Zeeque Preschool is committed to protecting the personal information of students, parents, and guardians in accordance with applicable data protection laws.",
            "Personal data collected during admission and enrollment is used solely for educational, administrative, and communication purposes.",
            "Photographs and videos of students may be used for promotional materials, the school website, and social media pages unless parents explicitly opt out in writing.",
            "We do not share, sell, or distribute personal data to third parties without consent, except as required by law.",
        ],
    },
    {
        id: "conduct",
        icon: BookOpen,
        color: "#e83e8c",
        title: "Code of Conduct",
        content: [
            "All students, parents, and visitors are expected to maintain respectful and courteous behavior on school premises and during school events.",
            "Bullying, harassment, or any form of discrimination will not be tolerated. Such incidents may lead to disciplinary action, including expulsion.",
            "Parents and guardians are expected to cooperate with the school administration and teaching staff for the well-being of their children.",
            "The school reserves the right to take appropriate disciplinary action for any behavior deemed detrimental to the school's environment.",
        ],
    },
    {
        id: "health",
        icon: HeartPulse,
        color: "#fbaf01",
        title: "Health & Safety",
        content: [
            "Parents must inform the school of any medical conditions, allergies, or special needs of their child at the time of admission and promptly update any changes.",
            "Children who are unwell or have contagious illnesses must not be sent to school. A doctor's clearance may be required before readmission.",
            "Zeeque Preschool maintains strict safety protocols, including supervised entry/exit, secure play areas, and trained first-aid staff.",
            "In case of a medical emergency, the school will take necessary action and inform the parents or guardians immediately.",
        ],
    },
    {
        id: "ip",
        icon: Copyright,
        color: "#0052ff",
        title: "Intellectual Property",
        content: [
            "All content on the Zeeque Preschool website — including text, images, logos, graphics, and multimedia — is the intellectual property of Zeeque Preschool Network.",
            "Unauthorized reproduction, distribution, or use of any content from this website is strictly prohibited without prior written consent.",
            "The Zeeque Preschool name, logo, and branding elements are registered trademarks and may not be used without authorization.",
        ],
    },
    {
        id: "liability",
        icon: AlertTriangle,
        color: "#ef4225",
        title: "Limitation of Liability",
        content: [
            "Zeeque Preschool strives to provide accurate information on this website but does not guarantee the completeness or accuracy of all content.",
            "The school shall not be held liable for any indirect, incidental, or consequential damages arising from the use of this website or our services.",
            "While we take all reasonable measures to ensure the safety of children on our premises, parents acknowledge that certain risks are inherent in educational and recreational activities.",
        ],
    },
    {
        id: "changes",
        icon: RefreshCw,
        color: "#0fb85c",
        title: "Changes to Terms",
        content: [
            "Zeeque Preschool reserves the right to update, modify, or replace these Terms and Conditions at any time without prior notice.",
            "The most current version of the terms will always be available on this page. It is the user's responsibility to review these terms periodically.",
            "Continued use of our website and services after any changes to these terms constitutes your acceptance of the revised terms.",
        ],
    },
    {
        id: "contact",
        icon: Mail,
        color: "#7c3aed",
        title: "Contact Information",
        content: [
            "For any questions or concerns regarding these Terms and Conditions, please contact us:",
            "Email: zanetwork@zeeque.in",
            "Phone: +91 9072500435",
            "Address: Head Quarters – Zahra Park, Koduvally, Kozhikode, Kerala, India – 673572",
        ],
    },
];

/* ──────────────────────────────────────────────
   Page Component
   ────────────────────────────────────────────── */
export default function TermsAndConditionsPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#fffcf2] to-[#faeed1] dark:from-slate-900 dark:to-slate-950 font-body selection:bg-secondary selection:text-white relative overflow-hidden transition-colors duration-300">

            {/* ── Header ── */}
            <div className="w-full relative z-50">
                <div className="hidden lg:block w-full bg-white dark:bg-[#020618] transition-colors duration-300">
                    <TopHeader />
                </div>
                <div className="max-w-[1140px] mx-auto bg-white dark:bg-transparent rounded-b-[40px] shadow-sm border border-gray-100 dark:border-slate-800 transition-colors duration-300">
                    <Navbar />
                </div>
            </div>

            {/* ══════════════════════════════════
                Hero Banner
               ══════════════════════════════════ */}
            <section className="relative py-10 md:py-14 lg:py-20 overflow-hidden">
                {/* Background decorations */}
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
                            <span className="text-primary font-semibold">Terms and Conditions</span>
                        </div>

                        <h1 className="font-heading font-extrabold text-[#222222] dark:text-white text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
                            Terms{" "}
                            <span className="relative inline-block">
                                <span className="text-primary">&</span>
                            </span>{" "}
                            Conditions
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Please read these terms carefully before using our website and services. Your continued use constitutes acceptance.
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
                Last Updated Notice
               ══════════════════════════════════ */}
            <section className="bg-white dark:bg-slate-900 pb-4">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex items-center justify-center gap-2 text-sm text-gray-400 dark:text-gray-500 font-body"
                    >
                        <RefreshCw className="w-3.5 h-3.5" />
                        Last updated: March 14, 2026
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                Terms Content
               ══════════════════════════════════ */}
            <section className="py-10 md:py-16 bg-white dark:bg-slate-900 relative">
                <div className="max-w-[860px] mx-auto px-4 xl:px-8 relative z-10">

                    {/* Quick Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-slate-800/50 dark:to-slate-800/30 rounded-3xl p-6 md:p-8 mb-12 border border-gray-200/50 dark:border-slate-700/50"
                    >
                        <h2 className="font-heading font-bold text-[#222] dark:text-white text-lg mb-4">Quick Navigation</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {sections.map((section, i) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="group flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-white dark:hover:bg-slate-700/50 transition-all duration-200"
                                >
                                    <span
                                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-heading font-bold text-xs"
                                        style={{ backgroundColor: section.color }}
                                    >
                                        {i + 1}
                                    </span>
                                    <span className="text-gray-600 dark:text-gray-300 font-body text-sm group-hover:text-[#222] dark:group-hover:text-white transition-colors">
                                        {section.title}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Sections */}
                    <div className="space-y-10">
                        {sections.map((section, i) => (
                            <motion.div
                                key={section.id}
                                id={section.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.6, delay: i * 0.05 }}
                                className="scroll-mt-28"
                            >
                                {/* Section Header */}
                                <div className="flex items-center gap-4 mb-5">
                                    <div
                                        className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: `${section.color}12` }}
                                    >
                                        <section.icon className="w-6 h-6" style={{ color: section.color }} />
                                    </div>
                                    <div>
                                        <span
                                            className="font-heading font-extrabold text-xs uppercase tracking-wider"
                                            style={{ color: section.color }}
                                        >
                                            Section {i + 1}
                                        </span>
                                        <h2 className="font-heading font-bold text-[#222] dark:text-white text-xl md:text-2xl leading-tight">
                                            {section.title}
                                        </h2>
                                    </div>
                                </div>

                                {/* Section Content */}
                                <div className="pl-0 md:pl-16 space-y-3">
                                    {section.content.map((paragraph, j) => (
                                        <div key={j} className="flex items-start gap-3">
                                            <div
                                                className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                                                style={{ backgroundColor: section.color }}
                                            />
                                            <p className="text-gray-600 dark:text-gray-300 font-body text-[15px] md:text-base leading-relaxed">
                                                {paragraph}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Divider */}
                                {i < sections.length - 1 && (
                                    <div className="mt-10 border-b border-gray-100 dark:border-slate-800" />
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Notice */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mt-16 bg-gradient-to-br from-[#ef4225]/5 to-[#e83e8c]/5 dark:from-[#ef4225]/10 dark:to-[#e83e8c]/10 rounded-3xl p-8 border border-[#ef4225]/10 dark:border-[#ef4225]/20 text-center"
                    >
                        <h3 className="font-heading font-bold text-[#222] dark:text-white text-lg mb-3">
                            Questions About Our Terms?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-sm mb-5 max-w-md mx-auto">
                            If you have any questions or concerns about these terms, please don&apos;t hesitate to reach out to us.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-[#ef4225] hover:bg-[#d93a1e] text-white px-8 py-3 rounded-2xl font-heading font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-[#ef4225]/30 hover:scale-[1.02]"
                        >
                            Contact Us
                            <Mail className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ── Footer ── */}
            <Footer />
        </main>
    );
}
