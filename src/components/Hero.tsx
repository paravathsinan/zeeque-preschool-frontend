"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full h-[500px] sm:h-[600px] md:h-[750px] lg:h-[850px] overflow-hidden z-0 bg-white">
            
            {/* Background — hero-section-bg.png (blue sky + cityscape + clouds) */}
            <div className="absolute top-0 left-0 w-full h-[82%] sm:h-[78%] md:h-[75%] -z-10 bg-[#1ba8e5]">
                <Image
                    src="/images/assets/images/hero-section-bg.png"
                    alt="Blue sky background with cityscape"
                    fill
                    className="object-cover object-bottom"
                    priority
                    sizes="100vw"
                />
                
                {/* Cloud Shape Divider at the bottom of the blue section */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
                    <svg className="w-full h-[30px] md:h-[45px] lg:h-[60px]" preserveAspectRatio="none" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,100 L0,40 Q60,-20 120,40 Q180,-20 240,40 Q300,-20 360,40 Q420,-20 480,40 Q540,-20 600,40 Q660,-20 720,40 Q780,-20 840,40 Q900,-20 960,40 Q1020,-20 1080,40 Q1140,-20 1200,40 Q1260,-20 1320,40 Q1380,-20 1440,40 L1440,100 Z" fill="white"/>
                    </svg>
                </div>
            </div>

            {/* ===== Floating 3D Objects (Positioned relative to the center container to prevent zooming issues) ===== */}
            <div className="absolute inset-0 w-full h-full max-w-[1440px] mx-auto pointer-events-none z-10">
                
                {/* Biplane (far top left) */}
                <div className="absolute top-[18%] left-[2%] xl:left-[6%] hidden md:block" style={{ transform: 'rotate(-5deg)' }}>
                    <Image src="/images/assets/3d-elements/3d-airplane.png" alt="" width={160} height={110} className="object-contain drop-shadow-lg w-[120px] lg:w-[150px]" />
                </div>

                {/* Sun (far top right) */}
                <div className="absolute top-[12%] right-[2%] xl:right-[6%] hidden md:block">
                    <Image src="/images/assets/3d-elements/3d-sun.png" alt="" width={220} height={220} className="object-contain drop-shadow-md w-[160px] lg:w-[210px]" />
                </div>

                {/* Cloud Left (far mid left) */}
                <div className="absolute top-[32%] left-[4%] xl:left-[8%] hidden md:block">
                    <Image src="/images/assets/3d-elements/3d-cloud.png" alt="" width={200} height={120} className="object-contain opacity-95 w-[140px] lg:w-[190px]" />
                </div>

                {/* Cloud Right (far mid right) */}
                <div className="absolute top-[32%] right-[1%] xl:right-[4%] hidden md:block" style={{ transform: 'scaleX(-1)' }}>
                    <Image src="/images/assets/3d-elements/3d-cloud.png" alt="" width={220} height={130} className="object-contain opacity-95 w-[160px] lg:w-[200px]" />
                </div>

                {/* Red Cube A (near left cloud) */}
                <div className="absolute top-[26%] left-[14%] xl:left-[18%] hidden md:block" style={{ transform: 'rotate(-25deg)' }}>
                    <Image src="/images/assets/3d-elements/3d-cubeA.png" alt="" width={45} height={45} className="object-contain drop-shadow-lg w-[35px] lg:w-[45px]" />
                </div>

                {/* Yellow Cube B (mid right) */}
                <div className="absolute top-[42%] right-[4%] xl:right-[8%] hidden md:block" style={{ transform: 'rotate(20deg)' }}>
                    <Image src="/images/assets/3d-elements/3d-cubeB.png" alt="" width={50} height={50} className="object-contain drop-shadow-lg w-[40px] lg:w-[50px]" />
                </div>

                {/* Parachute (bottom right) */}
                <div className="absolute top-[58%] right-[1%] xl:right-[4%] z-40 hidden md:block" style={{ transform: 'rotate(-5deg)' }}>
                    <Image src="/images/assets/3d-elements/3d-parachute.png" alt="3D Parachute" width={110} height={140} className="object-contain drop-shadow-lg w-[80px] lg:w-[110px]" />
                </div>

                {/* ===== Mobile Only Floating Elements ===== */}
                {/* Sun */}
                <div className="absolute top-[8%] right-[2%] md:hidden z-10">
                    <Image src="/images/assets/3d-elements/3d-sun.png" alt="" width={80} height={80} className="object-contain drop-shadow-md w-[70px]" />
                </div>
                {/* Cloud Left */}
                <div className="absolute top-[28%] left-[2%] md:hidden z-10" style={{ transform: 'rotate(-10deg)' }}>
                    <Image src="/images/assets/3d-elements/3d-cloud.png" alt="" width={80} height={50} className="object-contain drop-shadow-md opacity-90 w-[80px]" />
                </div>
                {/* Airplane */}
                <div className="absolute top-[35%] right-[4%] md:hidden z-10" style={{ transform: 'rotate(-15deg)' }}>
                    <Image src="/images/assets/3d-elements/3d-airplane.png" alt="" width={80} height={55} className="object-contain drop-shadow-md w-[75px]" />
                </div>
                {/* Cube */}
                <div className="absolute top-[16%] left-[10%] md:hidden z-10" style={{ transform: 'rotate(-20deg)' }}>
                    <Image src="/images/assets/3d-elements/3d-cubeA.png" alt="" width={30} height={30} className="object-contain drop-shadow-md w-[25px]" />
                </div>
                {/* Parachute */}
                <div className="absolute top-[62%] left-[5%] md:hidden z-30" style={{ transform: 'rotate(10deg)' }}>
                    <Image src="/images/assets/3d-elements/3d-parachute.png" alt="" width={60} height={80} className="object-contain drop-shadow-md w-[50px]" />
                </div>
            </div>

            {/* ===== Main Content Area (Heading + CTA) ===== */}
            <div className="absolute top-[22%] sm:top-[20%] md:top-[14%] left-1/2 -translate-x-1/2 w-full z-20 flex flex-col items-center px-4">
                
                    {/* Heading Wrapper Container for Relative Icons */}
                    <div className="relative inline-block text-center mb-6 mt-4 md:mt-6">

                    {/* Hero Heading */}
                    <h1 className="hero-heading relative z-20 leading-[1.05]">
                        WELCOME TO ZEEQUE <br />
                        PRESCHOOL
                    </h1>
                </div>

                {/* CTA Area — Mobile Only */}
                <div className="flex md:hidden flex-wrap items-center justify-center gap-3 z-40 relative mt-4 pb-4">
                    <Link
                        href="/preschool-admission-kerala-2026#apply"
                        className="group flex items-center gap-2 bg-[#FFCB05] text-[#222] px-6 py-3 rounded-full font-bold text-[15px] tracking-wide shadow-[4px_4px_0_0_#0060D6] border-none cursor-pointer"
                    >
                        Enquiry Now
                        <ArrowRight className="w-4 h-4 stroke-[3]" />
                    </Link>

                    <div className="flex items-center gap-2 bg-white/70 backdrop-blur-md px-5 py-2.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50">
                        <div className="relative group cursor-pointer inline-flex">
                            <Image src="/images/icons/about-us-icon1.png" alt="Contact icon" width={32} height={32} className="object-contain" />
                        </div>
                        <div className="flex flex-col justify-center text-left">
                            <span className="text-[10px] text-gray-700 font-extrabold mb-0.5 tracking-wider uppercase leading-none">Admission Counsellor</span>
                            <a href="tel:+919072500435">
                                <span className="font-extrabold text-[#0060D6] text-[16px] tracking-wide leading-none">+91 9072 500 435</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            {/* ===== Kids Group — Anchored absolutely at the bottom! ===== */}
            <div className="absolute bottom-[-1%] md:bottom-[-2%] left-1/2 -translate-x-1/2 w-[98%] max-w-[1250px] z-30 flex justify-center pointer-events-none">
                <Image
                    src="/images/assets/images/kids-group.png"
                    alt="Muslim children sitting together reading and learning at ZeeQue Preschool"
                    width={1250}
                    height={450}
                    className="object-contain w-full h-auto"
                    priority
                />
            </div>

        </section>
    );
}
