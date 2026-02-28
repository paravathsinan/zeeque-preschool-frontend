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
        <main className="min-h-screen bg-gradient-to-b from-[#fffcf2] to-[#faeed1] dark:from-slate-900 dark:to-slate-950 font-body selection:bg-secondary selection:text-white relative overflow-hidden transition-colors duration-300">

            {/* ── Header ── */}
            <div className="w-full relative z-50">
                <div className="hidden lg:block w-full bg-white dark:bg-slate-900 border-b border-dashed border-gray-200 dark:border-slate-700 transition-colors duration-300">
                    <TopHeader />
                </div>
                <div className="max-w-[1140px] mx-auto bg-white dark:bg-slate-900 rounded-b-[40px] shadow-sm border border-gray-100 dark:border-slate-800 px-4 xl:px-8 transition-colors duration-300">
                    <Navbar />
                </div>
            </div>

            {/* ══════════════════════════════════
                SECTION 1: Hero Banner
               ══════════════════════════════════ */}
            <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-[10%] w-20 h-20 rounded-full bg-[#ef4225]/10 animate-pulse" />
                    <div className="absolute top-20 right-[15%] w-16 h-16 rounded-full bg-[#fbaf01]/10 animate-pulse delay-500" />
                    <div className="absolute bottom-16 left-[30%] w-14 h-14 rounded-full bg-[#0fb85c]/10 animate-pulse delay-700" />
                    <div className="absolute top-1/3 right-[5%] w-28 h-28 rounded-full border-4 border-dashed border-[#e83e8c]/10" />
                    <div className="absolute bottom-8 right-[25%]"><Star className="w-8 h-8 text-[#fbaf01]/20 fill-[#fbaf01]/10" /></div>
                    <div className="absolute top-16 left-[50%] text-6xl opacity-[0.06]">⚡</div>
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <div className="flex items-center justify-center gap-2 mb-6 font-body text-sm">
                            <Link href="/about" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">About</Link>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                            <span className="text-primary font-semibold">Features</span>
                        </div>
                        <h1 className="font-heading font-extrabold text-[#222] dark:text-white text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
                            What Makes Zeeque Preschool{" "}<span className="relative inline-block"><span className="text-primary">Special</span><svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none"><path d="M2 8C40 2 80 2 100 6C120 10 160 10 198 4" stroke="#ef4225" strokeWidth="3" strokeLinecap="round" /></svg></span> ✨
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            From Quran recitation to splash pools, from multilingual education to clay modelling — discover every feature that makes Zeeque Preschool the most loved preschool for your little ones.
                        </p>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-8 flex flex-wrap justify-center gap-3">
                            {["📖 Quran & Culture", "🌍 Multilingual", "🎮 Play Way", "👩‍🏫 3 Mentors", "🏫 Smart Classrooms", "🔬 R&D Backed"].map((tag) => (
                                <span key={tag} className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-full px-4 py-2 font-heading font-bold text-xs text-gray-600 dark:text-gray-300 shadow-sm">{tag}</span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
                <WavyDivider />
            </section>

            {/* ══════════════════════════════════
                SECTION 2: Quran, Tradition & Culture
               ══════════════════════════════════ */}
            <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 right-[5%] text-8xl opacity-[0.04] hidden lg:block">🕌</div>
                    <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full border-4 border-dashed border-[#0fb85c]/10 hidden xl:block" />
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} className="w-full lg:w-1/2">
                            <div className="inline-flex items-center gap-2 bg-[#0fb85c]/10 text-[#0fb85c] font-heading font-bold uppercase tracking-wider text-xs px-5 py-2 rounded-full mb-4">
                                <BookOpen className="w-4 h-4" /> Light of Life
                            </div>
                            <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-6">
                                Quran, Tradition & <span className="text-[#0fb85c]">Culture</span> 📖
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed mb-6">
                                At the very heart of Zeeque Preschool lies the beautiful integration of Quranic wisdom with modern education. We believe in illuminating young hearts from the very beginning, helping children develop a deep connection with their faith through child-friendly approaches.
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    { emoji: "📗", text: "Children are trained to recite the Holy Quran and memorize at least 1 Juz' within 3 years" },
                                    { emoji: "🤲", text: "Daily Adhkar (supplications) and remembrances woven into everyday routines" },
                                    { emoji: "🏡", text: "Traditional Islamic values and folklore are integral parts of the curriculum" },
                                    { emoji: "🌙", text: "Festival celebrations and Islamic heritage events throughout the year" },
                                    { emoji: "💡", text: "Character formation rooted in compassion, respect, and excellence from age 3 to 6" },
                                ].map((item) => (
                                    <div key={item.text} className="flex items-start gap-3 bg-[#0fb85c]/5 dark:bg-slate-800 rounded-2xl p-4 border border-[#0fb85c]/10 dark:border-slate-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                                        <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                                        <p className="text-gray-600 dark:text-gray-300 font-body text-[15px] leading-relaxed">{item.text}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gradient-to-r from-[#0fb85c]/10 to-[#fbaf01]/10 dark:from-[#0fb85c]/20 dark:to-[#fbaf01]/20 rounded-2xl p-5 border border-[#0fb85c]/15">
                                <p className="font-heading font-bold text-[#222] dark:text-white text-sm mb-1 flex items-center gap-2">💡 Our Motto</p>
                                <p className="text-gray-600 dark:text-gray-300 font-body text-sm italic">&ldquo;One Who Is Illumined At The Beginning Is Illumined At The End&rdquo; — Ibn Athaillah</p>
                            </div>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} className="w-full lg:w-1/2 relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative aspect-[3/4] rounded-[28px] overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-300">
                                    <Image src="https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=600&auto=format&fit=crop" alt="Children learning" fill className="object-cover" />
                                </div>
                                <div className="relative aspect-[3/4] rounded-[28px] overflow-hidden shadow-xl translate-y-8 hover:scale-[1.02] transition-transform duration-300">
                                    <Image src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop" alt="Kids reading together" fill className="object-cover" />
                                </div>
                            </div>
                            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#0fb85c] text-white rounded-2xl px-6 py-3 shadow-xl z-20 flex items-center gap-2">
                                <BookOpen className="w-5 h-5" />
                                <span className="font-heading font-bold text-sm">1 Juz&apos; in 3 Years</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <WavyDivider fill="#fffcf2" darkFill="dark:fill-slate-950" />
            </section>

            {/* ══════════════════════════════════
                SECTION 3: Language Foundation
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-[#fffcf2] dark:bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 left-[5%] text-8xl opacity-[0.04] hidden lg:block">🌍</div>
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} className="w-full lg:w-1/2">
                            <div className="inline-flex items-center gap-2 bg-[#0052ff]/10 text-[#0052ff] font-heading font-bold uppercase tracking-wider text-xs px-5 py-2 rounded-full mb-4">
                                <Languages className="w-4 h-4" /> Multilingual
                            </div>
                            <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-6">
                                Solid Foundation in <span className="text-[#0052ff]">Language</span> 🗣️
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed mb-5">
                                We believe <strong className="text-[#222] dark:text-white">&ldquo;the limit of language means the limit of the world.&rdquo;</strong> That&apos;s why Zeeque Preschool children are trained in three languages from the earliest age, opening doors to vast cultural and intellectual worlds.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                                {[
                                    { lang: "Arabic", emoji: "🇸🇦", desc: "Reading, writing & speaking", color: "#0fb85c" },
                                    { lang: "English", emoji: "🇬🇧", desc: "Communication & literacy", color: "#0052ff" },
                                    { lang: "Malayalam", emoji: "🇮🇳", desc: "Mother tongue fluency", color: "#e83e8c" },
                                ].map((l) => (
                                    <div key={l.lang} className="bg-white dark:bg-slate-800 rounded-2xl p-5 border-2 border-gray-100 dark:border-slate-700 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                                        <div className="text-4xl mb-3">{l.emoji}</div>
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
                                <Image src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=800&auto=format&fit=crop" alt="Children learning languages" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0052ff]/30 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                                    <p className="font-heading font-bold text-[#222] dark:text-white text-sm text-center">&ldquo;The limit of language is the limit of the world&rdquo; 🌏</p>
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
            <section className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 right-[10%] text-8xl opacity-[0.04] hidden lg:block">🏅</div>
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-[#e83e8c]/10 text-[#e83e8c] font-heading font-bold uppercase tracking-wider text-xs px-5 py-2 rounded-full mb-4">
                            <Crown className="w-4 h-4" /> Character is Everything
                        </div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Building <span className="text-[#e83e8c]">Character</span> from Day One 🌟
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-3xl mx-auto leading-relaxed">
                            For children between 3 to 6, character formation is the most crucial developmental milestone. At Zeeque Preschool, we fuse spiritual education with practical wisdom to build children of integrity, compassion, and strength — balancing both divine and worldly knowledge.
                        </p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
                        {[
                            { title: "Sharing", emoji: "🤝", color: "#0fb85c" },
                            { title: "Caring", emoji: "💝", color: "#e83e8c" },
                            { title: "Good Manners", emoji: "🙏", color: "#0052ff" },
                            { title: "Confidence", emoji: "💪", color: "#fbaf01" },
                            { title: "Independence", emoji: "🦋", color: "#7c3aed" },
                            { title: "Leadership", emoji: "👑", color: "#ef4225" },
                        ].map((v, i) => (
                            <motion.div key={v.title} custom={i} variants={fadeUp}
                                className="bg-white dark:bg-slate-800 rounded-[24px] p-5 border-2 border-gray-100 dark:border-slate-700 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">{v.emoji}</div>
                                <h3 className="font-heading font-bold text-[#222] dark:text-white text-sm">{v.title}</h3>
                                <div className="w-6 h-1 rounded-full mx-auto mt-2" style={{ backgroundColor: v.color }} />
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="mt-12 bg-gradient-to-r from-[#e83e8c]/5 to-[#fbaf01]/5 dark:from-slate-800 dark:to-slate-800 rounded-[28px] p-8 border border-[#e83e8c]/10 dark:border-slate-700">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="text-6xl">🧒</div>
                            <div>
                                <h3 className="font-heading font-bold text-[#222] dark:text-white text-xl mb-2">Responsibility from an Early Age</h3>
                                <p className="text-gray-600 dark:text-gray-300 font-body text-[15px] leading-relaxed">
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
            <section className="py-20 lg:py-28 bg-[#fffcf2] dark:bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-[5%] text-8xl opacity-[0.04] hidden lg:block">🎮</div>
                    <div className="absolute bottom-20 right-[8%] text-7xl opacity-[0.04] hidden lg:block">🧸</div>
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-[#fbaf01]/10 text-[#fbaf01] font-heading font-bold uppercase tracking-wider text-xs px-5 py-2 rounded-full mb-4">
                            <Shapes className="w-4 h-4" /> Learning Through Play
                        </div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Stress-Free <span className="text-[#fbaf01]">Play Way</span> Method 🎈
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-3xl mx-auto leading-relaxed">
                            No textbooks, no pressure, no stress. At Zeeque Preschool, every child learns through fun-filled, creative, and engaging play activities at their own pace — because we believe every child is unique and deserves a joyful start.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Stress-Free Card */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}
                            className="bg-gradient-to-br from-[#7c3aed]/5 to-[#e83e8c]/5 dark:from-slate-800 dark:to-slate-800 rounded-[28px] p-8 border-2 border-[#7c3aed]/15 dark:border-slate-700 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                            <div className="absolute bottom-3 right-3 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">😊</div>
                            <div className="text-5xl mb-4">🧘</div>
                            <h3 className="font-heading font-extrabold text-[#222] dark:text-white text-2xl mb-4">Stress-Free Learning</h3>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-[16px] leading-relaxed mb-5">
                                Our classrooms are happy, pressure-free zones. Children live in an atmosphere full of joy and excitement. No boring lectures or rote memorization — we create a natural learning environment where curiosity blossoms on its own.
                            </p>
                            <ul className="space-y-2">
                                {["No formal textbook-based teaching", "Children progress at their own pace", "Joy and excitement in every activity", "Fun-filled creative daily sessions"].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-body text-sm">
                                        <Check className="w-4 h-4 text-[#7c3aed] flex-shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Play Way Card */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}
                            className="bg-gradient-to-br from-[#fbaf01]/5 to-[#0fb85c]/5 dark:from-slate-800 dark:to-slate-800 rounded-[28px] p-8 border-2 border-[#fbaf01]/15 dark:border-slate-700 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                            <div className="absolute bottom-3 right-3 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">🎲</div>
                            <div className="text-5xl mb-4">🎮</div>
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

                    {/* Daily Session Flow */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                        <h3 className="font-heading font-bold text-[#222] dark:text-white text-xl text-center mb-8">A Typical Fun-Filled Day 🌈</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                            {[
                                { name: "Welcome Circle", emoji: "👋", color: "#fbaf01" },
                                { name: "Assembly", emoji: "🎤", color: "#0052ff" },
                                { name: "Meditation", emoji: "🧘", color: "#7c3aed" },
                                { name: "Rhyme Time", emoji: "🎵", color: "#e83e8c" },
                                { name: "Story Session", emoji: "📚", color: "#0fb85c" },
                                { name: "Outdoor Play", emoji: "⚽", color: "#ef4225" },
                            ].map((s) => (
                                <div key={s.name} className="bg-white dark:bg-slate-800 rounded-2xl p-4 text-center border-2 border-gray-100 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">{s.emoji}</div>
                                    <p className="font-heading font-bold text-[#222] dark:text-white text-xs">{s.name}</p>
                                    <div className="w-5 h-1 rounded-full mx-auto mt-2" style={{ backgroundColor: s.color }} />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
                <WavyDivider fill="white" darkFill="dark:fill-slate-900" />
            </section>

            {/* ══════════════════════════════════
                SECTION 6: Mentoring + On-site Support
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} className="w-full lg:w-1/2 relative">
                            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700">
                                <Image src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?q=80&w=1000&auto=format&fit=crop" alt="Teachers with children" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#e83e8c]/30 to-transparent" />
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
                            <div className="inline-flex items-center gap-2 bg-[#e83e8c]/10 text-[#e83e8c] font-heading font-bold uppercase tracking-wider text-xs px-5 py-2 rounded-full mb-4">
                                <HandHeart className="w-4 h-4" /> Personalized Care
                            </div>
                            <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-6">
                                Individual <span className="text-[#e83e8c]">Mentoring</span> 👩‍🏫
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed mb-6">
                                Every classroom at Zeeque Preschool has <strong className="text-[#222] dark:text-white">three dedicated mentors</strong> to ensure every child receives individual care, attention, and love. No child is ever left behind — each one is seen, heard, and nurtured.
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    { icon: Users, title: "3 Mentors Per Classroom", desc: "Ensuring personalized care for every child with an optimal mentor-to-child ratio.", color: "#e83e8c" },
                                    { icon: Eye, title: "On-Site Academic Executives", desc: "Specially trained executives provide timely support and constantly monitor classroom processes.", color: "#0052ff" },
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
                SECTION 7: Child-Friendly Classrooms
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-24 bg-gradient-to-r from-[#0052ff] via-[#7c3aed] to-[#e83e8c] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10 text-center text-white">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                        <div className="text-5xl mb-5">🏫</div>
                        <h2 className="font-heading font-extrabold text-4xl md:text-5xl leading-[1.1] mb-5">Child-Friendly Smart Classrooms</h2>
                        <p className="font-body text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90 mb-10">
                            Our classrooms are professionally designed, child-sized wonderlands equipped with multimedia, colorful learning resources, and ample space for movement — because the environment itself is a teacher.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                            {[
                                { name: "Multimedia Support", emoji: "💻" },
                                { name: "Colorful Decor", emoji: "🎨" },
                                { name: "Child-Sized Furniture", emoji: "🪑" },
                                { name: "Learning Toys", emoji: "🧸" },
                                { name: "Interactive Boards", emoji: "📋" },
                                { name: "Reading Corner", emoji: "📚" },
                            ].map((f) => (
                                <div key={f.name} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                                    <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">{f.emoji}</div>
                                    <p className="font-heading font-bold text-xs">{f.name}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 8: Infrastructure & Facilities
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-[#ef4225]/10 text-[#ef4225] font-heading font-bold uppercase tracking-wider text-xs px-5 py-2 rounded-full mb-4">
                            <Castle className="w-4 h-4" /> World-Class Facilities
                        </div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Infrastructure & <span className="text-[#ef4225]">Facilities</span> 🏰
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-3xl mx-auto leading-relaxed">Designed to be healthy, safe, and stimulating — our centers have everything a child needs to thrive.</p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Sand Pit", desc: "Sensory play for tactile development and creative construction.", emoji: "🏖️", icon: Sparkles, color: "#fbaf01" },
                            { title: "Splash Pool", desc: "Safe water play area for aquatic fun and motor skill development.", emoji: "💦", icon: Droplets, color: "#0052ff" },
                            { title: "Mud Pond", desc: "Natural sensory exploration for hands-on, messy, joyful learning.", emoji: "🪴", icon: Flower2, color: "#e83e8c" },
                            { title: "Outdoor Play Areas", desc: "Two fenced areas with climbing structures, sand zones, and wheel toy paths.", emoji: "🎡", icon: TreePine, color: "#0fb85c" },
                            { title: "Indoor Play Zone", desc: "Age-appropriate toys, blocks, and learning games in a safe indoor space.", emoji: "🧩", icon: Puzzle, color: "#7c3aed" },
                            { title: "Safety First", desc: "Supervised single-door entry/exit, CCTV monitoring, and trained safety staff.", emoji: "🛡️", icon: Shield, color: "#ef4225" },
                        ].map((f, i) => (
                            <motion.div key={f.title} custom={i} variants={fadeUp}
                                className="bg-white dark:bg-slate-800 rounded-[28px] p-7 border-2 border-gray-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                                <div className="absolute top-2 right-2 text-4xl opacity-10 group-hover:opacity-25 transition-opacity">{f.emoji}</div>
                                <div className="text-3xl mb-3">{f.emoji}</div>
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm" style={{ background: `linear-gradient(135deg, ${f.color}20, ${f.color}10)` }}>
                                    <f.icon className="w-7 h-7" style={{ color: f.color }} />
                                </div>
                                <h3 className="font-heading font-bold text-[#222] dark:text-white text-lg mb-2">{f.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 font-body text-[15px] leading-relaxed">{f.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Ponds Section */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                        className="mt-12 bg-gradient-to-r from-[#0052ff]/5 to-[#0fb85c]/5 dark:from-slate-800 dark:to-slate-800 rounded-[28px] p-8 border border-[#0052ff]/10 dark:border-slate-700">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="text-7xl">🏊</div>
                            <div>
                                <h3 className="font-heading font-extrabold text-[#222] dark:text-white text-2xl mb-3">Zeeque Preschool Ponds — A Unique Feature! 🎉</h3>
                                <p className="text-gray-600 dark:text-gray-300 font-body text-[16px] leading-relaxed mb-3">
                                    ZeeQue has <strong className="text-[#222] dark:text-white">three types of ponds</strong> for children to play in — filled with <strong className="text-[#0052ff]">water, sand, and clay</strong> respectively. Children play freely in these ponds to enhance their all-round physical and mental development.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {["💧 Water Pond", "🏖️ Sand Pond", "🎭 Clay Pond"].map((t) => (
                                        <span key={t} className="bg-white dark:bg-slate-700 rounded-full px-4 py-2 font-heading font-bold text-xs text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-slate-600 shadow-sm">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <WavyDivider fill="#fffcf2" darkFill="dark:fill-slate-950" />
            </section>

            {/* ══════════════════════════════════
                SECTION 9: R&D
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-[#fffcf2] dark:bg-slate-950 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} className="w-full lg:w-1/2">
                            <div className="inline-flex items-center gap-2 bg-[#7c3aed]/10 text-[#7c3aed] font-heading font-bold uppercase tracking-wider text-xs px-5 py-2 rounded-full mb-4">
                                <FlaskConical className="w-4 h-4" /> Innovation
                            </div>
                            <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-6">
                                Research & <span className="text-[#7c3aed]">Development</span> 🔬
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed mb-5">
                                ZeeQue has a dedicated <strong className="text-[#222] dark:text-white">Research and Development wing</strong> at its Head Office that makes us unique. Our R&D team continuously studies child development and education trends to ensure our curriculum remains cutting-edge.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-[16px] leading-relaxed mb-6">
                                The exclusive <strong className="text-[#7c3aed]">ZeeQue Curriculum</strong> — the result of extensive research and studies — is constantly updated to incorporate the latest in ECCE techniques, child psychology, and multi-sensory learning approaches.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { title: "Curriculum R&D", desc: "Continuous testing & refinement", emoji: "📊" },
                                    { title: "Teacher Training", desc: "Research-backed pedagogy", emoji: "🎓" },
                                    { title: "Child Studies", desc: "Developmental psychology", emoji: "🧒" },
                                    { title: "Innovation Lab", desc: "New teaching methods", emoji: "💡" },
                                ].map((r) => (
                                    <div key={r.title} className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-gray-100 dark:border-slate-700 hover:shadow-md transition-all duration-300">
                                        <div className="text-2xl mb-2">{r.emoji}</div>
                                        <h4 className="font-heading font-bold text-[#222] dark:text-white text-sm mb-0.5">{r.title}</h4>
                                        <p className="text-gray-500 dark:text-gray-400 font-body text-xs">{r.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} className="w-full lg:w-1/2 relative">
                            <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700">
                                <Image src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop" alt="Research and learning" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#7c3aed]/30 to-transparent" />
                            </div>
                            <div className="absolute -bottom-5 -right-3 bg-[#7c3aed] text-white rounded-2xl px-5 py-3 shadow-xl z-20 flex items-center gap-2">
                                <FlaskConical className="w-5 h-5" />
                                <span className="font-heading font-bold text-sm">Exclusive Curriculum</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <WavyDivider fill="white" darkFill="dark:fill-slate-900" />
            </section>

            {/* ══════════════════════════════════
                SECTION 10: All Features Summary Grid
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
                        <div className="text-5xl mb-4">📋</div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Everything at a <span className="text-primary">Glance</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-2xl mx-auto">Here&apos;s every feature that makes ZeeQue the perfect choice for your child&apos;s first steps into education.</p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            { n: "Quran & Culture", e: "📖", c: "#0fb85c" }, { n: "Trilingual Education", e: "🌍", c: "#0052ff" },
                            { n: "Character Building", e: "🏅", c: "#e83e8c" }, { n: "Stress-Free Learning", e: "😊", c: "#7c3aed" },
                            { n: "Play Way Method", e: "🎮", c: "#fbaf01" }, { n: "3 Mentors/Class", e: "👩‍🏫", c: "#ef4225" },
                            { n: "Smart Classrooms", e: "💻", c: "#0052ff" }, { n: "Sand Pit", e: "🏖️", c: "#fbaf01" },
                            { n: "Splash Pool", e: "💦", c: "#0052ff" }, { n: "Mud Pond", e: "🪴", c: "#e83e8c" },
                            { n: "3 Unique Ponds", e: "🏊", c: "#0fb85c" }, { n: "R&D Wing", e: "🔬", c: "#7c3aed" },
                            { n: "Safety & Security", e: "🛡️", c: "#ef4225" }, { n: "Academic Executives", e: "👔", c: "#0052ff" },
                            { n: "Outdoor Play", e: "⚽", c: "#0fb85c" }, { n: "Exclusive Curriculum", e: "📚", c: "#e83e8c" },
                        ].map((f, i) => (
                            <motion.div key={f.n} custom={i} variants={fadeUp}
                                className="bg-white dark:bg-slate-800 rounded-2xl p-4 border-2 border-gray-100 dark:border-slate-700 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                                <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">{f.e}</div>
                                <p className="font-heading font-bold text-[#222] dark:text-white text-xs">{f.n}</p>
                                <div className="w-5 h-1 rounded-full mx-auto mt-2" style={{ backgroundColor: f.c }} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 11: CTA
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-gradient-to-b from-[#fffcf2] to-white dark:from-slate-950 dark:to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-10 w-24 h-24 rounded-full border-4 border-dashed border-[#fbaf01]/15 hidden lg:block" />
                    <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-[#0fb85c]/5 hidden lg:block" />
                </div>

                <div className="max-w-[800px] mx-auto px-4 xl:px-8 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                        <div className="text-6xl mb-6">🎓</div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Ready to Experience <span className="text-primary">ZeeQue</span>?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-xl mx-auto leading-relaxed mb-10">
                            Give your child the best possible start with our proven ECCE program. Visit your nearest ZeeQue center or enroll online today!
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="https://admission.zeeque.in/" className="group flex items-center justify-center gap-3 px-10 py-4 rounded-2xl font-heading font-bold text-lg tracking-wide transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-white/20 dark:bg-slate-800/40 backdrop-blur-[16px] border border-white/40 dark:border-white/10 text-gray-900 dark:text-white shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.5)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:scale-[1.04] hover:-translate-y-[1px] hover:bg-white/35 dark:hover:bg-slate-800/60 hover:shadow-[0_16px_40px_rgba(255,182,6,0.3),inset_0_1px_1px_rgba(255,255,255,0.6)] active:scale-[0.98] active:opacity-90 ring-2 ring-transparent focus-visible:ring-primary/50 relative overflow-hidden">
                                {/* Subtle micro-pulse inner highlight */}
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                                <span className="relative z-10">Enroll Now 🎉</span>
                                <ArrowRight className="w-5 h-5 stroke-[2.5] relative z-10" />
                            </Link>
                            <Link href="/about" className="flex items-center gap-2 bg-white dark:bg-slate-800 text-[#222] dark:text-white px-10 py-4 rounded-2xl font-heading font-bold text-lg border-2 border-gray-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-all">
                                About Us 📖
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
