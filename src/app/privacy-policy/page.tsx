"use client";

import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
    ChevronRight,
    ShieldCheck,
    Eye,
    Database,
    Lock,
    Cookie,
    Share2,
    UserCheck,
    RefreshCw,
    Mail,
    Sparkles,
} from "lucide-react";

/* ──────────────────────────────────────────────
   Privacy Policy Data
   ────────────────────────────────────────────── */
const sections = [
    {
        id: "introduction",
        icon: ShieldCheck,
        color: "#ef4225",
        title: "Introduction",
        content: [
            "At Zeeque Preschool, we are committed to protecting your privacy and ensuring the security of your personal information.",
            "This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website or use our services.",
            "By using our website, you consent to the data practices described in this policy.",
        ],
    },
    {
        id: "collection",
        icon: Database,
        color: "#3FB7E5",
        title: "Information Collection",
        content: [
            "We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services.",
            "The personal information we collect may include: name, email address, phone number, and mailing address.",
            "We may also collect information about your child for admission purposes, such as name, age, and developmental stage.",
            "We automatically collect certain information when you visit, use, or navigate the website, such as your IP address, browser, and device characteristics.",
        ],
    },
    {
        id: "usage",
        icon: Eye,
        color: "#0fb85c",
        title: "How We Use Your Information",
        content: [
            "To facilitate account creation and the logon process for our internal systems.",
            "To send administrative information to you, such as updates on your child's progress or school events.",
            "To fulfill and manage your admissions and enquiries.",
            "To post testimonials with your consent.",
            "To respond to user inquiries and offer support.",
        ],
    },
    {
        id: "security",
        icon: Lock,
        color: "#EF4225",
        title: "Data Protection & Security",
        content: [
            "We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process.",
            "However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.",
            "Access to personal data is restricted to authorized Zeeque Preschool staff who need the information to perform their duties.",
        ],
    },
    {
        id: "cookies",
        icon: Cookie,
        color: "#fbaf01",
        title: "Cookies & Tracking",
        content: [
            "We may use cookies and similar tracking technologies to access or store information.",
            "Cookies help us provide you with a better website by enabling us to monitor which pages you find useful and which you do not.",
            "You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer.",
        ],
    },
    {
        id: "sharing",
        icon: Share2,
        color: "#3FB7E5",
        title: "Third-Party Sharing",
        content: [
            "We do not sell, rent, or lease our customer lists to third parties.",
            "We may share data with trusted partners to help perform statistical analysis, send you email or postal mail, or provide customer support.",
            "All such third parties are prohibited from using your personal information except to provide these services to Zeeque Preschool, and they are required to maintain the confidentiality of your information.",
        ],
    },
    {
        id: "parental-rights",
        icon: UserCheck,
        color: "#e83e8c",
        title: "Parental Rights",
        content: [
            "Parents and guardians have the right to request access to the personal information we hold about their children.",
            "You may request to correct, update, or delete personal information by contacting us directly.",
            "We will retain your information for as long as your child is enrolled or as needed to provide you with services and comply with our legal obligations.",
        ],
    },
    {
        id: "updates",
        icon: RefreshCw,
        color: "#0fb85c",
        title: "Policy Updates",
        content: [
            "We may update this privacy policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons.",
            "The updated version will be indicated by an updated 'Last Updated' date and the updated version will be effective as soon as it is accessible.",
            "We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.",
        ],
    },
    {
        id: "contact",
        icon: Mail,
        color: "#EF4225",
        title: "Contact Us",
        content: [
            "If you have questions or comments about this policy, you may email us at zanetwork@zeeque.in or by post to:",
            "Zeeque Preschool Network, Head Quarters – Zahra Park, Koduvally, Kozhikode, Kerala, India – 673572",
        ],
    },
];

/* ──────────────────────────────────────────────
   Page Component
   ────────────────────────────────────────────── */
export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#fffcf2] to-[#faeed1] dark:from-slate-900 dark:to-slate-950 font-body selection:bg-secondary selection:text-white relative overflow-hidden transition-colors duration-300">

            {/* ── Header ── */}
            <div className="w-full relative z-50">
                <div className="hidden lg:block w-full bg-white dark:bg-[#020618] transition-colors duration-300">

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
                            <span className="text-primary font-semibold">Privacy Policy</span>
                        </div>

                        <h1 className="font-heading font-extrabold text-[#222222] dark:text-white text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
                            Privacy Policy
                        </h1>
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
                Privacy Content
               ══════════════════════════════════ */}
            <section className="py-10 md:py-16 bg-white dark:bg-slate-900 relative">
                <div className="max-w-[860px] mx-auto px-4 xl:px-8 relative z-10">

                    {/* Quick navigation or Last updated */}
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-400 dark:text-gray-500 font-body mb-12">
                        <RefreshCw className="w-3.5 h-3.5" />
                        Last updated: March 24, 2026
                    </div>

                    {/* Sections */}
                    <div className="space-y-12">
                        {sections.map((section, i) => (
                            <motion.div
                                key={section.id}
                                id={section.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.6, delay: i * 0.05 }}
                            >
                                {/* Section Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div
                                        className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
                                        style={{ backgroundColor: `${section.color}12`, border: `1px solid ${section.color}20` }}
                                    >
                                        <section.icon className="w-6 h-6" style={{ color: section.color }} />
                                    </div>
                                    <h2 className="font-heading font-bold text-[#222] dark:text-white text-xl md:text-2xl leading-tight">
                                        {section.title}
                                    </h2>
                                </div>

                                {/* Section Content */}
                                <div className="pl-0 md:pl-16 space-y-4">
                                    {section.content.map((paragraph, j) => (
                                        <div key={j} className="flex items-start gap-4">
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
                                    <div className="mt-12 border-b border-gray-100 dark:border-slate-800" />
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Support Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mt-20 bg-gradient-to-br from-amber-500/5 to-primary/5 dark:from-amber-500/10 dark:to-primary/10 rounded-[40px] p-8 md:p-12 border border-primary/10 dark:border-primary/20 text-center relative overflow-hidden"
                    >
                        <h3 className="font-heading font-extrabold text-[#222] dark:text-white text-2xl mb-4">
                            Trust resides here.
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 font-body text-base mb-8 max-w-md mx-auto">
                            We take our responsibility to protect your data seriously. If you have any further questions, we are here to help.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#d93a1e] text-white px-10 py-4 rounded-2xl font-heading font-bold text-[16px] transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
                        >
                            <Mail className="w-5 h-5 mr-1" />
                            Get in Touch
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ── Footer ── */}
            <Footer />
        </main>
    );
}
