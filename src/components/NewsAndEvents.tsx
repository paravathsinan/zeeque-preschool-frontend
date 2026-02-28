"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";

const events = [
    {
        title: "Annual Day Celebration 2025",
        date: "March 15, 2025",
        time: "10:00 AM - 2:00 PM",
        category: "Celebration",
        categoryColor: "bg-[#fbaf01] text-[#222]",
        description:
            "Join us for an exciting annual day filled with performances, art exhibitions, and fun activities by our little stars!",
        image:
            "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Parent-Teacher Conference",
        date: "March 22, 2025",
        time: "9:00 AM - 12:00 PM",
        category: "Meeting",
        categoryColor: "bg-[#0052ff] text-white",
        description:
            "An opportunity for parents and teachers to discuss child development, progress reports, and upcoming curriculum plans.",
        image:
            "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Little Artists Exhibition",
        date: "April 5, 2025",
        time: "11:00 AM - 3:00 PM",
        category: "Art",
        categoryColor: "bg-[#c13088] text-white",
        description:
            "Watch our young learners showcase their creativity through paintings, crafts, and collaborative art projects.",
        image:
            "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800&auto=format&fit=crop",
    },
];

export default function NewsAndEvents() {
    return (
        <section className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">

            {/* Playful background doodles */}
            <div className="absolute top-8 right-16 w-24 h-24 rounded-full border-[6px] border-dotted border-[#fbaf01]/20 pointer-events-none hidden lg:block" />
            <div className="absolute bottom-20 left-12 w-16 h-16 rounded-xl bg-[#0052ff]/5 rotate-12 pointer-events-none hidden lg:block" />

            <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4"
                >
                    <div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-tight">
                            News & <span className="text-[#0052ff]">Events</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 font-body text-lg mt-3 max-w-lg">
                            Stay updated with the latest happenings at Zeeque Preschool.
                        </p>
                    </div>
                    <Link
                        href="/events"
                        className="inline-flex items-center gap-2 text-[#0052ff] font-heading font-bold text-[15px] hover:gap-3 transition-all whitespace-nowrap"
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
                            <div className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-2 h-full flex flex-col">
                                {/* Image */}
                                <div className="relative h-52 overflow-hidden">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Category Badge */}
                                    <div
                                        className={`absolute top-4 left-4 px-4 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wide ${event.categoryColor}`}
                                    >
                                        {event.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 sm:p-7 flex flex-col flex-grow">
                                    {/* Date & Time */}
                                    <div className="flex items-center gap-4 text-gray-400 dark:text-gray-500 text-sm mb-4">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {event.date}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5" />
                                            {event.time}
                                        </span>
                                    </div>

                                    <h3 className="font-heading font-bold text-[#222] dark:text-white text-xl mb-3 group-hover:text-[#0052ff] transition-colors leading-snug">
                                        {event.title}
                                    </h3>

                                    <p className="text-gray-500 dark:text-gray-400 font-body text-[15px] leading-relaxed flex-grow">
                                        {event.description}
                                    </p>

                                    {/* Read More Link */}
                                    <Link
                                        href="/events"
                                        className="inline-flex items-center gap-2 text-[#0052ff] font-heading font-bold text-sm mt-5 hover:gap-3 transition-all"
                                    >
                                        Read More
                                        <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
