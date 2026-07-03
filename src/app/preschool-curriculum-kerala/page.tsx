"use client";

import Image from "next/image";
import Link from "next/link";

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



export default function CurriculumPage() {

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
                            <span className="font-semibold text-yellow-300">Curriculum</span>
                        </div>

                        {/* Heading */}
                        <h1 className="font-heading font-extrabold text-white text-3xl md:text-5xl lg:text-[52px] max-w-5xl mx-auto leading-[1.1] mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                            Islamic Montessori Curriculum <br className="hidden md:block" /> For Holistic Growth
                        </h1>

                        {/* Description */}
                        <p className="font-body font-medium text-white text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] bg-black/10 px-6 py-3 rounded-2xl backdrop-blur-[2px]">
                            A beautifully blended curriculum nurturing physical, emotional, and intellectual development alongside timeless spiritual wisdom.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 2: Curriculum Overview
               ══════════════════════════════════ */}
            <section className="py-10 md:py-12 lg:py-14 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full border-4 border-dashed border-[#EF4225]/10 hidden xl:block" />
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} className="w-full lg:w-1/2">
                            <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-6">
                                Nurturing Every Aspect of <span className="text-[#EF4225]">Growth</span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed mb-5">
                                Below the age of six, children demonstrate advanced pretend play, symbolic thought, categorization, reasoning, and problem-solving abilities, marking the preschool years as a phase of rapid development. Our curriculum, rooted in engaging activities that spark curiosity, is designed to nurture <strong className="text-[#222] dark:text-white">every aspect of a child&apos;s growth</strong> — including their physical, emotional, and intellectual development, creativity, language skills, and social interactions.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-[16px] leading-relaxed mb-6">
                                It places a strong emphasis on refining the child&apos;s language skills through active learning and engagement in a vibrant, cheerful environment.
                            </p>

                            <div className="space-y-3 mb-6">
                                {[
                                    { emoji: "🎯", text: "Fosters curiosity, interaction, and exploration in every child" },
                                    { emoji: "🧪", text: "Sensory-integrated sessions targeting senses, memory, and observation" },
                                    { emoji: "🎲", text: "Edutainment games developing gross and fine motor skills" },
                                ].map((item) => (
                                    <div key={item.text} className="flex items-start gap-3 bg-[#EF4225]/5 dark:bg-slate-800 rounded-2xl p-4 border border-[#EF4225]/10 dark:border-slate-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                                        <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                                        <p className="text-gray-600 dark:text-gray-300 font-body text-[15px] leading-relaxed">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} className="w-full lg:w-1/2 relative">
                            <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700">
                                <Image
                                    src="/images/gallery/actiivites/659cf71996662425490851jpeg.jpg"
                                    alt="Children exploring hands-on educational activities in a colourful classroom at ZeeQue Preschool in Kerala."
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className="absolute -bottom-5 -left-5 bg-[#EF4225] text-white rounded-2xl px-6 py-3 shadow-xl z-20 flex items-center gap-2">
                                <span className="font-heading font-bold text-sm">R&D Backed</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </section>

            {/* ══════════════════════════════════
                SECTION 3: Developmental Domains
               ══════════════════════════════════ */}
            <section className="py-10 md:py-12 lg:py-14 bg-[#fffcf2] dark:bg-slate-950 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Six Developmental <span className="text-[#e83e8c]">Domains</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-3xl mx-auto leading-relaxed">
                            Our ECCE curriculum addresses all six domains of early childhood development, ensuring children grow into well-rounded individuals ready for lifelong success.
                        </p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Cognitive Development", desc: "Problem-solving, logical thinking, scientific curiosity, memory, and observation skills through hands-on exploration and sensory activities.", icon: Brain, color: "#3FB7E5", emoji: "🧠" },
                            { title: "Language & Literacy", desc: "Trilingual education in Arabic, English, and Malayalam through speaking, reading, writing, rhymes, storytelling, and audio-visual lessons.", icon: Languages, color: "#EF4225", emoji: "🗣️" },
                            { title: "Physical Development", desc: "Gross and fine motor skill development through outdoor play, edutainment games, sports, yoga, and hands-on craft activities.", icon: Rocket, color: "#0fb85c", emoji: "💪" },
                            { title: "Social & Emotional", desc: "Teamwork, sharing, caring, empathy, and emotional regulation through group activities, role-play, and collaborative projects.", icon: Heart, color: "#e83e8c", emoji: "💖" },
                            { title: "Creative & Artistic", desc: "Imagination, artistic expression, and creative thinking through art, music, drama, puppetry, origami, and clay modelling.", icon: Palette, color: "#fbaf01", emoji: "🎨" },
                            { title: "Spiritual & Moral", desc: "Islamic values, Quran recitation, daily Adhkar, character building with good manners, confidence, independence, and leadership.", icon: BookHeart, color: "#ef4225", emoji: "📖" },
                        ].map((d, i) => (
                            <motion.div key={d.title} custom={i} variants={fadeUp}
                                className="bg-white dark:bg-slate-800 rounded-[28px] p-7 border-2 border-gray-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">

                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm" style={{ background: `linear-gradient(135deg, ${d.color}20, ${d.color}10)` }}>
                                    <d.icon className="w-7 h-7" style={{ color: d.color }} />
                                </div>
                                <h3 className="font-heading font-bold text-[#222] dark:text-white text-lg mb-2">{d.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 font-body text-[15px] leading-relaxed">{d.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </section>

            {/* ══════════════════════════════════
                SECTION 4: Learning Areas — Detailed Grid
               ══════════════════════════════════ */}
            <section className="py-10 lg:py-14 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Key Learning <span className="text-[#fbaf01]">Areas</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-3xl mx-auto">Our curriculum covers a wide spectrum of learning areas, each carefully designed to be age-appropriate and engaging.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}
                            className="bg-gradient-to-br from-[#3FB7E5]/5 to-[#EF4225]/5 dark:from-slate-800 dark:to-slate-800 rounded-[28px] p-8 border-2 border-[#3FB7E5]/15 dark:border-slate-700 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                            <h3 className="font-heading font-extrabold text-[#222] dark:text-white text-2xl mb-4">Language & Communication</h3>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-[16px] leading-relaxed mb-5">
                                Children are trained to communicate, read, and write in three languages — Arabic, English, and Malayalam. Our approach combines phonics, storytelling, and conversational practice for natural language acquisition.
                            </p>
                            <ul className="space-y-2">
                                {["Phonics & letter recognition", "Storytelling & narrative skills", "Rhyme time & musical language", "Conversational fluency in 3 languages", "Reading readiness & pre-writing skills"].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-body text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-[#3FB7E5] flex-shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}
                            className="bg-gradient-to-br from-[#0fb85c]/5 to-[#fbaf01]/5 dark:from-slate-800 dark:to-slate-800 rounded-[28px] p-8 border-2 border-[#0fb85c]/15 dark:border-slate-700 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
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

                </div>
            </section>






            {/* ══════════════════════════════════
                SECTION 7: Curriculum Stages (LZQ/MZQ/UZQ)
               ══════════════════════════════════ */}
            <section className="py-10 lg:py-14 bg-[#fffcf2] dark:bg-slate-950 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Curriculum Across <span className="text-[#0fb85c]">3 Stages</span>
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
                                stage: "MZQ", name: "Middle ZeeQue", age: "Age 4–5", color: "#3FB7E5", emoji: "🌿", year: "Year 2",
                                areas: ["Reading readiness & phonics", "Number concepts & simple math", "Creative arts & expression", "Quran memorization progress", "Structured theme-based learning", "Teamwork & collaborative projects"],
                            },
                            {
                                stage: "UZQ", name: "Upper ZeeQue", age: "Age 5–6", color: "#0fb85c", emoji: "🌳", year: "Year 3",
                                areas: ["Advanced literacy & writing", "Critical thinking & reasoning", "Scientific exploration", "Juz' memorization completion", "Leadership & independence", "School readiness preparation"],
                            },
                        ].map((s) => (
                            <motion.div key={s.stage} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                                className="bg-white dark:bg-slate-800 rounded-[28px] p-7 border-2 border-gray-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="font-heading font-extrabold text-2xl" style={{ color: s.color }}>{s.stage}</span>
                                    <span className="bg-gray-100 dark:bg-slate-700 rounded-full px-3 py-1 font-heading font-bold text-xs text-gray-500 dark:text-gray-400">{s.year}</span>
                                </div>
                                <h4 className="font-heading font-bold text-[#222] dark:text-white text-xl mb-1">{s.name.replace('ZeeQue', 'Zeeque Preschool')}</h4>
                                <p className="font-heading font-bold text-sm mb-5" style={{ color: s.color }}>{s.age}</p>
                                <div className="bg-gray-50 dark:bg-slate-700 rounded-xl p-4 space-y-2">
                                    <p className="font-heading font-bold text-xs text-gray-400 dark:text-gray-500 mb-1">Curriculum Focus</p>
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

            </section>


            {/* ══════════════════════════════════
                SECTION 9: R&D Council
               ══════════════════════════════════ */}
            <section className="py-10 lg:py-14 bg-white dark:bg-slate-950 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} className="w-full lg:w-1/2">
                            <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-6">
                                R&D <span className="text-[#ef4225]">Council</span> Oversight
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
                                        <h4 className="font-heading font-bold text-[#222] dark:text-white text-sm mb-0.5">{r.title}</h4>
                                        <p className="text-gray-500 dark:text-gray-400 font-body text-xs">{r.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} className="w-full lg:w-1/2 relative">
                            <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700">
                                <Image
                                    src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop"
                                    alt="Educators researching the latest early childhood education methodologies for ZeeQue Preschool in Kerala."
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className="absolute -bottom-5 -right-3 bg-[#ef4225] text-white rounded-2xl px-5 py-3 shadow-xl z-20 flex items-center gap-2">
                                <span className="font-heading font-bold text-sm">Proven Curriculum</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>




            <section className="py-10 lg:py-14 bg-white dark:bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-10 w-24 h-24 rounded-full border-4 border-dashed border-[#fbaf01]/15 hidden lg:block" />
                    <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-[#0fb85c]/5 hidden lg:block" />
                </div>

                <div className="max-w-[800px] mx-auto px-4 xl:px-8 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Give Your Child the <span className="text-primary">Best Curriculum</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-xl mx-auto leading-relaxed mb-10">
                            Experience a curriculum that&apos;s been refined over 12+ years covering 50+ learning centers, backed by dedicated R&D and loved by 5000+ families.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="https://admission.zeeque.in/" className="flex items-center justify-center gap-2 bg-[#FFCB05] text-[#222] px-9 py-3.5 rounded-full font-heading font-bold text-base shadow-[4px_4px_0_0_#0060D6] hover:shadow-[2px_2px_0_0_#0060D6] hover:translate-y-[2px] hover:translate-x-[2px] transition-all whitespace-nowrap w-full sm:w-auto relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                                <span className="relative z-10">Enquiry Now</span>
                                <ArrowRight className="w-4 h-4 stroke-[2.5] relative z-10" />
                            </Link>
                            <Link href="/preschool-programs-kerala" className="flex items-center gap-2 bg-white dark:bg-slate-800 text-[#222] dark:text-white px-10 py-4 rounded-2xl font-heading font-bold text-lg border-2 border-gray-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-all">
                                Our Programs
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
