import { Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-white/5 bg-background text-foreground">
      <div className="container-tight section-padding py-0">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <div className="text-2xl font-display font-bold mb-2">
              Hamzah <span className="gradient-text">Abdo</span>
            </div>
            <p className="text-white/40 text-sm max-w-xs text-balance">
              Full-stack developer for startups. Building high-performance apps that scale and deliver results.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/hamzahabdo01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all text-white/60 hover:text-white"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:info.hamzaabdo@gmail.com" 
              className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all text-white/60 hover:text-white"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-white/20 uppercase tracking-widest">
          <div>© 2025 Hamzah Abdo. All Rights Reserved.</div>
          <div className="flex items-center gap-8">
            <a href="#services" className="hover:text-white/40 transition-colors">Services</a>
            <a href="#process" className="hover:text-white/40 transition-colors">Process</a>
            <a href="#case-studies" className="hover:text-white/40 transition-colors">Work</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;