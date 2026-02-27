"use client";

import Image from "next/image";
import Link from "next/link";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Camera, Image as ImageIcon, X } from "lucide-react";

const galleryImages = [
    {
        src: "/images/gallery/gallery photos/IMG_5246.JPG",
        alt: "Creative learning",
        className: "col-span-1 row-span-2 rounded-[40px] rounded-tl-none md:rounded-[60px] md:rounded-tl-none aspect-[3/4] h-full",
    },
    {
        src: "/images/gallery/gallery photos/IMG_5282.JPG",
        alt: "Story time",
        className: "col-span-1 row-span-1 rounded-[30px] rounded-br-none aspect-square",
    },
    {
        src: "/images/gallery/gallery photos/IMG_5284.JPG",
        alt: "Outdoor play",
        className: "col-span-1 row-span-2 rounded-[40px] rounded-bl-none md:rounded-[60px] md:rounded-bl-none aspect-[3/4] h-full",
    },
    {
        src: "/images/gallery/gallery photos/IMG_5316.JPG",
        alt: "Sports event",
        className: "col-span-1 row-span-1 rounded-[30px] rounded-tr-none aspect-square",
    },
    {
        src: "/images/gallery/gallery photos/IMG_5740 (2) - Copy.JPG",
        alt: "Coloring together",
        className: "col-span-2 md:col-span-1 row-span-1 rounded-[40px] rounded-bl-none aspect-[2/1] md:aspect-square",
    },
    {
        src: "/images/gallery/gallery photos/IMG_5744 (2) - Copy.JPG",
        alt: "Exploring nature",
        className: "col-span-2 row-span-2 md:col-span-1 rounded-full aspect-square object-cover",
    },
    {
        src: "/images/gallery/gallery photos/IMG_5749 (2) - Copy.JPG",
        alt: "Happy kids",
        className: "col-span-1 row-span-1 rounded-[40px] rounded-br-none aspect-square",
    },
    {
        src: "/images/gallery/gallery photos/IMG_5768 - Copy.JPG",
        alt: "Teamwork",
        className: "col-span-1 row-span-1 rounded-[30px] rounded-tl-none aspect-square",
    },
    {
        src: "/images/gallery/gallery photos/IMG_5771 - Copy.JPG",
        alt: "Celebration",
        className: "col-span-2 row-span-1 rounded-[40px] rounded-tr-none md:rounded-[60px] md:rounded-tr-none aspect-[2/1] h-full",
    }
];

export default function GalleryPage() {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [lightboxIndex, setLightboxIndex] = useState<number>(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const handleNext = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        if (lightboxOpen) {
            setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
        } else {
            setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
        }
    };

    const handlePrev = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        if (lightboxOpen) {
            setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
        } else {
            setSelectedIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "Escape") setLightboxOpen(false);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex, lightboxOpen]);

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#fffcf2] to-[#faeed1] dark:from-slate-900 dark:to-slate-950 font-body selection:bg-secondary selection:text-white relative overflow-hidden transition-colors duration-300">
            {/* ── Header ── */}
            <div className="w-full relative z-50">
                <div className="hidden lg:block w-full bg-white dark:bg-slate-900 border-b border-dashed border-gray-200 dark:border-slate-700 transition-colors duration-300">
                    <TopHeader />
                </div>
                <div className="max-w-[1140px] mx-auto bg-white dark:bg-slate-900 rounded-b-[40px] shadow-sm border border-gray-100 dark:border-slate-800 px-4 xl:px-8 transition-colors duration-300 relative z-50">
                    <Navbar />
                </div>
            </div>

            {/* ══════════════════════════════════
                SECTION 1: Hero Banner
               ══════════════════════════════════ */}
            <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 right-[10%] w-24 h-24 rounded-full bg-[#fbaf01]/10 animate-pulse" />
                    <div className="absolute top-20 left-[15%] w-16 h-16 rounded-full bg-[#e83e8c]/10 animate-pulse delay-500" />
                    <div className="absolute bottom-10 right-[20%] w-20 h-20 rounded-full bg-[#0fb85c]/10 animate-pulse delay-1000" />
                    <div className="absolute top-1/2 left-[8%] w-20 h-20 rounded-full border-4 border-dashed border-[#ef4225]/10" />
                    <div className="absolute bottom-20 left-[25%] w-12 h-12 rounded-full bg-[#0052ff]/10 animate-pulse delay-700" />
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
                            <span className="text-primary font-semibold">Gallery</span>
                        </div>

                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="bg-[#e83e8c]/10 p-3 rounded-2xl">
                                <Camera className="w-8 h-8 text-[#e83e8c]" />
                            </div>
                        </div>

                        <h1 className="font-heading font-extrabold text-[#222222] dark:text-white text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
                            Image{" "}
                            <span className="relative inline-block">
                                <span className="text-[#e83e8c]">Gallery</span>
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                                    <path d="M2 8C40 2 80 2 100 6C120 10 160 10 198 4" stroke="#e83e8c" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Take a glimpse into the wonderful world of ZeeQue! See the smiles, the creativity, and the unforgettable moments of our little learners.
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
                SECTION 2: Gallery Grid
               ══════════════════════════════════ */}
            <section className="py-16 md:py-24 bg-white dark:bg-slate-900 relative">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-heading font-extrabold text-[#222222] dark:text-white text-3xl md:text-4xl leading-[1.2]">
                            Beautiful <span className="text-[#0052ff]">Memories</span>
                        </h2>
                    </motion.div>

                    {/* 3D Carousel Gallery */}
                    <div className="relative w-full h-[300px] md:h-[500px] overflow-visible flex items-center justify-center -mt-8">
                        {galleryImages.map((img, i) => {
                            // Calculate position relative to selected index
                            let offset = i - (selectedIndex ?? Math.floor(galleryImages.length / 2));
                            if (offset < -Math.floor(galleryImages.length / 2)) offset += galleryImages.length;
                            if (offset > Math.floor(galleryImages.length / 2)) offset -= galleryImages.length;

                            // Show all items to create a long trailing effect on both ends
                            const isVisible = Math.abs(offset) <= 6;

                            // Calculate x offset non-linearly to prevent large gaps at the edges due to scaling
                            const absOffset = Math.abs(offset);
                            let xPercent = absOffset * 35;
                            if (absOffset > 2) {
                                xPercent = 2 * 35 + (absOffset - 2) * 20;
                            }
                            const xPosition = offset < 0 ? -xPercent : xPercent;

                            return (
                                isVisible && (
                                    <motion.div
                                        key={i}
                                        initial={false}
                                        animate={{
                                            x: `${xPosition}%`,
                                            scale: 1 - absOffset * 0.12, // Center=1, slightly smaller at edges
                                            zIndex: 50 - absOffset, // Center is highest
                                            opacity: 1 - absOffset * 0.12, // Keep edge photos more visible
                                            rotateY: offset * -15, // Creates the 3D angle effect
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                            mass: 0.8
                                        }}
                                        className="absolute w-[200px] md:w-[350px] aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
                                        style={{ perspective: 1000 }}
                                        onClick={() => {
                                            if (offset === 0) {
                                                setLightboxIndex(selectedIndex);
                                                setLightboxOpen(true);
                                            } else {
                                                setSelectedIndex(i);
                                            }
                                        }}
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 200px, 350px"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                    </motion.div>
                                )
                            );
                        })}
                    </div>

                    {/* Carousel Navigation Buttons */}
                    <div className="flex items-center justify-center gap-6 mt-8 md:mt-12 pb-8">
                        <button
                            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-[#0052ff] hover:text-[#0052ff] dark:hover:border-[#0052ff] dark:hover:text-[#0052ff] hover:bg-[#0052ff]/5 transition-all shadow-sm group"
                        >
                            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); handleNext(); }}
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-[#0052ff] hover:text-[#0052ff] dark:hover:border-[#0052ff] dark:hover:text-[#0052ff] hover:bg-[#0052ff]/5 transition-all shadow-sm group"
                        >
                            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                </div>
            </section>

            {/* ── Footer ── */}
            <Footer />

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 sm:p-8"
                        onClick={() => setLightboxOpen(false)}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setLightboxOpen(false)}
                            className="absolute top-6 right-6 text-white/50 hover:text-white z-50 transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Prev Button */}
                        <button
                            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all z-50"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={(e) => { e.stopPropagation(); handleNext(); }}
                            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all z-50"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Image */}
                        <motion.div
                            key={lightboxIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="relative flex justify-center items-center max-w-5xl max-h-[85vh] w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={galleryImages[lightboxIndex].src}
                                alt={galleryImages[lightboxIndex].alt}
                                width={1600}
                                height={1200}
                                className="w-auto h-auto max-w-full max-h-[85vh] rounded-[40px] shadow-none"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
