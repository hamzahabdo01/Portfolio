import { motion } from 'framer-motion';
import { Github, Linkedin, Dribbble, User, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-picture.jpg';

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Dribbble, href: 'https://dribbble.com', label: 'Dribbble' },
    { icon: User, href: 'https://behance.net', label: 'Behance' },
    { icon: Briefcase, href: 'https://fiverr.com', label: 'Fiverr' },
  ];

  const testimonialAvatars = [
    'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-50"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold"
              >
                <span className="block text-foreground">Joshi Tushar</span>
                <span className="block gradient-text">Full Stack Developer</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
              >
                My goal is to write clean, maintainable code that enhances the development 
                process and makes coding enjoyable through structured and thoughtful practices.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="gradient-primary text-white font-semibold px-8 py-3 rounded-lg hover:shadow-glow transition-all duration-300"
              >
                View Portfolio
              </Button>
            </motion.div>
            
            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-4"
            >
              <p className="text-muted-foreground italic">
                "I have worked with over 25 Budsaye teams"
              </p>
              <div className="flex items-center space-x-2">
                {testimonialAvatars.map((avatar, index) => (
                  <motion.img
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    src={avatar}
                    alt="Team member"
                    className="w-10 h-10 rounded-full border-2 border-border hover:border-primary transition-colors duration-200"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right side - Profile Image & Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col items-center space-y-8"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="relative"
            >
              <div className="w-80 h-80 rounded-full gradient-border p-1 animate-glow">
                <img
                  src={profileImage}
                  alt="Tushar Joshi"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
              />
            </motion.div>
            
            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:shadow-primary transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-foreground hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;