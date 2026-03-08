import { ExternalLink, Github } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "InterviewAI Job Tracker",
    description: "A smart job application tracker built with React, TypeScript, and Tailwind CSS. Helps users manage and track their job applications efficiently.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/JyothiDodala/interviewai-job-tracker",
  },
  {
    title: "Face Recognition Attendance System",
    description: "Built an automated attendance system using face recognition. Implemented image processing using OpenCV and Python.",
    tags: ["Python", "OpenCV", "Face Recognition"],
    github: "https://github.com/JyothiDodala/FaceRecognitionAttendance",
  },
  {
    title: "Contact Management System",
    description: "A Python GUI application for storing and managing contact details. Supports CRUD operations such as adding, viewing, updating, and deleting contacts.",
    tags: ["Python", "GUI", "CRUD"],
    github: "https://github.com/JyothiDodala/Contact-Management-System",
  },
  {
    title: "Plant Disease Detection using Deep Learning",
    description: "Plant disease identification and pesticide recommendation using CNN. Applied image preprocessing and model training.",
    tags: ["Python", "Deep Learning", "CNN", "TensorFlow"],
    github: "https://github.com/JyothiDodala/PlantDiseaseDetection",
  },
  {
    title: "House Price Prediction using ML",
    description: "Implemented regression model for house price prediction. Performed data preprocessing and evaluation.",
    tags: ["Python", "Machine Learning", "Regression"],
    github: "https://github.com/JyothiDodala/House-Price-Prediction-using-Machine-Learning",
  },
  {
    title: "Spam Email Detection",
    description: "Detects spam and ham SMS messages using Natural Language Processing and Naive Bayes classifier.",
    tags: ["Python", "NLP", "Machine Learning"],
    github: "https://github.com/JyothiDodala/spam-email-detection",
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} /> Code
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
