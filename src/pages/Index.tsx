import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import ProblemSolutionSection from "@/components/portfolio/ProblemSolutionSection";
import CaseStudiesSection from "@/components/portfolio/CaseStudiesSection";
import ServicesSection from "@/components/portfolio/ServicesSection";
import ProcessSection from "@/components/portfolio/ProcessSection";
import CTASection from "@/components/portfolio/CTASection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <div className="noise" />
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <CaseStudiesSection />
        <ServicesSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
