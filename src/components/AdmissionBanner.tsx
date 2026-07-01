"use client";

import Image from "next/image";

export default function AdmissionBanner() {
    return (
        <section className="relative py-16 md:py-20 overflow-hidden bg-white">
            {/* Blue wavy top divider */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-[5]">
                <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto" preserveAspectRatio="none">
                    <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,0 L0,0 Z" fill="#EAF4FF"/>
                </svg>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 relative z-10">
                {/* Floating decorations fixed to container */}
                <div className="absolute top-[40%] left-[10px] xl:-left-[40px] z-[2] animate-float hidden lg:block">
                    <Image src="/images/assets/3d-elements/3d-parachute.png" alt="" width={70} height={100} className="object-contain drop-shadow-md" />
                </div>
                <div className="absolute top-[60%] right-[10px] xl:-right-[40px] z-[2] animate-float-reverse hidden lg:block" style={{ transform: 'rotate(15deg)' }}>
                    <Image src="/images/assets/3d-elements/3d-cubeA.png" alt="" width={50} height={50} className="object-contain drop-shadow-md" />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
                    {/* Left — 3D Kid 2 (jumping boy) */}
                    <div className="hidden md:flex flex-1 justify-center md:justify-end animate-float">
                        <Image
                            src="/images/assets/3d-elements/3d-kid2.png"
                            alt="Excited student jumping"
                            width={180}
                            height={210}
                            className="object-contain"
                        />
                    </div>

                    {/* Center — Admission Banner Image */}
                    <div className="flex-shrink-0 flex justify-center">
                        <Image
                            src="/images/assets/images/admission.png"
                            alt="Admission Open 2026 Academic Year - ZeeQue Preschool - Nurturing Faith, Building Futures"
                            width={500}
                            height={280}
                            className="object-contain w-full max-w-[500px] h-auto rounded-3xl"
                            priority
                        />
                    </div>

                    {/* Right — 3D Kid 1 (pointing boy) */}
                    <div className="hidden md:flex flex-1 justify-center md:justify-start animate-float-reverse">
                        <Image
                            src="/images/assets/3d-elements/3d-kid1.png"
                            alt="Curious student exploring"
                            width={160}
                            height={180}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Blue wavy bottom divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-[5]">
                <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto" preserveAspectRatio="none">
                    <path d="M0,30 C240,0 480,60 720,30 C960,0 1200,60 1440,30 L1440,60 L0,60 Z" fill="#EAF4FF"/>
                </svg>
            </div>
        </section>
    );
}
