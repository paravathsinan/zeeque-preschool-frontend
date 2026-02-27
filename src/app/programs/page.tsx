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
    Brain, Shield, School, Clock, Calendar, CheckCircle2,
    Sparkles, BookHeart, Globe, HandHeart, Megaphone, Target,
    TreePine, Flame, Palette, Music, Puzzle, Eye,
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

const WavyDivider = ({ fill = "white", darkFill = "dark:fill-slate-900" }: { fill?: string; darkFill?: string }) => (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto">
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill={fill} className={darkFill} />
        </svg>
    </div>
);

export default function ProgramsPage() {
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
                SECTION 1: Hero
               ══════════════════════════════════ */}
            <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-[10%] w-20 h-20 rounded-full bg-[#7c3aed]/10 animate-pulse" />
                    <div className="absolute top-24 right-[12%] w-16 h-16 rounded-full bg-[#fbaf01]/10 animate-pulse delay-500" />
                    <div className="absolute bottom-16 left-[25%] w-14 h-14 rounded-full bg-[#0fb85c]/10 animate-pulse delay-700" />
                    <div className="absolute top-1/3 right-[5%] w-28 h-28 rounded-full border-4 border-dashed border-[#e83e8c]/10" />
                    <div className="absolute top-16 left-[45%] text-6xl opacity-[0.06]">🎒</div>
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <div className="flex items-center justify-center gap-2 mb-6 font-body text-sm">
                            <Link href="/about" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">About</Link>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                            <span className="text-primary font-semibold">Programs</span>
                        </div>
                        <h1 className="font-heading font-extrabold text-[#222] dark:text-white text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
                            Our{" "}<span className="relative inline-block"><span className="text-[#7c3aed]">Programs</span><svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none"><path d="M2 8C40 2 80 2 100 6C120 10 160 10 198 4" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" /></svg></span> 🎓
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            From our flagship 3-Year Kindergarten to teacher training diplomas and parent empowerment — Zeeque Preschool offers a complete ecosystem of programs for children, educators, and families.
                        </p>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-8 flex flex-wrap justify-center gap-3">
                            {["👶 3 Year KG", "🎓 Diploma in ECCE", "📚 Grade Stream", "👩‍🏫 TTGS", "👪 PEP"].map((tag) => (
                                <span key={tag} className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-full px-4 py-2 font-heading font-bold text-xs text-gray-600 dark:text-gray-300 shadow-sm">{tag}</span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
                <WavyDivider />
            </section>

            {/* ══════════════════════════════════
                SECTION 2: Programs Overview Cards
               ══════════════════════════════════ */}
            <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 right-[5%] text-8xl opacity-[0.04] hidden lg:block">📚</div>
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
                        <div className="text-5xl mb-4">🗺️</div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Program <span className="text-[#7c3aed]">Ecosystem</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-2xl mx-auto">A holistic learning ecosystem covering every stakeholder — children, teachers, and parents.</p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "3 Year KG", subtitle: "Ages 3-6", desc: "Our flagship three-year kindergarten journey through LZQ, MZQ, and UZQ stages.", emoji: "👶", color: "#0fb85c", icon: Baby, tag: "For Children" },
                            { title: "Grade Stream", subtitle: "Std I-IV", desc: "Zeeque Preschool English Medium Primary Madrasa — extending our quality education to primary grades.", emoji: "📖", color: "#0052ff", icon: School, tag: "For Students" },
                            { title: "Diploma in ECCE", subtitle: "6 Months / 35 Days", desc: "Comprehensive preschool teacher training programme with residential options.", emoji: "🎓", color: "#7c3aed", icon: GraduationCap, tag: "For Teachers" },
                            { title: "TTGS", subtitle: "Residential", desc: "Teacher Training for Grade Level — residential training for madrasa primary teachers.", emoji: "👩‍🏫", color: "#e83e8c", icon: BookOpen, tag: "For Teachers" },
                            { title: "PEP", subtitle: "Ongoing", desc: "Parent Empowerment Programme — keeping parents informed and involved in their child's growth.", emoji: "👪", color: "#fbaf01", icon: HandHeart, tag: "For Parents" },
                        ].map((p, i) => (
                            <motion.div key={p.title} custom={i} variants={fadeUp}
                                className="bg-white dark:bg-slate-800 rounded-[28px] p-7 border-2 border-gray-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                                <div className="absolute top-2 right-2 text-5xl opacity-10 group-hover:opacity-20 transition-opacity">{p.emoji}</div>

                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-xs font-heading font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: `${p.color}15`, color: p.color }}>{p.tag}</span>
                                </div>
                                <div className="text-4xl mb-3">{p.emoji}</div>
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm" style={{ background: `linear-gradient(135deg, ${p.color}20, ${p.color}10)` }}>
                                    <p.icon className="w-7 h-7" style={{ color: p.color }} />
                                </div>
                                <h3 className="font-heading font-extrabold text-[#222] dark:text-white text-xl mb-1">{p.title}</h3>
                                <p className="font-heading font-bold text-sm mb-3" style={{ color: p.color }}>{p.subtitle}</p>
                                <p className="text-gray-500 dark:text-gray-400 font-body text-[15px] leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <WavyDivider fill="#fffcf2" darkFill="dark:fill-slate-950" />
            </section>

            {/* ══════════════════════════════════
                SECTION 3: 3 Year KG — Deep Dive
               ══════════════════════════════════ */}
            <section className="py-16 md:py-20 lg:py-28 bg-[#fffcf2] dark:bg-slate-950 relative overflow-hidden" id="3-year-kg">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 left-[5%] text-8xl opacity-[0.04] hidden lg:block">🧒</div>
                    <div className="absolute bottom-20 right-[8%] w-20 h-20 rounded-full border-4 border-dashed border-[#0fb85c]/10 hidden xl:block" />
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} className="w-full lg:w-1/2">
                            <div className="inline-flex items-center gap-2 bg-[#0fb85c]/10 text-[#0fb85c] font-heading font-bold uppercase tracking-wider text-xs px-5 py-2 rounded-full mb-4">
                                <Baby className="w-4 h-4" /> Flagship Program
                            </div>
                            <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-6">
                                3 Year <span className="text-[#0fb85c]">Kindergarten</span> 🌱
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed mb-5">
                                Zeeque Preschool&apos;s <strong className="text-[#222] dark:text-white">three-year Kindergarten package</strong> is designed for children aged 3 to 6, taking them through a carefully structured journey across three progressive stages — each building on the previous to create a strong foundation for lifelong learning.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-[16px] leading-relaxed mb-8">
                                Our play-based, theme-driven curriculum nurtures creativity, collaboration, and joyful learning. With three dedicated mentors per classroom and an exclusive, research-backed curriculum, every child receives personalized attention throughout their journey.
                            </p>

                            <div className="space-y-3">
                                {[
                                    "Play-based, stress-free learning environment",
                                    "Theme-based weekly curriculum modules",
                                    "Trilingual education — Arabic, English, Malayalam",
                                    "Quran recitation & Islamic values integration",
                                    "3 mentors per classroom for personalized care",
                                    "Sensory play with sand pit, splash pool, and ponds",
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#0fb85c] flex-shrink-0" />
                                        <p className="text-gray-600 dark:text-gray-300 font-body text-[15px]">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} className="w-full lg:w-1/2 relative">
                            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700">
                                <Image src="https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?q=80&w=800&auto=format&fit=crop" alt="Children in kindergarten" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0fb85c]/30 to-transparent" />
                            </div>
                            <div className="absolute -bottom-5 -left-3 bg-[#0fb85c] text-white rounded-2xl px-5 py-3 shadow-xl z-20 flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                <div>
                                    <div className="font-heading font-extrabold text-lg">Ages 3–6</div>
                                    <div className="text-white/80 text-xs font-body">3-Year Journey</div>
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border-4 border-dashed border-[#fbaf01]/30 pointer-events-none" />
                        </motion.div>
                    </div>

                    {/* LZQ / MZQ / UZQ Cards */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mt-20">
                        <h3 className="font-heading font-extrabold text-[#222] dark:text-white text-2xl md:text-3xl text-center mb-4">The Three Stages of Growth 🌈</h3>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg text-center max-w-2xl mx-auto mb-12">Each stage is thoughtfully designed to match the developmental needs of the child&apos;s age group.</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    stage: "LZQ", name: "Lower Zeeque Preschool", age: "Age 3–4", color: "#fbaf01", emoji: "🌼", year: "Year 1",
                                    desc: "Introduction to the world of learning through sensory exploration, basic social skills, and gentle guided play. Children discover letters, colors, shapes, and begin their Quran journey.",
                                    skills: ["Sensory exploration", "Basic motor skills", "Color & shape recognition", "Social interaction basics", "First Quran exposure"],
                                },
                                {
                                    stage: "MZQ", name: "Middle Zeeque Preschool", age: "Age 4–5", color: "#0052ff", emoji: "🌿", year: "Year 2",
                                    desc: "Building on foundations with structured theme-based activities. Children develop reading readiness, numerical concepts, creative expression, and deeper Islamic values understanding.",
                                    skills: ["Reading readiness", "Number concepts", "Creative arts", "Teamwork & sharing", "Quran memorization"],
                                },
                                {
                                    stage: "UZQ", name: "Upper Zeeque Preschool", age: "Age 5–6", color: "#0fb85c", emoji: "🌳", year: "Year 3",
                                    desc: "Preparing for the transition to formal schooling. Advanced literacy, critical thinking, leadership skills, and complete Juz' memorization mark this stage of confident readiness.",
                                    skills: ["Advanced literacy", "Critical thinking", "Leadership skills", "School readiness", "Juz' completion"],
                                },
                            ].map((s) => (
                                <div key={s.stage} className="bg-white dark:bg-slate-800 rounded-[28px] p-7 border-2 border-gray-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                                    <div className="absolute top-2 right-2 text-5xl opacity-10 group-hover:opacity-20 transition-opacity">{s.emoji}</div>

                                    <div className="text-4xl mb-3">{s.emoji}</div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="font-heading font-extrabold text-2xl" style={{ color: s.color }}>{s.stage}</span>
                                        <span className="bg-gray-100 dark:bg-slate-700 rounded-full px-3 py-1 font-heading font-bold text-xs text-gray-500 dark:text-gray-400">{s.year}</span>
                                    </div>
                                    <h4 className="font-heading font-bold text-[#222] dark:text-white text-xl mb-1">{s.name}</h4>
                                    <p className="font-heading font-bold text-sm mb-4" style={{ color: s.color }}>{s.age}</p>
                                    <p className="text-gray-500 dark:text-gray-400 font-body text-[15px] leading-relaxed mb-5">{s.desc}</p>

                                    <div className="bg-gray-50 dark:bg-slate-700 rounded-xl p-4 space-y-2">
                                        <p className="font-heading font-bold text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Key Skills</p>
                                        {s.skills.map((sk) => (
                                            <div key={sk} className="flex items-center gap-2 text-sm font-body text-gray-500 dark:text-gray-400">
                                                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: s.color }} /> {sk}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
                <WavyDivider fill="white" darkFill="dark:fill-slate-900" />
            </section>

            {/* ══════════════════════════════════
                SECTION 4: Grade Stream
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 right-[10%] text-8xl opacity-[0.04] hidden lg:block">🏫</div>
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} className="w-full lg:w-1/2">
                            <div className="inline-flex items-center gap-2 bg-[#0052ff]/10 text-[#0052ff] font-heading font-bold uppercase tracking-wider text-xs px-5 py-2 rounded-full mb-4">
                                <School className="w-4 h-4" /> Primary Education
                            </div>
                            <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-6">
                                Grade Stream <span className="text-[#0052ff]">(I to IV)</span> 📖
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed mb-5">
                                <strong className="text-[#222] dark:text-white">Zeeque Preschool English Medium Primary Madrasa</strong> extends the Zeeque Preschool philosophy into formal primary education. Covering Grades I through IV, this program continues the seamless blend of academic excellence and Islamic values education.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-[16px] leading-relaxed mb-8">
                                Students who graduate from our KG program transition naturally into the Grade Stream, ensuring continuity in pedagogy, values integration, and personalized mentoring that Zeeque Preschool is known for.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { title: "English Medium", desc: "Complete instruction in English", emoji: "🇬🇧" },
                                    { title: "Islamic Integration", desc: "Values woven into academics", emoji: "🕌" },
                                    { title: "Grades I–IV", desc: "4-year primary education", emoji: "📚" },
                                    { title: "Trained Teachers", desc: "TTGS-certified educators", emoji: "👩‍🏫" },
                                ].map((g) => (
                                    <div key={g.title} className="bg-[#0052ff]/5 dark:bg-slate-800 rounded-2xl p-4 border border-[#0052ff]/10 dark:border-slate-700 hover:shadow-md transition-all duration-300">
                                        <div className="text-2xl mb-2">{g.emoji}</div>
                                        <h4 className="font-heading font-bold text-[#222] dark:text-white text-sm mb-0.5">{g.title}</h4>
                                        <p className="text-gray-500 dark:text-gray-400 font-body text-xs">{g.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} className="w-full lg:w-1/2 relative">
                            <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700">
                                <Image src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop" alt="Primary school classroom" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0052ff]/30 to-transparent" />
                            </div>
                            <div className="absolute -bottom-5 -right-3 bg-[#0052ff] text-white rounded-2xl px-5 py-3 shadow-xl z-20 flex items-center gap-2">
                                <School className="w-5 h-5" />
                                <span className="font-heading font-bold text-sm">Std I–IV</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 5: Teacher Training Programs (Diploma + TTGS)
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-24 bg-gradient-to-r from-[#7c3aed] via-[#e83e8c] to-[#ef4225] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-[10%] text-5xl opacity-20">🎓</div>
                    <div className="absolute bottom-10 right-[15%] text-4xl opacity-20">📖</div>
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-white mb-14">
                        <div className="text-5xl mb-5">👩‍🏫</div>
                        <h2 className="font-heading font-extrabold text-4xl md:text-5xl leading-[1.1] mb-5">Teacher Training Programs</h2>
                        <p className="font-body text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
                            Great teachers create great futures. Zeeque Preschool invests heavily in training educators with specialized programs that produce the highest quality early childhood and primary teachers.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Diploma in ECCE */}
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                            className="bg-white/10 backdrop-blur-sm rounded-[28px] p-8 border-2 border-white/20 hover:bg-white/15 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                                    <GraduationCap className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-extrabold text-white text-2xl">Diploma in ECCE</h3>
                                    <p className="text-white/70 font-body text-sm">Early Childhood Care & Education</p>
                                </div>
                            </div>
                            <p className="text-white/90 font-body text-[16px] leading-relaxed mb-6">
                                A comprehensive <strong>six-month pre-school teacher training programme</strong> that equips aspiring educators with everything they need to deliver world-class early childhood education. For selected teachers, we also offer an intensive <strong>35-day residential programme</strong>.
                            </p>
                            <div className="space-y-3 mb-6">
                                {[
                                    { label: "Duration", value: "6 Months / 35 Days (Residential)", emoji: "⏰" },
                                    { label: "Focus", value: "Pre-school teacher preparation", emoji: "🎯" },
                                    { label: "Method", value: "Classroom + hands-on practical training", emoji: "✋" },
                                    { label: "Outcome", value: "Certified ECCE educator", emoji: "🎓" },
                                ].map((d) => (
                                    <div key={d.label} className="flex items-center gap-3 text-white/80">
                                        <span className="text-lg">{d.emoji}</span>
                                        <div>
                                            <span className="font-heading font-bold text-xs text-white/60 uppercase">{d.label}: </span>
                                            <span className="font-body text-sm">{d.value}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["6 Months", "Residential", "Certified"].map((t) => (
                                    <span key={t} className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 font-heading font-bold text-xs text-white">{t}</span>
                                ))}
                            </div>
                        </motion.div>

                        {/* TTGS */}
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
                            className="bg-white/10 backdrop-blur-sm rounded-[28px] p-8 border-2 border-white/20 hover:bg-white/15 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                                    <BookOpen className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-extrabold text-white text-2xl">TTGS</h3>
                                    <p className="text-white/70 font-body text-sm">Teacher Training for Grade Level</p>
                                </div>
                            </div>
                            <p className="text-white/90 font-body text-[16px] leading-relaxed mb-6">
                                A specialized <strong>residential training programme</strong> designed specifically for English medium primary madrasa teachers. TTGS equips educators with modern teaching methodologies while maintaining strong Islamic educational values.
                            </p>
                            <div className="space-y-3 mb-6">
                                {[
                                    { label: "Format", value: "Residential intensive programme", emoji: "🏠" },
                                    { label: "For", value: "English medium primary madrasa teachers", emoji: "👩‍🏫" },
                                    { label: "Method", value: "Modern pedagogy + Islamic integration", emoji: "📚" },
                                    { label: "Outcome", value: "Grade-level certified educator", emoji: "🏅" },
                                ].map((d) => (
                                    <div key={d.label} className="flex items-center gap-3 text-white/80">
                                        <span className="text-lg">{d.emoji}</span>
                                        <div>
                                            <span className="font-heading font-bold text-xs text-white/60 uppercase">{d.label}: </span>
                                            <span className="font-body text-sm">{d.value}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["Residential", "Grade Level", "Madrasa"].map((t) => (
                                    <span key={t} className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 font-heading font-bold text-xs text-white">{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 6: PEP — Parent Empowerment
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-[5%] text-8xl opacity-[0.04] hidden lg:block">👪</div>
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} className="w-full lg:w-1/2 relative">
                            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700">
                                <Image src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=1000&auto=format&fit=crop" alt="Parents and children" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#fbaf01]/30 to-transparent" />
                            </div>
                            <div className="absolute -bottom-5 -right-3 bg-[#fbaf01] text-white rounded-2xl px-5 py-3 shadow-xl z-20 flex items-center gap-2">
                                <HandHeart className="w-5 h-5" />
                                <span className="font-heading font-bold text-sm">Family First</span>
                            </div>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} className="w-full lg:w-1/2">
                            <div className="inline-flex items-center gap-2 bg-[#fbaf01]/10 text-[#fbaf01] font-heading font-bold uppercase tracking-wider text-xs px-5 py-2 rounded-full mb-4">
                                <HandHeart className="w-4 h-4" /> Unique Initiative
                            </div>
                            <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-6">
                                Parent Empowerment <span className="text-[#fbaf01]">Programme</span> 👪
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed mb-5">
                                We have a unique system of <strong className="text-[#222] dark:text-white">Parent Empowerment Programme (PEP)</strong>. Our trainers regularly impart parent empowerment training based on a prescribed syllabus, ensuring parents are active partners in their child&apos;s educational journey.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 font-body text-[16px] leading-relaxed mb-8">
                                Parents are kept abreast of the latest in child development, health and hygiene, nutrition, and modern parenting — because we believe education doesn&apos;t stop at the school gates.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { emoji: "👶", title: "Child Development", desc: "Understanding developmental milestones and how to nurture growth at home" },
                                    { emoji: "🏥", title: "Health & Hygiene", desc: "Best practices for maintaining your child's physical well-being" },
                                    { emoji: "🥗", title: "Nutrition", desc: "Dietary guidance for optimal brain development and physical growth" },
                                    { emoji: "❤️", title: "Parenting Skills", desc: "Effective parenting strategies, communication, and positive reinforcement" },
                                    { emoji: "📋", title: "Prescribed Syllabus", desc: "Structured, regular training sessions with certified trainers" },
                                ].map((item) => (
                                    <div key={item.title} className="flex items-start gap-4 bg-[#fbaf01]/5 dark:bg-slate-800 rounded-2xl p-4 border border-[#fbaf01]/10 dark:border-slate-700 hover:shadow-md transition-all duration-300">
                                        <span className="text-2xl flex-shrink-0">{item.emoji}</span>
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
                SECTION 7: Why Our Programs Work
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-[#fffcf2] dark:bg-slate-950 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
                        <div className="text-5xl mb-4">💡</div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Why Our Programs <span className="text-[#ef4225]">Work</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-2xl mx-auto">The secret behind Zeeque Preschool&apos;s success — a holistic ecosystem approach.</p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Research-Backed", desc: "Every program is built on extensive R&D in child development and education.", emoji: "🔬", color: "#7c3aed" },
                            { title: "Trained Educators", desc: "Our own Diploma & TTGS programs create the finest teachers.", emoji: "👩‍🏫", color: "#e83e8c" },
                            { title: "Parent Partnership", desc: "PEP ensures parents are active partners in the learning journey.", emoji: "👪", color: "#fbaf01" },
                            { title: "Proven Results", desc: "12+ years, 50+ centers, and 5000+ confident graduates.", emoji: "🏆", color: "#0fb85c" },
                        ].map((w, i) => (
                            <motion.div key={w.title} custom={i} variants={fadeUp}
                                className="bg-white dark:bg-slate-800 rounded-[28px] p-7 border-2 border-gray-100 dark:border-slate-700 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                                <div className="absolute top-2 right-2 text-4xl opacity-10 group-hover:opacity-20 transition-opacity">{w.emoji}</div>
                                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{w.emoji}</div>
                                <h3 className="font-heading font-bold text-[#222] dark:text-white text-lg mb-2">{w.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 font-body text-[14px] leading-relaxed">{w.desc}</p>
                                <div className="w-6 h-1 rounded-full mx-auto mt-4" style={{ backgroundColor: w.color }} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <WavyDivider fill="white" darkFill="dark:fill-slate-900" />
            </section>

            {/* ══════════════════════════════════
                SECTION 8: CTA
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-10 w-24 h-24 rounded-full border-4 border-dashed border-[#fbaf01]/15 hidden lg:block" />
                    <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-[#0fb85c]/5 hidden lg:block" />
                </div>

                <div className="max-w-[800px] mx-auto px-4 xl:px-8 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                        <div className="text-6xl mb-6">🚀</div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Find the Right <span className="text-primary">Program</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-xl mx-auto leading-relaxed mb-10">
                            Whether you&apos;re enrolling your child, training to become an educator, or empowering yourself as a parent — Zeeque Preschool has a program for you.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="https://admission.zeeque.in/" className="flex items-center gap-2 bg-[#ffb606] text-white px-10 py-4 rounded-2xl font-heading font-bold text-lg hover:bg-[#ffa000] shadow-[4px_4px_0_0_#ef4225] hover:shadow-[2px_2px_0_0_#ef4225] hover:translate-y-[2px] hover:translate-x-[2px] transition-all">
                                Enroll Now 🎉 <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                            </Link>
                            <Link href="/features" className="flex items-center gap-2 bg-white dark:bg-slate-800 text-[#222] dark:text-white px-10 py-4 rounded-2xl font-heading font-bold text-lg border-2 border-gray-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-all">
                                Our Features ✨
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
