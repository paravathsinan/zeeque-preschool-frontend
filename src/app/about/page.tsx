"use client";

import Image from "next/image";
import Link from "next/link";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useInView, Variants } from "framer-motion";
import {
    Heart,
    BookOpen,
    Palette,
    Users,
    Sun,
    Music,
    TreePine,
    Sparkles,
    Shield,
    Star,
    GraduationCap,
    ArrowRight,
    Clock,
    Home,
    ChevronRight,
    Droplets,
    Monitor,
    Volleyball,
    Theater,
    Origami,
    PartyPopper,
    Trophy,
    Tent,
    Flower2,
    Baby,
    HandHeart,
    Eye,
    Award,
    MapPin,
} from "lucide-react";
import { useRef, useEffect, useState } from "react";

/* ──────────────────────────────────────────────
   Animated Counter Hook
   ────────────────────────────────────────────── */
function useCounter(end: number, duration: number = 2000) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const step = end / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [inView, end, duration]);

    return { count, ref };
}

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */
const values = [
    { icon: Heart, title: "Islamic Values", description: "Shaping children's lives in accordance with Islamic values through child-friendly mentoring and guidance.", color: "#e83e8c" },
    { icon: Sparkles, title: "Creativity", description: "Encouraging imagination and creative expression through art, play, and hands-on exploration every single day.", color: "#fbaf01" },
    { icon: Users, title: "Collaboration", description: "Building teamwork and social skills through group activities, shared projects, and collaborative learning.", color: "#0fb85c" },
    { icon: Sun, title: "Joyful Learning", description: "Making education fun and engaging so children develop a lifelong love for learning and discovery.", color: "#0052ff" },
    { icon: Shield, title: "Safety First", description: "Supervised single-door entry/exit, secure fenced play areas, and trained staff ensuring complete child safety.", color: "#ef4225" },
    { icon: BookOpen, title: "Holistic Growth", description: "Nurturing cognitive, emotional, physical, and social development through a well-rounded ECCE curriculum.", color: "#7c3aed" },
];

const dailySessions = [
    { time: "9:00", title: "Welcome Circle", description: "Warm greetings and settling into a joyful morning routine", icon: Sun, color: "#fbaf01" },
    { time: "9:30", title: "General Assembly", description: "Coming together for interactive group activities and sharing", icon: Users, color: "#0052ff" },
    { time: "10:00", title: "Meditation & Warm-up", description: "Calming mindfulness exercises and energizing physical activity", icon: Heart, color: "#e83e8c" },
    { time: "10:30", title: "Rhyme Time", description: "Learning through songs, rhymes, and musical expression", icon: Music, color: "#0fb85c" },
    { time: "11:00", title: "Story Session", description: "Imaginative storytelling that sparks creativity and language skills", icon: BookOpen, color: "#7c3aed" },
    { time: "11:30", title: "Outdoor Activities", description: "Free play, sports, and nature exploration in safe outdoor spaces", icon: TreePine, color: "#ef4225" },
];

const facilities = [
    { title: "Child-Friendly Classrooms", description: "Spacious, colorful rooms with ample space and age-appropriate learning materials", icon: Home, color: "#ef4225" },
    { title: "Sand Pit", description: "Sensory play area for creative exploration and tactile development", icon: Sparkles, color: "#fbaf01" },
    { title: "Splash Pool", description: "Safe water play area for fun-filled aquatic activities and cooling off", icon: Droplets, color: "#0052ff" },
    { title: "Multi-Media Support", description: "High-tech classrooms equipped with multimedia for interactive learning", icon: Monitor, color: "#7c3aed" },
    { title: "Outdoor Play Areas", description: "Two fenced play areas with climbing structures, sand areas, and wheel toy paths", icon: Volleyball, color: "#0fb85c" },
    { title: "Mud Pond", description: "Natural sensory exploration area for hands-on, messy, joyful learning", icon: Flower2, color: "#e83e8c" },
];

const activities = [
    { title: "Puppetry & Theater", icon: Theater, color: "#e83e8c" },
    { title: "Origami Workshops", icon: Origami, color: "#0052ff" },
    { title: "Clay Modeling", icon: Palette, color: "#fbaf01" },
    { title: "Monthly Sports Day", icon: Trophy, color: "#0fb85c" },
    { title: "Nature Camps", icon: Tent, color: "#7c3aed" },
    { title: "ZeeQue Fest", icon: PartyPopper, color: "#ef4225" },
    { title: "Festival Celebrations", icon: Sparkles, color: "#e83e8c" },
    { title: "Exciting Picnics", icon: MapPin, color: "#0052ff" },
];

const stats = [
    { value: 12, suffix: "+", label: "Years of Experience", color: "#ef4225" },
    { value: 50, suffix: "+", label: "Learning Centers", color: "#0fb85c" },
    { value: 5000, suffix: "+", label: "Happy Students", color: "#0052ff" },
    { value: 200, suffix: "+", label: "Trained Teachers", color: "#fbaf01" },
];

/* ──────────────────────────────────────────────
   Animations
   ────────────────────────────────────────────── */
const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
    }),
};

const stagger: Variants = {
    visible: { transition: { staggerChildren: 0.1 } },
};

/* ──────────────────────────────────────────────
   Stat Card Component
   ────────────────────────────────────────────── */
function StatCard({ value, suffix, label, color }: { value: number; suffix: string; label: string; color: string }) {
    const { count, ref } = useCounter(value, 2000);
    return (
        <div ref={ref} className="text-center">
            <div className="font-heading font-extrabold text-5xl md:text-6xl mb-2" style={{ color }}>
                {count}{suffix}
            </div>
            <div className="font-body text-gray-600 dark:text-gray-300 text-lg">{label}</div>
        </div>
    );
}

/* ══════════════════════════════════════════════
   ABOUT PAGE
   ══════════════════════════════════════════════ */
export default function AboutPage() {
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
                {/* Background decorations */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-[10%] w-20 h-20 rounded-full bg-[#fbaf01]/10 animate-pulse" />
                    <div className="absolute top-20 right-[15%] w-14 h-14 rounded-full bg-[#e83e8c]/10 animate-pulse delay-500" />
                    <div className="absolute bottom-10 left-[20%] w-16 h-16 rounded-full bg-[#0fb85c]/10 animate-pulse delay-1000" />
                    <div className="absolute top-1/2 right-[8%] w-24 h-24 rounded-full border-4 border-dashed border-[#ef4225]/10" />
                    <div className="absolute bottom-20 right-[25%] w-10 h-10 rounded-full bg-[#0052ff]/10 animate-pulse delay-700" />
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        {/* Breadcrumb */}
                        <div className="flex items-center justify-center gap-2 mb-6 font-body text-sm">
                            <Link href="/about" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">About</Link>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                            <span className="text-primary font-semibold">About Us</span>
                        </div>

                        <h1 className="font-heading font-extrabold text-[#222222] dark:text-white text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
                            About{" "}
                            <span className="relative inline-block">
                                <span className="text-primary">ZeeQue</span>
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                                    <path d="M2 8C40 2 80 2 100 6C120 10 160 10 198 4" stroke="#fbaf01" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            A unique and state-of-the-art Early Childhood Care and Education program where little minds grow bright through play, creativity, and love.
                        </p>
                    </motion.div>
                </div>

                {/* Wavy divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1440 100" fill="none" className="w-full h-auto">
                        <path d="M0,60 C360,100 720,20 1080,60 C1260,80 1380,40 1440,60 L1440,100 L0,100 Z" fill="white" className="dark:fill-slate-900" />
                    </svg>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 2: Who We Are
               ══════════════════════════════════ */}
            <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-20 right-10 w-32 h-32 rounded-full border-4 border-dashed border-[#fbaf01]/10 pointer-events-none hidden xl:block" />
                <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-[#e83e8c]/5 pointer-events-none hidden xl:block" />

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16 xl:gap-24">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mb-10 lg:mb-0"
                    >
                        <span className="text-[#e83e8c] font-heading font-bold uppercase tracking-wider text-sm mb-3 flex items-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            Who We Are
                        </span>
                        <h2 className="font-heading font-extrabold text-[#222222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-6">
                            ZeeQue Preschool{" "}
                            <span className="text-primary">Network</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed mb-5">
                            ZeeQue Preschool is a unique and state-of-the-art <strong className="text-[#222] dark:text-white">Early Childhood Care and Education</strong> program specially designed for children between <strong className="text-primary">3 to 6 years</strong> of age, spanning three developmental stages:
                        </p>

                        {/* Age stages */}
                        <div className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start">
                            {[
                                { label: "LZQ", age: "3–4 yrs", desc: "Lower", color: "#0fb85c" },
                                { label: "MZQ", age: "4–5 yrs", desc: "Middle", color: "#0052ff" },
                                { label: "UZQ", age: "5–6 yrs", desc: "Upper", color: "#e83e8c" },
                            ].map((stage) => (
                                <div
                                    key={stage.label}
                                    className="flex items-center gap-3 bg-white dark:bg-slate-800 border-2 border-gray-100 dark:border-slate-700 rounded-2xl px-5 py-3 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center font-heading font-extrabold text-white text-sm" style={{ backgroundColor: stage.color }}>
                                        {stage.label}
                                    </div>
                                    <div>
                                        <div className="font-heading font-bold text-[#222] dark:text-white text-sm">{stage.desc}</div>
                                        <div className="text-gray-500 dark:text-gray-400 text-xs font-body">{stage.age}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg leading-relaxed mb-8">
                            We draw upon a diverse range of educational approaches, methods, and techniques — all geared towards nurturing creativity, collaboration, and joyful learning in a safe, Islamic-values-based environment.
                        </p>
                    </motion.div>

                    {/* Right Image Collage */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="grid grid-cols-2 gap-4 sm:gap-6 relative z-10">
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl transform transition-transform hover:scale-105 hover:-rotate-1 duration-300">
                                <Image src="https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?q=80&w=800&auto=format&fit=crop" alt="Children in classroom" fill className="object-cover" />
                            </div>
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl transform transition-transform hover:scale-105 hover:rotate-1 duration-300 translate-y-6">
                                <Image src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop" alt="Children reading" fill className="object-cover" />
                            </div>
                            <div className="relative col-span-2 aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl group">
                                <Image src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?q=80&w=1200&auto=format&fit=crop" alt="Kids playing together" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                                    <span className="text-white font-heading font-bold text-lg">Where Every Child Shines ✨</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -bottom-4 -left-4 bg-[#fbaf01] text-white rounded-2xl px-5 py-3 shadow-lg z-20 hidden sm:flex items-center gap-2 animate-bounce">
                            <Star className="w-5 h-5 fill-white" />
                            <span className="font-heading font-bold text-sm">Since 2013</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 3: Our Approach
               ══════════════════════════════════ */}
            <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-[#fffcf2] to-white dark:from-slate-950 dark:to-slate-900 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
                    <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
                        <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="white" className="dark:fill-slate-900" />
                    </svg>
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <span className="text-[#0fb85c] font-heading font-bold uppercase tracking-wider text-sm mb-3 block">Our Approach</span>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Theme-Based, <span className="text-[#fbaf01]">Play Way</span> Method
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-3xl mx-auto leading-relaxed">
                            At ZeeQue, children learn and acquire life skills through play at their own pace. No formal teaching — just fun-filled, creative, and engaging sessions that focus on personality development and overall well-being.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Learn Through Play",
                                description: "Children acquire life skills naturally through structured and free play at their own pace, building confidence and curiosity.",
                                icon: Baby,
                                color: "#e83e8c",
                                bg: "bg-[#e83e8c]/5",
                            },
                            {
                                title: "Creative Sessions",
                                description: "Every day is fun-filled with creative, engaging sessions focusing on personality development, art, and hands-on exploration.",
                                icon: Palette,
                                color: "#fbaf01",
                                bg: "bg-[#fbaf01]/5",
                            },
                            {
                                title: "Multilingual Education",
                                description: "Children are trained to communicate, read, and write in Arabic, English, and Malayalam — because the limit of language is the limit of the world.",
                                icon: GraduationCap,
                                color: "#0052ff",
                                bg: "bg-[#0052ff]/5",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-80px" }}
                                variants={fadeUp}
                                className={`${item.bg} dark:bg-slate-800/50 rounded-3xl p-8 border-2 border-transparent hover:border-gray-100 dark:hover:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-default`}
                            >
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                                    style={{ backgroundColor: `${item.color}15` }}
                                >
                                    <item.icon className="w-8 h-8" style={{ color: item.color }} />
                                </div>
                                <h3 className="font-heading font-bold text-[#222] dark:text-white text-xl mb-3">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 font-body leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 4: Our Values
               ══════════════════════════════════ */}
            <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <span className="text-[#ef4225] font-heading font-bold uppercase tracking-wider text-sm mb-3 block">What We Stand For</span>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Our Core <span className="text-[#ef4225]">Values</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-2xl mx-auto leading-relaxed">
                            Every day at ZeeQue is guided by principles that shape compassionate, creative, and confident young learners.
                        </p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {values.map((v, i) => (
                            <motion.div
                                key={v.title}
                                custom={i}
                                variants={fadeUp}
                                className="bg-white dark:bg-slate-800 border-2 border-gray-100 dark:border-slate-700 rounded-3xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                                    style={{ backgroundColor: `${v.color}12` }}
                                >
                                    <v.icon className="w-7 h-7" style={{ color: v.color }} />
                                </div>
                                <h3 className="font-heading font-bold text-[#222] dark:text-white text-lg mb-2">{v.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 font-body text-[15px] leading-relaxed">{v.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 5: A Day at ZeeQue
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-gradient-to-b from-[#fffcf2] to-white dark:from-slate-950 dark:to-slate-900 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <span className="text-[#fbaf01] font-heading font-bold uppercase tracking-wider text-sm mb-3 block flex items-center justify-center gap-2">
                            <Clock className="w-4 h-4" />
                            Daily Routine
                        </span>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            A Day at <span className="text-[#fbaf01]">ZeeQue</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-2xl mx-auto leading-relaxed">
                            Every day is carefully planned to balance learning, play, and rest — keeping little ones engaged and happy all day long.
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#fbaf01] via-[#e83e8c] to-[#0fb85c] hidden sm:block" />

                        <div className="space-y-8 sm:space-y-12">
                            {dailySessions.map((session, i) => (
                                <motion.div
                                    key={session.title}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-60px" }}
                                    variants={fadeUp}
                                    className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                                >
                                    {/* Content */}
                                    <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                        <div className={`bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-lg border-2 border-gray-100 dark:border-slate-700 transition-all duration-300 ${i % 2 === 0 ? "md:mr-8" : "md:ml-8"} ml-12 sm:ml-0`}>
                                            <div className="flex items-center gap-3 mb-2" style={{ justifyContent: i % 2 === 0 ? "flex-end" : "flex-start" }}>
                                                <span className="font-heading font-extrabold text-sm px-3 py-1 rounded-full text-white" style={{ backgroundColor: session.color }}>
                                                    {session.time} AM
                                                </span>
                                            </div>
                                            <h3 className="font-heading font-bold text-[#222] dark:text-white text-lg mb-1">{session.title}</h3>
                                            <p className="text-gray-500 dark:text-gray-400 font-body text-sm leading-relaxed">{session.description}</p>
                                        </div>
                                    </div>

                                    {/* Timeline dot */}
                                    <div className="absolute left-6 sm:left-6 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-lg" style={{ backgroundColor: session.color }}>
                                        <session.icon className="w-5 h-5 text-white" />
                                    </div>

                                    {/* Spacer for the other side */}
                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 6: Infrastructure & Facilities
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <span className="text-[#0052ff] font-heading font-bold uppercase tracking-wider text-sm mb-3 block">World-Class Setup</span>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Infrastructure & <span className="text-[#0052ff]">Facilities</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-3xl mx-auto leading-relaxed">
                            Our centers are designed to be healthy, safe, and stimulating — providing creative programming flexibility with age-appropriate materials and equipment.
                        </p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {facilities.map((f, i) => (
                            <motion.div
                                key={f.title}
                                custom={i}
                                variants={fadeUp}
                                className="relative bg-white dark:bg-slate-800 rounded-3xl p-7 border-2 border-gray-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
                            >
                                {/* Decorative corner */}
                                <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-[60px] opacity-10 group-hover:opacity-20 transition-opacity" style={{ backgroundColor: f.color }} />

                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: `${f.color}12` }}>
                                    <f.icon className="w-7 h-7" style={{ color: f.color }} />
                                </div>
                                <h3 className="font-heading font-bold text-[#222] dark:text-white text-lg mb-2">{f.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 font-body text-[15px] leading-relaxed">{f.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 7: Activities & Events
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-gradient-to-b from-[#fffcf2] to-white dark:from-slate-950 dark:to-slate-900 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <span className="text-[#7c3aed] font-heading font-bold uppercase tracking-wider text-sm mb-3 block">Fun Beyond Classrooms</span>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Activities & <span className="text-[#7c3aed]">Events</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-2xl mx-auto leading-relaxed">
                            From puppetry to nature camps, our rich co-curricular activities enrich every child&apos;s learning journey and create unforgettable memories.
                        </p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                        {activities.map((act, i) => (
                            <motion.div
                                key={act.title}
                                custom={i}
                                variants={fadeUp}
                                className="bg-white dark:bg-slate-800 rounded-3xl p-6 border-2 border-gray-100 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group text-center cursor-default"
                            >
                                <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" style={{ backgroundColor: `${act.color}12` }}>
                                    <act.icon className="w-7 h-7" style={{ color: act.color }} />
                                </div>
                                <h3 className="font-heading font-bold text-[#222] dark:text-white text-[15px]">{act.title}</h3>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Extra activities text */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 text-center"
                    >
                        <p className="text-gray-500 dark:text-gray-400 font-body text-base italic">
                            Plus exciting picnics to zoos, botanical gardens, fire stations, post offices, and more! 🎉
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 8: Teacher Support
               ══════════════════════════════════ */}
            <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Left Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2 relative"
                        >
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?q=80&w=1000&auto=format&fit=crop"
                                    alt="Teachers with children"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0fb85c]/30 to-transparent" />
                            </div>

                            {/* Floating card */}
                            <div className="absolute -bottom-6 -right-4 bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-xl border-2 border-gray-100 dark:border-slate-700 z-20 hidden sm:block">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-[#0fb85c]/10 flex items-center justify-center">
                                        <Users className="w-6 h-6 text-[#0fb85c]" />
                                    </div>
                                    <div>
                                        <div className="font-heading font-extrabold text-[#222] dark:text-white text-2xl">3</div>
                                        <div className="text-gray-500 dark:text-gray-400 text-xs font-body">Mentors per Class</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full lg:w-1/2"
                        >
                            <span className="text-[#0fb85c] font-heading font-bold uppercase tracking-wider text-sm mb-3 block">Expert Care</span>
                            <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-6">
                                Teacher <span className="text-[#0fb85c]">Support</span> System
                            </h2>

                            <div className="space-y-5">
                                {[
                                    { icon: HandHeart, title: "3 Mentors in Every Classroom", desc: "Individual care and personalized attention for every child, ensuring no one is left behind.", color: "#0fb85c" },
                                    { icon: Eye, title: "On-Site Academic Executives", desc: "Specially trained Academic Executives provide timely on-site support and constant monitoring of the classroom process.", color: "#0052ff" },
                                    { icon: Award, title: "Proven ZeeQue Curriculum", desc: "Our exclusive, tested, and proven curriculum is the result of extensive research and studies in early childhood education.", color: "#e83e8c" },
                                    { icon: GraduationCap, title: "Continuous Training", desc: "Regular professional development ensures our educators stay at the forefront of early childhood education best practices.", color: "#fbaf01" },
                                ].map((item) => (
                                    <div key={item.title} className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: `${item.color}12` }}>
                                            <item.icon className="w-6 h-6" style={{ color: item.color }} />
                                        </div>
                                        <div>
                                            <h3 className="font-heading font-bold text-[#222] dark:text-white text-[17px] mb-1">{item.title}</h3>
                                            <p className="text-gray-500 dark:text-gray-400 font-body text-[15px] leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 9: Stats Counter
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-24 bg-gradient-to-r from-[#ef4225] to-[#e83e8c] relative overflow-hidden">
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-10"
                    >
                        {stats.map((stat) => (
                            <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} color="white" />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 10: CTA
               ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
                {/* Decorative shapes */}
                <div className="absolute top-10 left-10 w-24 h-24 rounded-full border-4 border-dashed border-[#fbaf01]/15 pointer-events-none hidden lg:block" />
                <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-[#e83e8c]/5 pointer-events-none hidden lg:block" />

                <div className="max-w-[800px] mx-auto px-4 xl:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="text-5xl mb-6">🎓</div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Ready to Give Your Child the <span className="text-primary">Best Start?</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-xl mx-auto leading-relaxed mb-10">
                            Join the ZeeQue family and watch your little one blossom into a confident, creative, and compassionate learner.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="https://admission.zeeque.in/"
                                className="flex items-center gap-2 bg-[#ffb606] text-white px-10 py-4 rounded-2xl font-heading font-bold text-lg hover:bg-[#ffa000] shadow-[4px_4px_0_0_#ef4225] hover:shadow-[2px_2px_0_0_#ef4225] hover:translate-y-[2px] hover:translate-x-[2px] transition-all"
                            >
                                Enroll Now
                                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                            </Link>
                            <Link
                                href="/contact"
                                className="flex items-center gap-2 bg-white dark:bg-slate-800 text-[#222] dark:text-white px-10 py-4 rounded-2xl font-heading font-bold text-lg border-2 border-gray-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-all"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Footer ── */}
            <Footer />
        </main>
    );
}
