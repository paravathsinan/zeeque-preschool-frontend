import type { Metadata } from "next";
import TopHeader from "@/components/TopHeader";

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
import ChooseNextStep from "@/components/ChooseNextStep";
import WhoWeAre from "@/components/WhoWeAre";
import OurFeatures from "@/components/OurFeatures";
import StoriesOfChange from "@/components/StoriesOfChange";
import NewsAndEvents from "@/components/NewsAndEvents";
import Gallery from "@/components/Gallery";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 font-body selection:bg-secondary selection:text-white relative overflow-hidden transition-colors duration-300">
      {/* Floating Header Container */}
      <div className="w-full relative z-50">
        {/* Full-width Top Header */}
        <div className="hidden lg:block w-full bg-white dark:bg-[#020618] transition-colors duration-300">
          <TopHeader />
        </div>

        {/* Constrained Navbar Wrapper with Hero Background Color */}
        <div className="w-full bg-[#FFE7B1] dark:bg-[#0B1023] transition-colors duration-300">
          {/* Constrained Navbar */}
          <div className="max-w-[1140px] mx-auto relative z-10 transition-colors duration-300">
            <Navbar />
          </div>
        </div>
      </div>

      <Hero />
      <ChooseNextStep />
      <WhoWeAre />
      <OurFeatures />
      <StoriesOfChange />
      <NewsAndEvents />
      <Gallery />
      <StatsSection />
      <Footer />
    </main>
  );
}
