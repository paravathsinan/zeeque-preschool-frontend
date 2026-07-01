"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Home, Compass, MapPin } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-white font-body selection:bg-secondary selection:text-white relative overflow-hidden flex flex-col">
            {/* ── Header ── */}
            <div className="w-full relative z-50">
                <div className="max-w-[1140px] mx-auto bg-white dark:bg-transparent rounded-b-[40px] shadow-sm border border-gray-100 dark:border-slate-800 transition-colors duration-300">
                    <Navbar />
                </div>
            </div>

            <section className="flex-1 flex items-center justify-center relative pt-32 pb-20">
                {/* Decorative floating elements for kid-friendly feel */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden max-w-[1440px] mx-auto">
                    <div className="absolute top-[15%] left-[10%] w-16 h-16 md:w-20 md:h-20 opacity-10 grayscale">
                        <Image src="/images/assets/icons/Bag.svg" alt="" fill className="object-contain" />
                    </div>
                    
                    <div className="absolute bottom-[15%] right-[10%] w-20 h-20 md:w-24 md:h-24 opacity-10 grayscale">
                        <Image src="/images/assets/icons/Book pen.svg" alt="" fill className="object-contain" />
                    </div>
                    
                    <div className="absolute top-[25%] right-[20%] w-14 h-14 md:w-16 md:h-16 opacity-10 grayscale">
                        <Image src="/images/assets/icons/Teaching.svg" alt="" fill className="object-contain" />
                    </div>
                    
                    <div className="absolute bottom-[25%] left-[20%] w-16 h-16 md:w-20 md:h-20 opacity-10 grayscale">
                        <Image src="/images/assets/icons/Language.svg" alt="" fill className="object-contain" />
                    </div>

                    <div className="absolute top-[45%] left-[5%] w-12 h-12 md:w-16 md:h-16 opacity-10 grayscale">
                        <Image src="/images/assets/icons/Test.svg" alt="" fill className="object-contain" />
                    </div>

                    <div className="absolute top-[55%] right-[5%] w-16 h-16 md:w-20 md:h-20 opacity-10 grayscale">
                        <Image src="/images/assets/icons/Trophy.svg" alt="" fill className="object-contain" />
                    </div>
                </div>

                <div className="max-w-[800px] mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.7, type: "spring", bounce: 0.5 }}
                        className="mb-8 relative"
                    >
                        <h1 className="font-heading font-extrabold text-[140px] md:text-[200px] leading-none text-transparent bg-clip-text bg-gradient-to-br from-[#0060D6] to-[#3FB7E5] drop-shadow-sm select-none">
                            404
                        </h1>
                        <motion.div 
                            animate={{ rotate: [0, 15, -15, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                            className="absolute top-4 md:top-8 right-[15%] md:right-[20%] bg-[#FFCB05] text-[#222] p-3 rounded-full shadow-lg shadow-[#FFCB05]/40"
                        >
                            <Compass className="w-10 h-10 md:w-14 md:h-14 stroke-[2.5]" />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-[#222] mb-5">
                            Oops! Looks like you&apos;re lost.
                        </h2>
                        <p className="font-body text-lg text-gray-600 max-w-lg mx-auto mb-10 leading-relaxed">
                            The page you are looking for might have been moved, renamed, or perhaps it was just a little too busy playing hide and seek!
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link 
                                href="/"
                                className="inline-flex items-center justify-center gap-2 bg-[#0060D6] text-white px-8 py-3.5 rounded-full font-heading font-bold text-lg shadow-[0_8px_20px_rgba(0,96,214,0.3)] hover:shadow-[0_12px_25px_rgba(0,96,214,0.4)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                            >
                                <Home className="w-5 h-5" />
                                Back to Home
                            </Link>
                            <Link 
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-white text-[#222] border-2 border-gray-200 px-8 py-3.5 rounded-full font-heading font-bold text-lg hover:border-gray-300 hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                            >
                                <MapPin className="w-5 h-5 text-gray-500" />
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
            
            <Footer />
        </main>
    );
}
