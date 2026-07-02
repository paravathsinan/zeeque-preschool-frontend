"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Curriculum() {
    return (
        <section className="relative pt-4 pb-24 md:pt-8 md:pb-36 bg-white z-10">
            <div className="max-w-[1100px] mx-auto px-4 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#EDF5FC] rounded-[40px] md:rounded-[50px] flex flex-col lg:flex-row items-center p-8 md:p-12 lg:p-0 overflow-hidden relative shadow-sm"
                >
                    {/* Left Side: 3D Illustration */}
                    <div className="w-full lg:w-[45%] flex justify-center items-end relative min-h-[350px] lg:min-h-[480px] pt-8 lg:pt-16 lg:pl-8">
                        <Image
                            src="/images/assets/3d-elements/3d-kid.png"
                            alt="Student learning"
                            width={550}
                            height={650}
                            className="object-contain w-full max-w-[380px] xl:max-w-[450px] h-auto drop-shadow-2xl z-10 scale-[1.02] origin-bottom"
                            priority
                        />
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-[55%] flex flex-col justify-center py-10 lg:py-12 lg:pr-12 lg:pl-6">
                        <h2 className="text-[#004B8F] text-3xl md:text-[36px] lg:text-[40px] font-bold mb-3 leading-tight">
                            Holistic Islamic Curriculum
                        </h2>
                        <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-8 font-medium">
                            A seamless blend of academic excellence and Islamic values, crafting your child's educational journey with imagination and joy.
                        </p>

                        <div className="flex flex-col gap-8">
                            {/* Feature 1 */}
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="flex items-start gap-6"
                            >
                                <div className="w-[70px] h-[70px] rounded-[22px] bg-gradient-to-b from-[#6A9CBD] to-[#457493] flex items-center justify-center text-white flex-shrink-0 shadow-[0_8px_15px_rgb(0,0,0,0.1)] border border-white/20">
                                    <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="4" y="14" width="3" height="6" rx="1" fill="white" stroke="none" />
                                        <rect x="10.5" y="10" width="3" height="10" rx="1" fill="white" stroke="none" />
                                        <rect x="17" y="6" width="3" height="14" rx="1" fill="white" stroke="none" />
                                        <path d="M2 16l6-6 4.5 4 8.5-8.5" strokeWidth="2.5" />
                                        <path d="M16 5h5v5" strokeWidth="2.5" />
                                    </svg>
                                </div>
                                <div className="flex flex-col pt-1">
                                    <h3 className="text-[#004B8F] text-xl font-bold mb-1.5">Islamic Values Integration</h3>
                                    <p className="text-gray-700 text-[15px] leading-snug font-medium">
                                        Seamlessly weaving Quran recitation, moral teachings, and character development into our daily preschool activities.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Feature 2 */}
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex items-start gap-6"
                            >
                                <div className="w-[70px] h-[70px] rounded-[22px] bg-gradient-to-b from-[#6A9CBD] to-[#457493] flex items-center justify-center text-white flex-shrink-0 shadow-[0_8px_15px_rgb(0,0,0,0.1)] border border-white/20">
                                    <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2"/>
                                        <path d="M12 19s5.5-2.5 5.5-7V6.5L12 4 6.5 6.5V12c0 4.5 5.5 7 5.5 7z" strokeWidth="1"/>
                                        <path d="M9 11.5l2 2 4-4" strokeWidth="2.5"/>
                                    </svg>
                                </div>
                                <div className="flex flex-col pt-1">
                                    <h3 className="text-[#004B8F] text-xl font-bold mb-1.5">Trilingual Education</h3>
                                    <p className="text-gray-700 text-[15px] leading-snug font-medium">
                                        Empowering children to become confident communicators by mastering Arabic, English, and Malayalam early on.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Feature 3 */}
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex items-start gap-6"
                            >
                                <div className="w-[70px] h-[70px] rounded-[22px] bg-gradient-to-b from-[#6A9CBD] to-[#457493] flex items-center justify-center text-white flex-shrink-0 shadow-[0_8px_15px_rgb(0,0,0,0.1)] border border-white/20">
                                    <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 6h5a3 3 0 0 1 3 3v11a2 2 0 0 0-2-2H4V6z" strokeWidth="2"/>
                                        <path d="M20 6h-5a3 3 0 0 0-3 3v11a2 2 0 0 1 2-2h6V6z" strokeWidth="2"/>
                                        <circle cx="12" cy="8" r="4.5" strokeWidth="2" fill="#5888A7" />
                                        <path d="M12 6v2l1.5 1.5" strokeWidth="2"/>
                                    </svg>
                                </div>
                                <div className="flex flex-col pt-1">
                                    <h3 className="text-[#004B8F] text-xl font-bold mb-1.5">Play-Based Learning</h3>
                                    <p className="text-gray-700 text-[15px] leading-snug font-medium">
                                        A stress-free environment featuring engaging theme-based activities, sensory play, and guided creative exploration.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Trees for Section Transition */}
            <div className="absolute -bottom-[10px] md:-bottom-[80px] lg:-bottom-[120px] -left-[60px] md:-left-[100px] lg:-left-[160px] z-20 pointer-events-none">
                <Image src="/images/assets/3d-elements/3d-dark-tree.png" alt="Decorative tree" width={320} height={450} className="object-contain drop-shadow-xl w-[140px] md:w-[200px] lg:w-[320px] h-auto" />
            </div>
            <div className="absolute -bottom-[10px] md:-bottom-[80px] lg:-bottom-[120px] -right-[60px] md:-right-[100px] lg:-right-[160px] z-20 pointer-events-none">
                <Image src="/images/assets/3d-elements/3d-light-tree.png" alt="Decorative tree" width={320} height={450} className="object-contain drop-shadow-xl w-[140px] md:w-[200px] lg:w-[320px] h-auto" />
            </div>
        </section>
    );
}
