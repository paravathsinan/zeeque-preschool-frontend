"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight, Menu, X, Sun, Moon, LogIn, Bell } from "lucide-react";
import { useState, useEffect } from "react";
import LoginModal from "./LoginModal";

export default function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("theme");
            const prefersDark = saved === "dark";
            setIsDarkMode(prefersDark);
            document.documentElement.classList.toggle("dark", prefersDark);
        }
    }, []);

    const toggleTheme = () => {
        const next = !isDarkMode;
        setIsDarkMode(next);
        if (typeof window !== "undefined") {
            document.documentElement.classList.toggle("dark", next);
            localStorage.setItem("theme", next ? "dark" : "light");
        }
    };

    const navLinks = [
        { name: "Home", href: "/", hasDropdown: false },
        {
            name: "About", hasDropdown: true,
            subLinks: [
                { name: "About Us", href: "/about" },
                { name: "Mission and Vision", href: "/mission-and-vision" },
                { name: "Features", href: "/features" },
                { name: "Programs", href: "/programs" },
                { name: "Curriculum", href: "/curriculum" },
                { name: "Our Team", href: "/our-team" },
            ]
        },
        {
            name: "Careers", hasDropdown: true,
            subLinks: [
                { name: "Teacher Trainees", href: "/teacher-trainees" },
                { name: "ZET Registration", href: "/zet-registration" },
                { name: "Grade Stream Teacher Trainees", href: "/grade-stream-teacher-trainees" },
                { name: "Result", href: "/result" },
            ]
        },
        { name: "Admission", href: "/admission", hasDropdown: false },
        {
            name: "Updates", hasDropdown: true,
            subLinks: [
                { name: "Events", href: "/events" },
                { name: "Gallery", href: "/gallery" },
                { name: "Downloads", href: "/downloads" },
                { name: "Notifications", href: "/notifications" },
                { name: "Kids' Magazines", href: "https://magazine.myzeeque.com/" },
            ]
        },
        { name: "Contact", href: "/contact", hasDropdown: false },
    ];

    const isLinkActive = (link: typeof navLinks[number]) => {
        if (link.href === "/" && pathname === "/") return true;
        if (link.href === "/" && pathname !== "/") return false;
        if (link.href && pathname === link.href) return true;
        if (link.hasDropdown && link.subLinks) {
            return link.subLinks.some((sub) => pathname === sub.href);
        }
        return false;
    };

    const toggleMobileDropdown = (name: string) => {
        if (openDropdown === name) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(name);
        }
    };

    return (
        <>
            <nav className="w-full bg-transparent relative z-50 transition-colors duration-300">
                {/* Hero-style Dark Mode Background (Only visible in dark mode via opacity, or by using block/hidden) */}
                <div className="absolute inset-x-0 inset-y-0 rounded-b-[40px] overflow-hidden pointer-events-none hidden dark:block">
                    {/* Solid Base */}
                    <div className="absolute inset-0 bg-[#020618]" />
                    {/* Pure CSS Grid Overlay for premium texture */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
                    {/* Soft Frosted Glass Blend Layer */}
                    <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[50px]" />
                </div>

                <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-3 md:py-4 flex justify-between items-center gap-4 relative z-10">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 shrink-0">
                        <Image
                            src="/images/logo/logo-new.svg"
                            alt="Zeeque Logo"
                            width={110}
                            height={30}
                            className="object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center lg:gap-6 xl:gap-10">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                {link.href ? (
                                    <Link
                                        href={link.href}
                                        className={`flex items-center gap-1 font-heading font-bold text-[17px] transition-colors py-4 ${isLinkActive(link) ? 'text-primary' : 'text-[#222222] dark:text-gray-200 group-hover:text-primary dark:group-hover:text-primary'}`}
                                    >
                                        {link.name}
                                        {link.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400 stroke-[3] transition-transform duration-300 group-hover:rotate-180 group-hover:text-primary" />}
                                    </Link>
                                ) : (
                                    <button
                                        className="flex items-center gap-1 font-heading font-bold text-[17px] transition-colors py-4 text-[#222222] dark:text-gray-200 group-hover:text-primary dark:group-hover:text-primary cursor-pointer select-none border-none bg-transparent outline-none m-0 p-0"
                                    >
                                        {link.name}
                                        {link.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400 stroke-[3] transition-transform duration-300 group-hover:rotate-180 group-hover:text-primary" />}
                                    </button>
                                )}

                                {/* Dropdown Menu */}
                                {link.hasDropdown && link.subLinks && (
                                    <div className="absolute top-14 left-0 min-w-[220px] bg-white/80 dark:bg-[#0F172A]/95 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] rounded-2xl py-3 px-2 flex flex-col gap-0.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-3 group-hover:translate-y-0 border border-white/50 dark:border-slate-700/50">
                                        {link.subLinks.map((sublink) => (
                                            <Link
                                                key={sublink.name}
                                                href={sublink.href}
                                                className="px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50/50 dark:hover:from-slate-800/80 dark:hover:to-slate-700/50 transition-all duration-200 hover:pl-5 hover:shadow-sm"
                                            >
                                                {sublink.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-2 sm:gap-4 shrink-0">

                        {/* Notification Icon */}
                        <Link href="/notifications" className="group hidden lg:flex relative w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all">
                            <Bell className="w-[18px] h-[18px] group-hover:animate-ringing origin-top transition-transform" />
                        </Link>

                        <button
                            onClick={() => setIsLoginModalOpen(true)}
                            className="group hidden lg:flex items-center gap-2 bg-[#ffb606] text-white px-8 py-3 rounded-2xl font-body font-bold text-[18px] hover:bg-[#ffa000] shadow-[4px_4px_0_0_#ef4225] hover:shadow-[2px_2px_0_0_#ef4225] hover:translate-y-[2px] hover:translate-x-[2px] transition-all cursor-pointer border-none"
                        >
                            Login
                            <LogIn className="w-5 h-5 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
                        </button>


                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden ml-2 w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-primary transition-transform hover:scale-105"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg border-t border-gray-100/50 dark:border-slate-800/50 rounded-b-2xl overflow-hidden z-50 transition-colors duration-300">
                        <div className="flex flex-col py-4 px-6 max-h-[70vh] overflow-y-auto">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col border-b border-gray-50 dark:border-slate-800 last:border-0">
                                    <div className="flex items-center justify-between py-3">
                                        {link.href ? (
                                            <Link
                                                href={link.href}
                                                className={`font-heading font-bold text-[16px] ${isLinkActive(link) ? 'text-primary' : 'text-[#222222] dark:text-gray-200'}`}
                                                onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        ) : (
                                            <button
                                                className={`font-heading font-bold text-[16px] text-left cursor-pointer border-none bg-transparent outline-none flex-1 select-none text-[#222222] dark:text-gray-200`}
                                                onClick={() => {
                                                    if (link.hasDropdown) {
                                                        toggleMobileDropdown(link.name);
                                                    }
                                                }}
                                            >
                                                {link.name}
                                            </button>
                                        )}
                                        {link.hasDropdown && (
                                            <button
                                                onClick={() => toggleMobileDropdown(link.name)}
                                                className={`p-2 transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180 text-primary' : 'text-gray-400'}`}
                                            >
                                                <ChevronDown className="w-5 h-5" />
                                            </button>
                                        )}
                                    </div>

                                    {/* Mobile Dropdown */}
                                    {link.hasDropdown && openDropdown === link.name && link.subLinks && (
                                        <div className="flex flex-col pl-4 pb-4 space-y-1">
                                            {link.subLinks.map((sublink) => (
                                                <Link
                                                    key={sublink.name}
                                                    href={sublink.href}
                                                    className={`text-[15px] font-medium py-2 px-3 rounded-lg transition-colors ${pathname === sublink.href ? 'bg-primary/10 text-primary' : 'text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary'}`}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {sublink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            <div className="mt-6 flex flex-col gap-4">
                                <button
                                    onClick={() => { setIsLoginModalOpen(true); setIsMobileMenuOpen(false); }}
                                    className="flex items-center justify-center gap-2 w-full bg-[#ffb606] text-white py-3 rounded-2xl font-body font-bold text-[16px] hover:bg-[#ffa000] shadow-[4px_4px_0_0_#ef4225] hover:shadow-[2px_2px_0_0_#ef4225] hover:translate-y-[2px] hover:translate-x-[2px] transition-all cursor-pointer border-none"
                                >
                                    Login
                                    <LogIn className="w-5 h-5 stroke-[2.5]" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            <LoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
            />
        </>
    );
}
