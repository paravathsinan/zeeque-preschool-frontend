"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, ArrowRight, Send } from "lucide-react";

const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Online Applications", href: "/applications" },
    { label: "News & Events", href: "/events" },
    { label: "Image Gallery", href: "/gallery" },
    { label: "Downloads", href: "/downloads" },
    { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden">

            {/* Main Footer */}
            <div className="bg-[#1a1a2e] pt-20 pb-12 relative">

                {/* Subtle pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />

                {/* Decorative floating shapes */}
                <div className="absolute top-8 right-[10%] w-16 h-16 rounded-full border-4 border-dotted border-[#fbaf01]/15 pointer-events-none hidden lg:block" />
                <div className="absolute bottom-24 left-[5%] w-10 h-10 rounded-full bg-[#c13088]/10 pointer-events-none hidden lg:block" />

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">

                        {/* Column 1: Logo & Contact Info */}
                        <div>
                            <Link href="/" className="inline-block mb-6">
                                <Image
                                    src="/images/logo/logo-new.svg"
                                    alt="ZeeQue"
                                    width={140}
                                    height={55}
                                    className="object-contain"
                                />
                            </Link>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3 group">
                                    <div className="w-9 h-9 rounded-lg bg-[#ef4225]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ef4225]/20 transition-colors">
                                        <MapPin className="w-4 h-4 text-[#ef4225]" />
                                    </div>
                                    <p className="text-gray-400 font-body text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                        Head Quarters - Zahra Park, Koduvally,<br />
                                        Kozhikode, Kerala, India - 673572
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 group">
                                    <div className="w-9 h-9 rounded-lg bg-[#0052ff]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0052ff]/20 transition-colors">
                                        <Phone className="w-4 h-4 text-[#0052ff]" />
                                    </div>
                                    <div className="text-gray-400 font-body text-sm group-hover:text-gray-300 transition-colors">
                                        <p>+91 9072500435</p>
                                        <p className="text-gray-500 text-xs">Land: 0495 221 4005</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 group">
                                    <div className="w-9 h-9 rounded-lg bg-[#0b8641]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0b8641]/20 transition-colors">
                                        <Mail className="w-4 h-4 text-[#0b8641]" />
                                    </div>
                                    <a href="mailto:zanetwork@zeeque.in" className="text-gray-400 font-body text-sm hover:text-[#0b8641] transition-colors">
                                        zanetwork@zeeque.in
                                    </a>
                                </div>
                            </div>

                            {/* Social Icons */}
                            <div className="flex items-center gap-3">
                                <a href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#1877F2] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#1877F2]/20">
                                    <Facebook className="w-4 h-4" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#e6683c]/20">
                                    <Instagram className="w-4 h-4" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#FF0000] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#FF0000]/20">
                                    <Youtube className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Company Links */}
                        <div>
                            <h3 className="font-heading font-bold text-white text-lg mb-6 relative">
                                Our Company
                                <span className="absolute -bottom-2 left-0 w-10 h-[3px] bg-[#ef4225] rounded-full" />
                            </h3>

                            <ul className="space-y-3">
                                {companyLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center gap-2 text-gray-400 font-body text-[15px] hover:text-white transition-colors duration-300"
                                        >
                                            <ArrowRight className="w-3.5 h-3.5 text-[#ef4225] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                                                {link.label}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Enquire Now Form */}
                        <div>
                            <h3 className="font-heading font-bold text-white text-lg mb-6 relative">
                                Enquire Now
                                <span className="absolute -bottom-2 left-0 w-10 h-[3px] bg-[#ef4225] rounded-full" />
                            </h3>

                            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 font-body focus:outline-none focus:border-[#ef4225]/50 focus:bg-white/[0.08] transition-all duration-300"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 font-body focus:outline-none focus:border-[#ef4225]/50 focus:bg-white/[0.08] transition-all duration-300"
                                />
                                <input
                                    type="tel"
                                    placeholder="Your Phone"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 font-body focus:outline-none focus:border-[#ef4225]/50 focus:bg-white/[0.08] transition-all duration-300"
                                />
                                <textarea
                                    placeholder="Message"
                                    rows={3}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 font-body focus:outline-none focus:border-[#ef4225]/50 focus:bg-white/[0.08] transition-all duration-300 resize-none"
                                />
                                <button
                                    type="submit"
                                    className="group flex items-center justify-center gap-2 bg-[#ef4225] text-white px-8 py-3 rounded-xl font-heading font-bold text-sm uppercase tracking-wider hover:bg-[#d93a1e] transition-all duration-300 hover:shadow-lg hover:shadow-[#ef4225]/30 hover:scale-[1.02] w-full sm:w-auto"
                                >
                                    Submit Now
                                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="bg-[#12121f] py-5">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 text-center">
                    <p className="text-gray-500 font-body text-sm">
                        All Rights Reserved by <span className="text-[#ef4225] font-medium">ZeeQue</span> - 2013 to 2026
                    </p>
                </div>
            </div>
        </footer>
    );
}
