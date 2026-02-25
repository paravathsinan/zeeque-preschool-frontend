"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const navLinks = [
        { name: "Home", href: "/", hasDropdown: false },
        {
            name: "Pages", href: "/pages", hasDropdown: true,
            subLinks: [
                { name: "About Us", href: "/about" },
                { name: "Pricing Plan", href: "/pricing" },
                { name: "Image Gallery", href: "/gallery" },
                { name: "Apply For Admission!", href: "/admission" },
                { name: "404", href: "/404" },
            ]
        },
        {
            name: "Teacher", href: "/teacher", hasDropdown: true,
            subLinks: [
                { name: "Teachers", href: "/teachers" },
                { name: "Teacher Details", href: "/teacher-details" },
            ]
        },
        {
            name: "Programs", href: "/programs", hasDropdown: true,
            subLinks: [
                { name: "Programs", href: "/programs" },
                { name: "Program Details", href: "/program-details" },
            ]
        },
        {
            name: "Blog", href: "/blog", hasDropdown: true,
            subLinks: [
                { name: "Blog Grid", href: "/blog-grid" },
                { name: "Blog Standard", href: "/blog-standard" },
                { name: "Blog Details", href: "/blog-details" },
            ]
        },
        { name: "Contact", href: "/contact", hasDropdown: false },
    ];

    const toggleMobileDropdown = (name: string) => {
        if (openDropdown === name) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(name);
        }
    };

    return (
        <nav className="w-full bg-transparent dark:bg-slate-900 relative z-50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
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
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            <Link
                                href={link.href}
                                className={`flex items-center gap-1 font-heading font-bold text-[17px] transition-colors py-4 ${link.name === 'Home' ? 'text-primary' : 'text-[#222222] dark:text-gray-200 group-hover:text-primary dark:group-hover:text-primary'
                                    }`}
                            >
                                {link.name}
                                {link.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400 stroke-[3] transition-transform duration-300 group-hover:rotate-180 group-hover:text-primary" />}
                            </Link>

                            {/* Dropdown Menu */}
                            {link.hasDropdown && link.subLinks && (
                                <div className="absolute top-14 left-0 min-w-[200px] bg-white dark:bg-slate-800 shadow-xl rounded-xl py-4 flex flex-col opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0 border border-gray-100 dark:border-slate-700">
                                    {link.subLinks.map((sublink) => (
                                        <Link
                                            key={sublink.name}
                                            href={sublink.href}
                                            className="px-6 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-orange-50 dark:hover:bg-slate-700 transition-colors"
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
                <div className="flex items-center gap-2 sm:gap-4">

                    <Link
                        href="/enroll"
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
                <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg border-t border-gray-100 dark:border-slate-800 rounded-b-2xl overflow-hidden z-50 transition-colors duration-300">
                    <div className="flex flex-col py-4 px-6 max-h-[70vh] overflow-y-auto">
                        {navLinks.map((link) => (
                            <div key={link.name} className="flex flex-col border-b border-gray-50 dark:border-slate-800 last:border-0">
                                <div className="flex items-center justify-between py-3">
                                    <Link
                                        href={link.href}
                                        className={`font-heading font-bold text-[16px] ${link.name === 'Home' ? 'text-primary' : 'text-[#222222] dark:text-gray-200'}`}
                                        onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.hasDropdown && (
                                        <button onClick={() => toggleMobileDropdown(link.name)} className="p-1">
                                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180 text-primary' : 'text-gray-400'}`} />
                                        </button>
                                    )}
                                </div>

                                {/* Mobile Dropdown */}
                                {link.hasDropdown && openDropdown === link.name && link.subLinks && (
                                    <div className="flex flex-col pl-4 pb-3 space-y-2">
                                        {link.subLinks.map((sublink) => (
                                            <Link
                                                key={sublink.name}
                                                href={sublink.href}
                                                className="text-sm font-medium text-gray-600 hover:text-primary py-1"
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
                                href="/enroll"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center gap-2 bg-[#ffb606] text-white w-full py-3 rounded-xl font-body font-bold text-[16px] hover:bg-[#ffa000] shadow-[4px_4px_0_0_#ef4225] hover:shadow-[2px_2px_0_0_#ef4225] hover:translate-y-[2px] hover:translate-x-[2px] transition-all opacity-100"
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
