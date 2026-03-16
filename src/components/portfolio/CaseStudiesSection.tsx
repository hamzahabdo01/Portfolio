import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowUpRight, Heart, Zap, Globe, Building2 } from "lucide-react";
import arifImage from "../../assets/ArifSource.png";
import hudaImage from "../../assets/Huda.png";
import wbsImage from "../../assets/WBS.png";

const projects = [
  {
    title: "ArifSource - B2B Marketplace",
    client: "Arif Global",
    link: "https://arifsource.com",
    problem: "Suppliers and buyers struggled with a fragmented procurement process and lack of transparency.",
    solution: "A robust B2B ecosystem with real-time RFQ management, supplier verification, and seamless communication.",
    result: "Simplified procurement for 500+ businesses and reduced order processing time by 40%.",
    image: arifImage,
    tags: ["Laravel", "Vue.js", "Pusher", "MySQL"],
    icon: <Globe className="w-5 h-5 text-blue-400" />
  },
  {
    title: "Huda Engineering PLC",
    client: "Construction Leader",
    link: "https://hudaengineering.com",
    problem: "The Ethiopian construction industry faced challenges with quality and reliability in large-scale developments.",
    solution: "A digital foundation for a firm delivering premium residential and commercial projects with technical skill and local expertise.",
    result: "Supported 50+ successful projects with zero litigation, building lasting communities across Addis Ababa.",
    image: hudaImage,
    tags: ["Supabase", "React", "TailwindCSS", "Engineering"],
    icon: <Building2 className="w-5 h-5 text-amber-400" />
  },
  {
    title: "Women Beyond Silence (WBS)",
    client: "Feminist Initiative",
    link: "https://womenbeyondsilence.com",
    problem: "Communities affected by war, displacement, and climate crisis lacked a platform to amplify their lived experiences and advocate for change.",
    solution: "A collective digital space centering gender justice and mental health, designed to facilitate healing and international advocacy.",
    result: "Created a global platform for transformative change, amplifying marginalized voices on local and international levels.",
    image: wbsImage,
    tags: ["React", "Framer Motion", "Social Impact", "UX Design"],
    icon: <Heart className="w-5 h-5 text-pink-500" />
  }
];

const CaseStudiesSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="case-studies" className="section-padding bg-black/20">
      <div className="container-tight">
        <div ref={ref} className="fade-up mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Real Results for <span className="gradient-text">every sector</span>
          </h2>
          <p className="text-white/50 max-w-2xl leading-relaxed">
            From industrial engineering to social justice initiatives, I build high-impact solutions that 
            transform industries and empower communities through technology.
          </p>
        </div>

        <div className="grid gap-16 lg:gap-24">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
            >
              <div className="w-full lg:w-1/2 group relative cursor-pointer">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="object-cover w-full h-full transition duration-700 group-hover:scale-105"
                    />
                  </div>
                </a>
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/40">
                  {project.client}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                  {project.title}
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/5 transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-white/60" />
                  </a>
                </h3>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-red-400/80 font-bold block mb-1">Vision</span>
                    <p className="text-white/60 leading-relaxed text-sm">
                      {index === 1 
                        ? "Elevating Ethiopia's construction industry through innovation, quality, and a commitment to zero litigation across residential and commercial sectors." 
                        : (index === 2 ? "Communities affected by war, displacement, and climate crisis lacked a platform to amplify their lived experiences and advocate for change." : project.problem)}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-emerald-400/80 font-bold block mb-1">Execution</span>
                    <p className="text-white/60 leading-relaxed text-sm">
                      {index === 1 
                        ? "Leveraging technical skill and deep local understanding to build communities, lasting relationships, and futures that endure." 
                        : (index === 2 ? "A collective digital space centering gender justice and mental health, designed to facilitate healing and international advocacy." : project.solution)}
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 shadow-glow relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    {project.icon}
                  </div>
                  <span className="text-xs uppercase tracking-wider text-primary font-bold block mb-2">Impact</span>
                  <p className="text-xl md:text-2xl font-bold text-white leading-tight">
                    {project.result}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded bg-white/5 border border-white/10 text-white/30 font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
