import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Search, PenTool, Code, CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Discovery & Strategy",
    description: "We start by identifying your business goals, target audience, and the technical scope of the project.",
    icon: <Search className="w-6 h-6 text-primary" />,
    color: "bg-primary/20"
  },
  {
    title: "UX Design & Architecture",
    description: "I build the blueprint of your app, ensuring intuitive user flows and a scalable technical foundation.",
    icon: <PenTool className="w-6 h-6 text-secondary" />,
    color: "bg-secondary/20"
  },
  {
    title: "Development & Testing",
    description: "I write clean, high-performance code and conduct rigorous testing to ensure your app is rock-solid.",
    icon: <Code className="w-6 h-6 text-emerald-400" />,
    color: "bg-emerald-400/20"
  },
  {
    title: "Launch & Support",
    description: "I help you deploy your app and provide the technical support needed to ensure a successful launch.",
    icon: <CheckCircle className="w-6 h-6 text-pink-500" />,
    color: "bg-pink-500/20"
  }
];

const ProcessSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="process" className="section-padding bg-black/40">
      <div className="container-tight">
        <div ref={ref} className="fade-up text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            A simple, <span className="gradient-text">stress-free process</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center mb-6`}>
                {step.icon}
              </div>
              
              <div className="absolute top-8 right-8 text-4xl font-display font-bold text-white/[0.05]">
                0{index + 1}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {step.title}
              </h3>
              
              <p className="text-white/40 text-sm leading-relaxed">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[20%] -right-4 w-8 h-px bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
