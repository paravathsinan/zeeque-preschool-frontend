"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Saniya Nazar",
        role: "Parent",
        avatar: "SN",
        color: "bg-[#c13088]",
        text: "It's been a great opportunity for my daughter to get close to Quran. She has shown great interest in reciting Surahs. My daughter tries to recite the daily adhkars own her own. The teaching techniques are innovative and deserves appreciation. Overall, there is a remarkable improvement in the spiritual and academic side of my daughter. All thanks to the teachers for their patience and hard work.",
    },
    {
        name: "Fathima Rizwan",
        role: "Parent",
        avatar: "FR",
        color: "bg-[#0052ff]",
        text: "I have seen a tremendous change in my son after joining Zeeque Preschool. His behavior, character, attitude, speech, language & spelling has improved remarkably. The teachers are very dedicated and caring. I'm truly grateful for the positive impact Zeeque Preschool has had on my child's overall development.",
    },
    {
        name: "Aysha Shareef",
        role: "Parent",
        avatar: "AS",
        color: "bg-[#0b8641]",
        text: "Zeeque Preschool has been a wonderful experience for our family. My child has blossomed both academically and socially. The creative teaching methods and the warm, nurturing environment have made learning a joyful experience. We couldn't be happier with the progress our little one has made.",
    },
];

export default function StoriesOfChange() {
    return (
        <section className="py-20 lg:py-28 bg-[#f9f9f9] dark:bg-slate-950 relative overflow-hidden">

            {/* Playful decorative shapes */}
            <div className="absolute top-12 left-8 w-20 h-20 rounded-full border-4 border-dashed border-[#fbaf01]/30 pointer-events-none hidden lg:block" />
            <div className="absolute bottom-16 right-12 w-14 h-14 rounded-full bg-[#c13088]/10 pointer-events-none hidden lg:block" />
            <div className="absolute top-1/2 right-8 w-8 h-8 rounded-full bg-[#0052ff]/10 pointer-events-none hidden xl:block" />

            <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-14"
                >

                    <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-tight">
                        Stories of <span className="text-[#c13088]">Change</span>
                    </h2>
                </motion.div>

                {/* Testimonial Slider */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                >
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{
                            clickable: true,
                            bulletClass: "stories-bullet",
                            bulletActiveClass: "stories-bullet-active",
                        }}
                        autoplay={{ delay: 5000, disableOnInteraction: true }}
                        spaceBetween={32}
                        slidesPerView={1}
                        className="stories-swiper !pb-14"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-sm border border-gray-100 dark:border-slate-700 relative">

                                    {/* Large quote icon */}
                                    <div className="absolute top-6 right-8 opacity-[0.06]">
                                        <Quote className="w-28 h-28 text-[#c13088]" />
                                    </div>

                                    {/* Avatar + Name */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`w-14 h-14 ${testimonial.color} rounded-full flex items-center justify-center text-white font-heading font-bold text-lg shadow-md`}>
                                            {testimonial.avatar}
                                        </div>
                                        <div>
                                            <h4 className="font-heading font-bold text-[#222] dark:text-white text-lg">
                                                {testimonial.name}
                                            </h4>
                                            <span className="text-[#c13088] font-heading text-sm font-medium">
                                                {testimonial.role}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Testimonial Text */}
                                    <p className="text-gray-600 dark:text-gray-300 font-body text-[16px] sm:text-[17px] leading-[1.8] relative z-10">
                                        {testimonial.text}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>

            {/* Custom bullet styles */}
            <style jsx global>{`
                .stories-bullet {
                    display: inline-block;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: #d1d5db;
                    margin: 0 5px !important;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .stories-bullet-active {
                    background: #c13088 !important;
                    width: 12px;
                    height: 12px;
                }
                .stories-swiper .swiper-pagination {
                    bottom: 0 !important;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    padding-left: 0;
                }
            `}</style>
        </section>
    );
}
