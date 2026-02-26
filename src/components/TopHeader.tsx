"use client";

import { Phone, Mail, MapPin, LogIn, Facebook, Twitter, Instagram, Linkedin, Youtube, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function TopHeader() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

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
                        <span className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">+1 809 659 8454</span>
                    </div>

                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
                            <Mail className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">kidschool@gmail.com</span>
                    </div>

                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
                            <MapPin className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Graaf Florisstraat 22-A, 3021 CH Rotterdam</span>
                    </div>
                </div>

                {/* Right Side: Actions & Social */}
                <div className="flex items-center gap-6">
                    {/* Social Links */}
                    <div className="flex items-center gap-4 border-r border-gray-200 dark:border-gray-700 pr-6 mr-2">
                        <Link href="#" className="text-primary hover:opacity-80 transition-opacity">
                            <Facebook className="w-[18px] h-[18px] stroke-[2]" />
                        </Link>
                        <Link href="#" className="text-primary hover:opacity-80 transition-opacity">
                            <Instagram className="w-[18px] h-[18px] stroke-[2]" />
                        </Link>
                        <Link href="#" className="text-primary hover:opacity-80 transition-opacity">
                            <Twitter className="w-[18px] h-[18px] stroke-[2]" />
                        </Link>
                        <Link href="#" className="text-primary hover:opacity-80 transition-opacity">
                            <Linkedin className="w-[18px] h-[18px] stroke-[2]" />
                        </Link>
                        <Link href="#" className="text-primary hover:opacity-80 transition-opacity">
                            <Youtube className="w-[18px] h-[18px] stroke-[2]" />
                        </Link>
                        {/* Theme Toggle Button */}
                        {mounted && (
                            <button
                                onClick={toggleTheme}
                                className="ml-2 w-8 h-8 rounded-full bg-orange-50 dark:bg-slate-800 flex items-center justify-center text-primary transition-transform hover:scale-110"
                                aria-label="Toggle Theme"
                            >
                                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                            </button>
                        )}
                    </div>

                    <Link href="/login" className="flex items-center gap-2 bg-primary hover:opacity-90 text-white px-6 py-2.5 rounded-full font-bold transition-colors">
                        <LogIn className="w-[18px] h-[18px]" />
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
