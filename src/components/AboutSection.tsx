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
                I'm a final-year B.Tech Computer Science & Engineering (AI & ML) student with a deep passion for building intelligent web applications that make a real impact.
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
