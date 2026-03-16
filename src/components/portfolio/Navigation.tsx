import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const navItems = [
  { name: 'Results', id: 'case-studies' },
  { name: 'Services', id: 'services' },
  { name: 'Process', id: 'process' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'py-4 bg-background/80 backdrop-blur-xl border-b border-white/5' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container-tight px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
          className="text-xl font-bold font-display group"
        >
          Hamzah <span className="gradient-text">Abdo</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {item.name}
            </button>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            className="flex items-center gap-2 text-sm font-bold bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 rounded-full transition-all group"
          >
            Work With Me
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white/80"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-2xl transition-transform duration-500 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="text-2xl font-bold text-white/80"
            >
              {item.name}
            </button>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            className="w-full text-center py-4 bg-primary rounded-2xl text-black font-bold text-xl"
          >
            Start a Project
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;