import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ChooseNextStep from "@/components/ChooseNextStep";
import WhoWeAre from "@/components/WhoWeAre";
import OurFeatures from "@/components/OurFeatures";
import StoriesOfChange from "@/components/StoriesOfChange";
import NewsAndEvents from "@/components/NewsAndEvents";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fffcf2] to-[#faeed1] dark:from-slate-900 dark:to-slate-950 font-body selection:bg-secondary selection:text-white relative overflow-hidden transition-colors duration-300">
      {/* Floating Header Container */}
      <div className="w-full relative z-50">
        {/* Full-width Top Header */}
        <div className="hidden lg:block w-full bg-white dark:bg-slate-800 border-b border-dashed border-gray-200 dark:border-slate-700 transition-colors duration-300">
          <TopHeader />
        </div>

        {/* Constrained Navbar */}
        <div className="max-w-[1140px] mx-auto bg-white dark:bg-slate-800 rounded-b-[40px] shadow-sm border border-gray-100 dark:border-slate-700 px-4 xl:px-8 transition-colors duration-300">
          <Navbar />
        </div>
      </div>

      <Hero />
      <ChooseNextStep />
      <WhoWeAre />
      <OurFeatures />
      <StoriesOfChange />
      <NewsAndEvents />
      <Gallery />
      <Footer />
    </main>
  );
}
