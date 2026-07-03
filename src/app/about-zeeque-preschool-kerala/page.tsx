"use client";

import Image from "next/image";
import Link from "next/link";

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
    { icon: Sun, title: "Joyful Learning", description: "Making education fun and engaging so children develop a lifelong love for learning and discovery.", color: "#3FB7E5" },
    { icon: Shield, title: "Safety First", description: "Supervised single-door entry/exit, secure fenced play areas, and trained staff ensuring complete child safety.", color: "#ef4225" },
    { icon: BookOpen, title: "Holistic Growth", description: "Nurturing cognitive, emotional, physical, and social development through a well-rounded ECCE curriculum.", color: "#EF4225" },
];

const dailySessions = [
    { time: "9:00", title: "Welcome Circle", description: "Warm greetings and settling into a joyful morning routine", icon: Sun, color: "#fbaf01" },
    { time: "9:30", title: "General Assembly", description: "Coming together for interactive group activities and sharing", icon: Users, color: "#3FB7E5" },
    { time: "10:00", title: "Meditation & Warm-up", description: "Calming mindfulness exercises and energizing physical activity", icon: Heart, color: "#e83e8c" },
    { time: "10:30", title: "Rhyme Time", description: "Learning through songs, rhymes, and musical expression", icon: Music, color: "#0fb85c" },
    { time: "11:00", title: "Story Session", description: "Imaginative storytelling that sparks creativity and language skills", icon: BookOpen, color: "#EF4225" },
    { time: "11:30", title: "Outdoor Activities", description: "Free play, sports, and nature exploration in safe outdoor spaces", icon: TreePine, color: "#ef4225" },
];

const facilities = [
    { title: "Child-Friendly Classrooms", description: "Spacious, colorful rooms with ample space and age-appropriate learning materials", icon: Home, color: "#ef4225" },
    { title: "Sand Pit", description: "Sensory play area for creative exploration and tactile development", icon: Sparkles, color: "#fbaf01" },
    { title: "Splash Pool", description: "Safe water play area for fun-filled aquatic activities and cooling off", icon: Droplets, color: "#3FB7E5" },
    { title: "Multi-Media Support", description: "High-tech classrooms equipped with multimedia for interactive learning", icon: Monitor, color: "#EF4225" },
    { title: "Outdoor Play Areas", description: "Two fenced play areas with climbing structures, sand areas, and wheel toy paths", icon: Volleyball, color: "#0fb85c" },
    { title: "Mud Pond", description: "Natural sensory exploration area for hands-on, messy, joyful learning", icon: Flower2, color: "#e83e8c" },
];

const activities = [
    { title: "Puppetry & Theater", icon: Theater, color: "#e83e8c" },
    { title: "Origami Workshops", icon: Origami, color: "#3FB7E5" },
    { title: "Clay Modeling", icon: Palette, color: "#fbaf01" },
    { title: "Monthly Sports Day", icon: Trophy, color: "#0fb85c" },
    { title: "Nature Camps", icon: Tent, color: "#EF4225" },
    { title: "ZeeQue Fest", icon: PartyPopper, color: "#ef4225" },
    { title: "Festival Celebrations", icon: Sparkles, color: "#e83e8c" },
    { title: "Exciting Picnics", icon: MapPin, color: "#3FB7E5" },
];

const stats = [
    { value: 4, suffix: "", label: "Countries", color: "#ef4225" },
    { value: 152, suffix: "", label: "Schools", color: "#0fb85c" },
    { value: 15000, suffix: "", label: "Happy Students", color: "#3FB7E5" },
    { value: 2200, suffix: "", label: "Trained Teachers", color: "#fbaf01" },
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
        <div ref={ref} className="bg-white/60 dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-gray-200/40 dark:border-slate-700/40 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group">
            <div className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl mb-2 text-[#222] dark:text-white group-hover:text-[#EF4225] transition-colors duration-300">
                {count}{suffix}
            </div>
            <div className="w-8 h-0.5 bg-[#EF4225]/60 mx-auto mb-3 rounded-full" />
            <div className="font-body font-medium text-gray-500 dark:text-gray-400 text-[15px] group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">{label}</div>
        </div>
    );
}

/* ══════════════════════════════════════════════
   ABOUT PAGE
   ══════════════════════════════════════════════ */
export default function AboutPage() {
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
                    {/* Airplane */}
                    <div className="absolute top-[35%] xl:top-[28%] left-[2%] xl:left-[6%] hidden md:block" style={{ transform: 'rotate(-5deg)' }}>
                        <Image src="/images/assets/3d-elements/3d-airplane.png" alt="" width={160} height={110} className="object-contain drop-shadow-lg w-[120px] lg:w-[150px]" />
                    </div>

                    {/* Sun */}
                    <div className="absolute top-[25%] xl:top-[18%] right-[2%] xl:right-[6%] hidden md:block">
                        <Image src="/images/assets/3d-elements/3d-sun.png" alt="" width={220} height={220} className="object-contain drop-shadow-md w-[160px] lg:w-[210px]" />
                    </div>

                    {/* Cloud Left */}
                    <div className="absolute top-[55%] xl:top-[42%] left-[4%] xl:left-[8%] hidden md:block">
                        <Image src="/images/assets/3d-elements/3d-cloud.png" alt="" width={200} height={120} className="object-contain opacity-95 w-[140px] lg:w-[190px]" />
                    </div>

                    {/* Cloud Right */}
                    <div className="absolute top-[50%] xl:top-[38%] right-[1%] xl:right-[4%] hidden md:block" style={{ transform: 'scaleX(-1)' }}>
                        <Image src="/images/assets/3d-elements/3d-cloud.png" alt="" width={220} height={130} className="object-contain opacity-95 w-[160px] lg:w-[200px]" />
                    </div>

                    {/* Large Smiling Muslim Child (as requested) */}
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
                            <span className="font-semibold text-yellow-300">About Us</span>
                        </div>

                        {/* Heading */}
                        <h1 className="font-heading font-extrabold text-white text-3xl md:text-5xl lg:text-[52px] max-w-5xl mx-auto leading-[1.1] mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                            Kerala&apos;s Fastest Growing <br className="hidden md:block" /> 
                            Islamic Montessori Preschool
                        </h1>

                        {/* Description */}
                        <p className="font-body font-medium text-white text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] bg-black/10 px-6 py-3 rounded-2xl backdrop-blur-[2px]">
                            Nurturing confident learners with a perfect blend of modern Montessori education and timeless Islamic values.
                        </p>

                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 2: Who We Are
               ══════════════════════════════════ */}
            <section className="pt-16 md:pt-20 lg:pt-28 pb-0 bg-white dark:bg-slate-900 relative overflow-hidden">
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
                                { label: "MZQ", age: "4–5 yrs", desc: "Middle", color: "#3FB7E5" },
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
                                <Image
                                    src="/images/gallery/gallery photos/IMG_6290 - Copy.JPG"
                                    alt="Children engaging in group activities in a spacious ZeeQue Preschool classroom in Kerala."
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl transform transition-transform hover:scale-105 hover:rotate-1 duration-300">
                                <Image
                                    src="/images/gallery/gallery photos/IMG_6331 - Copy.JPG"
                                    alt="Early learners enjoying a reading session at our Islamic Montessori preschool in Kerala."
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="relative col-span-2 aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl group">
                                <Image
                                    src="/images/gallery/page-title.jpg"
                                    alt="Happy kids running and playing together outdoors at ZeeQue Preschool in Kerala."
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 66vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                                    <span className="text-white font-heading font-bold text-lg">Where Every Child Shines</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -bottom-4 -left-4 bg-white/70 dark:bg-slate-800/60 backdrop-blur-xl rounded-full px-4 py-2.5 shadow-2xl z-20 hidden sm:flex items-center gap-2 border border-white/40 dark:border-slate-700/40">
                            <Star className="w-4 h-4 text-amber-500 fill-amber-400/60" />
                            <span className="font-body font-semibold text-xs text-gray-800 dark:text-gray-200 tracking-wide">Since 2013</span>
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
                                image: "/images/gallery/gallery photos/IMG_5740 (2) - Copy.JPG",
                                alt: "Children acquiring life skills through play at ZeeQue Preschool in Kerala.",
                            },
                            {
                                title: "Creative Sessions",
                                description: "Every day is fun-filled with creative, engaging sessions focusing on personality development, art, and hands-on exploration.",
                                image: "/images/gallery/gallery photos/RYZ03180.JPG",
                                alt: "Children participating in creative arts and hands-on exploration in Kerala.",
                            },
                            {
                                title: "Multilingual Education",
                                description: "Children are trained to communicate, read, and write in Arabic, English, and Malayalam — because the limit of language is the limit of the world.",
                                image: "/images/gallery/gallery photos/IMG_6290 - Copy.JPG",
                                alt: "Students learning languages in a vibrant classroom at ZeeQue Preschool in Kerala.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-80px" }}
                                variants={fadeUp}
                                className="relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-default min-h-[320px]"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <h3 className="font-heading font-bold text-white text-xl mb-2">{item.title}</h3>
                                    <p className="text-gray-200 font-body text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 5: A Day at ZeeQue
               ══════════════════════════════════ */}
            <section className="py-10 md:py-14 lg:py-18 bg-gradient-to-b from-[#fffcf2] to-white dark:from-slate-950 dark:to-slate-900 relative overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
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
            <section className="py-10 md:py-14 lg:py-18 bg-white dark:bg-slate-900 relative overflow-hidden">
                {/* Decorative background blobs */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 90, 0],
                            x: [0, 50, 0],
                            y: [0, 30, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-blue-400/10 to-transparent blur-[80px]"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, -45, 0],
                            x: [0, -30, 0],
                            y: [0, 50, 0]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[20%] -right-[5%] w-[35%] h-[35%] rounded-full bg-gradient-to-bl from-purple-400/10 to-transparent blur-[100px]"
                    />
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-20"
                    >
                        <div className="flex items-center justify-center mb-8">
                        </div>
                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-5xl md:text-6xl tracking-tight leading-[1.1] mb-6">
                            Infrastructure & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Facilities</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
                            Our centers are designed to be healthy, safe, and stimulating — providing creative programming flexibility with age-appropriate materials and equipment.
                        </p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {facilities.map((f, i) => (
                            <motion.div
                                key={f.title}
                                custom={i}
                                variants={fadeUp}
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 0.4
                                }}
                                className="group relative bg-white/40 dark:bg-slate-800/30 backdrop-blur-xl rounded-[40px] p-6 border border-white/40 dark:border-slate-700/40 hover:border-blue-500/30 dark:hover:border-blue-400/30 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_48px_rgba(0,0,0,0.12)] transition-all duration-700 overflow-hidden"
                            >
                                {/* Inner glass reflection */}
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-5">
                                        <span className="font-heading font-black text-4xl opacity-5 group-hover:opacity-10 transition-opacity duration-500 tracking-tighter italic">0{i + 1}</span>
                                    </div>

                                    <h3 className="font-heading font-extrabold text-[#222] dark:text-white text-2xl mb-4 group-hover:translate-x-1 transition-transform duration-300 tracking-tight">{f.title}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 font-body text-[16px] leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">{f.description}</p>

                                    {/* Action link effect */}
                                    <div className="mt-5 flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0" style={{ color: f.color }}>
                                        Learn more <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>


            {/* ══════════════════════════════════
                SECTION 10: CTA
               ══════════════════════════════════ */}
            <section className="py-10 md:py-14 lg:py-18 bg-white dark:bg-slate-900 relative overflow-hidden">
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

                        <h2 className="font-heading font-extrabold text-[#222] dark:text-white text-4xl md:text-5xl leading-[1.1] mb-5">
                            Ready to Give Your Child the <span className="text-primary">Best Start?</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg max-w-xl mx-auto leading-relaxed mb-10">
                            Join the ZeeQue family and watch your little one blossom into a confident, creative, and compassionate learner.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="https://wa.me/919072500435" className="flex items-center justify-center gap-2 bg-[#FFCB05] text-[#222] px-9 py-3.5 rounded-full font-heading font-bold text-base shadow-[4px_4px_0_0_#0060D6] hover:shadow-[2px_2px_0_0_#0060D6] hover:translate-y-[2px] hover:translate-x-[2px] transition-all whitespace-nowrap w-full sm:w-auto relative overflow-hidden group">
                                {/* Shimmer effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                                <span className="relative z-10">Enquiry Now</span>
                                <ArrowRight className="w-4 h-4 stroke-[2.5] relative z-10" />
                            </Link>
                            <Link
                                href="/contact"
                                className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-[#222] dark:text-white px-9 py-3.5 rounded-full font-heading font-bold text-base border-2 border-gray-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-all whitespace-nowrap w-full sm:w-auto"
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
