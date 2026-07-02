"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Send, ArrowRight } from "lucide-react";

export default function Footer() {
    const [message, setMessage] = useState("");

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;
        const phoneNumber = "919072500435";
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
        setMessage("");
    };

    return (
        <footer className="bg-transparent">
            <div className="relative">
                {/* Top Cloud Divider (Blue) - Many Cloud Shapes */}
                <div className="absolute top-0 left-0 w-full leading-none z-0 pointer-events-none -mt-[59px] md:-mt-[99px]">
                    <svg viewBox="0 0 1440 100" fill="none" className="w-full h-[60px] md:h-[100px]" preserveAspectRatio="none">
                        <path d="M0,100 L0,60 C 30,0 100,0 130,60 C 160,25 210,25 240,60 C 270,0 340,0 370,60 C 400,25 450,25 480,60 C 510,0 580,0 610,60 C 640,25 690,25 720,60 C 750,0 820,0 850,60 C 880,25 930,25 960,60 C 990,0 1060,0 1090,60 C 1120,25 1170,25 1200,60 C 1230,0 1300,0 1330,60 C 1360,25 1410,25 1440,60 L1440,100 Z" className="fill-sky-400"/>
                    </svg>
                </div>

                <div className="bg-gradient-to-b from-sky-400 to-sky-600 pt-0 pb-10 relative z-10">
                
                {/* Background SVG Decor */}
                <div className="absolute top-20 left-10 opacity-10 transform -rotate-12 w-24 h-24 hidden md:block">
                    <Image src="/images/assets/icons/Test.svg" alt="Icon" fill className="object-contain" />
                </div>
                <div className="absolute bottom-20 left-[20%] opacity-10 transform rotate-12 w-32 h-32 hidden md:block z-10 pointer-events-none">
                    <Image src="/images/assets/icons/Teaching.svg" alt="Icon" fill className="object-contain" />
                </div>
                <div className="absolute top-40 right-10 opacity-10 transform rotate-45 w-20 h-20 hidden md:block">
                    <Image src="/images/assets/icons/Geology.svg" alt="Icon" fill className="object-contain" />
                </div>
                <div className="absolute bottom-40 right-20 opacity-10 transform -rotate-12 w-28 h-28 hidden md:block z-10 pointer-events-none">
                    <Image src="/images/assets/icons/Trophy.svg" alt="Icon" fill className="object-contain" />
                </div>
                <div className="absolute top-1/2 left-[50%] opacity-10 transform rotate-[-20deg] w-16 h-16 hidden md:block z-10 pointer-events-none">
                    <Image src="/images/assets/icons/Book pen.svg" alt="Icon" fill className="object-contain" />
                </div>
                <div className="absolute bottom-1/4 left-[8%] opacity-10 transform rotate-12 w-20 h-20 hidden md:block z-10 pointer-events-none">
                    <Image src="/images/assets/icons/Language.svg" alt="Icon" fill className="object-contain" />
                </div>

                {/* Mobile Background SVG Decor */}
                <div className="absolute top-[5%] left-4 opacity-10 transform -rotate-12 w-16 h-16 md:hidden z-10 pointer-events-none">
                    <Image src="/images/assets/icons/Test.svg" alt="Icon" fill className="object-contain" />
                </div>
                <div className="absolute top-[18%] right-6 opacity-10 transform rotate-45 w-20 h-20 md:hidden z-10 pointer-events-none">
                    <Image src="/images/assets/icons/Geology.svg" alt="Icon" fill className="object-contain" />
                </div>
                <div className="absolute top-[35%] left-8 opacity-10 transform rotate-12 w-24 h-24 md:hidden z-10 pointer-events-none">
                    <Image src="/images/assets/icons/Teaching.svg" alt="Icon" fill className="object-contain" />
                </div>
                <div className="absolute top-[55%] right-8 opacity-10 transform -rotate-12 w-20 h-20 md:hidden z-10 pointer-events-none">
                    <Image src="/images/assets/icons/Trophy.svg" alt="Icon" fill className="object-contain" />
                </div>
                <div className="absolute top-[75%] left-[10%] opacity-10 transform rotate-[-20deg] w-16 h-16 md:hidden z-10 pointer-events-none">
                    <Image src="/images/assets/icons/Book pen.svg" alt="Icon" fill className="object-contain" />
                </div>
                <div className="absolute top-[85%] right-[15%] opacity-10 transform rotate-12 w-20 h-20 md:hidden z-10 pointer-events-none">
                    <Image src="/images/assets/icons/Tools.svg" alt="Icon" fill className="object-contain" />
                </div>
                <div className="absolute bottom-[30%] left-[15%] opacity-10 transform -rotate-15 w-24 h-24 md:hidden z-10 pointer-events-none">
                    <Image src="/images/assets/icons/Geology.svg" alt="Icon" fill className="object-contain" />
                </div>
                <div className="absolute bottom-[20%] right-[10%] opacity-10 transform rotate-[25deg] w-16 h-16 md:hidden z-10 pointer-events-none">
                    <Image src="/images/assets/icons/Library.svg" alt="Icon" fill className="object-contain" />
                </div>
                <div className="absolute bottom-[10%] right-6 opacity-10 transform rotate-12 w-16 h-16 md:hidden z-10 pointer-events-none">
                    <Image src="/images/assets/icons/Language.svg" alt="Icon" fill className="object-contain" />
                </div>
                <div className="absolute bottom-[5%] left-[10%] opacity-10 transform -rotate-45 w-16 h-16 md:hidden z-10 pointer-events-none">
                    <Image src="/images/assets/icons/Boy Student.svg" alt="Icon" fill className="object-contain" />
                </div>
                <div className="absolute bottom-[2%] left-[40%] opacity-10 transform -rotate-15 w-20 h-20 md:hidden z-10 pointer-events-none">
                    <Image src="/images/assets/icons/Bag.svg" alt="Icon" fill className="object-contain" />
                </div>

                <div className="max-w-[1300px] mx-auto px-4 xl:px-8 relative z-20">
                    {/* Yellow Subscription Banner */}
                    <div className="max-w-[1050px] mx-auto relative bg-[#FFDE00] rounded-[30px] md:rounded-[40px] px-8 py-4 md:px-12 md:py-6 flex flex-col md:flex-row items-center justify-between mt-40 md:mt-48 mb-10 shadow-xl overflow-visible">
                        {/* Kid Image */}
                        <div className="hidden md:block absolute bottom-0 left-0 md:left-4 lg:left-8 w-[260px] lg:w-[380px] h-[155%] pointer-events-none z-10">
                            <Image 
                                src="/images/assets/images/kid-footer.png" 
                                alt="Kid" 
                                fill 
                                className="object-contain object-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)]"
                            />
                        </div>
                        
                        <div className="w-full md:w-[65%] lg:w-[60%] md:ml-auto z-20 relative">
                            <p className="text-[#222] font-extrabold text-sm md:text-base mb-1">
                                Get Connected
                            </p>
                            <h2 className="text-[#222] font-heading font-black text-2xl md:text-3xl lg:text-[32px] leading-tight mb-4 max-w-lg pr-4">
                                Subscribe For Education That Sparks Imagination, Nurtures Curiosity
                            </h2>
                            <form className="relative w-full max-w-lg" onSubmit={handleWhatsAppSubmit}>
                                <input 
                                    type="text" 
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Send a message" 
                                    className="w-full bg-white rounded-full py-4 pl-6 pr-[120px] outline-none text-gray-700 shadow-sm font-medium"
                                />
                                <button type="submit" className="absolute top-[6px] right-[6px] bottom-[6px] bg-[#FE3051] text-white font-bold rounded-full px-6 flex items-center gap-2 hover:bg-[#E62846] transition-colors">
                                    Send <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Footer Content Columns */}
                    <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-12 lg:gap-8 mb-16 pt-8 divide-y divide-white/20 md:divide-y-0 text-center md:text-left">
                        {/* Column 1: Brand & Contact */}
                        <div className="space-y-6 flex flex-col items-center md:items-start pb-8 pt-0 md:py-0">
                            <div className="flex items-center gap-2">
                                {/* Logo with natural colors */}
                                <Image
                                    src="/images/logo/logo-new.svg"
                                    alt="Zeeque Preschool"
                                    width={120}
                                    height={35}
                                    className="object-contain" 
                                />
                            </div>
                            <div className="text-white space-y-3 font-medium text-sm md:text-base pt-2 flex flex-col items-center md:items-start">
                                <a href="tel:+919072500435" className="block hover:text-[#FFC107] transition-colors">+91 9072 500 435</a>
                                <a href="mailto:zqnetwork@zeeque.in" className="block hover:text-[#FFC107] transition-colors">zqnetwork@zeeque.in</a>
                            </div>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div className="flex flex-col items-center md:items-start py-8 md:py-0">
                            <h3 className="font-bold text-white text-lg mb-6">Quick Links</h3>
                            <ul className="space-y-4 flex flex-col items-center md:items-start">
                                <li><Link href="/preschool-programs-kerala" className="text-white/80 hover:text-white transition-colors">Our Programs</Link></li>
                                <li><Link href="/preschool-curriculum-kerala" className="text-white/80 hover:text-white transition-colors">Curriculum</Link></li>
                                <li><Link href="/preschool-admission-kerala-2026" className="text-white/80 hover:text-white transition-colors">Admissions 2026</Link></li>
                                <li><Link href="?login=true" className="text-white/80 hover:text-white transition-colors">Login Portal</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Company */}
                        <div className="flex flex-col items-center md:items-start py-8 md:py-0">
                            <h3 className="font-bold text-white text-lg mb-6">Company</h3>
                            <ul className="space-y-4 flex flex-col items-center md:items-start">
                                <li><Link href="/about-zeeque-preschool-kerala" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
                                <li><Link href="/best-preschool-features-kerala" className="text-white/80 hover:text-white transition-colors">Our Features</Link></li>
                                <li><Link href="/events" className="text-white/80 hover:text-white transition-colors">News & Events</Link></li>
                                <li><Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Updates */}
                        <div className="flex flex-col items-center md:items-start pt-8 md:pt-0">
                            <h3 className="font-bold text-white text-lg mb-6">Updates</h3>
                            <ul className="space-y-4 flex flex-col items-center md:items-start">
                                <li><Link href="/events" className="text-white/80 hover:text-white transition-colors">Events</Link></li>
                                <li><Link href="/gallery" className="text-white/80 hover:text-white transition-colors">Gallery</Link></li>
                                <li><Link href="/resources" className="text-white/80 hover:text-white transition-colors">Resources</Link></li>
                                <li><Link href="/kids-magazines" className="text-white/80 hover:text-white transition-colors">Kids' Magazines</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#0060D6] hover:scale-110 transition-transform shadow-sm">
                                <Facebook className="w-4 h-4 fill-current" stroke="none" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#0060D6] hover:scale-110 transition-transform shadow-sm">
                                <Twitter className="w-4 h-4 fill-current" stroke="none" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#0060D6] hover:scale-110 transition-transform shadow-sm">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#0060D6] hover:scale-110 transition-transform shadow-sm">
                                <Youtube className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Logo center */}
                        <div className="hidden md:block">
                            <Image
                                src="/images/logo/logo-new.svg"
                                alt="Zeeque Preschool"
                                width={90}
                                height={25}
                                className="object-contain" 
                            />
                        </div>

                        {/* Copyright */}
                        <div className="text-white/80 text-sm font-medium">
                            © {new Date().getFullYear()} Zeeque Preschool. All rights reserved
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    );
}
