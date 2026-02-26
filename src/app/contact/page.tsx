"use client";

import Image from "next/image";
import Link from "next/link";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    Clock,
    MapPin,
    ChevronRight,
    Send,
    MessageSquare,
    Headphones,
    ArrowRight
} from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#fffcf2] to-[#faeed1] dark:from-slate-900 dark:to-slate-950 font-body selection:bg-secondary selection:text-white relative overflow-hidden transition-colors duration-300">
            {/* ── Header ── */}
            <div className="w-full relative z-50">
                <div className="hidden lg:block w-full bg-white dark:bg-slate-900 border-b border-dashed border-gray-200 dark:border-slate-700 transition-colors duration-300">
                    <TopHeader />
                </div>
                <div className="max-w-[1140px] mx-auto bg-white dark:bg-slate-900 rounded-b-[40px] shadow-sm border border-gray-100 dark:border-slate-800 px-4 xl:px-8 transition-colors duration-300">
                    <Navbar />
                </div>
            </div>

            {/* ══════════════════════════════════
                SECTION 1: Hero Banner
               ══════════════════════════════════ */}
            <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-[10%] w-20 h-20 rounded-full bg-[#fbaf01]/10 animate-pulse" />
                    <div className="absolute top-20 right-[15%] w-14 h-14 rounded-full bg-[#e83e8c]/10 animate-pulse delay-500" />
                    <div className="absolute bottom-10 left-[20%] w-16 h-16 rounded-full bg-[#0fb85c]/10 animate-pulse delay-1000" />
                    <div className="absolute top-1/2 right-[8%] w-24 h-24 rounded-full border-4 border-dashed border-[#ef4225]/10" />
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Hero Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-full lg:w-1/2 text-center lg:text-left"
                        >
                            {/* Breadcrumb/Badge */}
                            <div className="inline-flex items-center gap-2 bg-[#7c3aed]/10 text-[#7c3aed] px-4 py-1.5 rounded-full font-heading font-bold text-sm mb-6 uppercase tracking-wider">
                                Get in touch
                            </div>

                            <h1 className="font-heading font-extrabold text-[#222222] dark:text-white text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
                                Contact{" "}
                                <span className="relative inline-block">
                                    <span className="text-primary">Zeeque</span>
                                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                                        <path d="M2 8C40 2 80 2 100 6C120 10 160 10 198 4" stroke="#fbaf01" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </span>{" "}
                                Preschool
                            </h1>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                                We&apos;re here to help you find the perfect learning path for your child. Whether you&apos;re exploring programs for toddlers or teens, reach out via phone, email, or visit us in Manjeri.
                            </p>
                        </motion.div>

                        {/* Hero Image Overlay */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="w-full lg:w-1/2 relative"
                        >
                            <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
                                <Image
                                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop"
                                    alt="Contact Zeeque Preschool"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                            </div>
                            {/* Floating decorative card */}
                            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xl border border-gray-100 dark:border-slate-700 hidden sm:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-[#0fb85c] flex items-center justify-center text-white">
                                        <Headphones className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-heading font-bold text-[#222] dark:text-white">Active Support</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Ready to help 24/7</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Wavy divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1440 100" fill="none" className="w-full h-auto">
                        <path d="M0,60 C360,100 720,20 1080,60 C1260,80 1380,40 1440,60 L1440,100 L0,100 Z" fill="white" className="dark:fill-slate-900" />
                    </svg>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 2: Intro / Welcome
               ══════════════════════════════════ */}
            <section className="py-20 bg-white dark:bg-slate-900 overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center relative"
                    >
                        {/* Decorative floating badge */}
                        <div className="inline-flex items-center gap-2 bg-[#0fb85c]/10 text-[#0fb85c] px-4 py-1.5 rounded-full font-heading font-bold text-xs mb-8 uppercase tracking-widest">
                            <Headphones className="w-3 h-3" /> Get Support
                        </div>

                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-10">
                            Let&apos;s Talk About{" "}
                            <span className="text-secondary underline decoration-[#0052ff]/30 decoration-8 underline-offset-4">Your Child&apos;s</span>{" "}
                            Learning Journey
                        </h2>

                        <div className="space-y-6 text-gray-600 dark:text-gray-300 font-body text-lg md:text-xl leading-relaxed">
                            <p>
                                We&apos;re here to help parents make the right academic decisions for their children. Whether you&apos;re exploring early learning support or structured academic guidance for school students, our team is ready to assist you.
                            </p>
                            <p className="font-semibold text-[#222] dark:text-white bg-secondary/10 py-3 px-6 rounded-2xl inline-block">
                                Many parents reaching out to us are looking for reliable <Link href="#" className="text-[#0052ff] hover:underline decoration-primary">online tuition Kerala</Link> options that offer personalized learning, expert tutors, and consistent academic progress for their children.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 3: Contact Form & Info
               ══════════════════════════════════ */}
            <section className="py-20 bg-gradient-to-b from-white to-[#fffcf2] dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
                {/* Background decorative blob */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                        {/* Left: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-[60%] bg-white dark:bg-slate-800 rounded-[40px] p-8 md:p-12 shadow-2xl shadow-primary/5 border border-gray-100 dark:border-slate-700"
                        >
                            <div className="mb-10">
                                <h3 className="font-heading font-extrabold text-[#222] dark:text-white text-3xl mb-4">
                                    Send Us a <span className="text-primary">Message</span>
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 font-body">
                                    Fill out the form below and our support team will get back to you as soon as possible to help you in the best way for your child.
                                </p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block font-heading font-bold text-[#222] dark:text-white text-sm">Name</label>
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            className="w-full bg-[#fffcf2] dark:bg-slate-900 border-2 border-transparent focus:border-primary/30 rounded-2xl px-6 py-4 outline-none transition-all font-body text-gray-700 dark:text-gray-200"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block font-heading font-bold text-[#222] dark:text-white text-sm">Email</label>
                                        <input
                                            type="email"
                                            placeholder="contact@zeeque.in"
                                            className="w-full bg-[#fffcf2] dark:bg-slate-900 border-2 border-transparent focus:border-primary/30 rounded-2xl px-6 py-4 outline-none transition-all font-body text-gray-700 dark:text-gray-200"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="block font-heading font-bold text-[#222] dark:text-white text-sm">Subject</label>
                                    <input
                                        type="text"
                                        placeholder="Enquiry status/admission"
                                        className="w-full bg-[#fffcf2] dark:bg-slate-900 border-2 border-transparent focus:border-primary/30 rounded-2xl px-6 py-4 outline-none transition-all font-body text-gray-700 dark:text-gray-200"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block font-heading font-bold text-[#222] dark:text-white text-sm">Message</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell us what's on your mind..."
                                        className="w-full bg-[#fffcf2] dark:bg-slate-900 border-2 border-transparent focus:border-primary/30 rounded-2xl px-6 py-4 outline-none transition-all font-body text-gray-700 dark:text-gray-200 resize-none"
                                    ></textarea>
                                </div>
                                <button className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white py-5 rounded-2xl font-heading font-extrabold text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-[#7c3aed]/20">
                                    Send Message
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </motion.div>

                        {/* Right: Contact info & Hours */}
                        <div className="w-full lg:w-[40%] space-y-8">

                            {/* Info Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="bg-white dark:bg-slate-800 rounded-[40px] p-10 shadow-xl border border-gray-100 dark:border-slate-700"
                            >
                                <h3 className="font-heading font-extrabold text-[#222] dark:text-white text-2xl mb-8">
                                    Contact <span className="text-primary">Information</span>
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 font-body mb-8 text-sm">
                                    We typically attend to our calls/email based on our <span className="text-[#0052ff] underline underline-offset-2">online tuition classes</span> and training programs but mail us about child&apos;s learning needs
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-5 group">
                                        <div className="w-14 h-14 rounded-2xl bg-[#0052ff] flex items-center justify-center text-white flex-shrink-0 transition-transform shadow-lg shadow-[#0052ff]/20">
                                            <Phone className="w-6 h-6 group-hover:animate-ringing origin-center transition-transform" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-heading font-bold text-gray-400 uppercase tracking-widest mb-1">Phone</div>
                                            <div className="text-xl font-heading font-extrabold text-[#222] dark:text-white">+91 0000000-00</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5 group">
                                        <div className="w-14 h-14 rounded-2xl bg-[#e83e8c] flex items-center justify-center text-white flex-shrink-0 group-hover:-rotate-12 transition-transform shadow-lg shadow-[#e83e8c]/20">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-heading font-bold text-gray-400 uppercase tracking-widest mb-1">Email</div>
                                            <div className="text-lg font-heading font-extrabold text-[#222] dark:text-white break-all">contact@zeeque.in</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Hours Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="bg-white dark:bg-slate-800 rounded-[40px] p-10 shadow-xl border border-gray-100 dark:border-slate-700"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-[#0fb85c] flex items-center justify-center text-white">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-heading font-extrabold text-[#222] dark:text-white text-xl">Business Hours</h3>
                                    </div>
                                    <span className="bg-[#0fb85c] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">Online</span>
                                </div>

                                <div className="bg-[#0fb85c]/5 border-2 border-dashed border-[#0fb85c]/20 rounded-3xl p-6 text-center">
                                    <div className="flex items-center justify-center gap-2 text-[#0fb85c] mb-1">
                                        <div className="w-2 h-2 bg-[#0fb85c] rounded-full" />
                                        <span className="font-heading font-extrabold text-sm uppercase tracking-wider">Available</span>
                                    </div>
                                    <div className="text-4xl font-heading font-extrabold text-[#222] dark:text-white mb-2">24/7</div>
                                    <div className="text-sm text-gray-400 font-body uppercase tracking-widest">Available any day</div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 4: Map Section
               ══════════════════════════════════ */}
            <section className="py-20 bg-[#fffcf2] dark:bg-slate-950 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white dark:bg-slate-800 rounded-[40px] p-6 shadow-2xl border border-gray-100 dark:border-slate-700 overflow-hidden"
                    >
                        {/* Map Header */}
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 gap-6">
                            <div className="flex items-center gap-5">
                                <div className="w-16 h-16 rounded-[20px] bg-[#ef4225] flex items-center justify-center text-white shadow-lg shadow-[#ef4225]/20">
                                    <MapPin className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-extrabold text-[#222] dark:text-white text-2xl mb-1">Visit Our Campus</h3>
                                    <p className="text-gray-500 dark:text-gray-400 font-body text-sm">Please come and speak with us to learn how we can help your child be best prepared.</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <button className="bg-[#7c3aed] text-white px-6 py-3 rounded-xl font-heading font-bold text-sm flex items-center gap-2 hover:bg-[#6d28d9] transition-all">
                                    Open Maps <ArrowRight className="w-4 h-4" />
                                </button>
                                <a
                                    href="https://www.google.com/maps/search/Zahra+Park,+Koduvally,+Kozhikode,+Kerala,+India+-+673572"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white dark:bg-slate-700 text-[#222] dark:text-white border border-gray-200 dark:border-slate-600 px-6 py-3 rounded-xl font-heading font-bold text-sm flex items-center gap-2 hover:border-primary hover:text-primary transition-all"
                                >
                                    Get Directions <MapPin className="w-4 h-4 text-primary" />
                                </a>
                                <a
                                    href="tel:+919072500435"
                                    className="bg-white dark:bg-slate-700 text-[#222] dark:text-white border border-gray-200 dark:border-slate-600 px-6 py-3 rounded-xl font-heading font-bold text-sm flex items-center gap-2 hover:border-primary hover:text-primary transition-all group"
                                >
                                    Call for help <Phone className="w-4 h-4 text-primary group-hover:animate-ringing origin-center transition-transform" />
                                </a>
                            </div>
                        </div>

                        {/* Map Sub-Header / Location Info */}
                        <div className="px-6 pb-6 pt-2">
                            <div className="bg-[#fffcf2] dark:bg-slate-900 rounded-2xl p-4 flex items-center gap-3 border border-gray-100 dark:border-slate-700">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <p className="text-sm font-body text-gray-600 dark:text-gray-300">
                                    <strong>Head Quarters:</strong> Zahra Park, Koduvally, Kozhikode, Kerala, India - 673572
                                </p>
                            </div>
                        </div>

                        {/* Map Iframe / Placeholder */}
                        <div className="relative w-full h-[450px] bg-slate-100 dark:bg-slate-900 rounded-[30px] overflow-hidden group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.1818244247!2d75.914285!3d11.3578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65da9142ec73d%3A0xe54d6e913a531dd!2sMarkaz%20Zahra%20Park!5e0!3m2!1sen!2sin!4v1709000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: "grayscale(0.5) contrast(1.2) opacity(0.8)" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="group-hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                            {/* Overlay for aesthetic */}
                            <div className="absolute inset-0 pointer-events-none border-[12px] border-white dark:border-slate-800 rounded-[30px]" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 5: Immediate Assistance (CTA)
               ══════════════════════════════════ */}
            <section className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-r from-primary to-[#e83e8c] rounded-[50px] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20"
                    >
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-10 transform -rotate-12">
                                <MessageSquare className="w-10 h-10 text-white" />
                            </div>
                            <h2 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                                Need Immediate Assistance?
                            </h2>
                            <p className="text-white/80 font-body text-lg md:text-xl mb-12 leading-relaxed">
                                Our team is always available to support parents and students. Reach out to us by phone, email, or visit our campus to take the next step in your child&apos;s academic journey with confidence.
                            </p>
                            <div className="flex flex-wrap justify-center gap-5">
                                <Link
                                    href="tel:+91000000000"
                                    className="bg-white text-primary px-10 py-5 rounded-2xl font-heading font-extrabold text-lg shadow-xl shadow-black/10 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group"
                                >
                                    <Phone className="w-5 h-5 group-hover:animate-ringing origin-center transition-transform" />
                                    Call Us Now
                                </Link>
                                <Link
                                    href="mailto:contact@zeeque.in"
                                    className="bg-white/10 backdrop-blur-md border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-heading font-extrabold text-lg hover:bg-white/20 transition-all flex items-center gap-3"
                                >
                                    <Mail className="w-5 h-5" />
                                    Send Email
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
