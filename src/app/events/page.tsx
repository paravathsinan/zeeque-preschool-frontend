"use client";

import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Calendar, Sparkles, MapPin, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

import { getAllNews, getEventsPageEvents } from "@/data/newsAndEvents";

export default function EventsPage() {
    const [activeTab, setActiveTab] = useState<'news' | 'events'>('events');
    const newsData = getAllNews();
    const eventsData = getEventsPageEvents();

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 font-body selection:bg-secondary selection:text-white relative overflow-hidden transition-colors duration-300">
            {/* ── Header ── */}
            <div className="w-full relative z-50">
                <Navbar />
            </div>

            {/* ══════════════════════════════════
                SECTION 1: Hero Banner
               ══════════════════════════════════ */}
            <section className="relative w-full h-[500px] sm:h-[600px] md:h-[750px] lg:h-[800px] overflow-hidden z-0 bg-white dark:bg-slate-900">
                
                {/* Background — hero-section-bg.png (blue sky + cityscape + clouds) */}
                <div className="absolute top-0 left-0 w-full h-[82%] sm:h-[78%] md:h-[75%] -z-10 bg-[#1ba8e5]">
                    <Image
                        src="/images/assets/images/hero-section-bg.png"
                        alt="Blue sky background with cityscape"
                        fill
                        className="object-cover object-bottom"
                        priority
                        sizes="100vw"
                    />
                    
                    {/* Cloud Shape Divider at the bottom of the blue section */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
                        <svg className="w-full h-[30px] md:h-[45px] lg:h-[60px]" preserveAspectRatio="none" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0,100 L0,40 Q60,-20 120,40 Q180,-20 240,40 Q300,-20 360,40 Q420,-20 480,40 Q540,-20 600,40 Q660,-20 720,40 Q780,-20 840,40 Q900,-20 960,40 Q1020,-20 1080,40 Q1140,-20 1200,40 Q1260,-20 1320,40 Q1380,-20 1440,40 L1440,100 Z" fill="currentColor" className="text-white dark:text-slate-900" />
                        </svg>
                    </div>
                </div>

                {/* ===== Floating 3D Objects ===== */}
                <div className="absolute inset-0 w-full h-full max-w-[1440px] mx-auto pointer-events-none z-10">
                    <div className="absolute top-[28%] left-[2%] xl:left-[6%] hidden md:block" style={{ transform: 'rotate(-5deg)' }}>
                        <Image src="/images/assets/3d-elements/3d-airplane.png" alt="" width={160} height={110} className="object-contain drop-shadow-lg w-[120px] lg:w-[150px]" />
                    </div>
                    <div className="absolute top-[18%] right-[2%] xl:right-[6%] hidden md:block">
                        <Image src="/images/assets/3d-elements/3d-sun.png" alt="" width={220} height={220} className="object-contain drop-shadow-md w-[160px] lg:w-[210px]" />
                    </div>
                    <div className="absolute top-[42%] left-[4%] xl:left-[8%] hidden md:block">
                        <Image src="/images/assets/3d-elements/3d-cloud.png" alt="" width={200} height={120} className="object-contain opacity-95 w-[140px] lg:w-[190px]" />
                    </div>
                    <div className="absolute top-[38%] right-[1%] xl:right-[4%] hidden md:block" style={{ transform: 'scaleX(-1)' }}>
                        <Image src="/images/assets/3d-elements/3d-cloud.png" alt="" width={220} height={130} className="object-contain opacity-95 w-[160px] lg:w-[200px]" />
                    </div>
                    <div className="absolute bottom-[24%] right-[8%] xl:right-[15%] z-40 hidden md:block">
                        <Image src="/images/assets/3d-elements/3d-kid.png" alt="Happy student" width={180} height={250} className="object-contain drop-shadow-lg w-[140px] lg:w-[200px]" />
                    </div>
                </div>

                {/* ===== Main Content Area ===== */}
                <div className="absolute top-[32%] sm:top-[28%] md:top-[22%] left-1/2 -translate-x-1/2 w-full z-20 flex flex-col items-center px-4 max-w-[1140px]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-center"
                    >
                        {/* Breadcrumb */}
                        <div className="flex items-center justify-center gap-2 mb-6 font-body text-sm bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full w-fit mx-auto border border-white/30 text-white">
                            <Link href="/" className="hover:text-yellow-300 transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="#" className="hover:text-yellow-300 transition-colors cursor-default pointer-events-none">Updates</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="font-semibold text-yellow-300">Events</span>
                        </div>

                        {/* Heading */}
                        <h1 className="font-heading font-extrabold text-white text-3xl md:text-5xl lg:text-[52px] max-w-5xl mx-auto leading-[1.1] mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                            Events & Updates <br className="hidden md:block" /> at ZeeQue Preschool
                        </h1>

                        {/* Description */}
                        <p className="font-body font-medium text-white text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] bg-black/10 px-6 py-3 rounded-2xl backdrop-blur-[2px]">
                            Stay up-to-date with the latest events, announcements, and celebrations happening in our vibrant preschool community.
                        </p>
                    </motion.div>
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
                        className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
                    >
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
                                alt="Happy children enjoying outdoor play activities at ZeeQue Preschool in Kerala."
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 50vw"
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
                                Latest <span className="text-[#3FB7E5]">Updates</span>
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 font-body text-center md:text-left">
                                Stay informed about what&apos;s happening at ZeeQue.
                            </p>
                        </div>

                        {/* Toggle Buttons */}
                        <div className="flex items-center p-1.5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
                            <button
                                onClick={() => setActiveTab('events')}
                                className={`px-8 py-3 rounded-xl font-heading font-bold text-[15px] transition-all duration-300 ${activeTab === 'events'
                                    ? 'bg-[#3FB7E5] text-white shadow-md'
                                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
                                    }`}
                            >
                                Events
                            </button>
                            <button
                                onClick={() => setActiveTab('news')}
                                className={`px-8 py-3 rounded-xl font-heading font-bold text-[15px] transition-all duration-300 ${activeTab === 'news'
                                    ? 'bg-[#3FB7E5] text-white shadow-md'
                                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
                                    }`}
                            >
                                News
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
                                                <Image
                                                    src={news.image}
                                                    alt={news.alt}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                                                />
                                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-heading font-bold text-[#3FB7E5]">
                                                    {news.category}
                                                </div>
                                            </div>
                                            <div className="p-6 flex flex-col h-[calc(100%-220px)]">
                                                <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-xs font-body mb-3 shrink-0">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {news.date}
                                                </div>
                                                <h3 className="font-heading font-bold text-xl text-[#222] dark:text-white mb-3 group-hover:text-[#3FB7E5] transition-colors line-clamp-2 shrink-0">
                                                    {news.title}
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-400 text-sm font-body line-clamp-3 mb-5 leading-relaxed flex-grow">
                                                    {news.description}
                                                </p>
                                                <Link href={`/events/${news.slug}`} className="inline-flex items-center gap-1.5 text-sm font-heading font-bold text-[#3FB7E5] hover:gap-2.5 transition-all mt-auto shrink-0">
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
                                                <Image
                                                    src={event.image}
                                                    alt={event.alt}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
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

                                                <Link href={`/events/${event.slug}`} className="flex items-center justify-center w-full py-2.5 rounded-xl font-heading font-bold text-sm transition-colors shrink-0 hover:opacity-90 active:scale-[0.98]"
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
