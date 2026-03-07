"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const features = [
    {
        title: "Language & Literacy",
        description:
            "They are trained to communicate, read and write in Arabic, English and Malayalam and We believe the limit of language means the limit of the world.",
        image:
            "/images/gallery/actiivites/659cf71996662425490851jpeg.jpg",
        alt: "Children learning to read and write in Arabic, English, and Malayalam at Zeeque Preschool, Kerala.",
    },
    {
        title: "Character is Everything",
        description:
            "Spiritual education being fused together with temporal knowledge, children get the best of both worlds and As the character formation is our priority.",
        image:
            "/images/gallery/actiivites/659cf8008284c851243362jpg.jpg",
        alt: "Students receiving spiritual and temporal education focusing on character formation at our Kerala preschool.",
    },
    {
        title: "Stress-free Learning",
        description:
            "The children are free. They learn in a stress-free environment. We are following completely stress free, fun filled curriculum.",
        image:
            "/images/gallery/actiivites/659cf80085693885115214jpg.jpg",
        alt: "Kids enjoying a fun-filled, stress-free learning environment at Zeeque Islamic preschool in Kozhikode.",
    },
    {
        title: "Creative Expression",
        description:
            "Art, music, and drama are woven into everyday learning, helping children express themselves with confidence and joy.",
        image:
            "/images/gallery/actiivites/659cf80087c4f343934456jpg.jpg",
        alt: "Toddlers engaging in art, music, and drama activities to boost confidence at our Montessori.",
    },
    {
        title: "Physical Development",
        description:
            "Through structured play and outdoor activities, children develop motor skills, coordination, and a love for an active lifestyle.",
        image:
            "/images/gallery/actiivites/659cf8008ca94809301637jpg.jpg",
        alt: "Children participating in structured outdoor play and sports activities at our Kerala preschool campus.",
    },
];

export default function OurFeatures() {
    return (
        <section className="relative overflow-hidden">
            {/* Top Pink Background */}
            <div className="bg-[#EF4047] pt-10 pb-36 relative">
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
            <div className="bg-white dark:bg-slate-900 pb-10">
                <div className="max-w-[1200px] mx-auto px-4 xl:px-8 relative z-20 -mt-28">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        className="relative"
                    >

                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation={{
                                prevEl: ".features-prev",
                                nextEl: ".features-next",
                            }}
                            spaceBetween={28}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true
                            }}
                            speed={800}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="!overflow-visible"
                        >
                            {features.map((feature, index) => (
                                <SwiperSlide key={index}>
                                    <div className="group relative h-[380px] rounded-[28px] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                                        {/* Background Image */}
                                        <Image
                                            src={feature.image}
                                            alt={feature.alt}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                        />

                                        {/* Gradient overlay for text readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                        {/* Content at bottom */}
                                        <div className="absolute bottom-0 left-0 right-0 p-7">
                                            <h3 className="font-heading font-extrabold text-white text-xl mb-2 tracking-tight drop-shadow-md">
                                                {feature.title}
                                            </h3>
                                            <p className="text-white/75 font-body text-[14px] leading-relaxed line-clamp-2">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Navigation Buttons - Glassmorphism */}
                        <div className="flex items-center justify-center gap-4 mt-10">
                            <button
                                className="features-prev w-12 h-12 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(239,64,71,0.15)] flex items-center justify-center text-[#EF4047] hover:bg-[#EF4047] hover:text-white transition-all duration-300 border border-white/50 dark:border-slate-700/50 hover:scale-105 active:scale-95"
                                aria-label="Previous"
                            >
                                <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
                            </button>
                            <button
                                className="features-next w-12 h-12 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(239,64,71,0.15)] flex items-center justify-center text-[#EF4047] hover:bg-[#EF4047] hover:text-white transition-all duration-300 border border-white/50 dark:border-slate-700/50 hover:scale-105 active:scale-95"
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
