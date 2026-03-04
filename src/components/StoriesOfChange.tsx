"use client";

import { motion, Variants } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Saniya Nazar",
        role: "Parent",
        avatar: "SN",
        color: "#c13088",
        text: "It's been a great opportunity for my daughter to get close to Quran. She has shown great interest in reciting Surahs. My daughter tries to recite the daily adhkars own her own. The teaching techniques are innovative and deserves appreciation. Overall, there is a remarkable improvement in the spiritual and academic side of my daughter. All thanks to the teachers for their patience and hard work.",
    },
    {
        name: "Fathima Rizwan",
        role: "Parent",
        avatar: "FR",
        color: "#0052ff",
        text: "I have seen a tremendous change in my son after joining Zeeque Preschool. His behavior, character, attitude, speech, language & spelling has improved remarkably. The teachers are very dedicated and caring. I'm truly grateful for the positive impact Zeeque Preschool has had on my child's overall development.",
    },
    {
        name: "Aysha Shareef",
        role: "Parent",
        avatar: "AS",
        color: "#0b8641",
        text: "Zeeque Preschool has been a wonderful experience for our family. My child has blossomed both academically and socially. The creative teaching methods and the warm, nurturing environment have made learning a joyful experience. We couldn't be happier with the progress our little one has made.",
    },
];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
    }),
};

export default function StoriesOfChange() {
    return (
        <section className="py-10 lg:py-16 bg-[#f5f0e8] dark:bg-slate-950 relative overflow-hidden">

            <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-14"
                >
                    <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-tight">
                        What our parents say<span className="text-[#0fb85c]">.</span>
                    </h2>
                </motion.div>

                {/* Stacked Testimonial Cards */}
                <div className="flex flex-col gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={fadeUp}
                            className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl p-8 sm:p-10 w-full relative shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Quote icon bottom-right */}
                            <div className="absolute bottom-6 right-8 opacity-30">
                                <Quote className="w-8 h-8 text-[#fbaf01]" />
                            </div>

                            {/* Avatar + Name */}
                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-heading font-bold text-lg shadow-md ring-2 ring-[#fbaf01]/30 flex-shrink-0"
                                    style={{ backgroundColor: testimonial.color }}
                                >
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-[#222] dark:text-white text-[16px] leading-tight">
                                        {testimonial.name}
                                    </h4>
                                    <span className="text-gray-500 dark:text-gray-400 font-heading text-[13px] font-medium">
                                        {testimonial.role}
                                    </span>
                                </div>
                            </div>

                            {/* Quote mark + Testimonial Text */}
                            <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote w-8 h-8 text-[#fbaf01]" aria-hidden="true"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                                <p className="text-gray-600 dark:text-gray-300 font-body text-[15px] sm:text-[16px] leading-[1.85] pl-4">
                                    {testimonial.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
