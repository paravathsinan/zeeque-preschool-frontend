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
    <main className="min-h-screen bg-white dark:bg-slate-950 font-body selection:bg-secondary selection:text-white relative overflow-hidden transition-colors duration-300">
      {/* Floating Header Container */}
      <div className="w-full relative z-50">
        {/* Full-width Top Header */}
        <div className="hidden lg:block w-full bg-white dark:bg-slate-900 border-b border-dashed border-gray-200 dark:border-slate-700 transition-colors duration-300">
          <TopHeader />
        </div>

        {/* Constrained Navbar Wrapper with Hero Background Color */}
        <div className="w-full bg-[#FFE7B1] dark:bg-slate-900 transition-colors duration-300">
          {/* Constrained Navbar */}
          <div className="max-w-[1140px] mx-auto bg-white dark:bg-slate-900 rounded-b-[40px] shadow-sm border border-gray-100 dark:border-slate-800 px-4 xl:px-8 transition-colors duration-300">
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
      <Footer />
    </main>
  );
}
