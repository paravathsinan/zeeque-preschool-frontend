import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Preschool in Kerala | ZeeQue Islamic Montessori — Admissions Open 2026",
  description: "Looking for the best preschool in Kerala? ZeeQue Islamic Montessori offers joyful, value-based early childhood education for children aged 3–6. 152+ branches. Affordable fees. Enquire now for 2026 admissions.",
  openGraph: {
    title: "Best Preschool in Kerala | ZeeQue Islamic Montessori — Admissions Open 2026",
    description: "Give your child the best start in life. ZeeQue Preschool combines Islamic values with Montessori education for children aged 3–6. 152+ branches across Kerala. Affordable fees. Enquire today.",
    images: [{ url: "/images/gallery/page-title.jpg", width: 1200, height: 630, alt: "Happy children in a classroom at ZeeQue Preschool Kerala" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Preschool in Kerala | ZeeQue Islamic Montessori — Admissions Open 2026",
    description: "Give your child the best start in life. ZeeQue Preschool — Islamic Montessori education for children aged 3–6. 152+ branches. Affordable preschool fees. Enquire now.",
    images: ["/images/gallery/page-title.jpg"],
  },
};

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WeOffer from "@/components/WeOffer";
import Curriculum from "@/components/Curriculum";
import OurFeatures from "@/components/OurFeatures";
import StoriesOfChange from "@/components/StoriesOfChange";
import ChooseNextStep from "@/components/ChooseNextStep";
import NewsAndEvents from "@/components/NewsAndEvents";
import Gallery from "@/components/Gallery";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-body selection:bg-[#FFCB05] selection:text-[#222] relative overflow-hidden">
      {/* Navbar */}
      <div className="w-full relative z-50">
        <Navbar />
      </div>

      <Hero />
      <WeOffer />
      <Curriculum />
      <OurFeatures />
      <StoriesOfChange />
      <StatsSection />
      <ChooseNextStep />
      <NewsAndEvents />
      <Gallery />
      <Footer />
    </main>
  );
}
