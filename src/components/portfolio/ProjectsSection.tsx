import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import photo1 from '@/assets/photo_2024-11-13_15-23-00.jpg';
import profilePicture from '@/assets/profile-picture.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution built with Angular and Node.js, featuring real-time inventory management, payment integration, and advanced analytics.',
      techStack: ['Angular', 'Node.js', 'MongoDB', 'Express.js', 'Stripe API'],
      image: photo1,
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates, team collaboration features, and comprehensive reporting dashboard.',
      techStack: ['Ionic', 'PHP CodeIgniter', 'MySQL', 'Socket.io'],
      image: profilePicture,
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Healthcare Management System',
      description: 'Comprehensive healthcare platform for patient management, appointment scheduling, and medical records with HIPAA compliance.',
      techStack: ['Angular', 'Node.js', 'PostgreSQL', 'Docker'],
      image: photo1,
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing some of my recent work and the technologies I've used to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-card hover:scale-105 h-full flex flex-col">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-skill-card border border-skill-border rounded text-xs text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-border hover:border-primary hover:bg-primary/10"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border hover:border-primary hover:bg-primary/10"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
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

export default ProjectsSection;