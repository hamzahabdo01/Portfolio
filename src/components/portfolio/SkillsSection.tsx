import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Code, 
  Palette, 
  Server, 
  Database, 
  Globe, 
  Layers 
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Layers,
      title: 'Tech Stack',
      color: 'text-blue-400',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Ionic', 'Express', 'Node.js', '.NET', 'MongoDB', 'MySQL', 'PHP CodeIgniter']
    },
    {
      icon: Code,
      title: 'Front-End Side',
      color: 'text-green-400',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Ionic', 'Express', 'CodeIgniter']
    },
    {
      icon: Server,
      title: 'Back-End Side',
      color: 'text-orange-400',
      skills: ['PHP CodeIgniter', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Linux', 'Apache', 'Nginx', 'Docker', 'Git', 'RESTful API']
    },
    {
      icon: Palette,
      title: 'UI & Styling',
      color: 'text-purple-400',
      skills: ['HTML', 'CSS', 'Sass', 'jQuery', 'Bootstrap', 'Tailwind CSS', 'Material UI', 'Media queries', 'Figma', 'Grid', 'Animations (GSAP, Anime.js)']
    },
    {
      icon: Database,
      title: 'Database',
      color: 'text-red-400',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server', 'MS Access', 'Schema design', 'indexing', 'normalization', 'entity-relationship modeling', 'ERD', 'document-based modeling']
    },
    {
      icon: Globe,
      title: 'REST API / APIs',
      color: 'text-cyan-400',
      skills: ['Design', 'Documentation', 'Express', 'JWT', 'OAuth', 'Postman', 'Swagger', 'Rate Limiting', 'Validation', 'CORS', 'HTTPS', 'Third-party API integration']
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-skill-card border-skill-border hover:border-primary transition-all duration-300 hover:shadow-card hover:scale-105 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-card rounded-lg">
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-card border border-border rounded-full text-sm text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-200"
                      >
                        {skill}
                      </motion.span>
                    ))}
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

export default SkillsSection;