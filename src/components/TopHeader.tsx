"use client";

import { Phone, Mail, MapPin, LogIn, Facebook, Twitter, Instagram, Linkedin, Youtube, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import LoginModal from "./LoginModal";

export default function TopHeader() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Enforce light mode on initial visit
        if (typeof window !== "undefined") {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (typeof window !== "undefined") {
            document.documentElement.classList.toggle("dark");
        }
    };

    return (
        <div className="hidden lg:block w-full bg-transparent py-4 text-sm">
            <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
                {/* Left Side: Contact Info */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
                            <Phone className="w-3 h-3 text-white group-hover:animate-ringing origin-center transition-transform" />
                        </div>
                        <span className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">+91 9072500435</span>
                    </div>

                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
                            <Mail className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">zqnetwork@zeeque.in</span>
                    </div>

                    <Link href="https://maps.google.com/?q=ZeeQue+Preschool,+Kozhikode,+Kerala" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
                            <MapPin className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Zahra Park, Koduvally, Kozhikode, Kerala</span>
                    </Link>
                </div>

                {/* Right Side: Actions & Social */}
                <div className="flex items-center gap-6">
                    {/* Social Links */}
                    <div className="flex items-center gap-4 border-r border-gray-200 dark:border-gray-700 pr-6 mr-2">
                        <Link href="https://www.facebook.com/zeequepreschool" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80 transition-opacity">
                            <Facebook className="w-[18px] h-[18px] stroke-[2]" />
                        </Link>
                        <Link href="https://www.instagram.com/zeeque_preschool" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80 transition-opacity">
                            <Instagram className="w-[18px] h-[18px] stroke-[2]" />
                        </Link>
                        <Link href="https://x.com/markazonline/" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80 transition-opacity">
                            <Twitter className="w-[18px] h-[18px] stroke-[2]" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/zeeque-preschool-network/" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80 transition-opacity">
                            <Linkedin className="w-[18px] h-[18px] stroke-[2]" />
                        </Link>
                        <Link href="https://www.youtube.com/zeequepreschool" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80 transition-opacity">
                            <Youtube className="w-[18px] h-[18px] stroke-[2]" />
                        </Link>
                        {/* Theme Toggle Button */}
                        {mounted && (
                            <button
                                onClick={toggleTheme}
                                className="relative ml-2 w-8 h-8 rounded-full bg-orange-50 dark:bg-slate-800 flex items-center justify-center text-primary transition-transform hover:scale-110 overflow-hidden"
                                aria-label="Toggle Theme"
                            >
                                <Sun className={`absolute w-4 h-4 transition-all duration-500 ${isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
                                <Moon className={`absolute w-4 h-4 transition-all duration-500 ${!isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'}`} />
                            </button>
                        )}
                    </div>

                    <button
                        onClick={() => setIsLoginModalOpen(true)}
                        className="flex items-center gap-2 bg-primary hover:opacity-90 text-white px-6 py-2.5 rounded-full font-bold transition-colors"
                    >
                        <LogIn className="w-[18px] h-[18px]" />
                        Login
                    </button>
                </div>
            </div>

            <LoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
            />
        </div>
    );
}
