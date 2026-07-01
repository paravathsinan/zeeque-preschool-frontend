import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FranchiseApplicationForm from "@/components/franchise/FranchiseApplicationForm";

export const metadata: Metadata = {
    title: "Start a Franchise | Zeeque Preschool",
    description: "Partner with Zeeque Preschool and start your own successful branch. Join 152+ branches across Kerala.",
};

export default function FranchisePage() {
    return (
        <main className="min-h-screen bg-white font-body selection:bg-[#FFCB05] selection:text-[#222]">
            <Navbar />

            {/* Banner Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F4F9FF]">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0060D6]/5 blur-[120px] rounded-bl-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-[#FFC107]/10 blur-[100px] rounded-tr-full pointer-events-none" />
                
                {/* 3D Elements */}
                <div className="absolute top-20 right-[10%] z-0 hidden md:block animate-float">
                    <Image src="/images/assets/3d-elements/3d-cloud.png" alt="Cloud" width={100} height={100} className="object-contain opacity-60" />
                </div>
                <div className="absolute bottom-10 left-[5%] z-0 hidden lg:block animate-float-medium">
                    <Image src="/images/assets/3d-elements/3d-cubeA.png" alt="Cube" width={80} height={80} className="object-contain opacity-50" />
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10 text-center">
                    {/* Breadcrumbs */}
                    <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-500 mb-6">
                        <Link href="/" className="hover:text-[#0060D6] transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-[#0060D6]">Franchise Enquiry</span>
                    </div>
                    <h1 className="text-[#1A2B4C] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-quicksand">
                        Start Your Own <span className="text-[#0060D6]">Zeeque Franchise</span>
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-medium">
                        Join our fast-growing network of 152+ successful branches. Bring premium Islamic Montessori education to your city.
                    </p>
                </div>
                
                {/* Bottom Cloud divider */}
                <div className="absolute bottom-0 left-0 w-full leading-none z-20 translate-y-[1px] pointer-events-none">
                    <svg viewBox="0 0 1440 100" fill="none" className="w-full h-[40px] md:h-[80px]" preserveAspectRatio="none">
                        <path d="M0,100 C240,100 480,10 720,10 C960,10 1200,100 1440,100 L1440,100 L0,100 Z" fill="#ffffff" />
                    </svg>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16 md:py-24 relative bg-white">
                <div className="max-w-[800px] mx-auto px-4 xl:px-8 relative z-10">
                    <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-gray-100 relative">
                        {/* Decorative corner element */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-[url('/images/assets/pattern-dots.svg')] bg-repeat opacity-20 pointer-events-none" />
                        
                        <div className="text-center mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B4C] mb-3">Enquiry Form</h2>
                            <p className="text-gray-500">Please fill out the details below and our team will get in touch with you.</p>
                        </div>

                        <FranchiseApplicationForm />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
