"use client";

import Image from "next/image";
import Link from "next/link";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
    Heart, BookOpen, Users, Star, GraduationCap, ArrowRight,
    Home, ChevronRight, Baby, Lightbulb, Award, Crown, Rocket,
    Brain, Shield, Sparkles, Globe, HandHeart, Target,
    TreePine, Palette, Music, Puzzle, Eye, Shapes,
    Flower2, Languages, CheckCircle2, BookHeart, Megaphone,
    Flame, Compass, Gem, Monitor, FlaskConical,
} from "lucide-react";
import type { Easing } from "framer-motion";

const ease: Easing = [0.25, 0.1, 0.25, 1];
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease } }),
};
const fadeLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } };
const fadeRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const WavyDivider = ({ fill = "white", darkFill = "dark:fill-slate-900", flip = false }: { fill?: string; darkFill?: string; flip?: boolean }) => (
    <div className={`absolute ${flip ? "top-0 rotate-180" : "bottom-0"} left-0 w-full overflow-hidden leading-none z-10`}>
        <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto">
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill={fill} className={darkFill} />
        </svg>
    </div>
);

export default function CurriculumPage() {
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
                    <div className="absolute top-10 left-[10%] w-20 h-20 rounded-full bg-[#7c3aed]/10 animate-pulse" />
                    <div className="absolute top-20 right-[15%] w-16 h-16 rounded-full bg-[#fbaf01]/10 animate-pulse delay-500" />
                    <div className="absolute bottom-16 left-[30%] w-14 h-14 rounded-full bg-[#0fb85c]/10 animate-pulse delay-700" />
                    <div className="absolute top-1/3 right-[5%] w-28 h-28 rounded-full border-4 border-dashed border-[#e83e8c]/10" />
                    <div className="absolute bottom-8 right-[25%]"><Star className="w-8 h-8 text-[#fbaf01]/20 fill-[#fbaf01]/10" /></div>
                    <div className="absolute top-16 left-[50%] text-6xl opacity-[0.06]">📚</div>
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <div className="flex items-center justify-center gap-2 mb-6 font-body text-sm">
                            <Link href="/about" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">About</Link>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                            <span className="text-primary font-semibold">Curriculum</span>
                        </div>
                        <h1 className="font-heading font-extrabold text-[#222] dark:text-white text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
                            Our{" "}<span className="relative inline-block"><span className="text-[#7c3aed]">Curriculum</span><svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none"><path d="M2 8C40 2 80 2 100 6C120 10 160 10 198 4" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" /></svg></span> 📖
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            A meticulously crafted, R&D-backed curriculum that nurtures every aspect of a child&apos;s development — from cognitive growth and language mastery to character building and creative expression.
                        </p>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-8 flex flex-wrap justify-center gap-3">
                            {["🧠 Holistic Growth", "🎮 Play-Based", "📖 Quran & Values", "🌍 Trilingual", "🔬 R&D Backed", "🎨 Creative Arts"].map((tag) => (
                                <span key={tag} className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-full px-4 py-2 font-heading font-bold text-xs text-gray-600 dark:text-gray-300 shadow-sm">{tag}</span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
                <WavyDivider />
            </section>

            {/* ══════════════════════════════════
                SECTION 2: Curriculum Overview
               ══════════════════════════════════ */}
            <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 right-[5%] text-8xl opacity-[0.04] hidden lg:block">📝</div>
                    <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full border-4 border-dashed border-[#7c3aed]/10 hidden xl:block" />
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} className="w-full lg:w-1/2">
                            <div className="inline-flex items-center gap-2 bg-[#7c3aed]/10 text-[#7c3aed] font-heading font-bold uppercase tracking-wider text-xs px-5 py-2 rounded-full mb-4">
                                <BookOpen className="w-4 h-4" /> Curriculum Philosophy
                            </div>
                            <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-6">
                                Nurturing Every Aspect of <span className="text-[#7c3aed]">Growth</span> 🌱
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed mb-5">
                                Below the age of six, children demonstrate advanced pretend play, symbolic thought, categorization, reasoning, and problem-solving abilities, marking the preschool years as a phase of rapid development. Our curriculum, rooted in engaging activities that spark curiosity, is designed to nurture <strong className="text-[#222] dark:text-white">every aspect of a child&apos;s growth</strong> — including their physical, emotional, and intellectual development, creativity, language skills, and social interactions.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-[16px] leading-relaxed mb-6">
                                It places a strong emphasis on refining the child&apos;s language skills through a combination of speaking, reading, writing, and audio-visual lessons. Within the vibrant and cheerful environment of Zeeque Preschool, children not only acquire knowledge but also learn the values of sharing, caring, connecting with nature, nurturing their innate curiosity, and staying well-informed.
                            </p>

                            <div className="space-y-3 mb-6">
                                {[
                                    { emoji: "🎯", text: "Fosters curiosity, interaction, and exploration in every child" },
                                    { emoji: "🧪", text: "Sensory-integrated sessions targeting senses, memory, and observation" },
                                    { emoji: "🎲", text: "Edutainment games developing gross and fine motor skills" },
                                    { emoji: "🎭", text: "Imaginative plays refining cultural and artistic talents" },
                                    { emoji: "💎", text: "Life skills including good manners, confidence, and leadership" },
                                ].map((item) => (
                                    <div key={item.text} className="flex items-start gap-3 bg-[#7c3aed]/5 dark:bg-slate-800 rounded-2xl p-4 border border-[#7c3aed]/10 dark:border-slate-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                                        <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                                        <p className="text-gray-600 dark:text-gray-300 font-body text-[15px] leading-relaxed">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} className="w-full lg:w-1/2 relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative aspect-[3/4] rounded-[28px] overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-300">
                                    <Image src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop" alt="Children learning" fill className="object-cover" />
                                </div>
                                <div className="relative aspect-[3/4] rounded-[28px] overflow-hidden shadow-xl translate-y-8 hover:scale-[1.02] transition-transform duration-300">
                                    <Image src="https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?q=80&w=600&auto=format&fit=crop" alt="Kids in classroom" fill className="object-cover" />
                                </div>
                            </div>
                            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#7c3aed] text-white rounded-2xl px-6 py-3 shadow-xl z-20 flex items-center gap-2">
                                <FlaskConical className="w-5 h-5" />
                                <span className="font-heading font-bold text-sm">R&D Backed</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <WavyDivider fill="#fffcf2" darkFill="dark:fill-slate-950" />
            </section>

            {/* ══════════════════════════════════
                SECTION 3: Developmental Domains
               ══════════════════════════════════ */}
            <section className="py-16 md:py-20 lg:py-28 bg-[#fffcf2] dark:bg-slate-950 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-[#e83e8c]/10 text-[#e83e8c] font-heading font-bold uppercase tracking-wider text-xs px-5 py-2 rounded-full mb-4">
                            <Compass className="w-4 h-4" /> All-Round Development
                        </div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Six Developmental <span className="text-[#e83e8c]">Domains</span> 🎯
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-3xl mx-auto leading-relaxed">
                            Our ECCE curriculum addresses all six domains of early childhood development, ensuring children grow into well-rounded individuals ready for lifelong success.
                        </p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Cognitive Development", desc: "Problem-solving, logical thinking, scientific curiosity, memory, and observation skills through hands-on exploration and sensory activities.", icon: Brain, color: "#0052ff", emoji: "🧠" },
                            { title: "Language & Literacy", desc: "Trilingual education in Arabic, English, and Malayalam through speaking, reading, writing, rhymes, storytelling, and audio-visual lessons.", icon: Languages, color: "#7c3aed", emoji: "🗣️" },
                            { title: "Physical Development", desc: "Gross and fine motor skill development through outdoor play, edutainment games, sports, yoga, and hands-on craft activities.", icon: Rocket, color: "#0fb85c", emoji: "💪" },
                            { title: "Social & Emotional", desc: "Teamwork, sharing, caring, empathy, and emotional regulation through group activities, role-play, and collaborative projects.", icon: Heart, color: "#e83e8c", emoji: "💖" },
                            { title: "Creative & Artistic", desc: "Imagination, artistic expression, and creative thinking through art, music, drama, puppetry, origami, and clay modelling.", icon: Palette, color: "#fbaf01", emoji: "🎨" },
                            { title: "Spiritual & Moral", desc: "Islamic values, Quran recitation, daily Adhkar, character building with good manners, confidence, independence, and leadership.", icon: BookHeart, color: "#ef4225", emoji: "📖" },
                        ].map((d, i) => (
                            <motion.div key={d.title} custom={i} variants={fadeUp}
                                className="bg-white dark:bg-slate-800 rounded-[28px] p-7 border-2 border-gray-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                                <div className="absolute top-2 right-2 text-4xl opacity-10 group-hover:opacity-25 transition-opacity">{d.emoji}</div>
                                <div className="text-3xl mb-3">{d.emoji}</div>
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm" style={{ background: `linear-gradient(135deg, ${d.color}20, ${d.color}10)` }}>
                                    <d.icon className="w-7 h-7" style={{ color: d.color }} />
                                </div>
                                <h3 className="font-heading font-bold text-[#222] dark:text-white text-lg mb-2">{d.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 font-body text-[15px] leading-relaxed">{d.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <WavyDivider fill="white" darkFill="dark:fill-slate-900" />
            </section>

            {/* ══════════════════════════════════
                SECTION 4: Learning Areas — Detailed Grid
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-[#fbaf01]/10 text-[#fbaf01] font-heading font-bold uppercase tracking-wider text-xs px-5 py-2 rounded-full mb-4">
                            <Shapes className="w-4 h-4" /> What Children Learn
                        </div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Key Learning <span className="text-[#fbaf01]">Areas</span> 📋
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-3xl mx-auto">Our curriculum covers a wide spectrum of learning areas, each carefully designed to be age-appropriate and engaging.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}
                            className="bg-gradient-to-br from-[#0052ff]/5 to-[#7c3aed]/5 dark:from-slate-800 dark:to-slate-800 rounded-[28px] p-8 border-2 border-[#0052ff]/15 dark:border-slate-700 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                            <div className="absolute bottom-3 right-3 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">🗣️</div>
                            <div className="text-5xl mb-4">📝</div>
                            <h3 className="font-heading font-extrabold text-[#222] dark:text-white text-2xl mb-4">Language & Communication</h3>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-[16px] leading-relaxed mb-5">
                                Children are trained to communicate, read, and write in three languages — Arabic, English, and Malayalam. Our approach combines phonics, storytelling, and conversational practice for natural language acquisition.
                            </p>
                            <ul className="space-y-2">
                                {["Phonics & letter recognition", "Storytelling & narrative skills", "Rhyme time & musical language", "Conversational fluency in 3 languages", "Reading readiness & pre-writing skills"].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-body text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-[#0052ff] flex-shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}
                            className="bg-gradient-to-br from-[#0fb85c]/5 to-[#fbaf01]/5 dark:from-slate-800 dark:to-slate-800 rounded-[28px] p-8 border-2 border-[#0fb85c]/15 dark:border-slate-700 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                            <div className="absolute bottom-3 right-3 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">🔢</div>
                            <div className="text-5xl mb-4">🧮</div>
                            <h3 className="font-heading font-extrabold text-[#222] dark:text-white text-2xl mb-4">Numeracy & Logic</h3>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-[16px] leading-relaxed mb-5">
                                Early numeracy concepts are introduced through fun activities, games, and real-life applications. Children develop logical thinking and problem-solving abilities naturally.
                            </p>
                            <ul className="space-y-2">
                                {["Number recognition & counting", "Shape & pattern identification", "Sorting, categorization & sequencing", "Basic measurement concepts", "Logical reasoning through puzzles"].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-body text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-[#0fb85c] flex-shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            { name: "Environmental Awareness", emoji: "🌿", color: "#0fb85c" },
                            { name: "Art & Craft", emoji: "🎨", color: "#e83e8c" },
                            { name: "Music & Movement", emoji: "🎵", color: "#0052ff" },
                            { name: "Science & Discovery", emoji: "🔬", color: "#7c3aed" },
                            { name: "Life Skills", emoji: "🌟", color: "#fbaf01" },
                            { name: "Health & Hygiene", emoji: "🧼", color: "#ef4225" },
                        ].map((s, i) => (
                            <motion.div key={s.name} custom={i} variants={fadeUp} className="bg-white dark:bg-slate-800 rounded-2xl p-4 text-center border-2 border-gray-100 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                                <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">{s.emoji}</div>
                                <p className="font-heading font-bold text-[#222] dark:text-white text-xs">{s.name}</p>
                                <div className="w-5 h-1 rounded-full mx-auto mt-2" style={{ backgroundColor: s.color }} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 5: Sensory-Integrated Learning
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-24 bg-gradient-to-r from-[#7c3aed] via-[#e83e8c] to-[#ef4225] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10 text-center text-white">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                        <div className="text-5xl mb-5">🧪</div>
                        <h2 className="font-heading font-extrabold text-4xl md:text-5xl leading-[1.1] mb-5">Sensory-Integrated Learning</h2>
                        <p className="font-body text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90 mb-10">
                            Our meticulously crafted curriculum incorporates sensory-integrated sessions that target a child&apos;s senses, memory, observation skills, problem-solving abilities, logical thinking, and scientific curiosity.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                            {[
                                { name: "Touch & Texture", emoji: "✋" },
                                { name: "Visual Perception", emoji: "👁️" },
                                { name: "Sound & Music", emoji: "👂" },
                                { name: "Movement & Balance", emoji: "🤸" },
                                { name: "Taste & Smell", emoji: "🍎" },
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
                SECTION 6: Teachers as Care Givers
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-[5%] text-8xl opacity-[0.04] hidden lg:block">👩‍🏫</div>
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} className="w-full lg:w-1/2 relative">
                            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700">
                                <Image src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?q=80&w=1000&auto=format&fit=crop" alt="Teachers caring for children" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0fb85c]/30 to-transparent" />
                            </div>
                            <div className="absolute -bottom-5 -right-3 bg-[#0fb85c] text-white rounded-2xl px-5 py-3 shadow-xl z-20 flex items-center gap-2">
                                <Users className="w-5 h-5" />
                                <div>
                                    <div className="font-heading font-extrabold text-xl">1:9</div>
                                    <div className="text-white/80 text-xs font-body">Teacher Ratio</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} className="w-full lg:w-1/2">
                            <div className="inline-flex items-center gap-2 bg-[#0fb85c]/10 text-[#0fb85c] font-heading font-bold uppercase tracking-wider text-xs px-5 py-2 rounded-full mb-4">
                                <HandHeart className="w-4 h-4" /> Care & Mentoring
                            </div>
                            <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-6">
                                Teachers as <span className="text-[#0fb85c]">Care Givers</span> 💚
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed mb-5">
                                Zeeque Preschool has developed a <strong className="text-[#222] dark:text-white">state-of-the-art teacher training system</strong> with tailor-made modules to address the professional challenges of educating 3–6 year olds. We select prospective candidates based on a written test and a personal interview, after which they are trained by veteran teacher educators.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-[16px] leading-relaxed mb-8">
                                We maintain the teacher-child ratio of <strong className="text-[#0fb85c]">1:9</strong>. Our teachers are professionals in early childhood education with extensive field experience. They serve as mentors who guide children&apos;s intellectual and social development, providing the necessary care and emotional support.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { icon: Heart, title: "Emotional Support", desc: "Foster love for learning through fun-filled classroom and outdoor activities.", color: "#e83e8c" },
                                    { icon: Eye, title: "Holistic Care", desc: "Address basic needs including feeding, toileting, and safety supervision.", color: "#0052ff" },
                                    { icon: Megaphone, title: "Parent Communication", desc: "Build strong relationships with parents, keeping them informed about progress.", color: "#fbaf01" },
                                    { icon: GraduationCap, title: "Veteran-Trained", desc: "Selected through rigorous testing and trained by experienced teacher educators.", color: "#7c3aed" },
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
                <WavyDivider fill="#fffcf2" darkFill="dark:fill-slate-950" />
            </section>

            {/* ══════════════════════════════════
                SECTION 7: Curriculum Stages (LZQ/MZQ/UZQ)
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-[#fffcf2] dark:bg-slate-950 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-[#0fb85c]/10 text-[#0fb85c] font-heading font-bold uppercase tracking-wider text-xs px-5 py-2 rounded-full mb-4">
                            <TreePine className="w-4 h-4" /> Progressive Learning
                        </div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Curriculum Across <span className="text-[#0fb85c]">3 Stages</span> 🌈
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-3xl mx-auto">Each stage builds upon the previous, with age-appropriate content and progressively complex activities.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                stage: "LZQ", name: "Lower ZeeQue", age: "Age 3–4", color: "#fbaf01", emoji: "🌼", year: "Year 1",
                                areas: ["Sensory exploration & discovery", "Basic letter & number recognition", "Color, shape & size awareness", "Simple Quran surahs introduction", "Free play & motor skill basics", "Social interaction fundamentals"],
                            },
                            {
                                stage: "MZQ", name: "Middle ZeeQue", age: "Age 4–5", color: "#0052ff", emoji: "🌿", year: "Year 2",
                                areas: ["Reading readiness & phonics", "Number concepts & simple math", "Creative arts & expression", "Quran memorization progress", "Structured theme-based learning", "Teamwork & collaborative projects"],
                            },
                            {
                                stage: "UZQ", name: "Upper ZeeQue", age: "Age 5–6", color: "#0fb85c", emoji: "🌳", year: "Year 3",
                                areas: ["Advanced literacy & writing", "Critical thinking & reasoning", "Scientific exploration", "Juz' memorization completion", "Leadership & independence", "School readiness preparation"],
                            },
                        ].map((s) => (
                            <motion.div key={s.stage} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                                className="bg-white dark:bg-slate-800 rounded-[28px] p-7 border-2 border-gray-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                                <div className="absolute top-2 right-2 text-5xl opacity-10 group-hover:opacity-20 transition-opacity">{s.emoji}</div>
                                <div className="text-4xl mb-3">{s.emoji}</div>
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="font-heading font-extrabold text-2xl" style={{ color: s.color }}>{s.stage}</span>
                                    <span className="bg-gray-100 dark:bg-slate-700 rounded-full px-3 py-1 font-heading font-bold text-xs text-gray-500 dark:text-gray-400">{s.year}</span>
                                </div>
                                <h4 className="font-heading font-bold text-[#222] dark:text-white text-xl mb-1">{s.name.replace('ZeeQue', 'Zeeque Preschool')}</h4>
                                <p className="font-heading font-bold text-sm mb-5" style={{ color: s.color }}>{s.age}</p>
                                <div className="bg-gray-50 dark:bg-slate-700 rounded-xl p-4 space-y-2">
                                    <p className="font-heading font-bold text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Curriculum Focus</p>
                                    {s.areas.map((a) => (
                                        <div key={a} className="flex items-center gap-2 text-sm font-body text-gray-500 dark:text-gray-400">
                                            <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: s.color }} /> {a}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <WavyDivider fill="white" darkFill="dark:fill-slate-900" />
            </section>

            {/* ══════════════════════════════════
                SECTION 8: Edutainment & Creative Activities
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
                        <div className="text-5xl mb-4">🎮</div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Edutainment & <span className="text-[#fbaf01]">Creative</span> Activities
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-3xl mx-auto">Our group educational entertainment games play a pivotal role in developing language proficiency, promoting social development, and enhancing motor skills.</p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                        {[
                            { title: "Puppetry & Theater", emoji: "🎭", color: "#e83e8c" },
                            { title: "Origami Workshops", emoji: "🦢", color: "#0052ff" },
                            { title: "Clay Modelling", emoji: "🏺", color: "#fbaf01" },
                            { title: "Sand Play", emoji: "🏖️", color: "#0fb85c" },
                            { title: "Water Play", emoji: "💦", color: "#0052ff" },
                            { title: "Block Building", emoji: "🧱", color: "#ef4225" },
                            { title: "Musical Instruments", emoji: "🥁", color: "#7c3aed" },
                            { title: "Nature Exploration", emoji: "🌿", color: "#0fb85c" },
                            { title: "Cooking Activities", emoji: "🍪", color: "#fbaf01" },
                            { title: "Gardening", emoji: "🌻", color: "#0fb85c" },
                            { title: "Sensory Bins", emoji: "🧪", color: "#e83e8c" },
                            { title: "Role Play", emoji: "🎪", color: "#0052ff" },
                        ].map((act, i) => (
                            <motion.div key={act.title} custom={i} variants={fadeUp}
                                className="bg-white dark:bg-slate-800 rounded-2xl p-5 border-2 border-gray-100 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group text-center cursor-default">
                                <div className="text-3xl mb-3 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300">{act.emoji}</div>
                                <h3 className="font-heading font-bold text-[#222] dark:text-white text-[14px]">{act.title}</h3>
                                <div className="w-5 h-1 rounded-full mx-auto mt-2" style={{ backgroundColor: act.color }} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 9: R&D Council
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-gradient-to-b from-[#fffcf2] to-white dark:from-slate-950 dark:to-slate-900 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} className="w-full lg:w-1/2">
                            <div className="inline-flex items-center gap-2 bg-[#ef4225]/10 text-[#ef4225] font-heading font-bold uppercase tracking-wider text-xs px-5 py-2 rounded-full mb-4">
                                <FlaskConical className="w-4 h-4" /> Quality Assurance
                            </div>
                            <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-6">
                                R&D <span className="text-[#ef4225]">Council</span> Oversight 🔬
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed mb-5">
                                Zeeque Preschool&apos;s integrated and holistic approach to learning is overseen by the <strong className="text-[#222] dark:text-white">Research and Development Council</strong>, ensuring that children receive the best possible educational experience. The curriculum is continuously updated based on the latest research in early childhood education.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { title: "Continuous Research", desc: "Latest ECCE methodologies", emoji: "📊" },
                                    { title: "Expert Review", desc: "Child psychology experts", emoji: "🧑‍🔬" },
                                    { title: "Field Testing", desc: "Practical classroom validation", emoji: "✅" },
                                    { title: "Annual Updates", desc: "Curriculum refinement cycle", emoji: "🔄" },
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
                                <Image src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop" alt="Research and development" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#ef4225]/30 to-transparent" />
                            </div>
                            <div className="absolute -bottom-5 -right-3 bg-[#ef4225] text-white rounded-2xl px-5 py-3 shadow-xl z-20 flex items-center gap-2">
                                <FlaskConical className="w-5 h-5" />
                                <span className="font-heading font-bold text-sm">Proven Curriculum</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 10: Values & Life Skills
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-[#fbaf01]/10 text-[#fbaf01] font-heading font-bold uppercase tracking-wider text-xs px-5 py-2 rounded-full mb-4">
                            <Crown className="w-4 h-4" /> Beyond Academics
                        </div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Values & <span className="text-[#fbaf01]">Life Skills</span> 🌟
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-3xl mx-auto">Our curriculum goes beyond traditional learning by instilling values and life skills that shape confident, responsible leaders.</p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
                        {[
                            { title: "Good Manners", emoji: "🙏", color: "#0052ff" },
                            { title: "Confidence", emoji: "💪", color: "#fbaf01" },
                            { title: "Independence", emoji: "🦋", color: "#7c3aed" },
                            { title: "Leadership", emoji: "👑", color: "#ef4225" },
                            { title: "Responsibility", emoji: "🎯", color: "#0fb85c" },
                            { title: "Sharing & Caring", emoji: "🤝", color: "#e83e8c" },
                        ].map((v, i) => (
                            <motion.div key={v.title} custom={i} variants={fadeUp}
                                className="bg-white dark:bg-slate-800 rounded-[24px] p-5 border-2 border-gray-100 dark:border-slate-700 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">{v.emoji}</div>
                                <h3 className="font-heading font-bold text-[#222] dark:text-white text-sm">{v.title}</h3>
                                <div className="w-6 h-1 rounded-full mx-auto mt-2" style={{ backgroundColor: v.color }} />
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
                        className="mt-12 bg-gradient-to-r from-[#fbaf01]/5 to-[#e83e8c]/5 dark:from-slate-800 dark:to-slate-800 rounded-[28px] p-8 border border-[#fbaf01]/10 dark:border-slate-700">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="text-6xl">🧒</div>
                            <div>
                                <h3 className="font-heading font-bold text-[#222] dark:text-white text-xl mb-2">Building Tomorrow&apos;s Leaders Today</h3>
                                <p className="text-gray-600 dark:text-gray-300 font-body text-[15px] leading-relaxed">
                                    Through imaginative plays and creative activities, we refine the cultural and artistic talents of children, equipping them with a diverse set of life skills. Our curriculum nurtures not just academic knowledge but the character traits that define great individuals — from empathy to resilience, from curiosity to courage.
                                </p>
                            </div>
                        </div>
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
                            Give Your Child the <span className="text-primary">Best Curriculum</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-xl mx-auto leading-relaxed mb-10">
                            Experience a curriculum that&apos;s been refined over 12+ years covering 50+ learning centers, backed by dedicated R&D and loved by 5000+ families.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/enroll" className="flex items-center gap-2 bg-[#ffb606] text-white px-10 py-4 rounded-2xl font-heading font-bold text-lg hover:bg-[#ffa000] shadow-[4px_4px_0_0_#ef4225] hover:shadow-[2px_2px_0_0_#ef4225] hover:translate-y-[2px] hover:translate-x-[2px] transition-all">
                                Enroll Now 🎉 <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                            </Link>
                            <Link href="/programs" className="flex items-center gap-2 bg-white dark:bg-slate-800 text-[#222] dark:text-white px-10 py-4 rounded-2xl font-heading font-bold text-lg border-2 border-gray-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-all">
                                Our Programs 📚
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
