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
    { icon: Heart, title: "Compassion", description: "Teaching through love; cultivating empathy, kindness, and care for every living being from the earliest years.", color: "#e83e8c", emoji: "💗" },
    { icon: Award, title: "Respect", description: "Building a culture of mutual respect where every child, parent, and educator is valued and honored.", color: "#0052ff", emoji: "🙏" },
    { icon: Star, title: "Excellence", description: "Striving for the highest standards in early education, ensuring every child reaches their fullest potential.", color: "#fbaf01", emoji: "⭐" },
    { icon: BookHeart, title: "Islamic Values", description: "Guiding future generations in accordance with Islamic principles through child-friendly mentoring and daily practice.", color: "#0fb85c", emoji: "📖" },
    { icon: Crown, title: "Confidence", description: "Empowering children to believe in themselves, develop independence, and step forward as young leaders.", color: "#7c3aed", emoji: "👑" },
    { icon: Handshake, title: "Sharing & Caring", description: "Instilling the beautiful habits of sharing, caring, good manners, and a genuine sense of responsibility.", color: "#ef4225", emoji: "🤝" },
];

const objectives = [
    { icon: Brain, title: "Holistic Development", description: "Integrating academic learning with spiritual wisdom for complete child development across all dimensions.", emoji: "🧒" },
    { icon: Puzzle, title: "Experiential Learning", description: "Creating hands-on, exploratory learning journeys where children discover knowledge through experience.", emoji: "🧩" },
    { icon: Sparkles, title: "Creative Expression", description: "Fostering imagination, artistic expression, and creative thinking through play-based activities.", emoji: "🎨" },
    { icon: Users, title: "Collaboration", description: "Building teamwork, communication, and social skills through collaborative learning and group projects.", emoji: "👫" },
    { icon: Flame, title: "Lifelong Learners", description: "Laying a strong foundation that inspires children to become curious, passionate, lifelong learners.", emoji: "🔥" },
    { icon: Globe, title: "Multilingual Mastery", description: "Training children to communicate, read, and write in Arabic, English, and Malayalam from an early age.", emoji: "🌍" },
];

const islamicPillars = [
    { title: "Quran Recitation", description: "Children learn to recite the Holy Quran and memorize at least one Juz' over a 3-year period.", icon: BookOpen, color: "#0fb85c", emoji: "📗" },
    { title: "Daily Adhkar", description: "Supplications and remembrances are woven into daily routines, building a strong spiritual connection.", icon: Sun, color: "#fbaf01", emoji: "🌅" },
    { title: "Traditional Values", description: "Folklore, stories, and traditional values are integral parts of the learning curriculum.", icon: Heart, color: "#e83e8c", emoji: "🏡" },
    { title: "Arabic Literacy", description: "Children develop reading, writing, and speaking skills in Arabic alongside English and Malayalam.", icon: GraduationCap, color: "#0052ff", emoji: "✍️" },
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
                <div className="hidden lg:block w-full bg-white dark:bg-slate-800 border-b border-dashed border-gray-200 dark:border-slate-700 transition-colors duration-300">
                    <TopHeader />
                </div>
                <div className="max-w-[1140px] mx-auto bg-white dark:bg-slate-800 rounded-b-[40px] shadow-sm border border-gray-100 dark:border-slate-800 px-4 xl:px-8 transition-colors duration-300">
                    <Navbar />
                </div>
            </div>

            {/* ══════════════════════════════════
                SECTION 1: Hero Banner (kept as-is)
               ══════════════════════════════════ */}
            <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-8 left-[8%] w-20 h-20 rounded-full bg-[#0fb85c]/10 animate-pulse" />
                    <div className="absolute top-24 right-[12%] w-16 h-16 rounded-full bg-[#fbaf01]/10 animate-pulse delay-500" />
                    <div className="absolute bottom-16 left-[25%] w-14 h-14 rounded-full bg-[#e83e8c]/10 animate-pulse delay-700" />
                    <div className="absolute top-1/3 right-[5%] w-28 h-28 rounded-full border-4 border-dashed border-[#0052ff]/10" />
                    <div className="absolute bottom-8 right-[30%]"><Star className="w-8 h-8 text-[#fbaf01]/20 fill-[#fbaf01]/10" /></div>
                </div>
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <div className="flex items-center justify-center gap-2 mb-6 font-body text-sm">
                            <Link href="/about" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">About</Link>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                            <span className="text-primary font-semibold">Mission & Vision</span>
                        </div>
                        <h1 className="font-heading font-extrabold text-[#222222] dark:text-white text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
                            Our{" "}<span className="relative inline-block"><span className="text-[#0fb85c]">Mission</span><svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none"><path d="M2 8C40 2 80 2 100 6C120 10 160 10 198 4" stroke="#0fb85c" strokeWidth="3" strokeLinecap="round" /></svg></span>{" & "}<span className="text-[#0052ff]">Vision</span>
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">Guided by purpose, driven by love — shaping tomorrow&apos;s leaders in a nurturing environment rooted in wisdom and Islamic values.</p>
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
            <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 right-10 w-40 h-40 rounded-full border-4 border-dashed border-[#fbaf01]/15 hidden xl:block animate-spin" style={{ animationDuration: "30s" }} />
                    <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-[#e83e8c]/5 hidden xl:block" />
                    <div className="absolute top-1/3 left-[5%] text-6xl opacity-10 hidden lg:block">🌈</div>
                    <div className="absolute bottom-10 right-[8%] text-5xl opacity-10 hidden lg:block">⭐</div>
                    <div className="absolute top-20 left-[50%] w-3 h-3 rounded-full bg-[#0fb85c]/30" />
                    <div className="absolute bottom-32 right-[40%] w-4 h-4 rounded-full bg-[#0052ff]/20" />
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
                        <div className="text-5xl mb-4">🎯</div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-4">What <span className="text-[#0fb85c]">Drives</span> Us Every Day</h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-2xl mx-auto">Our mission and vision are the heart and soul of everything we do — from the classroom to the playground.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Mission Card */}
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                            className="relative bg-gradient-to-br from-[#0fb85c]/5 via-[#0fb85c]/10 to-[#fbaf01]/5 dark:from-[#0fb85c]/10 dark:to-[#0fb85c]/5 rounded-[32px] p-8 md:p-10 border-2 border-[#0fb85c]/20 hover:border-[#0fb85c]/40 transition-all duration-500 group overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 rounded-bl-[100px] bg-[#0fb85c]/5 group-hover:bg-[#0fb85c]/10 transition-colors" />
                            <div className="absolute bottom-4 right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">🌱</div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-[#0fb85c] flex items-center justify-center shadow-lg shadow-[#0fb85c]/30 group-hover:scale-110 transition-transform duration-300">
                                        <Target className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <span className="text-[#0fb85c] font-heading font-bold uppercase tracking-wider text-xs block">Our Mission</span>
                                        <h3 className="font-heading font-extrabold text-[#222] dark:text-white text-2xl md:text-3xl">Nurturing Growth 🌿</h3>
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
                                    {["🛡️ Safe", "🌱 Growth", "📚 Learning", "🤗 Inclusive"].map((tag) => (
                                        <span key={tag} className="bg-[#0fb85c]/10 text-[#0fb85c] font-heading font-bold text-xs px-4 py-2 rounded-full">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Vision Card */}
                        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}
                            className="relative bg-gradient-to-br from-[#0052ff]/5 via-[#0052ff]/10 to-[#e83e8c]/5 dark:from-[#0052ff]/10 dark:to-[#0052ff]/5 rounded-[32px] p-8 md:p-10 border-2 border-[#0052ff]/20 hover:border-[#0052ff]/40 transition-all duration-500 group overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 rounded-bl-[100px] bg-[#0052ff]/5 group-hover:bg-[#0052ff]/10 transition-colors" />
                            <div className="absolute bottom-4 right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">🔭</div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-[#0052ff] flex items-center justify-center shadow-lg shadow-[#0052ff]/30 group-hover:scale-110 transition-transform duration-300">
                                        <Eye className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <span className="text-[#0052ff] font-heading font-bold uppercase tracking-wider text-xs block">Our Vision</span>
                                        <h3 className="font-heading font-extrabold text-[#222] dark:text-white text-2xl md:text-3xl">Bright Futures 🌟</h3>
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 font-body text-[17px] leading-relaxed mb-5">
                                    To nurture young minds in a <strong className="text-[#222] dark:text-white">blissful environment</strong> where they discover togetherness, develop a genuine love for learning, and absorb timeless values.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 font-body text-[17px] leading-relaxed mb-6">
                                    We envision every child embodying values of <strong className="text-[#0052ff]">compassion, respect, and excellence</strong> — growing into thoughtful individuals who positively impact their communities.
                                </p>

                                <div className="bg-white/60 dark:bg-slate-800/60 rounded-2xl p-5 border border-[#0052ff]/10 mb-6">
                                    <h4 className="font-heading font-bold text-[#222] dark:text-white text-sm mb-3 flex items-center gap-2">🔮 Vision Goals</h4>
                                    <ul className="space-y-2 text-gray-500 dark:text-gray-400 font-body text-sm">
                                        <li className="flex items-start gap-2"><span className="text-[#0052ff] mt-0.5">•</span> Build a joyful community of young, values-driven learners</li>
                                        <li className="flex items-start gap-2"><span className="text-[#0052ff] mt-0.5">•</span> Inspire a generation rooted in compassion, respect & excellence</li>
                                        <li className="flex items-start gap-2"><span className="text-[#0052ff] mt-0.5">•</span> Create confident individuals who shape positive change</li>
                                        <li className="flex items-start gap-2"><span className="text-[#0052ff] mt-0.5">•</span> Blend Islamic wisdom with modern educational excellence</li>
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {["💛 Togetherness", "📖 Learning", "✨ Values", "🌍 Impact"].map((tag) => (
                                        <span key={tag} className="bg-[#0052ff]/10 text-[#0052ff] font-heading font-bold text-xs px-4 py-2 rounded-full">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <WavyDivider fill="#fffcf2" darkFill="dark:fill-slate-950" />
            </section>

            {/* ══════════════════════════════════
                SECTION 3: Quote Banner with Image
               ══════════════════════════════════ */}
            <section className="py-16 lg:py-24 bg-[#fffcf2] dark:bg-slate-950 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                        className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/50 dark:border-slate-700">
                        <div className="relative aspect-[21/9] md:aspect-[3/1]">
                            <Image src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1400&auto=format&fit=crop" alt="Children learning" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0fb85c]/85 via-[#0fb85c]/50 to-transparent" />
                        </div>
                        <div className="absolute inset-0 flex items-center p-8 md:p-14">
                            <div className="max-w-xl">
                                <div className="text-4xl mb-3">💡</div>
                                <blockquote className="font-heading font-extrabold text-white text-2xl md:text-3xl lg:text-4xl leading-tight mb-4">
                                    &ldquo;One Who Is Illumined At The Beginning Is Illumined At The End&rdquo;
                                </blockquote>
                                <p className="text-white/80 font-body text-base md:text-lg">— Ibn Athaillah, 13th-century Alexandrian Philosopher</p>
                                <p className="text-white/60 font-body text-sm mt-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 inline-block">This timeless wisdom forms the foundation of everything we do at Zeeque Preschool ✨</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 4: Core Values — Colorful Grid
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-[#fffcf2] dark:bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full border-4 border-dashed border-[#e83e8c]/10 hidden xl:block" />
                    <div className="absolute top-20 right-[15%] text-7xl opacity-[0.06] hidden lg:block">💎</div>
                    <div className="absolute bottom-20 left-[10%] text-6xl opacity-[0.06] hidden lg:block">🌸</div>
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-[#e83e8c]/10 text-[#e83e8c] font-heading font-bold uppercase tracking-wider text-xs px-5 py-2 rounded-full mb-4">
                            <Gem className="w-4 h-4" /> What We Stand For
                        </div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Our Core <span className="text-[#e83e8c]">Values</span> 💖
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-2xl mx-auto leading-relaxed">
                            Our curriculum instills timeless values that shape children into compassionate, respectful, and confident members of society. Each value is lived and practiced daily in our classrooms.
                        </p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coreValues.map((v, i) => (
                            <motion.div key={v.title} custom={i} variants={fadeUp}
                                className="bg-white dark:bg-slate-800 border-2 border-gray-100 dark:border-slate-700 rounded-[28px] p-7 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-[60px] opacity-[0.06] group-hover:opacity-[0.12] transition-opacity" style={{ backgroundColor: v.color }} />
                                <div className="absolute bottom-3 right-3 text-4xl opacity-10 group-hover:opacity-25 transition-opacity">{v.emoji}</div>

                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md" style={{ background: `linear-gradient(135deg, ${v.color}20, ${v.color}10)` }}>
                                    <v.icon className="w-8 h-8" style={{ color: v.color }} />
                                </div>
                                <h3 className="font-heading font-bold text-[#222] dark:text-white text-xl mb-3">{v.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 font-body text-[15px] leading-relaxed">{v.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <WavyDivider fill="white" darkFill="dark:fill-slate-900" />
            </section>

            {/* ══════════════════════════════════
                SECTION 5: Islamic Foundation — Image + Content
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-[5%] text-7xl opacity-[0.05] hidden lg:block">🕌</div>
                    <div className="absolute bottom-20 right-[8%] w-32 h-32 rounded-full border-4 border-dashed border-[#0fb85c]/10 hidden xl:block" />
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full lg:w-1/2">
                            <div className="inline-flex items-center gap-2 bg-[#0fb85c]/10 text-[#0fb85c] font-heading font-bold uppercase tracking-wider text-xs px-5 py-2 rounded-full mb-4">
                                <BookOpen className="w-4 h-4" /> Spiritual Foundation
                            </div>
                            <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-6">
                                Rooted in <span className="text-[#0fb85c]">Islamic Values</span> 🌿
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed mb-8">
                                A core principle of Zeeque Preschool is to help future generations shape their lives in accordance with Islamic values through child-friendly mentoring. Our curriculum integrates spiritual wisdom with academic excellence.
                            </p>

                            <div className="space-y-4">
                                {islamicPillars.map((item) => (
                                    <div key={item.title} className="flex items-start gap-4 group bg-gray-50 dark:bg-slate-800 rounded-2xl p-5 border border-gray-100 dark:border-slate-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                                        <div className="text-3xl">{item.emoji}</div>
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
                                <Image src="https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=800&auto=format&fit=crop" alt="Children learning" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0fb85c]/40 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                                        <p className="font-heading font-bold text-[#222] dark:text-white text-sm text-center">&ldquo;Guiding little hearts with wisdom and love&rdquo; 💚</p>
                                    </div>
                                </div>
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
            <section className="py-20 lg:py-28 bg-[#fffcf2] dark:bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 right-[10%] text-7xl opacity-[0.05] hidden lg:block">🧭</div>
                    <div className="absolute bottom-10 left-[15%] text-6xl opacity-[0.05] hidden lg:block">🚀</div>
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-[#7c3aed]/10 text-[#7c3aed] font-heading font-bold uppercase tracking-wider text-xs px-5 py-2 rounded-full mb-4">
                            <Compass className="w-4 h-4" /> What We Aim For
                        </div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Our <span className="text-[#7c3aed]">Objectives</span> 🎯
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-3xl mx-auto leading-relaxed">
                            Every program, activity, and interaction at Zeeque Preschool is designed to achieve these key objectives — creating well-rounded, confident, and values-driven young learners.
                        </p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {objectives.map((obj, i) => {
                            const colors = ["#ef4225", "#0fb85c", "#0052ff", "#e83e8c", "#fbaf01", "#7c3aed"];
                            const color = colors[i % colors.length];
                            return (
                                <motion.div key={obj.title} custom={i} variants={fadeUp}
                                    className="relative bg-white dark:bg-slate-800 rounded-[28px] p-7 border-2 border-gray-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-[60px] opacity-[0.06] group-hover:opacity-[0.12] transition-opacity" style={{ backgroundColor: color }} />
                                    <div className="absolute bottom-3 right-3 text-4xl opacity-10 group-hover:opacity-25 transition-opacity">{obj.emoji}</div>

                                    <div className="relative z-10">
                                        <div className="text-3xl mb-3">{obj.emoji}</div>
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
            <section className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 left-[5%] text-7xl opacity-[0.05] hidden lg:block">🏆</div>
                    <div className="absolute bottom-20 right-[8%] w-20 h-20 rounded-full bg-[#fbaf01]/5 hidden xl:block" />
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-[#fbaf01]/10 text-[#fbaf01] font-heading font-bold uppercase tracking-wider text-xs px-5 py-2 rounded-full mb-4">
                            <Star className="w-4 h-4 fill-[#fbaf01]" /> Why Zeeque Preschool?
                        </div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            What Makes Us <span className="text-[#fbaf01]">Different</span> ✨
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-2xl mx-auto">More than a preschool — we&apos;re a family that nurtures every child with love, safety, and world-class education.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { icon: Shield, title: "Safe & Secure Environment", description: "Supervised single-door entry/exit, two fenced outdoor play areas with age-appropriate equipment, and trained staff ensuring your child's complete safety at all times.", color: "#ef4225", emoji: "🛡️", extra: "CCTV monitored • First aid trained staff • Emergency protocols" },
                            { icon: Users, title: "3 Mentors per Classroom", description: "Individual care and personalized attention with three dedicated mentors in every classroom, ensuring no child is left behind in their learning journey.", color: "#0fb85c", emoji: "👩‍🏫", extra: "1:8 mentor-child ratio • Personalized learning plans" },
                            { icon: GraduationCap, title: "Research-Backed Curriculum", description: "Our exclusive, thoroughly tested and proven Zeeque Preschool Curriculum is the result of extensive research and studies in early childhood education.", color: "#0052ff", emoji: "📚", extra: "Certified Academic Executives • Continuous curriculum updates" },
                            { icon: HandHeart, title: "Values-Based Education", description: "Uniquely blending academic excellence with spiritual wisdom — teaching not just knowledge, but compassion, respect, sharing, and confidence.", color: "#e83e8c", emoji: "💝", extra: "Islamic values integration • Character building focus" },
                        ].map((item, i) => (
                            <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                                className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-800 rounded-[28px] p-7 border-2 border-gray-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                                <div className="absolute top-3 right-3 text-5xl opacity-10 group-hover:opacity-20 transition-opacity">{item.emoji}</div>

                                <div className="flex items-start gap-5">
                                    <div className="w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md" style={{ background: `linear-gradient(135deg, ${item.color}25, ${item.color}10)` }}>
                                        <item.icon className="w-8 h-8" style={{ color: item.color }} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-heading font-bold text-[#222] dark:text-white text-xl mb-2">{item.title}</h3>
                                        <p className="text-gray-500 dark:text-gray-400 font-body text-[15px] leading-relaxed mb-3">{item.description}</p>
                                        <div className="bg-gray-100 dark:bg-slate-700 rounded-xl px-4 py-2">
                                            <p className="text-gray-400 dark:text-gray-500 font-body text-xs">{item.extra}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 8: Journey Banner
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-24 bg-gradient-to-r from-[#0052ff] via-[#7c3aed] to-[#0fb85c] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-[10%] text-5xl opacity-20">🚀</div>
                    <div className="absolute bottom-10 right-[15%] text-4xl opacity-20">🌟</div>
                    <div className="absolute top-1/2 left-[30%] text-3xl opacity-15">✨</div>
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-white">
                        <div className="text-5xl mb-5">🚀</div>
                        <h2 className="font-heading font-extrabold text-4xl md:text-5xl leading-[1.1] mb-5">The Journey Begins with a Single Step</h2>
                        <p className="font-body text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90 mb-8">
                            At Zeeque Preschool, the first steps in a child&apos;s educational journey define their entire future. Our proven ECCE program, rooted in Islamic values and modern pedagogy, ensures every child begins with the brightest possible start.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                            {[
                                { val: "12+", label: "Years", emoji: "📅" },
                                { val: "50+", label: "Centers", emoji: "🏫" },
                                { val: "5000+", label: "Students", emoji: "👧" },
                                { val: "200+", label: "Mentors", emoji: "👩‍🏫" },
                            ].map((s) => (
                                <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 text-center border border-white/20">
                                    <div className="text-2xl mb-1">{s.emoji}</div>
                                    <div className="font-heading font-extrabold text-3xl mb-1">{s.val}</div>
                                    <div className="font-body text-sm opacity-80">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 9: Growth Pillars
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 right-[10%] text-7xl opacity-[0.05] hidden lg:block">🌳</div>
                    <div className="absolute bottom-10 left-[5%] w-24 h-24 rounded-full border-4 border-dashed border-[#ef4225]/10 hidden xl:block" />
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-[#ef4225]/10 text-[#ef4225] font-heading font-bold uppercase tracking-wider text-xs px-5 py-2 rounded-full mb-4">
                            <TreePine className="w-4 h-4" /> Developmental Focus
                        </div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Pillars of <span className="text-[#ef4225]">Growth</span> 🌱
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-2xl mx-auto leading-relaxed">Our ECCE program nurtures all dimensions of a child&apos;s development through thoughtfully designed experiences.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Social", description: "Building friendships, teamwork, and communication skills through collaborative play and group activities.", icon: Users, color: "#0fb85c", emoji: "🤝", details: ["Group projects", "Team games", "Social skills workshops"] },
                            { title: "Emotional", description: "Developing self-awareness, empathy, and emotional regulation in a loving, supportive environment.", icon: Heart, color: "#e83e8c", emoji: "💖", details: ["Empathy building", "Feelings circles", "Conflict resolution"] },
                            { title: "Cognitive", description: "Stimulating curiosity, problem-solving, and critical thinking through playful exploration.", icon: Brain, color: "#0052ff", emoji: "🧠", details: ["Puzzles & riddles", "Science exploration", "Creative problem-solving"] },
                            { title: "Physical", description: "Strengthening motor skills, coordination, and a love for active living through sports.", icon: TreePine, color: "#fbaf01", emoji: "💪", details: ["Outdoor play", "Yoga & exercises", "Fine motor crafts"] },
                        ].map((pillar, i) => (
                            <motion.div key={pillar.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                                className="bg-white dark:bg-slate-800 rounded-[28px] p-7 border-2 border-gray-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group text-center relative overflow-hidden">
                                <div className="absolute top-2 right-2 text-4xl opacity-10 group-hover:opacity-20 transition-opacity">{pillar.emoji}</div>

                                <div className="text-4xl mb-4">{pillar.emoji}</div>
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
            </section>

            {/* ══════════════════════════════════
                SECTION 10: CTA
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-gradient-to-b from-[#fffcf2] to-white dark:from-slate-950 dark:to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-10 w-24 h-24 rounded-full border-4 border-dashed border-[#fbaf01]/15 hidden lg:block" />
                    <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-[#0fb85c]/5 hidden lg:block" />
                    <div className="absolute top-20 right-[20%] text-6xl opacity-[0.06] hidden lg:block">🎓</div>
                    <div className="absolute bottom-20 left-[15%] text-5xl opacity-[0.06] hidden lg:block">🌈</div>
                </div>

                <div className="max-w-[800px] mx-auto px-4 xl:px-8 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                        <div className="text-6xl mb-6">🌟</div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Be Part of Our <span className="text-primary">Journey</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-xl mx-auto leading-relaxed mb-10">
                            Give your child the gift of a nurturing, values-driven education that builds strong foundations for a lifetime of success, happiness, and purpose.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/enroll" className="flex items-center gap-2 bg-[#ffb606] text-white px-10 py-4 rounded-2xl font-heading font-bold text-lg hover:bg-[#ffa000] shadow-[4px_4px_0_0_#ef4225] hover:shadow-[2px_2px_0_0_#ef4225] hover:translate-y-[2px] hover:translate-x-[2px] transition-all">
                                Enroll Now 🎉
                                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                            </Link>
                            <Link href="/about" className="flex items-center gap-2 bg-white dark:bg-slate-800 text-[#222] dark:text-white px-10 py-4 rounded-2xl font-heading font-bold text-lg border-2 border-gray-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-all">
                                Learn About Us 📖
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
