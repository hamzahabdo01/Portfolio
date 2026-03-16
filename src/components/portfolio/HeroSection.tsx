import { ArrowRight, CheckCircle } from "lucide-react";
import profilePic from "../../assets/photo_2025-10-31_16-24-00 (1).png";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "3+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[110vh] flex items-center justify-center overflow-hidden py-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[hsl(245_80%_67%/0.08)] blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[hsl(280_70%_55%/0.06)] blur-[100px]" />
      </div>

      <div className="container-tight relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column: Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              I build apps that help startups{" "}
              <span className="gradient-text">scale fast</span> and make money
            </h1>


            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-16">
              <a href="#contact" className="btn-primary inline-flex items-center gap-2 group">
                Get Your App Built
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#case-studies" className="btn-secondary inline-flex items-center gap-2">
                See My Work
              </a>
            </div>

            {/* Social proof stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold font-display gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/40 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Profile Picture */}
          <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 w-full max-w-[450px] lg:max-w-none">
            <div className="relative group w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[400px]">
              {/* Glow backing */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

              <div className="relative p-2 sm:p-3 rounded-[32px] sm:rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-sm shadow-card hover:bg-white/10 transition-colors duration-500 overflow-hidden">
                <img
                  src={profilePic}
                  alt="Hamzah Abdo Profile"
                  className="w-full aspect-square object-cover rounded-[24px] sm:rounded-[32px] shadow-2xl transition duration-500 group-hover:scale-[1.02]"
                />

                {/* Trust Badge overlay */}
                <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 flex items-center gap-2 py-1.5 px-3 sm:py-2 sm:px-4 rounded-full bg-background/80 border border-white/10 backdrop-blur-md shadow-lg">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/80 whitespace-nowrap">Available for Hire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
