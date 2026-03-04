"use client";

import Image from "next/image";
import Link from "next/link";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Calendar, Sparkles, MapPin, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

const newsData = [
    {
        id: 1,
        title: "Admissions Open for 2026-27",
        date: "March 15, 2026",
        description: "We are delighted to announce that admissions for the upcoming academic year are now open. Secure a bright future for your child today.",
        image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?q=80&w=600&auto=format&fit=crop",
        category: "Announcement"
    },
    {
        id: 2,
        title: "New Smart Classrooms Introduced",
        date: "February 28, 2026",
        description: "Experience our newly designed child-friendly smart classrooms equipped with the latest multimedia learning tools and colorful decor.",
        image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=600&auto=format&fit=crop",
        category: "Campus"
    },
    {
        id: 3,
        title: "Parent Orientation Program",
        date: "February 10, 2026",
        description: "A successful orientation program was held for new parents to understand our curriculum, approach, and the ZeeQue vision deeply.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
        category: "Community"
    }
];

const eventsData = [
    {
        id: 1,
        title: "Annual Sports Day",
        date: "April 12, 2026",
        time: "09:00 AM - 01:00 PM",
        location: "Main Playground",
        description: "Get ready to witness our little champions showcase their athletic skills, teamwork, and sportsmanship in a day full of fun events.",
        image: "/images/gallery/gallery photos/IMG_6290 - Copy.JPG",
        color: "#ef4225"
    },
    {
        id: 2,
        title: "Colors Day Celebration",
        date: "May 05, 2026",
        time: "10:00 AM - 12:30 PM",
        location: "Campus Hall",
        description: "A vibrant day where children dress in their favorite colors, engage in creative arts, and learn about the beauty of the spectrum.",
        image: "/images/gallery/gallery photos/IMG_5781.JPG",
        color: "#fbaf01"
    },
    {
        id: 3,
        title: "Meelad Day Reflections",
        date: "June 20, 2026",
        time: "09:30 AM - 11:30 AM",
        location: "Auditorium",
        description: "A special and peaceful gathering where kids recite beautiful surahs, perform adhkars, and learn about the importance of sharing and caring.",
        image: "/images/gallery/gallery photos/IMG_6331 - Copy.JPG",
        color: "#0fb85c"
    }
];


export default function EventsPage() {
    const [activeTab, setActiveTab] = useState<'news' | 'events'>('news');

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#fffcf2] to-[#faeed1] dark:from-slate-900 dark:to-slate-950 font-body selection:bg-secondary selection:text-white relative overflow-hidden transition-colors duration-300">
            {/* ── Header ── */}
            <div className="w-full relative z-50">
                <div className="hidden lg:block w-full bg-white dark:bg-[#020618] border-b border-dashed border-gray-200 dark:border-slate-700 transition-colors duration-300">
                    <TopHeader />
                </div>
                <div className="max-w-[1140px] mx-auto bg-white dark:bg-transparent rounded-b-[40px] shadow-sm border border-gray-100 dark:border-slate-800 transition-colors duration-300 relative z-50">
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
                    <div className="absolute bottom-20 right-[25%] w-10 h-10 rounded-full bg-[#0052ff]/10 animate-pulse delay-700" />
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
                            <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors cursor-default pointer-events-none">Updates</Link>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                            <span className="text-primary font-semibold">Events</span>
                        </div>

                        <h1 className="font-heading font-extrabold text-[#222222] dark:text-white text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
                            Life at{" "}
                            <span className="relative inline-block">
                                <span className="text-[#0fb85c]">ZeeQue</span>
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                                    <path d="M2 8C40 2 80 2 100 6C120 10 160 10 198 4" stroke="#0fb85c" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Every day is a celebration of learning! Discover the joyful events, colorful days, and exciting activities that make our preschool special.
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
                SECTION 2: Content & Gallery
               ══════════════════════════════════ */}
            <section className="py-16 md:py-24 bg-white dark:bg-slate-900 relative">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10 flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Typography */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="lg:w-1/2"
                    >
                        <span className="text-[#e83e8c] font-heading font-bold uppercase tracking-wider text-sm mb-3 flex items-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            Joyful Moments
                        </span>
                        <h2 className="font-heading font-extrabold text-[#222222] dark:text-white text-4xl md:text-5xl leading-[1.2] mb-6">
                            At ZeeQue Every <span className="text-[#fbaf01]">Day is Special</span>
                        </h2>

                        <div className="space-y-6 text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed">
                            <p>
                                Begins with Alif day we conduct Family day, colours day, Meelad day, sports day, vehicles day etc in align with the Curriculum.
                            </p>
                            <p>
                                By observing these different days we create opportunities for children to expand their knowledge base and to explore their immediate environment.
                            </p>


                        </div>
                    </motion.div>

                    {/* Right Gallery */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="lg:w-1/2 w-full relative"
                    >
                        <div className="relative overflow-hidden rounded-[32px] shadow-2xl group h-[400px] md:h-[500px]">
                            <Image
                                src="/images/gallery/gallery photos/RYZ03180.JPG"
                                alt="Kids playing outside"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                        </div>

                    </motion.div>

                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 3: News & Events Tabs
               ══════════════════════════════════ */}
            <section className="py-16 md:py-24 bg-[#f8f9fa] dark:bg-slate-950/50 relative">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">

                    {/* Header & Tabs */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                        <div>
                            <h2 className="font-heading font-extrabold text-[#222222] dark:text-white text-3xl md:text-4xl leading-[1.2] mb-2 text-center md:text-left">
                                Latest <span className="text-[#0052ff]">Updates</span>
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 font-body text-center md:text-left">
                                Stay informed about what&apos;s happening at ZeeQue.
                            </p>
                        </div>

                        {/* Toggle Buttons */}
                        <div className="flex items-center p-1.5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
                            <button
                                onClick={() => setActiveTab('news')}
                                className={`px-8 py-3 rounded-xl font-heading font-bold text-[15px] transition-all duration-300 ${activeTab === 'news'
                                        ? 'bg-[#0052ff] text-white shadow-md'
                                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
                                    }`}
                            >
                                News
                            </button>
                            <button
                                onClick={() => setActiveTab('events')}
                                className={`px-8 py-3 rounded-xl font-heading font-bold text-[15px] transition-all duration-300 ${activeTab === 'events'
                                        ? 'bg-[#fbaf01] text-white shadow-md'
                                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
                                    }`}
                            >
                                Events
                            </button>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="min-h-[440px]">
                        <AnimatePresence mode="wait">
                            {activeTab === 'news' ? (
                                <motion.div
                                    key="news"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                                >
                                    {newsData.map((news) => (
                                        <div key={news.id} className="bg-white dark:bg-slate-900 rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-800 group">
                                            <div className="relative h-[220px] overflow-hidden">
                                                <Image src={news.image} alt={news.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-heading font-bold text-[#0052ff]">
                                                    {news.category}
                                                </div>
                                            </div>
                                            <div className="p-6 flex flex-col h-[calc(100%-220px)]">
                                                <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-xs font-body mb-3 shrink-0">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {news.date}
                                                </div>
                                                <h3 className="font-heading font-bold text-xl text-[#222] dark:text-white mb-3 group-hover:text-[#0052ff] transition-colors line-clamp-2 shrink-0">
                                                    {news.title}
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-400 text-sm font-body line-clamp-3 mb-5 leading-relaxed flex-grow">
                                                    {news.description}
                                                </p>
                                                <Link href="#" className="inline-flex items-center gap-1.5 text-sm font-heading font-bold text-[#0052ff] hover:gap-2.5 transition-all mt-auto shrink-0">
                                                    Read Full Story <ArrowRight className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="events"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                                >
                                    {eventsData.map((event) => (
                                        <div key={event.id} className="bg-white dark:bg-slate-900 rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-800 group translate-y-0 hover:-translate-y-1">
                                            <div className="relative h-[220px] overflow-hidden">
                                                <Image src={event.image} alt={event.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                                    <div className="bg-white dark:bg-slate-800 text-center rounded-xl p-2 shadow-sm min-w-[50px]">
                                                        <div className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase">{event.date.split(' ')[0]}</div>
                                                        <div className="text-xl font-heading font-extrabold" style={{ color: event.color }}>{event.date.split(' ')[1].replace(',', '')}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-6 flex flex-col h-[calc(100%-220px)]">
                                                <h3 className="font-heading font-bold text-xl text-[#222] dark:text-white mb-4 line-clamp-2 shrink-0">
                                                    {event.title}
                                                </h3>

                                                <div className="space-y-2 mb-5 shrink-0">
                                                    <div className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400 font-body">
                                                        <Clock className="w-4 h-4 mt-0.5 text-gray-400" />
                                                        <span>{event.time}</span>
                                                    </div>
                                                    <div className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400 font-body">
                                                        <MapPin className="w-4 h-4 mt-0.5 text-gray-400" />
                                                        <span>{event.location}</span>
                                                    </div>
                                                </div>

                                                <p className="text-gray-600 dark:text-gray-400 text-sm font-body line-clamp-2 mb-5 flex-grow">
                                                    {event.description}
                                                </p>

                                                <Link href="#" className="flex items-center justify-center w-full py-2.5 rounded-xl font-heading font-bold text-sm transition-colors shrink-0 hover:opacity-90 active:scale-[0.98]"
                                                    style={{ backgroundColor: `${event.color}15`, color: event.color }}>
                                                    Event Details
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </section>

            {/* ── Footer ── */}
            <Footer />
        </main>
    );
}
