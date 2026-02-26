"use client";

import React, { useState } from "react";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function ZETRegistration() {
    const [enrollmentNumber, setEnrollmentNumber] = useState("");

    return (
        <main className="min-h-screen bg-white font-body selection:bg-secondary selection:text-white relative overflow-hidden transition-colors duration-300">
            {/* Floating Header Container */}
            <div className="w-full relative z-50">
                <div className="hidden lg:block w-full bg-white dark:bg-slate-900 border-b border-dashed border-gray-200 dark:border-slate-700 transition-colors duration-300">
                    <TopHeader />
                </div>
                <div className="max-w-[1140px] mx-auto bg-white dark:bg-slate-900 rounded-b-[40px] shadow-sm border border-gray-100 dark:border-slate-800 px-4 xl:px-8 transition-colors duration-300">
                    <Navbar />
                </div>
            </div>

            {/* Main Content Section */}
            <section className="relative pt-20 pb-40 min-h-[70vh] flex flex-col items-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-heading font-extrabold text-[#444] text-4xl mb-12"
                >
                    ZET Registration
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 w-full max-w-[600px] px-4"
                >
                    {/* Cyan Outer Card */}
                    <div className="bg-[#4fc3f7] rounded-[20px] p-6 shadow-xl">
                        {/* White Inner Card */}
                        <div className="bg-white rounded-[15px] p-10 md:p-12 shadow-sm">
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="enrollment" className="block text-gray-700 font-bold mb-3 text-lg">
                                        Enrollment Number
                                    </label>
                                    <input
                                        id="enrollment"
                                        type="text"
                                        value={enrollmentNumber}
                                        onChange={(e) => setEnrollmentNumber(e.target.value)}
                                        className="w-full bg-[#f0f4f8] border-none rounded-xl px-6 py-4 text-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-[#4fc3f7]/50 transition-all text-lg"
                                        placeholder="Enter your enrollment number"
                                    />
                                </div>
                                <button
                                    className="bg-[#00bcd4] hover:bg-[#00acc1] text-white px-8 py-3 rounded-xl font-heading font-bold text-lg transition-all shadow-lg shadow-[#00bcd4]/20 active:scale-95"
                                    onClick={() => console.log("Fetching data for:", enrollmentNumber)}
                                >
                                    Fetch Data
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Decorative Landscape Background */}
                <div className="absolute bottom-0 left-0 w-full h-[400px] pointer-events-none -z-10 bg-[#fffcf2]">
                    <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="#8bc34a" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,197.3C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                        <path fill="#7cb342" fillOpacity="0.8" d="M0,256L60,240C120,224,240,192,360,192C480,192,600,224,720,234.7C840,245,960,235,1080,213.3C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                        <path fill="#689f38" fillOpacity="0.6" d="M0,288L80,277.3C160,267,320,245,480,245.3C640,245,800,267,960,261.3C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                    </svg>

                    {/* Stylized Trees */}
                    <div className="absolute bottom-[20%] left-[10%] group">
                        <div className="w-16 h-28 bg-[#a3d55d] rounded-full relative shadow-lg overflow-hidden">
                            <div className="absolute inset-0 bg-black/10 translate-x-1" />
                        </div>
                        <div className="w-3 h-10 bg-[#5d4037] mx-auto -mt-2 rounded-full" />
                    </div>

                    <div className="absolute bottom-[25%] left-[25%] scale-75">
                        <div className="w-20 h-32 bg-[#8bc34a] rounded-full relative shadow-lg overflow-hidden">
                            <div className="absolute inset-0 bg-black/10 translate-x-1" />
                        </div>
                        <div className="w-4 h-12 bg-[#5d4037] mx-auto -mt-2 rounded-full" />
                    </div>

                    <div className="absolute bottom-[30%] left-[45%] scale-110">
                        <div className="w-24 h-40 bg-[#7cb342] rounded-full relative shadow-lg overflow-hidden">
                            <div className="absolute inset-0 bg-black/10 translate-x-1" />
                        </div>
                        <div className="w-5 h-16 bg-[#5d4037] mx-auto -mt-2 rounded-full" />
                    </div>

                    <div className="absolute bottom-[15%] right-[20%] scale-90">
                        <div className="w-20 h-32 bg-[#aed581] rounded-full relative shadow-lg overflow-hidden">
                            <div className="absolute inset-0 bg-black/10 translate-x-1" />
                        </div>
                        <div className="w-4 h-10 bg-[#5d4037] mx-auto -mt-2 rounded-full" />
                    </div>

                    <div className="absolute bottom-[20%] right-[5%] scale-125">
                        <div className="w-16 h-24 bg-[#9ccc65] rounded-full relative shadow-lg overflow-hidden">
                            <div className="absolute inset-0 bg-black/10 translate-x-1" />
                        </div>
                        <div className="w-3 h-8 bg-[#5d4037] mx-auto -mt-2 rounded-full" />
                    </div>

                    {/* Bushes */}
                    <div className="absolute bottom-[10%] left-[40%] w-10 h-10 bg-[#689f38] rounded-full opacity-80" />
                    <div className="absolute bottom-[15%] left-[60%] w-12 h-12 bg-[#689f38] rounded-full opacity-80" />
                    <div className="absolute bottom-[22%] right-[35%] w-8 h-8 bg-[#689f38] rounded-full opacity-80" />
                </div>
            </section>

            <Footer />
        </main>
    );
}
