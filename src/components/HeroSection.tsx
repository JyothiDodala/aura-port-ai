import { ArrowDown, ExternalLink } from "lucide-react";
import TypingEffect from "./TypingEffect";
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto text-center relative z-10">
        <ScrollReveal>
          <p className="text-primary font-mono text-sm md:text-base mb-4 tracking-widest uppercase">
            Welcome to my portfolio
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text text-glow">Jyothi Dodali</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h2 className="font-display text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6">
            Full Stack Developer | AI & ML Enthusiast
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-4 text-sm md:text-base leading-relaxed">
            I build scalable web applications and intelligent systems that solve real-world problems using modern technologies.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="mb-10 text-lg">
            <span className="text-muted-foreground mr-2">I work with</span>
            <TypingEffect />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={500}>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="gradient-bg px-8 py-3 rounded-lg font-semibold text-primary-foreground hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/20 text-sm md:text-base flex items-center gap-2"
              onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
            >
              View Projects <ExternalLink size={16} />
            </a>
            <a
              href="#resume"
              className="glass neon-border px-8 py-3 rounded-lg font-semibold text-foreground hover:bg-secondary/50 transition-all duration-300 text-sm md:text-base"
              onClick={(e) => { e.preventDefault(); document.querySelector("#resume")?.scrollIntoView({ behavior: "smooth" }); }}
            >
              Download Resume
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={700}>
          <div className="mt-16 animate-float">
            <ArrowDown className="mx-auto text-muted-foreground" size={24} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
