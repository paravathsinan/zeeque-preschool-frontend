"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ChevronDown, Menu, X, LogIn, Bell, Facebook, Instagram, Youtube, ArrowRight } from "lucide-react";
import { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoginModal from "./LoginModal";
import SignInModal from "./SignInModal";
import ForgotPasswordModal from "./ForgotPasswordModal";
import AdmissionFormModal from "./AdmissionFormModal";

function NavbarInner() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
    const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false);
    const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);

    useEffect(() => {
        // Auto-open login if redirected from dashboard (absorbed from TopHeader)
        const loginRequired = searchParams.get("login") === "true";
        if (loginRequired) {
            setIsSignInModalOpen(true);
            const newUrl = window.location.pathname;
            window.history.replaceState({}, '', newUrl);
        }
    }, [searchParams]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: "Home", href: "/", hasDropdown: false },
        {
            name: "About", hasDropdown: true,
            subLinks: [
                { name: "About Us", href: "/about-zeeque-preschool-kerala" },
                { name: "Mission and Vision", href: "/mission-and-vision" },
                { name: "Features", href: "/best-preschool-features-kerala" },
                { name: "Our Team", href: "/our-team" },
            ]
        },
        {
            name: "Programs", hasDropdown: true,
            subLinks: [
                { name: "Our Programs", href: "/preschool-programs-kerala" },
                { name: "Curriculum", href: "/preschool-curriculum-kerala" },
            ]
        },
        { name: "Admission", href: "/preschool-admission-kerala-2026", hasDropdown: false },
        {
            name: "Updates", hasDropdown: true,
            subLinks: [
                { name: "Events", href: "/events" },
                { name: "Gallery", href: "/gallery" },
                { name: "Resources", href: "https://drive.google.com/drive/folders/1N58LlziulWnB0qw-4dP-DVnwBrvgy8qF" },
                { name: "Kids' Magazines", href: "https://magazine.myzeeque.com/" },
            ]
        },
        {
            name: "Careers", hasDropdown: true,
            subLinks: [
                { name: "Teacher Trainees", href: "/preschool-teacher-training-kerala" },
                { name: "ZET Registration", href: "/zet-registration" },
                { name: "Grade Stream Teacher Trainees", href: "/grade-stream-teacher-training-kerala" },
                { name: "Result", href: "/result" },
            ]
        },
        { name: "Contact", href: "/contact", hasDropdown: false },
    ];

    const socialLinks = [
        { icon: Facebook, href: "https://facebook.com/zeequepreschool" },
        { icon: Instagram, href: "https://instagram.com/zeeque_preschool" },
        { icon: Youtube, href: "https://youtube.com/zeequepreschool" },
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
            <nav className="w-full bg-transparent fixed top-0 left-0 z-[100] pt-6 md:pt-8 pb-1 px-4">
                <div className="max-w-[950px] mx-auto bg-white/80 backdrop-blur-lg rounded-full shadow-[0_12px_40px_rgba(0,96,214,0.08)] pl-6 pr-1.5 py-1.5 flex items-center justify-between border border-white/60 relative z-10">
                    {/* Logo */}
                    <div className="flex justify-start shrink-0">
                        <Link href="/" className="flex items-center gap-2 shrink-0">
                             <Image
                                 src="/images/logo/logo-new.svg"
                                 alt="Zeeque Preschool - Islamic Studies & Montessori Education in Kozhikode, Kerala."
                                 width={180}
                                 height={55}
                                 className="object-contain"
                                 style={{ width: "auto", height: "55px" }}
                                 priority
                             />
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center lg:gap-0.5 xl:gap-1 px-2">
                        {navLinks.map((link, index) => (
                            <div key={link.name} className="relative group flex items-center">
                                {/* Dot separator */}
                                {index > 0 && (
                                    <span className="text-[#2D2159] mx-1.5 lg:mx-2 text-[14px] select-none font-black">•</span>
                                )}
                                {link.href ? (
                                    <Link
                                        href={link.href}
                                        className={`flex items-center gap-1 font-extrabold text-[13px] xl:text-[14px] tracking-wide transition-colors py-1 ${isLinkActive(link) ? 'text-[#0060D6]' : 'text-[#2D2159] group-hover:text-[#0060D6]'}`}
                                    >
                                         {link.name}
                                         {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 text-gray-400 stroke-[3] transition-transform duration-300 group-hover:rotate-180 group-hover:text-[#0060D6]" />}
                                     </Link>
                                 ) : (
                                     <button
                                         className={`flex items-center gap-1 font-extrabold text-[13px] xl:text-[14px] tracking-wide transition-colors py-1 cursor-pointer select-none border-none bg-transparent outline-none m-0 p-0 ${isLinkActive(link) ? 'text-[#0060D6]' : 'text-[#2D2159] group-hover:text-[#0060D6]'}`}
                                    >
                                        {link.name}
                                        {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 text-gray-400 stroke-[3] transition-transform duration-300 group-hover:rotate-180 group-hover:text-[#0060D6]" />}
                                    </button>
                                )}

                                {/* Dropdown Menu */}
                                {link.hasDropdown && link.subLinks && (
                                    <div className="absolute top-10 left-0 min-w-[220px] bg-white backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] rounded-2xl py-3 px-2 flex flex-col gap-0.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-3 group-hover:translate-y-0 border border-gray-100">
                                        {link.subLinks.map((sublink) => {
                                            const isActive = pathname === sublink.href;
                                            const isExternal = sublink.href.startsWith("http");
                                            return (
                                                <Link
                                                    key={sublink.name}
                                                    href={sublink.href}
                                                    target={isExternal ? "_blank" : "_self"}
                                                    rel={isExternal ? "noopener noreferrer" : undefined}
                                                    className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 hover:pl-5 hover:shadow-sm ${
                                                        isActive 
                                                        ? 'text-[#0060D6] bg-blue-50/50 font-bold' 
                                                        : 'text-gray-700 hover:text-[#0060D6] hover:bg-blue-50'
                                                    }`}
                                                >
                                                    {sublink.name}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="flex justify-end items-center gap-2 sm:gap-4 shrink-0">
                        {/* Enroll Now Button */}
                        <button
                            onClick={() => setIsAdmissionModalOpen(true)}
                            className="group hidden lg:flex items-center gap-2 bg-[#FFCB05] text-[#222] px-4 py-2.5 rounded-full font-extrabold text-[15px] hover:bg-[#FFD633] transition-all cursor-pointer border-none whitespace-nowrap shrink-0"
                        >
                            Enroll Now
                            <ArrowRight className="w-5 h-5 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden ml-2 w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center text-[#0060D6] transition-transform hover:scale-105"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-lg border-t border-gray-100 rounded-b-2xl overflow-hidden z-50 origin-top"
                        >
                            <div className="flex flex-col py-4 px-6 max-h-[70vh] overflow-y-auto">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col border-b border-gray-50 last:border-0">
                                    <div className="flex items-center justify-between py-3">
                                        {link.href ? (
                                            <Link
                                                href={link.href}
                                                className={`font-bold text-[16px] ${isLinkActive(link) ? 'text-[#0060D6]' : 'text-[#222]'}`}
                                                onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        ) : (
                                            <button
                                                className="font-bold text-[16px] text-left cursor-pointer border-none bg-transparent outline-none flex-1 select-none text-[#222]"
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
                                                className={`p-2 transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180 text-[#0060D6]' : 'text-gray-400'}`}
                                            >
                                                <ChevronDown className="w-5 h-5" />
                                            </button>
                                        )}
                                    </div>

                                    {/* Mobile Dropdown */}
                                    {link.hasDropdown && openDropdown === link.name && link.subLinks && (
                                        <div className="flex flex-col pl-4 pb-4 space-y-1">
                                            {link.subLinks.map((sublink) => {
                                                const isExternal = sublink.href.startsWith("http");
                                                return (
                                                    <Link
                                                        key={sublink.name}
                                                        href={sublink.href}
                                                        target={isExternal ? "_blank" : "_self"}
                                                        rel={isExternal ? "noopener noreferrer" : undefined}
                                                        className={`text-[15px] font-medium py-2 px-3 rounded-lg transition-colors ${pathname === sublink.href ? 'bg-blue-50 text-[#0060D6]' : 'text-gray-600 hover:text-[#0060D6]'}`}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {sublink.name}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            ))}

                            <div className="mt-8 flex flex-col gap-6">
                                {/* Social Media Icons */}
                                <div className="flex items-center justify-center gap-5 pt-2">
                                    {socialLinks.map((social, index) => (
                                        <Link
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0060D6] hover:bg-blue-100 transition-all hover:scale-110"
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </Link>
                                    ))}
                                </div>

                                <button
                                    onClick={() => { setIsSignInModalOpen(true); setIsMobileMenuOpen(false); }}
                                    className="flex items-center justify-center gap-2 bg-[#FFCB05] text-[#222] py-2.5 rounded-full font-bold text-[15px] hover:bg-[#FFD633] shadow-[0_4px_12px_rgba(255,203,5,0.35)] transition-all cursor-pointer border-none"
                                >
                                    Login
                                    <LogIn className="w-5 h-5 stroke-[2.5]" />
                                </button>
                            </div>
                        </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <LoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
                onSwitchToSignIn={() => {
                    setIsLoginModalOpen(false);
                    setIsSignInModalOpen(true);
                }}
            />

            <SignInModal
                isOpen={isSignInModalOpen}
                onClose={() => setIsSignInModalOpen(false)}
                onSwitchToSignUp={() => {
                    setIsSignInModalOpen(false);
                    setIsLoginModalOpen(true);
                }}
                onForgotPassword={() => {
                    setIsSignInModalOpen(false);
                    setIsForgotPasswordModalOpen(true);
                }}
            />

            <ForgotPasswordModal
                isOpen={isForgotPasswordModalOpen}
                onClose={() => setIsForgotPasswordModalOpen(false)}
            />

            <AdmissionFormModal
                isOpen={isAdmissionModalOpen}
                onClose={() => setIsAdmissionModalOpen(false)}
            />
        </>
    );
}

export default function Navbar() {
    return (
        <Suspense fallback={null}>
            <NavbarInner />
        </Suspense>
    );
}
