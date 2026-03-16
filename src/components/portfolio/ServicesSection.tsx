import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Rocket, Layers, Layout, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "MVP Development",
    description: "Launch your product in weeks, not months. High-speed, high-quality builds focused on your core value proposition.",
    outcome: "Faster time-to-market and immediate user feedback.",
    icon: <Rocket className="w-6 h-6 text-primary" />,
    tags: ["React", "FastAPI", "Firebase", "Stripe"]
  },
  {
    title: "Scaling & Optimization",
    description: "Is your app struggling with traffic? I optimize database queries, frontend performance, and infrastructure for global scale.",
    outcome: "Reduced latency, lower server costs, and happy users.",
    icon: <Layers className="w-6 h-6 text-secondary" />,
    tags: ["AWS", "Docker", "Caching", "Performance Audit"]
  },
  {
    title: "UX/UI Refactoring",
    description: "I transform outdated or confusing interfaces into high-converting products with modern design systems and intuitive flows.",
    outcome: "Higher retention rates and increased user satisfaction.",
    icon: <Layout className="w-6 h-6 text-pink-500" />,
    tags: ["Figma", "TailwindCSS", "Framer Motion", "Accessibility"]
  },
  {
    title: "CTO as a Service",
    description: "Technical leadership for non-technical founders. Architecture planning, hiring advice, and long-term strategy.",
    outcome: "Solid technical foundation and zero costly mistakes.",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    tags: ["Architecture", "Strategy", "Security", "Code Review"]
  }
];

const ServicesSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="services" className="section-padding relative">
      <div className="container-tight">
        <div ref={ref} className="fade-up text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">
            What I Offer
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Services designed to <span className="gradient-text">grow your business</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ring-1 ring-white/10 group-hover:ring-primary/40 group-hover:bg-primary/5 transition-all duration-500">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                {service.title}
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-40 transition-opacity" />
              </h3>
              
              <p className="text-white/50 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="py-4 px-5 rounded-xl bg-black/40 border border-white/5 mb-6">
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold block mb-1">Key Outcome</span>
                <p className="text-sm text-white/80 font-medium">
                  {service.outcome}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] text-white/40 font-mono">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
