"use client";

import Image from "next/image";
import Link from "next/link";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
    Heart, BookOpen, Users, Sun, Sparkles, Shield, Star,
    GraduationCap, ArrowRight, Home, ChevronRight, Eye,
    Lightbulb, HandHeart, Award, Crown, Flame, Rocket,
    TreePine, Globe, Brain, Puzzle, Palette, Music,
    Droplets, Monitor, FlaskConical, Baby, Flower2,
    Languages, Castle, Tent, Target, Compass, Gem,
    Megaphone, Check, Shapes, Glasses, Footprints,
} from "lucide-react";
import type { Easing } from "framer-motion";

const ease: Easing = [0.25, 0.1, 0.25, 1];
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease } }),
};
const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};
const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const WavyDivider = ({ fill = "white", darkFill = "dark:fill-slate-900", flip = false }: { fill?: string; darkFill?: string; flip?: boolean }) => (
    <div className={`absolute ${flip ? "top-0 rotate-180" : "bottom-0"} left-0 w-full overflow-hidden leading-none z-10`}>
        <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto">
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill={fill} className={darkFill} />
        </svg>
    </div>
);

/* ══════════════════════════════════════════════
   FEATURES PAGE
   ══════════════════════════════════════════════ */
export default function FeaturesPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 font-body selection:bg-secondary selection:text-white relative overflow-hidden transition-colors duration-300">

            {/* ── Header ── */}
            <div className="w-full relative z-50">
                <Navbar />
            </div>

            {/* ══════════════════════════════════
                SECTION 1: Hero Banner
               ══════════════════════════════════ */}
            <section className="relative w-full h-[420px] sm:h-[480px] md:h-[560px] lg:h-[600px] overflow-hidden z-0 bg-white dark:bg-slate-900">
                
                {/* Background — hero-section-bg.png (blue sky + cityscape + clouds) */}
                <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[#1ba8e5]">
                    <Image
                        src="/images/assets/images/hero-section-bg.png"
                        alt="Blue sky background with cityscape"
                        fill
                        className="object-cover object-bottom"
                        priority
                        sizes="100vw"
                    />
                    
                    {/* Cloud Shape Divider at the bottom of the blue section */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
                        <svg className="w-full h-[30px] md:h-[45px] lg:h-[60px]" preserveAspectRatio="none" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0,100 L0,40 Q60,-20 120,40 Q180,-20 240,40 Q300,-20 360,40 Q420,-20 480,40 Q540,-20 600,40 Q660,-20 720,40 Q780,-20 840,40 Q900,-20 960,40 Q1020,-20 1080,40 Q1140,-20 1200,40 Q1260,-20 1320,40 Q1380,-20 1440,40 L1440,100 Z" fill="currentColor" className="text-white dark:text-slate-900" />
                        </svg>
                    </div>
                </div>

                {/* ===== Floating 3D Objects ===== */}
                <div className="absolute inset-0 w-full h-full max-w-[1440px] mx-auto pointer-events-none z-10">
                    <div className="absolute top-[35%] xl:top-[28%] left-[2%] xl:left-[6%] hidden md:block" style={{ transform: 'rotate(-5deg)' }}>
                        <Image src="/images/assets/3d-elements/3d-airplane.png" alt="" width={160} height={110} className="object-contain drop-shadow-lg w-[120px] lg:w-[150px]" />
                    </div>
                    <div className="absolute top-[25%] xl:top-[18%] right-[2%] xl:right-[6%] hidden md:block">
                        <Image src="/images/assets/3d-elements/3d-sun.png" alt="" width={220} height={220} className="object-contain drop-shadow-md w-[160px] lg:w-[210px]" />
                    </div>
                    <div className="absolute top-[55%] xl:top-[42%] left-[4%] xl:left-[8%] hidden md:block">
                        <Image src="/images/assets/3d-elements/3d-cloud.png" alt="" width={200} height={120} className="object-contain opacity-95 w-[140px] lg:w-[190px]" />
                    </div>
                    <div className="absolute top-[50%] xl:top-[38%] right-[1%] xl:right-[4%] hidden md:block" style={{ transform: 'scaleX(-1)' }}>
                        <Image src="/images/assets/3d-elements/3d-cloud.png" alt="" width={220} height={130} className="object-contain opacity-95 w-[160px] lg:w-[200px]" />
                    </div>
                    <div className="absolute bottom-0 lg:bottom-0 right-[8%] xl:right-[15%] z-40 hidden md:block">
                        <Image src="/images/assets/3d-elements/3d-kid.png" alt="Happy student" width={180} height={250} className="object-contain drop-shadow-lg w-[140px] lg:w-[200px]" />
                    </div>
                </div>

                {/* ===== Main Content Area ===== */}
                <div className="absolute top-[38%] sm:top-[33%] md:top-[30%] left-1/2 -translate-x-1/2 w-full z-20 flex flex-col items-center px-4 max-w-[1140px]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-center"
                    >
                        {/* Breadcrumb */}
                        <div className="flex items-center justify-center gap-2 mb-6 font-body text-sm bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full w-fit mx-auto border border-white/30 text-white">
                            <Link href="/" className="hover:text-yellow-300 transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="font-semibold text-yellow-300">Features</span>
                        </div>

                        {/* Heading */}
                        <h1 className="font-heading font-extrabold text-white text-3xl md:text-5xl lg:text-[52px] max-w-5xl mx-auto leading-[1.1] mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                            Experience the Joy of Learning <br className="hidden md:block" /> at ZeeQue Preschool
                        </h1>

                        {/* Description */}
                        <p className="font-body font-medium text-white text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] bg-black/10 px-6 py-3 rounded-2xl backdrop-blur-[2px]">
                            Our state-of-the-art facilities and carefully designed features provide a safe, engaging, and nurturing environment for your child's early education.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 2: Quran, Tradition & Culture
               ══════════════════════════════════ */}
            <section className="py-10 md:py-14 lg:py-18 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 right-[5%] text-8xl opacity-[0.04] hidden lg:block text-[#0fb85c]">Quran</div>
                    <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full border-4 border-dashed border-[#0fb85c]/10 hidden xl:block" />
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} className="w-full lg:w-1/2">
                            
                            <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-6">
                                Quran, Tradition & <span className="text-[#0fb85c]">Culture</span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed mb-6">
                                At the very heart of Zeeque Preschool lies the beautiful integration of Quranic wisdom with modern education. We believe in illuminating young hearts from the very beginning, helping children develop a deep connection with their faith through child-friendly approaches.
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    { text: "Children are trained to recite the Holy Quran and memorize at least 1 Juz' within 3 years" },
                                    { text: "Daily Adhkar (supplications) and remembrances woven into everyday routines" },
                                    { text: "Traditional Islamic values and folklore are integral parts of the curriculum" },
                                    { text: "Festival celebrations and Islamic heritage events throughout the year" },
                                    { text: "Character formation rooted in compassion, respect, and excellence from age 3 to 6" },
                                ].map((item) => (
                                    <div key={item.text} className="flex items-start gap-3 bg-[#0fb85c]/5 dark:bg-slate-800 rounded-2xl p-4 border border-[#0fb85c]/10 dark:border-slate-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#0fb85c] mt-2 flex-shrink-0" />
                                        <p className="text-gray-600 dark:text-gray-300 font-body text-[15px] leading-relaxed">{item.text}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gradient-to-r from-[#0fb85c]/10 to-[#fbaf01]/10 dark:from-[#0fb85c]/20 dark:to-[#fbaf01]/20 rounded-2xl p-5 border border-[#0fb85c]/15">
                                <p className="font-heading font-bold text-[#222] dark:text-white text-sm mb-1 flex items-center gap-2">Our Motto</p>
                                <p className="text-gray-600 dark:text-gray-300 font-body text-sm italic">&ldquo;One Who Is Illumined At The Beginning Is Illumined At The End&rdquo; — Ibn Athaillah</p>
                            </div>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} className="w-full lg:w-1/2 relative">
                            {/* Decorative ring */}
                            <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full border-4 border-dashed border-[#0fb85c]/15 pointer-events-none hidden sm:block" />
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-[#fbaf01]/10 blur-xl pointer-events-none" />

                            {/* Main mosaic grid */}
                            <div className="grid grid-cols-12 grid-rows-6 gap-3 h-[520px]">
                                {/* Large primary image — spans left 7 cols, top 4 rows */}
                                <div className="col-span-7 row-span-4 relative rounded-[28px] overflow-hidden shadow-xl group">
                                    <Image src="https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=600&auto=format&fit=crop" alt="Children learning Islamic traditions and Quran recitation at ZeeQue Preschool in Kerala." fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <p className="font-heading font-bold text-[#222] dark:text-white text-xs">Quran Recitation & Memorization</p>
                                    </div>
                                </div>

                                {/* Right tall image — spans right 5 cols, all 6 rows */}
                                <div className="col-span-5 row-span-6 relative rounded-[28px] overflow-hidden shadow-xl group">
                                    <Image src="/images/gallery/gallery photos/IMG_5284.JPG" alt="Kids reading together and sharing traditional Islamic values at ZeeQue Preschool in Kerala." fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 30vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>

                                {/* Bottom-left wide image — spans left 7 cols, bottom 2 rows */}
                                <div className="col-span-7 row-span-2 relative rounded-[28px] overflow-hidden shadow-xl group">
                                    <Image src="/images/gallery/gallery photos/IMG_6290 - Copy.JPG" alt="Students engaged in cultural learning activities at ZeeQue Preschool in Kerala." fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                            </div>

                            {/* Floating badge — bottom center */}
                            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#0fb85c] text-white rounded-2xl px-6 py-3 shadow-xl z-20 flex items-center gap-3">
                                <BookOpen className="w-5 h-5" />
                                <span className="font-heading font-bold text-sm">1 Juz&apos; in 3 Years</span>
                            </div>

                            {/* Floating stat badge — top right */}
                            <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg z-20 hidden sm:block border border-white/50 dark:border-slate-700/50">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-[#0fb85c]/10 flex items-center justify-center">
                                        <Heart className="w-4 h-4 text-[#0fb85c]" />
                                    </div>
                                    <div>
                                        <div className="font-heading font-extrabold text-[#222] dark:text-white text-sm leading-none">Daily</div>
                                        <div className="text-gray-500 dark:text-gray-400 text-[10px] font-body">Adhkar & Duas</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <WavyDivider fill="#fffcf2" darkFill="dark:fill-slate-950" />
            </section>

            {/* ══════════════════════════════════
                SECTION 3: Language Foundation
               ══════════════════════════════════ */}
            <section className="py-12 lg:py-18 bg-[#fffcf2] dark:bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    {/* Centered Section Header */}
                    <div className="text-center mb-16 relative z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            
                            <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
                                Solid Foundation in <span className="text-[#3FB7E5]">Language</span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                                We believe <strong className="text-[#222] dark:text-white">&ldquo;the limit of language means the limit of the world.&rdquo;</strong> That&apos;s why Zeeque Preschool children are trained in three languages from the earliest age, opening doors to vast cultural and intellectual worlds.
                            </p>
                        </motion.div>
                    </div>

                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} className="w-full lg:w-1/2">

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                                {[
                                    { lang: "Arabic", desc: "Reading, writing & speaking", color: "#0fb85c" },
                                    { lang: "English", desc: "Communication & literacy", color: "#3FB7E5" },
                                    { lang: "Malayalam", desc: "Mother tongue fluency", color: "#e83e8c" },
                                ].map((l) => (
                                    <div key={l.lang} className="bg-white dark:bg-slate-800 rounded-2xl p-5 border-2 border-gray-100 dark:border-slate-700 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                                        <h4 className="font-heading font-bold text-[#222] dark:text-white text-lg mb-1">{l.lang}</h4>
                                        <p className="text-gray-500 dark:text-gray-400 font-body text-xs">{l.desc}</p>
                                        <div className="w-8 h-1 rounded-full mx-auto mt-3" style={{ backgroundColor: l.color }} />
                                    </div>
                                ))}
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 font-body text-[15px] leading-relaxed">
                                Through immersive storytelling, rhyme sessions, and interactive conversations, children naturally develop strong language skills. Our trained mentors ensure each child progresses confidently in all three languages by the time they graduate from Zeeque Preschool.
                            </p>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} className="w-full lg:w-1/2 relative">
                            <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700">
                                <Image src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=800&auto=format&fit=crop" alt="Children having fun while developing multilingual skills at ZeeQue Preschool in Kerala." fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#3FB7E5]/30 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                                    <p className="font-heading font-bold text-[#222] dark:text-white text-sm text-center">&ldquo;The limit of language is the limit of the world&rdquo;</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <WavyDivider fill="white" darkFill="dark:fill-slate-900" />
            </section>

            {/* ══════════════════════════════════
                SECTION 4: Character Building
               ══════════════════════════════════ */}
            <section className="py-16 lg:py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
                {/* Background Decorative Blobs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ x: [0, 50, 0], y: [0, 30, 0], rotate: [0, 10, 0] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-[10%] -left-[5%] w-[400px] h-[400px] bg-[#e83e8c]/5 rounded-full blur-[100px]"
                    />
                    <motion.div
                        animate={{ x: [0, -40, 0], y: [0, 50, 0], rotate: [0, -15, 0] }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[20%] -right-[10%] w-[350px] h-[350px] bg-[#fbaf01]/5 rounded-full blur-[100px]"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.06, 0.03] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] bg-[#0fb85c]/5 rounded-full blur-[120px]"
                    />
                    <div className="absolute top-20 right-[10%] text-9xl font-heading font-black opacity-[0.03] hidden lg:block text-[#e83e8c] select-none uppercase tracking-tighter">Values</div>
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
                        
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
                            Building <span className="text-[#e83e8c]">Character</span> from Day One
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-3xl mx-auto leading-relaxed">
                            For children between 3 to 6, character formation is the most crucial developmental milestone. At Zeeque Preschool, we fuse spiritual education with practical wisdom to build children of integrity, compassion, and strength.
                        </p>
                    </motion.div>



                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
                        className="mt-12 bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl rounded-[32px] p-8 md:p-10 border border-white/50 dark:border-slate-700/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)] relative overflow-hidden group">
                        {/* Decorative background element for the responsibility card */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#e83e8c]/10 to-transparent rounded-bl-[120px] -translate-y-1/2 translate-x-1/4 blur-3xl group-hover:opacity-60 transition-opacity" />

                        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                            <div className="w-20 h-20 rounded-[24px] bg-gradient-to-br from-[#e83e8c] to-[#fbaf01] p-[1px] flex-shrink-0 group-hover:scale-105 transition-transform duration-500 shadow-lg">
                                <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[23px] flex items-center justify-center shadow-inner">
                                    <Users className="w-9 h-9 text-[#e83e8c]" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-heading font-extrabold text-[#222] dark:text-white text-2xl mb-3">Responsibility from an Early Age</h3>
                                <p className="text-gray-600 dark:text-gray-400 font-body text-[16px] leading-relaxed">
                                    Our carefully designed activities teach children a sense of responsibility, helping them understand the value of taking care of themselves, their belongings, and their community. Through daily routines, role-play, and real-world scenarios, kids learn to be dependable, organized, and thoughtful members of their world.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <WavyDivider fill="#fffcf2" darkFill="dark:fill-slate-950" />
            </section>

            {/* ══════════════════════════════════
                SECTION 5: Stress-free + Play Way (Combined)
               ══════════════════════════════════ */}
            <section className="py-12 lg:py-18 bg-[#fffcf2] dark:bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-[5%] text-8xl opacity-[0.04] hidden lg:block text-[#fbaf01]">Play</div>
                    <div className="absolute bottom-20 right-[8%] text-7xl opacity-[0.04] hidden lg:block text-[#EF4225]">Joy</div>
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
                        
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Stress-Free <span className="text-[#fbaf01]">Play Way</span> Method
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-3xl mx-auto leading-relaxed">
                            No textbooks, no pressure, no stress. At Zeeque Preschool, every child learns through fun-filled, creative, and engaging play activities at their own pace — because we believe every child is unique and deserves a joyful start.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Stress-Free Card */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}
                            className="bg-gradient-to-br from-[#EF4225]/5 to-[#e83e8c]/5 dark:from-slate-800 dark:to-slate-800 rounded-[28px] p-8 border-2 border-[#EF4225]/15 dark:border-slate-700 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-[#EF4225]/10 flex items-center justify-center mb-6">
                                <Heart className="w-8 h-8 text-[#EF4225]" />
                            </div>
                            <h3 className="font-heading font-extrabold text-[#222] dark:text-white text-2xl mb-4">Stress-Free Learning</h3>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-[16px] leading-relaxed mb-5">
                                Our classrooms are happy, pressure-free zones. Children live in an atmosphere full of joy and excitement. No boring lectures or rote memorization — we create a natural learning environment where curiosity blossoms on its own.
                            </p>
                            <ul className="space-y-2">
                                {["No formal textbook-based teaching", "Children progress at their own pace", "Joy and excitement in every activity", "Fun-filled creative daily sessions"].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-body text-sm">
                                        <Check className="w-4 h-4 text-[#EF4225] flex-shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Play Way Card */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}
                            className="bg-gradient-to-br from-[#fbaf01]/5 to-[#0fb85c]/5 dark:from-slate-800 dark:to-slate-800 rounded-[28px] p-8 border-2 border-[#fbaf01]/15 dark:border-slate-700 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-[#fbaf01]/10 flex items-center justify-center mb-6">
                                <Monitor className="w-8 h-8 text-[#fbaf01]" />
                            </div>
                            <h3 className="font-heading font-extrabold text-[#222] dark:text-white text-2xl mb-4">Theme-Based Play Way</h3>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-[16px] leading-relaxed mb-5">
                                At Zeeque Preschool, children learn and acquire all the necessary life skills through play. Our theme-based approach ensures each week brings new exciting worlds to explore — from animals to space, seasons to professions.
                            </p>
                            <ul className="space-y-2">
                                {["Theme-based weekly learning plans", "Life skills through structured play", "Age-appropriate activities for LZQ, MZQ, UZQ", "Personality development & well-being focus"].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-body text-sm">
                                        <Check className="w-4 h-4 text-[#fbaf01] flex-shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>


                </div>
                <WavyDivider fill="white" darkFill="dark:fill-slate-900" />
            </section>

            {/* ══════════════════════════════════
                SECTION 6: Mentoring + On-site Support
               ══════════════════════════════════ */}
            <section className="py-12 lg:py-18 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} className="w-full lg:w-1/2 relative">
                            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700">
                                <Image src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?q=80&w=1000&auto=format&fit=crop" alt="Dedicated mentors providing personalized care to children at ZeeQue Preschool in Kerala." fill className="object-cover" />
                            </div>
                            <div className="absolute -bottom-5 -right-3 bg-[#e83e8c] text-white rounded-2xl px-5 py-3 shadow-xl z-20 flex items-center gap-2">
                                <Users className="w-5 h-5" />
                                <div>
                                    <div className="font-heading font-extrabold text-xl">3:1</div>
                                    <div className="text-white/80 text-xs font-body">Mentor Ratio</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} className="w-full lg:w-1/2">
                            
                            <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-6">
                                Individual <span className="text-[#e83e8c]">Mentoring</span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed mb-6">
                                Every classroom at Zeeque Preschool has <strong className="text-[#222] dark:text-white">three dedicated mentors</strong> to ensure every child receives individual care, attention, and love. No child is ever left behind — each one is seen, heard, and nurtured.
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    { icon: Users, title: "3 Mentors Per Classroom", desc: "Ensuring personalized care for every child with an optimal mentor-to-child ratio.", color: "#e83e8c" },
                                    { icon: Eye, title: "On-Site Academic Executives", desc: "Specially trained executives provide timely support and constantly monitor classroom processes.", color: "#3FB7E5" },
                                    { icon: Megaphone, title: "Continuous Teacher Training", desc: "Regular workshops and skill development ensure our mentors stay at the forefront of early education.", color: "#0fb85c" },
                                    { icon: Target, title: "Individual Learning Plans", desc: "Each child's progress is tracked and nurtured through personalized developmental milestones.", color: "#fbaf01" },
                                ].map((item) => (
                                    <div key={item.title} className="flex items-start gap-4 group bg-gray-50 dark:bg-slate-800 rounded-2xl p-4 border border-gray-100 dark:border-slate-700 hover:shadow-md transition-all duration-300">
                                        <div className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm" style={{ background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)` }}>
                                            <item.icon className="w-5 h-5" style={{ color: item.color }} />
                                        </div>
                                        <div>
                                            <h4 className="font-heading font-bold text-[#222] dark:text-white text-[15px] mb-0.5">{item.title}</h4>
                                            <p className="text-gray-500 dark:text-gray-400 font-body text-[13px] leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>




            {/* ══════════════════════════════════
                SECTION 9: R&D
               ══════════════════════════════════ */}
            <section className="py-12 lg:py-18 bg-[#fffcf2] dark:bg-slate-950 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} className="w-full lg:w-1/2">
                            
                            <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-6">
                                Research & <span className="text-[#EF4225]">Development</span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed mb-5">
                                ZeeQue has a dedicated <strong className="text-[#222] dark:text-white">Research and Development wing</strong> at its Head Office that makes us unique. Our R&D team continuously studies child development and education trends to ensure our curriculum remains cutting-edge.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-[16px] leading-relaxed mb-6">
                                The exclusive <strong className="text-[#EF4225]">ZeeQue Curriculum</strong> — the result of extensive research and studies — is constantly updated to incorporate the latest in ECCE techniques, child psychology, and multi-sensory learning approaches.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { title: "Curriculum R&D", desc: "Continuous testing & refinement" },
                                    { title: "Teacher Training", desc: "Research-backed pedagogy" },
                                    { title: "Child Studies", desc: "Developmental psychology" },
                                    { title: "Innovation Lab", desc: "New teaching methods" },
                                ].map((r) => (
                                    <div key={r.title} className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-gray-100 dark:border-slate-700 hover:shadow-md transition-all duration-300">
                                        <h4 className="font-heading font-bold text-[#222] dark:text-white text-[15px] mb-1">{r.title}</h4>
                                        <p className="text-gray-500 dark:text-gray-400 font-body text-xs">{r.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} className="w-full lg:w-1/2 relative">
                            <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700">
                                <Image src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop" alt="Educational experts researching cutting-edge early childhood methods for the ZeeQue Curriculum in Kerala." fill className="object-cover" />
                            </div>
                            <div className="absolute -bottom-5 -right-3 bg-[#EF4225] text-white rounded-2xl px-5 py-3 shadow-xl z-20 flex items-center gap-2">
                                <FlaskConical className="w-5 h-5" />
                                <span className="font-heading font-bold text-sm">Exclusive Curriculum</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 11: CTA
               ══════════════════════════════════ */}
            <section className="py-12 lg:py-18 bg-gradient-to-b from-[#fffcf2] to-white dark:from-slate-950 dark:to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-10 w-24 h-24 rounded-full border-4 border-dashed border-[#fbaf01]/15 hidden lg:block" />
                    <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-[#0fb85c]/5 hidden lg:block" />
                </div>

                <div className="max-w-[800px] mx-auto px-4 xl:px-8 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                        <div className="w-20 h-20 rounded-2xl bg-white/20 dark:bg-slate-800/40 backdrop-blur-md flex items-center justify-center mx-auto mb-8 shadow-xl border border-white/20">
                            <GraduationCap className="w-10 h-10 text-primary" />
                        </div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Ready to Experience <span className="text-primary">ZeeQue</span>?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-xl mx-auto leading-relaxed mb-10">
                            Give your child the best possible start with our proven ECCE program. Visit your nearest ZeeQue center or enroll online today!
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0">
                            <Link href="https://admission.zeeque.in/" className="flex items-center justify-center gap-2 bg-[#FFCB05] text-[#222] px-9 py-3.5 rounded-full font-heading font-bold text-base shadow-[4px_4px_0_0_#0060D6] hover:shadow-[2px_2px_0_0_#0060D6] hover:translate-y-[2px] hover:translate-x-[2px] transition-all whitespace-nowrap w-full sm:w-auto relative overflow-hidden group">
                                {/* Shimmer effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                                <span className="relative z-10">Enquiry Now</span>
                                <ArrowRight className="w-4 h-4 stroke-[2.5] relative z-10" />
                            </Link>
                            <Link href="/about-zeeque-preschool-kerala" className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-[#222] dark:text-white px-10 py-4 rounded-2xl font-heading font-bold text-lg border-2 border-gray-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-all whitespace-nowrap w-full sm:w-auto">
                                About Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
