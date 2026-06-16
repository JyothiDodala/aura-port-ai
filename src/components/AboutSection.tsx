import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Code2, Award, Layers } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";

const stats = [
  { icon: Layers, label: "Projects Completed", value: 5 },
  { icon: Code2, label: "Technologies Known", value: 12 },
  { icon: Award, label: "Certifications", value: 6 },
];

const AnimatedCounter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = Math.ceil(target / 40);
          const interval = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(start);
            }
          }, 30);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}+</span>;
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-md mx-auto">
            Get to know me better
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal direction="left">
            <div className="glass rounded-2xl p-8 neon-glow aspect-square max-w-sm mx-auto flex items-center justify-center overflow-hidden">
              <img
                src={profileImg}
                alt="Jyothi Dodali"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="glass rounded-2xl p-8">
              <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                A passionate developer building the future
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
                I'm a B.Tech Computer Science & Engineering (AI & ML) graduate student with a deep passion for building intelligent web applications that make a real impact.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
                My journey spans across Full Stack Development, Artificial Intelligence, and Problem Solving. I love turning complex problems into elegant, scalable solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge through blog posts.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Education Timeline */}
        <ScrollReveal>
          <div className="mb-20 max-w-3xl mx-auto">
            <h4 className="font-display text-xl font-bold mb-8 text-center text-foreground">
              Education <span className="gradient-text">Timeline</span>
            </h4>
            <div className="relative border-l border-primary/20 pl-6 md:pl-8 space-y-10 ml-4 md:ml-0">
              {/* Graduate Program */}
              <div className="relative">
                <div className="absolute -left-[31px] md:-left-[35px] top-1.5 w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary border-4 border-background shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                  <h5 className="font-display text-lg font-bold text-foreground">
                    Graduate Program (M.S. / M.Tech)
                  </h5>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit">
                    2025 - Present
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-medium mt-1">
                  Computer Science & Engineering (AI & ML)
                </p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Focusing on advanced neural networks, intelligent web applications, large-scale systems, and interactive UI engineering with cutting-edge tech stacks.
                </p>
              </div>

              {/* Undergraduate Program */}
              <div className="relative">
                <div className="absolute -left-[31px] md:-left-[35px] top-1.5 w-4 h-4 md:w-5 md:h-5 rounded-full bg-secondary border-4 border-background" />
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                  <h5 className="font-display text-lg font-bold text-foreground/90">
                    Bachelor of Technology (B.Tech)
                  </h5>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border w-fit">
                    2021 - 2025
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-medium mt-1">
                  Computer Science & Engineering (AI & ML)
                </p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Acquired extensive hands-on experience in full-stack web development and AI pipelines. Built foundational mastery in data structures, algorithms, and machine learning models.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100}>
              <div className="glass rounded-xl p-6 text-center hover:neon-glow transition-all duration-300 group cursor-default">
                <stat.icon className="mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" size={28} />
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                  <AnimatedCounter target={stat.value} />
                </div>
                <p className="text-muted-foreground text-xs md:text-sm">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
