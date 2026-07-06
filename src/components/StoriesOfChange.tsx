"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Saniya Nazar",
        role: "Parent",
        avatar: "SN",
        color: "#E91E63", // Pink
        bgColor: "bg-white",
        text: "It's been a great opportunity for my daughter to get close to Quran. She has shown great interest in reciting Surahs. My daughter tries to recite the daily adhkars own her own. The teaching techniques are innovative and deserves appreciation. Overall, there is a remarkable improvement in the spiritual and academic side of my daughter. All thanks to the teachers for their patience and hard work.",
    },
    {
        name: "Fathima Rizwan",
        role: "Parent",
        avatar: "FR",
        color: "#0060D6", // Blue
        bgColor: "bg-white",
        text: "I have seen a tremendous change in my son after joining Zeeque Preschool. His behavior, character, attitude, speech, language & spelling has improved remarkably. The teachers are very dedicated and caring. I'm truly grateful for the positive impact Zeeque Preschool has had on my child's overall development.",
    },
    {
        name: "Aysha Shareef",
        role: "Parent",
        avatar: "AS",
        color: "#4CAF50", // Green
        bgColor: "bg-white",
        text: "Zeeque Preschool has been a wonderful experience for our family. My child has blossomed both academically and socially. The creative teaching methods and the warm, nurturing environment have made learning a joyful experience. We couldn't be happier with the progress our little one has made.",
    },
];

export default function StoriesOfChange() {
    return (
        <section className="pt-20 pb-10 lg:pt-28 lg:pb-14 bg-[#FFF8E6] relative overflow-hidden">
            {/* Background SVG Decor */}
            <div className="absolute top-20 left-10 opacity-[0.05] transform -rotate-12 w-24 h-24 hidden md:block">
                <Image src="/images/assets/icons/Test.svg" alt="Test" fill className="object-contain" />
            </div>
            <div className="absolute bottom-20 left-20 opacity-[0.05] transform rotate-12 w-32 h-32 hidden md:block">
                <Image src="/images/assets/icons/Teaching.svg" alt="Teaching" fill className="object-contain" />
            </div>
            <div className="absolute top-40 right-10 opacity-[0.05] transform rotate-45 w-20 h-20 hidden md:block">
                <Image src="/images/assets/icons/Geology.svg" alt="Geology" fill className="object-contain" />
            </div>
            <div className="absolute bottom-40 right-20 opacity-[0.05] transform -rotate-12 w-28 h-28 hidden md:block">
                <Image src="/images/assets/icons/Trophy.svg" alt="Trophy" fill className="object-contain" />
            </div>
            <div className="absolute top-1/3 left-[20%] opacity-[0.05] transform rotate-[-20deg] w-16 h-16 hidden md:block">
                <Image src="/images/assets/icons/Book pen.svg" alt="Book pen" fill className="object-contain" />
            </div>
            <div className="absolute top-1/4 right-[25%] opacity-[0.05] transform rotate-12 w-20 h-20 hidden md:block">
                <Image src="/images/assets/icons/Language.svg" alt="Language" fill className="object-contain" />
            </div>

            <div className="max-w-[1300px] mx-auto px-4 xl:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 relative"
                >
                    
                    <h2 className="text-[#1A2B4C] text-4xl md:text-5xl lg:text-6xl mb-6 flex flex-col md:flex-row flex-wrap justify-center items-center gap-x-4 gap-y-2">
                        <span className="font-courgette font-bold tracking-wide">What our</span> 
                        <span className="relative text-[#E91E63] font-bold font-quicksand z-10">
                            parents say
                            <svg className="absolute -bottom-4 left-0 w-full h-5 text-[#FFC107] -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                                <path d="M5,15 Q50,0 95,15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h2>
                </motion.div>

                {/* Swiper Carousel */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ 
                        clickable: true, 
                        el: ".testimonial-pagination", 
                        bulletClass: "swiper-bullet-custom", 
                        bulletActiveClass: "swiper-bullet-custom-active" 
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="!pb-12 !overflow-visible"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className="!h-auto pt-6">
                            <div className="h-full flex flex-col group">
                                {/* Speech Bubble Card */}
                                <div className={`flex-1 ${testimonial.bgColor} rounded-[32px] p-8 relative shadow-[0_8px_30px_rgba(0,0,0,0.04)]`}>
                                    
                                    {/* Quote Icon */}
                                    <div className="absolute top-6 right-6 opacity-20">
                                        <Quote className="w-12 h-12" fill={testimonial.color} color={testimonial.color} />
                                    </div>
                                    
                                    {/* Testimonial Text */}
                                    <p className="text-gray-600 font-medium text-[15px] leading-relaxed mb-6 relative z-10">
                                        "{testimonial.text}"
                                    </p>
                                    
                                    {/* Speech Bubble Tail */}
                                    <div className={`w-10 h-10 ${testimonial.bgColor} absolute -bottom-3 right-12 transform rotate-45 -z-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-sm`}></div>
                                </div>
                                
                                {/* Avatar and Name (Outside the bubble) */}
                                <div className="flex items-center gap-4 mt-10 px-6 shrink-0">
                                    <div
                                        className="w-16 h-16 rounded-[20px] flex items-center justify-center text-white font-bold text-xl shadow-md"
                                        style={{ backgroundColor: testimonial.color }}
                                    >
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-courgette font-bold text-[#1A2B4C] text-[20px] leading-tight mb-1">
                                            {testimonial.name}
                                        </h4>
                                        <span className="text-gray-500 text-[13px] font-bold tracking-wide uppercase">
                                            {testimonial.role}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
                <div className="testimonial-pagination flex justify-center items-center gap-2 mt-8 z-30 relative h-6"></div>
            </div>
            
            <style jsx global>{`
                .swiper-bullet-custom {
                    width: 8px;
                    height: 8px;
                    background-color: #CBD5E1;
                    border-radius: 50%;
                    display: inline-block;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .swiper-bullet-custom-active {
                    background-color: #E91E63;
                    width: 24px;
                    border-radius: 8px;
                }
            `}</style>
        </section>
    );
}
