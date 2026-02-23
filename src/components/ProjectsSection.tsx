import { ExternalLink, Github } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "MERN Job Tracker",
    description: "A full-stack job application tracking system built with the MERN stack. Features include authentication, job CRUD operations, and insightful dashboards.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "#",
    live: "#",
  },
  {
    title: "Skin Disease Detection",
    description: "Deep learning model to classify skin diseases from images using CNNs. Achieved high accuracy with transfer learning on dermatological datasets.",
    tags: ["Python", "TensorFlow", "CNN", "Deep Learning"],
    github: "#",
    live: "#",
  },
  {
    title: "Plant Disease Identification",
    description: "CNN-based system to identify plant diseases from leaf images, helping farmers detect issues early and improve crop yield.",
    tags: ["Python", "Keras", "CNN", "OpenCV"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description: "A futuristic, glassmorphism-themed developer portfolio built with React, TypeScript, and Tailwind CSS with smooth animations.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-md mx-auto">
            Some things I've built
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 100}>
              <div className="glass rounded-2xl p-6 md:p-8 group hover:neon-glow hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
