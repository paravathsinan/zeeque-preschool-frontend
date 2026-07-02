"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";

import { getFeaturedEvents } from "@/data/newsAndEvents";
export default function NewsAndEvents() {
    const events = getFeaturedEvents();
    return (
        <section className="py-10 lg:py-16 bg-white relative overflow-hidden">

            {/* Playful background doodles */}
            <div className="absolute top-8 right-16 w-24 h-24 rounded-full border-[6px] border-dotted border-[#0060D6]/10 pointer-events-none hidden lg:block" />
            <div className="absolute bottom-20 left-12 w-16 h-16 rounded-xl bg-blue-50 rotate-12 pointer-events-none hidden lg:block" />

            <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row sm:items-end items-center justify-between mb-14 gap-6 sm:gap-4"
                >
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <h2 className="text-[#1A2B4C] text-4xl md:text-5xl lg:text-6xl mb-6 flex flex-row flex-wrap justify-center sm:justify-start items-center gap-x-3 md:gap-x-4 gap-y-2">
                            <span className="font-courgette font-bold tracking-wide">News &</span> 
                            <span className="relative text-[#0060D6] font-bold font-quicksand z-10">
                                Events
                                {/* Yellow swoosh underline */}
                                <svg className="absolute -bottom-4 left-0 w-full h-5 text-[#FFC107] -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                                    <path d="M5,15 Q50,0 95,15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h2>
                        <p className="text-gray-500 font-body text-lg mt-3 max-w-lg">
                            Stay updated with the latest happenings at Zeeque Preschool.
                        </p>
                    </div>
                    <Link
                        href="/events"
                        className="hidden sm:inline-flex items-center gap-2 text-[#0060D6] font-bold text-[15px] hover:gap-3 transition-all whitespace-nowrap"
                    >
                        View All Articles
                        <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                    </Link>
                </motion.div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.6,
                                delay: 0.15 * index,
                                ease: "easeOut",
                            }}
                        >
                            <div className="group bg-white rounded-3xl overflow-hidden border border-[#E8F0FE] shadow-[0_4px_24px_rgba(0,96,214,0.06)] hover:shadow-xl transition-all duration-400 hover:-translate-y-2 h-full flex flex-col">
                                {/* Image */}
                                <div className="relative h-52 overflow-hidden">
                                    <Image
                                        src={event.image}
                                        alt={event.alt}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 sm:p-7 flex flex-col flex-grow">
                                    {/* Date & Time */}
                                    <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {event.date}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5" />
                                            {event.time}
                                        </span>
                                    </div>

                                    <h3 className="font-bold text-[#222] text-xl mb-3 group-hover:text-[#0060D6] transition-colors leading-snug">
                                        {event.title}
                                    </h3>

                                    <p className="text-gray-500 font-body text-[15px] leading-relaxed flex-grow">
                                        {event.description}
                                    </p>

                                    {/* Read More Link */}
                                    <Link
                                        href={`/events/${event.slug}`}
                                        className="inline-flex items-center gap-2 text-[#0060D6] font-bold text-sm mt-5 hover:gap-3 transition-all"
                                    >
                                        Read More
                                        <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile View All Link */}
                <div className="mt-10 flex justify-center sm:hidden">
                    <Link
                        href="/events"
                        className="inline-flex items-center gap-2 text-[#0060D6] font-bold text-[15px] hover:gap-3 transition-all whitespace-nowrap"
                    >
                        View All Articles
                        <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
