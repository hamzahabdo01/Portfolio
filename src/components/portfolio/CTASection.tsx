import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div ref={ref} className="container-tight fade-up relative z-10">
        <div className="glass p-10 md:p-16 rounded-[40px] text-center max-w-4xl mx-auto border-white/10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Ready to <span className="gradient-text">scale your startup?</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Don't let technical hurdles hold you back. Let's build something extraordinary that solves real business problems and drives revenue.
          </p>
          
          <div className="flex items-center justify-center">
            <a 
              href="mailto:info.hamzaabdo@gmail.com"
              className="btn-primary flex items-center gap-3 w-full sm:w-auto"
            >
              Book Your Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-12 pt-12 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-sm text-white/40">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Currently accepting 1 new project</span>
            </div>
            <span>•</span>
            <span>Est. Delivery: 4-6 weeks</span>
            <span>•</span>
            <span>100% Reliability Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
