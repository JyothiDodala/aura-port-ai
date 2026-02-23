import { Download } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-2xl">
        <ScrollReveal>
          <div className="glass rounded-2xl p-8 md:p-12 text-center neon-glow">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Resume</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
              Interested in working together? Download my resume to learn more about my experience, skills, and education.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-primary-foreground gradient-bg hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/20 gradient-border"
            >
              <Download size={20} />
              Download Resume (PDF)
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ResumeSection;
