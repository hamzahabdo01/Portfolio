import BioSection from "@/components/portfolio/BioSection";
import HeroSection from "@/components/portfolio/HeroSection";
import Navigation from "@/components/portfolio/Navigation";
import WorkSection from "@/components/portfolio/WorkSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div
      id="page-scroll"
      className="h-dvh snap-y snap-mandatory overflow-y-auto overflow-x-hidden scroll-smooth overscroll-y-contain"
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
