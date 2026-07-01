"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
    {
        title: "Digital Growth",
        description: "Solicitudin nibh sit amet commodo nulla. Amet venenatis urna cursus eget nunc.",
        icon: "/images/assets/icons/Library.svg",
        bgColor: "bg-[#FFF3CD]",
    },
    {
        title: "Trusted Surroundings",
        description: "Aliquam faucibus purus in massa tempor nec feugiat. Pharetra vel turpis nunc eget.",
        icon: "/images/assets/icons/Geology.svg",
        bgColor: "bg-[#D4EDDA]",
    },
    {
        title: "Prepared Learning Spaces",
        description: "Dapibus ultrices in iaculis nunc sed augue lacus. Tortor id aliquet lectus proin.",
        icon: "/images/assets/icons/Trophy.svg",
        bgColor: "bg-[#F8D7DA]",
    },
];

export default function WhoWeAre() {
    return (
        <section className="relative py-16 lg:py-24 overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#EAF4FF] to-white -z-10" />

            {/* Blue wavy top divider */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-[5] -translate-y-[1px]">
                <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto" preserveAspectRatio="none">
                    <path d="M0,0 C240,60 480,0 720,40 C960,60 1200,10 1440,30 L1440,0 L0,0 Z" fill="#FFFFFF"/>
                </svg>
            </div>

            {/* Floating decorations */}
            <div className="absolute top-[20%] left-[2%] z-[2] animate-float hidden lg:block">
                <Image src="/images/assets/3d-elements/3d-parachute.png" alt="" width={65} height={90} className="object-contain" />
            </div>
            <div className="absolute top-[10%] right-[3%] z-[2] animate-float-slow hidden lg:block">
                <Image src="/images/assets/3d-elements/3d-cloud.png" alt="" width={70} height={40} className="object-contain opacity-70" />
            </div>
            <div className="absolute bottom-[10%] right-[3%] z-[2] animate-float-reverse hidden lg:block" style={{ transform: 'rotate(15deg)' }}>
                <Image src="/images/assets/3d-elements/3d-cubeA.png" alt="" width={40} height={40} className="object-contain" />
            </div>
            <div className="absolute top-[40%] right-[2%] z-[2] animate-float-medium hidden lg:block" style={{ transform: 'rotate(-10deg)' }}>
                <Image src="/images/assets/3d-elements/3d-airplane.png" alt="" width={55} height={40} className="object-contain opacity-60" />
            </div>

            <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 xl:gap-20">

                {/* Left — Child Image with blue blob border */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-[45%] flex justify-center"
                >
                    <div className="relative">
                        {/* Blue wavy border behind image */}
                        <div className="absolute -inset-4 rounded-[40px] border-4 border-[#0060D6]/30" style={{ borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%' }} />
                        <div className="relative rounded-[30px] overflow-hidden shadow-2xl bg-[#EAF4FF]" style={{ borderRadius: '55% 45% 50% 50% / 45% 55% 45% 55%' }}>
                            <Image
                                src="/images/assets/3d-elements/3d-kid.png"
                                alt="Muslim student studying with laptop at ZeeQue Preschool"
                                width={350}
                                height={420}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Right — Content with features */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full lg:w-[55%]"
                >
                    <h2 className="section-heading text-3xl md:text-4xl text-[#222] mb-4">
                        Cross Disciplinary Curriculum
                    </h2>
                    <p className="text-gray-600 text-[15px] leading-relaxed mb-8 max-w-[500px]">
                        Let the child be the director, and the actor in their own story. Crafting their journey with imagination and joy.
                    </p>

                    {/* Feature Items */}
                    <div className="flex flex-col gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="flex items-start gap-4"
                            >
                                {/* Icon */}
                                <div className={`w-[60px] h-[60px] rounded-2xl ${feature.bgColor} flex items-center justify-center flex-shrink-0`}>
                                    <Image src={feature.icon} alt="" width={32} height={32} className="object-contain" />
                                </div>

                                {/* Text */}
                                <div>
                                    <h3 className="font-bold text-[18px] text-[#222] mb-1">{feature.title}</h3>
                                    <p className="text-gray-600 text-[14px] leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <Link
                        href="/about-zeeque-preschool-kerala"
                        className="inline-flex items-center justify-center bg-[#FFCB05] hover:bg-[#FFD633] text-[#222] px-10 py-3.5 rounded-full font-bold text-[16px] transition-all shadow-[4px_4px_0_0_#0060D6] hover:shadow-[2px_2px_0_0_#0060D6] hover:translate-y-[2px] hover:translate-x-[2px] border-none mt-8"
                    >
                        Know More
                    </Link>
                </motion.div>
            </div>

            {/* Blue wavy bottom divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-[5]">
                <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto" preserveAspectRatio="none">
                    <path d="M0,30 C240,0 480,60 720,30 C960,0 1200,60 1440,30 L1440,60 L0,60 Z" fill="#FFFFFF"/>
                </svg>
            </div>
        </section>
    );
}
