import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { User, Globe, Phone, Award, Users, Languages } from 'lucide-react';

const AboutSection = () => {
  const personalInfo = [
    { icon: User, label: 'Name', value: 'Hamzah Abdo Ahmed' },
    { icon: Globe, label: 'Nationality', value: 'Yemeni/Ethiopian' },
    { icon: Phone, label: 'Phone', value: '(+251) 991847935' },
    { icon: Award, label: 'Experience', value: '2+ Years' },
    { icon: Users, label: 'Freelance', value: 'Available' },
    { icon: Languages, label: 'Language', value: 'Arabic / English / Amharic' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Hello! I'm Hamzah Abdo, a full-stack developer with nearly 3 years of experience in building 
            scalable applications. I specialize in React, Supabase, Firebase, and Node.js. 
            Committed to continuous learning, I prioritize success and customer satisfaction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-card hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-skill-card rounded-lg">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">
                        {info.label}
                      </p>
                      <p className="text-foreground font-semibold">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;