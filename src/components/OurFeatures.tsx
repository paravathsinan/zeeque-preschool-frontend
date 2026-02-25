"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const features = [
    {
        title: "Language & Literacy",
        description:
            "They are trained to communicate, read and write in Arabic, English and Malayalam and We believe the limit of language means the limit of the world.",
        image:
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Character is Everything",
        description:
            "Spiritual education being fused together with temporal knowledge, children get the best of both worlds and As the character formation is our priority.",
        image:
            "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Stress-free Learning",
        description:
            "The children are free. They learn in a stress-free environment. We are following completely stress free, fun filled curriculum.",
        image:
            "https://images.unsplash.com/photo-1544776193-352d25ca82cd?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Creative Expression",
        description:
            "Art, music, and drama are woven into everyday learning, helping children express themselves with confidence and joy.",
        image:
            "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Physical Development",
        description:
            "Through structured play and outdoor activities, children develop motor skills, coordination, and a love for an active lifestyle.",
        image:
            "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=800&auto=format&fit=crop",
    },
];

export default function OurFeatures() {
    return (
        <section className="relative overflow-hidden">
            {/* Top Pink Background */}
            <div className="bg-[#EF4047] pt-20 pb-44 relative">
                {/* Subtle pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.06] pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center"
                    >
                        <span className="text-white/80 font-heading font-bold uppercase tracking-wider text-sm mb-3 block">
                            Our Features
                        </span>
                        <h2 className="font-heading font-extrabold text-white text-4xl md:text-5xl leading-tight">
                            We bring you the <br />
                            finest details
                        </h2>
                    </motion.div>
                </div>
            </div>

            {/* Cards Carousel - overlapping the pink/white split */}
            <div className="bg-white dark:bg-slate-900 pb-20">
                <div className="max-w-[1200px] mx-auto px-4 xl:px-8 relative z-20 -mt-28">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        className="relative"
                    >

                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                prevEl: ".features-prev",
                                nextEl: ".features-next",
                            }}
                            spaceBetween={28}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="!overflow-visible"
                        >
                            {features.map((feature, index) => (
                                <SwiperSlide key={index}>
                                    <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 border border-gray-100 dark:border-slate-700">
                                        {/* Image */}
                                        <div className="relative h-56 overflow-hidden">
                                            <Image
                                                src={feature.image}
                                                alt={feature.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            {/* Gradient overlay at bottom of image */}
                                            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 sm:p-8">
                                            <h3 className="font-heading font-bold text-[#c13088] text-xl mb-3 group-hover:text-[#a02470] transition-colors">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 font-body text-[15px] leading-relaxed line-clamp-3">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Navigation Buttons - Below Cards */}
                        <div className="flex items-center justify-center gap-4 mt-10">
                            <button
                                className="features-prev w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center text-[#EF4047] hover:bg-[#EF4047] hover:text-white transition-all duration-300 border border-gray-100 dark:border-slate-700"
                                aria-label="Previous"
                            >
                                <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
                            </button>
                            <button
                                className="features-next w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center text-[#EF4047] hover:bg-[#EF4047] hover:text-white transition-all duration-300 border border-gray-100 dark:border-slate-700"
                                aria-label="Next"
                            >
                                <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
