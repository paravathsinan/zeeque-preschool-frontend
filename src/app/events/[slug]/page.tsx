"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getItemBySlug, newsAndEventsData } from "@/data/newsAndEvents";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin, ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { use } from "react";

export default function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const item = getItemBySlug(resolvedParams.slug);

    if (!item) {
        notFound();
    }

    const relatedItems = newsAndEventsData.filter(x => x.slug !== item.slug).slice(0, 3);

    return (
        <main className="min-h-screen bg-[#F8F9FA] font-body selection:bg-secondary selection:text-white relative">
            {/* Header */}
            <div className="w-full relative z-50">
                <Navbar />
            </div>

            {/* Top Back Link & Breadcrumb Container */}
            <div className="max-w-[1140px] mx-auto px-4 xl:px-8 pt-28 md:pt-36 pb-4">
                <div className="flex flex-wrap items-center gap-y-2 gap-x-2 text-sm font-medium text-gray-500 mb-6">
                    <Link href="/" className="hover:text-[#0060D6] transition-colors whitespace-nowrap">Home</Link>
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    <Link href="/events" className="hover:text-[#0060D6] transition-colors whitespace-nowrap">Updates & Events</Link>
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    <span className="text-gray-900 line-clamp-1 break-all md:break-normal">{item.title}</span>
                </div>

                <Link href="/events" className="inline-flex items-center gap-2 text-[#0060D6] font-bold text-sm hover:-translate-x-1 transition-transform bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Events
                </Link>
            </div>

            {/* Main Content Section */}
            <section className="pb-16 md:pb-24">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8">
                    <div className="bg-white rounded-[32px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-gray-100">
                        {/* Hero Image */}
                        <div className="relative h-[300px] md:h-[450px] lg:h-[550px] w-full bg-gray-100">
                            <Image
                                src={item.image}
                                alt={item.alt}
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Gradient Overlay for better contrast on bottom text if we had any, though we put info below */}
                        </div>

                        {/* Event Details Content */}
                        <div className="p-8 md:p-12 lg:p-16 relative">
                            {/* Floating Category Badge */}
                            <div 
                                className="absolute -top-6 left-8 md:left-12 px-6 py-2.5 rounded-full text-white font-bold text-sm shadow-lg z-10 font-heading tracking-wide"
                                style={{ backgroundColor: item.color }}
                            >
                                {item.category.toUpperCase()}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h1 className="font-heading font-extrabold text-[#1A2B4C] text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
                                    {item.title}
                                </h1>

                                {/* Meta Info Bar */}
                                <div className="flex flex-wrap items-center gap-6 md:gap-10 p-6 bg-gray-50 rounded-2xl mb-12 border border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                                            <Calendar className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Date</p>
                                            <p className="font-medium text-gray-900">{item.date}</p>
                                        </div>
                                    </div>

                                    {item.time && (
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                                                <Clock className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Time</p>
                                                <p className="font-medium text-gray-900">{item.time}</p>
                                            </div>
                                        </div>
                                    )}

                                    {item.location && (
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Location</p>
                                                <p className="font-medium text-gray-900">{item.location}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Rich Text Content */}
                                <div 
                                    className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-[#0060D6] hover:prose-a:text-[#FFCB05]"
                                    dangerouslySetInnerHTML={{ __html: item.content }}
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Updates Section */}
            <section className="py-16 md:py-24 bg-white relative">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8">
                    <h2 className="font-heading font-extrabold text-[#222222] text-3xl md:text-4xl leading-[1.2] mb-12 text-center">
                        Other <span className="text-[#0060D6]">Updates</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedItems.map((related) => (
                            <div key={related.id} className="bg-[#F8F9FA] rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group translate-y-0 hover:-translate-y-1">
                                <div className="relative h-[220px] overflow-hidden">
                                    <Image
                                        src={related.image}
                                        alt={related.alt}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-heading font-bold" style={{ color: related.color }}>
                                        {related.category}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col h-[calc(100%-220px)]">
                                    <div className="flex items-center gap-2 text-gray-400 text-xs font-body mb-3 shrink-0">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {related.date}
                                    </div>
                                    <h3 className="font-heading font-bold text-xl text-[#222] mb-3 group-hover:text-[#0060D6] transition-colors line-clamp-2 shrink-0">
                                        {related.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm font-body line-clamp-2 mb-5 leading-relaxed flex-grow">
                                        {related.description}
                                    </p>
                                    <Link href={`/events/${related.slug}`} className="inline-flex items-center gap-1.5 text-sm font-heading font-bold hover:gap-2.5 transition-all mt-auto shrink-0" style={{ color: related.color }}>
                                        Read Full Story <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}
