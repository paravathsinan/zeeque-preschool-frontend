"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function NewsletterCta() {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            setEmail("");
            setTimeout(() => setIsSubmitted(false), 3000);
        }
    };

    return (
        <section className="relative py-20 overflow-hidden bg-white">
            {/* Cloud-bump top edge in blue */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-[5] -translate-y-[1px]">
                <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto" preserveAspectRatio="none">
                    <path d="M0,80 C100,40 200,80 300,40 C400,0 500,60 600,40 C700,20 800,60 900,40 C1000,20 1100,60 1200,40 C1300,20 1400,60 1440,40 L1440,80 L0,80 Z" fill="#0060D6"/>
                </svg>
            </div>

            <div className="max-w-[1140px] mx-auto px-4">
                <div className="relative bg-[#0060D6] rounded-[30px] px-8 md:px-16 py-12 md:py-16 overflow-hidden">

                    {/* Inner decorative circles */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        {/* Left — Kid with book */}
                        <div className="flex-shrink-0 hidden md:block">
                            <Image
                                src="/images/assets/images/kid-footer.png"
                                alt="Muslim student holding a book"
                                width={250}
                                height={300}
                                className="object-contain"
                            />
                        </div>

                        {/* Right — Content */}
                        <div className="flex-1 text-center md:text-left">
                            <span className="inline-block text-[#FFCB05] font-bold text-sm tracking-wider uppercase mb-3">
                                Get Connected
                            </span>
                            <h2 className="text-white font-extrabold text-2xl md:text-3xl leading-tight mb-6">
                                Subscribe For Education That Sparks Imagination, Nurtures Curiosity
                            </h2>

                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-3 max-w-[480px]">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-1 bg-white rounded-full px-6 py-3.5 text-[#222] text-sm placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#FFCB05] transition-all"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="flex items-center justify-center gap-2 bg-[#EF4225] text-white px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#d93a1e] transition-all cursor-pointer border-none shadow-[0_4px_12px_rgba(239,66,37,0.35)]"
                                >
                                    {isSubmitted ? "Sent ✓" : (
                                        <>
                                            Submit
                                            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating decorations */}
            <div className="absolute top-[20%] right-[5%] z-[2] animate-float-reverse hidden lg:block" style={{ transform: 'rotate(15deg)' }}>
                <Image src="/images/assets/3d-elements/3d-cubeA.png" alt="" width={40} height={40} className="object-contain" />
            </div>
            <div className="absolute bottom-[15%] left-[5%] z-[2] animate-float hidden lg:block" style={{ transform: 'rotate(-10deg)' }}>
                <Image src="/images/assets/3d-elements/3d-cubeB.png" alt="" width={35} height={35} className="object-contain" />
            </div>
        </section>
    );
}
