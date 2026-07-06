"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const facilities = [
    { name: "Computer lab" },
    { name: "Science lab" },
    { name: "Library" }
];

export default function WeOffer() {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Floating 3D elements fixed relative to content to prevent zooming issues */}
            <div className="max-w-[1200px] mx-auto px-4 relative z-10 text-center">
                {/* BB Cube */}
                <div className="absolute top-[-30px] left-[20px] xl:left-[0px] animate-float-medium hidden lg:block z-0" style={{ transform: 'rotate(-10deg)' }}>
                    <Image src="/images/assets/3d-elements/3d-cubeB.png" alt="" width={60} height={60} className="object-contain" />
                </div>
                
                {/* Set Square / Ruler SVG Icon (blue outline style) */}
                <div className="absolute top-[90px] left-[20px] xl:left-[60px] animate-float hidden lg:block opacity-60 z-0">
                    <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#87AFC7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(-15deg)' }}>
                        <path d="M4 4h16v16z"/>
                        <path d="M12 8h4v4z"/>
                        <path d="M6 6l1 -1"/>
                        <path d="M9 9l1 -1"/>
                        <path d="M12 12l1 -1"/>
                        <path d="M15 15l1 -1"/>
                        <path d="M18 18l1 -1"/>
                    </svg>
                </div>

                {/* Left Cloud */}
                <div className="absolute top-[180px] -left-[30px] xl:-left-[70px] animate-float-slow hidden lg:block z-20 pointer-events-none">
                    <Image src="/images/assets/3d-elements/3d-cloud.png" alt="" width={110} height={80} className="object-contain" />
                </div>

                {/* Notepad SVG Icon (blue outline style) */}
                <div className="absolute top-[10px] right-[100px] xl:right-[140px] animate-float hidden lg:block opacity-60 z-0">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#87AFC7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(15deg)' }}>
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <path d="M14 2v6h6"/>
                        <path d="M16 13H8"/>
                        <path d="M16 17H8"/>
                        <path d="M10 9H8"/>
                    </svg>
                </div>

                {/* Airplane */}
                <div className="absolute top-[90px] -right-[20px] xl:-right-[60px] animate-float-medium hidden lg:block z-20 pointer-events-none" style={{ transform: 'rotate(-5deg)' }}>
                    <Image src="/images/assets/3d-elements/3d-airplane.png" alt="" width={180} height={120} className="object-contain" />
                </div>

                {/* Right Cloud */}
                <div className="absolute top-[180px] -right-[30px] xl:-right-[70px] animate-float-slow hidden lg:block z-20 pointer-events-none">
                    <Image src="/images/assets/3d-elements/3d-cloud.png" alt="" width={110} height={80} className="object-contain" />
                </div>
                {/* Mobile Background Icons (around Title & Facilities) */}
                <div className="absolute top-[3%] left-[5%] animate-float-slow lg:hidden opacity-20 pointer-events-none z-0" style={{ transform: 'rotate(-15deg)' }}>
                    <Image src="/images/assets/icons/Teaching.svg" alt="" width={50} height={50} className="object-contain" />
                </div>
                <div className="absolute top-[8%] right-[8%] animate-float lg:hidden opacity-20 pointer-events-none z-0" style={{ transform: 'rotate(20deg)' }}>
                    <Image src="/images/assets/icons/Book pen.svg" alt="" width={45} height={45} className="object-contain" />
                </div>
                <div className="absolute top-[18%] left-[12%] animate-float-reverse lg:hidden opacity-15 pointer-events-none z-0" style={{ transform: 'rotate(-25deg)' }}>
                    <Image src="/images/assets/icons/Language.svg" alt="" width={40} height={40} className="object-contain" />
                </div>
                <div className="absolute top-[15%] right-[10%] animate-float-medium lg:hidden opacity-20 pointer-events-none z-0" style={{ transform: 'rotate(10deg)' }}>
                    <Image src="/images/assets/icons/Geology.svg" alt="" width={60} height={60} className="object-contain" />
                </div>
                <div className="absolute top-[25%] right-[25%] animate-float-slow lg:hidden opacity-10 pointer-events-none z-0" style={{ transform: 'rotate(-5deg)' }}>
                    <Image src="/images/assets/icons/Trophy.svg" alt="" width={50} height={50} className="object-contain" />
                </div>
                
                {/* Title */}
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#0060D6] text-4xl md:text-[44px] font-bold mb-4 tracking-wide"
                >
                    We offer education from:
                </motion.h2>
                
                {/* Subtitle */}
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-[#333] font-bold text-xl md:text-2xl mb-12"
                >
                    Well-equipped classrooms
                </motion.p>

                {/* Outline Pills */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-5 mb-20"
                >
                    {facilities.map((fac, i) => (
                        <div 
                            key={i} 
                            className="px-10 py-3.5 rounded-[30px] border border-gray-300 text-gray-700 font-semibold text-[17px] hover:border-[#0060D6] hover:text-[#0060D6] transition-all cursor-pointer bg-white"
                        >
                            {fac.name}
                        </div>
                    ))}
                </motion.div>

                {/* Cards Grid Top Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {[
                        { 
                            title: "Play Group",
                            age: "3-4 Years",
                            desc: "Introduction to learning through sensory exploration, basic social skills, and gentle guided play."
                        },
                        { 
                            title: "Nursery",
                            age: "4-5 Years",
                            desc: "Building foundations with structured theme-based activities, reading readiness, and numerical concepts."
                        },
                        { 
                            title: "Primary",
                            age: "Grades I-IV",
                            desc: "Formal English medium primary education blending academic excellence with core values and ethics."
                        },
                        { 
                            title: "Middle",
                            age: "Grades V-VIII",
                            desc: "Advanced academics focusing on critical thinking, leadership skills, and complete character development."
                        }
                    ].map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + (i * 0.1) }}
                            className="bg-[#EDF5FC] rounded-[32px] border border-[#DEEEFC] p-6 xl:p-8 flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                            <div className="flex justify-between items-center mb-6 gap-2">
                                <h3 className="text-[#0060D6] font-bold text-xl xl:text-2xl text-left whitespace-nowrap tracking-tight">{item.title}</h3>
                                <span className="bg-white px-3 py-1.5 rounded-full text-xs font-bold text-gray-500 shadow-sm border border-gray-100 whitespace-nowrap shrink-0">
                                    {item.age}
                                </span>
                            </div>
                            
                            <p className="text-gray-500 text-sm text-left leading-relaxed flex-1">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Left Kid (Jumping) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        className="bg-[#F4F9FF] rounded-[32px] border border-[#E6F0FF] relative flex items-end justify-center min-h-[280px] mt-8 lg:mt-0 z-10"
                    >
                        <div className="relative w-full h-[280px] flex items-end justify-center">
                            <Image src="/images/assets/3d-elements/3d-kid2.png" alt="Jumping student" width={500} height={600} className="object-contain drop-shadow-2xl w-full h-full scale-[1.15] origin-bottom translate-y-[3%] z-20" style={{ width: 'auto', height: 'auto' }} />
                        </div>
                    </motion.div>
                    
                    {/* Center Banner */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="lg:col-span-2 rounded-[32px] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex items-center justify-center bg-[#FFDF22]"
                    >
                        <Image src="/images/assets/images/admission.png" alt="Admission Open" width={800} height={400} className="w-full h-auto object-contain" />
                    </motion.div>
                    
                    {/* Right Kid (Pointing) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9 }}
                        className="bg-[#F4F9FF] rounded-[32px] border border-[#E6F0FF] relative flex items-end justify-center min-h-[280px] mt-8 lg:mt-0 z-10"
                    >
                        <div className="relative w-full h-[280px] flex items-end justify-center">
                            <Image src="/images/assets/3d-elements/3d-kid1.png" alt="Pointing student" width={500} height={600} className="object-contain drop-shadow-2xl w-full h-full scale-[1.15] origin-bottom translate-y-[3%] z-20" style={{ width: 'auto', height: 'auto' }} />
                        </div>
                    </motion.div>
                </div>

                {/* Floating Bottom Left Parachute */}
                <div className="absolute bottom-[20px] -left-[20px] xl:-left-[80px] animate-float hidden lg:block z-0">
                    <Image src="/images/assets/3d-elements/3d-parachute.png" alt="" width={90} height={120} className="object-contain drop-shadow-md" style={{ width: 'auto', height: 'auto' }} />
                </div>

                {/* Floating Bottom Right Red Cube */}
                <div className="absolute bottom-[-30px] -right-[20px] xl:-right-[80px] animate-float-reverse hidden lg:block z-0" style={{ transform: 'rotate(15deg)' }}>
                    <Image src="/images/assets/3d-elements/3d-cubeA.png" alt="" width={100} height={100} className="object-contain drop-shadow-md" style={{ width: 'auto', height: 'auto' }} />
                </div>

                {/* Mobile Only Floating Elements */}
                <div className="absolute top-[25%] -left-[10px] animate-float lg:hidden z-0">
                    <Image src="/images/assets/3d-elements/3d-cubeB.png" alt="" width={50} height={50} className="object-contain drop-shadow-sm" style={{ width: 'auto', height: 'auto' }} />
                </div>
                <div className="absolute top-[50%] -right-[5px] animate-float-reverse lg:hidden z-0" style={{ transform: 'rotate(-10deg)' }}>
                    <Image src="/images/assets/3d-elements/3d-sun.png" alt="" width={60} height={60} className="object-contain drop-shadow-sm" style={{ width: 'auto', height: 'auto' }} />
                </div>
                <div className="absolute bottom-[2%] left-[10px] animate-float lg:hidden z-0">
                    <Image src="/images/assets/3d-elements/3d-parachute.png" alt="" width={55} height={75} className="object-contain drop-shadow-sm" style={{ width: 'auto', height: 'auto' }} />
                </div>
            </div>
        </section>
    );
}
