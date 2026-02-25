"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
    { src: "/images/gallery/659cf71996662425490851jpeg.jpg", alt: "Kids group activity" },
    { src: "/images/gallery/659cf8008284c851243362jpg.jpg", alt: "Classroom learning" },
    { src: "/images/gallery/659cf80085693885115214jpg.jpg", alt: "Creative play" },
    { src: "/images/gallery/659cf80087c4f343934456jpg.jpg", alt: "Art and crafts" },
    { src: "/images/gallery/659cf8008ca94809301637jpg.jpg", alt: "Outdoor fun" },
    { src: "/images/gallery/659cf8008ef6f279072207jpg.jpg", alt: "Reading time" },
    { src: "/images/gallery/659cf80091901738547727jpg.jpg", alt: "Music class" },
    { src: "/images/gallery/659cf80093641587912646jpg.jpg", alt: "Sports day" },
    { src: "/images/gallery/659cf800960be985886235jpg.jpg", alt: "Science exploration" },
    { src: "/images/gallery/659cf8009863e170741363jpg.jpg", alt: "Fun moments" },
];

export default function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);
    const goNext = () => {
        if (selectedIndex !== null) setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    };
    const goPrev = () => {
        if (selectedIndex !== null) setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    };

    return (
        <section className="py-20 lg:py-28 bg-[#f9f9f9] dark:bg-slate-950 relative overflow-hidden">

            {/* Playful decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-4 border-dotted border-[#0b8641]/20 pointer-events-none hidden lg:block" />
            <div className="absolute bottom-14 right-16 w-12 h-12 rounded-full bg-[#fbaf01]/10 pointer-events-none hidden lg:block" />

            <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center max-w-2xl mx-auto mb-14"
                >
                    <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-tight mb-4">
                        Our <span className="text-[#0b8641]">Gallery</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 font-body text-lg">
                        Capturing the joy, creativity, and learning moments of our little stars.
                    </p>
                </motion.div>

                {/* Masonry-style Grid */}
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ duration: 0.5, delay: 0.05 * index, ease: "easeOut" }}
                            className="break-inside-avoid cursor-pointer group"
                            onClick={() => openLightbox(index)}
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={400}
                                    height={300}
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                    <span className="text-white text-sm font-heading font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        View
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4 sm:p-8"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 text-white/80 hover:text-white z-50 transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Prev Button */}
                        <button
                            onClick={(e) => { e.stopPropagation(); goPrev(); }}
                            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all z-50"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={(e) => { e.stopPropagation(); goNext(); }}
                            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all z-50"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Image */}
                        <motion.div
                            key={selectedIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-4xl max-h-[80vh] w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={galleryImages[selectedIndex].src}
                                alt={galleryImages[selectedIndex].alt}
                                width={1200}
                                height={800}
                                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
                            />
                            <p className="text-white/60 text-center mt-4 font-body text-sm">
                                {selectedIndex + 1} / {galleryImages.length}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
