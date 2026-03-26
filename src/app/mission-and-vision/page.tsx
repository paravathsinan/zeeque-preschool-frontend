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
    Target, Lightbulb, HandHeart, Award, Compass, Gem,
    Crown, Flame, Rocket, TreePine, Globe, BookHeart,
    Brain, Puzzle, Handshake, Palette, Music,
} from "lucide-react";
import type { Easing } from "framer-motion";

const ease: Easing = [0.25, 0.1, 0.25, 1];
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease } }),
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const coreValues = [
    { icon: Heart, title: "Compassion", description: "Teaching through love; cultivating empathy, kindness, and care for every living being from the earliest years.", color: "#e83e8c" },
    { icon: Award, title: "Respect", description: "Building a culture of mutual respect where every child, parent, and educator is valued and honored.", color: "#3FB7E5" },
    { icon: Star, title: "Excellence", description: "Striving for the highest standards in early education, ensuring every child reaches their fullest potential.", color: "#fbaf01" },
    { icon: BookHeart, title: "Islamic Values", description: "Guiding future generations in accordance with Islamic principles through child-friendly mentoring and daily practice.", color: "#0fb85c" },
    { icon: Crown, title: "Confidence", description: "Empowering children to believe in themselves, develop independence, and step forward as young leaders.", color: "#EF4225" },
    { icon: Handshake, title: "Sharing & Caring", description: "Instilling the beautiful habits of sharing, caring, good manners, and a genuine sense of responsibility.", color: "#ef4225" },
];

const objectives = [
    { icon: Brain, title: "Holistic Development", description: "Integrating academic learning with spiritual wisdom for complete child development across all dimensions." },
    { icon: Puzzle, title: "Experiential Learning", description: "Creating hands-on, exploratory learning journeys where children discover knowledge through experience." },
    { icon: Sparkles, title: "Creative Expression", description: "Fostering imagination, artistic expression, and creative thinking through play-based activities." },
    { icon: Users, title: "Collaboration", description: "Building teamwork, communication, and social skills through collaborative learning and group projects." },
    { icon: Flame, title: "Lifelong Learners", description: "Laying a strong foundation that inspires children to become curious, passionate, lifelong learners." },
    { icon: Globe, title: "Multilingual Mastery", description: "Training children to communicate, read, and write in Arabic, English, and Malayalam from an early age." },
];

const islamicPillars = [
    { title: "Quran Recitation", description: "Children learn to recite the Holy Quran and memorize at least one Juz' over a 3-year period.", icon: BookOpen, color: "#0fb85c" },
    { title: "Daily Adhkar", description: "Supplications and remembrances are woven into daily routines, building a strong spiritual connection.", icon: Sun, color: "#fbaf01" },
    { title: "Traditional Values", description: "Folklore, stories, and traditional values are integral parts of the learning curriculum.", icon: Heart, color: "#e83e8c" },
    { title: "Arabic Literacy", description: "Children develop reading, writing, and speaking skills in Arabic alongside English and Malayalam.", icon: GraduationCap, color: "#3FB7E5" },
];

/* ── Wavy Divider ── */
const WavyDivider = ({ fill = "white", darkFill = "dark:fill-slate-900", flip = false }: { fill?: string; darkFill?: string; flip?: boolean }) => (
    <div className={`absolute ${flip ? "top-0 rotate-180" : "bottom-0"} left-0 w-full overflow-hidden leading-none z-10`}>
        <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto">
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill={fill} className={darkFill} />
        </svg>
    </div>
);

export default function MissionVisionPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#fffcf2] to-[#faeed1] dark:from-slate-900 dark:to-slate-950 font-body selection:bg-secondary selection:text-white relative overflow-hidden transition-colors duration-300">

            {/* ── Header ── */}
            <div className="w-full relative z-50">
                <div className="hidden lg:block w-full bg-white dark:bg-[#020618] transition-colors duration-300">
                    <TopHeader />
                </div>
                <div className="max-w-[1140px] mx-auto bg-white dark:bg-transparent rounded-b-[40px] shadow-sm border border-gray-100 dark:border-slate-800 transition-colors duration-300">
                    <Navbar />
                </div>
            </div>

            {/* ══════════════════════════════════
                SECTION 1: Hero Banner (kept as-is)
               ══════════════════════════════════ */}
            <section className="relative py-10 md:py-14 lg:py-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-8 left-[8%] w-20 h-20 rounded-full bg-[#0fb85c]/10 animate-pulse" />
                    <div className="absolute top-24 right-[12%] w-16 h-16 rounded-full bg-[#fbaf01]/10 animate-pulse delay-500" />
                    <div className="absolute bottom-16 left-[25%] w-14 h-14 rounded-full bg-[#e83e8c]/10 animate-pulse delay-700" />
                    <div className="absolute top-1/3 right-[5%] w-28 h-28 rounded-full border-4 border-dashed border-[#3FB7E5]/10" />
                    <div className="absolute bottom-8 right-[30%]"><Star className="w-8 h-8 text-[#fbaf01]/20 fill-[#fbaf01]/10" /></div>
                </div>
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <div className="flex items-center justify-center gap-2 mb-6 font-body text-sm">
                             <Link href="/about-zeeque-preschool-kerala" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">About</Link>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                            <span className="text-primary font-semibold">Mission & Vision</span>
                        </div>
                        <h1 className="font-heading font-extrabold text-[#222222] dark:text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
                            Our Mission & Vision
                            <br className="hidden md:block" /> Nurturing Confident Muslim Learners Across Kerala
                        </h1>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.5 }} className="mt-8 inline-flex items-center gap-3 bg-white dark:bg-slate-800 border-2 border-[#fbaf01]/30 rounded-full px-6 py-3 shadow-sm">
                            <Lightbulb className="w-5 h-5 text-[#fbaf01]" />
                            <span className="font-heading font-bold text-[#222] dark:text-white text-sm italic">&ldquo;One Who Is Illumined At The Beginning Is Illumined At The End&rdquo;</span>
                        </motion.div>
                        <p className="text-gray-400 dark:text-gray-500 text-xs mt-2 font-body">— Ibn Athaillah, 13th-century Alexandrian Philosopher</p>
                    </motion.div>
                </div>
                <WavyDivider />
            </section>

            {/* ══════════════════════════════════
                SECTION 2: Mission & Vision — Big Side-by-Side
               ══════════════════════════════════ */}
            <section className="py-10 md:py-14 lg:py-18 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 right-10 w-40 h-40 rounded-full border-4 border-dashed border-[#fbaf01]/15 hidden xl:block animate-spin" style={{ animationDuration: "30s" }} />
                    <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-[#e83e8c]/5 hidden xl:block" />
                    <div className="absolute bottom-10 right-[8%] text-5xl opacity-10 hidden lg:block">⭐</div>
                    <div className="absolute top-20 left-[50%] w-3 h-3 rounded-full bg-[#0fb85c]/30" />
                    <div className="absolute bottom-32 right-[40%] w-4 h-4 rounded-full bg-[#3FB7E5]/20" />
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-4">What <span className="text-[#0fb85c]">Drives</span> Us Every Day</h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-2xl mx-auto">Our mission and vision are the heart and soul of everything we do — from the classroom to the playground.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Mission Card */}
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                            className="relative bg-gradient-to-br from-[#0fb85c]/5 via-[#0fb85c]/10 to-[#fbaf01]/5 dark:from-[#0fb85c]/10 dark:to-[#0fb85c]/5 rounded-[32px] p-8 md:p-10 border-2 border-[#0fb85c]/20 hover:border-[#0fb85c]/40 transition-all duration-500 group overflow-hidden">

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-[#0fb85c] flex items-center justify-center shadow-lg shadow-[#0fb85c]/30 group-hover:scale-110 transition-transform duration-300">
                                        <Target className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <div className="inline-flex items-center bg-[#0fb85c]/10 border border-[#0fb85c]/20 px-3 py-1 rounded-full mb-3 backdrop-blur-md shadow-sm group hover:bg-[#0fb85c]/15 transition-all duration-300">
                                            <span className="text-xs font-heading font-bold text-[#0fb85c] tracking-tight">Our Mission</span>
                                        </div>
                                        <h3 className="font-heading font-extrabold text-[#222] dark:text-white text-2xl md:text-3xl">Nurturing Growth</h3>
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 font-body text-[17px] leading-relaxed mb-5">
                                    To provide a <strong className="text-[#222] dark:text-white">safe, developmentally appropriate, and stimulating atmosphere</strong> that fosters the social, emotional, cognitive, and physical growth of every child.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 font-body text-[17px] leading-relaxed mb-6">
                                    We nurture an engaging early learning environment that supports <strong className="text-[#0fb85c]">diverse needs of children and families</strong>, laying a strong foundation for children to become confident, lifelong learners.
                                </p>

                                <div className="bg-white/60 dark:bg-slate-800/60 rounded-2xl p-5 border border-[#0fb85c]/10 mb-6">
                                    <h4 className="font-heading font-bold text-[#222] dark:text-white text-sm mb-3 flex items-center gap-2">✅ Mission Pillars</h4>
                                    <ul className="space-y-2 text-gray-500 dark:text-gray-400 font-body text-sm">
                                        <li className="flex items-start gap-2"><span className="text-[#0fb85c] mt-0.5">•</span> Create a healthy, safe & stimulating environment for every child</li>
                                        <li className="flex items-start gap-2"><span className="text-[#0fb85c] mt-0.5">•</span> Foster social, emotional, cognitive & physical growth through play</li>
                                        <li className="flex items-start gap-2"><span className="text-[#0fb85c] mt-0.5">•</span> Support diverse family needs with inclusive and flexible programs</li>
                                        <li className="flex items-start gap-2"><span className="text-[#0fb85c] mt-0.5">•</span> Lay foundations for confident, curious, lifelong learners</li>
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {["Safe", "Growth", "Learning", "Inclusive"].map((tag) => (
                                        <span key={tag} className="bg-[#0fb85c]/5 text-[#0fb85c] font-heading font-bold text-sm px-4 py-2 rounded-full border border-[#0fb85c]/20 backdrop-blur-md shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Vision Card */}
                        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}
                            className="relative bg-gradient-to-br from-[#3FB7E5]/5 via-[#3FB7E5]/10 to-[#e83e8c]/5 dark:from-[#3FB7E5]/10 dark:to-[#3FB7E5]/5 rounded-[32px] p-8 md:p-10 border-2 border-[#3FB7E5]/20 hover:border-[#3FB7E5]/40 transition-all duration-500 group overflow-hidden">

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-[#3FB7E5] flex items-center justify-center shadow-lg shadow-[#3FB7E5]/30 group-hover:scale-110 transition-transform duration-300">
                                        <Eye className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <div className="inline-flex items-center bg-[#3FB7E5]/10 border border-[#3FB7E5]/20 px-3 py-1 rounded-full mb-3 backdrop-blur-md shadow-sm group hover:bg-[#3FB7E5]/15 transition-all duration-300">
                                            <span className="text-xs font-heading font-bold text-[#3FB7E5] tracking-tight">Our Vision</span>
                                        </div>
                                        <h3 className="font-heading font-extrabold text-[#222] dark:text-white text-2xl md:text-3xl">Bright Futures</h3>
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 font-body text-[17px] leading-relaxed mb-5">
                                    To nurture young minds in a <strong className="text-[#222] dark:text-white">blissful environment</strong> where they discover togetherness, develop a genuine love for learning, and absorb timeless values.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 font-body text-[17px] leading-relaxed mb-6">
                                    We envision every child embodying values of <strong className="text-[#3FB7E5]">compassion, respect, and excellence</strong> — growing into thoughtful individuals who positively impact their communities.
                                </p>

                                <div className="bg-white/60 dark:bg-slate-800/60 rounded-2xl p-5 border border-[#3FB7E5]/10 mb-6">
                                    <h4 className="font-heading font-bold text-[#222] dark:text-white text-sm mb-3 flex items-center gap-2">Vision Goals</h4>
                                    <ul className="space-y-2 text-gray-500 dark:text-gray-400 font-body text-sm">
                                        <li className="flex items-start gap-2"><span className="text-[#3FB7E5] mt-0.5">•</span> Build a joyful community of young, values-driven learners</li>
                                        <li className="flex items-start gap-2"><span className="text-[#3FB7E5] mt-0.5">•</span> Inspire a generation rooted in compassion, respect & excellence</li>
                                        <li className="flex items-start gap-2"><span className="text-[#3FB7E5] mt-0.5">•</span> Create confident individuals who shape positive change</li>
                                        <li className="flex items-start gap-2"><span className="text-[#3FB7E5] mt-0.5">•</span> Blend Islamic wisdom with modern educational excellence</li>
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {["Togetherness", "Learning", "Values", "Impact"].map((tag) => (
                                        <span key={tag} className="bg-[#3FB7E5]/5 text-[#3FB7E5] font-heading font-bold text-sm px-4 py-2 rounded-full border border-[#3FB7E5]/20 backdrop-blur-md shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <WavyDivider fill="#fffcf2" darkFill="dark:fill-slate-950" />
            </section>


            {/* ══════════════════════════════════
                SECTION 4: Core Values — Colorful Grid
               ══════════════════════════════════ */}
            <section className="py-12 lg:py-16 bg-[#fffcf2] dark:bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full border-4 border-dashed border-[#e83e8c]/10 hidden xl:block" />
                    <div className="absolute bottom-20 left-[10%] w-16 h-16 rounded-full bg-[#fbaf01]/5 animate-pulse hidden lg:block" />
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
                        <div className="inline-flex items-center bg-[#e83e8c]/10 border border-[#e83e8c]/20 px-4 py-2 rounded-full mb-6 backdrop-blur-md shadow-sm group hover:bg-[#e83e8c]/15 transition-all duration-300 mx-auto w-fit">
                            <span className="text-sm font-heading font-bold text-[#e83e8c] tracking-tight">What We Stand For</span>
                        </div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Our Core <span className="text-[#e83e8c]">Values</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-2xl mx-auto leading-relaxed">
                            Our curriculum instills timeless values that shape children into compassionate, respectful, and confident members of society. Each value is lived and practiced daily in our classrooms.
                        </p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreValues.map((v, i) => (
                            <motion.div key={v.title} custom={i} variants={fadeUp}
                                className="relative group h-full">
                                {/* Card Background with Glassmorphism */}
                                <div className="absolute inset-0 bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl rounded-[32px] border border-white/60 dark:border-slate-700/50 shadow-[0_8px_32px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)] group-hover:-translate-y-2 group-hover:scale-[1.02]" />

                                {/* Inner Content */}
                                <div className="relative p-8 flex flex-col items-center text-center h-full">
                                    {/* Glowing Icon Orb */}
                                    <div className="relative mb-8 pt-2">
                                        <motion.div
                                            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                            className="w-20 h-20 rounded-[24px] flex items-center justify-center relative z-10 shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                                            style={{ background: `linear-gradient(135deg, ${v.color}, ${v.color}cc)` }}
                                        >
                                            <v.icon className="w-9 h-9 text-white drop-shadow-md" />
                                        </motion.div>
                                        {/* Background Glow */}
                                        <div
                                            className="absolute inset-0 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 scale-125"
                                            style={{ backgroundColor: v.color }}
                                        />
                                    </div>

                                    <h3 className="font-heading font-extrabold text-[#222] dark:text-white text-2xl mb-4 group-hover:text-primary transition-colors">
                                        {v.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 font-body text-[16px] leading-relaxed mb-4">
                                        {v.description}
                                    </p>

                                    {/* Subtle Bottom Accent */}
                                    <div className="mt-auto w-12 h-1.5 rounded-full opacity-30 group-hover:opacity-100 group-hover:w-20 transition-all duration-500" style={{ backgroundColor: v.color }} />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <WavyDivider fill="white" darkFill="dark:fill-slate-900" />
            </section>

            {/* ══════════════════════════════════
                SECTION 5: Islamic Foundation — Image + Content
               ══════════════════════════════════ */}
            <section className="py-12 lg:py-16 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute bottom-20 right-[8%] w-32 h-32 rounded-full border-4 border-dashed border-[#0fb85c]/10 hidden xl:block" />
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="inline-flex items-center bg-[#0fb85c]/10 border border-[#0fb85c]/20 px-4 py-2 rounded-full mb-6 backdrop-blur-md shadow-sm group hover:bg-[#0fb85c]/15 transition-all duration-300 w-fit">
                                <span className="text-sm font-heading font-bold text-[#0fb85c] tracking-tight">Spiritual Foundation</span>
                            </div>
                            <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-6">
                                Rooted in <span className="text-[#0fb85c]">Islamic Values</span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed mb-8">
                                A core principle of Zeeque Preschool is to help future generations shape their lives in accordance with Islamic values through child-friendly mentoring. Our curriculum integrates spiritual wisdom with academic excellence.
                            </p>

                            <div className="space-y-4">
                                {islamicPillars.map((item) => (
                                    <div key={item.title} className="flex items-start gap-4 group bg-gray-50 dark:bg-slate-800 rounded-2xl p-5 border border-gray-100 dark:border-slate-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                                        <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm" style={{ background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)` }}>
                                            <item.icon className="w-6 h-6" style={{ color: item.color }} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-heading font-bold text-[#222] dark:text-white text-[17px] mb-1">{item.title}</h3>
                                            <p className="text-gray-500 dark:text-gray-400 font-body text-[14px] leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full lg:w-1/2 relative">
                            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700">
                                <Image
                                    src="/images/side-visuals/spiritual-foundation.png"
                                    alt="Young students learning Islamic values and foundations at Zeeque Preschool in Kerala."
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0fb85c]/40 to-transparent" />

                            </div>

                            <div className="absolute -bottom-5 -left-5 bg-[#0fb85c] text-white rounded-2xl px-6 py-4 shadow-xl z-20 hidden sm:flex items-center gap-3">
                                <BookOpen className="w-6 h-6" />
                                <div>
                                    <div className="font-heading font-extrabold text-xl">1 Juz&apos;</div>
                                    <div className="text-white/80 text-xs font-body">Quran in 3 years</div>
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border-4 border-dashed border-[#fbaf01]/30 pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
                <WavyDivider fill="#fffcf2" darkFill="dark:fill-slate-950" />
            </section>

            {/* ══════════════════════════════════
                SECTION 6: Objectives — Playful Grid
               ══════════════════════════════════ */}
            <section className="py-12 lg:py-16 bg-[#fffcf2] dark:bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 right-[10%] w-20 h-20 rounded-full bg-[#EF4225]/5 animate-pulse hidden lg:block" />
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
                        <div className="inline-flex items-center bg-[#EF4225]/10 border border-[#EF4225]/20 px-4 py-2 rounded-full mb-6 backdrop-blur-md shadow-sm group hover:bg-[#EF4225]/15 transition-all duration-300 mx-auto w-fit">
                            <span className="text-sm font-heading font-bold text-[#EF4225] tracking-tight">What We Aim For</span>
                        </div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Our <span className="text-[#EF4225]">Objectives</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-3xl mx-auto leading-relaxed">
                            Every program, activity, and interaction at Zeeque Preschool is designed to achieve these key objectives — creating well-rounded, confident, and values-driven young learners.
                        </p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {objectives.map((obj, i) => {
                            const colors = ["#ef4225", "#0fb85c", "#3FB7E5", "#e83e8c", "#fbaf01", "#EF4225"];
                            const color = colors[i % colors.length];
                            return (
                                <motion.div key={obj.title} custom={i} variants={fadeUp}
                                    className="relative bg-white dark:bg-slate-800 rounded-[28px] p-7 border-2 border-gray-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden">

                                    <div className="relative z-10">
                                        <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-sm" style={{ background: `linear-gradient(135deg, ${color}20, ${color}10)` }}>
                                            <obj.icon className="w-7 h-7" style={{ color }} />
                                        </div>
                                        <h3 className="font-heading font-bold text-[#222] dark:text-white text-lg mb-2">{obj.title}</h3>
                                        <p className="text-gray-500 dark:text-gray-400 font-body text-[15px] leading-relaxed">{obj.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
                <WavyDivider fill="white" darkFill="dark:fill-slate-900" />
            </section>

            {/* ══════════════════════════════════
                SECTION 7: What Makes Us Different — Big Cards with Images
               ══════════════════════════════════ */}
            <section className="py-12 lg:py-16 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 left-[5%] w-24 h-24 rounded-full bg-[#fbaf01]/5 animate-pulse hidden lg:block" />
                    <div className="absolute bottom-20 right-[8%] w-20 h-20 rounded-full bg-[#fbaf01]/5 hidden xl:block" />
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
                        <div className="inline-flex items-center bg-[#fbaf01]/10 border border-[#fbaf01]/20 px-4 py-2 rounded-full mb-6 backdrop-blur-md shadow-sm group hover:bg-[#fbaf01]/15 transition-all duration-300 mx-auto w-fit">
                            <span className="text-sm font-heading font-bold text-[#fbaf01] tracking-tight">Why Zeeque Preschool?</span>
                        </div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            What Makes Us <span className="text-[#fbaf01]">Different</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-2xl mx-auto">More than a preschool — we&apos;re a family that nurtures every child with love, safety, and world-class education.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { icon: Shield, title: "Safe & Secure Environment", description: "Supervised single-door entry/exit, two fenced outdoor play areas with age-appropriate equipment, and trained staff ensuring your child's complete safety at all times.", color: "#ef4225", extra: "CCTV monitored • First aid trained staff • Emergency protocols" },
                            { icon: Users, title: "3 Mentors per Classroom", description: "Individual care and personalized attention with three dedicated mentors in every classroom, ensuring no child is left behind in their learning journey.", color: "#0fb85c", extra: "1:8 mentor-child ratio • Personalized learning plans" },
                            { icon: GraduationCap, title: "Research-Backed Curriculum", description: "Our exclusive, thoroughly tested and proven Zeeque Preschool Curriculum is the result of extensive research and studies in early childhood education.", color: "#3FB7E5", extra: "Certified Academic Executives • Continuous curriculum updates" },
                            { icon: HandHeart, title: "Values-Based Education", description: "Uniquely blending academic excellence with spiritual wisdom — teaching not just knowledge, but compassion, respect, sharing, and confidence.", color: "#e83e8c", extra: "Islamic values integration • Character building focus" },
                        ].map((item, i) => (
                            <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                                className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-800 rounded-[28px] p-7 border-2 border-gray-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">


                                <div className="flex items-start gap-5">
                                    <div className="w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md" style={{ background: `linear-gradient(135deg, ${item.color}25, ${item.color}10)` }}>
                                        <item.icon className="w-8 h-8" style={{ color: item.color }} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-heading font-bold text-[#222] dark:text-white text-xl mb-2">{item.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 font-body text-[15px] leading-relaxed mb-4">{item.description}</p>
                                        <div className="bg-white dark:bg-slate-700/50 rounded-xl px-4 py-2.5 border border-gray-100 dark:border-slate-600/50 shadow-sm">
                                            <p className="text-gray-500 dark:text-gray-400 font-body text-xs font-medium flex items-center gap-1.5 transition-colors group-hover:text-gray-700 dark:group-hover:text-gray-300">
                                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                                                {item.extra}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 9: Growth Pillars
               ══════════════════════════════════ */}
            <section className="py-12 lg:py-16 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 right-[10%] text-7xl opacity-[0.05] hidden lg:block">🌳</div>
                    <div className="absolute bottom-10 left-[5%] w-24 h-24 rounded-full border-4 border-dashed border-[#ef4225]/10 hidden xl:block" />
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
                        <div className="inline-flex items-center bg-[#ef4225]/10 border border-[#ef4225]/20 px-4 py-2 rounded-full mb-6 backdrop-blur-md shadow-sm group hover:bg-[#ef4225]/15 transition-all duration-300 mx-auto w-fit">
                            <span className="text-sm font-heading font-bold text-[#ef4225] tracking-tight">Developmental Focus</span>
                        </div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Pillars of <span className="text-[#ef4225]">Growth</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-2xl mx-auto leading-relaxed">Our ECCE program nurtures all dimensions of a child&apos;s development through thoughtfully designed experiences.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Social", description: "Building friendships, teamwork, and communication skills through collaborative play and group activities.", icon: Users, color: "#0fb85c", emoji: "🤝", details: ["Group projects", "Team games", "Social skills workshops"] },
                            { title: "Emotional", description: "Developing self-awareness, empathy, and emotional regulation in a loving, supportive environment.", icon: Heart, color: "#e83e8c", emoji: "💖", details: ["Empathy building", "Feelings circles", "Conflict resolution"] },
                            { title: "Cognitive", description: "Stimulating curiosity, problem-solving, and critical thinking through playful exploration.", icon: Brain, color: "#3FB7E5", emoji: "🧠", details: ["Puzzles & riddles", "Science exploration", "Creative problem-solving"] },
                            { title: "Physical", description: "Strengthening motor skills, coordination, and a love for active living through sports.", icon: TreePine, color: "#fbaf01", emoji: "💪", details: ["Outdoor play", "Yoga & exercises", "Fine motor crafts"] },
                        ].map((pillar, i) => (
                            <motion.div key={pillar.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                                className="bg-white dark:bg-slate-800 rounded-[28px] p-7 border-2 border-gray-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group text-center relative overflow-hidden">


                                <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md" style={{ background: `linear-gradient(135deg, ${pillar.color}20, ${pillar.color}10)` }}>
                                    <pillar.icon className="w-8 h-8" style={{ color: pillar.color }} />
                                </div>
                                <h3 className="font-heading font-extrabold text-[#222] dark:text-white text-xl mb-2">{pillar.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 font-body text-[14px] leading-relaxed mb-4">{pillar.description}</p>

                                <div className="bg-gray-50 dark:bg-slate-700 rounded-xl p-3 space-y-1">
                                    {pillar.details.map((d) => (
                                        <div key={d} className="text-xs font-body text-gray-400 dark:text-gray-500 flex items-center gap-1.5">
                                            <span style={{ color: pillar.color }}>✓</span> {d}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* ══════════════════════════════════
                SECTION 10: CTA
               ══════════════════════════════════ */}
            <section className="py-12 lg:py-16 bg-gradient-to-b from-[#fffcf2] to-white dark:from-slate-950 dark:to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-10 w-24 h-24 rounded-full border-4 border-dashed border-[#fbaf01]/15 hidden lg:block" />
                    <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-[#0fb85c]/5 hidden lg:block" />

                </div>

                <div className="max-w-[800px] mx-auto px-4 xl:px-8 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Be Part of Our <span className="text-primary">Journey</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-xl mx-auto leading-relaxed mb-10">
                            Give your child the gift of a nurturing, values-driven education that builds strong foundations for a lifetime of success, happiness, and purpose.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="https://admission.zeeque.in/" className="group flex items-center justify-center gap-3 px-10 py-4 rounded-2xl font-heading font-bold text-lg tracking-wide transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-white/20 dark:bg-slate-800/40 backdrop-blur-[16px] border border-white/40 dark:border-white/10 text-gray-900 dark:text-white shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.5)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:scale-[1.04] hover:-translate-y-[1px] hover:bg-white/35 dark:hover:bg-slate-800/60 hover:shadow-[0_16px_40px_rgba(255,182,6,0.3),inset_0_1px_1px_rgba(255,255,255,0.6)] active:scale-[0.98] active:opacity-90 ring-2 ring-transparent focus-visible:ring-primary/50 relative overflow-hidden">
                                {/* Subtle micro-pulse inner highlight */}
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                                <span className="relative z-10">Enquiry Now</span>
                                <ArrowRight className="w-5 h-5 stroke-[2.5] relative z-10" />
                            </Link>
                            <Link href="/about" className="flex items-center gap-2 bg-white dark:bg-slate-800 text-[#222] dark:text-white px-10 py-4 rounded-2xl font-heading font-bold text-lg border-2 border-gray-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-all">
                                Learn About Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section >

            <Footer />
        </main >
    );
}
