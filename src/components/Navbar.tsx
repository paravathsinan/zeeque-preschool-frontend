"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight, Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
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
        { name: "Institution", href: "/institution", hasDropdown: false },
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
        <nav className="w-full bg-transparent relative z-50 transition-colors duration-300">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-3 md:py-4 flex justify-between items-center gap-4">

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
                                <div className="absolute top-14 left-0 min-w-[200px] bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-xl py-4 flex flex-col opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0 border border-white/40 dark:border-slate-700/50">
                                    {link.subLinks.map((sublink) => (
                                        <Link
                                            key={sublink.name}
                                            href={sublink.href}
                                            className="px-6 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-orange-50/50 dark:hover:bg-slate-700/50 transition-colors"
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

                    <Link
                        href="https://admission.zeeque.in/"
                        className="hidden lg:flex items-center gap-2 bg-[#ffb606] text-white px-8 py-3 rounded-2xl font-body font-bold text-[18px] hover:bg-[#ffa000] shadow-[4px_4px_0_0_#ef4225] hover:shadow-[2px_2px_0_0_#ef4225] hover:translate-y-[2px] hover:translate-x-[2px] transition-all"
                    >
                        Enroll Now
                        <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                    </Link>

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
                            <Link
                                href="https://admission.zeeque.in/"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center gap-2 w-full bg-[#ffb606] text-white py-3 rounded-2xl font-body font-bold text-[16px] hover:bg-[#ffa000] shadow-[4px_4px_0_0_#ef4225] hover:shadow-[2px_2px_0_0_#ef4225] hover:translate-y-[2px] hover:translate-x-[2px] transition-all"
                            >
                                Enroll Now
                                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
