"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Heart, Brain, Palette, Activity } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const features = [
    {
        title: "Nurturing Everything with Care",
        description: "We create a caring environment where children feel safe, loved and valued every single day.",
        image: "/images/gallery/actiivites/659cf71996662425490851jpeg.jpg",
        colorClass: "bg-[#E9F7E8]",
        blobColor: "bg-[#D8F1D6]",
        iconBg: "bg-[#4CAF50]",
        icon: <Heart className="w-8 h-8 text-white" strokeWidth={2.5} />,
        borderRadius: "60% 40% 70% 30% / 40% 50% 60% 60%",
        decor: (
            <svg className="absolute top-4 right-4 text-[#4CAF50] opacity-60 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></svg>
        )
    },
    {
        title: "Stress-free Learning",
        description: "Learning feels like play here! We make education fun, engaging and completely stress-free for every child.",
        image: "/images/gallery/actiivites/659cf800960be985886235jpg.jpg",
        colorClass: "bg-[#FFF8E6]",
        blobColor: "bg-[#FFF1CA]",
        iconBg: "bg-[#FFC107]",
        icon: <Brain className="w-8 h-8 text-white" strokeWidth={2.5} />,
        borderRadius: "40% 60% 30% 70% / 50% 40% 70% 50%",
        decor: (
            <svg className="absolute top-6 right-6 text-[#FFC107] opacity-70 w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 12c4-2 6-6 6-10M4 12c4 2 6 6 6 10M4 12h16M20 12c-4-2-6-6-6-10M20 12c-4 2-6 6-6 10" strokeDasharray="3 3"/></svg>
        )
    },
    {
        title: "Creative Expression",
        description: "Art, music, storytelling and drama help children explore their imagination and express themselves with confidence.",
        image: "/images/gallery/actiivites/659cf80085693885115214jpg.jpg",
        colorClass: "bg-[#F4EBFF]",
        blobColor: "bg-[#EAD6FF]",
        iconBg: "bg-[#A16DFA]",
        icon: <Palette className="w-8 h-8 text-white" strokeWidth={2.5} />,
        borderRadius: "50% 50% 60% 40% / 60% 40% 50% 60%",
        decor: (
            <svg className="absolute top-5 right-8 text-[#A16DFA] opacity-60 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M9 18V5l12-2v13M9 9l12-2M6 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm12-2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
        )
    },
    {
        title: "Physical Development",
        description: "Through active play and motor skill activities, we help children build strength, coordination and healthy habits.",
        image: "/images/gallery/actiivites/659cf80087c4f343934456jpg.jpg",
        colorClass: "bg-[#E6F3FF]",
        blobColor: "bg-[#CDE5FF]",
        iconBg: "bg-[#3399FF]",
        icon: <Activity className="w-8 h-8 text-white" strokeWidth={2.5} />,
        borderRadius: "30% 70% 40% 60% / 50% 60% 40% 50%",
        decor: (
            <svg className="absolute top-4 right-4 text-[#3399FF] opacity-60 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
        )
    }
];

export default function OurFeatures() {
    return (
        <section className="relative bg-[#F4F9FF] pt-12 md:pt-16 pb-24 z-10">
            {/* Background SVG Decor */}
            <div className="absolute top-32 left-10 opacity-[0.05] transform -rotate-12 w-24 h-24 hidden md:block">
                <Image src="/images/assets/icons/Test.svg" alt="Test" fill className="object-contain" />
            </div>
            <div className="absolute bottom-32 left-20 opacity-[0.05] transform rotate-12 w-32 h-32 hidden md:block z-10 pointer-events-none">
                <Image src="/images/assets/icons/Teaching.svg" alt="Teaching" fill className="object-contain" />
            </div>
            <div className="absolute top-52 right-10 opacity-[0.05] transform rotate-45 w-20 h-20 hidden md:block">
                <Image src="/images/assets/icons/Geology.svg" alt="Geology" fill className="object-contain" />
            </div>
            <div className="absolute bottom-40 right-20 opacity-[0.05] transform -rotate-12 w-28 h-28 hidden md:block z-10 pointer-events-none">
                <Image src="/images/assets/icons/Trophy.svg" alt="Trophy" fill className="object-contain" />
            </div>
            <div className="absolute top-1/2 left-[20%] opacity-[0.05] transform rotate-[-20deg] w-16 h-16 hidden md:block z-10 pointer-events-none">
                <Image src="/images/assets/icons/Book pen.svg" alt="Book pen" fill className="object-contain" />
            </div>
            <div className="absolute top-1/3 right-[25%] opacity-[0.05] transform rotate-12 w-20 h-20 hidden md:block z-10 pointer-events-none">
                <Image src="/images/assets/icons/Language.svg" alt="Language" fill className="object-contain" />
            </div>

            {/* Top Cloud Divider */}
            <div className="absolute top-0 left-0 w-full leading-none z-20 -translate-y-[99.5%] pointer-events-none">
                <svg viewBox="0 0 1440 100" fill="none" className="w-full h-[50px] md:h-[100px]" preserveAspectRatio="none">
                    {/* Blue clouds pointing UP */}
                    <path d="M1440,100 L0,100 L0,80 
                        a40,40 0 0 1 80,0 
                        a60,60 0 0 1 120,0 
                        a30,30 0 0 1 60,0 
                        a70,70 0 0 1 140,0 
                        a50,50 0 0 1 100,0 
                        a40,40 0 0 1 80,0 
                        a80,80 0 0 1 160,0 
                        a40,40 0 0 1 80,0 
                        a60,60 0 0 1 120,0 
                        a35,35 0 0 1 70,0 
                        a70,70 0 0 1 140,0 
                        a50,50 0 0 1 100,0 
                        a45,45 0 0 1 90,0 
                        a50,50 0 0 1 100,0 
                        Z" fill="#F4F9FF"/>
                </svg>
            </div>

            <div className="max-w-[1300px] mx-auto px-4 xl:px-8 relative z-20">
                {/* Header Section */}
                <div className="text-center mb-16 relative">
                    <div className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full mb-6 shadow-sm border border-gray-100">
                        <span className="text-[#FFC107] text-lg leading-none">✿</span>
                        <span className="text-sm font-bold text-[#3399FF] tracking-widest uppercase">Our Features</span>
                    </div>
                    
                    <h2 className="text-[#1A2B4C] text-4xl md:text-5xl lg:text-6xl mb-6 flex flex-col md:flex-row flex-wrap justify-center items-center gap-x-4 gap-y-2">
                        <span className="font-courgette font-bold tracking-wide">We bring you the</span> 
                        <span className="relative text-[#3399FF] font-bold font-quicksand z-10">
                            finest details
                            {/* Yellow swoosh underline */}
                            <svg className="absolute -bottom-4 left-0 w-full h-5 text-[#FFC107] -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                                <path d="M5,15 Q50,0 95,15" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                            {/* Sparkles */}
                            <svg className="absolute -top-3 -right-6 w-6 h-6 text-[#FFC107]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>
                            </svg>
                            <svg className="absolute -top-1 -right-10 w-3 h-3 text-[#FFC107]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>
                            </svg>
                        </span>
                    </h2>
                    
                    <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto font-medium">
                        Everything we do is designed to nurture young minds and help them grow into confident, kind and capable individuals.
                    </p>
                </div>

                {/* Cards Carousel */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ 
                        clickable: true, 
                        el: ".features-pagination", 
                        bulletClass: "swiper-bullet-custom", 
                        bulletActiveClass: "swiper-bullet-custom-active" 
                    }}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    className="!pb-6 !overflow-visible"
                >
                    {features.map((feature, idx) => (
                        <SwiperSlide key={idx} className="h-auto">
                            <div className="bg-white rounded-[36px] p-5 h-full flex flex-col shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
                                {/* Top Image Container with Blob */}
                                <div className={`w-full aspect-[4/3.5] ${feature.colorClass} rounded-[28px] relative mb-10 flex justify-center items-center overflow-visible`}>
                                    <div 
                                        className={`w-[85%] h-[85%] ${feature.blobColor} overflow-hidden relative shadow-inner`}
                                        style={{ borderRadius: feature.borderRadius }}
                                    >
                                        <Image src={feature.image} alt={feature.title} fill className="object-cover scale-110" />
                                    </div>
                                    
                                    {/* Overlapping Icon */}
                                    <div className={`absolute -bottom-5 left-5 w-16 h-16 ${feature.iconBg} rounded-[20px] flex items-center justify-center shadow-md border-[4px] border-white`}>
                                        {feature.icon}
                                    </div>
                                    
                                    {/* Decorative floating shapes */}
                                    {feature.decor}
                                </div>
                                
                                {/* Content */}
                                <div className="flex-1 flex flex-col px-3 pb-6">
                                    <h3 className="text-[#1A2B4C] font-extrabold text-[22px] mb-3 tracking-tight leading-snug">{feature.title}</h3>
                                    <p className="text-gray-500 text-[14px] leading-relaxed mb-2 flex-1 font-medium">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="features-pagination flex justify-center items-center gap-2 mt-8 z-30 relative h-6"></div>
            </div>

            {/* Bottom Cloud Divider */}
            <div className="absolute bottom-0 left-0 w-full leading-none z-20 translate-y-[99.5%] pointer-events-none">
                <svg viewBox="0 0 1440 100" fill="none" className="w-full h-[50px] md:h-[100px]" preserveAspectRatio="none">
                    {/* Blue clouds pointing DOWN */}
                    <path d="M0,0 L0,20 
                        a40,40 0 0 0 80,0 
                        a60,60 0 0 0 120,0 
                        a30,30 0 0 0 60,0 
                        a70,70 0 0 0 140,0 
                        a50,50 0 0 0 100,0 
                        a40,40 0 0 0 80,0 
                        a80,80 0 0 0 160,0 
                        a40,40 0 0 0 80,0 
                        a60,60 0 0 0 120,0 
                        a35,35 0 0 0 70,0 
                        a70,70 0 0 0 140,0 
                        a50,50 0 0 0 100,0 
                        a45,45 0 0 0 90,0 
                        a50,50 0 0 0 100,0 
                        L1440,0 Z" fill="#F4F9FF"/>
                </svg>
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
                    background-color: #3399FF;
                    width: 24px;
                    border-radius: 8px;
                }
            `}</style>
        </section>
    );
}
