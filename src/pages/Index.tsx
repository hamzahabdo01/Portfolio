import BioSection from "@/components/portfolio/BioSection";
import HeroSection from "@/components/portfolio/HeroSection";
import Navigation from "@/components/portfolio/Navigation";
import WorkSection from "@/components/portfolio/WorkSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div
      id="page-scroll"
      className="overflow-y-auto overflow-x-hidden overscroll-y-contain lg:h-dvh lg:snap-y lg:snap-mandatory lg:scroll-smooth"
    >
      <Navigation />
      <HeroSection />
      <BioSection />
      <WorkSection />
      <Footer />
    </div>
  );
};

export default Index;
